import React from 'react';

export default function CloudSecurity() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-cloud-meatball"></i> INFRASTRUCTURE HARDENING</span>
          <h1 className="section-title">Secure Your Cloud. Harden Your Network.</h1>
          <p className="section-desc">Protect hybrid infrastructure without slowing down the business.</p>
        </div>

        <div className="cards-grid-4" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="card-item-3d">
            <h3 className="service-title">Cloud Security</h3>
            <p className="service-desc">AWS / Azure / Hybrid environments protection aligned with NCSC guidance.</p>
          </div>
          <div className="card-item-3d">
            <h3 className="service-title">Network Security</h3>
            <p className="service-desc">Segmentation, continuous monitoring and perimeter protection.</p>
          </div>
          <div className="card-item-3d">
            <h3 className="service-title">Data Security</h3>
            <p className="service-desc">Encryption in transit/rest, granular access controls and DLP policies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
