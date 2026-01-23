import React from 'react';
import {  Lock, DollarSign, MapPin } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {   
  const reasons = [
    {
      icon: <MapPin size={32} />,
      title: 'Local Expertise',
      description: 'Deep understanding of KSA regulations (ZATCA, NPHIES)'
    },
    {
      icon: <Lock size={32} />,
      title: 'Secure Innovation (HIPAA Compliant)',
      description: 'We use "Sandbox AI" and HIPAA-standard encryption. Your patient data never leaves your secure server to train public models. Innovation without the risk.'
    },
    {
      icon: <DollarSign size={32} />,
      title: 'Cost Efficiency',
      description: 'Replace monthly subscriptions with a one-time asset'
    }
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="why-us-container">
        <div className="section-header">
          <h2 className="section-title">Built for the Kingdom\'s Healthcare Standards</h2>
          <p className="section-description">
            Combining local expertise with world-class technology
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
