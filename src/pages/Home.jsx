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
              <span>ACIS™ Autonomous Engine Active &bull; UK Posture: Nominal</span>
            </div>

            <h1 className="hero-title">
              Cyber Resilience, <br />
              <span className="gradient-text">Engineered for the UK.</span>
            </h1>

            <p className="hero-subtitle">
              Protect your organisation with autonomous threat detection, 24/7 security operations and intelligent cyber defence built for an evolving threat landscape.
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
              <div className="hero-domain-header">
                <div className="hero-domain-title">
                  <span className="hero-domain-dot"></span>
                  PROTECTED CYBER DOMAINS (ACIS IMMUNE CORE)
                </div>
                <div className="hero-domain-subtitle">
                  <i className="fas fa-shield-halved"></i> 3D REAL-TIME ISOLATION ENGINE
                </div>
              </div>
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

          <div className="platform-grid-7">
            <div className="platform-card">
              <div className="platform-icon-box">
                <Icon3D name="ai-brain" size={32} />
              </div>
              <h3 className="platform-card-title">AI Threat Detection</h3>
              <p className="platform-card-desc">
                Identify threats and anomalies in real time using advanced AI models.
              </p>
              <Link to="/products/acis" className="platform-card-arrow">→</Link>
            </div>

            <div className="platform-card">
              <div className="platform-icon-box">
                <Icon3D name="soc-headset" size={32} />
              </div>
              <h3 className="platform-card-title">Security Operations</h3>
              <p className="platform-card-desc">
                Centralise monitoring, investigation and response in one modern SOC behavioural analysis.
              </p>
              <Link to="/products/acis" className="platform-card-arrow">→</Link>
            </div>

            <div className="platform-card">
              <div className="platform-icon-box">
                <Icon3D name="endpoint-laptop" size={32} />
              </div>
              <h3 className="platform-card-title">Endpoint Protection</h3>
              <p className="platform-card-desc">
                Enrich investigations with global threat intelligence and context.
              </p>
              <Link to="/products/acis" className="platform-card-arrow">→</Link>
            </div>

            <div className="platform-card">
              <div className="platform-icon-box">
                <Icon3D name="automated-lightning" size={32} />
              </div>
              <h3 className="platform-card-title">Automated Response</h3>
              <p className="platform-card-desc">
                Respond faster with intelligent automation and configurable workflows.
              </p>
              <Link to="/products/acis" className="platform-card-arrow">→</Link>
            </div>

            <div className="platform-card">
              <div className="platform-icon-box">
                <Icon3D name="incident-search" size={32} />
              </div>
              <h3 className="platform-card-title">Incident Investigation</h3>
              <p className="platform-card-desc">
                Investigate incidents deeply with AI-powered analysis and attack correlation.
              </p>
              <Link to="/products/acis" className="platform-card-arrow">→</Link>
            </div>

            <div className="platform-card">
              <div className="platform-icon-box">
                <Icon3D name="analytics-pie" size={32} />
              </div>
              <h3 className="platform-card-title">Security Analytics</h3>
              <p className="platform-card-desc">
                Turn security data into actionable insights and measurable outcomes.
              </p>
              <Link to="/products/acis" className="platform-card-arrow">→</Link>
            </div>

            <div className="platform-card">
              <div className="platform-icon-box">
                <Icon3D name="cyber-shield" size={32} />
              </div>
              <h3 className="platform-card-title">Cyber Resilience</h3>
              <p className="platform-card-desc">
                Strengthen resilience and recover quickly from cyber incidents.
              </p>
              <Link to="/products/acis" className="platform-card-arrow">→</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUILT FOR EVERY INDUSTRY */}
      <section className="industries-home-section">
        <div className="section-container">
          <div className="platform-section-header">
            <div className="platform-section-tag">
              BUILT FOR EVERY INDUSTRY
            </div>
            <h2 className="platform-section-title">
              Securing What Matters Across the UK
            </h2>
            <p className="industries-subtitle">
              Purpose-built protection for the organisations and industries that keep the UK moving.
            </p>
          </div>

          <div className="industry-cards-grid">
            <div className="industry-card-item">
              <img
                src={`${import.meta.env.BASE_URL}images/industry_public_sector.png`}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80'; }}
                alt="Public Sector Security"
                className="industry-card-img"
              />
              <div className="industry-card-overlay">
                <div className="industry-badge-pill">
                  <i className="fas fa-landmark"></i> Public Sector
                </div>
              </div>
            </div>

            <div className="industry-card-item">
              <img
                src={`${import.meta.env.BASE_URL}images/industry_financial_services.png`}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'; }}
                alt="Financial Services Security"
                className="industry-card-img"
              />
              <div className="industry-card-overlay">
                <div className="industry-badge-pill">
                  <i className="fas fa-building-columns"></i> Financial Services
                </div>
              </div>
            </div>

            <div className="industry-card-item">
              <img
                src={`${import.meta.env.BASE_URL}images/industry_healthcare.png`}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'; }}
                alt="Healthcare & Life Sciences"
                className="industry-card-img"
              />
              <div className="industry-card-overlay">
                <div className="industry-badge-pill">
                  <i className="fas fa-hospital"></i> Healthcare
                </div>
              </div>
            </div>

            <div className="industry-card-item">
              <img
                src={`${import.meta.env.BASE_URL}images/industry_technology.png`}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'; }}
                alt="Technology & SaaS"
                className="industry-card-img"
              />
              <div className="industry-card-overlay">
                <div className="industry-badge-pill">
                  <i className="fas fa-server"></i> Technology
                </div>
              </div>
            </div>

            <div className="industry-card-item">
              <img
                src={`${import.meta.env.BASE_URL}images/industry_manufacturing.png`}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'; }}
                alt="Smart Manufacturing"
                className="industry-card-img"
              />
              <div className="industry-card-overlay">
                <div className="industry-badge-pill">
                  <i className="fas fa-industry"></i> Manufacturing
                </div>
              </div>
            </div>

            <div className="industry-card-item">
              <img
                src={`${import.meta.env.BASE_URL}images/industry_professional_services.png`}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'; }}
                alt="Professional Services"
                className="industry-card-img"
              />
              <div className="industry-card-overlay">
                <div className="industry-badge-pill">
                  <i className="fas fa-briefcase"></i> Professional Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CYBER RESILIENCE METRICS BANNER (ANIMATED COUNT-UP) */}
      <AnimatedMetrics />

      {/* 5. LATEST INSIGHTS */}
      <section className="insights-section">
        <div className="section-container">
          <div className="platform-section-header">
            <div className="platform-section-tag">
              LATEST INSIGHTS
            </div>
          </div>

          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-img-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}images/insight_uk_threat_landscape.png`}
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'; }}
                  alt="Autonomous Cyber Defence"
                  className="insight-img"
                />
                <span className="insight-category-pill">DEEP DIVE</span>
              </div>
              <div className="insight-content">
                <h3 className="insight-title">The Rise of Autonomous Cyber Defence</h3>
                <p className="insight-desc">Why autonomous systems are the future of cyber resilience.</p>
                <Link to="/resources" className="insight-link">Read more &rarr;</Link>
              </div>
            </div>

            <div className="insight-card">
              <div className="insight-img-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}images/insight_automated_containment.png`}
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'; }}
                  alt="UK Cybersecurity Compliance"
                  className="insight-img"
                />
                <span className="insight-category-pill">GUIDE</span>
              </div>
              <div className="insight-content">
                <h3 className="insight-title">UK Cybersecurity Compliance 2024</h3>
                <p className="insight-desc">Navigate NIS2, DORA and other key regulatory requirements.</p>
                <Link to="/resources" className="insight-link">Read more &rarr;</Link>
              </div>
            </div>

            <div className="insight-card">
              <div className="insight-img-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}images/insight_uk_gdpr_nis2.png`}
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80'; }}
                  alt="Protecting Critical Public Services"
                  className="insight-img"
                />
                <span className="insight-category-pill">CASE STUDY</span>
              </div>
              <div className="insight-content">
                <h3 className="insight-title">Protecting Critical Public Services</h3>
                <p className="insight-desc">How we helped a UK public sector organisation.</p>
                <Link to="/resources" className="insight-link">Read more &rarr;</Link>
              </div>
            </div>

            <div className="insight-card">
              <div className="insight-img-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}images/insight_zero_trust_identity.png`}
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'; }}
                  alt="2024 UK Threat Landscape Report"
                  className="insight-img"
                />
                <span className="insight-category-pill">REPORT</span>
              </div>
              <div className="insight-content">
                <h3 className="insight-title">2024 UK Threat Landscape Report</h3>
                <p className="insight-desc">Key findings and predictions from our threat intelligence team.</p>
                <Link to="/resources" className="insight-link">Download report &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="final-cta-section">
        <div className="cta-uk-map-bg"></div>
        <div className="section-container">
          <div className="cta-layout-grid">
            <div>
              <h2 className="cta-title">
                Ready to Strengthen Your <br />
                <span style={{ color: '#ff8a1f' }}>Cyber Defence?</span>
              </h2>
              <p className="cta-desc">
                See how Netcradus can help your organisation detect threats faster, respond smarter and build lasting cyber resilience.
              </p>
              <div className="hero-actions" style={{ justifyContent: 'flex-start', marginTop: '2rem' }}>
                <Link to="/contact" className="btn-hero-primary" style={{ background: 'linear-gradient(90deg, #ff8a1f 0%, #ff2d78 100%)', border: 'none' }}>
                  Talk to an Expert &rarr;
                </Link>
                <Link to="/contact" className="btn-hero-secondary">
                  Book a Security Assessment &rarr;
                </Link>
              </div>
            </div>

            <div className="cta-trust-stack">
              <div className="cta-trust-item">
                <div className="cta-trust-icon">
                  <i className="fas fa-user-shield"></i>
                </div>
                <div>
                  <div className="cta-trust-title">UK-Based SOC</div>
                  <div className="cta-trust-desc">24/7 monitoring from our UK Security Operations Centre.</div>
                </div>
              </div>

              <div className="cta-trust-item">
                <div className="cta-trust-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div>
                  <div className="cta-trust-title">ISO 27001 Certified</div>
                  <div className="cta-trust-desc">Information security management you can trust.</div>
                </div>
              </div>

              <div className="cta-trust-item">
                <div className="cta-trust-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div>
                  <div className="cta-trust-title">Cyber Essentials Plus</div>
                  <div className="cta-trust-desc">Certified protection for your organisation.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
