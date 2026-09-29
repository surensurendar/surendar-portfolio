import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText, Sparkles } from 'lucide-react';
import userPhoto from '../../assets/surendar.jpg';
import './Navbar.scss';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'hrms-spotlight', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'HRMS Showcase', href: '#hrms-spotlight' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-brand" onClick={() => setMobileOpen(false)}>
          <div className="logo-badge-photo">
            <img src={userPhoto} alt="Surendar G" className="nav-avatar-img" />
          </div>
          <div className="brand-text">
            <span className="name">Surendar G</span>
            <span className="role">
              <span className="status-dot"></span>
              2+ Yrs • React & HRMS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav>
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="nav-actions">
          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            type="button"
            className="btn btn-primary btn-sm resume-nav-btn"
            onClick={onOpenResume}
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileOpen(false)}
            >
              <span>{link.name}</span>
              <Sparkles size={14} style={{ opacity: 0.6 }} />
            </a>
          ))}
          <button
            type="button"
            className="btn btn-primary mobile-resume-btn"
            onClick={() => {
              setMobileOpen(false);
              onOpenResume();
            }}
          >
            <FileText size={16} />
            View / Download Resume
          </button>
        </div>
      )}
    </header>
  );
};
