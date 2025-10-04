// src/pages/NewsList.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching news:', error);
      } else {
        setNews(data);
      }
    };

    fetchNews();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Latest News & Happenings</h1>
      {news.length === 0 ? (
        <p>No news yet.</p>
      ) : (
        news.map((item) => (
          <article key={item.id} style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
            {item.image_url && (
              <img
                src={item.image_url}
                alt={item.title}
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
              />
            )}
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <small>
              {item.type === 'news' ? '📰 News' : '🎉 Happenings'} •{' '}
              {new Date(item.created_at).toLocaleDateString()}
            </small>
          </article>
        ))
      )}
    </div>
  );
}