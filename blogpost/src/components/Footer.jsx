import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} CebuAlert — Community Calamity Updates
        </p>
        <p className="copyright">
          This site uses ads to support emergency information efforts.
        </p>
      </div>
    </footer>
  );
};

export default Footer;