// HealthcareExpertise.jsx
import React from 'react';
import './healthcare.css';

const expertiseItems = [
  {
    title: "Patient Engagement Platforms",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9z" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ), // bell / notification → engagement
    color: "#3b82f6",
  },
  {
    title: "Developing Telemedicine Solutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="18" y1="8" x2="23" y2="13" />
        <line x1="23" y1="8" x2="18" y2="13" />
      </svg>
    ), // user + video call lines
    color: "#06b6d4",
  },
  {
    title: "EHR/EMR System Support And Integration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="13" x2="16" y2="13" />
        <line x1="12" y1="17" x2="16" y2="17" />
      </svg>
    ), // file text
    color: "#8b5cf6",
  },
  {
    title: "Health Information Exchange (HIE) Systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ), // share / location network
    color: "#f59e0b",
  },
  {
    title: "Mental Health And Wellness Apps",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ), // heart (wellness / mental)
    color: "#ec4899",
  },
  {
    title: "Remote Patient Monitoring (RPM) Solutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ), // activity / pulse
    color: "#ef4444",
  },
  {
    title: "Wearable Health Devices Integration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="8" y1="2" x2="16" y2="2" />
      </svg>
    ), // watch / wearable rectangle
    color: "#10b981",
  },
  {
    title: "AI And Machine Learning Solutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ), // help-circle → AI intelligence
    color: "#f97316",
  },
  {
    title: "Health Data Analytics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 4 4 4-8" />
      </svg>
    ), // trending up chart
    color: "#eab308",
  },
  {
    title: "Pharmaceutical And Drug Management Systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.5 6.5l-2-2" />
        <path d="M8.5 17.5l-2-2" />
        <path d="M15 2l-3 3" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ), // pill / capsule stylized
    color: "#0d9488",
  },
];

function HealthcareExpertise() {
  return (
    <section className="healthcare-expertise">
      <h2 className="section-title">
        Healthcare <span className="highlight">Expertise</span>
      </h2>

      <div className="orbit-container">
        <div className="center-hub">
          <svg viewBox="0 0 100 100" className="hub-svg">
            <circle cx="50" cy="50" r="38" className="hub-bg" />
            <g transform="translate(50,50)">
              <g className="pulse">
                <circle r="48" className="pulse-ring" />
                <circle r="52" className="pulse-ring delay-1" />
              </g>
            </g>
            <g className="center-icon">
              <rect x="35" y="20" width="30" height="60" rx="6" className="phone" />
              <circle cx="50" cy="72" r="4" className="home-btn" />
              <path d="M42 35 L58 35 L58 55 L50 62 L42 55 Z" className="heart" />
            </g>
          </svg>
        </div>

        {expertiseItems.map((item, index) => {
          const angle = (360 / expertiseItems.length) * index;
          const radius = 260; // adjust for desktop

          return (
            <div
              key={index}
              className="orbit-item"
              style={{
                '--angle': `${angle}deg`,
                '--color': item.color,
              }}
            >
              <div className="item-wrapper">
                <div className="icon-wrapper" style={{ background: `${item.color}15`, borderColor: item.color }}>
                  <div className="icon-inner">{item.icon}</div>
                </div>
                <div className="item-label">{item.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HealthcareExpertise;