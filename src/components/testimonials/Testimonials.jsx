// Testimonials.jsx
import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Dr. Ahmed Al-Sayed',
    role: 'Chief Financial Officer',
    hospital: '[Hospital Name]',
    quote:
      'Before switching to this HMS, we were drowning in claim rejections. The native NPHIES integration scrubbed our claims before submission, reducing our rejection rate by 35% in the first quarter alone. It paid for itself in three months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dr. Sarah Khan',
    role: 'Medical Director',
    hospital: '[Clinic Name]',
    quote:
      "My doctors were skeptical about changing systems, but the AI-assisted clinical notes won them over. We've cut down documentation time by nearly 2 hours per shift, allowing our staff to focus on patient care rather than typing.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Eng. Faisal Al-Harbi',
    role: 'Quality Assurance Manager',
    hospital: '[Medical Center Name]',
    quote:
      'Preparing for our CBAHI accreditation used to take weeks of manual file sorting. With the automated audit logs and compliance tracking in this system, we generated every required report in one click. We passed with flying colors.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Fatima Malik',
    role: 'Operations Head',
    hospital: '[Polyclinic Name]',
    quote:
      "We were paying for five different subscriptions—one for booking, one for inventory, and another for HR. Consolidating everything onto one platform didn't just save us money; it eliminated the data errors we had when moving files between systems.",
    rating: 5,
  },
  {
    id: 5,
    name: 'Youssef Ammari',
    role: 'Senior Pharmacist',
    hospital: '[Hospital Group]',
    quote:
      'The connection between the e-prescription module and our pharmacy stock is brilliant. As soon as a doctor prescribes a med, it\'s reserved in the system. Our stockouts have dropped to near zero, and we finally have control over expiry dates.',
    rating: 5,
  },
];

const Testimonials = () => {
  // Duplicate the array → needed for seamless infinite loop
  const doubledTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">Trusted by Healthcare Professionals</h2>
          <p className="section-description">
            Real results from real hospitals and clinics across the Kingdom
          </p>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {doubledTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="testimonial-card"
              >
                <div className="quote-icon">
                  <Quote size={32} />
                </div>

                <div className="rating">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="#F59E0B"
                      color="#F59E0B"
                    />
                  ))}
                </div>

                <p className="testimonial-quote">{testimonial.quote}</p>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                    <div className="author-hospital">{testimonial.hospital}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;