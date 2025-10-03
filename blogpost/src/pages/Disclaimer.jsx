import React from 'react';
import AdBanner from '../components/AdBanner';

const Disclaimer = () => {
  return (
    <div>
      <h1 className="page-title">Disclaimer</h1>
      <p className="subtitle">Important legal notice</p>

      <AdBanner />

      <div className="post-content">
        <p>
          The information provided on CebuAlert is for general informational purposes only. 
          While we strive to provide accurate and up-to-date content, we make no representations or warranties 
          of any kind, express or implied, about the completeness, accuracy, reliability, or suitability 
          of the information.
        </p>

        <h2>No Professional Advice</h2>
        <p>
          Content on this site should not be considered professional emergency, medical, or legal advice. 
          Always seek guidance from official sources (e.g., LGU, PNP, BFP, Red Cross) during a crisis.
        </p>

        <h2>External Links</h2>
        <p>
          We may link to third-party websites. We have no control over their content and assume no responsibility 
          for their practices or accuracy.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          In no event shall CebuAlert be liable for any loss or damage arising from your reliance on information 
          published on this site.
        </p>

        <h2>Updates</h2>
        <p>
          We update our content as new official information becomes available. Always verify critical details 
          with local authorities.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;