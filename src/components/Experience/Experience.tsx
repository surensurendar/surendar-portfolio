import React, { useState } from 'react';
import { Briefcase, MapPin, Building, Calendar, Layers, ShieldCheck, Users, CheckCircle2, ChevronRight, Sparkles, Code2 } from 'lucide-react';
import { EXPERIENCES, WORKSTREAMS, LEADERSHIP_RESPONSIBILITIES } from '../../data/portfolioData';
import './Experience.scss';

export const Experience: React.FC = () => {
  const [activeStreamId, setActiveStreamId] = useState<string>('all');
  const mainExp = EXPERIENCES[0];

  const displayedStreams = activeStreamId === 'all'
    ? WORKSTREAMS
    : WORKSTREAMS.filter(s => s.id === activeStreamId);

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Path & Enterprise Impact</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Frontend Developer experience in a fast-paced startup environment delivering scalable enterprise applications across Order Management System (OMS) and Human Resource Management System (HRMS) projects.
          </p>
        </div>

        {/* Master Experience Overview Card */}
        <div className="experience-hero-card">
          <div className="exp-hero-top">
            <div className="exp-main-title">
              <div className="role-icon-box">
                <Briefcase size={22} />
              </div>
              <div>
                <div className="exp-badge-pill">Startup Environment • Full-Time</div>
                <h3 className="exp-role-heading">{mainExp.role}</h3>
                <div className="exp-company-sub">
                  <span className="company-text">
                    <Building size={15} />
                    {mainExp.company}
                  </span>
                  <span className="sep">•</span>
                  <span className="location-text">
                    <MapPin size={14} />
                    {mainExp.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="exp-duration-badge">
              <Calendar size={14} />
              <span>{mainExp.period}</span>
            </div>
          </div>

          <p className="exp-hero-desc">{mainExp.description}</p>

          {/* Quick Stats Strip */}
          <div className="exp-hero-meta-grid">
            <div className="meta-item">
              <span className="meta-label">Primary Projects</span>
              <span className="meta-val">OMS & HRMS Platforms</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Team Leadership</span>
              <span className="meta-val">Project-Level Coordination</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Core Specialization</span>
              <span className="meta-val">ReactJS & Reusable Components</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Methodology</span>
              <span className="meta-val">Agile, Jira, Code Reviews</span>
            </div>
          </div>
        </div>

        {/* Workstream Filter Tabs */}
        <div className="workstream-nav-strip">
          <div className="nav-label">
            <Layers size={16} />
            <span>Project Workstreams:</span>
          </div>
          <div className="workstream-tabs">
            <button
              type="button"
              className={`ws-tab ${activeStreamId === 'all' ? 'active' : ''}`}
              onClick={() => setActiveStreamId('all')}
            >
              All Projects (OMS & HRMS)
            </button>
            <button
              type="button"
              className={`ws-tab ${activeStreamId === 'hrms-stream' ? 'active' : ''}`}
              onClick={() => setActiveStreamId('hrms-stream')}
            >
              HRMS Project (Aug 2025 – Present)
            </button>
            <button
              type="button"
              className={`ws-tab ${activeStreamId === 'oms-stream' ? 'active' : ''}`}
              onClick={() => setActiveStreamId('oms-stream')}
            >
              OMS Project (Sep 2024 – 2025)
            </button>
          </div>
        </div>

        {/* Workstream Project Timeline Cards */}
        <div className="workstream-cards-grid">
          {displayedStreams.map((stream) => (
            <div key={stream.id} className="workstream-card">
              <div className="stream-header">
                <div className="stream-tag-row">
                  <span className="stream-badge">{stream.badge}</span>
                  <span className="stream-status">
                    <span className="pulse-dot"></span>
                    {stream.status}
                  </span>
                </div>
                <span className="stream-date">{stream.period}</span>
              </div>

              <h4 className="stream-title">{stream.title}</h4>
              <div className="stream-subtitle">{stream.subtitle}</div>
              <p className="stream-desc">{stream.description}</p>

              {/* Modules Box */}
              <div className="stream-modules-box">
                <div className="box-title">
                  <Sparkles size={14} className="accent-icon" />
                  <span>Modules & Features Built:</span>
                </div>
                <div className="module-chips">
                  {stream.modules.map((mod, mIdx) => (
                    <span key={mIdx} className="mod-chip">
                      ✦ {mod}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Contributions List */}
              <div className="stream-bullets-box">
                <div className="box-title">
                  <CheckCircle2 size={14} className="emerald-icon" />
                  <span>Key Contributions & Engineering Highlights:</span>
                </div>
                <ul className="stream-bullets">
                  {stream.highlights.map((hl, hIdx) => (
                    <li key={hIdx}>
                      <ChevronRight size={14} className="bullet-arrow" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="stream-tech-footer">
                <div className="tech-label">
                  <Code2 size={13} />
                  <span>Technologies:</span>
                </div>
                <div className="tech-pills-list">
                  {stream.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Leadership & Responsibilities Showcase */}
        <div className="leadership-showcase-card">
          <div className="leadership-header">
            <div className="lead-icon-box">
              <Users size={20} />
            </div>
            <div>
              <h3 className="lead-title">Team Leadership & Startup Ownership</h3>
              <p className="lead-desc">
                Project-level leadership and collaboration responsibilities performed alongside active feature development.
              </p>
            </div>
          </div>

          <div className="leadership-grid">
            {LEADERSHIP_RESPONSIBILITIES.map((item, idx) => (
              <div key={idx} className="leadership-point-card">
                <div className="point-number">0{idx + 1}</div>
                <div className="point-content">
                  <ShieldCheck size={16} className="point-icon" />
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
