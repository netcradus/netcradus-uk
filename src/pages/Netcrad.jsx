import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QUICK_HIGHLIGHTS = [
  "AI-Powered Website Analysis",
  "OWASP Security Checks",
  "SSL & HTTPS Verification",
  "SEO & Performance Insights",
  "Instant PDF Reports"
];

const EXPOSURE_RISKS = [
  {
    title: "Data Breaches",
    desc: "Leakage of customer passwords, session tokens, and sensitive PII databases.",
    icon: "fa-database",
    color: "#ef4444"
  },
  {
    title: "Website Defacement",
    desc: "Malicious modification of public branding, homepage assets, and media files.",
    icon: "fa-user-ninja",
    color: "#f59e0b"
  },
  {
    title: "Malware Infections",
    desc: "Injection of malicious cryptominers and phishing scripts targeting site visitors.",
    icon: "fa-bug",
    color: "#8b5cf6"
  },
  {
    title: "SEO Blacklisting",
    desc: "Google flag status blocking organic search traffic and domain trust rank.",
    icon: "fa-triangle-exclamation",
    color: "#ec4899"
  },
  {
    title: "Customer Trust Loss",
    desc: "Severe degradation of user loyalty, customer conversion, and digital credibility.",
    icon: "fa-user-slash",
    color: "#06b6d4"
  },
  {
    title: "Regulatory Penalties",
    desc: "Heavy non-compliance fines mapping to GDPR, PCI DSS, SOC2, and NIS2.",
    icon: "fa-scale-unbalanced-flip",
    color: "#10b981"
  },
  {
    title: "Financial Damage",
    desc: "Severe revenue loss resulting from service downtime, incident response, and legal remediation.",
    icon: "fa-file-invoice-dollar",
    color: "#ff8a1f"
  }
];

const SCAN_MODULES = [
  {
    title: "Website Security",
    icon: "fa-shield-halved",
    checks: [
      "SSL Certificate Validation",
      "HTTPS Configuration",
      "Security Headers (CSP, HSTS)",
      "Mixed Content Detection",
      "Cookie Security Flags",
      "HTTP Methods Verification",
      "TLS Cipher Suites",
      "DNSSEC & Security Records"
    ]
  },
  {
    title: "Vulnerability Assessment",
    icon: "fa-virus-slash",
    checks: [
      "SQL Injection (SQLi) Indicators",
      "Cross-Site Scripting (XSS)",
      "Cross-Site Request Forgery (CSRF)",
      "Directory Traversal & Exposure",
      "Open Redirect Detection",
      "Clickjacking Defense Validation",
      "Sensitive File Exposure (.env, .git)",
      "Server Banner Disclosure"
    ]
  },
  {
    title: "Infrastructure Security",
    icon: "fa-server",
    checks: [
      "Open Ports & Services Scan",
      "DNS Configuration Records",
      "Web Server Version Detection",
      "Technology Stack Fingerprinting",
      "WAF & Firewall Detection",
      "CDN Security Configuration",
      "IP Reputation & Blacklist Check",
      "Hosting Provider Risk Profile"
    ]
  },
  {
    title: "Performance & SEO",
    icon: "fa-gauge-high",
    checks: [
      "Core Web Vitals Metrics",
      "Page Speed & Load Latency",
      "Mobile Responsive Audit",
      "Broken Links & 404 Errors",
      "Metadata & OpenGraph Analysis",
      "XML Sitemap Verification",
      "Robots.txt Security Rules",
      "Asset & Image Optimization"
    ]
  }
];

