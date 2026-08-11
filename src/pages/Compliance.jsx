import React from 'react';

export default function Compliance() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-certificate"></i> UK GOVERNANCE &amp; REGULATION</span>
          <h1 className="section-title">Security Built for Compliance</h1>
          <p className="section-desc">Reduce compliance complexity by connecting security controls, risk management and continuous monitoring.</p>
        </div>

        {/* Compliance Cards */}
        <div className="cards-grid-4">
          <div className="card-item-3d">
            <h3 className="service-title">UK GDPR</h3>
            <p className="service-desc">Protect personal data through appropriate technical and organisational security measures under ICO guidance.</p>
          </div>
          <div className="card-item-3d">
            <h3 className="service-title">Cyber Essentials</h3>
            <p className="service-desc">Government-backed protection against common cyber threats.</p>
          </div>
          <div className="card-item-3d">
            <h3 className="service-title">Cyber Essentials Plus</h3>
            <p className="service-desc">Higher-assurance technical verification and vulnerability auditing.</p>
          </div>
          <div className="card-item-3d">
            <h3 className="service-title">ISO/IEC 27001</h3>
            <p className="service-desc">Information security management system alignment and audit readiness.</p>
          </div>
          <div className="card-item-3d">
            <h3 className="service-title">NIST CSF 2.0</h3>
            <p className="service-desc">Risk-based cybersecurity framework mapping.</p>
          </div>
          <div className="card-item-3d">
            <h3 className="service-title">SOC 2</h3>
            <p className="service-desc">Security and control assurance auditing.</p>
          </div>
        </div>

        {/* Compliance Lifecycle Flow */}
        <div className="flow-diagram-wrapper" style={{ marginTop: '3rem' }}>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--pink)', marginBottom: '1.2rem', textAlign: 'center' }}>
            ENTERPRISE COMPLIANCE LIFECYCLE
          </div>
          <div className="flow-steps-grid">
            <div className="flow-step-box"><div className="flow-step-name">FRAMEWORK</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">CONTROL</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">MONITOR</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">EVIDENCE</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box" style={{ borderColor: 'var(--orange)' }}><div className="flow-step-name">REPORT</div></div>
          </div>
        </div>

        {/* ICO Certificate Details Card */}
        <div className="ico-cert-card" style={{ marginTop: '3rem' }}>
          <div className="ico-badge-graphic"><img src="/assets/ico-badge.svg" alt="ICO UK Badge" /></div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '0.8rem' }}>NETCRADUS LIMITED</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Registered Data Controller with the Information Commissioner's Office (ICO) under the UK Data Protection Act 2018.</p>
            <div className="cert-details-grid">
              <div><div className="cert-item-title">Registration Ref</div><div className="cert-item-val" style={{ color: 'var(--orange)' }}>ZC045097</div></div>
              <div><div className="cert-item-title">Status</div><div className="cert-item-val" style={{ color: 'var(--green-emerald)' }}>Active &amp; Verified</div></div>
              <div><div className="cert-item-title">Term</div><div className="cert-item-val">21 Nov 2025 &ndash; 20 Nov 2026</div></div>
              <div><div className="cert-item-title">UK HQ</div><div className="cert-item-val">104 A London Road, Leicester, LE2 0QS</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
