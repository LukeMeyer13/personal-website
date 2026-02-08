import Head from 'next/head';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../styles/Resume.module.css';

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/Luke_Meyer_Resume.pdf';
    link.download = 'Luke_Meyer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <title>Resume - Luke Meyer</title>
        <meta name="description" content="View and download Luke Meyer's professional resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      
      <div className={styles.resumeContainer}>
        <main className={styles.resumeContent}>
          {/* Header Section with Profile */}
          <header className={styles.resumeHeader}>
            <div className={styles.profileSection}>
              <div className={styles.profileLeft}>
                <Image
                  src="/images/me.jpg"
                  alt="Luke Meyer"
                  width={200}
                  height={200}
                  className={styles.profileImage}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className={styles.profileRight}>
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
                <button onClick={handleDownload} className={styles.downloadButton}>
                  <svg className={styles.downloadIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </button>
              </div>
            </div>
          </header>

          <div className={styles.mainContent}>
            {/* Professional Summary Section */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>PROFESSIONAL SUMMARY</h2>
              <p className={styles.summaryText}>
                Motivated Computer Science student with a robust background in emergency services, software engineering, and computer systems. Proven leader with a track record of critical thinking in high-stress, high-risk environments. Currently seeking opportunities in autonomous drone development, software engineering, or cyber security to apply expertise in C++, Python, and Java.
              </p>
            </section>

            {/* Experience Section */}
            <section className={styles.section}>
              <h2 className={`${styles.sectionTitle} ${styles.workExperienceTitle}`}>WORK EXPERIENCE</h2>
              
              <div className={styles.experienceItem}>
                <div className={styles.jobHeader}>
                  <h3 className={styles.jobTitle}>BigShots Golf — <span className={styles.jobRole}>Lead Bartender / Operations Lead</span></h3>
                  <span className={styles.jobDate}>Current</span>
                </div>
                <ul className={styles.bulletList}>
                  <li><strong>Workflow Optimization:</strong> Designed and maintained inventory tracking workflows to ensure resource availability and improve data accuracy.</li>
                  <li><strong>Systems Analysis:</strong> Identified inefficiencies in service flow and implemented process improvements to reduce latency and wait times.</li>
                  <li><strong>Stakeholder Engagement:</strong> Collaborated with management to analyze sales patterns and optimize staffing and menu offerings.</li>
                  <li><strong>Real-Time Problem Solving:</strong> Balanced competing priorities in a high-availability, fast-paced environment to maximize throughput.</li>
                  <li><strong>Resource Management:</strong> Mentored and onboarded new hires using structured training processes to ensure operational consistency.</li>
                </ul>
              </div>

              <div className={styles.experienceItem}>
                <div className={styles.jobHeader}>
                  <h3 className={styles.jobTitle}>US Forest Service — <span className={styles.jobRole}>Wildland Firefighter / Advanced-EMT / Squad Boss</span></h3>
                  <span className={styles.jobDate}>2017 - 2021</span>
                </div>
                <ul className={styles.bulletList}>
                  <li><strong>Strategic Decision Making:</strong> Made time-critical decisions using incomplete and evolving information in high-risk environments.</li>
                  <li><strong>Mission-Critical Leadership:</strong> Led small teams in field operations with strict safety, reliability, and compliance constraints.</li>
                  <li><strong>Standard Operating Procedures:</strong> Executed complex operations using SOPs while adapting to dynamic and unpredictable conditions.</li>
                  <li><strong>Cross-Functional Coordination:</strong> Coordinated across multi-agency teams using structured communication tools, including Microsoft Teams.</li>
                  <li><strong>Incident Review & Compliance:</strong> Logged, documented, and reviewed operational data to improve future outcomes and ensure regulatory compliance.</li>
                </ul>
              </div>
            </section>

            {/* Technical Skills and Relevant Courses - Side by Side */}
            <div className={styles.skillsCoursesGrid}>
              {/* Technical Skills Section */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>TECHNICAL SKILLS</h2>
                <ul className={styles.skillsList}>
                  <li>Python</li>
                  <li>C++</li>
                  <li>Java</li>
                  <li>SQL</li>
                  <li>HTML/CSS</li>
                  <li>Linux/Unix Fundamentals</li>
                  <li>Information Security</li>
                  <li>Network Security</li>
                  <li>Version Control (Git)</li>
                  <li>Object-Oriented Design</li>
                  <li>Software Testing & Debugging</li>
                  <li>AI Development Tools</li>
                  <li>IT Project Management</li>
                  <li>IT Leadership</li>
                  <li>Technical Documentation</li>
                  <li>Systems Thinking</li>
                </ul>
              </section>

              {/* Relevant Courses Section */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>RELEVANT COURSES</h2>
                <ul className={styles.coursesList}>
                  <li>Calculus 1</li>
                  <li>Discrete Mathematics 1</li>
                  <li>Discrete Mathematics 2</li>
                  <li>Computer Organization & Architecture</li>
                  <li>Java Fundamentals & Frameworks</li>
                  <li>Scripting & Programming</li>
                  <li>Object-Oriented Programming</li>
                  <li>Networking Fundamentals</li>
                  <li>Linux/Unix Fundamentals</li>
                  <li>Fundamentals of Information Security</li>
                  <li>Data Management</li>
                  <li>Relational Databases</li>
                  <li>Algorithms & Data Structures</li>
                  <li>Artificial Intelligence</li>
                  <li>Practical Applications of Prompt Engineering</li>
                  <li>IT Project Management</li>
                  <li>Ethics in Technology</li>
                  <li>Systems Thinking</li>
                  <li>IT Fundamentals</li>
                </ul>
              </section>
            </div>

            {/* Education Section */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>EDUCATION</h2>
              
              <div className={styles.educationItem}>
                <h3 className={styles.degree}>Western Governors University, Remote — <span className={styles.degreeType}>Computer Science</span></h3>
                <p className={styles.educationDate}>January 2025 - Current</p>
                <p className={styles.educationDetails}>Currently approaching senior year. Projected graduation date of July, 2026.</p>
              </div>

              <div className={styles.educationItem}>
                <h3 className={styles.degree}>Utah Tech University, St. George, UT — <span className={styles.degreeType}>Software Engineering</span></h3>
                <p className={styles.educationDate}>January 2021 - May 2023</p>
                <p className={styles.educationDetails}>Completed five semesters of foundational and intermediate coursework.</p>
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
