import React, { useState } from 'react';
import { Mail, Send, Check, Copy, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import './Contact.scss';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Fallback open mailto
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build <span className="gradient-text">Something Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an enterprise project, frontend opening, or want to connect about React.js & HRMS architectures, feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Channels */}
          <div className="contact-info-col">
            <h3 className="cta-lead">Ready to collaborate?</h3>
            <p className="cta-subtext">
              I am actively looking for Frontend Developer opportunities where I can contribute my enterprise React, TypeScript, and state management skills.
            </p>

            <div className="contact-channels">
              {/* Email Card */}
              <div className="channel-card">
                <div className="channel-left">
                  <div className="icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="details">
                    <span className="label">Direct Email</span>
                    <span className="value">{PERSONAL_INFO.email}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                >
                  {copied ? <span style={{ color: 'var(--accent-success)', display: 'flex', alignItems: 'center', gap: 4 }}><Check size={14} /> Copied!</span> : <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Copy size={14} /> Copy</span>}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
              >
                <div className="channel-left">
                  <div className="icon-box" style={{ background: 'rgba(10, 102, 194, 0.15)', color: '#0a66c2' }}>
                    <LinkedinIcon size={20} />
                  </div>
                  <div className="details">
                    <span className="label">Professional Network</span>
                    <span className="value">LinkedIn Profile</span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="arrow-icon" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
              >
                <div className="channel-left">
                  <div className="icon-box" style={{ background: 'rgba(255, 255, 255, 0.08)', color: 'var(--text-primary)' }}>
                    <GithubIcon size={20} />
                  </div>
                  <div className="details">
                    <span className="label">Open Source & Code</span>
                    <span className="value">GitHub Repositories</span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="arrow-icon" />
              </a>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="contact-form-card">
            <h3 className="form-heading">Send a Direct Message</h3>

            {submitted ? (
              <div className="form-success-alert">
                <span className="alert-title">Thank you for reaching out!</span>
                <p className="alert-text">
                  Your message client has been opened. I will respond to your email promptly.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '0.5rem' }}
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Frontend Developer Role / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    placeholder="Hello Surendar, we would love to discuss a React.js developer position with you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg btn-submit"
                >
                  {isSubmitting ? (
                    <span>Preparing Message...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
