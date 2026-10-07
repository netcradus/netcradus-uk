import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon3D from '../components/Icon3D';
function Domain3DCard({ icon, label, sub, theme, status }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -16;
    const rotateY = ((x - centerX) / centerX) * 16;

    setTransformStyle({
      transform: `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(12px) scale(1.05)`,
      '--mouse-x': `${(x / rect.width) * 100}%`,
      '--mouse-y': `${(y / rect.height) * 100}%`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: 'rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
      '--mouse-x': '50%',
      '--mouse-y': '50%',
    });
  };

  return (
    <div
      ref={cardRef}
      className={`domain-3d-card ${theme}`}
      style={transformStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="domain-3d-shine" />
      <div className="domain-3d-status">
        <span className="status-dot"></span>
        <span className="status-text">{status}</span>
      </div>
      <div className="domain-3d-orb">
        <i className={`fas ${icon} domain-3d-icon`}></i>
      </div>
      <div className="domain-3d-content">
        <div className="domain-3d-label">{label}</div>
        <div className="domain-3d-sub">{sub}</div>
      </div>
      <div className="domain-3d-bar"></div>
    </div>
  );
}

const domainItems = [
  { icon: 'fa-user-shield', label: 'Identity', sub: 'Zero Trust IAM', theme: 'theme-pink', status: 'SECURED' },
  { icon: 'fa-cloud', label: 'Cloud', sub: 'Multi-Cloud Armor', theme: 'theme-cyan', status: 'MONITORED' },
  { icon: 'fa-network-wired', label: 'Network', sub: 'Micro-Segmented', theme: 'theme-blue', status: 'ISOLATED' },
  { icon: 'fa-laptop-medical', label: 'Endpoint', sub: 'Autonomous EDR', theme: 'theme-orange', status: 'IMMUNE' },
  { icon: 'fa-database', label: 'Data', sub: 'Immutable Vault', theme: 'theme-purple', status: 'ENCRYPTED' },
  { icon: 'fa-cubes', label: 'Applications', sub: 'Runtime AppSec', theme: 'theme-emerald', status: 'PROTECTED' }
];

