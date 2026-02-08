import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../styles/Projects.module.css';

export default function Projects() {
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

          <div className={styles.projectsPlaceholder}>
            <p>Come back soon to see my projects!</p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
