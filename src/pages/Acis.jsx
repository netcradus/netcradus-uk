import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Acis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modulesList = [
    { name: 'Log Explorer', icon: 'fa-folder-tree' },
    { name: 'Correlation', icon: 'fa-diagram-project' },
    { name: 'Alerts & Incidents', icon: 'fa-triangle-exclamation' },
    { name: 'Assets & Identities', icon: 'fa-users-gear' },
    { name: 'Threat Intel', icon: 'fa-globe' },
    { name: 'SOAR Playbooks', icon: 'fa-bolt' },
    { name: 'Red Team', icon: 'fa-user-ninja' },
    { name: 'File Scanning', icon: 'fa-file-shield' },
    { name: 'Supply Chain', icon: 'fa-network-wired' },
    { name: 'Approvals', icon: 'fa-user-check' },
    { name: 'Endpoints & Network', icon: 'fa-desktop' },
    { name: 'Compliance & Audit', icon: 'fa-file-contract' },
    { name: 'Reports', icon: 'fa-chart-pie' },
    { name: 'AI Analyst', icon: 'fa-brain' },
    { name: 'Settings', icon: 'fa-sliders' }
  ];

  const pillarsList = [
    { num: '01', title: 'SIEM', subtitle: 'Security Monitoring', desc: 'Real-time log aggregation, parsing, and telemetry correlation across your infrastructure.', link: '/platform/siem' },
    { num: '02', title: 'SOAR', subtitle: 'Response & Automation', desc: 'Orchestrated containment playbooks with human-in-the-loop approval safeguards.', link: '/platform/soar' },
    { num: '03', title: 'Threat Intelligence', subtitle: 'Threat Intelligence', desc: 'Global IOC feeds correlated directly with UK-specific threat activity and telemetry.', link: '/platform/cti' },
    { num: '04', title: 'Red Teaming', subtitle: 'Proactive Security', desc: 'Continuous exposure assessment and automated adversary simulation testing.', link: '/platform/red-teaming' },
    { num: '05', title: 'Swarm Intelligence', subtitle: 'Adaptive Defence', desc: 'Agentic multi-node signal analysis detecting zero-day anomalies across vectors.', link: '/platform/swarm-intelligence' }
  ];

  const rolesList = [
    { role: 'SOC Analyst', desc: 'Rapid triage, correlated alerts, and instant incident context.' },
    { role: 'Incident Responder', desc: 'Automated containment actions with one-click approval workflows.' },
    { role: 'Super Admin', desc: 'Complete policy management, system integration, and global controls.' },
    { role: 'Read-Only Auditor', desc: 'Immutable audit logs, compliance tracking, and executive reports.' }
  ];

  return (
    <div className="acis-new-page">
      
      {/* 1. NEW ACIS HERO */}
      <section className="acis-hero-section">
        <div className="section-container">
          <div className="acis-hero-grid">
            
            {/* HERO LEFT SIDE */}
            <div className="acis-hero-left">
              <span className="acis-hero-eyebrow">AUTONOMOUS CYBER IMMUNE SYSTEM</span>
              <h1 className="acis-hero-title">ACIS</h1>
              <h2 className="acis-hero-subtitle">
                Security that detects. <br />
                Understands. Responds.
              </h2>
              <p className="acis-hero-desc">
                Continuous cyber defence with human control at every critical decision.
              </p>
              <div className="acis-hero-actions">
                <a href="#what-is-acis" className="acis-btn-primary">
                  Explore ACIS &rarr;
                </a>
                <Link to="/contact" className="acis-btn-secondary">
                  Request a Demo
                </Link>
              </div>
            </div>

            {/* HERO RIGHT SIDE: SIGNATURE ENVELOPE + ACIS CARD */}
            <div className="acis-hero-right">
              <div className="acis-visual-frame">
                <img
                  src={`${import.meta.env.BASE_URL}images/acis_hero_envelope.jpg`}
                  alt="ACIS Security Card emerging from Netcradus Envelope"
                  className="acis-envelope-img"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHAT IS ACIS? */}
      <section 
        id="what-is-acis" 
        className="acis-overview-section"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(5, 2, 12, 0.82) 0%, rgba(9, 4, 21, 0.88) 100%), url(${import.meta.env.BASE_URL}images/acis_what_is_bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="section-container">
          <div className="acis-section-header">
            <span className="acis-tag-badge">WHAT IS ACIS?</span>
            <h2 className="acis-section-title">Your Security Operations. Connected.</h2>
            <p className="acis-section-desc">
              ACIS continuously monitors servers, applications, cloud accounts, endpoints, and websites for signs of attack, analyzes those signals, and helps respond while keeping critical destructive actions under human approval.
            </p>
          </div>

          <div className="acis-three-cards-grid">
            <div className="acis-minimal-card">
              <div className="acis-card-num">01</div>
              <h3 className="acis-card-title">DETECT</h3>
              <p className="acis-card-desc">Continuously monitor your attack surface.</p>
            </div>
            <div className="acis-minimal-card">
              <div className="acis-card-num">02</div>
              <h3 className="acis-card-title">UNDERSTAND</h3>
              <p className="acis-card-desc">Turn security signals into meaningful alerts.</p>
            </div>
            <div className="acis-minimal-card">
              <div className="acis-card-num">03</div>
              <h3 className="acis-card-title">RESPOND</h3>
              <p className="acis-card-desc">Take action with human approval when it matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HUMAN-IN-THE-LOOP CONTROL */}
      <section className="acis-human-loop-section">
        <div className="section-container">
          <div className="acis-human-grid">
            <div className="acis-human-content">
              <span className="acis-tag-badge">HUMAN-IN-THE-LOOP CONTROL</span>
              <h2 className="acis-section-title">
                Autonomous Where It Should Be. <br />
                Human Where It Matters.
              </h2>
              <p className="acis-section-desc">
                ACIS automates continuous monitoring, detection, signal analysis, and response preparation. However, all critical and destructive containment actions require explicit human approval, ensuring complete operational governance.
              </p>

              <div className="acis-human-badges-row">
                <div className="acis-badge-chip">
                  <i className="fas fa-user-check"></i>
                  <span>HUMAN APPROVED</span>
                </div>
                <div className="acis-badge-chip">
                  <i className="fas fa-file-signature"></i>
                  <span>LOGGED</span>
                </div>
                <div className="acis-badge-chip">
                  <i className="fas fa-shield-halved"></i>
                  <span>AUDITABLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACIS SECURITY LOOP */}
      <section className="acis-loop-section">
        <div className="section-container">
          <div className="acis-section-header">
            <h2 className="acis-section-title">The ACIS Security Loop</h2>
            <p className="acis-section-desc">
              Unified threat response lifecycle operating around the central ACIS intelligence core.
            </p>
          </div>
        </div>

        <div className="acis-architecture-container">
          <div className="acis-architecture-visual-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}images/acis_continuous_architecture.jpg`}
              alt="Continuous Architecture - The ACIS Security Loop"
              className="acis-architecture-img"
            />
          </div>
        </div>
      </section>

      {/* 5. FIVE ACIS PILLARS */}
      <section className="acis-pillars-section">
        <div className="section-container">
          <div className="acis-section-header">
            <span className="acis-tag-badge">CORE CAPABILITIES</span>
            <h2 className="acis-section-title">One Platform. Five Security Capabilities.</h2>
          </div>

          <div className="acis-pillars-grid">
            {pillarsList.map((pillar) => (
              <Link to={pillar.link} key={pillar.num} className="acis-pillar-card">
                <div className="pillar-num">{pillar.num}</div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <div className="pillar-subtitle">{pillar.subtitle}</div>
                <p className="pillar-desc">{pillar.desc}</p>
                <div className="pillar-link">
                  <span>Explore Capability</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACIS PLATFORM MODULES */}
      <section className="acis-modules-section">
        <div className="section-container">
          <div className="acis-section-header">
            <span className="acis-tag-badge">SYSTEM MODULES</span>
            <h2 className="acis-section-title">ACIS Platform Modules</h2>
          </div>

          <div className="acis-modules-chips-grid">
            {modulesList.map((mod, idx) => (
              <div key={idx} className="acis-module-chip">
                <i className={`fas ${mod.icon}`}></i>
                <span>{mod.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHO USES ACIS */}
      <section className="acis-roles-section">
        <div className="section-container">
          <div className="acis-section-header">
            <span className="acis-tag-badge">SECURITY TEAMS</span>
            <h2 className="acis-section-title">Who Uses ACIS</h2>
          </div>

          <div className="acis-roles-grid">
            {rolesList.map((role, idx) => (
              <div key={idx} className="acis-role-card">
                <div className="role-icon-box">
                  <i className="fas fa-shield-cat"></i>
                </div>
                <h3 className="role-title">{role.role}</h3>
                <p className="role-desc">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="acis-final-cta-section">
        <div className="section-container">
          <div className="acis-final-cta-box">
            <h2 className="acis-cta-title">Build a More Resilient Security Operation.</h2>
            <p className="acis-cta-desc">
              Detect threats faster, respond smarter, and maintain full human control over your enterprise defence.
            </p>
            <div className="acis-cta-actions">
              <Link to="/contact" className="acis-btn-primary">
                Request an ACIS Demo &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
