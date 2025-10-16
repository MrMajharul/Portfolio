// Portfolio JavaScript - Majharul Islam (Tailwind Version)

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu?.addEventListener('click', () => {
    navLinks?.classList.toggle('hidden');
    
    // Animate hamburger menu
    const lines = mobileMenu.querySelectorAll('div');
    lines.forEach((line, index) => {
        if (navLinks?.classList.contains('hidden')) {
            // Menu closed - reset to hamburger
            line.style.transform = 'rotate(0deg)';
            line.style.opacity = '1';
        } else {
            // Menu open - transform to X
            if (index === 0) {
                line.style.transform = 'rotate(45deg) translateY(8px)';
            } else if (index === 1) {
                line.style.opacity = '0';
            } else if (index === 2) {
                line.style.transform = 'rotate(-45deg) translateY(-8px)';
            }
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navLinks && !navLinks.classList.contains('hidden')) {
            navLinks.classList.add('hidden');
            // Reset hamburger menu
            const lines = mobileMenu?.querySelectorAll('div');
            lines?.forEach(line => {
                line.style.transform = 'rotate(0deg)';
                line.style.opacity = '1';
            });
        }
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll & Back to Top button
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    const backToTopBtn = document.getElementById('back-to-top');
    
    // Navbar styling
    if (window.scrollY > 100) {
        navbar?.classList.add('bg-white/98', 'shadow-xl');
        navbar?.classList.remove('bg-white/95');
    } else {
        navbar?.classList.remove('bg-white/98', 'shadow-xl');
        navbar?.classList.add('bg-white/95');
    }
    
    // Back to top button visibility
    if (window.scrollY > 300) {
        backToTopBtn?.classList.remove('opacity-0', 'invisible');
        backToTopBtn?.classList.add('opacity-100', 'visible');
    } else {
        backToTopBtn?.classList.add('opacity-0', 'invisible');
        backToTopBtn?.classList.remove('opacity-100', 'visible');
    }
});

// Back to Top button functionality
document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Active navigation link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing animation for hero text (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Smooth reveal animation for project cards
const revealCards = () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
};

// Skills animation
const animateSkills = () => {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, index * 100);
    });
};

// Initialize animations when sections come into view
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'projects') {
                revealCards();
            } else if (entry.target.id === 'skills') {
                animateSkills();
            }
        }
    });
}, { threshold: 0.3 });

// Observe sections for animations
document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// Page Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.classList.add('loaded');
            }, 500);
        }, 800); // Show preloader for at least 800ms
    }
});

