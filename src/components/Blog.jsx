import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { blogPosts } from '../data/portfolio';
import {
  RiCalendarLine,
  RiTimeLine,
  RiArrowRightLine,
  RiCloseLine,
  RiFileCopyLine,
  RiCheckLine,
  RiBookOpenLine,
  RiArrowLeftLine
} from 'react-icons/ri';
import './Blog.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedPost, setSelectedPost] = useState(null);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState(null);

  // Close modal on Escape key and manage body overflow
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPost(null);
    };

    if (selectedPost) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPost]);

  const copyCodeToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const handleNextPost = () => {
    if (!selectedPost) return;
    const currentIndex = blogPosts.findIndex((p) => p.id === selectedPost.id);
    const nextIndex = (currentIndex + 1) % blogPosts.length;
    setSelectedPost(blogPosts[nextIndex]);
  };

  const handlePrevPost = () => {
    if (!selectedPost) return;
    const currentIndex = blogPosts.findIndex((p) => p.id === selectedPost.id);
    const prevIndex = (currentIndex - 1 + blogPosts.length) % blogPosts.length;
    setSelectedPost(blogPosts[prevIndex]);
  };

  return (
    <section id="blog" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Blog & Articles
        </motion.p>
        <motion.h2 className="section-title" variants={fadeUp(0.08)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Technical Writing & Research Insights
        </motion.h2>
        <p className="blog-section-subtitle">
          In-depth technical articles covering modern frontend engineering, genomic machine learning, relational database systems, and data architecture.
        </p>
        <div className="divider" style={{ marginBottom: 48 }} />

        {/* ── Blog Grid ── */}
        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id || i}
              className="blog-card glass"
              variants={fadeUp(0.1 + i * 0.08)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              onClick={() => setSelectedPost(post)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPost(post);
                }
              }}
            >
              <div className="blog-card-header">
                <div className="blog-meta-group">
                  <span className="blog-meta-item">
                    <RiCalendarLine />
                    <span>{post.date}</span>
                  </span>
                  {post.readTime && (
                    <span className="blog-meta-item">
                      <RiTimeLine />
                      <span>{post.readTime}</span>
                    </span>
                  )}
                </div>
                <span className="blog-read-badge">
                  <RiBookOpenLine /> Read
                </span>
              </div>

              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>

              <div className="blog-card-footer">
                <div className="blog-tags">
                  {post.tags.slice(0, 3).map((tag, j) => (
                    <span key={j} className="blog-tag">{tag}</span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="blog-tag blog-tag-more">+{post.tags.length - 3}</span>
                  )}
                </div>
                <div className="blog-read-cta">
                  <span>Read Full Article</span>
                  <RiArrowRightLine className="blog-cta-arrow" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ── Article Reader Modal ── */}
      <AnimatePresence>
        {selectedPost && (
          <div className="blog-modal-backdrop" onClick={() => setSelectedPost(null)}>
            <motion.div
              className="blog-modal-container glass"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="blog-modal-topbar">
                <button
                  className="blog-modal-back-btn"
                  onClick={() => setSelectedPost(null)}
                  aria-label="Back to blogs"
                >
                  <RiArrowLeftLine />
                  <span>Back to all articles</span>
                </button>
                <button
                  className="blog-modal-close-btn"
                  onClick={() => setSelectedPost(null)}
                  aria-label="Close modal"
                >
                  <RiCloseLine />
                </button>
              </div>

              {/* Modal Article Content */}
              <div className="blog-modal-scroll">
                <header className="blog-article-header">
                  <div className="blog-article-meta-row">
                    <span className="blog-article-pill primary-pill">{selectedPost.tags[0]}</span>
                    <span className="blog-article-meta-info">
                      <RiCalendarLine /> {selectedPost.date}
                    </span>
                    <span className="blog-article-meta-info">
                      <RiTimeLine /> {selectedPost.readTime}
                    </span>
                  </div>

                  <h1 className="blog-article-title">{selectedPost.title}</h1>
                  {selectedPost.subtitle && (
                    <p className="blog-article-subtitle">{selectedPost.subtitle}</p>
                  )}

                  {selectedPost.author && (
                    <div className="blog-author-card">
                      <img
                        src={selectedPost.author.avatar}
                        alt={selectedPost.author.name}
                        className="blog-author-avatar"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="blog-author-details">
                        <span className="blog-author-name">{selectedPost.author.name}</span>
                        <span className="blog-author-role">{selectedPost.author.role}</span>
                      </div>
                    </div>
                  )}
                </header>

                <div className="blog-article-body">
                  {selectedPost.sections ? (
                    selectedPost.sections.map((sec, sIdx) => {
                      if (sec.type === 'paragraph') {
                        return <p key={sIdx} className="blog-text-p">{sec.content}</p>;
                      }
                      if (sec.type === 'heading') {
                        return (
                          <h2 key={sIdx} className="blog-text-h2">
                            {sec.title}
                          </h2>
                        );
                      }
                      if (sec.type === 'quote') {
                        return (
                          <blockquote key={sIdx} className="blog-text-quote">
                            "{sec.content}"
                          </blockquote>
                        );
                      }
                      if (sec.type === 'code') {
                        const isCopied = copiedCodeIndex === sIdx;
                        return (
                          <div key={sIdx} className="blog-code-container">
                            <div className="blog-code-header">
                              <span className="blog-code-lang">{sec.language || 'code'}</span>
                              {sec.caption && <span className="blog-code-caption">{sec.caption}</span>}
                              <button
                                className="blog-code-copy-btn"
                                onClick={() => copyCodeToClipboard(sec.code, sIdx)}
                              >
                                {isCopied ? (
                                  <>
                                    <RiCheckLine style={{ color: '#10b981' }} /> Copied!
                                  </>
                                ) : (
                                  <>
                                    <RiFileCopyLine /> Copy
                                  </>
                                )}
                              </button>
                            </div>
                            <pre className="blog-code-pre">
                              <code>{sec.code}</code>
                            </pre>
                          </div>
                        );
                      }
                      if (sec.type === 'list') {
                        return (
                          <ul key={sIdx} className="blog-text-list">
                            {sec.items.map((item, lIdx) => (
                              <li key={lIdx} className="blog-list-item">
                                <span className="blog-list-bullet">✦</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return null;
                    })
                  ) : (
                    <p className="blog-text-p">{selectedPost.excerpt}</p>
                  )}
                </div>

                {/* Article Footer & Next/Prev navigation */}
                <footer className="blog-article-footer">
                  <div className="blog-article-tags-wrap">
                    <span className="blog-tags-label">Tags:</span>
                    {selectedPost.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="blog-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="blog-pagination">
                    <button className="blog-nav-btn prev" onClick={handlePrevPost}>
                      <RiArrowLeftLine />
                      <div className="blog-nav-text">
                        <span>Previous Article</span>
                      </div>
                    </button>
                    <button className="blog-nav-btn next" onClick={handleNextPost}>
                      <div className="blog-nav-text">
                        <span>Next Article</span>
                      </div>
                      <RiArrowRightLine />
                    </button>
                  </div>
                </footer>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
