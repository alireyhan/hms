import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import "./Process.css";

const ProcessFlow = () => {
  const getFlowIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? (
      <IconComponent size={32} strokeWidth={1.6} />
    ) : (
      <Icons.Settings size={32} strokeWidth={1.6} />
    );
  };

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Audit",
      description:
        "Deep analysis of current workflows against CBAHI & NPHIES requirements — uncovering risks & optimization potential.",
      icon: "SearchCheck",
    },
    {
      id: 2,
      title: "Secure Migration",
      description:
        "Zero-downtime, encrypted transfer of EHR, patient history & clinical data with full audit trail.",
      icon: "DatabaseZap",
    },
    {
      id: 3,
      title: "Configuration & Safety",
      description:
        "NPHIES integration, AI-powered safety checks, role-based access, and compliance guardrails.",
      icon: "ShieldCheck",
    },
    {
      id: 4,
      title: "Go-Live & Support",
      description:
        "On-site super-user training, live shadowing, 30-day hypercare support, and continuous monitoring.",
      icon: "Rocket",
    },
  ];

  /* SLOWER STAGGER */
  const containerAnim = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.45,
        delayChildren: 0.3,
      },
    },
  };

  /* SLOWER CARD MOTION */
  const cardAnim = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 0.9,
      },
    },
  };

  const iconAnim = {
    hidden: { scale: 0.7, rotate: -40, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
      },
    },
  };

  return (
    <section className="pf-section" id="process">
      <div className="pf-bg-gradient" />

      <div className="pf-container">
        <div className="pf-header">
          <h2 className="pf-title">Your Journey to Full Compliance</h2>
          <p className="pf-subtitle">
            Four meticulously designed phases — engineered for safety, speed,
            and zero surprises.
          </p>
        </div>

        <div className="pf-timeline-wrapper">
          <svg
            className="pf-timeline-line"
            viewBox="0 0 1200 260"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pfGradientLine" x1="0%" y1="0%" x2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>

            <motion.path
              d="M 100 130 Q 300 30 600 130 T 1100 130"
              fill="none"
              stroke="url(#pfGradientLine)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.4 }}
              whileInView={{ pathLength: 1, opacity: 0.85 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 3.2, ease: "easeInOut" }}
            />
          </svg>

          <motion.div
            className="pf-steps"
            variants={containerAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                className="pf-card"
                variants={cardAnim}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="pf-step-number-wrapper">
                  <div className="pf-step-number">{step.id}</div>
                </div>

                <motion.div className="pf-step-icon" variants={iconAnim}>
                  {getFlowIcon(step.icon)}
                </motion.div>

                <h3 className="pf-step-title">{step.title}</h3>
                <p className="pf-step-desc">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