const KEY_FEATURES = [
  {
    title: "AI-Powered Website Intelligence",
    desc: "Advanced scanning engine that identifies security risks using intelligent behavioral analysis.",
    icon: "fa-brain",
    badge: "AI Engine"
  },
  {
    title: "One-Click Security Audit",
    desc: "Simply enter your website URL and receive a complete security assessment within minutes.",
    icon: "fa-wand-magic-sparkles",
    badge: "Instant"
  },
  {
    title: "Comprehensive Risk Scoring",
    desc: "Every vulnerability is assigned a severity level: Critical, High, Medium, Low, or Informational.",
    icon: "fa-chart-pie",
    badge: "Scoring"
  },
  {
    title: "Actionable Recommendations",
    desc: "Every issue includes risk explanation, business impact, technical details, recommended fix, and remediation code.",
    icon: "fa-code",
    badge: "Fixes"
  },
  {
    title: "Professional PDF Reports",
    desc: "Generate detailed security reports suitable for executive board meetings, client audits, and developer teams.",
    icon: "fa-file-pdf",
    badge: "Reporting"
  },
  {
    title: "Continuous Monitoring",
    desc: "Monitor your website regularly and receive automated alerts when new vulnerabilities or configuration drift occur.",
    icon: "fa-rotate",
    badge: "24/7 Scan"
  }
];

const AUDIT_CATEGORIES_TABLE = [
  { cat: "SSL Security", cov: "Certificate validity, TLS ciphers, HTTPS redirection, HSTS" },
  { cat: "Website Headers", cov: "CSP, HSTS, X-Frame-Options, X-Content-Type, Referrer-Policy" },
  { cat: "Web Application", cov: "OWASP Top 10 vulnerabilities (XSS, SQLi, CSRF, Exposure)" },
  { cat: "Server Security", cov: "Software version disclosure, server banners, open ports" },
  { cat: "DNS Analysis", cov: "DNSSEC, MX records, SPF, DKIM, DMARC validation" },
  { cat: "Website Performance", cov: "Page load speed, Core Web Vitals, asset compression" },
  { cat: "SEO Health", cov: "Technical SEO audit, robots.txt, sitemaps, canonical tags" },
  { cat: "Best Practices", cov: "Global cybersecurity baselines (NIST, CIS, ISO 27001)" }
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Submit Target URL",
    desc: "Enter your domain or web app URL into the Netcrad audit console.",
    icon: "fa-globe",
    color: "#06b6d4"
  },
  {
    step: "02",
    title: "Automated Scan Engine",
    desc: "Netcrad executes a multi-layer security assessment across all target pages.",
    icon: "fa-radar",
    color: "#10b981"
  },
  {
    step: "03",
    title: "AI Threat Analysis",
    desc: "Neural models analyze findings, correlate threat vectors, and calculate risk scores.",
    icon: "fa-brain",
    color: "#8b5cf6"
  },
  {
    step: "04",
    title: "Report Delivery",
    desc: "Receive an executive dashboard summary and developer-ready PDF reports.",
    icon: "fa-file-invoice",
    color: "#f59e0b"
  },
  {
    step: "05",
    title: "Guided Remediation",
    desc: "Implement patch codes and re-audit your site to confirm vulnerability closure.",
    icon: "fa-shield-check",
    color: "#ec4899"
  }
];

const NETCRAD_BENEFITS = [
  "Identify vulnerabilities before attackers exploit them",
  "Substantially reduce enterprise cyber exposure risks",
  "Improve trust score with SSL validation and security headers",
  "Strengthen compliance readiness (SOC2, GDPR, HIPAA, PCI DSS)",
  "Improve site performance metrics and page loading speed",
  "Enhance customer confidence and brand security trust",
  "Support developer teams with technical fix remediation code",
  "Simplify website security audits into single-click scans"
];

