import React from 'react';
import { Link } from 'react-router-dom';

export default function Vapt() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-user-secret"></i> ETHICAL HACKING</span>
          <h1 className="section-title">Find the Weakness Before They Do.</h1>
          <p className="section-desc">Turn unknown vulnerabilities into measurable security improvements.</p>
        </div>

        {/* Testing Areas */}
        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--pink)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1rem', textAlign: 'center' }}>
          PENETRATION TESTING DOMAINS
        </div>
        <div className="cards-grid-4">
          <div className="card-item-3d"><h3 className="service-title">Web Applications</h3><p className="service-desc">OWASP Top 10 web app testing.</p></div>
          <div className="card-item-3d"><h3 className="service-title">APIs</h3><p className="service-desc">REST &amp; GraphQL security auditing.</p></div>
          <div className="card-item-3d"><h3 className="service-title">External Infrastructure</h3><p className="service-desc">Perimeter exposure testing.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Internal Networks</h3><p className="service-desc">Lateral movement simulations.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Cloud Infrastructure</h3><p className="service-desc">IAM &amp; bucket misconfigurations.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Mobile Applications</h3><p className="service-desc">iOS &amp; Android client security.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Wireless Networks</h3><p className="service-desc">WPA3 &amp; Enterprise Wi-Fi auditing.</p></div>
        </div>

        {/* VAPT Process Flow */}
        <div className="flow-diagram-wrapper" style={{ marginTop: '3rem' }}>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--orange)', marginBottom: '1.2rem', textAlign: 'center' }}>
            VAPT TESTING PROCESS LIFECYCLE
          </div>
          <div className="flow-steps-grid">
            <div className="flow-step-box"><div className="flow-step-name">Reconnaissance</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">Discovery</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">Exploitation</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">Validation</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">Risk Rating</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">Remediation</div></div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/contact" className="btn-talk-expert">Request a VAPT Assessment &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
