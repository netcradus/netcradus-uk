import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="brand-logo" style={{ marginBottom: '0.8rem' }}>
              <img src={`${import.meta.env.BASE_URL}assets/netcradus logo.png`} alt="Netcradus UK Logo" className="brand-logo-img" />
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Netcradus Limited (UK) is a registered cybersecurity software engineering firm. Protecting organisations with ACIS™ &amp; 24/7 SOC.
            </p>
            <div className="footer-social-links" style={{ display: 'flex', gap: '0.75rem', marginTop: '1.2rem' }}>
              <a href="https://instagram.com/netcradus" target="_blank" rel="noopener noreferrer" className="social-icon-btn instagram" aria-label="Instagram" title="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/netcradus" target="_blank" rel="noopener noreferrer" className="social-icon-btn facebook" aria-label="Facebook" title="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/company/netcradus-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="social-icon-btn linkedin" aria-label="LinkedIn" title="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/@Netcradus-acis" target="_blank" rel="noopener noreferrer" className="social-icon-btn youtube" aria-label="YouTube" title="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://x.com/Netcraduspvtltd" target="_blank" rel="noopener noreferrer" className="social-icon-btn twitter" aria-label="X" title="X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              <li><Link to="/products/acis">ACIS™ Platform</Link></li>
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
          <div>&copy; 2026 Netcradus Limited. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
