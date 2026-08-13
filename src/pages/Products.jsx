import React from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-shield-alt"></i> PRODUCT SUITE</span>
          <h1 className="section-title">Autonomous Defense &amp; Detection Suite</h1>
          <p className="section-desc">Enterprise-grade cybersecurity products engineered for complete resilience.</p>
        </div>

        <div className="cards-grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          <div className="card-item-3d">
            <h3 className="service-title">ACIS™ Autonomous Engine</h3>
            <p className="service-desc">Continuous real-time anomaly analysis, sub-second containment and automated playbooks.</p>
            <Link to="/products/acis" className="platform-card-arrow" style={{ marginTop: 'auto', paddingTop: '1rem', textDecoration: 'none' }}>Explore ACIS &rarr;</Link>
          </div>
          <div className="card-item-3d">
            <h3 className="service-title">CYRIX XDR Unified Detection</h3>
            <p className="service-desc">Extended detection and response across endpoints, networks, cloud and identity layers.</p>
            <Link to="/cyrix-xdr" className="platform-card-arrow" style={{ marginTop: 'auto', paddingTop: '1rem', textDecoration: 'none' }}>Explore CYRIX &rarr;</Link>
          </div>
          <div className="card-item-3d">
            <h3 className="service-title">24/7 Managed SOC &amp; SIEM</h3>
            <p className="service-desc">Continuous co-managed SIEM, threat hunting, compliance mapping and expert UK operations.</p>
            <Link to="/managed-soc" className="platform-card-arrow" style={{ marginTop: 'auto', paddingTop: '1rem', textDecoration: 'none' }}>Explore Managed SOC &rarr;</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
