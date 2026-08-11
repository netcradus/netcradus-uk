import React, { useState } from 'react';

export default function Contact() {
  const [toast, setToast] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast({
      type: 'success',
      message: '🇬🇧 Thank you! Your Security Assessment Request has been submitted. Our Leicester team will contact you shortly.'
    });
    e.target.reset();

    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-paper-plane"></i> SECURITY ASSESSMENT</span>
          <h1 className="section-title">Know Your Risk Before Attackers Find It.</h1>
          <p className="section-desc">Start with a focused cybersecurity assessment of your organisation's exposure, controls and resilience.</p>
        </div>

        <div className="calculator-card" style={{ maxWidth: '850px' }}>
          <form id="ukAssessmentForm" onSubmit={handleSubmit}>
            <div className="calc-form-grid" style={{ gap: '1.5rem' }}>
              <div className="form-control">
                <label className="form-label" htmlFor="assBusiness">Business Name *</label>
                <input type="text" className="form-input" id="assBusiness" placeholder="Company Name Ltd" required />
              </div>

              <div className="form-control">
                <label className="form-label" htmlFor="assEmail">Work Email *</label>
                <input type="email" className="form-input" id="assEmail" placeholder="name@company.co.uk" required />
              </div>

              <div className="form-control">
                <label className="form-label" htmlFor="assIndustry">Industry Sector *</label>
                <select className="form-select" id="assIndustry">
                  <option>Financial Services</option>
                  <option>Healthcare &amp; NHS</option>
                  <option>Professional Services</option>
                  <option>Manufacturing &amp; OT</option>
                  <option>Technology &amp; SaaS</option>
                  <option>Public Sector</option>
                </select>
              </div>

              <div className="form-control">
                <label className="form-label" htmlFor="assSize">Organisation Size *</label>
                <select className="form-select" id="assSize">
                  <option>1 - 50 Employees</option>
                  <option>51 - 250 Employees</option>
                  <option>251 - 1000 Employees</option>
                  <option>1000+ Enterprise</option>
                </select>
              </div>

              <div className="form-control" style={{ gridColumn: 'span 2' }}>
                <label className="form-label" htmlFor="assReq">Primary Security Requirement *</label>
                <select className="form-select" id="assReq">
                  <option>Security Assessment</option>
                  <option>ACIS™ Autonomous Engine</option>
                  <option>CYRIX XDR Platform</option>
                  <option>Managed 24/7 SOC &amp; SIEM</option>
                  <option>VAPT &amp; Penetration Testing</option>
                  <option>UK Compliance (GDPR / ISO 27001)</option>
                  <option>Incident Response Planning</option>
                  <option>Other / Custom Architecture</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-talk-expert" style={{ width: '100%', marginTop: '2rem', padding: '1rem', fontSize: '1rem' }}>
              Request Security Assessment &rarr;
            </button>
          </form>
        </div>

        {/* Toast Notification Container */}
        {toast && (
          <div className="toast-container" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}>
            <div className={`toast toast-${toast.type}`} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: '#130924', border: '1px solid var(--pink)', padding: '1rem 1.5rem', borderRadius: '8px', color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <i className="fas fa-check-circle" style={{ color: 'var(--pink)', fontSize: '1.2rem' }}></i>
              <span>{toast.message}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
