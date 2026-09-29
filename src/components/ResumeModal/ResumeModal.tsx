import React, { useEffect } from 'react';
import { X, Printer, Download, FileText } from 'lucide-react';
import { PERSONAL_INFO, RESUME_DATA } from '../../data/portfolioData';
import './ResumeModal.scss';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-backdrop" onClick={onClose}>
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top-actions no-print">
          <div className="doc-info">
            <FileText size={20} style={{ color: 'var(--accent-primary)' }} />
            <span>{PERSONAL_INFO.resumeFileName}</span>
          </div>

          <div className="btn-actions-group">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handlePrint}
            >
              <Download size={16} />
              <span>Download PDF</span>
            </button>
            <button
              type="button"
              className="btn-close"
              style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: 4 }}
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Printable LaTeX Style Resume Sheet */}
        <div className="resume-sheet-scroll" id="printable-resume">
          {/* Header */}
          <div className="latex-header">
            <h1 className="latex-name">{RESUME_DATA.name}</h1>
            <div className="latex-subtitle">{RESUME_DATA.title}</div>
            <div className="latex-contact-line">
              <span>{RESUME_DATA.location}</span>
              <span className="sep">|</span>
              <a href={`tel:${RESUME_DATA.phone}`}>{RESUME_DATA.phone}</a>
              <span className="sep">|</span>
              <a href={`mailto:${RESUME_DATA.email}`}>{RESUME_DATA.email}</a>
            </div>
            <div className="latex-links-line">
              <a href={RESUME_DATA.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span className="sep">|</span>
              <a href={RESUME_DATA.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="latex-section">
            <h2 className="latex-sec-title">Professional Summary</h2>
            <p className="latex-summary">{RESUME_DATA.summary}</p>
          </div>

          {/* Technical Skills */}
          <div className="latex-section">
            <h2 className="latex-sec-title">Technical Skills</h2>
            <table className="latex-skills-table">
              <tbody>
                <tr>
                  <td className="skill-cat">Frontend</td>
                  <td className="skill-val">{RESUME_DATA.technicalSkills.frontend}</td>
                </tr>
                <tr>
                  <td className="skill-cat">State Management</td>
                  <td className="skill-val">{RESUME_DATA.technicalSkills.stateManagement}</td>
                </tr>
                <tr>
                  <td className="skill-cat">UI Development</td>
                  <td className="skill-val">{RESUME_DATA.technicalSkills.uiDevelopment}</td>
                </tr>
                <tr>
                  <td className="skill-cat">API Integration</td>
                  <td className="skill-val">{RESUME_DATA.technicalSkills.apiIntegration}</td>
                </tr>
                <tr>
                  <td className="skill-cat">Development Tools</td>
                  <td className="skill-val">{RESUME_DATA.technicalSkills.developmentTools}</td>
                </tr>
                <tr>
                  <td className="skill-cat">Development Practices</td>
                  <td className="skill-val">{RESUME_DATA.technicalSkills.developmentPractices}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Professional Experience */}
          <div className="latex-section">
            <h2 className="latex-sec-title">Professional Experience</h2>
            {RESUME_DATA.experience.map((exp, idx) => (
              <div key={idx} className="latex-entry">
                <div className="latex-entry-header">
                  <span className="title-bold">{exp.role}</span>
                  <span className="date-bold">{exp.period}</span>
                </div>
                <div className="latex-company-line">
                  <em>{exp.company}, {exp.location}</em>
                </div>
                <ul className="latex-bullets">
                  {exp.keyHighlights.map((hl, hIdx) => (
                    <li key={hIdx}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Project Experience */}
          <div className="latex-section">
            <h2 className="latex-sec-title">Project Experience</h2>
            
            {/* OMS */}
            <div className="latex-entry">
              <div className="latex-entry-header">
                <span className="title-bold">Order Management System (OMS)</span>
                <span className="date-bold">Sep 2024 – 2025</span>
              </div>
              <ul className="latex-bullets">
                <li>Developed frontend features for an Order Management System using ReactJS, JavaScript, HTML5, CSS3, and SCSS.</li>
                <li>Built reusable UI components and implemented CRUD functionality for business workflows.</li>
                <li>Integrated REST APIs and handled data rendering, form validation, API responses, and error states.</li>
                <li>Worked closely with Backend and QA teams to implement business requirements and resolve frontend issues.</li>
                <li>Participated in debugging, testing, code reviews, and application improvements.</li>
              </ul>
            </div>

            {/* HRMS */}
            <div className="latex-entry">
              <div className="latex-entry-header">
                <span className="title-bold">Human Resource Management System (HRMS)</span>
                <span className="date-bold">Aug 2025 – Present</span>
              </div>
              <ul className="latex-bullets">
                <li>Developed and maintained frontend modules for an enterprise HRMS application using ReactJS, TypeScript, JavaScript, HTML5, CSS3, and SCSS.</li>
                <li>Worked on HRMS modules including Payroll, Employee Directory, Policy Management, Approval Dashboard, and Exit Management.</li>
                <li>Developed CRUD interfaces for creating, editing, viewing, and managing employee-related information.</li>
                <li>Implemented approval workflows and dynamic status handling based on business requirements.</li>
                <li>Integrated REST APIs for employee information, policy management, approval workflows, and exit management processes.</li>
                <li>Developed reusable components and implemented form validation, loading states, error handling, and responsive UI behavior.</li>
                <li>Collaborated with Backend and QA teams to analyze requirements, troubleshoot issues, and deliver features.</li>
              </ul>
            </div>
          </div>

          {/* Team Leadership & Responsibilities */}
          <div className="latex-section">
            <h2 className="latex-sec-title">Team Leadership & Responsibilities</h2>
            <ul className="latex-bullets">
              {RESUME_DATA.leadership.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="latex-section">
            <h2 className="latex-sec-title">Education</h2>
            <div className="latex-entry">
              <div className="latex-entry-header">
                <span className="title-bold">Bachelor of Computer Applications (BCA)</span>
                <span className="date-bold">2020 – 2023</span>
              </div>
              <div className="latex-company-line">
                <em>Sri Sankara Arts and Science College</em>
              </div>
              <div className="latex-company-line">
                <em>University of Madras</em>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="latex-section">
            <h2 className="latex-sec-title">Certifications</h2>
            <div className="latex-entry">
              <div className="title-bold" style={{ marginBottom: 4 }}>Udemy</div>
              <ul className="latex-bullets">
                <li>Frontend / Web Development Certification – Udemy</li>
              </ul>
            </div>
          </div>

          {/* Additional Information */}
          <div className="latex-section">
            <h2 className="latex-sec-title">Additional Information</h2>
            <table className="latex-skills-table">
              <tbody>
                <tr>
                  <td className="skill-cat">Languages</td>
                  <td className="skill-val">{RESUME_DATA.additionalInfo.languages}</td>
                </tr>
                <tr>
                  <td className="skill-cat">Current Role</td>
                  <td className="skill-val">{RESUME_DATA.additionalInfo.currentRole}</td>
                </tr>
                <tr>
                  <td className="skill-cat">Primary Technology</td>
                  <td className="skill-val">{RESUME_DATA.additionalInfo.primaryTechnology}</td>
                </tr>
                <tr>
                  <td className="skill-cat">Experience</td>
                  <td className="skill-val">{RESUME_DATA.additionalInfo.experience}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
