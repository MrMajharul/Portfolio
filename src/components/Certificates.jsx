import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { certificates } from '../data/portfolio';
import { RiExternalLinkLine, RiAwardLine } from 'react-icons/ri';
import './Certificates.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certificates" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Certifications
        </motion.p>
        <motion.h2 className="section-title" variants={fadeUp(0.08)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Certificates & Courses
        </motion.h2>
        <div className="divider" style={{ marginBottom: 48 }} />

        <div className="cert-grid">
          {certificates.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              variants={fadeUp(0.08 + i * 0.06)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <div className="cert-accent" />
              <div className="cert-body">
                <div className="cert-top">
                  <div className="cert-icon-wrap">
                    <RiAwardLine className="cert-icon-svg" />
                  </div>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-footer">
                  <span className="cert-view">
                    View Certificate <RiExternalLinkLine />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