// Form Validation Helper
function validateForm(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const errors = [];
    
    if (name.length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (subject.length < 5) {
        errors.push('Subject must be at least 5 characters long');
    }
    
    if (message.length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    return errors;
}

// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS (you'll need to sign up and get your keys)
    // emailjs.init("YOUR_PUBLIC_KEY"); // Uncomment and add your EmailJS public key

    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        // Real-time validation feedback
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.classList.add('border-red-300');
                    this.classList.remove('border-green-300');
                } else {
                    this.classList.remove('border-red-300');
                    this.classList.add('border-green-300');
                }
            });
            
            input.addEventListener('input', function() {
                if (this.value.trim() !== '') {
                    this.classList.remove('border-red-300');
                }
            });
        });
        
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Validate form
            const errors = validateForm(formData);
            if (errors.length > 0) {
                showStatus(errors.join('. '), 'error');
                return;
            }

            // Show loading state
            setLoadingState(true);
            showStatus('Sending message...', 'loading');

            try {
                // Method 1: EmailJS (requires setup)
                // await sendWithEmailJS(name, email, subject, message);
                
                // Method 2: Formspree (requires setup)
                // await sendWithFormspree(formData);
                
                // Method 3: Local storage (for demo)
                await saveToLocalStorage(name, email, subject, message);
                
                // Success
                showStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                
            } catch (error) {
                console.error('Error sending message:', error);
                showStatus('Failed to send message. Please try again or contact me directly via email.', 'error');
            } finally {
                setLoadingState(false);
            }
        });
    }

    function setLoadingState(loading) {
        if (loading) {
            submitBtn.classList.add('opacity-70', 'cursor-not-allowed');
            submitBtn.classList.remove('hover:scale-105');
            btnText.textContent = 'Sending...';
            submitBtn.disabled = true;
            // Add spinning animation to icon
            const icon = submitBtn.querySelector('i');
            if (icon) {
                icon.classList.add('animate-spin');
            }
        } else {
            submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
            submitBtn.classList.add('hover:scale-105');
            btnText.textContent = 'Send Message';
            submitBtn.disabled = false;
            // Remove spinning animation
            const icon = submitBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('animate-spin');
            }
        }
    }

    function showStatus(message, type) {
        formStatus.textContent = message;
        
        // Remove all status classes
        formStatus.classList.remove('opacity-0', 'translate-y-2', 'bg-green-100', 'text-green-700', 'border-green-300', 'bg-red-100', 'text-red-700', 'border-red-300', 'bg-blue-100', 'text-blue-700', 'border-blue-300');
        
        // Add base classes
        formStatus.classList.add('px-4', 'py-3', 'rounded-lg', 'border', 'font-medium', 'text-center', 'transition-all', 'duration-300');
        
        // Add type-specific classes
        if (type === 'success') {
            formStatus.classList.add('bg-green-100', 'text-green-700', 'border-green-300');
        } else if (type === 'error') {
            formStatus.classList.add('bg-red-100', 'text-red-700', 'border-red-300');
        } else if (type === 'loading') {
            formStatus.classList.add('bg-blue-100', 'text-blue-700', 'border-blue-300');
        }
        
        // Show the status
        formStatus.classList.remove('opacity-0', 'translate-y-2');
        
        // Auto-hide success/error messages after 5 seconds
        if (type !== 'loading') {
            setTimeout(() => {
                formStatus.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => {
                    formStatus.classList.add('hidden');
                }, 300);
            }, 5000);
        }
    }

    // Method 1: EmailJS implementation (requires EmailJS account)
    async function sendWithEmailJS(name, email, subject, message) {
        // You'll need to set up EmailJS and replace these with your values
        /*
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'majharul.cs@gmail.com'
        };
        
        return emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
        */
        throw new Error('EmailJS not configured');
    }

    // Method 2: Formspree implementation (requires Formspree account)
    async function sendWithFormspree(formData) {
        // Replace 'YOUR_FORM_ID' with your Formspree form ID
        /*
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to send via Formspree');
        }
        
        return response;
        */
        throw new Error('Formspree not configured');
    }

    // Method 3: Local storage (for demo purposes)
    async function saveToLocalStorage(name, email, subject, message) {
        return new Promise((resolve, reject) => {
            try {
                const submission = {
                    id: Date.now(),
                    name,
                    email,
                    subject,
                    message,
                    timestamp: new Date().toISOString()
                };

                // Get existing submissions
                const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                existingSubmissions.push(submission);
                
                // Save to localStorage
                localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
                
                // Simulate network delay
                setTimeout(() => {
                    console.log('Form submission saved locally:', submission);
                    resolve(submission);
                }, 1000);
                
            } catch (error) {
                reject(error);
            }
        });
    }

    // Function to view saved submissions (for demo)
    window.viewSubmissions = function() {
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        console.table(submissions);
        return submissions;
    };
});

// Skill bars animation on scroll
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.bg-gradient-to-r');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'width 1.5s ease-out';
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        if (bar.parentElement?.parentElement?.parentElement?.querySelector('h3')?.textContent.includes('Programming') ||
            bar.parentElement?.parentElement?.parentElement?.querySelector('h3')?.textContent.includes('Frameworks') ||
            bar.parentElement?.parentElement?.parentElement?.querySelector('h3')?.textContent.includes('Languages')) {
            observer.observe(bar);
        }
    });
};

// Initialize skill bars animation
document.addEventListener('DOMContentLoaded', animateSkillBars);

