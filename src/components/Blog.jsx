import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { blogPosts } from '../data/portfolio';
import { RiArrowRightUpLine, RiCalendarLine } from 'react-icons/ri';
import './Blog.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="blog" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Blog
        </motion.p>
        <motion.h2 className="section-title" variants={fadeUp(0.08)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Learning & Insights
        </motion.h2>
        <div className="divider" style={{ marginBottom: 48 }} />

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <motion.a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card glass"
              variants={fadeUp(0.1 + i * 0.12)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <div className="blog-card-header">
                <div className="blog-date">
                  <RiCalendarLine />
                  <span>{post.date}</span>
                </div>
                <RiArrowRightUpLine className="blog-arrow" />
              </div>

              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>

              <div className="blog-tags">
                {post.tags.map((tag, j) => (
                  <span key={j} className="blog-tag">{tag}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
