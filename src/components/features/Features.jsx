import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import './Features.css';

import img1 from '../../assets/hero-bg.png';
import img2 from '../../assets/logo1.png';
import img3 from '../../assets/logo2.png';
import img4 from '../../assets/logo3.png';

const featuresData = [
  {
    id: 1,
    title: 'Patient Registration & History (The Entry Point)',
    headline: 'One Patient, One Record',
    icon: 'FileText',
    image: 'https://via.placeholder.com/720x450?text=Patient+Profile',
    description: 'Centralized patient data management with secure, CBAHI-compliant archiving.',
    capabilities: [
      'Centralized Data: Demographics, history, and documents in one view',
      'Universal Search: Find patient records instantly across any department',
      'Secure Archiving: CBAHI-compliant history tracking and storage'
    ]
  },
  {
    id: 2,
    title: 'Appointments & Encounters (The Interaction)',
    headline: 'Seamless Patient Flow',
    icon: 'Calendar',
    image: img3,
    description: 'Smart scheduling with real-time queue management and encounter tracking.',
    capabilities: [
      'Smart Scheduling: Drag-and-drop booking with conflict detection',
      'Queue Management: Real-time tracking of patient status (Waiting, In-Consult)',
      'Encounter History: Complete timeline of all previous visits'
    ]
  },
  {
    id: 3,
    title: 'Vital Signs & Triage (The Assessment)',
    headline: 'Rapid Clinical Documentation',
    icon: 'Stethoscope',
    image: img4,
    description: 'Smart templates and AI-assisted documentation for faster charting.',
    capabilities: [
      'Smart Templates: Pre-built forms for SOAP notes and discharge summaries',
      'Vitals Trending: Visual graphs for BP, Pulse, and Temperature history',
      'Voice-to-Text: AI-assisted dictation for faster charting'
    ]
  },
  {
    id: 4,
    title: 'Clinical Notes & Diagnosis (The Consultation)',
    headline: 'Rapid Clinical Documentation',
    icon: 'Stethoscope',
    image: img4,
    description: 'Smart templates and AI-assisted documentation for faster charting.',
    capabilities: [
      'Smart Templates: Pre-built forms for SOAP notes and discharge summaries',
      'Vitals Trending: Visual graphs for BP, Pulse, and Temperature history',
      'Voice-to-Text: AI-assisted dictation for faster charting'
    ]
  },
  {
    id: 5,
    title: 'Lab, Imaging & Diagnostic Orders (The Investigation)',
    headline: 'Integrated Diagnostics',
    icon: 'TestTube',
    image: 'https://via.placeholder.com/720x450?text=Lab+%26+Imaging+Orders',
    description: 'Seamless diagnostic ordering with automatic result syncing.',
    capabilities: [
      'Direct Ordering: Request labs/imaging from the consultation screen',
      'PACS/LIMS Link: Auto-sync results back to the patient file',
      'Status Tracking: Monitor "Sample Collected" to "Result Ready"'
    ]
  },
  {
    id: 6,
    title: 'Prescriptions & Procedures (The Treatment)',
    headline: 'Error-Free Dispensing',
    icon: 'Pill',
    image: 'https://via.placeholder.com/720x450?text=e-Prescriptions',
    description: 'Digital prescriptions with automated safety checks and drug interaction alerts.',
    capabilities: [
      'e-Prescribing: Digital orders sent instantly to the pharmacy',
      'Drug Interaction Alerts: Automated safety warnings for doctors',
      'Dosage Templates: Standardized protocols for common treatments'
    ]
  },
  {
    id: 7,
    title: 'Billing & Payments (The Transaction)',
    headline: 'Automated Financials',
    icon: 'Receipt',
    image: img1,
    description: 'ZATCA-compliant e-invoicing with unified billing across all departments.',
    capabilities: [
      'ZATCA E-Invoicing: Fully compliant QR code generation',
      'Unified Billing: Combines pharmacy, lab, and consult charges automatically',
      'Payment Gateways: Supports cash, card, and insurance split-payments'
    ]
  },
  {
    id: 8,
    title: 'Doctor Commission & Revenue (The Incentive)',
    headline: 'Transparent Incentives',
    icon: 'DollarSign',
    image: 'https://via.placeholder.com/720x450?text=Doctor+Commission+Dashboard',
    description: 'Automated commission calculations with real-time earnings tracking.',
    capabilities: [
      'Auto-Calculation: Commission generated instantly upon invoice payment',
      'Flexible Rules: Set different rates for procedures, consults, or pharmacy',
      'Performance Reports: Real-time earnings dashboard for doctors'
    ]
  },
  {
    id: 9,
    title: 'Inventory & Pharmacy (The Fulfillment)',
    headline: 'Smart Supply Chain',
    icon: 'Package',
    image: 'https://via.placeholder.com/720x450?text=Inventory+%26+Stock',
    description: 'Live stock tracking with expiry alerts and auto-replenishment.',
    capabilities: [
      'Live Deduction: Stock decreases instantly when medicine is dispensed',
      'Expiry Tracking: Alerts for near-expiry batches (CBAHI Requirement)',
      'Auto-Replenishment: Purchase orders generated when stock hits low levels'
    ]
  },
  {
    id: 10,
    title: 'Insurance Policies & Claims (The Reimbursement)',
    headline: 'NPHIES-Ready Insurance',
    icon: 'Shield',
    image: img2,
    description: 'Real-time eligibility checks and automated claims management.',
    capabilities: [
      'Real-Time Eligibility: Instant NPHIES check before consultation',
      'Claims Management: Automated scrubbing to reduce rejections',
      'Policy Rules: Auto-apply co-pays and deductibles'
    ]
  },
  {
    id: 11,
    title: 'Staff Management (Doctors, Nurses, Admin, Support Staff)',
    headline: 'Unified Workforce Control',
    icon: 'Users',
    image: 'https://via.placeholder.com/720x450?text=Staff+%26+Roster',
    description: 'Comprehensive staff management with role-based access and automated rostering.',
    capabilities: [
      'Role-Based Access: Secure permissions for Doctors, Nurses, and Admin',
      'Shift Management: Automated rostering and attendance tracking',
      'HR Integration: Linked directly to payroll and performance KPIs'
    ]
  },
  {
    id: 12,
    title: 'Audit Logs & Compliance (The Governance)',
    headline: 'Accreditation Ready',
    icon: 'FileCheck',
    image: 'https://via.placeholder.com/720x450/1e40af/ffffff?text=Audit+Logs+%26+Compliance',
    description: 'Complete audit trail with HIPAA-compliant data encryption.',
    capabilities: [
      'Full Traceability: Every view, edit, and print is logged with a timestamp',
      'User Activity: Monitor access logs for security audits',
      'Security Standards: HIPAA-compliant data encryption and role-based privacy protocols'
    ]
  }
];

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(featuresData[0]);

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={24} strokeWidth={2.2} /> : <Icons.Settings size={24} />;
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -15, filter: 'blur(6px)', transition: { duration: 0.3 } }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.06 + 0.1, duration: 0.35 }
    })
  };

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">Core Features</h2>
          <p className="section-descriptions">
            Comprehensive hospital management tools in one unified platform
          </p>
        </div>

        <div className="features-layout">
          {/* LEFT SIDEBAR - Feature selection */}
          <div className="features-sidebar">
            {featuresData.map((feature) => (
              <button
                key={feature.id}
                className={`feature-menu-item ${selectedFeature.id === feature.id ? 'active' : ''}`}
                onClick={() => setSelectedFeature(feature)}
              >
                <span className="feature-menu-icon">{getIcon(feature.icon)}</span>
                <span className="feature-menu-text">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* RIGHT MAIN CONTENT - No scrollbar */}
          <div className="features-detail-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature.id}
                className="feature-detail"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Image column */}
                <div className="feature-image-column">
                  <div className="feature-image-wrapper">
                    <img
                      src={selectedFeature.image}
                      alt={`${selectedFeature.title} screenshot`}
                      className="feature-image"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text column */}
                <div className="feature-text-column">
                  <div className="feature-icon-large">
                    {getIcon(selectedFeature.icon)}
                  </div>

                  <h3 className="feature-headline">{selectedFeature.headline}</h3>

                  <p className="feature-description">
                    {selectedFeature.description}
                  </p>

                  <div className="feature-capabilities">
                    <h4 className="capabilities-title">Key Capabilities:</h4>
                    <ul className="capabilities-list">
                      {selectedFeature.capabilities.map((capability, index) => {
                        const [title, desc] = capability.split(':');
                        return (
                          <motion.li
                            key={index}
                            className="capability-item"
                            custom={index}
                            variants={listItemVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <Icons.CheckCircle size={18} className="capability-icon" />
                            <div>
                              <strong>{title.trim()}:</strong>
                              {desc && <span> {desc.trim()}</span>}
                            </div>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;