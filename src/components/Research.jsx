import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { research } from '../data/portfolio';
import { RiDnaLine, RiExternalLinkLine } from 'react-icons/ri';
import './Research.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="research" ref={ref} className="research-section">
      <div className="research-bg-orb orb" />
      <div className="container">
        <motion.p className="section-label" variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Research
        </motion.p>
        <motion.h2 className="section-title" variants={fadeUp(0.08)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Published Work
        </motion.h2>
        <div className="divider" style={{ marginBottom: 48 }} />

        {research.map((r, i) => (
          <motion.div
            key={i}
            className="research-card glass"
            variants={fadeUp(0.16)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {/* Top row */}
            <div className="rc-top">
              <div className="rc-icon">
                <RiDnaLine size={22} />
              </div>
              <div className="rc-badges">
                <span className="badge badge-gold">{r.status}</span>
                <span className="badge badge-primary">Paper ID: {r.paperId}</span>
              </div>
            </div>

            <h3 className="rc-title">{r.title}</h3>

            <div className="rc-meta">
              <span className="rc-venue">{r.venue}</span>
              <span className="rc-sep">·</span>
              <span className="rc-track">Track: {r.track}</span>
            </div>

            <ul className="rc-highlights">
              {r.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>

            <div className="rc-footer">
              <p className="rc-authors">
                <span className="rc-authors-label">Authors:</span>{' '}
                {r.authors.map((a, j) => (
                  <span key={j} className={a === 'Majharul Islam' ? 'rc-author-me' : ''}>
                    {a}{j < r.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
