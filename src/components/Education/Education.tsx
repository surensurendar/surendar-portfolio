import React from 'react';
import { GraduationCap, School, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../../data/portfolioData';
import './Education.scss';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic & Credentials</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Academic qualifications and professional certifications in frontend and web development technologies.
          </p>
        </div>

        <div className="edu-grid">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="edu-card">
              <div className="edu-header">
                <h3 className="degree-title">{edu.degree}</h3>
                <span className="period">{edu.period}</span>
              </div>

              <div className="institution-name">
                <School size={16} />
                <span>{edu.institution}</span>
              </div>

              <ul className="edu-highlights">
                {edu.highlights.map((hl, hIdx) => (
                  <li key={hIdx}>{hl}</li>
                ))}
              </ul>
            </div>
          ))}

          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="edu-card cert-card">
              <div className="edu-header">
                <h3 className="degree-title">{cert.title}</h3>
                <span className="period">{cert.issuer}</span>
              </div>

              <div className="institution-name" style={{ color: 'var(--accent-emerald)' }}>
                <Award size={16} />
                <span>Verified Certification — {cert.issuer}</span>
              </div>

              <ul className="edu-highlights">
                {cert.highlights.map((hl, hIdx) => (
                  <li key={hIdx}>
                    <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: 2 }} />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