function AnimatedMetrics() {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState({
    stat1: 0,
    stat2: 0,
    stat3: 0,
    stat4: 0,
    stat5: 0,
  });

  useEffect(() => {
    let animId;
    let startTime;
    const duration = 1200; // 1.2s smooth fast count-up

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Premium smooth easeOutExpo easing curve
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts({
        stat1: Math.round(ease * 10),
        stat2: Math.round(ease * 90),
        stat3: Math.round(ease * 60),
        stat4: Math.round(ease * 24),
        stat5: Math.round(ease * 100),
      });

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTime = null;
            cancelAnimationFrame(animId);
            animId = requestAnimationFrame(animate);
          } else {
            cancelAnimationFrame(animId);
            setCounts({ stat1: 0, stat2: 0, stat3: 0, stat4: 0, stat5: 0 });
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="metrics-banner-section" ref={sectionRef}>
      <div className="section-container">
        <div className="metrics-grid-5">
          <div className="metric-card">
            <i className="fas fa-shield-alt metric-icon"></i>
            <div>
              <div className="metric-number">{counts.stat1}X</div>
              <div className="metric-label">Faster Threat Detection</div>
            </div>
          </div>

          <div className="metric-card">
            <i className="fas fa-bell metric-icon"></i>
            <div>
              <div className="metric-number">{counts.stat2}%</div>
              <div className="metric-label">Reduction in Alert Fatigue</div>
            </div>
          </div>

          <div className="metric-card">
            <i className="fas fa-bolt metric-icon"></i>
            <div>
              <div className="metric-number">{counts.stat3}%</div>
              <div className="metric-label">Faster Incident Response</div>
            </div>
          </div>

          <div className="metric-card">
            <i className="fas fa-eye metric-icon"></i>
            <div>
              <div className="metric-number">{counts.stat4}/7</div>
              <div className="metric-label">Continuous Monitoring</div>
            </div>
          </div>

          <div className="metric-card">
            <i className="fas fa-check-double metric-icon"></i>
            <div>
              <div className="metric-number">{counts.stat5}%</div>
              <div className="metric-label">Visibility Across Your Environment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* ==========================================================================
          PAGE 01 — HOME HERO SECTION (UNTOUCHED & PRESERVED)
          ========================================================================== */}
      <section className="hero-wrapper" id="home">
        <div className="hero-video-stage" id="heroStage">
          <video autoPlay loop muted playsInline className="hero-bg-video">
            <source src={`${import.meta.env.BASE_URL}videos/hero bg .mp4`} type="video/mp4" />
          </video>
          <div className="hero-video-overlay"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="pulse-dot"></span>
              <span>ACIS™ Autonomous Engine Active &bull; Security Posture: Nominal</span>
            </div>

            <h1 className="hero-title">
              Cybersecurity for <br />
              <span className="gradient-text">the Digital Era</span>
            </h1>

            <p className="hero-subtitle">
              Stay Ahead of Threats — Real-Time, Every Time, with Netcradus.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn-hero-primary">
                Book a Security Assessment &rarr;
              </Link>
              <Link to="/products/acis" className="btn-hero-secondary">
                Explore ACIS &rarr;
              </Link>
            </div>

            {/* Protected Cyber Domains Badges */}
            <div className="hero-domain-section">
              <div className="domain-badge-grid">
                {domainItems.map((item, idx) => (
                  <Domain3DCard key={idx} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          HOMEPAGE EXTENDED SECTIONS (EXACT REFERENCE SCREENSHOT DESIGN MATCH)
          ========================================================================== */}

      {/* 2. ONE PLATFORM. COMPLETE PROTECTION. */}
      <section className="platform-features-section">
        <div className="section-container">
          <div className="platform-section-header">
            <div className="platform-section-tag">
              ONE PLATFORM. COMPLETE PROTECTION.
            </div>
            <h2 className="platform-section-title">
              Everything You Need. <br />
              All in <span style={{ background: 'linear-gradient(90deg, #ff8a1f, #ff2d78)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>One Platform.</span>
            </h2>
          </div>

          <div className="platform-grid-wrapper">
            <div className="platform-grid-row platform-grid-row-4">
              <Link to="/products/acis" className="platform-card">
                <div className="platform-icon-box">
                  <Icon3D name="ai-brain" size={32} />
                </div>
                <h3 className="platform-card-title">AI Threat Detection</h3>
                <p className="platform-card-desc">
                  Identify threats and anomalies in real time using advanced AI models.
                </p>
              </Link>

              <Link to="/products/acis" className="platform-card">
                <div className="platform-icon-box">
                  <Icon3D name="soc-headset" size={32} />
                </div>
                <h3 className="platform-card-title">Security Operations</h3>
                <p className="platform-card-desc">
                  Centralise monitoring, investigation and response in one modern SOC behavioural analysis.
                </p>
              </Link>

              <Link to="/products/acis" className="platform-card platform-card-featured">
                <div className="platform-icon-box">
                  <Icon3D name="endpoint-laptop" size={32} />
                </div>
                <h3 className="platform-card-title">Endpoint Protection</h3>
                <p className="platform-card-desc">
                  Enrich investigations with global threat intelligence and context.
                </p>
              </Link>

              <Link to="/products/acis" className="platform-card">
                <div className="platform-icon-box">
                  <Icon3D name="automated-lightning" size={32} />
                </div>
                <h3 className="platform-card-title">Automated Response</h3>
                <p className="platform-card-desc">
                  Respond faster with intelligent automation and configurable workflows.
                </p>
              </Link>
            </div>

            <div className="platform-grid-row platform-grid-row-3">
              <Link to="/products/acis" className="platform-card">
                <div className="platform-icon-box">
                  <Icon3D name="incident-search" size={32} />
                </div>
                <h3 className="platform-card-title">Incident Investigation</h3>
                <p className="platform-card-desc">
                  Investigate incidents deeply with AI-powered analysis and attack correlation.
                </p>
              </Link>

              <Link to="/products/acis" className="platform-card">
                <div className="platform-icon-box">
                  <Icon3D name="analytics-pie" size={32} />
                </div>
                <h3 className="platform-card-title">Security Analytics</h3>
                <p className="platform-card-desc">
                  Turn security data into actionable insights and measurable outcomes.
                </p>
              </Link>

              <Link to="/products/acis" className="platform-card">
                <div className="platform-icon-box">
                  <Icon3D name="cyber-shield" size={32} />
                </div>
                <h3 className="platform-card-title">Cyber Resilience</h3>
                <p className="platform-card-desc">
                  Strengthen resilience and recover quickly from cyber incidents.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE NETCRADUS (Dark Infographic Theme) */}
      <section className="why-choose-section-dark">
        {/* Subtle Ambient Corner Glows */}
        <div className="why-ambient-glow glow-top-left"></div>
        <div className="why-ambient-glow glow-top-right"></div>
        <div className="why-ambient-glow glow-bottom-left"></div>
        <div className="why-ambient-glow glow-bottom-right"></div>

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Header Area */}
          <div className="why-dark-header">
            <h2 className="why-dark-title">
              Why Choose <span className="why-dark-title-orange">Netcradus?</span>
            </h2>
          </div>

          <div className="why-choose-diagram-wrapper">
            {/* POINT 1: TOP LEFT */}
            <div className="why-point-block why-point-tl">
              <div className="why-point-icon blue">
                <i className="fas fa-shield-halved"></i>
              </div>
              <div className="why-point-content">
                <h3 className="why-point-title">Proven Security Expertise</h3>
                <p className="why-point-desc">
                  Real-world cybersecurity expertise combined with practical security strategies designed to protect modern organisations.
                </p>
              </div>
              <div className="why-connector connector-tl">
                <span className="connector-dot"></span>
              </div>
            </div>

            {/* POINT 2: TOP RIGHT */}
            <div className="why-point-block why-point-tr">
              <div className="why-point-icon blue">
                <i className="fas fa-clock"></i>
              </div>
              <div className="why-point-content">
                <h3 className="why-point-title">24/7 Threat Monitoring</h3>
                <p className="why-point-desc">
                  Continuous monitoring and threat analysis to identify suspicious activity and respond before threats escalate.
                </p>
              </div>
              <div className="why-connector connector-tr">
                <span className="connector-dot"></span>
              </div>
            </div>

            {/* CENTRAL VISUAL: PROVIDED 3D STATUE + QUESTION MARK WITH TRUE PNG TRANSPARENCY */}
            <div className="why-central-visual">
              <img
                src={`${import.meta.env.BASE_URL}images/why_choose_statue_transparent.png`}
                alt="Why Choose Netcradus - 3D Orange Statue & Dark Question Mark"
                className="why-3d-img-transparent"
              />
            </div>

            {/* POINT 3: BOTTOM LEFT */}
            <div className="why-point-block why-point-bl">
              <div className="why-point-icon orange">
                <i className="fas fa-brain"></i>
              </div>
              <div className="why-point-content">
                <h3 className="why-point-title">AI + Human Intelligence</h3>
                <p className="why-point-desc">
                  Combining advanced security technology with expert human analysis for smarter and faster threat detection.
                </p>
              </div>
              <div className="why-connector connector-bl">
                <span className="connector-dot"></span>
              </div>
            </div>

            {/* POINT 4: BOTTOM RIGHT */}
            <div className="why-point-block why-point-br">
              <div className="why-point-icon blue">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="why-point-content">
                <h3 className="why-point-title">Faster Response & Recovery</h3>
                <p className="why-point-desc">
                  Rapid incident response and coordinated security processes designed to minimise risk and downtime.
                </p>
              </div>
              <div className="why-connector connector-br">
                <span className="connector-dot"></span>
              </div>
            </div>

            {/* POINT 5: BOTTOM CENTER */}
            <div className="why-point-block why-point-bc">
              <div className="why-point-icon blue">
                <i className="fas fa-users-gear"></i>
              </div>
              <div className="why-point-content">
                <h3 className="why-point-title">Customer-Focused Security</h3>
                <p className="why-point-desc">
                  We work as a long-term security partner, providing solutions aligned with your organisation’s needs and goals.
                </p>
              </div>
              <div className="why-connector connector-bc">
                <span className="connector-dot"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES & EXPERTISE */}
      <section className="industries-home-section">
        <div className="section-container">
          <div className="platform-section-header">
            <div className="platform-section-tag-wrapper">
              <span className="platform-section-tag-line"></span>
              <span className="platform-section-tag">INDUSTRIES & EXPERTISE</span>
              <span className="platform-section-tag-line"></span>
            </div>
            <h2 className="platform-section-title">
              Protection That Fits Your Business
            </h2>
            <p className="industries-subtitle">
              From critical infrastructure to modern enterprises, we secure the systems, data and operations that matter most.
            </p>
          </div>

          <div className="industry-cards-grid">
            <Link to="/industries" className="industry-card-item">
              <img
                src={`${import.meta.env.BASE_URL}images/industry_public_sector.png`}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80'; }}
                alt="Public Sector"
                className="industry-card-img"
              />
              <div className="industry-card-overlay">
                <div className="industry-card-header">
                  <div className="industry-icon-box">
                    <i className="fas fa-landmark"></i>
                  </div>
                  <h3 className="industry-card-title">Public Sector</h3>
                </div>
                <p className="industry-card-desc">
                  Protecting essential services, citizen data and critical infrastructure.
                </p>
              </div>
            </Link>

            <Link to="/industries" className="industry-card-item">
              <img
                src={`${import.meta.env.BASE_URL}images/industry_financial_services.png`}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'; }}
                alt="Financial Services"
                className="industry-card-img"
              />
              <div className="industry-card-overlay">
                <div className="industry-card-header">
                  <div className="industry-icon-box">
                    <i className="fas fa-coins"></i>
                  </div>
                  <h3 className="industry-card-title">Financial Services</h3>
                </div>
                <p className="industry-card-desc">
                  Securing transactions, customer data and financial operations.
                </p>
              </div>
            </Link>

            <Link to="/industries" className="industry-card-item">
              <img
                src={`${import.meta.env.BASE_URL}images/industry_healthcare.png`}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'; }}
                alt="Healthcare"
                className="industry-card-img"
              />
              <div className="industry-card-overlay">
                <div className="industry-card-header">
                  <div className="industry-icon-box">
                    <i className="fas fa-user-doctor"></i>
                  </div>
                  <h3 className="industry-card-title">Healthcare</h3>
                </div>
                <p className="industry-card-desc">
                  Protecting sensitive data, clinical systems and critical services.
                </p>
              </div>
            </Link>

            <Link to="/industries" className="industry-card-item">
              <img
                src={`${import.meta.env.BASE_URL}images/industry_technology.png`}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'; }}
                alt="Technology"
                className="industry-card-img"
              />
              <div className="industry-card-overlay">
                <div className="industry-card-header">
                  <div className="industry-icon-box">
                    <i className="fas fa-cloud"></i>
                  </div>
                  <h3 className="industry-card-title">Technology</h3>
                </div>
                <p className="industry-card-desc">
                  Securing digital infrastructure, applications and intellectual property.
                </p>
              </div>
            </Link>

            <Link to="/industries" className="industry-card-item">
              <img
                src={`${import.meta.env.BASE_URL}images/industry_manufacturing.png`}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'; }}
                alt="Manufacturing"
                className="industry-card-img"
              />
              <div className="industry-card-overlay">
                <div className="industry-card-header">
                  <div className="industry-icon-box">
                    <i className="fas fa-industry"></i>
                  </div>
                  <h3 className="industry-card-title">Manufacturing</h3>
                </div>
                <p className="industry-card-desc">
                  Protecting operational technology, production systems and supply chains.
                </p>
              </div>
            </Link>

            <Link to="/industries" className="industry-card-item">
              <img
                src={`${import.meta.env.BASE_URL}images/industry_professional_services.png`}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'; }}
                alt="Professional Services"
                className="industry-card-img"
              />
              <div className="industry-card-overlay">
                <div className="industry-card-header">
                  <div className="industry-icon-box">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h3 className="industry-card-title">Professional Services</h3>
                </div>
                <p className="industry-card-desc">
                  Securing client data, business operations and digital trust.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CYBER RESILIENCE METRICS BANNER (ANIMATED COUNT-UP) */}
      <AnimatedMetrics />



      {/* 6. FINAL CTA */}
      <section className="final-cta-section">
        <div className="section-container">
          <div className="cta-layout-grid">
            {/* LEFT SIDE CONTENT */}
            <div className="cta-left-content">
              <h2 className="cta-title">
                Ready to Strengthen Your <br />
                <span className="cta-title-highlight">Cyber Defence?</span>
              </h2>
              <p className="cta-desc">
                See how Netcradus can help your organisation detect threats faster, respond smarter and build lasting cyber resilience.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn-hero-primary cta-btn-primary">
                  Talk to an Expert &rarr;
                </Link>
                <Link to="/contact" className="btn-hero-secondary cta-btn-secondary">
                  Book a Security Assessment &rarr;
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE 2x2 TRUST GRID WITH BADGES */}
            <div className="cta-trust-grid">
              <div className="cta-trust-item">
                <div className="cta-trust-badge-col">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/ico-badge.svg`}
                    alt="ICO Registered - UK Information Commissioner's Office"
                    className="cta-ico-logo-img"
                  />
                </div>
                <div className="cta-trust-text-wrap">
                  <h3 className="cta-trust-title">ICO Registered</h3>
                  <p className="cta-trust-desc">ICO Registration: ZC045097</p>
                  <a
                    href="https://ico.org.uk/ESDWebPages/Entry/ZC045097"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-ico-verify-link"
                  >
                    Verify registration &rarr;
                  </a>
                </div>
              </div>

              <div className="cta-trust-item">
                <div className="cta-trust-badge-col">
                  <div className="cta-badge-iso">
                    <i className="fas fa-globe-americas iso-icon"></i>
                    <div className="iso-text-col">
                      <span className="iso-main">ISO</span>
                      <span className="iso-num">27001</span>
                    </div>
                  </div>
                </div>
                <div className="cta-trust-text-wrap">
                  <h3 className="cta-trust-title">ISO 27001</h3>
                  <p className="cta-trust-desc">Information security management aligned with ISO 27001 standards.</p>
                </div>
              </div>

              <div className="cta-trust-item">
                <div className="cta-trust-badge-col">
                  <div className="cta-badge-gdpr">
                    <div className="gdpr-star-ring">
                      <i className="fas fa-user-shield"></i>
                    </div>
                    <span className="gdpr-label">GDPR</span>
                  </div>
                </div>
                <div className="cta-trust-text-wrap">
                  <h3 className="cta-trust-title">GDPR Compliant</h3>
                  <p className="cta-trust-desc">Security and data protection practices designed to support GDPR requirements.</p>
                </div>
              </div>

              <div className="cta-trust-item">
                <div className="cta-trust-badge-col">
                  <div className="cta-badge-soc">
                    <span className="soc-top">AICPA</span>
                    <span className="soc-mid">SOC 2</span>
                    <span className="soc-bot">TYPE II</span>
                  </div>
                </div>
                <div className="cta-trust-text-wrap">
                  <h3 className="cta-trust-title">SOC 2 Type II</h3>
                  <p className="cta-trust-desc">Security controls aligned with SOC 2 Type II compliance requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
