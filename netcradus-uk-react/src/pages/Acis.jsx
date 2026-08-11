import React from 'react';

export default function Acis() {
  return (
    <>
      {/* PAGE 03 — ACIS PLATFORM HERO SECTION */}
      <section className="platform-hero">
        <div className="platform-hero-overlay"></div>
        <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="section-tag"><i className="fas fa-brain"></i> FLAGSHIP AI ENGINE</span>
            <h1 className="section-title">ACIS — Autonomous Cyber Immune System</h1>
            <p className="section-desc">
              <strong>Security that adapts. Defends. Learns.</strong><br />
              ACIS brings together continuous detection, threat intelligence, automated response and security orchestration into an autonomous cyber defence ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* PAGE 03 — ACIS CORE CAPABILITIES & LIFECYCLE SECTION */}
      <section className="section" style={{ background: 'rgba(11, 5, 24, 0.7)', padding: '5rem 0' }}>
        <div className="section-container">
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