// Add hover effect to project cards
document.querySelectorAll('.group').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Console welcome message with better styling
console.log('%c🚀 Welcome to Majharul Islam\'s Portfolio', 'color: #667eea; font-size: 24px; font-weight: bold;');
console.log('%c👨‍💻 Computer Science & Engineering Student', 'color: #764ba2; font-size: 16px;');
console.log('%c📧 Contact: majharul.cs@gmail.com', 'color: #10b981; font-size: 14px;');
console.log('%c🌐 GitHub: https://github.com/MrMajharul', 'color: #3b82f6; font-size: 14px;');
console.log('%c\n💡 Contact form is functional!', 'color: #f59e0b; font-size: 14px; font-weight: bold;');
console.log('%c📝 For demo purposes, submissions are saved locally.', 'color: #6b7280; font-size: 12px;');
console.log('%c🔍 Run viewSubmissions() in console to see saved messages.\n', 'color: #6b7280; font-size: 12px;');

// Performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`%c⚡ Page loaded in ${Math.round(loadTime)}ms`, 'color: #10b981; font-size: 12px; font-weight: bold;');
});

// Blog Read More functionality - Full screen view
document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const blogSection = document.querySelector('.py-20.bg-gradient-to-b');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const article = this.closest('article');
            const blogGrid = document.querySelector('.blog-posts-grid');
            const blogHero = document.querySelector('.blog-hero-section');
            const blogPagination = document.querySelector('.blog-pagination');
            const blogNewsletter = document.querySelector('.blog-newsletter');
            const navbar = document.querySelector('nav');
            const blogSectionContainer = blogGrid ? blogGrid.closest('section') : null;
            
            // Hide navigation and other sections
            if (navbar) navbar.style.display = 'none';
            if (blogHero) blogHero.style.display = 'none';
            if (blogPagination) blogPagination.style.display = 'none';
            if (blogNewsletter) blogNewsletter.style.display = 'none';
            
            // Hide all articles EXCEPT the current one
            document.querySelectorAll('.blog-posts-grid article').forEach(a => {
                if (a !== article) {
                    a.style.display = 'none';
                }
            });
            
            // Remove grid layout from container
            if (blogGrid) {
                blogGrid.style.display = 'block';
                blogGrid.style.gridTemplateColumns = 'none';
            }
            
            // Show current article in full screen view
            article.style.display = 'block';
            article.classList.add('full-page-view');
            
            // Hide preview, show full content
            const preview = article.querySelector('.blog-preview');
            const fullContent = article.querySelector('.blog-full-content');
            const readMoreBtn = article.querySelector('.read-more-btn');
            
            if (preview) preview.style.display = 'none';
            if (fullContent) fullContent.classList.remove('hidden');
            if (readMoreBtn) readMoreBtn.style.display = 'none';
            
            // Create and show back button if it doesn't exist
            let backButton = document.querySelector('.back-to-blog-btn');
            if (!backButton) {
                backButton = document.createElement('button');
                backButton.className = 'back-to-blog-btn';
                backButton.innerHTML = '<i class="fas fa-arrow-left mr-2"></i> Back to All Posts';
                
                backButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Restore grid layout
                    if (blogGrid) {
                        blogGrid.style.display = 'grid';
                        blogGrid.style.gridTemplateColumns = '';
                    }
                    
                    // Show all elements again
                    if (navbar) navbar.style.display = 'block';
                    if (blogHero) blogHero.style.display = 'block';
                    if (blogPagination) blogPagination.style.display = 'flex';
                    if (blogNewsletter) blogNewsletter.style.display = 'block';
                    
                    // Reset all articles to grid view
                    document.querySelectorAll('.blog-posts-grid article').forEach(a => {
                        a.style.display = 'block';
                        a.classList.remove('full-page-view');
                        
                        const articlePreview = a.querySelector('.blog-preview');
                        const articleFullContent = a.querySelector('.blog-full-content');
                        const articleReadMoreBtn = a.querySelector('.read-more-btn');
                        
                        if (articlePreview) articlePreview.style.display = 'block';
                        if (articleFullContent) articleFullContent.classList.add('hidden');
                        if (articleReadMoreBtn) articleReadMoreBtn.style.display = 'inline-flex';
                    });
                    
                    // Remove back button
                    backButton.remove();
                    
                    // Scroll to blog section
                    if (blogSectionContainer) {
                        blogSectionContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                });
                
                // Insert back button as first child of body (fixed position)
                document.body.appendChild(backButton);
            }
            
            backButton.style.display = 'block';
            
            // Scroll article to top
            setTimeout(() => {
                article.scrollTop = 0;
            }, 100);
        });
    });
    
    // Handle ESC key to close full screen view
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const backButton = document.querySelector('.back-to-blog-btn');
            if (backButton && backButton.style.display === 'block') {
                backButton.click();
            }
        }
    });
    
    // Category Filter Functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedCategory = this.getAttribute('data-category');
            
            // Update active button styling
            categoryButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-white', 'text-primary', 'shadow-md', 'border-2', 'border-primary');
                btn.classList.add('bg-white/50', 'backdrop-blur-sm', 'text-gray-700');
            });
            
            this.classList.remove('bg-white/50', 'backdrop-blur-sm', 'text-gray-700');
            this.classList.add('active', 'bg-white', 'text-primary', 'shadow-md', 'border-2', 'border-primary');
            
            // Filter blog posts
            blogPosts.forEach(post => {
                const postCategory = post.getAttribute('data-category');
                
                if (selectedCategory === 'all' || postCategory === selectedCategory) {
                    post.style.display = 'block';
                    // Add fade-in animation
                    post.style.opacity = '0';
                    setTimeout(() => {
                        post.style.opacity = '1';
                        post.style.transition = 'opacity 0.5s ease-in-out';
                    }, 10);
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
    
    // Pagination Functionality
    const postsPerPage = 6;
    let currentPage = 1;
    
    function showPage(page) {
        const allPosts = document.querySelectorAll('.blog-post');
        const totalPages = Math.ceil(allPosts.length / postsPerPage);
        
        // Ensure page is within valid range
        if (page < 1) page = 1;
        if (page > totalPages) page = totalPages;
        
        currentPage = page;
        
        // Hide all posts first
        allPosts.forEach((post, index) => {
            const postPage = Math.floor(index / postsPerPage) + 1;
            if (postPage === currentPage) {
                post.style.display = 'block';
                post.style.opacity = '0';
                setTimeout(() => {
                    post.style.opacity = '1';
                    post.style.transition = 'opacity 0.5s ease-in-out';
                }, index * 50);
            } else {
                post.style.display = 'none';
            }
        });
        
        // Update pagination buttons
        updatePaginationButtons(totalPages);
        
        // Scroll to top of blog section
        const blogSection = document.querySelector('.blog-posts-grid');
        if (blogSection) {
            blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    function updatePaginationButtons(totalPages) {
        const pagination = document.querySelector('.blog-pagination');
        if (!pagination) return;
        
        // Clear existing buttons
        pagination.innerHTML = '';
        
        // Previous button
        const prevBtn = document.createElement('button');
        prevBtn.className = `px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300'}`;
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => showPage(currentPage - 1));
        pagination.appendChild(prevBtn);
        
        // Page number buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `px-4 py-2 rounded-lg font-medium ${i === currentPage ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300'}`;
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', () => showPage(i));
            pagination.appendChild(pageBtn);
        }
        
        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.className = `px-4 py-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300'}`;
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => showPage(currentPage + 1));
        pagination.appendChild(nextBtn);
    }
    
    // Initialize pagination on page load
    const allPosts = document.querySelectorAll('.blog-post');
    if (allPosts.length > 0) {
        const totalPages = Math.ceil(allPosts.length / postsPerPage);
        updatePaginationButtons(totalPages);
        showPage(1);
    }
});