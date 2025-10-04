// src/components/ImageUploader.jsx
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function ImageUploader({ onUpload }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    // Sanitize filename: replace spaces and special chars to avoid URL issues
    const safeFileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    
    try {
      // Upload file
      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(safeFileName, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) throw uploadError;

      // ✅ Get public URL — this should return a clean, valid URL
      const { data, error: urlError } = await supabase.storage
        .from('blog-images')
        .getPublicUrl(safeFileName);

      if (urlError) throw urlError;

      // Ensure publicUrl exists
      if (!data?.publicUrl) {
        throw new Error('Failed to generate public URL');
      }

      onUpload(data.publicUrl);
    } catch (error) {
      console.error('Image upload failed:', error);
      alert('Upload failed: ' + (error.message || 'Unknown error'));
    } finally {
      setUploading(false);
      setFile(null);
    }
  };

  return (
    <div style={{ margin: '10px 0' }}>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button 
        type="button" 
        onClick={handleUpload} 
        disabled={!file || uploading}
        style={{ marginLeft: '8px' }}
      >
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
    </div>
  );
}