const TARGET_VERTICALS = [
  { name: "Enterprises", desc: "Continuous website security posture monitoring.", icon: "fa-building" },
  { name: "Startups", desc: "Affordable website protection from launch day.", icon: "fa-rocket" },
  { name: "E-commerce", desc: "Protect customer payment portals and checkout flows.", icon: "fa-cart-shopping" },
  { name: "Government", desc: "Strengthen public-facing portals and citizen databases.", icon: "fa-landmark" },
  { name: "Healthcare", desc: "Reduce exposure risks to sensitive patient portals.", icon: "fa-heart-pulse" },
  { name: "Education", desc: "Secure student portals and online learning platforms.", icon: "fa-graduation-cap" },
  { name: "Financial Services", desc: "Harden banking portals and customer portals.", icon: "fa-building-columns" },
  { name: "Digital Agencies", desc: "Deliver professional security audits for client sites.", icon: "fa-laptop-code" }
];

const DASHBOARD_HIGHLIGHTS = [
  "Overall Security Score",
  "Website Health Score",
  "Risk Distribution Graph",
  "Critical Findings Triage",
  "SSL Status Inspector",
  "Security Headers Audit",
  "Technology Stack Analysis",
  "Performance Metrics",
  "Compliance Overview",
  "Scan History Timeline",
  "Threat Trend Analytics",
  "One-Click PDF Export"
];

const FAQ_ITEMS = [
  {
    q: "What is Netcrad Website Security Audit?",
    a: "Netcrad is an automated intelligent website security scanning platform designed to identify vulnerabilities, misconfigurations, outdated software, SSL issues, and compliance gaps across your web applications."
  },
  {
    q: "Does Netcrad disrupt or slow down my live website during a scan?",
    a: "No. Netcrad performs non-intrusive, safe security auditing designed specifically to test website posture without causing downtime, resource exhaustion, or service disruption."
  },
  {
    q: "What types of vulnerabilities does Netcrad detect?",
    a: "Netcrad checks for OWASP Top 10 vulnerabilities including SQL Injection, Cross-Site Scripting (XSS), insecure CORS, missing CSP/HSTS security headers, sensitive file disclosures, SSL/TLS flaws, and server version exposure."
  },
  {
    q: "Does Netcrad provide step-by-step developer remediation code?",
    a: "Yes. Every finding includes detailed risk explanations, impact ratings, technical root causes, and recommended code snippets for Nginx, Apache, IIS, and web application frameworks."
  },
  {
    q: "Can Netcrad generate audit-ready PDF reports for clients and regulators?",
    a: "Yes. Netcrad allows one-click generation of branded PDF security reports suitable for executive management, compliance auditors, client proposals, and developer work queues."
  },
  {
    q: "How fast can I start auditing my website?",
    a: "You can start an assessment instantly. Simply submit your URL in the Netcrad audit console to receive your comprehensive security report within minutes."
  }
];

