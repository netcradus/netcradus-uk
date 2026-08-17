import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ConvergedPlatformBar from './ConvergedPlatformBar';
import CountryDropdown from './CountryDropdown';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  
  const location = useLocation();
  const headerRef = useRef(null);

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

  // Close all menus and mobile drawer on route change
  useEffect(() => {
    setIsPlatformOpen(false);
    setIsProductsOpen(false);
    setIsSolutionsOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  // Close all menus when clicking outside the header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsPlatformOpen(false);
        setIsProductsOpen(false);
        setIsSolutionsOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Reset dropdown open states when mobile menu closes
  useEffect(() => {
    if (!mobileOpen) {
      setIsPlatformOpen(false);
      setIsProductsOpen(false);
      setIsSolutionsOpen(false);
    }
  }, [mobileOpen]);

  const handleDropdownToggle = (e, menuName) => {
    e.preventDefault();
    e.stopPropagation();
    if (menuName === 'platform') {
      setIsPlatformOpen(prev => !prev);
      setIsProductsOpen(false);
      setIsSolutionsOpen(false);
    } else if (menuName === 'products') {
      setIsProductsOpen(prev => !prev);
      setIsPlatformOpen(false);
      setIsSolutionsOpen(false);
    } else if (menuName === 'solutions') {
      setIsSolutionsOpen(prev => !prev);
      setIsPlatformOpen(false);
      setIsProductsOpen(false);
    }
  };

  const closeAllMenus = () => {
    setIsPlatformOpen(false);
    setIsProductsOpen(false);
    setIsSolutionsOpen(false);
    setMobileOpen(false);
  };

  const isPlatformActive = location.pathname.startsWith('/platform');
  const isProductsActive = location.pathname.startsWith('/products') || ['/cyrix-xdr'].includes(location.pathname);
  const isSolutionsActive = ['/services', '/vapt', '/zero-trust', '/cloud-security', '/incident-response', '/managed-soc'].includes(location.pathname);
  const isActive = (path) => location.pathname === path;

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${mobileOpen ? 'mobile-menu-active' : ''}`} id="siteHeader" ref={headerRef}>
      <div className="nav-container">
        <Link to="/" className="brand-logo" aria-label="Netcradus UK Homepage" onClick={closeAllMenus}>
          <img src={`${import.meta.env.BASE_URL}assets/netcradus logo.png`} alt="Netcradus UK Logo" className="brand-logo-img" />
        </Link>

        <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
          <li className={`nav-item dropdown mega-dropdown ${isPlatformOpen ? 'mobile-submenu-open is-open' : 'is-closed'}`}>
            <Link 
              to="/platform" 
              className={`nav-link ${isPlatformActive ? 'active' : ''}`}
              onClick={(e) => handleDropdownToggle(e, 'platform')}
            >
              Platform <i className="fas fa-chevron-down nav-arrow"></i>
            </Link>
            <div className="mega-menu-dropdown" onClick={(e) => e.stopPropagation()}>
              <ConvergedPlatformBar onItemClick={closeAllMenus} />
            </div>
          </li>
          <li 
            className={`nav-item dropdown mega-dropdown ${isProductsOpen ? 'mobile-submenu-open is-open' : 'is-closed'}`}
            onMouseEnter={() => { if (window.innerWidth > 768) setIsProductsOpen(true); }}
            onMouseLeave={() => { if (window.innerWidth > 768) setIsProductsOpen(false); }}
          >
            <Link 
              to="/products" 
              className={`nav-link ${isProductsActive || isProductsOpen ? 'active' : ''}`}
              onClick={(e) => handleDropdownToggle(e, 'products')}
            >
              Products <i className="fas fa-chevron-down nav-arrow"></i>
            </Link>
            <div className="mega-menu-dropdown products-mega-menu" onClick={(e) => e.stopPropagation()}>
              <div className="products-mega-pointer"></div>
              <div className="products-mega-menu-inner">
                {/* Left Column: Cybersecurity Platform */}
                <div className="products-mega-col cybersecurity-col">
                  <h3 className="products-mega-heading">CYBERSECURITY PLATFORM</h3>
                  <div className="products-mega-underline"></div>
                  
                  <div className="products-mega-list">
                    <Link to="/products/acis" className="products-mega-item" onClick={closeAllMenus}>
                      <div className="products-mega-icon-container">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div className="products-mega-text">
                        <h4 className="products-mega-item-title">ACIS Platform</h4>
                        <p className="products-mega-item-desc">Autonomous Cyber Immune System for threat detection and response.</p>
                      </div>
                    </Link>

                    <Link to="/cyrix-xdr" className="products-mega-item" onClick={closeAllMenus}>
                      <div className="products-mega-icon-container">
                        <i className="fas fa-crosshairs"></i>
                      </div>
                      <div className="products-mega-text">
                        <h4 className="products-mega-item-title">Cyrix XDR</h4>
                        <p className="products-mega-item-desc">AI-powered unified endpoint, cloud and network protection.</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Middle Column: Business Solutions */}
                <div className="products-mega-col business-col">
                  <h3 className="products-mega-heading">BUSINESS SOLUTIONS</h3>
                  <div className="products-mega-underline"></div>

                  <div className="products-mega-list">
                    <Link to="/products" className="products-mega-item" onClick={closeAllMenus}>
                      <div className="products-mega-icon-container">
                        <i className="fas fa-users"></i>
                      </div>
                      <div className="products-mega-text">
                        <h4 className="products-mega-item-title">NetCRM</h4>
                        <p className="products-mega-item-desc">Enterprise relationship and operations platform.</p>
                      </div>
                    </Link>

                    <Link to="/products" className="products-mega-item" onClick={closeAllMenus}>
                      <div className="products-mega-icon-container">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div className="products-mega-text">
                        <h4 className="products-mega-item-title">NetCrad</h4>
                        <p className="products-mega-item-desc">AI-powered website security auditing and vulnerability assessment.</p>
                      </div>
                    </Link>

                    <div className="products-mega-item products-mega-item-soon">
                      <div className="products-mega-icon-container">
                        <i className="fas fa-magic"></i>
                      </div>
                      <div className="products-mega-text">
                        <h4 className="products-mega-item-title">
                          Future Products <span className="badge-soon">SOON</span>
                        </h4>
                        <p className="products-mega-item-desc">Sparking new security intelligence engines coming soon.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Featured Products Card */}
                <div className="products-mega-col promo-col">
                  <div className="products-promo-card">
                    {/* Background Security Pattern */}
                    <div className="promo-tech-bg">
                      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="150" cy="150" r="130" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="6 6" />
                        <path d="M150 40 L240 85 V165 C240 220 150 260 150 260 C150 260 60 220 60 165 V85 L150 40 Z" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
                        <circle cx="150" cy="150" r="48" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="none" />
                      </svg>
                    </div>

                    <span className="promo-badge">ENTERPRISE SECURITY PLATFORM</span>
                    <h3 className="promo-title">Netcradus Products</h3>
                    <p className="promo-desc">
                      Discover AI-powered cybersecurity and business platforms.
                    </p>

                    <div className="promo-tags">
                      <span className="promo-tag-pill">AI Powered</span>
                      <span className="promo-tag-pill">Enterprise Ready</span>
                      <span className="promo-tag-pill">Cloud Native</span>
                      <span className="promo-tag-pill">Scalable</span>
                      <span className="promo-tag-pill">Secure by Design</span>
                    </div>

                    <Link to="/products" className="promo-cta-btn" onClick={closeAllMenus}>
                      Explore Products &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className={`nav-item dropdown mega-dropdown ${isSolutionsOpen ? 'mobile-submenu-open' : ''}`}>
            <Link 
              to="/services" 
              className={`nav-link ${isSolutionsActive ? 'active' : ''}`}
              onClick={(e) => handleDropdownToggle(e, 'solutions')}
            >
              Solutions <i className="fas fa-chevron-down nav-arrow"></i>
            </Link>
            <div className="mega-menu-dropdown solutions-mega-menu" onClick={(e) => e.stopPropagation()}>
              {/* Pointer Triangle */}
              <div className="mega-menu-pointer"></div>

              <div className="solutions-mega-menu-inner">
                {/* Left Column: Core Security Services */}
                <div className="solutions-mega-col core-services-col">
                  <h3 className="solutions-mega-heading">CORE SECURITY SERVICES</h3>
                  <div className="solutions-mega-underline"></div>
                  
                  <div className="solutions-mega-list">
                    <Link to="/services" className="solutions-mega-item" onClick={closeAllMenus}>
                      <div className="solutions-mega-icon-container">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div className="solutions-mega-text">
                        <h4 className="solutions-mega-item-title">Cybersecurity</h4>
                        <p className="solutions-mega-item-desc">End-to-end protection against evolving cyber threats.</p>
                      </div>
                    </Link>

                    <Link to="/managed-soc" className="solutions-mega-item" onClick={closeAllMenus}>
                      <div className="solutions-mega-icon-container">
                        <i className="fas fa-eye"></i>
                      </div>
                      <div className="solutions-mega-text">
                        <h4 className="solutions-mega-item-title">Managed SOC</h4>
                        <p className="solutions-mega-item-desc">24&times;7 monitoring and rapid threat detection &amp; response.</p>
                      </div>
                    </Link>

                    <Link to="/cloud-security" className="solutions-mega-item" onClick={closeAllMenus}>
                      <div className="solutions-mega-icon-container">
                        <i className="fas fa-network-wired"></i>
                      </div>
                      <div className="solutions-mega-text">
                        <h4 className="solutions-mega-item-title">Network Security</h4>
                        <p className="solutions-mega-item-desc">Defend your perimeter and internal network segments.</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Middle Column: Specialized Solutions */}
                <div className="solutions-mega-col specialized-col">
                  <h3 className="solutions-mega-heading">SPECIALIZED SOLUTIONS</h3>
                  <div className="solutions-mega-underline"></div>

                  <div className="solutions-mega-list">
                    <Link to="/cloud-security" className="solutions-mega-item" onClick={closeAllMenus}>
                      <div className="solutions-mega-icon-container">
                        <i className="fas fa-cloud"></i>
                      </div>
                      <div className="solutions-mega-text">
                        <h4 className="solutions-mega-item-title">Cloud Security</h4>
                        <p className="solutions-mega-item-desc">Secure cloud workloads, SaaS, and hybrid environments.</p>
                      </div>
                    </Link>

                    <Link to="/services" className="solutions-mega-item" onClick={closeAllMenus}>
                      <div className="solutions-mega-icon-container">
                        <i className="fas fa-brain"></i>
                      </div>
                      <div className="solutions-mega-text">
                        <h4 className="solutions-mega-item-title">AI Security</h4>
                        <p className="solutions-mega-item-desc">Protect AI models, LLMs, and enterprise agents.</p>
                      </div>
                    </Link>

                    <Link to="/services" className="solutions-mega-item" onClick={closeAllMenus}>
                      <div className="solutions-mega-icon-container">
                        <i className="fas fa-building"></i>
                      </div>
                      <div className="solutions-mega-text">
                        <h4 className="solutions-mega-item-title">Enterprise Security</h4>
                        <p className="solutions-mega-item-desc">Tailored, enterprise-grade security programs.</p>
                      </div>
                    </Link>

                    <Link to="/vapt" className="solutions-mega-item" onClick={closeAllMenus}>
                      <div className="solutions-mega-icon-container">
                        <i className="fas fa-bug"></i>
                      </div>
                      <div className="solutions-mega-text">
                        <h4 className="solutions-mega-item-title">VAPT Services</h4>
                        <p className="solutions-mega-item-desc">Vulnerability assessment &amp; penetration testing.</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Featured Promo Panel */}
                <div className="solutions-mega-col promo-col">
                  <div className="solutions-promo-card">
                    {/* Background Technical Pattern */}
                    <div className="promo-tech-bg">
                      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="150,50 250,250 50,250" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
                        <polygon points="150,250 250,50 50,50" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
                        <circle cx="150" cy="150" r="30" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                      </svg>
                    </div>

                    <span className="promo-badge">FEATURED PANEL</span>
                    <h3 className="promo-title">Enterprise Solutions</h3>
                    <p className="promo-desc">
                      Discover AI-powered cybersecurity, healthcare, cloud, and digital transformation solutions designed to secure and accelerate modern businesses.
                    </p>

                    <Link to="/services" className="promo-cta-btn" onClick={closeAllMenus}>
                      Explore Solutions &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={closeAllMenus}>Contact</Link>
          </li>
          <li className="nav-mobile-actions">
            <Link to="/contact" className="btn-talk-expert" onClick={closeAllMenus}>
              Talk to an Expert &rarr;
            </Link>
            <div className="nav-mobile-country">
              <CountryDropdown />
            </div>
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
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
}
