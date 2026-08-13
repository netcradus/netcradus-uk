import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ConvergedPlatformBar from './ConvergedPlatformBar';
import CountryDropdown from './CountryDropdown';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;
  const isProductsActive = ['/acis', '/cyrix-xdr', '/managed-soc'].includes(location.pathname);
  const isServicesActive = ['/services', '/vapt', '/zero-trust', '/cloud-security', '/incident-response'].includes(location.pathname);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="nav-container">
        <Link to="/" className="brand-logo" aria-label="Netcradus UK Homepage">
          <img src={`${import.meta.env.BASE_URL}assets/netcradus logo.png`} alt="Netcradus UK Logo" className="brand-logo-img" />
        </Link>

        <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
          <li className="nav-item dropdown mega-dropdown">
            <Link to="/acis" className={`nav-link ${isActive('/acis') ? 'active' : ''}`}>
              Platform <i className="fas fa-chevron-down nav-arrow"></i>
            </Link>
            <div className="mega-menu-dropdown">
              <ConvergedPlatformBar />
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link to="/acis" className={`nav-link ${isProductsActive ? 'active' : ''}`}>
              Products <i className="fas fa-chevron-down nav-arrow"></i>
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/acis">ACIS™ Autonomous Engine</Link></li>
              <li><Link to="/cyrix-xdr">CYRIX XDR Unified Detection</Link></li>
              <li><Link to="/managed-soc">24/7 Managed SOC &amp; SIEM</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link to="/services" className={`nav-link ${isServicesActive ? 'active' : ''}`}>
              Services <i className="fas fa-chevron-down nav-arrow"></i>
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/services">Cybersecurity Services</Link></li>
              <li><Link to="/vapt">VAPT &amp; Penetration Testing</Link></li>
              <li><Link to="/zero-trust">Zero Trust &amp; Identity</Link></li>
              <li><Link to="/cloud-security">Cloud &amp; Network Security</Link></li>
              <li><Link to="/incident-response">Incident Response</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          </li>
        </ul>

        <div className="nav-actions">
          <Link to="/contact" className="btn-talk-expert">
            Talk to an Expert &rarr;
          </Link>

          <CountryDropdown />
        </div>

        <button 
          className="mobile-toggle" 
          id="mobileNavToggle" 
          aria-label="Toggle Navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
