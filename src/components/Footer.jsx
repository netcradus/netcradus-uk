import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      {/* Subtle Cybersecurity Network Grid Background Pattern */}
      <div className="footer-grid-bg" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-cyber-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 122, 0, 0.04)" strokeWidth="0.8" />
              <circle cx="40" cy="40" r="1" fill="rgba(255, 122, 0, 0.12)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-cyber-grid)" />
        </svg>
      </div>

      <div className="section-container footer-container">
        <div className="footer-grid">

          {/* COLUMN 1 — NETCRADUS */}
          <div className="footer-col col-brand">
            <Link to="/" className="brand-logo" aria-label="Netcradus UK Homepage">
              <img
                src={`${import.meta.env.BASE_URL}assets/netcradus logo.png`}
                alt="Netcradus UK Logo"
                className="brand-logo-img"
              />
            </Link>

            <div className="brand-tagline">
              Security <span>|</span> Intelligence <span>|</span> Resilience
            </div>

            <p className="brand-copy">
              Netcradus engineers the future of cyber defense. Through our ACIS platform, we combine AI-driven threat detection, automated response, and enterprise-grade resilience to protect what matters most &mdash; before threats even strike.
            </p>

            <div className="footer-social-links">
              <a
                href="https://instagram.com/netcradus"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn instagram"
                aria-label="Instagram"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/netcradus"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn facebook"
                aria-label="Facebook"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/netcradus-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn linkedin"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.youtube.com/@Netcradus-acis"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn youtube"
                aria-label="YouTube"
                title="YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://x.com/Netcraduspvtltd"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn twitter"
                aria-label="X (Twitter)"
                title="X"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* COLUMN 2 — PRODUCTS (Prominent & Product-Led) */}
          <div className="footer-col col-products footer-col-featured">
            <div className="featured-category-badge">
              <span className="badge-dot"></span> PRODUCT ECOSYSTEM
            </div>
            <h4 className="footer-title title-products">Products</h4>
            <ul className="footer-links links-products">
              <li>
                <Link to="/products/acis">
                  <span className="link-text">ACIS Platform</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
              <li>
                <Link to="/cyrix-xdr">
                  <span className="link-text">CYRIX XDR</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
              <li>
                <Link to="/netcrad">
                  <span className="link-text">NetCRAD Website Audit</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
              <li>
                <Link to="/crm">
                  <span className="link-text">NetCRM</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
              <li>
                <Link to="/managed-soc">
                  <span className="link-text">24/7 Managed SOC</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — SECURITY SOLUTIONS */}
          <div className="footer-col col-solutions">
            <h4 className="footer-title">Security Solutions</h4>
            <ul className="footer-links">
              <li>
                <Link to="/cyber-security">
                  <span className="link-text">Cyber Security</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
              <li>
                <Link to="/managed-soc">
                  <span className="link-text">Managed SOC</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
              <li>
                <Link to="/cloud-security">
                  <span className="link-text">Cloud Security</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
              <li>
                <Link to="/ai-security">
                  <span className="link-text">AI Security</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
              <li>
                <Link to="/network-security">
                  <span className="link-text">Network Security</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
              <li>
                <Link to="/enterprise-security">
                  <span className="link-text">Enterprise Security</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 — COMPANY */}
          <div className="footer-col col-company">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li>
                <Link to="/why-netcradus">
                  <span className="link-text">About / Why Netcradus</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
              <li>
                <Link to="/industries">
                  <span className="link-text">Industries</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
              <li>
                <Link to="/case-studies">
                  <span className="link-text">Case Studies</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span className="link-text">Careers</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span className="link-text">Contact Us</span>
                  <i className="fas fa-arrow-right link-arrow"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 5 — CONTACT / OPERATIONS */}
          <div className="footer-col col-operations">
            <h4 className="footer-title">Operations &amp; Support</h4>
            <div className="footer-ops-info">

              <div className="ops-item">
                <span className="ops-label">PRESENCE</span>
                <p className="ops-val">
                  <i className="fas fa-location-dot ops-icon"></i> UK &amp; India Offices
                </p>
                <p className="ops-sub">Leicester, UK &bull; Delhi NCR, India</p>
              </div>

              <div className="ops-item">
                <span className="ops-label">CONTACT EMAIL</span>
                <p className="ops-val">
                  <i className="fas fa-envelope ops-icon"></i>
                  <a href="mailto:info@netcradus.com" className="ops-link">info@netcradus.com</a>
                </p>
              </div>

              <div className="ops-item">
                <span className="ops-label">SUPPORT HOURS</span>
                <p className="ops-val highlight-247">
                  <i className="fas fa-shield-halved ops-icon"></i> 24/7/365 SOC Monitoring
                </p>
                <p className="ops-sub">Partner &amp; Support Desk Active</p>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; 2026 Netcradus Limited. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <Link to="/compliance" className="legal-link">Privacy Policy</Link>
            <span className="legal-sep">|</span>
            <Link to="/compliance" className="legal-link">Terms &amp; Conditions</Link>
            <span className="legal-sep">|</span>
            <Link to="/compliance" className="legal-link">Cookies</Link>
            <span className="legal-sep">|</span>
            <Link to="/products" className="legal-link">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
