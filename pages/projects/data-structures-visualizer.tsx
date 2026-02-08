import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import styles from '../../styles/ProjectDetail.module.css';

export default function DataStructuresVisualizer() {
  return (
    <>
      <Head>
        <title>Data Structures Visualizer - Luke Meyer</title>
        <meta name="description" content="Interactive tool for visualizing common data structures and algorithms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      
      <div className={styles.projectDetailContainer}>
        <section className={styles.projectDetailSection}>
          <div className={styles.projectHeader}>
            <Link href="/projects" className={styles.backLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Projects
            </Link>

            <div className={styles.projectIconLarge}>
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
            </div>

            <h1 className={styles.projectTitle}>Data Structures Visualizer</h1>
            <p className={styles.projectSubtitle}>
              Interactive educational tool for visualizing and understanding fundamental data structures and algorithms
            </p>
          </div>

          <div className={styles.projectContent}>
            <div className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Overview</h2>
              <p className={styles.contentText}>
                This interactive web application provides real-time visualization of essential data structures 
                including binary trees, linked lists, stacks, queues, hash tables, and graphs. The tool helps 
                students and developers understand how these structures work internally through dynamic animations 
                and step-by-step execution.
              </p>
              <p className={styles.contentText}>
                Users can perform various operations on each data structure and watch as the visualizer animates 
                the changes in real-time, making abstract concepts concrete and easier to grasp. The application 
                includes detailed explanations of time complexity for each operation.
              </p>
            </div>

            <div className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Key Features</h2>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  Interactive visualizations for 8+ common data structures
                </li>
                <li className={styles.featureItem}>
                  Step-by-step algorithm execution with playback controls
                </li>
                <li className={styles.featureItem}>
                  Real-time animations showing insertions, deletions, and traversals
                </li>
                <li className={styles.featureItem}>
                  Algorithm complexity analysis (Big O notation) for each operation
                </li>
                <li className={styles.featureItem}>
                  Code snippets showing implementation in multiple languages
                </li>
                <li className={styles.featureItem}>
                  Custom data input with validation and error handling
                </li>
                <li className={styles.featureItem}>
                  Responsive design optimized for desktop and tablet use
                </li>
                <li className={styles.featureItem}>
                  Dark mode support for comfortable extended viewing
                </li>
              </ul>
            </div>

            <div className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Technologies Used</h2>
              <div className={styles.techList}>
                <span className={styles.techItem}>React</span>
                <span className={styles.techItem}>TypeScript</span>
                <span className={styles.techItem}>Next.js</span>
                <span className={styles.techItem}>D3.js</span>
                <span className={styles.techItem}>CSS3 Animations</span>
                <span className={styles.techItem}>Framer Motion</span>
                <span className={styles.techItem}>Tailwind CSS</span>
              </div>
            </div>

            <div className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Supported Data Structures</h2>
              <p className={styles.contentText}>
                The visualizer currently supports the following data structures with full animation capabilities:
              </p>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  Binary Search Trees (BST) - insertion, deletion, search, traversals
                </li>
                <li className={styles.featureItem}>
                  Linked Lists (Singly & Doubly) - append, prepend, delete, reverse
                </li>
                <li className={styles.featureItem}>
                  Stacks - push, pop, peek with LIFO visualization
                </li>
                <li className={styles.featureItem}>
                  Queues - enqueue, dequeue with FIFO visualization
                </li>
                <li className={styles.featureItem}>
                  Hash Tables - insert, lookup, collision handling
                </li>
                <li className={styles.featureItem}>
                  Graphs (Directed & Undirected) - BFS, DFS traversals
                </li>
                <li className={styles.featureItem}>
                  Heaps (Min & Max) - insert, extract, heapify operations
                </li>
                <li className={styles.featureItem}>
                  AVL Trees - self-balancing rotations visualization
                </li>
              </ul>
            </div>

            <div className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Implementation Highlights</h2>
              <p className={styles.contentText}>
                Built with React and TypeScript for type safety and component reusability, the application uses 
                D3.js for sophisticated SVG-based visualizations and Framer Motion for smooth animations. 
                Each data structure is implemented as a separate module with comprehensive test coverage.
              </p>
              <p className={styles.contentText}>
                The project demonstrates advanced state management patterns, custom hooks for animation control, 
                and optimized rendering techniques to maintain 60 FPS even with complex visualizations. 
                Educational content is integrated directly into the UI with tooltips and contextual help.
              </p>
            </div>

            <div className={styles.projectLinks}>
              <a href="#" className={styles.projectLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
              <a href="https://www.youtube.com/watch?v=Tmd7msi6im4" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
