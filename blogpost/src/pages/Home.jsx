// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/post'; // ✅ Fixed typo: "post" → "posts"
import AdBanner from '../components/AdBanner';

const Home = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Start with 3 posts

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, posts.length));
  };

  const displayedPosts = posts.slice(0, visibleCount);

  return (
    <div>
      <h1 className="page-title">Cebu Calamity Updates</h1>
      <p className="subtitle">Trusted, timely information during emergencies in Cebu</p>

      <div className="intro">
        <p>
          CebuAlert provides verified updates on floods, landslides, typhoons, and relief efforts across Cebu Province. 
          We compile official reports from LGUs, PAGASA, and disaster agencies to keep communities informed and safe.
        </p>
      </div>

      <AdBanner />

      <h2 style={{ marginBottom: '1.5rem', color: '#2d3748' }}>Latest Updates</h2>
      <div className="posts-grid">
        {displayedPosts.map(post => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p>{post.excerpt}</p>
            <Link to={`/post/${post.id}`} className="read-more">
              Read full update →
            </Link>
          </div>
        ))}
      </div>

      {/* "Load More" Button */}
      {visibleCount < posts.length && (
        <div style={{ textAlign: 'center', margin: '2.5rem 0' }}>
          <button
            onClick={loadMore}
            className="load-more-btn"
            style={{
              background: '#2b6cb0',
              color: 'white',
              border: 'none',
              padding: '0.8rem 1.8rem',
              borderRadius: '8px',
              fontSize: '1.05rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#1a569d'}
            onMouseOut={(e) => e.target.style.background = '#2b6cb0'}
          >
            Load More News
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;