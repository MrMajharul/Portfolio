import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/portfolio';
import {
  RiGithubLine, RiLinkedinLine, RiMailLine,
  RiArrowDownLine, RiFileTextLine
} from 'react-icons/ri';
import './Hero.css';

const roles = personal.roles;

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping]     = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout;
    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32);
      } else {
        setRoleIdx(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } };

  return (
    <section id="hero" className="hero-section">
      {/* Background orbs */}
      <div className="hero-orb hero-orb-1 orb" />
      <div className="hero-orb hero-orb-2 orb" />
      <div className="hero-grid-bg" />

      <div className="container hero-inner">
        {/* Left: text */}
        <motion.div className="hero-text" variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="hero-available">
            <span className="badge badge-green badge-pulse">Open to research & development opportunities</span>
          </motion.div>

          <motion.p variants={item} className="hero-eyebrow">
            Computer Science &amp; Engineering · Green University of Bangladesh
          </motion.p>

          <motion.h1 variants={item} className="hero-name">
            Majharul<br />
            <span className="hero-name-accent">Islam</span>
          </motion.h1>

          <motion.div variants={item} className="hero-role">
            <span className="hero-role-text">{displayed}</span>
            <span className="hero-cursor" />
          </motion.div>

          <motion.p variants={item} className="hero-bio">
            {personal.tagline}
          </motion.p>

          <motion.div variants={item} className="hero-ctas">
            <a href="#contact" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}); }}>
              <RiMailLine /> Get in touch
            </a>
            <a href={personal.cv} target="_blank" rel="noopener" className="btn btn-ghost">
              <RiFileTextLine /> Download CV
            </a>
            <a href={personal.github} target="_blank" rel="noopener" className="btn btn-ghost hero-gh">
              <RiGithubLine />
            </a>
          </motion.div>

          <motion.div variants={item} className="hero-socials">
            <a href={personal.github}   target="_blank" rel="noopener" aria-label="GitHub">   <RiGithubLine   size={18}/> </a>
            <a href={personal.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"> <RiLinkedinLine size={18}/> </a>
            <a href={`mailto:${personal.email}`} aria-label="Email">                          <RiMailLine     size={18}/> </a>
            <span className="social-divider" />
            <span className="hero-email">{personal.email}</span>
          </motion.div>

          <motion.div variants={item} className="hero-keywords">
            <span>Research</span>
            <span className="kw-dot">·</span>
            <span>Web Development</span>
            <span className="kw-dot">·</span>
            <span>Open Source</span>
            <span className="kw-dot">·</span>
            <span>CSE</span>
          </motion.div>
        </motion.div>

        {/* Right: photo */}
        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22,1,0.36,1] }}
        >
          <div className="hero-photo-ring" />
          <div className="hero-photo-glow" />
          <img src={personal.photo} alt="Majharul Islam" className="hero-photo" />
          
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <RiArrowDownLine />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
