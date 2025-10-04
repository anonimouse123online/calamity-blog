// src/pages/Admin.jsx
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import ImageUploader from '../components/ImageUploader';

export default function Admin() {
  // Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  // Form state (fully controlled)
  const [title, setTitle] = useState('');       // ✅ initialized to ''
  const [content, setContent] = useState('');   // ✅ initialized to ''
  const [type, setType] = useState('news');     // ✅ initialized to valid default
  const [imageUrl, setImageUrl] = useState(''); // ✅ initialized to ''

  // Check if already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };
    checkSession();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Login failed: ' + error.message);
    } else {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    supabase.auth.signOut();
    setIsLoggedIn(false);
    // Optional: reset form on logout
    setTitle('');
    setContent('');
    setType('news');
    setImageUrl('');
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from('news').insert({
      title,
      content,
      type,
      image_url: imageUrl || null,
    });

    if (error) {
      alert('Failed to post: ' + error.message);
    } else {
      alert('Published!');
      // Reset form
      setTitle('');
      setContent('');
      setType('news');
      setImageUrl('');
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
        <h2>Admin Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={handleLogout} style={{ marginBottom: '1rem' }}>
        Logout
      </button>
      <h2>Create News / Happenings</h2>
      <form onSubmit={handlePostSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={title} // ✅ controlled
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ display: 'block', margin: '8px 0', padding: '8px', width: '100%' }}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={content} // ✅ controlled
          onChange={(e) => setContent(e.target.value)}
          required
          rows="6"
          style={{ display: 'block', margin: '8px 0', padding: '8px', width: '100%' }}
        />
        <select
          name="type"
          value={type} // ✅ controlled
          onChange={(e) => setType(e.target.value)}
          style={{ display: 'block', margin: '8px 0', padding: '8px', width: '200px' }}
        >
          <option value="news">News</option>
          <option value="happenings">Happenings</option>
        </select>

        <ImageUploader onUpload={setImageUrl} />

        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            style={{ maxWidth: '300px', margin: '10px 0', border: '1px solid #ddd' }}
          />
        )}

        <button type="submit" style={{ marginTop: '16px' }}>
          Publish News
        </button>
      </form>
    </div>
  );
}