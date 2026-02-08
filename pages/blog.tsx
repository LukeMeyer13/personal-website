import Head from 'next/head';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../styles/Blog.module.css';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  preview: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Welcome to my blog, thanks for stopping by!",
    date: "February 7, 2026",
    preview: "Thanks for visiting my blog! I'm excited to share my journey through my final semester of school, personal projects, and insights into the ever-evolving tech landscape.",
    content: `Welcome to my blog! I'm thrilled to have you here and excited to share this space with you.

This blog serves as both a chronicle and a creative outlet. As I navigate through my final semester of school, I'll be documenting my progress, challenges, and victories along the way. It's a significant milestone, and I want to capture the journey as authentically as possible.

Beyond academics, I'm passionate about exploring topics in the tech field that genuinely interest me. You'll find posts covering a wide range of subjects—from deep dives into specific technologies to broader discussions about where the industry is headed.

One of my main focuses here will be personal projects. As I build and experiment, I plan to walk through the development process step-by-step, sharing the interesting parts that I think others might find valuable. Whether it's a clever solution to a tricky problem or a new tool I've discovered, I'll break it down into digestible summaries and tutorials. My goal is to make these posts both informative and accessible, whether you're just starting out or looking to expand your skillset.

The tech world moves incredibly fast, and staying current is both challenging and exhilarating. I'm particularly interested in following developments in artificial intelligence applications—how AI is being integrated into everyday tools, the ethical considerations that come with it, and the practical implications for developers and users alike. Additionally, I'll be keeping a close eye on UAV (unmanned aerial vehicle) policy and technological advances. The drone industry is evolving rapidly, with new regulations and innovations emerging regularly, and I find the intersection of technology, policy, and real-world application fascinating.

I hope this blog becomes a place where I can share what I'm learning, connect with others who share similar interests, and maybe even help someone solve a problem or discover something new. Thanks again for stopping by—I'm looking forward to this journey, and I'm glad you're here for it!`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <Head>
        <title>Blog - Personal Portfolio</title>
        <meta name="description" content="Read my blog posts about computer science and technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation />
      
      <div className={styles.blogContainer}>
        <h1 className={styles.pageHeading}>Welcome To My Blog</h1>
        
        <div className={styles.blogPostsList}>
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className={styles.blogPostCard}
              onClick={() => openPost(post)}
            >
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postDate}>{post.date}</p>
              <p className={styles.postPreview}>{post.preview}</p>
              <div className={styles.readMoreIndicator}>
                Click to continue reading →
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className={styles.modal} onClick={closePost}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closePost}>
              ×
            </button>
            <article className={styles.modalArticle}>
              <h1 className={styles.modalTitle}>{selectedPost.title}</h1>
              <p className={styles.modalDate}>{selectedPost.date}</p>
              <div className={styles.modalBody}>
                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
}
