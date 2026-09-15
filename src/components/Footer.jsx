import { personal } from '../data/portfolio';
import { RiGithubLine, RiLinkedinLine, RiMailLine, RiHeartLine } from 'react-icons/ri';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="container footer-inner">
        <div className="footer-left">
          <a href="#" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});}} className="footer-logo">
            <img src="/logo.jpg" alt="MI logo" className="footer-logo-img" />
            Majharul<span className="logo-accent">.dev</span>
          </a>
          <p className="footer-tagline">CSE student · Researcher · Builder</p>
        </div>

        <p className="footer-copy">
          
        </p>

        <div className="footer-socials">
          <a href={personal.github}   target="_blank" rel="noopener" aria-label="GitHub">   <RiGithubLine   size={18}/> </a>
          <a href={personal.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"> <RiLinkedinLine size={18}/> </a>
          <a href={`mailto:${personal.email}`} aria-label="Email">                          <RiMailLine     size={18}/> </a>
        </div>
      </div>
      <div className="container">
        <p className="footer-bottom">© {new Date().getFullYear()} Majharul Islam. All rights reserved.</p>
      </div>
    </footer>
  );
}
