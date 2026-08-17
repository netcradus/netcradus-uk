import React, { useEffect } from 'react';

export default function Acis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* PAGE 03 — ACIS PLATFORM VIDEO HERO SECTION */}
      <section className="acis-video-hero">
        <div className="acis-video-overlay"></div>
        <video
          className="acis-video-element"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="ACIS Platform Autonomous Cyber Immune System Demonstration Video"
        >
          <source src={`${import.meta.env.BASE_URL}videos/ACIS PPT video 1.mp4`} type="video/mp4" />
          <source src="/videos/ACIS PPT video 1.mp4" type="video/mp4" />
        </video>
      </section>

      {/* PAGE 03 — ACIS PLATFORM HERO SECTION */}
      <section className="platform-hero">
        <div className="platform-hero-overlay"></div>
        <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="section-tag"><i className="fas fa-brain"></i> ACIS — Autonomous Cyber Immune System</span>
            <h1 className="section-title">
              One Platform. Complete Cyber Resilience.
            </h1>
            <p className="section-desc">
              Netcradus brings visibility, threat intelligence, detection, response and security operations together in one intelligent platform.
            </p>
          </div>
        </div>
      </section>

      {/* PAGE 03 — ACIS CORE CAPABILITIES & LIFECYCLE SECTION */}
      <section className="section acis-lifecycle-section">
        {/* Ambient Glow Orbs */}
        <div className="glow-orb glow-orb-purple"></div>
        <div className="glow-orb glow-orb-pink"></div>
        <div className="glow-orb glow-orb-orange"></div>

        {/* Cyber Network SVG Lines */}
        <svg className="cyber-network-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cyan-purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--cyan)" />
              <stop offset="100%" stopColor="var(--purple)" />
            </linearGradient>
            <linearGradient id="purple-pink-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--purple)" />
              <stop offset="100%" stopColor="var(--pink)" />
            </linearGradient>
            <linearGradient id="pink-orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--pink)" />
              <stop offset="100%" stopColor="var(--orange)" />
            </linearGradient>
          </defs>
          <path d="M-10,20 L30,40 L70,30 L110,50" className="network-path" stroke="url(#cyan-purple-grad)" />
          <path d="M-10,80 L40,60 L60,75 L110,55" className="network-path" stroke="url(#purple-pink-grad)" />
          <path d="M20,-10 L50,50 L40,110" className="network-path" stroke="url(#pink-orange-grad)" />
          
          <circle cx="30" cy="40" r="1" className="network-node network-node-cyan" />
          <circle cx="70" cy="30" r="1" className="network-node network-node-purple" />
          <circle cx="40" cy="60" r="1.5" className="network-node network-node-pink" />
          <circle cx="60" cy="75" r="1" className="network-node network-node-orange" />
          <circle cx="50" cy="50" r="1.2" className="network-node network-node-purple" />
        </svg>

        {/* Small pulsating cybersecurity particles */}
        <div className="cyber-dot cyber-dot-1"></div>
        <div className="cyber-dot cyber-dot-2"></div>
        <div className="cyber-dot cyber-dot-3"></div>
        <div className="cyber-dot cyber-dot-4"></div>

        <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Outer Layers Diagram */}
          <div className="flow-diagram-wrapper" style={{ marginTop: 0, marginBottom: '4rem' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--pink)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.5rem', textAlign: 'center' }}>
              OUTER IMMUNITY LAYERS
            </div>
            <div className="flow-steps-grid">
              <div className="flow-step-box"><div className="flow-step-name">IDENTIFY</div></div>
              <div className="flow-arrow-icon">&rarr;</div>
              <div className="flow-step-box"><div className="flow-step-name">DETECT</div></div>
              <div className="flow-arrow-icon">&rarr;</div>
              <div className="flow-step-box"><div className="flow-step-name">ANALYSE</div></div>
              <div className="flow-arrow-icon">&rarr;</div>
              <div className="flow-step-box"><div className="flow-step-name">RESPOND</div></div>
              <div className="flow-arrow-icon">&rarr;</div>
              <div className="flow-step-box" style={{ borderColor: 'var(--pink)', background: 'rgba(255,45,120,0.12)' }}><div className="flow-step-name">ADAPT</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 03 — ACIS CORE CAPABILITIES SECTION */}
      <section className="section" style={{ background: 'rgba(11, 5, 24, 0.7)', padding: '5rem 0' }}>
        <div className="section-container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag"><i className="fas fa-cubes"></i> CORE CAPABILITIES</span>
            <h2 className="section-title">Autonomous Immune Protection Suite</h2>
            <p className="section-desc">Comprehensive AI-driven capabilities securing every enterprise asset.</p>
          </div>

          <div className="cards-grid-4">
            <div className="card-item-3d"><h3 className="service-title">Autonomous Threat Detection</h3><p className="service-desc">Continuous real-time anomaly analysis without manual rule updates.</p></div>
            <div className="card-item-3d"><h3 className="service-title">AI-Assisted Investigation</h3><p className="service-desc">Automated root cause analysis for rapid threat contextualisation.</p></div>
            <div className="card-item-3d"><h3 className="service-title">Behavioural Analytics</h3><p className="service-desc">Detect novel attack vectors by identifying abnormal user/process behaviour.</p></div>
            <div className="card-item-3d"><h3 className="service-title">Threat Intelligence</h3><p className="service-desc">Global threat feeds correlated with UK specific attack patterns.</p></div>
            <div className="card-item-3d"><h3 className="service-title">Automated Response</h3><p className="service-desc">Sub-second containment protocols isolating infected nodes.</p></div>
            <div className="card-item-3d"><h3 className="service-title">Continuous Security Monitoring</h3><p className="service-desc">Uninterrupted visibility across endpoints, cloud and networks.</p></div>
            <div className="card-item-3d"><h3 className="service-title">Attack Surface Visibility</h3><p className="service-desc">Complete asset discovery mapping external exposure points.</p></div>
            <div className="card-item-3d"><h3 className="service-title">Security Orchestration</h3><p className="service-desc">Automated playbooks across your security stack.</p></div>
            <div className="card-item-3d"><h3 className="service-title">Compliance Visibility</h3><p className="service-desc">Real-time telemetry mapped directly to UK GDPR &amp; ISO 27001 controls.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
