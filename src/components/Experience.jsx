import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data/portfolio';
import './Experience.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} className="exp-section">
      <div className="container">
        <motion.p className="section-label" variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Experience
        </motion.p>
        <motion.h2 className="section-title" variants={fadeUp(0.08)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Where I've Worked
        </motion.h2>
        <div className="divider" style={{ marginBottom: 56 }} />

        <div className="exp-timeline">
          {experience.map((e, i) => (
            <motion.div
              key={i}
              className="exp-item"
              variants={fadeUp(0.1 + i * 0.12)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              {/* Dot + line */}
              <div className="exp-dot-col">
                <div className="exp-dot">
                  <div className="exp-dot-inner" />
                </div>
                {i < experience.length - 1 && <div className="exp-line" />}
              </div>

              {/* Content */}
              <div className="exp-content glass">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{e.title}</h3>
                    <p className="exp-org">{e.org}</p>
                  </div>
                  <span className="badge badge-primary exp-period">{e.period}</span>
                </div>
                <ul className="exp-bullets">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
