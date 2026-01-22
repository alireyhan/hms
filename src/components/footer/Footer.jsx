import React from 'react';
import { Mail, Phone, Linkedin, Award } from 'lucide-react';

import './Footer.css';

const Footer = () => {

const badges = [
  'CBAHI Compliant Architecture',
  'HIPAA Compliant Security',
  'NPHIES Approved Integration',
  'VAT & ZATCA Ready'
];


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">HMS</h3>
            <p className="footer-tagline">
              Next-Generation Hospital Management System built for the Kingdom\'s healthcare standards.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Compliance & Certifications</h4>
            <div className="footer-badges">
              {badges.map((badge, index) => (
                <div key={index} className="footer-badge">
                  <Award size={16} />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact">
              <a href="tel:+966123456789" className="contact-link">
                <Phone size={18} />
                <span>+966 12 345 6789</span>
              </a>
              <a href="mailto:info@hms-ksa.com" className="contact-link">
                <Mail size={18} />
                <span>info@hms-ksa.com</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} HMS - Hospital Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
