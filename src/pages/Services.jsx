import React, { useState } from 'react';

export default function Services() {
  const [videoError, setVideoError] = useState(false);

  return (
    <>
      {/* SERVICES HERO SECTION WITH LOOPING BACKGROUND VIDEO */}
      <section className="services-hero">
        {/* Background Video */}
        {!videoError && (
          <video
            className="services-hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={`${import.meta.env.BASE_URL}assets/netcradus_one_solution_cycle_poster.png`}
            onError={() => {
              console.warn("Services background video failed to load, falling back to static poster/gradient.");
              setVideoError(true);
            }}
          >
            <source
              src={`${import.meta.env.BASE_URL}assets/netcradus_one_solution_cycle.mp4`}
              type="video/mp4"
            />
            {/* Fallback image if video tags are not supported */}
            <img
              src={`${import.meta.env.BASE_URL}assets/netcradus_one_solution_cycle_poster.png`}
              alt="Netcradus One Process Cycle"
              className="services-hero-video"
            />
          </video>
        )}

        {/* Semi-transparent Dark Overlay */}
        <div className="services-hero-overlay"></div>

        {/* Hero Content Grid */}
        <div className="services-hero-container">
          {/* Left Column: Empty to show the background video graphic clearly without overlap */}
          <div className="services-hero-left"></div>

          {/* Right Column: Branded Text content */}
          <div className="services-hero-right-text">
            <h2 className="services-hero-brand-title">
              NETCRADUS <span className="highlight-gradient">ONE</span> SOLUTION
            </h2>
            <div className="services-hero-brand-divider"></div>
            <p className="services-hero-brand-subtitle">
              ASK. ANALYZE. ANSWER. AUTOMATE.
            </p>
            <p className="services-hero-brand-description">
              ONE CONTINUOUS LOOP OF NETWORK INTELLIGENCE.
            </p>
          </div>
        </div>
      </section>

      {/* 4 PILLARS GRID SECTION (Shifted down from Hero) */}
      <section className="pillars-section">
        {/* Background Ambient Cyber Effects */}
        <div className="pillars-bg-grid"></div>
        <div className="pillars-bg-beam"></div>
        <div className="pillars-bg-network">
          <svg className="pillars-svg-network" viewBox="0 0 1400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150,200 L400,100 L700,220 L1050,120 L1300,280" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="6 6" />
            <path d="M100,450 L350,380 L650,490 L950,420 L1250,510" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
            <path d="M250,150 L250,350 L550,280" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
            
            <circle cx="150" cy="200" r="3" fill="#ffffff" opacity="0.15" className="net-node pulse-slow" />
            <circle cx="400" cy="100" r="2" fill="#ffffff" opacity="0.1" className="net-node" />
            <circle cx="700" cy="220" r="3" fill="#ffffff" opacity="0.2" className="net-node pulse-mid" />
            <circle cx="1050" cy="120" r="2" fill="#ffffff" opacity="0.1" className="net-node" />
            <circle cx="1300" cy="280" r="3.5" fill="#ffffff" opacity="0.25" className="net-node pulse-slow" />
            <circle cx="350" cy="380" r="3" fill="#ffffff" opacity="0.15" className="net-node pulse-mid" />
            <circle cx="650" cy="490" r="2" fill="#ffffff" opacity="0.1" className="net-node" />
            <circle cx="950" cy="420" r="3" fill="#ffffff" opacity="0.2" className="net-node pulse-slow" />
          </svg>
        </div>
        <div className="pillars-bg-particles">
          <span className="p-dot p1"></span>
          <span className="p-dot p2"></span>
          <span className="p-dot p3"></span>
          <span className="p-dot p4"></span>
          <span className="p-dot p5"></span>
          <span className="p-dot p6"></span>
          <span className="p-dot p7"></span>
          <span className="p-dot p8"></span>
          <span className="p-dot p9"></span>
          <span className="p-dot p10"></span>
          <span className="p-dot p11"></span>
          <span className="p-dot p12"></span>
          <span className="p-dot p13"></span>
          <span className="p-dot p14"></span>
          <span className="p-dot p15"></span>
          <span className="p-dot p16"></span>
        </div>
        <div className="section-container">
          <div className="section-header centered">
            <span className="section-tag">
              <i className="fas fa-sync-alt"></i> THE FOUR PILLARS
            </span>
            <h2 className="section-title">Continuous Protection Lifecycle</h2>
            <p className="section-subtitle">Our proactive security methodology runs in a constant, reinforcing loop to safeguard your infrastructure.</p>
          </div>

          <div className="pillars-grid">
            {/* Pillar 1: ASK */}
            <div className="pillar-card ask">
              <div className="pillar-card-header">
                <span className="pillar-dot ask"></span>
                <span className="pillar-num">01</span>
              </div>
              <h3 className="pillar-card-title">ASK</h3>
              <p className="pillar-card-desc">Discover every connected asset across your dynamic network fabric.</p>
            </div>

            {/* Pillar 2: ANALYZE */}
            <div className="pillar-card analyze">
              <div className="pillar-card-header">
                <span className="pillar-dot analyze"></span>
                <span className="pillar-num">02</span>
              </div>
              <h3 className="pillar-card-title">ANALYZE</h3>
              <p className="pillar-card-desc">Correlate risk signals, vulnerabilities, and telemetry in real time.</p>
            </div>

            {/* Pillar 3: ANSWER */}
            <div className="pillar-card answer">
              <div className="pillar-card-header">
                <span className="pillar-dot answer"></span>
                <span className="pillar-num">03</span>
              </div>
              <h3 className="pillar-card-title">ANSWER</h3>
              <p className="pillar-card-desc">Deliver actionable insights, prioritized fixes, and remediation paths.</p>
            </div>

            {/* Pillar 4: AUTOMATE */}
            <div className="pillar-card automate">
              <div className="pillar-card-header">
                <span className="pillar-dot automate"></span>
                <span className="pillar-num">04</span>
              </div>
              <h3 className="pillar-card-title">AUTOMATE</h3>
              <p className="pillar-card-desc">Enforce secure baseline configurations and trigger self-healing runbooks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES SECTIONS (Below Hero) */}
      <section className="services-details-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">
              <i className="fas fa-cogs"></i> ENTERPRISE SUITE
            </span>
            <h2 className="section-title">Security Engineering for Every Layer of Your Business</h2>
          </div>

          <div className="cards-grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            <div className="card-item-3d">
              <h3 className="service-title">Threat Assessment</h3>
              <p className="service-desc">Understand your exposure before attackers do.</p>
            </div>
            <div className="card-item-3d">
              <h3 className="service-title">Vulnerability Management</h3>
              <p className="service-desc">Identify, prioritise and remediate weaknesses.</p>
            </div>
            <div className="card-item-3d">
              <h3 className="service-title">Penetration Testing</h3>
              <p className="service-desc">Simulate real-world attack scenarios.</p>
            </div>
            <div className="card-item-3d">
              <h3 className="service-title">Zero Trust</h3>
              <p className="service-desc">Verify every identity, device and access request.</p>
            </div>
            <div className="card-item-3d">
              <h3 className="service-title">Cloud Security</h3>
              <p className="service-desc">Secure modern cloud and hybrid environments.</p>
            </div>
            <div className="card-item-3d">
              <h3 className="service-title">Security Governance</h3>
              <p className="service-desc">Build security policies, controls and accountability.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
