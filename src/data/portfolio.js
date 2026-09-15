export const personal = {
  name: "Majharul Islam",
  roles: ["Full-Stack Developer", "CS Researcher", "Open Source Contributor", "Grad School Applicant"],
  tagline: "Building research-grade systems and live web platforms.",
  bio: [
    "I'm a final-year Computer Science & Engineering student at Green University of Bangladesh, currently working as an IT Intern at the Dhaka University Research Society (DURS) and serving as Treasurer of the Green University Computer Club (GUCC).",
    "I co-authored a research paper on genomic biomarker validation accepted to IEEE STI 2026. I've built and deployed three live web platforms for university communities, and I'm actively applying for graduate programs and software engineering roles abroad.",
  ],
  email: "majharul.cs@gmail.com",
  phone: "+880 1745716332",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/MrMajharul",
  linkedin: "https://linkedin.com/in/majharul-islam-68945326b/",
  cv: "/cv.html",
  photo: "/majharul-photo.png",
  available: true,
};

export const stats = [
  { label: "Repositories", value: "24+" },
  { label: "Years Coding", value: "3+" },
  { label: "Contributions", value: "329+" },
  { label: "Live Projects", value: "3" },
];

export const research = [
  {
    title: "Circadian Gene Signatures Do Not Replicate for Immunotherapy Response: External Validation Across Three Independent Cohorts",
    venue: "IEEE STI 2026 — 8th International Conference on Sustainable Technologies for Industry 5.0",
    track: "Intelligent Computing",
    paperId: "6557",
    status: "Under Review",
    authors: ["Muaz Ibn Kamal", "Junaira Islam", "Majharul Islam", "Jannathul Maowa Hasi"],
    highlights: [
      "Analyzed high-dimensional genomic and clinical cohort data across three independent patient cohorts.",
      "Ran external statistical validation and EDA to benchmark biomarker reproducibility for cancer immunotherapy response.",
    ],
  },
];

export const experience = [
  {
    title: "IT Intern",
    org: "Dhaka University Research Society (DURS)",
    period: "2026 — Present",
    bullets: [
      "Manage internal digital infrastructure and data documentation supporting academic research projects.",
      "Maintain platforms and automate workflow procedures; provide IT troubleshooting for research events.",
      "Coordinate with researchers to streamline data storage and technical documentation.",
    ],
  },
  {
    title: "Web Developer, Executive Committee",
    org: "Green University Research & Publication Community (GURPC)",
    period: "2026 — Present",
    bullets: [
      "Architect and maintain the official web platform for research publication tracking, event registration, and community outreach.",
      "Ensure responsive design, cross-device performance, and secure data handling for members and authors.",
    ],
  },
  {
    title: "Treasurer · Former Graphics Coordinator & Executive",
    org: "Green University Computer Club (GUCC)",
    period: "2024 — Present",
    bullets: [
      "Oversee financial record-keeping, budget planning, and resource allocation for departmental hackathons.",
      "Led graphic design, branding, and promotional multimedia across digital channels as Graphics Coordinator (2025–2026).",
    ],
  },
];

export const projects = [
  {
    name: "UConnect",
    description:
      "Centralized university community platform connecting students and faculty, with role-based authentication, interactive forums, and optimized SQL queries.",
    stack: ["TypeScript", "React", "Node.js", "SQL", "Docker"],
    github: "https://github.com/MrMajharul/UConnect",
    live: null,
    featured: true,
    badge: "Featured",
  },
  {
    name: "GURPC Research & Publication Portal",
    description:
      "Official platform for the Green University Research & Publication Community — showcases papers, announcements, and events with structured data workflows.",
    stack: ["TypeScript", "JavaScript", "CSS3"],
    github: "#",
    live: "#",
    featured: true,
    badge: "Live",
  },
  {
    name: "JMC Media Club Platform",
    description:
      "Interactive digital portal showcasing student journalism, media productions, and event calendars with continuous deployment on Vercel.",
    stack: ["JavaScript", "Vercel CI/CD"],
    github: "#",
    live: "#",
    featured: true,
    badge: "Live",
  },
  {
    name: "Employee Task Management System",
    description:
      "Full-stack task management platform with JWT authentication, role-based access, Kanban board, real-time notifications, and analytics dashboard.",
    stack: ["Node.js", "Express", "MySQL", "JavaScript"],
    github: "https://github.com/MrMajharul/Employee-Task-Management-System",
    live: null,
    featured: false,
    badge: null,
  },
  {
    name: "Huffman Encoding Simulator",
    description:
      "Interactive simulator implementing Huffman coding algorithm for data compression with binary tree construction visualization.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/MrMajharul/Huffman-Encoding-Simulator",
    live: null,
    featured: false,
    badge: null,
  },
  {
    name: "Hospital Resource Allocation",
    description:
      "Algorithm-based simulator that optimally allocates hospital resources using Greedy and Knapsack algorithms with priority-based allocation.",
    stack: ["HTML", "CSS", "JavaScript", "Chart.js"],
    github: "https://github.com/MrMajharul/Hospital-Resource-Allocation",
    live: null,
    featured: false,
    badge: null,
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3", "Java", "C/C++"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Data & Research",
    items: ["Genomic Data Analysis", "Exploratory Data Analysis", "Statistical Validation", "Research Documentation"],
  },
  {
    category: "Tools & Platforms",
    items: ["Docker", "Git", "GitHub Actions", "Vercel", "Linux CLI", "VS Code"],
  },
  {
    category: "Design",
    items: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma", "Responsive UI/UX"],
  },
];

export const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Green University of Bangladesh",
    period: "2023 — 2027 (Expected)",
    link: "https://cse.green.edu.bd/",
  },
  {
    degree: "Higher Secondary Certificate — Science",
    institution: "Kabi Nazrul Govt. College, Dhaka",
    period: "2020 — 2021",
    link: "https://kabinazrulcollege.gov.bd/",
  },
  {
    degree: "Secondary School Certificate — Science",
    institution: "Teguria High School, Kachua, Chandpur",
    period: "2019 — 2020",
  },
];
