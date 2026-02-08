import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  const projects = [
    {
      id: 'machine-learning-classifier',
      title: 'Machine Learning Classifier',
      description: 'An intelligent classification system using neural networks',
      icon: (
        <svg className={styles.projectIcon} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Neural Network Design */}
          {/* Input Layer */}
          <circle cx="40" cy="60" r="12" fill="#175973" />
          <circle cx="40" cy="100" r="12" fill="#175973" />
          <circle cx="40" cy="140" r="12" fill="#175973" />
          
          {/* Hidden Layer */}
          <circle cx="100" cy="40" r="12" fill="#F28749" />
          <circle cx="100" cy="80" r="12" fill="#F28749" />
          <circle cx="100" cy="120" r="12" fill="#F28749" />
          <circle cx="100" cy="160" r="12" fill="#F28749" />
          
          {/* Output Layer */}
          <circle cx="160" cy="80" r="12" fill="#F27141" />
          <circle cx="160" cy="120" r="12" fill="#F27141" />
          
          {/* Connections */}
          <line x1="52" y1="60" x2="88" y2="40" stroke="#175973" strokeWidth="2" opacity="0.4" />
          <line x1="52" y1="60" x2="88" y2="80" stroke="#175973" strokeWidth="2" opacity="0.4" />
          <line x1="52" y1="100" x2="88" y2="80" stroke="#175973" strokeWidth="2" opacity="0.4" />
          <line x1="52" y1="100" x2="88" y2="120" stroke="#175973" strokeWidth="2" opacity="0.4" />
          <line x1="52" y1="140" x2="88" y2="120" stroke="#175973" strokeWidth="2" opacity="0.4" />
          <line x1="52" y1="140" x2="88" y2="160" stroke="#175973" strokeWidth="2" opacity="0.4" />
          
          <line x1="112" y1="40" x2="148" y2="80" stroke="#F28749" strokeWidth="2" opacity="0.4" />
          <line x1="112" y1="80" x2="148" y2="80" stroke="#F28749" strokeWidth="2" opacity="0.4" />
          <line x1="112" y1="120" x2="148" y2="120" stroke="#F28749" strokeWidth="2" opacity="0.4" />
          <line x1="112" y1="160" x2="148" y2="120" stroke="#F28749" strokeWidth="2" opacity="0.4" />
        </svg>
      )
    },
    {
      id: 'data-structures-visualizer',
      title: 'Data Structures Visualizer',
      description: 'Interactive tool for visualizing common data structures and algorithms',
      icon: (
        <svg className={styles.projectIcon} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Binary Tree Design */}
          {/* Root Node */}
          <rect x="85" y="20" width="30" height="30" rx="4" fill="#175973" stroke="#072040" strokeWidth="2" />
          <text x="100" y="40" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">A</text>
          
          {/* Level 2 Nodes */}
          <rect x="45" y="70" width="30" height="30" rx="4" fill="#F28749" stroke="#072040" strokeWidth="2" />
          <text x="60" y="90" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">B</text>
          
          <rect x="125" y="70" width="30" height="30" rx="4" fill="#F28749" stroke="#072040" strokeWidth="2" />
          <text x="140" y="90" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">C</text>
          
          {/* Level 3 Nodes */}
          <rect x="20" y="120" width="30" height="30" rx="4" fill="#F27141" stroke="#072040" strokeWidth="2" />
          <text x="35" y="140" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">D</text>
          
          <rect x="70" y="120" width="30" height="30" rx="4" fill="#F27141" stroke="#072040" strokeWidth="2" />
          <text x="85" y="140" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">E</text>
          
          <rect x="110" y="120" width="30" height="30" rx="4" fill="#F27141" stroke="#072040" strokeWidth="2" />
          <text x="125" y="140" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">F</text>
          
          <rect x="150" y="120" width="30" height="30" rx="4" fill="#F27141" stroke="#072040" strokeWidth="2" />
          <text x="165" y="140" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">G</text>
          
          {/* Connections */}
          <line x1="100" y1="50" x2="60" y2="70" stroke="#072040" strokeWidth="2" />
          <line x1="100" y1="50" x2="140" y2="70" stroke="#072040" strokeWidth="2" />
          
          <line x1="60" y1="100" x2="35" y2="120" stroke="#072040" strokeWidth="2" />
          <line x1="60" y1="100" x2="85" y2="120" stroke="#072040" strokeWidth="2" />
          
          <line x1="140" y1="100" x2="125" y2="120" stroke="#072040" strokeWidth="2" />
          <line x1="140" y1="100" x2="165" y2="120" stroke="#072040" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>Projects - Luke Meyer</title>
        <meta name="description" content="View my computer science projects and work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      
      <div className={styles.projectsContainer}>
        <section className={styles.projectsSection}>
          <h1 className={styles.sectionHeading}>My Projects</h1>
          <p className={styles.sectionSubheading}>
            Explore my computer science projects and technical work
          </p>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <Link 
                key={project.id}
                href={`/projects/${project.id}`}
                className={styles.projectCard}
              >
                <div className={styles.projectIconContainer}>
                  {project.icon}
                </div>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
