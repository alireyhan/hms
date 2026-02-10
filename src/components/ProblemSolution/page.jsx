import React, { useEffect, useRef, useState } from 'react';
import { X, Check } from 'lucide-react';
import './ProblemSolution.css';

const ProblemSolution = () => {
  const problems = [
    {
      title: 'Booking & Telehealth',
      problem: 'You pay for Okadoc, Vezeeta, or Cura just to manage appointments',
      solution: 'Integrated Scheduling: appointment booking and patient portal built-in. No extra fees per booking'
    },
    {
      title: 'Billing & Claims',
      problem: 'You struggle with Klaim or manual portals to handle NPHIES/Insurance',
      solution: 'Insurance Engine: Direct NPHIES integration for eligibility and claims within the patient\'s file'
    },
    {
      title: 'Inventory & ERP',
      problem: 'You use AFAS, Viindoo, or Aumet separately for pharmacy stock',
      solution: 'One Inventory: Pharmacy stock automatically updates when a doctor prescribes medication'
    }
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="problem-solution" className={`problem-solution-section ${isVisible ? 'show' : ''}`}>
      <div className="problem-solution-bg"></div>

      <div className="problem-solution-container">
        <div className="section-header">
          <h2 className="section-title">
            Stop Juggling Multiple Subscriptions. Start Managing Your Hospital.
          </h2>
        </div>

        <div className="comparison-grid">
          <div className="comparison-column problem-column">
            <h3 className="column-title">
              <X size={28} className="column-icon" />
              The "Frankenstein" Approach
            </h3>
            <div className="comparison-items">
              {problems.map((item, index) => (
                <div key={index} className="comparison-item problem-item">
                  <h4 className="item-title">{item.title}</h4>
                  <p className="item-description">{item.problem}</p>
                </div>
              ))}
              <div className="result-box problem-result">
                <strong>The Result:</strong> Data silos, double-entry errors, and expensive monthly subscriptions.
              </div>
            </div>
          </div>

          <div className="comparison-column solution-column">
            <h3 className="column-title">
              <Check size={28} className="column-icon" />
              The Unified HMS
            </h3>
            <div className="comparison-items">
              {problems.map((item, index) => (
                <div key={index} className="comparison-item solution-item">
                  <h4 className="item-title">{item.title}</h4>
                  <p className="item-description">{item.solution}</p>
                </div>
              ))}
              <div className="result-box solution-result">
                <strong>The Result:</strong> One database. One subscription. Zero data duplication.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
