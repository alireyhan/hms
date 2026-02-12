import React, { useEffect, useRef, useState } from "react";
import { X, Check } from "lucide-react";
import "./ProblemSolution.css";

const ProblemSolution = () => {
  const data = [
    {
      title: "Booking & Telehealth",
      problem:
        "You pay for Okadoc, Vezeeta, or Cura just to manage appointments",
      solution:
        "Integrated Scheduling: appointment booking and patient portal built-in. No extra fees per booking",
    },
    {
      title: "Billing & Claims",
      problem:
        "You struggle with Klaim or manual portals to handle NPHIES/Insurance",
      solution:
        "Insurance Engine: Direct NPHIES integration for eligibility and claims within the patient’s file",
    },
    {
      title: "Inventory & ERP",
      problem:
        "You use AFAS, Viindoo, or Aumet separately for pharmacy stock",
      solution:
        "One Inventory: Pharmacy stock updates automatically when a doctor prescribes medication",
    },
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="psx-problem-solution" 
      className={`psx-section ${visible ? "psx-show" : ""}`}
    >
      <div className="psx-bg" />

      <div className="psx-wrapper">
        <header className="psx-header">
          <h2 className="psx-title">
            Stop Juggling Multiple Subscriptions.  
            Start Managing Your Hospital.
          </h2>
        </header>

        <div className="psx-grid">

          {/* PROBLEM COLUMN */}
          <div className="psx-column psx-problem-col">
            <h3 className="psx-column-title psx-problem-title">
              <X className="psx-icon psx-problem-icon" size={28} />
              The “Frankenstein” Approach
            </h3>

            <div className="psx-items">
              {data.map((item, i) => (
                <div key={i} className="psx-card psx-problem-card">
                  <h4 className="psx-card-title">{item.title}</h4>
                  <p className="psx-card-text">{item.problem}</p>
                </div>
              ))}

              <div className="psx-result psx-problem-result">
                <strong>The Result:</strong> Data silos, double entry,
                expensive subscriptions.
              </div>
            </div>
          </div>

          {/* SOLUTION COLUMN */}
          <div className="psx-column psx-solution-col">
            <h3 className="psx-column-title psx-solution-title">
              <Check className="psx-icon psx-solution-icon" size={28} />
              HASHVERX Unified HMS
            </h3>

            <div className="psx-items">
              {data.map((item, i) => (
                <div key={i} className="psx-card psx-solution-card">
                  <h4 className="psx-card-title">{item.title}</h4>
                  <p className="psx-card-text">{item.solution}</p>
                </div>
              ))}

              <div className="psx-result psx-solution-result">
                <strong>The Result:</strong> One database. One system.
                Zero duplication.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
