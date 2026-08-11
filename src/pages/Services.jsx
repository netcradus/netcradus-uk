import React from 'react';

export default function Services() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-cogs"></i> ENTERPRISE SUITE</span>
          <h1 className="section-title">Security Engineering for Every Layer of Your Business</h1>
        </div>

        <div className="cards-grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          <div className="card-item-3d"><h3 className="service-title">Threat Assessment</h3><p className="service-desc">Understand your exposure before attackers do.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Vulnerability Management</h3><p className="service-desc">Identify, prioritise and remediate weaknesses.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Penetration Testing</h3><p className="service-desc">Simulate real-world attack scenarios.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Zero Trust</h3><p className="service-desc">Verify every identity, device and access request.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Cloud Security</h3><p className="service-desc">Secure modern cloud and hybrid environments.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Security Governance</h3><p className="service-desc">Build security policies, controls and accountability.</p></div>
        </div>
      </div>
    </section>
  );
}
