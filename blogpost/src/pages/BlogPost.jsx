// src/pages/BlogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AdBanner from '../components/AdBanner';
import { supabase } from '../lib/supabaseClient'; // ✅ Supabase client

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Convert URL param to number (Supabase ID is bigint)
        const postId = parseInt(id, 10);
        if (isNaN(postId)) throw new Error('Invalid post ID');

        const { data, error } = await supabase
          .from('news')
          .select('*')
          .eq('id', postId)
          .single(); // Ensures only one record

        if (error) throw error;

        setPost(data);
        console.log('Fetched post:', data);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Post not found or failed to load.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Loading post...</h2>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>{error || 'Post not found'}</h2>
        <Link to="/">← Back to Updates</Link>
      </div>
    );
  }

  return (
    <div>
      <AdBanner />
      <article className="post-content">
        {post.image_url && (
          <img
            src={post.image_url}
            alt={post.title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              marginBottom: '1.5rem'
            }}
          />
        )}
        <h1>{post.title}</h1>
        <p className="meta">
          Published on{' '}
          {new Date(post.created_at).toLocaleDateString('en-PH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        <p>{post.content}</p>
      </article>
      <div style={{ textAlign: 'center', margin: '2.5rem 0' }}>
        <Link to="/">← Back to all updates</Link>
      </div>
    </div>
  );
};

export default BlogPost;