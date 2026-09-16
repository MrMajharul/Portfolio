import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'MrMajharul';

// Fallback values if API fails
const FALLBACK_STATS = [
  { label: "Repositories", value: "24+" },
  { label: "Years Coding", value: "3+" },
  { label: "Contributions", value: "329+" },
  { label: "Live Projects", value: "3" },
];

export default function useGitHubStats() {
  const [stats, setStats] = useState(FALLBACK_STATS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchStats() {
      try {
        // 1. Fetch basic user data (repos, account age)
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userRes.ok) throw new Error('GitHub API failed');
        const userData = await userRes.json();

        const repos = userData.public_repos || 0;
        const createdYear = new Date(userData.created_at).getFullYear();
        const yearsCoding = new Date().getFullYear() - createdYear;

        // 2. Fetch contributions from GitHub contributions API
        let totalContributions = 0;
        try {
          const contribRes = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
          );
          if (contribRes.ok) {
            const contribData = await contribRes.json();
            totalContributions = contribData.total?.lastYear || 0;
          }
        } catch {
          // If contributions API fails, try counting from events
          try {
            const eventsRes = await fetch(
              `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100`
            );
            if (eventsRes.ok) {
              const events = await eventsRes.json();
              totalContributions = events.length;
            }
          } catch {
            totalContributions = 329; // ultimate fallback
          }
        }

        if (!cancelled) {
          setStats([
            { label: "Repositories", value: `${repos}+` },
            { label: "Years Coding", value: `${yearsCoding}+` },
            { label: "Contributions", value: `${totalContributions}+` },
            { label: "Live Projects", value: "3" },
          ]);
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
        // Keep fallback values
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchStats();
    return () => { cancelled = true; };
  }, []);

  return { stats, loading };
}
