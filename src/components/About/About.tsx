import React from 'react';
import { User, CheckCircle, Code, Layers, Zap, GitBranch, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import './About.scss';

export const About: React.FC = () => {
  const coreStrengths = [
    { text: "2+ Years Frontend Development", icon: <Code size={16} /> },
    { text: "React.js / TypeScript / ES6+", icon: <Zap size={16} /> },
    { text: "Enterprise HRMS Platform Engineering", icon: <Layers size={16} /> },
    { text: "REST API Integration & Resiliency", icon: <CheckCircle size={16} /> },
    { text: "Scalable & Reusable Component Systems", icon: <Layers size={16} /> },
    { text: "Git, GitHub & Agile/Jira Sprints", icon: <GitBranch size={16} /> },
  ];

  const facts = [
    {
      title: "Enterprise OMS & HRMS Expertise",
      desc: "Deep experience building complex business applications across Order Management and HRMS (Payroll, Employee Directory, Approvals, Exit Management)."
    },
    {
      title: "Reusable Components & CRUD",
      desc: "Skilled in developing modular UI components, robust forms, schema validation, and responsive business process screens."
    },
    {
      title: "REST API Integration & Resiliency",
      desc: "Expertise handling API data rendering, loading states, error states, and async user interactions."
    },
    {
      title: "Team Leadership & Ownership",
      desc: "Startup environment experience coordinating frontend tasks, code reviews, debugging, and timely release deliveries."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Surendar G</span>
          </h2>
          <p className="section-subtitle">
            Frontend developer dedicated to engineering reliable, enterprise-grade user interfaces with clean architecture and maintainable code.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Main Content */}
          <div className="about-main">
            <h3 className="highlight-lead">
              Building scalable frontend architectures that power <span className="highlight-accent">real business operations</span>.
            </h3>

            <div className="about-paragraphs">
              <p>
                Frontend Developer with <strong>2+ years of experience</strong> in building responsive and scalable web applications using <strong>ReactJS, JavaScript, TypeScript, HTML5, CSS3, and SCSS</strong>.
              </p>
              <p>
                Experienced in developing enterprise applications across <strong>Order Management System (OMS)</strong> and <strong>Human Resource Management System (HRMS)</strong> projects. Skilled in developing reusable UI components, CRUD workflows, approval flows, REST API integrations, and business-driven frontend features.
              </p>
              <p>
                Proven experience working in a startup environment with project-level team leadership, mentoring teammates on ReactJS and API integrations, code reviews, sprint delivery, and translating business requirements into technical frontend tasks.
              </p>
            </div>

            {/* Core Strengths Grid */}
            <div className="core-strengths-grid">
              {coreStrengths.map((item, idx) => (
                <div key={idx} className="strength-pill">
                  <div className="icon-wrap">{item.icon}</div>
                  <span className="strength-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Summary Card */}
          <div className="about-card-wrapper">
            <div className="experience-summary-card">
              <div className="card-header-badge">
                <span>⚡ Experience Snapshot</span>
              </div>

              <div className="facts-list">
                {facts.map((fact, idx) => (
                  <div key={idx} className="fact-row">
                    <CheckCircle size={18} className="fact-icon" />
                    <div className="fact-body">
                      <div className="fact-title">{fact.title}</div>
                      <div className="fact-desc">{fact.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="experience-cta-box">
                <div className="status-badge">
                  <span className="dot"></span>
                  <span>{PERSONAL_INFO.status}</span>
                </div>
                <a href="#contact" className="btn btn-outline btn-sm">
                  <span>Connect</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
