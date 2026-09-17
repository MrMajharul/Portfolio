import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import {
  RiGithubLine, RiLinkedinLine, RiMailLine, RiMenuLine, RiCloseLine, RiFileTextLine,
  RiSunLine, RiMoonLine
} from 'react-icons/ri';
import './Navbar.css';

const links = ['About', 'Research', 'Experience', 'Projects', 'Skills', 'Certificates', 'Blog', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');
  const [open, setOpen]         = useState(false);
  const { theme, toggle }       = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map(l => document.getElementById(l.toLowerCase()));
      const current = sections.reduce((acc, sec) => {
        if (sec && sec.getBoundingClientRect().top < 160) return sec.id;
        return acc;
      }, '');
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="nav-inner container">
          {/* Logo */}
          <a href="#" className="nav-logo" onClick={e => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); }}>
            <img src="/logo.jpg" alt="MI logo" className="nav-logo-img" />
            <span>Majharul<span className="logo-accent">.dev</span></span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {links.map(link => (
              <li key={link}>
                <button
                  className={`nav-link ${active === link.toLowerCase() ? 'active' : ''}`}
                  onClick={() => scrollTo(link)}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="nav-ctas">
            <a href={personal.github} target="_blank" rel="noopener" className="nav-icon" aria-label="GitHub">
              <RiGithubLine />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener" className="nav-icon" aria-label="LinkedIn">
              <RiLinkedinLine />
            </a>
            <button
              className="theme-toggle"
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.22 }}
                >
                  {theme === 'dark' ? <RiSunLine size={18} /> : <RiMoonLine size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>
            <a href={personal.cv} target="_blank" rel="noopener" className="btn btn-primary nav-cv">
              <RiFileTextLine /> CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
          >
            <ul>
              {links.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button onClick={() => scrollTo(link)}>{link}</button>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <a href={personal.cv} target="_blank" rel="noopener" className="btn btn-primary" style={{width:'100%',justifyContent:'center'}}>
                  <RiFileTextLine /> Download CV
                </a>
              </motion.li>
            </ul>
            <div className="drawer-socials">
              <a href={personal.github} target="_blank" rel="noopener"><RiGithubLine size={20}/></a>
              <a href={personal.linkedin} target="_blank" rel="noopener"><RiLinkedinLine size={20}/></a>
              <a href={`mailto:${personal.email}`}><RiMailLine size={20}/></a>
              <button className="theme-toggle drawer-theme" onClick={toggle} aria-label="Toggle theme">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    {theme === 'dark' ? <RiSunLine size={18}/> : <RiMoonLine size={18}/>}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
