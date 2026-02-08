import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import styles from '../../styles/ProjectDetail.module.css';

export default function MachineLearningClassifier() {
  return (
    <>
      <Head>
        <title>Machine Learning Classifier - Luke Meyer</title>
        <meta name="description" content="An intelligent classification system using neural networks" />
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
            </div>

            <h1 className={styles.projectTitle}>Machine Learning Classifier</h1>
            <p className={styles.projectSubtitle}>
              An intelligent classification system using neural networks for accurate pattern recognition
            </p>
          </div>

          <div className={styles.projectContent}>
            <div className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Overview</h2>
              <p className={styles.contentText}>
                This project implements a sophisticated machine learning classifier using neural networks to identify 
                and categorize complex patterns in data. The system leverages multi-layer perceptron architecture 
                with backpropagation to achieve high accuracy in classification tasks.
              </p>
              <p className={styles.contentText}>
                Built with a focus on modularity and extensibility, this classifier can be trained on various datasets 
                and adapted for different classification problems, from image recognition to text categorization.
              </p>
            </div>

            <div className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Key Features</h2>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  Multi-layer neural network architecture with configurable hidden layers
                </li>
                <li className={styles.featureItem}>
                  Backpropagation algorithm for efficient training and weight optimization
                </li>
                <li className={styles.featureItem}>
                  Support for multiple activation functions (ReLU, Sigmoid, Tanh)
                </li>
                <li className={styles.featureItem}>
                  Data preprocessing pipeline with normalization and feature scaling
                </li>
                <li className={styles.featureItem}>
                  Cross-validation and hyperparameter tuning capabilities
                </li>
                <li className={styles.featureItem}>
                  Visualization tools for training progress and model performance
                </li>
                <li className={styles.featureItem}>
                  Model persistence for saving and loading trained classifiers
                </li>
              </ul>
            </div>

            <div className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Technologies Used</h2>
              <div className={styles.techList}>
                <span className={styles.techItem}>Python</span>
                <span className={styles.techItem}>NumPy</span>
                <span className={styles.techItem}>scikit-learn</span>
                <span className={styles.techItem}>TensorFlow</span>
                <span className={styles.techItem}>Pandas</span>
                <span className={styles.techItem}>Matplotlib</span>
                <span className={styles.techItem}>Jupyter Notebook</span>
              </div>
            </div>

            <div className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Implementation Details</h2>
              <p className={styles.contentText}>
                The classifier was developed using object-oriented programming principles, with separate classes 
                for the neural network model, data preprocessing, and evaluation metrics. The training process 
                implements mini-batch gradient descent with momentum optimization to ensure fast convergence.
              </p>
              <p className={styles.contentText}>
                Performance evaluation includes accuracy, precision, recall, and F1-score metrics, with support 
                for generating confusion matrices and ROC curves. The system achieved over 90% accuracy on 
                standard benchmark datasets after hyperparameter optimization.
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
