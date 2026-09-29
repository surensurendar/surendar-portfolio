import React from 'react';
import { Cpu, Code, Database, Wrench, Shield } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import './Skills.scss';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Core Frontend':
        return <Code size={20} />;
      case 'State Management & APIs':
        return <Database size={20} />;
      case 'Workflow & Tools':
        return <Wrench size={20} />;
      default:
        return <Shield size={20} />;
    }
  };

  const ecosystemChips = [
    "React.js 19", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "REST APIs",
    "SCSS / CSS3", "HTML5 & Semantic Web", "Git & GitHub", "Jira & Agile", "Vite",
    "Enterprise HRMS", "Payroll Engines", "Approval Matrices", "Axios Interceptors",
    "Data Grid Virtualization", "Performance Profiling", "Responsive UI/UX"
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Engineering <span className="gradient-text">Skill Matrix</span>
          </h2>
          <p className="section-subtitle">
            Categorized capabilities, frontend tooling, and production-tested domain proficiencies accumulated over 2+ years of enterprise engineering.
          </p>
        </div>

        <div className="skills-bento-grid">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="skill-group-card">
              <h3 className="group-title">
                <div className="group-icon-wrap">{getCategoryIcon(cat.category)}</div>
                <span>{cat.category}</span>
              </h3>

              <div className="skills-bars-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-bar-item">
                    <div className="skill-info-row">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-meta">
                        <span className="skill-exp">{skill.experience}</span>
                        <span className="skill-pct">{skill.level}%</span>
                      </div>
                    </div>

                    <div className="meter-track">
                      <div
                        className={`meter-fill ${cat.category === 'Enterprise Expertise' ? 'meter-cyan' : ''}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Ecosystem Dock */}
        <div className="quick-skills-dock">
          <div className="dock-title">Complete Technology Ecosystem & Domain Competencies</div>
          <div className="chips-flex">
            {ecosystemChips.map((chip, idx) => (
              <span key={idx} className="chip-pill">
                ✦ {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
