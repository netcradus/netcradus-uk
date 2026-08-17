import React from 'react';
import { Link } from 'react-router-dom';

const platformModules = [
  {
    id: 'xdr',
    title: 'NetCradus XDR',
    tag: '→ Endpoint + Threat Hunting + Detection',
    desc: 'AI-powered unified endpoint, network and real-time threat hunting detection.',
    icon: 'fa-shield-halved',
    link: '/platform/xdr'
  },
  {
    id: 'siem',
    title: 'NetCradus SIEM',
    tag: '→ Log Management + Detection + Correlation',
    desc: 'Real-time log aggregation, intelligent event correlation and threat detection.',
    icon: 'fa-bullseye',
    link: '/platform/siem'
  },
  {
    id: 'soar',
    title: 'NetCradus SOAR',
    tag: '→ Automated Response + Playbooks',
    desc: 'Autonomous incident containment and agentic playbook orchestration.',
    icon: 'fa-bolt-lightning',
    link: '/platform/soar'
  },
  {
    id: 'cti',
    title: 'NetCradus CTI',
    tag: '→ Threat Intelligence',
    desc: 'Global cyber threat research, adversary tradecraft and IOC feeds.',
    icon: 'fa-eye',
    link: '/platform/cti'
  },
  {
    id: 'pam',
    title: 'NetCradus PAM',
    tag: '→ Privileged Access Management',
    desc: 'Verify identity, enforce zero trust, and secure privileged credentials.',
    icon: 'fa-users-gear',
    link: '/platform/pam'
  },
  {
    id: 'grc',
    title: 'NetCradus GRC',
    tag: '→ Risk + Compliance',
    desc: 'Continuous attack surface management, vulnerability scanning & compliance audits.',
    icon: 'fa-triangle-exclamation',
    link: '/platform/grc'
  },
  {
    id: 'ai-sec',
    title: 'NetCradus AI Security',
    tag: '→ AI/ML Security + AI Threat Detection',
    desc: 'AI engine protection, model vulnerability defense & LLM threat triage.',
    icon: 'fa-microchip',
    link: '/platform/ai-security'
  }
];

export default function ConvergedPlatformBar({ onItemClick }) {
  return (
    <div className="converged-platform-card-wrapper">
      {/* Top Header Bar */}
      <div className="converged-platform-topbar">
        <div className="converged-platform-title-group">
          <div className="converged-platform-icon-spark">
            <i className="fas fa-shapes"></i>
          </div>
          <div>
            <Link to="/platform" className="converged-platform-heading-link" onClick={onItemClick}>
              Platform <i className="fas fa-arrow-right"></i>
            </Link>
            <div className="converged-platform-subheading">
              Seven converged platforms working together as one intelligent cyber defense system.
            </div>
          </div>
        </div>


      </div>

      {/* 7 Modules Grid */}
      <div className="converged-platform-grid">
        {platformModules.map((module) => (
          <Link key={module.id} to={module.link} className="converged-item-card" onClick={onItemClick}>
            <div className="converged-item-icon-orb">
              <i className={`fas ${module.icon}`}></i>
            </div>
            <div className="converged-item-content">
              <div className="converged-item-title">
                {module.title}
              </div>
              <span className="converged-item-tag">{module.tag}</span>
              <p className="converged-item-desc">{module.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Footer Bar */}
      <div className="converged-platform-footer">
        <div className="converged-footer-status">
          <span className="dot"></span>
          Single Agent &bull; Single Console &bull; Autonomous Cyber Defense
        </div>

      </div>
    </div>
  );
}
