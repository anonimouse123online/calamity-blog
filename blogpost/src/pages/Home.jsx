// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdBanner from '../components/AdBanner';
import { supabase } from '../lib/supabaseClient'; // ✅ Supabase client

const Home = () => {
  const [news, setNews] = useState([]); // Will hold live news from Supabase
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  // Fetch news from Supabase on component mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        setNews(data || []);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load updates. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, news.length));
  };

  const displayedNews = news.slice(0, visibleCount);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 className="page-title">Cebu Calamity Updates</h1>
        <p>Loading latest updates...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
        <h1 className="page-title">Cebu Calamity Updates</h1>
        <p>{error}</p>
      </div>
    );
  }

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
        {displayedNews.length === 0 ? (
          <p>No updates available at the moment.</p>
        ) : (
          displayedNews.map(item => (
            <div key={item.id} className="post-card">
              {item.image_url && (
                <img
                  src={item.image_url}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '6px',
                    marginBottom: '12px'
                  }}
                />
              )}
              <h2>{item.title}</h2>
              <p className="date">
                {new Date(item.created_at).toLocaleDateString('en-PH', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p>{item.content.substring(0, 150)}...</p>
              <Link to={`/post/${item.id}`} className="read-more">
                Read full update →
              </Link>
            </div>
          ))
        )}
      </div>

      {/* "Load More" Button */}
      {visibleCount < news.length && (
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