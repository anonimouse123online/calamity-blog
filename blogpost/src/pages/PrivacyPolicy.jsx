import React from 'react';
import AdBanner from '../components/AdBanner';

const PrivacyPolicy = () => {
  return (
    <div>
      <h1 className="page-title">Privacy Policy</h1>
      <p className="subtitle">Last updated: July 2024</p>

      <AdBanner />

      <div className="post-content">
        <p>
          This Privacy Policy describes how CebuAlert ("we", "our", or "us") collects, uses, and shares your information 
          when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>
          As a static website with no backend, we do not collect personal data through forms. However, we use Google AdSense, 
          which may collect non-personal information (e.g., IP address, browser type, pages visited) for ad personalization.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We use Google AdSense to display ads. Google’s use of advertising cookies enables it to serve ads based on your 
          visits to this site and other sites. You may opt out of personalized advertising by visiting 
          <a href="https://adssettings.google.com" target="_blank" rel="noreferrer"> Google’s Ad Settings</a>.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. The updated version will be posted here with a new "Last updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at: <strong>info@cebualert.ph</strong>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;