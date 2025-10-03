import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/post';
import AdBanner from '../components/AdBanner';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Post not found</h2>
        <Link to="/">← Back to Updates</Link>
      </div>
    );
  }

  return (
    <div>
      <AdBanner />
      <article className="post-content">
        <h1>{post.title}</h1>
        <p className="meta">Published on {post.date}</p>
        <p>{post.content}</p>
      </article>
      <div style={{ textAlign: 'center', margin: '2.5rem 0' }}>
        <Link to="/">← Back to all updates</Link>
      </div>
    </div>
  );
};

export default BlogPost;