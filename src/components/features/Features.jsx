import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import './Features.css';

const featuresData = [
  {
    id: 1,
    title: 'Staff Management',
    headline: 'Unified Workforce Control',
    icon: 'Users',
    description: 'Comprehensive staff management with role-based access and automated rostering.',
    capabilities: [
      'Role-Based Access: Secure permissions for Doctors, Nurses, and Admin',
      'Shift Management: Automated rostering and attendance tracking',
      'HR Integration: Linked directly to payroll and performance KPIs'
    ]
  },
  {
    id: 2,
    title: 'Patient Registration & Medical History',
    headline: 'One Patient, One Record',
    icon: 'FileText',
    description: 'Centralized patient data management with secure, CBAHI-compliant archiving.',
    capabilities: [
      'Centralized Data: Demographics, history, and documents in one view',
      'Universal Search: Find patient records instantly across any department',
      'Secure Archiving: CBAHI-compliant history tracking and storage'
    ]
  },
  {
    id: 3,
    title: 'Appointments & Encounters',
    headline: 'Seamless Patient Flow',
    icon: 'Calendar',
    description: 'Smart scheduling with real-time queue management and encounter tracking.',
    capabilities: [
      'Smart Scheduling: Drag-and-drop booking with conflict detection',
      'Queue Management: Real-time tracking of patient status (Waiting, In-Consult)',
      'Encounter History: Complete timeline of all previous visits'
    ]
  },
  {
    id: 4,
    title: 'Prescriptions & Medication Management',
    headline: 'Error-Free Dispensing',
    icon: 'Pill',
    description: 'Digital prescriptions with automated safety checks and drug interaction alerts.',
    capabilities: [
      'e-Prescribing: Digital orders sent instantly to the pharmacy',
      'Drug Interaction Alerts: Automated safety warnings for doctors',
      'Dosage Templates: Standardized protocols for common treatments'
    ]
  },
  {
    id: 5,
    title: 'Lab, Imaging & Diagnostic Orders',
    headline: 'Integrated Diagnostics',
    icon: 'TestTube',
    description: 'Seamless diagnostic ordering with automatic result syncing.',
    capabilities: [
      'Direct Ordering: Request labs/imaging from the consultation screen',
      'PACS/LIMS Link: Auto-sync results back to the patient file',
      'Status Tracking: Monitor "Sample Collected" to "Result Ready"'
    ]
  },
  {
    id: 6,
    title: 'Clinical Notes & Vital Signs',
    headline: 'Rapid Clinical Documentation',
    icon: 'Stethoscope',
    description: 'Smart templates and AI-assisted documentation for faster charting.',
    capabilities: [
      'Smart Templates: Pre-built forms for SOAP notes and discharge summaries',
      'Vitals Trending: Visual graphs for BP, Pulse, and Temperature history',
      'Voice-to-Text: AI-assisted dictation for faster charting'
    ]
  },
  {
    id: 7,
    title: 'Billing, Invoicing & Payments',
    headline: 'Automated Financials',
    icon: 'Receipt',
    description: 'ZATCA-compliant e-invoicing with unified billing across all departments.',
    capabilities: [
      'ZATCA E-Invoicing: Fully compliant QR code generation',
      'Unified Billing: Combines pharmacy, lab, and consult charges automatically',
      'Payment Gateways: Supports cash, card, and insurance split-payments'
    ]
  },
  {
    id: 8,
    title: 'Insurance Policies & Claims',
    headline: 'NPHIES-Ready Insurance',
    icon: 'Shield',
    description: 'Real-time eligibility checks and automated claims management.',
    capabilities: [
      'Real-Time Eligibility: Instant NPHIES check before consultation',
      'Claims Management: Automated scrubbing to reduce rejections',
      'Policy Rules: Auto-apply co-pays and deductibles'
    ]
  },
  {
    id: 9,
    title: 'Doctor Commission & Revenue Sharing',
    headline: 'Transparent Incentives',
    icon: 'DollarSign',
    description: 'Automated commission calculations with real-time earnings tracking.',
    capabilities: [
      'Auto-Calculation: Commission generated instantly upon invoice payment',
      'Flexible Rules: Set different rates for procedures, consults, or pharmacy',
      'Performance Reports: Real-time earnings dashboard for doctors'
    ]
  },
  {
    id: 10,
    title: 'Emergency & Allergy Records',
    headline: 'Critical Patient Safety',
    icon: 'AlertTriangle',
    description: 'Visual alerts for allergies and chronic conditions with emergency mode.',
    capabilities: [
      'Visual Alerts: High-contrast warnings for allergies and chronic conditions',
      'Emergency Mode: Rapid "One-Click" admission for urgent care cases',
      'Blood Bank: Integrated tracking for blood type and availability'
    ]
  },
  {
    id: 11,
    title: 'Inventory (Pharmacy & Medical Supplies)',
    headline: 'Smart Supply Chain',
    icon: 'Package',
    description: 'Live stock tracking with expiry alerts and auto-replenishment.',
    capabilities: [
      'Live Deduction: Stock decreases instantly when medicine is dispensed',
      'Expiry Tracking: Alerts for near-expiry batches (CBAHI Requirement)',
      'Auto-Replenishment: Purchase orders generated when stock hits low levels'
    ]
  },
  {
    id: 12,
    title: 'Audit Logs & Compliance Tracking',
    headline: 'Accreditation Ready',
    icon: 'FileCheck',
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

  // Animation for main content block
  const contentVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: 'blur(6px)',
      transition: { duration: 0.35, ease: 'easeIn' }
    }
  };

  // Staggered animation for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.07 + 0.15,
        duration: 0.4,
        ease: 'easeOut'
      }
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
          <div className="features-sidebar">
            {featuresData.map((feature) => (
              <button
                key={feature.id}
                className={`feature-menu-item ${selectedFeature.id === feature.id ? 'active' : ''}`}
                onClick={() => setSelectedFeature(feature)}
                aria-label={`Select ${feature.title}`}
                aria-current={selectedFeature.id === feature.id ? 'page' : undefined}
              >
                <span className="feature-menu-icon">
                  {getIcon(feature.icon)}
                </span>
                <span className="feature-menu-text">{feature.title}</span>
              </button>
            ))}
          </div>

          <div className="features-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature.id}
                className="feature-detail"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
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
                      const [title, descriptionPart] = capability.split(':');
                      return (
                        <motion.li
                          key={index}
                          className="capability-item"
                          custom={index}
                          variants={listItemVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <Icons.CheckCircle size={20} className="capability-icon" />
                          <div>
                            <strong>{title.trim()}:</strong>
                            {descriptionPart && <span> {descriptionPart.trim()}</span>}
                          </div>
                        </motion.li>
                      );
                    })}
                  </ul>
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