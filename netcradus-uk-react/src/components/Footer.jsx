import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      {/* Moved Top Banner inside Footer (Single instance on site) */}
      <div className="top-banner" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem 1rem', marginBottom: '3.5rem' }}>
        <div className="top-banner-inner">
          <div>
            <span className="top-banner-badge">🇬🇧 UK CYBERSECURITY</span>
            <strong>UK Cybersecurity | Enterprise Defence | 24/7 Security Operations</strong> &bull; Netcradus Limited (ICO Ref: <code>ZC045097</code>)
          </div>
          <div>
            <Link to="/compliance" className="top-banner-link">
              <i className="fas fa-shield-alt"></i> Verify ICO Certificate &rarr;
            </Link>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="brand-logo" style={{ marginBottom: '0.8rem' }}>
              <img src={`${import.meta.env.BASE_URL}assets/netcradus logo.png`} alt="Netcradus UK Logo" className="brand-logo-img" />
              <span className="logo-uk-pill">UK</span>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Netcradus Limited (UK) is a registered cybersecurity software engineering firm. Protecting organisations with ACIS™ &amp; 24/7 SOC.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              <li><Link to="/acis">ACIS™ Platform</Link></li>
              <li><Link to="/cyrix-xdr">CYRIX XDR</Link></li>
              <li><Link to="/managed-soc">24/7 Managed SOC</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Services &amp; Solutions</h4>
            <ul className="footer-links">
              <li><Link to="/services">Cybersecurity Services</Link></li>
              <li><Link to="/vapt">VAPT Penetration Testing</Link></li>
              <li><Link to="/zero-trust">Zero Trust &amp; Identity</Link></li>
              <li><Link to="/cloud-security">Cloud &amp; Network Security</Link></li>
              <li><Link to="/incident-response">Incident Response</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Company &amp; Compliance</h4>
            <ul className="footer-links">
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/why-netcradus">Why Netcradus</Link></li>
              <li><Link to="/compliance">UK Compliance &amp; NIS2</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom" style={{ marginTop: '2.5rem' }}>
          <div>&copy; 2026 Netcradus Limited. All rights reserved. Registered in England &amp; Wales.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
