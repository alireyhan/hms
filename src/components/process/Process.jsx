// Process.jsx
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

import './Process.css';

const Process = () => {
  const getIcon = (iconName) => {
    const Icon = Icons[iconName];
    return Icon ? <Icon size={32} /> : <Icons.Settings size={32} />;
  };

  const processSteps = [
    {
      id: 1,
      title: 'Audit',
      description: 'We map your workflows to CBAHI standards',
      icon: 'Search',
    },
    {
      id: 2,
      title: 'Migration',
      description: 'Secure transfer of patient data & history',
      icon: 'Database',
    },
    {
      id: 3,
      title: 'Setup',
      description: 'NPHIES configuration & AI-Safety protocols setup',
      icon: 'Settings',
    },
    {
      id: 4,
      title: 'Go-Live',
      description: 'On-site training & support',
      icon: 'Rocket',
    },
  ];

  // Animation variants - same as before
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -140,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
        duration: 0.9,
      },
    },
  };

  return (
    <section id="process" className="process-section">
      <div className="process-container">
        <div className="section-header">
          <h2 className="section-title">From Chaos to Compliance in 4 Steps</h2>
          <p className="section-description">
            Our proven implementation roadmap ensures a smooth transition
          </p>
        </div>

        <motion.div
          className="process-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,           // ← Changed: animate every time
            amount: 0.2,           // start when ~20% of the element is visible
            margin: "-80px",       // optional: trigger a bit earlier
          }}
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.id}
              className="process-step"
              variants={cardVariants}
            >
              <div className="step-number">{step.id}</div>
              <div className="step-icon">{getIcon(step.icon)}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>

              {step.id < processSteps.length && (
                <div className="step-connector">
                  <Icons.ArrowRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;