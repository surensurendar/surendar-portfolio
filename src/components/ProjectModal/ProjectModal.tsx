import React, { useEffect } from 'react';
import { X, CheckCircle2, Zap, Layers } from 'lucide-react';
import type { ProjectItem } from '../../data/portfolioData';
import { GithubIcon } from '../common/Icons';
import './ProjectModal.scss';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-badge">{project.category} • {project.role}</span>
            <h2>{project.title}</h2>
            <div className="modal-sub">{project.subtitle}</div>
          </div>
          <button type="button" className="btn-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Overview */}
          <div>
            <h4 className="section-heading">
              <Layers size={18} style={{ color: 'var(--accent-primary)' }} />
              Overview & Scope
            </h4>
            <p className="overview-text">{project.longDescription || project.description}</p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="section-heading">Key Features & Engineering Deliverables</h4>
              <div className="features-grid">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="feat-item">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metrics & Impact */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="section-heading">Technical Highlights & Metrics</h4>
              <div className="metrics-grid">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-card">
                    <Zap size={16} className="metric-icon" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="section-heading">Technologies & Libraries</h4>
            <div className="tech-badges-list">
              {project.tags.map((t, idx) => (
                <span key={idx} className="pill">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <GithubIcon size={15} />
              <span>GitHub Repo</span>
            </a>
          )}
          <button type="button" className="btn btn-primary btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
