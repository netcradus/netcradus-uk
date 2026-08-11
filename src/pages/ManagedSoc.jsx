import React from 'react';

export default function ManagedSoc() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-headset"></i> 24/7 OPERATIONS</span>
          <h1 className="section-title">24/7 SOC. Continuous Security.</h1>
          <p className="section-desc">Your security operations shouldn't sleep—and neither should your visibility.</p>
        </div>

        <div className="cards-grid-4">
          <div className="card-item-3d"><h3 className="service-title">Continuous Monitoring</h3><p className="service-desc">24/7 monitoring of critical security events across your infrastructure.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Threat Detection</h3><p className="service-desc">Identify suspicious behaviour before it turns into a major incident.</p></div>
          <div className="card-item-3d"><h3 className="service-title">SIEM Management</h3><p className="service-desc">Centralise security data and turn raw logs into actionable intelligence.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Threat Hunting</h3><p className="service-desc">Proactively search for indicators of compromise and abnormal activity.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Incident Escalation</h3><p className="service-desc">Prioritised alerts and structured response workflows.</p></div>
        </div>
      </div>
    </section>
  );
}
