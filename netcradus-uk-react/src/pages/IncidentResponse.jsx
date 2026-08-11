import React from 'react';
import { Link } from 'react-router-dom';

export default function IncidentResponse() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-ambulance"></i> EMERGENCY RESPONSE</span>
          <h1 className="section-title">When an Incident Happens, Seconds Matter.</h1>
          <p className="section-desc">Prepare before the breach. Respond without hesitation. Recover with confidence.</p>
        </div>

        <div className="cards-grid-4">
          <div className="card-item-3d">
            <div className="card-number-tag">01</div>
            <h3 className="service-title">Prepare</h3>
            <p className="service-desc">Incident response planning and playbooks.</p>
          </div>
          <div className="card-item-3d">
            <div className="card-number-tag">02</div>
            <h3 className="service-title">Detect</h3>
            <p className="service-desc">Identify suspicious activity and potential compromise instantly.</p>
          </div>
          <div className="card-item-3d">
            <div className="card-number-tag">03</div>
            <h3 className="service-title">Contain</h3>
            <p className="service-desc">Limit attacker movement and protect critical assets.</p>
          </div>
          <div className="card-item-3d">
            <div className="card-number-tag">04</div>
            <h3 className="service-title">Recover</h3>
            <p className="service-desc">Restore operations and strengthen future resilience.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/contact" className="btn-talk-expert">Build Your Incident Response Plan &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
