import React from 'react';

export default function CaseStudies() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-chart-line"></i> PROVEN OUTCOMES</span>
          <h1 className="section-title">Security Outcomes, Not Security Claims.</h1>
        </div>

        {/* Large Metrics */}
        <div className="case-metrics-grid">
          <div className="case-metric-box">
            <div className="case-big-num">72%</div>
            <div style={{ fontWeight: 700, color: '#fff' }}>Reduction in Phishing Incidents</div>
          </div>
          <div className="case-metric-box">
            <div className="case-big-num">24/7</div>
            <div style={{ fontWeight: 700, color: '#fff' }}>Security Monitoring</div>
          </div>
          <div className="case-metric-box">
            <div className="case-big-num">99.9%</div>
            <div style={{ fontWeight: 700, color: '#fff' }}>Threat Detection Target</div>
          </div>
        </div>

        {/* Case Study Flow Layout */}
        <div className="flow-diagram-wrapper" style={{ marginTop: '3rem' }}>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--pink)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.2rem', textAlign: 'center' }}>
            CASE STUDY IMPLEMENTATION FRAMEWORK
          </div>
          <div className="flow-steps-grid">
            <div className="flow-step-box"><div className="flow-step-name">CHALLENGE</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">SECURITY STRATEGY</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">IMPLEMENTATION</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box" style={{ borderColor: 'var(--green-emerald)' }}><div className="flow-step-name">OUTCOME</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
