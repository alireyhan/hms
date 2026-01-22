import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const handleDemoRequest = () => {
    alert('Demo request submitted!');
  };

  const badges = [
    'CBAHI Compliant Architecture',
    'HIPAA Compliant Security',
    'NPHIES Approved Integration',
    'VAT & ZATCA Ready'
  ];

  useEffect(() => {
    const section = document.getElementById('home');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('show');
          } else {
            section.classList.remove('show');
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Next-Gen Hospital Management System
            </h1>
            <p className="hero-subtitle">
              Fully compliant with NPHIES and CBAHI standards. Unify your clinical,
              financial, and AI-enhanced operations on a single HIPAA & CBAHI-compliant platform.
            </p>
            <button className="hero-cta" onClick={handleDemoRequest}>
              Request a Demo
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="hero-badges">
            {badges.map((badge, index) => (
              <div key={index} className="badge-item">
                <CheckCircle size={20} className="badge-icon" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="mockup-title">Hospital Dashboard</div>
            </div>
            <div className="mockup-content">
              <div className="mockup-sidebar">
                <div className="mockup-menu-item active"></div>
                <div className="mockup-menu-item"></div>
                <div className="mockup-menu-item"></div>
                <div className="mockup-menu-item"></div>
              </div>
              <div className="mockup-main">
                <div className="mockup-stat-grid">
                  <div className="mockup-stat"></div>
                  <div className="mockup-stat"></div>
                  <div className="mockup-stat"></div>
                  <div className="mockup-stat"></div>
                </div>
                <div className="mockup-chart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
