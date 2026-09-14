import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/portfolio';
import { RiGithubLine, RiExternalLinkLine, RiStarLine } from 'react-icons/ri';
import './Projects.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] } },
});

const badgeClass = (badge) => {
  if (badge === 'Featured') return 'badge-primary';
  if (badge === 'Live')     return 'badge-green';
  return 'badge-cyan';
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="proj-section">
      <div className="proj-bg-orb orb" />
      <div className="container">
        <motion.p className="section-label" variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Projects
        </motion.p>
        <motion.h2 className="section-title" variants={fadeUp(0.08)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Things I've Built
        </motion.h2>
        <motion.p className="section-sub" variants={fadeUp(0.14)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          A selection of live platforms, open-source tools, and academic experiments.
        </motion.p>
        <div className="divider" style={{ marginBottom: 52 }} />

        <div className="proj-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              className={`proj-card glass ${p.featured ? 'proj-featured' : ''}`}
              variants={fadeUp(0.06 * i)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              {/* Card header */}
              <div className="proj-card-top">
                <div className="proj-card-icon">
                  <RiStarLine />
                </div>
                <div className="proj-card-links">
                  {p.github && p.github !== '#' && (
                    <a href={p.github} target="_blank" rel="noopener" aria-label="GitHub" className="proj-link">
                      <RiGithubLine />
                    </a>
                  )}
                  {p.live && p.live !== '#' && (
                    <a href={p.live} target="_blank" rel="noopener" aria-label="Live site" className="proj-link">
                      <RiExternalLinkLine />
                    </a>
                  )}
                </div>
              </div>

              {/* Name + badge */}
              <div className="proj-name-row">
                <h3 className="proj-name">{p.name}</h3>
                {p.badge && <span className={`badge ${badgeClass(p.badge)}`}>{p.badge}</span>}
              </div>

              <p className="proj-desc">{p.description}</p>

              {/* Stack tags */}
              <div className="proj-stack">
                {p.stack.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div className="proj-cta" variants={fadeUp(0.4)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <a href="https://github.com/MrMajharul?tab=repositories" target="_blank" rel="noopener" className="btn btn-ghost">
            <RiGithubLine /> View all 24+ projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
