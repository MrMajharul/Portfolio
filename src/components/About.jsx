import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personal, education } from '../data/portfolio';
import { RiGraduationCapLine, RiMapPinLine } from 'react-icons/ri';
import useGitHubStats from '../hooks/useGitHubStats';
import './About.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { stats } = useGitHubStats();

  return (
    <section id="about" ref={ref}>
      <div className="container about-grid">
        {/* Left: bio */}
        <div className="about-left">
          <motion.p className="section-label" variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            About me
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp(0.08)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            Researcher &amp; Builder
          </motion.h2>
          <div className="divider" style={{ marginBottom: 28 }} />

          {personal.bio.map((para, i) => (
            <motion.p
              key={i}
              className="about-para"
              variants={fadeUp(0.14 + i * 0.08)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              {para}
            </motion.p>
          ))}

          <motion.div className="about-meta" variants={fadeUp(0.32)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <span> <RiMapPinLine /> {personal.location} </span>
            <a href="https://green.edu.bd" target="_blank" rel="noopener noreferrer"> 
            <RiGraduationCapLine /> Green University of Bangladesh </a>
          </motion.div>

          {/* Education */}
          <motion.div className="about-edu" variants={fadeUp(0.38)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <p className="about-edu-label">Education</p>
            {education.map((e, i) => (
              <div key={i} className="edu-row">
                <div>
                  <p className="edu-degree">{e.degree}</p>
                  {e.link ? (
                    <a href={e.link} target="_blank" rel="noopener noreferrer" className="edu-inst">{e.institution}</a>
                  ) : (
                    <p className="edu-inst">{e.institution}</p>
                  )}
                </div>
                <span className="edu-period">{e.period}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: stats + image */}
        <div className="about-right">
          <motion.div
            className="about-photo-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={personal.aboutPhoto} alt="Majharul Islam" className="about-photo" />
            <div className="about-photo-overlay" />
          </motion.div>

          <motion.div
            className="stats-grid"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {stats.map(s => (
              <motion.div
                key={s.label}
                className="stat-card glass"
                variants={fadeUp(0.2)}
              >
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
