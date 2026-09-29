import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Building2, Sparkles, Code2, User } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import userPhoto from '../../assets/surendar.jpg';
import './Hero.scss';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [viewMode, setViewMode] = useState<'portrait' | 'code'>('portrait');

  return (
    <section id="hero" className="hero-section">
      {/* Ambient background glows */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="hero-content">
            <div className="status-pill-badge">
              <div className="pulse-beacon">
                <div className="beacon-core"></div>
                <div className="beacon-wave"></div>
              </div>
              <span>Available for Frontend Roles • 2+ Years Experience</span>
            </div>

            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">
              <span className="gradient-name">{PERSONAL_INFO.name}</span>
            </h1>

            <div className="hero-title-strip">
              <span className="title-tag">Frontend Developer</span>
              <span className="dot-sep">•</span>
              <span className="title-sub">ReactJS & Enterprise OMS / HRMS</span>
            </div>

            <p className="hero-bio">
              Frontend Developer with <strong>2+ years of experience</strong> building responsive and scalable web applications across <strong>Order Management System (OMS)</strong> and <strong>Human Resource Management System (HRMS)</strong> projects using ReactJS, TypeScript, JavaScript, HTML5, CSS3, and SCSS.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#hrms-spotlight" className="btn btn-primary btn-lg">
                <Building2 size={19} />
                <span>Explore HRMS Work</span>
                <ArrowRight size={17} />
              </a>

              <a href="#projects" className="btn btn-secondary btn-lg">
                <span>View Projects</span>
              </a>

              <button
                type="button"
                className="btn btn-outline btn-lg"
                onClick={onOpenResume}
              >
                <Download size={18} />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Dock */}
            <div className="social-dock">
              <span className="dock-label">Connect:</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={17} />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="GitHub Profile"
              >
                <GithubIcon size={17} />
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="social-icon-btn"
                title="Send Email"
              >
                <Mail size={17} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Visual: Masterpiece 3D Card with Photo & Interactive Code View */}
          <div className="hero-visual">
            <div className="visual-stage">
              <div className="aurora-glow-backdrop"></div>

              <div className="master-card">
                {/* Top bar controls */}
                <div className="card-top-bar">
                  <div className="view-toggle-pills">
                    <button
                      type="button"
                      className={`toggle-btn ${viewMode === 'portrait' ? 'active' : ''}`}
                      onClick={() => setViewMode('portrait')}
                    >
                      <User size={12} style={{ display: 'inline', marginRight: 4 }} />
                      Profile
                    </button>
                    <button
                      type="button"
                      className={`toggle-btn ${viewMode === 'code' ? 'active' : ''}`}
                      onClick={() => setViewMode('code')}
                    >
                      <Code2 size={12} style={{ display: 'inline', marginRight: 4 }} />
                      Code View
                    </button>
                  </div>

                  <div className="tech-signal">
                    <Sparkles size={13} />
                    <span>Active Engineer</span>
                  </div>
                </div>

                {/* Portrait View */}
                {viewMode === 'portrait' ? (
                  <div className="portrait-wrapper">
                    <img
                      src={userPhoto}
                      alt="Surendar G - Frontend Developer"
                      className="main-photo"
                      loading="eager"
                    />

                    <div className="photo-glass-overlay">
                      <div>
                        <div className="dev-name">{PERSONAL_INFO.name}</div>
                        <div className="dev-role">{PERSONAL_INFO.role}</div>
                      </div>
                      <span className="experience-pill">2+ Yrs XP</span>
                    </div>
                  </div>
                ) : (
                  /* Code View */
                  <div className="code-view-wrapper">
                    <div className="code-line">
                      <span className="kw">interface</span> <span className="var">FrontendEngineer</span> &#123;
                    </div>
                    <div className="code-line">
                      &nbsp;&nbsp;<span className="prop">name</span>: <span className="str">"{PERSONAL_INFO.name}"</span>;
                    </div>
                    <div className="code-line">
                      &nbsp;&nbsp;<span className="prop">role</span>: <span className="str">"Frontend Developer"</span>;
                    </div>
                    <div className="code-line">
                      &nbsp;&nbsp;<span className="prop">coreStack</span>: [<span className="str">"ReactJS"</span>, <span className="str">"TypeScript"</span>, <span className="str">"Redux"</span>];
                    </div>
                    <div className="code-line">
                      &nbsp;&nbsp;<span className="prop">domains</span>: [<span className="str">"OMS"</span>, <span className="str">"HRMS"</span>];
                    </div>
                    <div className="code-line">
                      &nbsp;&nbsp;<span className="prop">experienceYears</span>: <span className="num">2.2</span>;
                    </div>
                    <div className="code-line">
                      &nbsp;&nbsp;<span className="prop">availableForHire</span>: <span className="bool">true</span>;
                    </div>
                    <div className="code-line">&#125;;</div>
                    <div className="code-line" style={{ marginTop: '0.75rem' }}>
                      <span className="comment">// Ready to architect scalable frontend systems</span>
                    </div>
                  </div>
                )}

                {/* Floating Badges */}
                <div className="hologram-pill-top">
                  <Sparkles size={14} style={{ color: 'var(--accent-cyan)' }} />
                  <span>React.js • TypeScript • SCSS</span>
                </div>

                <div className="hologram-pill-bottom">
                  <div className="badge-icon-box">🏢</div>
                  <div className="badge-text-box">
                    <span className="badge-sub">Enterprise Flagship</span>
                    <span className="badge-main">LYVEHR HRMS Core</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Strip */}
          <div className="stats-strip">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-desc">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
