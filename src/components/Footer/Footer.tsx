import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUp, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import './Footer.scss';

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand Info */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand">
              <span className="brand-title">{PERSONAL_INFO.name}</span>
              <span className="brand-sub">Frontend Developer • ReactJS & Enterprise HRMS</span>
            </div>
            <p className="brand-bio">
              Specialized in building scalable enterprise web applications, high-performance CRUD workflows, and reusable React UI component systems.
            </p>
            <div className="footer-status-pill">
              <span className="status-dot"></span>
              <span>{PERSONAL_INFO.status}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-col footer-col-nav">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About Me</a></li>
              <li><a href="#hrms-spotlight">HRMS & OMS Depth</a></li>
              <li><a href="#experience">Work Experience</a></li>
              <li><a href="#projects">Key Projects</a></li>
              <li><a href="#skills">Skills Matrix</a></li>
              <li><a href="#contact">Get in Touch</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Contact Details</h4>
            <div className="footer-contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={16} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">Email</span>
                  <div className="contact-action-row">
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-link" title="Send Email">
                      {PERSONAL_INFO.email}
                    </a>
                    <button
                      type="button"
                      className="btn-copy-small"
                      onClick={handleCopyEmail}
                      title="Copy Email"
                      aria-label="Copy Email"
                    >
                      {copiedEmail ? <Check size={13} className="text-success" /> : <Copy size={13} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={16} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">Phone</span>
                  <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="contact-link" title="Call Phone">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={16} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="footer-col footer-col-social">
            <h4 className="footer-col-title">Connect & Social</h4>
            <p className="social-intro">
              Let's connect professionally or explore code repositories.
            </p>
            <div className="footer-social-links">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin-btn"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} className="arrow" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github-btn"
                title="GitHub Repositories"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
                <ArrowUpRight size={14} className="arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright-text">
            © {new Date().getFullYear()} <span className="highlight-text">{PERSONAL_INFO.name}</span>. All rights reserved.
          </div>

          <button
            type="button"
            className="btn-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
