import React, { useState } from 'react';
import { FolderGit2, ArrowRight, Star, ExternalLink, CheckCircle2, Zap, Calendar, Code2 } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import type { ProjectItem } from '../../data/portfolioData';
import { GithubIcon } from '../common/Icons';
import { ProjectModal } from '../ProjectModal/ProjectModal';
import './Projects.scss';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Enterprise'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Enterprise'] as const;

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">
            Enterprise <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="section-subtitle">
            Production-tested enterprise applications, dynamic CRUD systems, complex business approval workflows, and scalable REST API integrations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' ? 'All Case Studies' : 'Enterprise Platforms'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-cards-list">
          {filteredProjects.map((project) => {
            return (
              <div key={project.id} className="project-master-card">
                <div className="card-ambient-glow"></div>

                {/* Card Top Header */}
                <div className="card-top-row">
                  <div className="badges-left">
                    <span className="badge-category">{project.category}</span>
                    {project.badge && (
                      <span className="badge-pill">
                        <Star size={12} />
                        {project.badge}
                      </span>
                    )}
                  </div>
                  {project.period && (
                    <div className="project-period-tag">
                      <Calendar size={13} />
                      <span>{project.period}</span>
                    </div>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div className="project-heading-block">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-subtitle">{project.subtitle}</div>
                </div>

                {/* Tech Stack Chips */}
                <div className="project-tech-tags">
                  <span className="tech-label">
                    <Code2 size={14} />
                    <span>Stack:</span>
                  </span>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="project-description">{project.description}</p>

                {/* Dual Deliverables & Impact Grid */}
                <div className="project-deliverables-grid">
                  {/* Left Column: Key Features / Deliverables */}
                  {project.features && project.features.length > 0 && (
                    <div className="deliverable-box">
                      <div className="box-heading">
                        <CheckCircle2 size={15} className="icon-emerald" />
                        <span>Core Deliverables & Workflows</span>
                      </div>
                      <ul className="features-list">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx}>
                            <span className="bullet-point">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Right Column: Metrics & Architecture Highlights */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="deliverable-box metrics-box">
                      <div className="box-heading">
                        <Zap size={15} className="icon-cyan" />
                        <span>Architecture & Impact Highlights</span>
                      </div>
                      <ul className="features-list">
                        {project.metrics.map((metric, mIdx) => (
                          <li key={mIdx}>
                            <span className="bullet-point bullet-cyan">✦</span>
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Bottom Footer */}
                <div className="project-card-footer">
                  <button
                    type="button"
                    className="btn-inspect-specs"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Inspect Full Architecture Specs</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="footer-action-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-action-pill btn-action-github"
                      >
                        <GithubIcon size={16} />
                        <span>GitHub Code</span>
                      </a>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-action-pill btn-action-demo"
                      >
                        <ExternalLink size={15} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* In-depth Project Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
