import React from 'react';

export default function WhyNetcradus() {
  return (
    <>
      {/* PAGE 02 — WHY NETCRADUS HERO */}
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag"><i className="fas fa-handshake"></i> WHY NETCRADUS UK</span>
            <h1 className="section-title">Your Security Partner for a Changing UK Threat Landscape</h1>
            <p className="section-desc">
              Cybersecurity is no longer simply an IT responsibility. It is a business resilience priority. Netcradus helps UK organisations strengthen their security posture, reduce exposure and prepare for the threats that can disrupt operations, reputation and customer trust.
            </p>
          </div>

          <div className="cards-grid-4">
            <div className="card-item-3d">
              <div className="card-number-tag">01</div>
              <h3 className="service-title">Autonomous Defence</h3>
              <p className="service-desc">Move from passive monitoring to intelligent, adaptive protection.</p>
            </div>

            <div className="card-item-3d">
              <div className="card-number-tag">02</div>
              <h3 className="service-title">24/7 Visibility</h3>
              <p className="service-desc">Continuous monitoring across critical infrastructure and environments.</p>
            </div>

            <div className="card-item-3d">
              <div className="card-number-tag">03</div>
              <h3 className="service-title">Security Engineering</h3>
              <p className="service-desc">Practical architecture, testing and hardening—not just recommendations.</p>
            </div>

            <div className="card-item-3d">
              <div className="card-number-tag">04</div>
              <h3 className="service-title">Compliance-Aware Security</h3>
              <p className="service-desc">Security controls aligned with relevant UK and international frameworks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-bar" style={{ marginTop: '4rem' }}>
        <div className="trust-container">
          <span className="trust-title">CORE CAPABILITIES STRIP</span>
          <div className="trust-grid">
            <div className="trust-badge-item"><span className="trust-name">ACIS</span></div>
            <div className="trust-badge-item"><span className="trust-name">SOC</span></div>
            <div className="trust-badge-item"><span className="trust-name">XDR</span></div>
            <div className="trust-badge-item"><span className="trust-name">VAPT</span></div>
            <div className="trust-badge-item"><span className="trust-name">Zero Trust</span></div>
            <div className="trust-badge-item"><span className="trust-name">Cloud Security</span></div>
            <div className="trust-badge-item"><span className="trust-name">Incident Response</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
