import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { certificates, featuredCertificate } from '../data/portfolio';
import {
  RiExternalLinkLine,
  RiAwardLine,
  RiShieldCheckLine,
  RiFilePdfLine,
  RiFileCopyLine,
  RiCheckLine,
  RiSparklingFill
} from 'react-icons/ri';
import './Certificates.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [copiedId, setCopiedId] = useState(false);

  const copyCredentialId = () => {
    if (!featuredCertificate?.credentialId) return;
    navigator.clipboard.writeText(featuredCertificate.credentialId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <section id="certificates" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Certifications & Credentials
        </motion.p>
        <motion.h2 className="section-title" variants={fadeUp(0.08)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Honors & Professional Accreditations
        </motion.h2>
        <div className="divider" style={{ marginBottom: 40 }} />

        {/* ── Featured Credential Frame ── */}
        {featuredCertificate && (
          <motion.div
            className="cert-featured-frame"
            variants={fadeUp(0.12)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {/* Ambient Background Glow */}
            <div className="cert-featured-glow" />

            {/* Frame Header Bar */}
            <div className="cert-featured-topbar">
              <div className="cert-featured-badge-tag">
                <RiSparklingFill className="sparkle-icon" />
                <span>FEATURED INDUSTRY CERTIFICATION</span>
              </div>
              <a
                href={featuredCertificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-featured-status cert-status-link"
                title="Verify live on DataCamp"
              >
                <RiShieldCheckLine className="shield-icon" />
                <span>Verified on DataCamp</span>
                <RiExternalLinkLine className="status-ext-icon" />
              </a>
            </div>

            {/* Frame Content Grid */}
            <div className="cert-featured-content">
              {/* Left: Badge Display Pod */}
              <div className="cert-featured-badge-pod">
                <div className="badge-glow-ring" />
                <a
                  href={featuredCertificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge-image-link"
                  title="Verify on DataCamp"
                >
                  <img
                    src={featuredCertificate.badge}
                    alt={`${featuredCertificate.title} Badge`}
                    className="badge-image"
                  />
                  <div className="badge-overlay-hint">
                    <RiExternalLinkLine /> Verify on DataCamp
                  </div>
                </a>
              </div>

              {/* Right: Credential Information */}
              <div className="cert-featured-info">
                <div className="cert-featured-meta-row">
                  <span className="cert-featured-issuer">{featuredCertificate.issuer}</span>
                  <span className="cert-meta-dot">•</span>
                  <span className="cert-featured-date">Certified on {featuredCertificate.date}</span>
                </div>

                <h3 className="cert-featured-title">
                  {featuredCertificate.title}
                </h3>

                {/* Credential ID Card */}
                <div className="cert-id-badge">
                  <span className="cert-id-label">Credential ID:</span>
                  <code className="cert-id-code">{featuredCertificate.credentialId}</code>
                  <button
                    className="cert-copy-btn"
                    onClick={copyCredentialId}
                    title="Copy Credential ID"
                  >
                    {copiedId ? (
                      <>
                        <RiCheckLine style={{ color: '#10b981' }} /> Copied
                      </>
                    ) : (
                      <>
                        <RiFileCopyLine /> Copy ID
                      </>
                    )}
                  </button>
                </div>

                <p className="cert-featured-description">
                  Formally certified by <strong>DataCamp</strong> for demonstrated proficiency in exploratory data analysis, relational data querying with SQL, statistical evaluation, and communicating business intelligence.
                </p>

                {/* Skills Verified */}
                <div className="cert-skills-list">
                  {featuredCertificate.skills?.map((skill, sIdx) => (
                    <span key={sIdx} className="cert-skill-pill">
                      ✓ {skill}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="cert-featured-actions">
                  <a
                    href={featuredCertificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-primary-btn"
                  >
                    <RiShieldCheckLine className="btn-icon" />
                    <span>Verify on DataCamp</span>
                    <RiExternalLinkLine className="btn-arrow" />
                  </a>
                  <a
                    href={featuredCertificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-secondary-btn"
                  >
                    <RiFilePdfLine className="btn-icon" />
                    <span>View Certificate (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Subtitle for Course Certifications ── */}
        <div className="cert-section-subhead">
          <h3 className="cert-subhead-title">Courses & Technical Training</h3>
          <p className="cert-subhead-desc">
            Verified course completions and departmental contributions in computer science, software engineering, and cloud systems.
          </p>
        </div>

        {/* ── Cert Grid ── */}
        <div className="cert-grid">
          {certificates.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              variants={fadeUp(0.16 + i * 0.05)}
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
