import React from 'react';

export default function ZeroTrust() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-lock"></i> IDENTITY &amp; ACCESS</span>
          <h1 className="section-title">Trust Nothing. Verify Everything.</h1>
          <p className="section-desc">Modern organisations need security that assumes compromise and continuously validates access.</p>
        </div>

        {/* Architecture Flow */}
        <div className="flow-diagram-wrapper">
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--pink)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.2rem', textAlign: 'center' }}>
            ZERO TRUST ARCHITECTURE FLOW
          </div>
          <div className="flow-steps-grid">
            <div className="flow-step-box"><div className="flow-step-name">IDENTITY</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">DEVICE</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">APPLICATION</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">NETWORK</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box" style={{ borderColor: 'var(--green-emerald)' }}><div className="flow-step-name">DATA</div></div>
          </div>
        </div>

        <div className="cards-grid-4" style={{ marginTop: '3rem' }}>
          <div className="card-item-3d"><h3 className="service-title">Identity-First Security</h3><p className="service-desc">Robust authentication as the primary security perimeter.</p></div>
          <div className="card-item-3d"><h3 className="service-title">MFA Integration</h3><p className="service-desc">Phishing-resistant multi-factor authentication everywhere.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Privileged Access Controls</h3><p className="service-desc">Granular PAM &amp; JIT administrative access.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Micro-Segmentation</h3><p className="service-desc">Restrict lateral movement inside internal networks.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Continuous Verification</h3><p className="service-desc">Evaluate session risk dynamically throughout access.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Least-Privilege Access</h3><p className="service-desc">Grant minimal necessary permissions for tasks.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Conditional Access</h3><p className="service-desc">Enforce context-aware security policies.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Access Monitoring</h3><p className="service-desc">Audit all access logs continuously.</p></div>
        </div>
      </div>
    </section>
  );
}
