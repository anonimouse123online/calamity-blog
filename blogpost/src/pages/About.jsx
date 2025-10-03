import React from 'react';
import AdBanner from '../components/AdBanner';

const About = () => {
  return (
    <div>
      <h1 className="page-title">About CebuAlert</h1>
      <p className="subtitle">Our mission during times of crisis</p>

      <AdBanner />

      <div className="post-content">
        <h2>Who We Are</h2>
        <p>
          CebuAlert is a community-driven initiative created to provide accurate, timely, and actionable information 
          during natural disasters in Cebu Province. We are not affiliated with any government agency, but we rely 
          exclusively on official sources like PAGASA, NDRRMC, and local LGUs.
        </p>

        <h2>Why We Exist</h2>
        <p>
          During calamities, misinformation spreads rapidly — causing panic, confusion, and even danger. 
          Our goal is to be a trusted hub where residents, responders, and concerned citizens can find:
        </p>
        <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
          <li>Verified weather and hazard updates</li>
          <li>Evacuation center locations</li>
          <li>Emergency contact numbers</li>
          <li>Relief operation details</li>
          <li>Ways to help affected communities</li>
        </ul>

        <h2>Our Commitment</h2>
        <p>
          We update this site as new official information becomes available. All content is reviewed for accuracy 
          before publication. If you spot an error, please <a href="/contact">contact us</a> immediately.
        </p>
      </div>
    </div>
  );
};

export default About;