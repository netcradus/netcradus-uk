import React from 'react';

export default function Industries() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-building"></i> SECTOR FOCUS</span>
          <h1 className="section-title">Cybersecurity for the UK's Critical Sectors</h1>
        </div>

        <div className="cards-grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div className="card-item-3d">
            <h3 className="service-title">Financial Services</h3>
            <p className="service-desc">Protect financial systems, customer data and digital services.</p>
          </div>
          <div className="card-item-3d">
            <h3 className="service-title">Healthcare</h3>
            <p className="service-desc">Secure sensitive health information and critical healthcare infrastructure.</p>
          </div>
          <div className="card-item-3d">
            <h3 className="service-title">Professional Services</h3>
            <p className="service-desc">Protect client information, intellectual property and business systems.</p>
          </div>
          <div className="card-item-3d">
            <h3 className="service-title">Manufacturing</h3>
            <p className="service-desc">Secure connected operations, OT environments and supply chains.</p>
          </div>
          <div className="card-item-3d">
            <h3 className="service-title">Technology</h3>
            <p className="service-desc">Protect cloud platforms, applications, APIs and intellectual property.</p>
          </div>
          <div className="card-item-3d">
            <h3 className="service-title">Public Sector</h3>
            <p className="service-desc">Strengthen resilience across critical services and sensitive information.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
