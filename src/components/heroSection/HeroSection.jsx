import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import "./HeroSection.css";

import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";

const logos = [logo1, logo2, logo3, logo4];

const HeroSection = () => {
  const handleDemoRequest = () => {
    alert("Demo request submitted!");
  };

  useEffect(() => {
    const section = document.getElementById("home");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("show");
          } else {
            section.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* LEFT COLUMN */}
        <div className="hero-left">
          <div className="hero-text">
            <h1 className="hero-title">
              Next-<span className="highlight-blue">Gen</span> Hospital Management{" "}
              <span className="highlight-blue">System</span>
            </h1>

            <p className="hero-subtitle">
              Fully compliant with NPHIES and CBAHI standards. Unify your
              clinical, financial, and AI-enhanced operations on a single  platform.
            </p>

            <button className="hero-cta" onClick={handleDemoRequest}>
              Request a Demo
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Logo slider under text/button */}
          <div className="logo-slider-wrapper">
            <div className="logo-slider">
              <div className="logo-track">
                {logos.map((logo, idx) => (
                  <div className="logo-slide" key={`a-${idx}`}>
                    <img src={logo} alt={`Partner ${idx + 1}`} />
                  </div>
                ))}
                {logos.map((logo, idx) => (
                  <div className="logo-slide" key={`b-${idx}`}>
                    <img src={logo} alt={`Partner ${idx + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Dashboard */}
        <div className="hero-right">
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