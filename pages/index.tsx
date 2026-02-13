import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../styles/Homepage.module.css';

export default function Homepage() {
  const [imageError, setImageError] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect();
        const scrollOffset = Math.max(0, -rect.top);
        setScrollY(scrollOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax transform - image moves behind menu/text then scrolls together
  // For first portion of scroll, image moves faster (creates waterfall effect)
  const maxScroll = 300; // Maximum scroll distance for waterfall effect
  const parallaxFactor = scrollY < maxScroll 
    ? scrollY * 0.7 // Image moves 70% speed initially (behind menu/text)
    : maxScroll * 0.7 + (scrollY - maxScroll) * 1.0; // Then moves together
  const imageTransform = parallaxFactor;

  return (
    <>
      <Head>
        <title>Homepage - Personal Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation />
      
      {/* Hero Banner Section */}
      <section ref={bannerRef} className={styles.heroBanner}>
        {!imageError ? (
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/mobile_banner.webp" />
            <Image
              src="/images/banner.webp"
              alt="Desert landscape with mountains"
              fill
              priority
              className={styles.heroImage}
              sizes="100vw"
              quality={85}
              style={{ 
                objectFit: 'cover',
                transform: `translateY(${imageTransform}px)`
              }}
              onError={() => setImageError(true)}
            />
          </picture>
        ) : (
          <div className={styles.placeholderBanner}>
            <span>Please add banner.jpg to /public/images/</span>
          </div>
        )}
        <div className={styles.heroText}>
          <h1 className={styles.heroName}>Luke Meyer</h1>
          <p className={styles.heroSnippet}>
            Building innovative solutions through code, creativity, and cutting-edge technology
          </p>
        </div>
        <div 
          className={styles.scrollIndicator}
          style={{ 
            transform: `translate(-50%, ${imageTransform}px)`,
            willChange: 'transform',
            transition: 'transform 0.1s ease-out'
          }}
        >
          <span className={styles.learnMore}>Learn More</span>
          <button 
            className={styles.scrollButton}
            onClick={() => {
              const aboutSection = document.querySelector(`.${styles.aboutSection}`);
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Scroll to content"
          >
            <svg 
              className={styles.scrollArrow}
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
        <div className={styles.heroOverlay}></div>
      </section>

      {/* Waterfall Content Section */}
      <div className={styles.waterfallContainer}>
        {/* About Section */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutBox}>
            <div className={styles.aboutLeft}>
              <picture>
                <source media="(max-width: 768px)" srcSet="/images/mobile_me.webp" />
                <Image
                  src="/images/me.webp"
                  alt="Luke Meyer"
                  width={200}
                  height={200}
                  className={styles.profileImage}
                  loading="lazy"
                  quality={85}
                />
              </picture>
              <h3 className={styles.profileName}>Luke Meyer</h3>
              <p className={styles.profileEmail}>
                <a href="mailto:lmeye90@wgu.edu">lmeye90@wgu.edu</a>
              </p>
              <div className={styles.socialIcons}>
                <a href="https://github.com/LukeMeyer13" className={styles.socialIcon} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/luke-meyer-59ab85296" className={styles.socialIcon} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:lmeye90@wgu.edu" className={styles.socialIcon} aria-label="Email">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            <div className={styles.aboutRight}>
              <h2 className={styles.aboutHeading}>About Me</h2>
              <div className={styles.aboutText}>
                <p>
                  I&apos;m a Computer Science student at Western Governors University with a unique background: 
                  years as a Wildland Firefighter and EMT taught me to solve complex problems under extreme 
                  pressure. Now I&apos;m applying that same critical thinking to software engineering, building 
                  solutions in Python, C++, and Java with a focus on autonomous UAV systems and cybersecurity. 
                  I&apos;m seeking opportunities to develop cutting-edge drone technology, secure systems, or 
                  innovative software that makes a real-world impact.
                </p>
              </div>
              <Link href="/about" className={styles.aboutButton}>
                Get To Know Me
              </Link>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className={styles.sectionDivider}></div>

        {/* Projects Section */}
        <section className={styles.projectsSection}>
          <h2 className={styles.sectionHeading}>Projects</h2>
          <div className={styles.projectsPlaceholder}>
            <p>Check back soon to see my projects!</p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
