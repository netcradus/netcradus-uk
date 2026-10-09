import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Acis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activePillar, setActivePillar] = useState('01');

  const modulesList = [
    {
      name: 'Log Explorer',
      desc: 'Search and browse raw ingested log events.',
      icon: 'fa-folder-tree',
      route: '/platform/siem'
    },
    {
      name: 'Correlation',
      desc: 'Rules engine that turns raw logs into alerts.',
      icon: 'fa-diagram-project',
      route: '/platform/siem'
    },
    {
      name: 'Alerts & Incidents',
      desc: 'Every alert ACIS has raised, and triage status.',
      icon: 'fa-triangle-exclamation',
      route: '/platform/siem'
    },
    {
      name: 'Assets & Identities',
      desc: 'Inventory of machines, cloud resources, identities.',
      icon: 'fa-users-gear',
      route: '/platform/siem'
    },
    {
      name: 'Threat Intel',
      desc: 'Known-bad indicators (IPs, hashes, domains) ACIS checks activity against.',
      icon: 'fa-globe',
      route: '/platform/cti'
    },
    {
      name: 'SOAR Playbooks',
      desc: 'Automated and semi-automated response workflows.',
      icon: 'fa-bolt',
      route: '/platform/soar'
    },
    {
      name: 'Red Team',
      desc: 'Authorized offensive-security testing engagements.',
      icon: 'fa-user-ninja',
      route: '/platform/red-teaming'
    },
    {
      name: 'File Scanning',
      desc: 'Malware and mobile-app static-analysis scanning for uploaded files.',
      icon: 'fa-file-shield',
      route: ''
    },
    {
      name: 'Supply Chain',
      desc: 'Dependency vulnerability scanning.',
      icon: 'fa-network-wired',
      route: ''
    },
    {
      name: 'Approvals',
      desc: 'Queue of pending approval-gated actions awaiting human decision.',
      icon: 'fa-user-check',
      route: '/platform/soar'
    },
    {
      name: 'Endpoints & Network',
      desc: 'Enrolled endpoint agents and their status.',
      icon: 'fa-desktop',
      route: '/platform/siem'
    },
    {
      name: 'Compliance & Audit',
      desc: 'Tamper-evident audit trail and compliance reporting.',
      icon: 'fa-file-contract',
      route: '/solutions/grc'
    },
    {
      name: 'Reports',
      desc: 'Generated and scheduled reports.',
      icon: 'fa-chart-pie',
      route: '/solutions/grc'
    },
    {
      name: 'AI Analyst',
      desc: 'AI-assisted query and explanation over security data.',
      icon: 'fa-brain',
      route: '/platform/swarm-intelligence'
    },
    {
      name: 'Settings',
      desc: 'Profile, notifications, roles, users, integrations.',
      icon: 'fa-sliders',
      route: ''
    }
  ];

  const pillarsList = [
    {
      num: '01',
      title: 'SIEM',
      category: 'Security Monitoring',
      icon: 'fa-shield-halved',
      desc: 'Real-time security visibility across logs, events and telemetry.',
      capabilities: [
        'Log aggregation and visibility',
        'Security event monitoring',
        'Detection and correlation',
        'Investigation support'
      ],
      link: '/platform/siem'
    },
    {
      num: '02',
      title: 'SOAR',
      category: 'Response & Automation',
      icon: 'fa-atom',
      desc: 'Orchestrated response workflows that help security teams investigate and contain incidents.',
      capabilities: [
        'Automated response workflows',
        'Playbook orchestration',
        'Semi-automated containment',
        'Human approval for critical actions'
      ],
      link: '/platform/soar'
    },
    {
      num: '03',
      title: 'Threat Intelligence',
      category: 'Threat Intelligence',
      icon: 'fa-brain',
      desc: 'Known-bad indicators and threat context used to strengthen detection and investigation.',
      capabilities: [
        'IP intelligence',
        'Domain intelligence',
        'Hash intelligence',
        'Threat context and correlation'
      ],
      link: '/platform/cti'
    },
    {
      num: '04',
      title: 'Red Teaming',
      category: 'Offensive Security',
      icon: 'fa-crosshairs',
      desc: 'Authorized offensive-security testing used to identify weaknesses and validate defensive controls.',
      capabilities: [
        'Authorized security testing',
        'Exposure assessment',
        'Adversary simulation',
        'Security validation'
      ],
      link: '/platform/red-teaming'
    },
    {
      num: '05',
      title: 'Swarm Intelligence',
      category: 'Distributed Intelligence',
      icon: 'fa-circle-nodes',
      desc: 'Distributed analysis of security signals to improve collective threat understanding.',
      capabilities: [
        'Distributed signal analysis',
        'Cross-signal intelligence',
        'Pattern identification',
        'Emerging-threat awareness'
      ],
      link: '/platform/swarm-intelligence'
    }
  ];

  const selectedPillarData = pillarsList.find((p) => p.num === activePillar) || pillarsList[0];

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
                Understands. <span style={{ color: '#ff7a00' }}>Responds.</span>
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
            <span className="acis-tag-badge">CONTINUOUS ARCHITECTURE</span>
            <h2 className="acis-section-title">The ACIS Security Loop</h2>
            <p className="acis-section-desc">
              Unified threat response lifecycle operating around the central ACIS intelligence core.
            </p>
          </div>

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

          <div className="acis-pillars-interactive-grid">
            {/* LEFT SIDE: ACIS PILLARS IMAGE */}
            <div className="acis-pillars-left">
              <img
                src={`${import.meta.env.BASE_URL}images/acis_pillars.jpg`}
                alt="ACIS Five Security Capabilities Pillars"
                className="acis-pillars-img"
              />
            </div>

            {/* RIGHT SIDE: INTERACTIVE NAVIGATION + DETAILED INFORMATION PANEL */}
            <div className="acis-pillars-right">
              {/* PILLAR NAVIGATION LIST */}
              <div className="acis-pillar-tabs">
                {pillarsList.map((pillar) => {
                  const isActive = activePillar === pillar.num;
                  return (
                    <button
                      key={pillar.num}
                      type="button"
                      className={`acis-pillar-tab-btn ${isActive ? 'active' : ''}`}
                      onClick={() => setActivePillar(pillar.num)}
                    >
                      <div className="tab-left-group">
                        <i className={`fas ${pillar.icon} tab-icon`}></i>
                        <span className="tab-num">{pillar.num} &mdash;</span>
                        <span className="tab-title">{pillar.title}</span>
                      </div>
                      <i className={`fas ${isActive ? 'fa-chevron-up' : 'fa-chevron-right'} tab-chevron`}></i>
                    </button>
                  );
                })}
              </div>

              {/* DETAILED INFORMATION PANEL */}
              <div className="acis-pillar-detail-card" key={selectedPillarData.num}>
                <div className="detail-card-inner">
                  <div className="detail-left-content">
                    {/* TOP BADGE */}
                    <div className="detail-header-badge">
                      <div className="detail-icon-circle">
                        <i className={`fas ${selectedPillarData.icon}`}></i>
                      </div>
                      <span className="detail-badge-text">{selectedPillarData.num} &mdash; {selectedPillarData.category}</span>
                    </div>

                    {/* MAIN TITLE */}
                    <h3 className="detail-main-title">
                      {selectedPillarData.title}
                    </h3>

                    {/* SHORT DESCRIPTION */}
                    <p className="detail-desc">{selectedPillarData.desc}</p>

                    {/* KEY CAPABILITIES */}
                    <div className="detail-capabilities-block">
                      <h4 className="capabilities-label">KEY CAPABILITIES</h4>
                      <ul className="capabilities-list">
                        {selectedPillarData.capabilities.map((cap, i) => (
                          <li key={i} className="capability-item">
                            <i className="fas fa-circle-check check-icon"></i>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* RIGHT ABSTRACT DECORATIVE TECH GEAR EMBLEM & LEARN MORE BUTTON */}
                  <div className="detail-right-graphic">
                    <div className="graphic-ring-outer">
                      <div className="graphic-ring-inner">
                        <i className={`fas ${selectedPillarData.icon} graphic-center-icon`}></i>
                      </div>
                    </div>

                    {/* LEARN MORE BUTTON */}
                    <Link to={selectedPillarData.link} className="acis-pillar-learn-btn">
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ACIS PLATFORM MODULES */}
      <section className="acis-modules-section">
        <div className="section-container">
          <div className="acis-section-header">
            <span className="acis-tag-badge">SYSTEM MODULES</span>
            <h2 className="acis-section-title">ACIS Platform Modules</h2>
            <p className="acis-section-desc">
              Everything ACIS uses across detection, investigation, response and security operations.
            </p>
          </div>

          <div className="acis-modules-cards-grid">
            {modulesList.map((mod, idx) => {
              const cardInner = (
                <>
                  <div className="module-card-header">
                    <div className="module-icon-box">
                      <i className={`fas ${mod.icon}`}></i>
                    </div>
                    <i className="fas fa-arrow-up-right-from-square module-arrow"></i>
                  </div>
                  <h3 className="module-name">{mod.name}</h3>
                  <p className="module-desc">{mod.desc}</p>
                </>
              );

              return mod.route ? (
                <Link key={idx} to={mod.route} className="acis-module-card clickable">
                  {cardInner}
                </Link>
              ) : (
                <div key={idx} className="acis-module-card">
                  {cardInner}
                </div>
              );
            })}
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
