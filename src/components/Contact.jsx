import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { personal } from '../data/portfolio';
import {
  RiMailLine, RiPhoneLine, RiMapPinLine,
  RiGithubLine, RiLinkedinLine,
  RiSendPlaneLine, RiCheckLine, RiErrorWarningLine
} from 'react-icons/ri';
import './Contact.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const contactInfo = [
  { icon: <RiMailLine />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: <RiPhoneLine />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g,'')}` },
  { icon: <RiMapPinLine />, label: 'Location', value: personal.location, href: null },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    // EmailJS integration placeholder — replace with real keys
    try {
      // await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'PUBLIC_KEY');
      await new Promise(r => setTimeout(r, 1200)); // simulate
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="contact-bg-orb orb" />
      <div className="container">
        <motion.p className="section-label" variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Contact
        </motion.p>
        <motion.h2 className="section-title" variants={fadeUp(0.08)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Get in Touch
        </motion.h2>
        <motion.p className="section-sub" variants={fadeUp(0.14)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Currently applying for graduate programs and software engineering roles — happy to talk research, projects, or opportunities.
        </motion.p>
        <div className="divider" style={{ marginBottom: 52 }} />

        <div className="contact-grid">
          {/* Info column */}
          <motion.div className="contact-info" variants={fadeUp(0.16)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <div className="contact-info-cards">
              {contactInfo.map(c => (
                <div key={c.label} className="contact-info-row glass">
                  <span className="ci-icon">{c.icon}</span>
                  <div>
                    <p className="ci-label">{c.label}</p>
                    {c.href
                      ? <a href={c.href} className="ci-value link">{c.value}</a>
                      : <p className="ci-value">{c.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              <p className="ci-label" style={{ marginBottom: 14 }}>Follow me</p>
              <div className="social-row">
                <a href={personal.github}   target="_blank" rel="noopener" className="social-btn">
                  <RiGithubLine size={20}/> GitHub
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener" className="social-btn">
                  <RiLinkedinLine size={20}/> LinkedIn
                </a>
              </div>
            </div>

            <div className="contact-open glass">
              <span className="badge badge-green badge-pulse">Open to opportunities</span>
              <p>Grad programs abroad &amp; software engineering roles.</p>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div className="contact-form-wrap" variants={fadeUp(0.24)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <form className="contact-form glass" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="Your name"
                    value={form.name} onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="your@email.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject" name="subject" type="text" required
                  placeholder="What's this about?"
                  value={form.subject} onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows={5} required
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message} onChange={handleChange}
                />
              </div>

              {status === 'success' && (
                <div className="form-status success">
                  <RiCheckLine /> Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">
                  <RiErrorWarningLine /> Something went wrong. Try emailing directly.
                </div>
              )}

              <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
                {status === 'sending'
                  ? <><span className="spinner" /> Sending...</>
                  : <><RiSendPlaneLine /> Send Message</>
                }
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
