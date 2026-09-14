import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolio';
import './Skills.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] } },
});

const categoryIcon = {
  'Languages': '{ }',
  'Frameworks & Libraries': '⬡',
  'Data & Research': '◈',
  'Tools & Platforms': '⚙',
  'Design': '◉',
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Skills
        </motion.p>
        <motion.h2 className="section-title" variants={fadeUp(0.08)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Technical Expertise
        </motion.h2>
        <div className="divider" style={{ marginBottom: 52 }} />

        <div className="skills-grid">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="skill-group glass"
              variants={fadeUp(0.08 + i * 0.07)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <div className="skill-group-header">
                <span className="skill-group-icon">{categoryIcon[group.category] || '▸'}</span>
                <h3 className="skill-group-name">{group.category}</h3>
              </div>
              <div className="skill-tags">
                {group.items.map(item => (
                  <motion.span
                    key={item}
                    className="skill-tag"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(99,102,241,0.4)', color: 'var(--text)' }}
                    transition={{ duration: 0.15 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
