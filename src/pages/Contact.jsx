import React, { useState } from 'react';

const FAQ_DATA = [
  {
    q: "How quickly will someone contact me?",
    a: "Our team responds to standard enquiries within one business hour. Incident response requests are triaged immediately, 24/7."
  },
  {
    q: "Do you provide 24/7 incident response?",
    a: "Yes, our Security Operations Center (SOC) operates 24/7/365 to handle and mitigate active threat anomalies."
  },
  {
    q: "Do you sign NDAs?",
    a: "Absolutely. We routinely sign non-disclosure agreements with enterprise clients before discussing security architecture details."
  },
  {
    q: "Do you provide free security consultations?",
    a: "Yes, we provide initial exposures and risk-scoping consultations to help you assess your vulnerability footprint."
  },
  {
    q: "What should I include when reaching out?",
    a: "Please specify your industry sector, estimated organization size, and primary security focus areas (e.g. SOC monitoring, penetration testing, compliance)."
  }
];

export default function Contact() {
  const [toast, setToast] = useState(null);
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast({
      type: 'success',
      message: '🇬🇧 Thank you! Your message has been submitted. Our Leicester team will contact you shortly.'
    });
    e.target.reset();

    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setToast({
      type: 'success',
      message: `Copied ${label} to clipboard!`
    });
    setTimeout(() => setToast(null), 3000);
  };

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="contact-page-wrapper">
      
      {/* Contact Hero Section */}
      <div className="contact-hero-container-wrapper">
        <div className="contact-hero-content">
          
          {/* Eyebrow */}
          <div className="contact-eyebrow">
            <span className="orange-glow-dot"></span>
            CONTACT NETCRADUS
          </div>

          {/* Main Heading */}
          <h1 className="contact-main-title">
            Enterprise Cybersecurity<br />
            Starts With a <span className="highlight-gradient">Conversation</span>
          </h1>

          {/* Supporting Divider */}
          <div className="contact-divider"></div>

          {/* Supporting Grid Info */}
          <div className="contact-supporting-info">
            <div className="info-item">
              <i className="fas fa-phone-alt info-icon"></i>
              <span className="info-text">24x7 Support</span>
            </div>
            <div className="info-item">
              <i className="fas fa-clock info-icon"></i>
              <span className="info-text">1 Hour Response</span>
            </div>
            <div className="info-item">
              <i className="fas fa-file-contract info-icon"></i>
              <span className="info-text">NDA Available</span>
            </div>
            <div className="info-item">
              <i className="fas fa-cog info-icon"></i>
              <span className="info-text">ISO-Compliant Engagements</span>
            </div>
          </div>

        </div>
      </div>

      {/* Contact Form and Get In Touch Section (Light Background Theme) */}
      <div className="contact-details-section">
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          <div className="details-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag" style={{ display: 'inline-flex', marginBottom: '1.2rem', color: '#FF6A00', border: '1px solid rgba(255, 106, 0, 0.15)', background: 'rgba(255, 106, 0, 0.05)' }}>
              <i className="fas fa-envelope-open"></i> GET IN TOUCH
            </span>
            <h2 className="details-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#1a1a1a', marginBottom: '1rem' }}>
              Connect with Our Security Experts
            </h2>
            <p className="details-subtitle" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#555555', maxWidth: '650px', margin: '0 auto' }}>
              Have questions about our autonomous defense suites or compliance auditing? Drop us a line below.
            </p>
          </div>

          <div className="contact-dual-grid">
            
            {/* Left Column: Let's Secure Your Business Form Card */}
            <div className="contact-form-container card-item-3d">
              <h3 className="form-card-title">Let's Secure Your Business</h3>
              <p className="form-card-subtitle">Fields marked with <span style={{ color: '#FF6A00' }}>*</span> are required.</p>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                
                <div className="contact-form-grid-inner">
                  <div className="form-control">
                    <label className="form-label" htmlFor="firstName">FIRST NAME *</label>
                    <input type="text" className="form-input" id="firstName" placeholder="First Name*" required />
                  </div>
                  <div className="form-control">
                    <label className="form-label" htmlFor="lastName">LAST NAME *</label>
                    <input type="text" className="form-input" id="lastName" placeholder="Last Name*" required />
                  </div>
                </div>

                <div className="contact-form-grid-inner">
                  <div className="form-control">
                    <label className="form-label" htmlFor="workEmail">BUSINESS EMAIL *</label>
                    <input type="email" className="form-input" id="workEmail" placeholder="Business Email*" required />
                  </div>
                  <div className="form-control">
                    <label className="form-label" htmlFor="phone">PHONE NUMBER *</label>
                    <input type="tel" className="form-input" id="phone" placeholder="Phone Number*" required />
                  </div>
                </div>

                <div className="contact-form-grid-inner">
                  <div className="form-control">
                    <label className="form-label" htmlFor="company">COMPANY NAME *</label>
                    <input type="text" className="form-input" id="company" placeholder="Company Name*" required />
                  </div>
                  <div className="form-control">
                    <label className="form-label" htmlFor="serviceRequired">SERVICE REQUIRED *</label>
                    <select className="form-input form-select" id="serviceRequired" style={{ appearance: 'none', background: 'url("data:image/svg+xml;utf8,<svg fill=\'%231a1a1a\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>") no-repeat right 12px center', backgroundColor: '#fbfbfa' }} required>
                      <option value="" disabled selected>Service Required*</option>
                      <option value="ACIS™ Autonomous Engine">ACIS™ Autonomous Engine</option>
                      <option value="CYRIX XDR Platform">CYRIX XDR Platform</option>
                      <option value="Managed 24/7 SOC & SIEM">Managed 24/7 SOC & SIEM</option>
                      <option value="NetCRM Portal">NetCRM Portal</option>
                      <option value="Security Assessment">Security Assessment & Auditing</option>
                    </select>
                  </div>
                </div>

                <div className="form-control">
                  <label className="form-label" htmlFor="countryRegion">Country / Region</label>
                  <select className="form-input form-select" id="countryRegion" style={{ appearance: 'none', background: 'url("data:image/svg+xml;utf8,<svg fill=\'%231a1a1a\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>") no-repeat right 12px center', backgroundColor: '#fbfbfa' }}>
                    <option value="United Kingdom">United Kingdom (UK)</option>
                    <option value="India">India</option>
                    <option value="United States">United States (US)</option>
                    <option value="Europe">Europe</option>
                    <option value="Other">Other Region</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="form-label" htmlFor="message">HOW CAN WE HELP YOU?</label>
                  <textarea className="form-input form-textarea" id="message" rows="5" placeholder="How can we help you?" required></textarea>
                </div>

                <button type="submit" className="btn-talk-expert" style={{ width: '100%', marginTop: '1rem', padding: '1rem', fontSize: '1rem' }}>
                  Submit Inquiry &rarr;
                </button>

              </form>
            </div>

            {/* Right Column: Get In Touch Card (Premium Dark Navy Theme) */}
            <div className="get-in-touch-card card-item-3d">
              <h3 className="git-title">Get In Touch</h3>
              <p className="git-subtitle">
                Speak to our global engineering offices or reach our dispatch desk directly.
              </p>

              <div className="git-blocks">
                
                {/* Block 1: Call Us */}
                <div className="git-block">
                  <a href="tel:+917290909571" className="git-icon-link" aria-label="Call Netcradus at +91 72909 09571">
                    <div className="git-icon-wrapper">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                  </a>
                  <div className="git-content">
                    <span className="git-label">CALL US</span>
                    <div className="git-value-row">
                      <a href="tel:+917290909571" className="git-clickable-link" aria-label="Call Netcradus at +91 72909 09571">
                        <span className="git-value">+91 72909 09571</span>
                      </a>
                    </div>
                    <span className="git-subtext">24x7 Emergency Incident Response</span>
                  </div>
                </div>

                {/* Block 2: Email Us */}
                <div className="git-block">
                  <a href="mailto:info@netcradus.com" className="git-icon-link" aria-label="Email Netcradus at info@netcradus.com">
                    <div className="git-icon-wrapper">
                      <i className="fas fa-envelope"></i>
                    </div>
                  </a>
                  <div className="git-content">
                    <span className="git-label">EMAIL US</span>
                    
                    <div className="git-email-subrow">
                      <span className="git-sublabel">GENERAL ENQUIRIES</span>
                      <div className="git-value-row">
                        <a href="mailto:info@netcradus.com" className="git-clickable-link" aria-label="Email Netcradus at info@netcradus.com">
                          <span className="git-value-small">info@netcradus.com</span>
                        </a>
                      </div>
                    </div>

                    <div className="git-email-subrow">
                      <span className="git-sublabel">EMERGENCY SUPPORT (24x7)</span>
                      <div className="git-value-row">
                        <a href="mailto:support@netcradus.com" className="git-clickable-link" aria-label="Email Netcradus at support@netcradus.com">
                          <span className="git-value-small">support@netcradus.com</span>
                        </a>
                      </div>
                    </div>

                    <div className="git-email-subrow">
                      <span className="git-sublabel">SALES & BUSINESS ENQUIRIES</span>
                      <div className="git-value-row">
                        <a href="mailto:sales@netcradus.com" className="git-clickable-link" aria-label="Email Netcradus at sales@netcradus.com">
                          <span className="git-value-small">sales@netcradus.com</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Block 3: India Node */}
                <div className="git-block">
                  <div className="git-icon-wrapper">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="git-content">
                    <span className="git-label">INDIA NODE</span>
                    <span className="git-value-small" style={{ display: 'block', marginTop: '0.2rem' }}>AVS City Square</span>
                    <span className="git-subtext">Delhi NCR, India</span>
                  </div>
                </div>

                {/* Block 4: UK Headquarters */}
                <div className="git-block">
                  <div className="git-icon-wrapper">
                    <i className="fas fa-landmark"></i>
                  </div>
                  <div className="git-content">
                    <span className="git-label">UK HEADQUARTERS</span>
                    <span className="git-value-small" style={{ display: 'block', marginTop: '0.2rem' }}>104 A London Road</span>
                    <span className="git-subtext">Leicester, LE2 0QS, United Kingdom</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Interactive Google Map Section */}
          <div className="contact-map-card card-item-3d" style={{ marginTop: '4rem', padding: '15px' }}>
            <iframe 
              src="https://maps.google.com/maps?q=104%20A%20London%20Road,%20Leicester,%20LE2%200QS,%20UK&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="400" 
              style={{ border: 0, borderRadius: '12px', display: 'block' }} 
              allowFullScreen="" 
              loading="lazy"
              title="Netcradus UK Office Map"
            ></iframe>
          </div>

        </div>
      </div>

      {/* FAQ Section (Light Theme) */}
      <div className="contact-faq-section">
        <div className="section-container" style={{ maxWidth: '850px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          <div className="details-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="faq-eyebrow" style={{ color: '#FF6A00', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', fontWeight: 800 }}>
              FAQ
            </span>
            <h2 className="faq-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800, color: '#1a1a1a', marginTop: '0.5rem', marginBottom: '0' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="faq-accordion-list">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div key={idx} className={`faq-accordion-card ${isOpen ? 'open' : ''}`}>
                  <button className="faq-question-btn" onClick={() => toggleFaq(idx)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', border: 'none', background: 'none', padding: '1.25rem 1.5rem', textAlign: 'left', cursor: 'pointer' }}>
                    <span className="faq-question-text" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1a1a1a' }}>{faq.q}</span>
                    <i className={`fas fa-chevron-down faq-chevron ${isOpen ? 'rotated' : ''}`} style={{ color: '#FF6A00', transition: 'transform 0.3s ease' }}></i>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-container" style={{ padding: '0 1.5rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                      <p className="faq-answer-text" style={{ margin: '1rem 0 0', fontSize: '0.96rem', lineHeight: 1.6, color: '#555555' }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer Text */}
          <div className="faq-footer-text" style={{ textAlign: 'center', marginTop: '3.5rem', fontSize: '0.95rem', color: '#666666' }}>
            Still have questions? <a href="#fullName" className="faq-footer-link" style={{ color: '#FF6A00', fontWeight: 700, textDecoration: 'none' }}>Send us a message</a>
          </div>

        </div>
      </div>

      {/* Toast Notification Container */}
      {toast && (
        <div className="toast-container" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}>
          <div className="toast toast-success" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: '#130924', border: '1px solid #FF6A00', padding: '1rem 1.5rem', borderRadius: '8px', color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <i className="fas fa-check-circle" style={{ color: '#FF6A00', fontSize: '1.2rem' }}></i>
            <span>{toast.message}</span>
          </div>
        </div>
      )}

    </div>
  );
}
