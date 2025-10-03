import React from 'react';
import AdBanner from '../components/AdBanner';

const Contact = () => {
  return (
    <div>
      <h1 className="page-title">Contact Us</h1>
      <p className="subtitle">Have a tip, correction, or question?</p>

      <AdBanner />

      <div className="post-content">
        <p>
          While we are a small volunteer team, we read every message. Please use the form below or email us directly.
        </p>

        <h2 style={{ marginTop: '1.5rem' }}>📧 Email</h2>
        <p>
          For urgent corrections or tips: <strong>info@cebualert.ph</strong>
        </p>

        <h2 style={{ marginTop: '1.5rem' }}>📝 Send a Message</h2>
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message..."></textarea>
          </div>
          <button className="submit-btn">Send Message</button>
        </div>

        <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#718096' }}>
          ⚠️ <strong>Note:</strong> This form is static (no backend). For real submissions, you’ll need to integrate 
          a service like Formspree, Netlify Forms, or EmailJS later.
        </p>
      </div>
    </div>
  );
};

export default Contact;