export default function Netcrad() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "NetCRAD | Intelligent Website Security Audit Platform | Netcradus UK";
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="siem-page cyber-security-page cloud-security-page netcrad-page">

      {/* SECTION 1: HERO */}
      <section className="siem-hero-section cs-hero-section">
        <div className="siem-container">
          <div className="siem-hero-card cs-hero-card">
            <div className="siem-hero-grid">

              <div className="siem-hero-left">
                <div className="siem-badge cs-badge">
                  <span className="siem-badge-dot" />
                  NETCRAD WEBSITE AUDIT TOOL
                </div>

                <h1 className="siem-hero-title cs-hero-title">
                  Discover Security Risks <br />
                  <span className="gradient-text">Before Hackers Do.</span>
                </h1>

                <p className="siem-hero-desc cs-hero-desc">
                  Netcrad is an intelligent Website Security Audit platform that scans your website for security vulnerabilities, configuration weaknesses, performance issues, and compliance risks—helping you secure your digital presence before attackers can exploit it.
                </p>

                <div className="cs-hero-highlights">
                  {QUICK_HIGHLIGHTS.map((item, idx) => (
                    <div key={idx} className="cs-highlight-item">
                      <i className="fas fa-check-circle cs-check-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="siem-buttons-container">
                  <Link to="/contact" className="siem-btn-primary">
                    <span>Start Free Scan</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                  <Link to="/contact" className="siem-btn-secondary">
                    Schedule Security Assessment
                  </Link>
                </div>
              </div>

              <div className="siem-hero-right">
                <div className="cs-hero-graphic-card">
                  <div className="cs-graphic-header">
                    <div className="cs-graphic-status">
                      <span className="cs-status-pulse" />
                      <span className="cs-status-text">NETCRAD ENGINE ACTIVE</span>
                    </div>
                    <span className="cs-graphic-badge">NETCRADUS UK</span>
                  </div>

                  <div className="cs-graphic-body">
                    <div style={{ width: '100%', overflow: 'hidden', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.12)', background: 'rgba(5, 2, 8, 0.8)', padding: '8px', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)' }}>
                      <img
                        src={`${import.meta.env.BASE_URL}assets/netcrad-dashboard.png`}
                        alt="NetCRAD Website Security Audit Engine Dashboard"
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', objectFit: 'cover' }}
                      />
                    </div>

                    <div className="cs-metrics-grid" style={{ marginTop: '1rem' }}>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val" style={{ color: '#10b981' }}>96/100</span>
                        <span className="cs-metric-label">Security Health</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val" style={{ color: '#06b6d4' }}>Valid</span>
                        <span className="cs-metric-label">SSL &amp; HTTPS</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val" style={{ color: '#ff8a1f' }}>OWASP</span>
                        <span className="cs-metric-label">Deep Scan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRODUCT OVERVIEW */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-shield-alt" /> PRODUCT INTRODUCTION
            </span>
            <h2 className="siem-section-title">Trusted by Businesses That Take Security Seriously</h2>
            <p className="siem-section-subtitle">
              Your website is your first line of business. Netcrad continuously analyzes your web application to identify security gaps.
            </p>
          </div>

          <div className="cs-overview-grid">
            <div className="cs-overview-content">
              <p className="cs-overview-lead">
                Your website is your primary digital storefront. Netcrad continuously analyzes your web application to identify security gaps, helping organizations reduce cyber risks and improve their online security posture.
              </p>
              <p className="cs-overview-text">
                Netcrad is a comprehensive Website Security Audit platform designed to help organizations identify vulnerabilities, security misconfigurations, outdated technologies, and compliance issues through automated intelligent scanning.
              </p>
              <p className="cs-overview-text">
                Whether you're running a corporate website, e-commerce platform, SaaS application, or customer portal, Netcrad provides actionable recommendations to strengthen your security.
              </p>
            </div>

            <div className="cs-overview-cards-col">
              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#10b981' }}>
                  <i className="fas fa-chart-line" />
                </div>
                <div>
                  <h4 className="cs-mini-title">Continuous Posture Security</h4>
                  <p className="cs-mini-desc">Real-time health scoring (96/100), SSL validation, and security header audit alerts.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(6, 182, 212, 0.15)', borderColor: 'rgba(6, 182, 212, 0.3)', color: '#06b6d4' }}>
                  <i className="fas fa-layer-group" />
                </div>
                <div>
                  <h4 className="cs-mini-title">Automated Multi-Layer Ingestion</h4>
                  <p className="cs-mini-desc">Audit website headers, server parameters, OWASP Top 10 vulnerabilities, and DNS records.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(255, 138, 31, 0.15)', borderColor: 'rgba(255, 138, 31, 0.3)', color: '#ff8a1f' }}>
                  <i className="fas fa-code-pull-request" />
                </div>
                <div>
                  <h4 className="cs-mini-title">Developer-Ready Remediation</h4>
                  <p className="cs-mini-desc">Clear technical root causes, impact analysis, and copy-paste remediation code snippets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY WEBSITE SECURITY MATTERS */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-triangle-exclamation" /> CYBER EXPOSURE RISK
            </span>
            <h2 className="siem-section-title">Why Website Security Matters</h2>
            <p className="siem-section-subtitle">
              A single vulnerable website can lead to devastating consequences for your business reputation, financial bottom line, and database confidentiality.
            </p>
          </div>

          <div className="cs-importance-grid">
            {EXPOSURE_RISKS.map((risk, idx) => (
              <div key={idx} className="cs-importance-card">
                <div
                  className="cs-importance-icon-box"
                  style={{ color: risk.color, background: `${risk.color}15` }}
                >
                  <i className={`fas ${risk.icon}`} />
                </div>
                <div className="cs-importance-content">
                  <h3 className="cs-importance-title">{risk.title}</h3>
                  <p className="cs-importance-desc">{risk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT NETCRAD SCANS */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-cubes" /> AUDITING SCOPE
            </span>
            <h2 className="siem-section-title">What Netcrad Scans</h2>
            <p className="siem-section-subtitle">
              We perform automated, multi-layer intelligence checks across four distinct audit modules.
            </p>
          </div>

          <div className="cs-capabilities-grid">
            {SCAN_MODULES.map((mod, idx) => (
              <div key={idx} className="cs-capability-card">
                <div className="cs-cap-header">
                  <div className="cs-cap-icon-box">
                    <i className={`fas ${mod.icon}`} />
                  </div>
                  <span className="cs-cap-badge">MODULE {idx + 1}</span>
                </div>
                <h3 className="cs-cap-title">{mod.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1rem' }}>
                  {mod.checks.map((item, itemIdx) => (
                    <div key={itemIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff8a1f', shrink: 0 }} />
                      <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: KEY FEATURES */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-list-check" /> CORE CAPABILITIES
            </span>
            <h2 className="siem-section-title">Key Features</h2>
            <p className="siem-section-subtitle">
              Discover, risk-score, remediate, and continuously track public-facing website exposures.
            </p>
          </div>

          <div className="cs-capabilities-grid">
            {KEY_FEATURES.map((feat, idx) => (
              <div key={idx} className="cs-capability-card">
                <div className="cs-cap-header">
                  <div className="cs-cap-icon-box">
                    <i className={`fas ${feat.icon}`} />
                  </div>
                  <span className="cs-cap-badge">{feat.badge}</span>
                </div>
                <h3 className="cs-cap-title">{feat.title}</h3>
                <p className="cs-cap-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: SECURITY AUDIT CATEGORIES TABLE */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-table" /> AUDITING SCOPE
            </span>
            <h2 className="siem-section-title">Security Audit Categories</h2>
            <p className="siem-section-subtitle">
              We cover all technical security indicators mandated by global frameworks and standards.
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(15, 23, 42, 0.6)', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <th style={{ padding: '1.25rem', fontSize: '0.9rem', fontWeight: 800, color: '#ffffff' }}>Category</th>
                  <th style={{ padding: '1.25rem', fontSize: '0.9rem', fontWeight: 800, color: '#ffffff' }}>Coverage</th>
                </tr>
              </thead>
              <tbody>
                {AUDIT_CATEGORIES_TABLE.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '1.1rem 1.25rem', fontSize: '0.9rem', fontWeight: 700, color: '#38bdf8' }}>{row.cat}</td>
                    <td style={{ padding: '1.1rem 1.25rem', fontSize: '0.88rem', color: '#cbd5e1' }}>{row.cov}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW IT WORKS WORKFLOW */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-arrows-spin" /> WORKFLOW
            </span>
            <h2 className="siem-section-title">How It Works</h2>
            <p className="siem-section-subtitle">
              Run audits and implement remediation fixes in five simplified workflow steps.
            </p>
          </div>

          <div className="cs-workflow-grid">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div key={idx} className="cs-workflow-card">
                <div className="cs-workflow-header">
                  <span className="cs-workflow-num" style={{ color: step.color }}>{step.step}</span>
                  <div
                    className="cs-workflow-icon-box"
                    style={{
                      background: `${step.color}15`,
                      color: step.color,
                      borderColor: `${step.color}40`
                    }}
                  >
                    <i className={`fas ${step.icon}`} />
                  </div>
                </div>
                <h3 className="cs-workflow-title">{step.title}</h3>
                <p className="cs-workflow-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: BENEFITS OF NETCRAD */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-circle-check" /> VALUE REALIZATION
            </span>
            <h2 className="siem-section-title">Benefits of Netcrad</h2>
            <p className="siem-section-subtitle">
              Proactive website scanning safeguards user databases, speeds loading, and protects branding integrity.
            </p>
          </div>

          <div className="cs-importance-grid">
            {NETCRAD_BENEFITS.map((item, idx) => (
              <div key={idx} className="cs-importance-card">
                <div
                  className="cs-importance-icon-box"
                  style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.15)' }}
                >
                  <i className="fas fa-check-double" />
                </div>
                <div className="cs-importance-content">
                  <h3 className="cs-importance-title" style={{ fontSize: '0.98rem' }}>{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: WHO CAN USE NETCRAD? */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-users-gear" /> TARGET VERTICALS
            </span>
            <h2 className="siem-section-title">Who Can Use Netcrad?</h2>
            <p className="siem-section-subtitle">
              We deliver dedicated website auditing configurations matching the scale of your target business.
            </p>
          </div>

          <div className="cs-audiences-grid">
            {TARGET_VERTICALS.map((vert, idx) => (
              <div key={idx} className="cs-audience-card">
                <div className="cs-audience-icon-box">
                  <i className={`fas ${vert.icon}`} />
                </div>
                <h3 className="cs-audience-title">{vert.name}</h3>
                <p className="cs-audience-desc">{vert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: DASHBOARD HIGHLIGHTS */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-desktop" /> CONTROL CENTER
            </span>
            <h2 className="siem-section-title">Dashboard Highlights</h2>
            <p className="siem-section-subtitle">
              Track metrics, scan histories and risk distributions from a unified enterprise-grade dashboard.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
            {DASHBOARD_HIGHLIGHTS.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem', borderRadius: '14px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255, 138, 31, 0.15)', color: '#ff8a1f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="fas fa-check" style={{ fontSize: '0.7rem' }} />
                </div>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: FREQUENTLY ASKED QUESTIONS */}
      <section className="siem-section cs-section cs-faq-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-circle-question" /> FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="siem-section-title">Netcrad FAQs</h2>
            <p className="siem-section-subtitle">
              Get clear, direct answers about Netcrad website scanning, security reports, and risk triage.
            </p>
          </div>

          <div className="cs-faq-accordion-list">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`cs-faq-card ${isOpen ? 'is-open' : ''}`}>
                  <button
                    className="cs-faq-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`netcrad-faq-answer-${idx}`}
                    id={`netcrad-faq-header-${idx}`}
                  >
                    <span className="cs-faq-question-text">{faq.q}</span>
                    <i className={`fas fa-chevron-down cs-faq-icon ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div
                      id={`netcrad-faq-answer-${idx}`}
                      className="cs-faq-answer-body"
                      role="region"
                      aria-labelledby={`netcrad-faq-header-${idx}`}
                    >
                      <p className="cs-faq-answer-text">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 12: CALL TO ACTION */}
      <section className="siem-section cs-cta-section">
        <div className="siem-container">
          <div className="cs-cta-box">
            <div className="cs-cta-bg-glow" />
            <div className="cs-cta-content">
              <span className="cs-cta-tag">GET PROTECTED</span>
              <h2 className="cs-cta-title">Security Starts with Visibility.</h2>
              <p className="cs-cta-desc">
                Netcrad helps you identify, understand, and remediate website security risks—so you can build trust with every visitor.
              </p>
              <p className="cs-cta-subtext">
                Speak with the Netcradus team to run a comprehensive website audit on your web infrastructure.
              </p>
              <div className="cs-cta-actions">
                <Link to="/contact" className="siem-btn-primary cs-cta-btn">
                  <span>Scan My Website</span>
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
