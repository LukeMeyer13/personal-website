import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';
import { 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiCplusplus,
  SiReact, 
  SiNextdotjs,
  SiGit,
  SiLinux,
  SiPostgresql
} from 'react-icons/si';
import { 
  FaCode, 
  FaProjectDiagram, 
  FaBrain,
  FaUsers,
  FaJava
} from 'react-icons/fa';
import { 
  MdStorage,
  MdSpeed
} from 'react-icons/md';

// Define all gallery images in the "off the screen" section
const galleryImages = [
  '/images/fire_me.webp',
  '/images/Burn_Ops.webp',
  '/images/Co_River.webp',
  '/images/fire_helo.webp',
  '/images/fire_hill.webp',
  '/images/Landscape.webp',
  '/images/Sunset.webp',
  '/images/View.webp',
  '/images/wash.webp'
];

export default function About() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const professionalSectionRef = useRef<HTMLElement>(null);
  const personalSectionRef = useRef<HTMLElement>(null);

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  const navigateGallery = useCallback((direction: 'prev' | 'next') => {
    if (!lightboxImage) return;
    
    const currentIndex = galleryImages.indexOf(lightboxImage);
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setLightboxImage(galleryImages[newIndex]);
  }, [lightboxImage]);

  useEffect(() => {
    const handleScroll = () => {
      if (professionalSectionRef.current && personalSectionRef.current) {
        const professionalRect = professionalSectionRef.current.getBoundingClientRect();
        const personalRect = personalSectionRef.current.getBoundingClientRect();
        const professionalHeight = professionalSectionRef.current.offsetHeight;
        
        // Cap scrollY to prevent infinite page extension
        const scrollOffset = Math.max(0, Math.min(-professionalRect.top, professionalHeight - window.innerHeight));
        setScrollY(scrollOffset);
        
        // Hide scroll indicator when personal section comes into view
        if (personalRect.top < window.innerHeight) {
          setShowScrollIndicator(false);
        } else {
          setShowScrollIndicator(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxImage) return;
      
      if (e.key === 'ArrowLeft') {
        navigateGallery('prev');
      } else if (e.key === 'ArrowRight') {
        navigateGallery('next');
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxImage, navigateGallery, closeLightbox]);

  return (
    <>
      <Head>
        <title>About - Personal Portfolio</title>
        <meta name="description" content="Learn more about Luke Meyer - Computer Science Student" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      
      <div className={styles.aboutContainer}>
        {/* Professional About Section */}
        <section ref={professionalSectionRef} className={styles.professionalSection}>
          <h1 className={styles.sectionHeading}>About Me - Professional</h1>
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
                  priority
                  quality={75}
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
              <h3 className={styles.aboutSubheading}>Technical Expertise & Development Focus</h3>
              <div className={styles.aboutText}>
                <p>
                  I&apos;m a Computer Science student at Western Governors University with a unique edge: years of high-stakes decision-making as a Wildland Firefighter, Advanced-EMT, and Squad Boss have sharpened my ability to solve complex problems under pressure. Leading teams through unpredictable, mission-critical situations taught me the value of strategic thinking, clear communication, and adaptability—skills that translate directly into software engineering.
                </p>
                <p>
                  Now, I&apos;m channeling that same critical mindset into building robust, innovative technology. My technical foundation spans Python, C++, and Java, with coursework in algorithms, data structures, artificial intelligence, and network security. I&apos;m particularly drawn to autonomous UAV systems and cybersecurity, where precision, reliability, and creative problem-solving are paramount.
                </p>
                <p>
                  Beyond academics, I bring real-world systems thinking from my current role as Bar Operations Lead at BigShots Golf, where I optimize workflows, analyze performance data, and implement process improvements. Whether I&apos;m debugging code, designing object-oriented architectures, or coordinating cross-functional projects, I approach every challenge with the same discipline and attention to detail that kept my firefighting crews safe in the field.
                </p>
                <p>
                  I thrive at the intersection of high-consequence decision-making and technical innovation. My goal is to contribute to cutting-edge projects in drone technology, secure systems, or software engineering—building solutions that are not only functional and efficient, but also resilient under real-world conditions.
                </p>
                <p>
                  When I&apos;m not coding or studying, you&apos;ll find me drawing on lessons from the wilderness: stay calm, think critically, and always have a backup plan.
                </p>
              </div>
            </div>
            
            <div className={styles.skillsHeaderWrapper}>
              <h3 className={styles.skillsHeading}>Technical Skills</h3>
            </div>
            
            <div className={styles.skillsContainer}>
              {/* Programming Languages */}
              <div className={styles.skillCategory}>
                <h4 className={styles.categoryTitle}>
                  <FaCode className={styles.categoryIcon} />
                  Programming Languages
                </h4>
                <div className={styles.skillsGrid}>
                  <div className={styles.skillItem}>
                    <SiPython className={styles.skillIcon} style={{ color: '#3776AB' }} />
                    <span className={styles.skillName}>Python</span>
                  </div>
                  <div className={styles.skillItem}>
                    <FaJava className={styles.skillIcon} style={{ color: '#007396' }} />
                    <span className={styles.skillName}>Java</span>
                  </div>
                  <div className={styles.skillItem}>
                    <SiJavascript className={styles.skillIcon} style={{ color: '#F7DF1E' }} />
                    <span className={styles.skillName}>JavaScript</span>
                  </div>
                  <div className={styles.skillItem}>
                    <SiTypescript className={styles.skillIcon} style={{ color: '#3178C6' }} />
                    <span className={styles.skillName}>TypeScript</span>
                  </div>
                  <div className={styles.skillItem}>
                    <SiCplusplus className={styles.skillIcon} style={{ color: '#00599C' }} />
                    <span className={styles.skillName}>C++</span>
                  </div>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className={styles.skillCategory}>
                <h4 className={styles.categoryTitle}>
                  <FaProjectDiagram className={styles.categoryIcon} />
                  Frameworks & Libraries
                </h4>
                <div className={styles.skillsGrid}>
                  <div className={styles.skillItem}>
                    <SiReact className={styles.skillIcon} style={{ color: '#61DAFB' }} />
                    <span className={styles.skillName}>React</span>
                  </div>
                  <div className={styles.skillItem}>
                    <SiNextdotjs className={styles.skillIcon} style={{ color: '#FFFFFF' }} />
                    <span className={styles.skillName}>Next.js</span>
                  </div>
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className={styles.skillCategory}>
                <h4 className={styles.categoryTitle}>
                  <MdStorage className={styles.categoryIcon} />
                  Tools & Technologies
                </h4>
                <div className={styles.skillsGrid}>
                  <div className={styles.skillItem}>
                    <SiGit className={styles.skillIcon} style={{ color: '#F05032' }} />
                    <span className={styles.skillName}>Git & Version Control</span>
                  </div>
                  <div className={styles.skillItem}>
                    <SiLinux className={styles.skillIcon} style={{ color: '#FCC624' }} />
                    <span className={styles.skillName}>Linux/Unix</span>
                  </div>
                  <div className={styles.skillItem}>
                    <SiPostgresql className={styles.skillIcon} style={{ color: '#4169E1' }} />
                    <span className={styles.skillName}>SQL Databases</span>
                  </div>
                </div>
              </div>

              {/* Core Concepts */}
              <div className={styles.skillCategory}>
                <h4 className={styles.categoryTitle}>
                  <FaBrain className={styles.categoryIcon} />
                  Core Concepts
                </h4>
                <div className={styles.skillsGrid}>
                  <div className={styles.skillItem}>
                    <MdSpeed className={styles.skillIcon} style={{ color: '#D99A4E' }} />
                    <span className={styles.skillName}>Data Structures & Algorithms</span>
                  </div>
                  <div className={styles.skillItem}>
                    <FaProjectDiagram className={styles.skillIcon} style={{ color: '#D99A4E' }} />
                    <span className={styles.skillName}>Software Design</span>
                  </div>
                  <div className={styles.skillItem}>
                    <FaUsers className={styles.skillIcon} style={{ color: '#D99A4E' }} />
                    <span className={styles.skillName}>Agile Methodologies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div 
            className={styles.scrollIndicator}
            style={{ 
              transform: `translateY(${scrollY}px)`,
              opacity: showScrollIndicator ? 1 : 0,
              pointerEvents: showScrollIndicator ? 'auto' : 'none',
              willChange: 'transform',
              transition: 'transform 0.1s ease-out, opacity 0.8s ease-out'
            }}
          >
            <span className={styles.scrollPrompt}>Life Off Screen</span>
            <button 
              className={styles.scrollButton}
              onClick={() => {
                const personalSection = document.querySelector(`.${styles.personalSection}`);
                personalSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Scroll to personal section"
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
        </section>

        {/* Personal About Section */}
        <section ref={personalSectionRef} className={styles.personalSection}>
          <div className={styles.sectionHeaderWrapper}>
            <h1 className={styles.sectionHeading}>My Life - Off the Screen</h1>
            <p className={styles.sectionSubtitle}>Where passion meets purpose beyond the code</p>
          </div>
          <div className={styles.masonryContainer}>
            {/* Row 1: 3 Photos */}
            <div className={styles.masonryItem} onClick={() => openLightbox('/images/fire_me.webp')}>
              <div className={styles.imageWrapper}>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/images/mobile_fire_me.webp" />
                  <Image
                    src="/images/fire_me.webp"
                    alt="Wildland Firefighter"
                    width={400}
                    height={300}
                    className={styles.masonryImage}
                    loading="lazy"
                  />
                </picture>
                <div className={styles.imageOverlay}>
                  <span className={styles.imageCaption}>Wildland Firefighter</span>
                </div>
              </div>
            </div>
            <div className={styles.masonryItem} onClick={() => openLightbox('/images/Burn_Ops.webp')}>
              <div className={styles.imageWrapper}>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/images/mobile_burn_ops.webp" />
                  <Image
                    src="/images/Burn_Ops.webp"
                    alt="Burn Operations"
                    width={400}
                    height={300}
                    className={styles.masonryImage}
                    loading="lazy"
                  />
                </picture>
                <div className={styles.imageOverlay}>
                  <span className={styles.imageCaption}>Burn Operations</span>
                </div>
              </div>
            </div>
            <div className={styles.masonryItem} onClick={() => openLightbox('/images/Co_River.webp')}>
              <div className={styles.imageWrapper}>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/images/mobile_co_river.webp" />
                  <Image
                    src="/images/Co_River.webp"
                    alt="Colorado River"
                    width={400}
                    height={300}
                    className={styles.masonryImage}
                    loading="lazy"
                  />
                </picture>
                <div className={styles.imageOverlay}>
                  <span className={styles.imageCaption}>Colorado River</span>
                </div>
              </div>
            </div>

            {/* Text Block 1 - Spans 2 columns */}
            <div className={`${styles.masonryItem} ${styles.textBlock} ${styles.span2}`}>
              <div className={styles.textBlockAccent}></div>
              <div className={styles.textBlockContent}>
                <p className={styles.pullQuote}>
                  &ldquo;The outdoors isn&apos;t just where I spend my free time—it&apos;s where I&apos;ve learned to think systemically, solve problems under pressure, and understand interconnected complexity.&rdquo;
                </p>
                <p>
                  Growing up with a wildlife biologist father and a veterinarian mother running a non-profit for low-income pet care, I developed an early fascination with how systems work. Their influence taught me to look deeper, understand how components interact, and approach challenges with curiosity and care—principles I&apos;ve applied as a wildland firefighter and through pursuits like mountain biking, rock climbing, fly fishing, and off-roading.
                </p>
              </div>
            </div>

            {/* Photo 4 */}
            <div className={styles.masonryItem} onClick={() => openLightbox('/images/fire_helo.webp')}>
              <div className={styles.imageWrapper}>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/images/mobile_fire_helo.webp" />
                  <Image
                    src="/images/fire_helo.webp"
                    alt="Helicopter Operations"
                    width={400}
                    height={300}
                    className={styles.masonryImage}
                    loading="lazy"
                  />
                </picture>
                <div className={styles.imageOverlay}>
                  <span className={styles.imageCaption}>Helicopter Operations</span>
                </div>
              </div>
            </div>

            {/* Photo 5 */}
            <div className={styles.masonryItem} onClick={() => openLightbox('/images/fire_hill.webp')}>
              <div className={styles.imageWrapper}>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/images/mobile_fire_hill.webp" />
                  <Image
                    src="/images/fire_hill.webp"
                    alt="Wildland Fire on Hillside"
                    width={400}
                    height={300}
                    className={styles.masonryImage}
                    loading="lazy"
                  />
                </picture>
                <div className={styles.imageOverlay}>
                  <span className={styles.imageCaption}>Wildland Fire</span>
                </div>
              </div>
            </div>

            {/* Text Block 2 - Spans 2 columns */}
            <div className={`${styles.masonryItem} ${styles.textBlock} ${styles.span2} ${styles.textBlockAlt}`}>
              <div className={styles.textBlockAccent}></div>
              <div className={styles.textBlockContent}>
                <p>
                  I&apos;ve channeled my competitive spirit through cycling and climbing teams, but competition has always been balanced with community. During my years as a bike shop mechanic, I volunteered with &quot;Bike University,&quot; teaching free maintenance workshops in homeless shelters and low-income neighborhoods, empowering people to build their own bikes and gain independence through skill.
                </p>
              </div>
            </div>

            {/* Photo 6 */}
            <div className={styles.masonryItem} onClick={() => openLightbox('/images/Landscape.webp')}>
              <div className={styles.imageWrapper}>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/images/mobile_landscape.webp" />
                  <Image
                    src="/images/Landscape.webp"
                    alt="Landscape"
                    width={400}
                    height={300}
                    className={styles.masonryImage}
                    loading="lazy"
                  />
                </picture>
                <div className={styles.imageOverlay}>
                  <span className={styles.imageCaption}>Exploring the Backcountry</span>
                </div>
              </div>
            </div>

            {/* Text Block 3 - Spans 2 columns */}
            <div className={`${styles.masonryItem} ${styles.textBlock} ${styles.span2}`}>
              <div className={styles.textBlockAccent}></div>
              <div className={styles.textBlockContent}>
                <p>
                  My creative side finds expression through music—drums since age five, banjo later in life—and film photography. But creativity extends beyond traditional arts. Whether modifying a bicycle or tuning a vehicle for off-road performance, I approach each project as both an aesthetic creation and a technical challenge. <span className={styles.highlightText}>The intersection of form and function is where I&apos;m most at home.</span>
                </p>
              </div>
            </div>

            {/* Photo 8 */}
            <div className={styles.masonryItem} onClick={() => openLightbox('/images/Sunset.webp')}>
              <div className={styles.imageWrapper}>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/images/mobile_sunset.webp" />
                  <Image
                    src="/images/Sunset.webp"
                    alt="Sunset"
                    width={400}
                    height={300}
                    className={styles.masonryImage}
                    loading="lazy"
                  />
                </picture>
                <div className={styles.imageOverlay}>
                  <span className={styles.imageCaption}>Golden Hour</span>
                </div>
              </div>
            </div>

            {/* Photo 9 */}
            <div className={styles.masonryItem} onClick={() => openLightbox('/images/View.webp')}>
              <div className={styles.imageWrapper}>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/images/mobile_view.webp" />
                  <Image
                    src="/images/View.webp"
                    alt="Mountain View"
                    width={400}
                    height={300}
                    className={styles.masonryImage}
                    loading="lazy"
                  />
                </picture>
                <div className={styles.imageOverlay}>
                  <span className={styles.imageCaption}>Mountain View</span>
                </div>
              </div>
            </div>

            {/* Photo 10 */}
            <div className={styles.masonryItem} onClick={() => openLightbox('/images/wash.webp')}>
              <div className={styles.imageWrapper}>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/images/mobile_wash.webp" />
                  <Image
                    src="/images/wash.webp"
                    alt="Desert Wash"
                    width={400}
                    height={300}
                    className={styles.masonryImage}
                    loading="lazy"
                  />
                </picture>
                <div className={styles.imageOverlay}>
                  <span className={styles.imageCaption}>Desert Wash</span>
                </div>
              </div>
            </div>

            {/* Text Block 4 - Spans 3 columns (full width) */}
            <div className={`${styles.masonryItem} ${styles.textBlock} ${styles.span3} ${styles.textBlockConclusion}`}>
              <div className={styles.textBlockAccent}></div>
              <div className={styles.textBlockContent}>
                <p className={styles.conclusionText}>
                  Every hobby I&apos;ve pursued has reinforced the same lesson: understanding how systems work, how they fail, and how to make them better requires patience, precision, and a willingness to get your hands dirty. It&apos;s a philosophy I bring to everything I do.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              ×
            </button>
            <button 
              className={`${styles.lightboxNav} ${styles.lightboxNavPrev}`}
              onClick={() => navigateGallery('prev')}
              aria-label="Previous image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <Image
              src={lightboxImage}
              alt="Full size image"
              width={900}
              height={675}
              className={styles.lightboxImage}
              quality={75}
              style={{ width: 'auto', height: 'auto', maxWidth: '70vw', maxHeight: '70vh' }}
            />
            <button 
              className={`${styles.lightboxNav} ${styles.lightboxNavNext}`}
              onClick={() => navigateGallery('next')}
              aria-label="Next image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
