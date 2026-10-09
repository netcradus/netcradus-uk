import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GRC_METRICS = [
  {
    value: "60%",
    title: "Supply Chain Exploit Vectors",
    desc: "More than half of modern breaches are traced back to third-party vendor access keys and interfaces."
  },
  {
    value: "$5.8M",
    title: "Average Compliance Failure Cost",
    desc: "Regulatory non-compliance fines, litigation costs, and audit failures create heavy financial burdens."
  },
  {
    value: "90%",
    title: "Phishing Prevention Rate",
    desc: "Continuous employee training programs reduce vulnerability to social engineering by 90%."
  }
];

const CORPORATE_GUARDRAILS = [
  {
    title: "Mitigate Third-Party Risks",
    desc: "Audit, analyze, and manage security settings and integrations belonging to external software vendors.",
    icon: "fa-network-wired"
  },
  {
    title: "Continuous Audit Readiness",
    desc: "Maintain constant compliance posture aligned to GDPR, ISO 27001:2022, and other regional mandates.",
    icon: "fa-file-shield"
  },
  {
    title: "vCISO Advisory",
    desc: "Access strategic security leadership, risk assessments, and policy modeling without dedicated overhead.",
    icon: "fa-user-tie"
  },
  {
    title: "Reduce Human Vector Risks",
    desc: "Deploy continuous phishing simulations and security awareness training to educate employee workforces.",
    icon: "fa-user-shield"
  },
  {
    title: "Incident Readiness Planning",
    desc: "Draft detailed playbooks and coordinate tabletop simulation exercises to accelerate containment response.",
    icon: "fa-fire-extinguisher"
  },
  {
    title: "Mergers & Acquisitions Due Diligence",
    desc: "Perform deep architectural reviews and asset vulnerability scans during corporate transitions.",
    icon: "fa-handshake-simple"
  }
];

const STRATEGIC_SERVICES = [
  {
    title: "vCISO Advisory",
    desc: "Expert governance leadership, risk reviews, and security framework design.",
    icon: "fa-user-tie"
  },
  {
    title: "Security Architecture Review",
    desc: "Evaluating network segmentation, cloud native perimeters, and IAM configs.",
    icon: "fa-sitemap"
  },
  {
    title: "Third-Party Risk (TPRM)",
    desc: "Continuous scanning and validation of vendor software access keys.",
    icon: "fa-network-wired"
  },
  {
    title: "Phishing & Training Simulations",
    desc: "Interactive security awareness programs and custom employee campaigns.",
    icon: "fa-chalkboard-user"
  },
  {
    title: "GRC Auditing & Readiness",
    desc: "Ensuring configurations match compliance standards (ISO 27001, GDPR).",
    icon: "fa-clipboard-check"
  },
  {
    title: "Incident Readiness Audits",
    desc: "Developing playbooks, containment procedures, and forensic strategies.",
    icon: "fa-shield-heart"
  },
  {
    title: "M&A Security Due Diligence",
    desc: "Vulnerability analysis and asset scanning for corporate transactions.",
    icon: "fa-handshake"
  },
  {
    title: "Board-Level Risk Reporting",
    desc: "Translating technical telemetry metrics into risk scores and scorecards.",
    icon: "fa-chart-pie"
  },
  {
    title: "Strategy Consulting",
    desc: "Designing long-term security programs aligned with enterprise goals.",
    icon: "fa-compass-drafting"
  }
];

const GOVERNANCE_STEPS = [
  {
    step: "01",
    name: "Discover",
    desc: "Map current corporate networks, cloud platforms, IAM setups, and GRC policies.",
    icon: "fa-magnifying-glass",
    color: "#06b6d4"
  },
  {
    step: "02",
    name: "Assess",
    desc: "Perform detailed vulnerability scans, vendor analyses, and compliance profiling.",
    icon: "fa-clipboard-list",
    color: "#10b981"
  },
  {
    step: "03",
    name: "Align",
    desc: "Design board-level policies and build frameworks aligned with regulatory standards.",
    icon: "fa-scale-balanced",
    color: "#8b5cf6"
  },
  {
    step: "04",
    name: "Execute",
    desc: "Deploy security playbooks, launch training models, and optimize WAF/firewalls.",
    icon: "fa-gears",
    color: "#f59e0b"
  },
  {
    step: "05",
    name: "Audit",
    desc: "Run periodic testing, compile compliance reports, and present dashboards.",
    icon: "fa-file-contract",
    color: "#ec4899"
  }
];

const GRC_TOOLS = [
  {
    title: "OneTrust GRC",
    desc: "Vendor risk analysis, audit logs, and compliance mapping.",
    icon: "fa-file-shield"
  },
  {
    title: "Vanta Compliance",
    desc: "Continuous GRC tracking and automated SOC2 audits.",
    icon: "fa-square-check"
  },
  {
    title: "KnowBe4 Platform",
    desc: "Continuous training metrics and custom phishing reports.",
    icon: "fa-graduation-cap"
  },
  {
    title: "ServiceNow GRC",
    desc: "Enterprise task automation, ticketing and SLA tracking.",
    icon: "fa-headset"
  },
  {
    title: "MetricStream",
    desc: "Corporate risk tracking and compliance metrics.",
    icon: "fa-chart-line"
  },
  {
    title: "RSA Archer",
    desc: "Policy mappings and corporate auditing frameworks.",
    icon: "fa-shield-halved"
  },
  {
    title: "Drata Automation",
    desc: "Continuous security baseline scanning and verification.",
    icon: "fa-robot"
  },
  {
    title: "Secureframe",
    desc: "Automated compliance metrics matching regional laws.",
    icon: "fa-lock"
  },
  {
    title: "AuditBoard",
    desc: "Audit scheduling, risk reports, and internal controls.",
    icon: "fa-rectangle-list"
  },
  {
    title: "Splunk Dashboards",
    desc: "Translating raw telemetry events into risk scores.",
    icon: "fa-desktop"
  }
];

const INDUSTRIES_LIST = [
  { name: "Banking & Finance", icon: "fa-building-columns" },
  { name: "Healthcare", icon: "fa-heart-pulse" },
  { name: "Manufacturing", icon: "fa-industry" },
  { name: "Government", icon: "fa-landmark" },
  { name: "Education", icon: "fa-graduation-cap" },
  { name: "Retail & E-commerce", icon: "fa-cart-shopping" },
  { name: "IT & SaaS", icon: "fa-server" },
  { name: "Telecommunications", icon: "fa-tower-cell" },
  { name: "Logistics", icon: "fa-truck-fast" },
  { name: "Energy & Utilities", icon: "fa-bolt" }
];

const BENEFITS_LIST = [
  "Complete visibility over third-party software risks",
  "Maintain continuous compliance readiness (ISO 27001, GDPR)",
  "Expert security leadership advisory via vCISO models",
  "Substantial reduction in human phishing susceptibility",
  "Coordinated incident containment and playbooks",
  "Thorough vulnerability review for M&A processes",
  "Board-level risk metrics translated to business scores",
  "Avoid expensive GRC and non-compliance failures",
  "Cultivate a resilient enterprise security culture"
];

const ADVANTAGE_HIGHLIGHTS = [
  { title: "Continuous Compliance GRC Tracking", icon: "fa-clipboard-check" },
  { title: "Experienced vCISO Strategic Advice", icon: "fa-user-tie" },
  { title: "Continuous Third-Party Assessments", icon: "fa-network-wired" },
  { title: "Unified Security Awareness Training", icon: "fa-chalkboard-user" },
  { title: "Incident Containment Mappings", icon: "fa-fire-extinguisher" },
  { title: "M&A Due Diligence Auditing", icon: "fa-handshake-simple" }
];

const FAQ_ITEMS = [
  {
    q: "What is Enterprise Security?",
    a: "Enterprise Security is the comprehensive practice of designing, managing, and governing security strategies, risk management frameworks, compliance baselines, and employee guidelines across large-scale businesses."
  },
  {
    q: "What is a vCISO and how does it help our business?",
    a: "A virtual CISO (vCISO) provides strategic executive security leadership, risk assessments, and compliance governance without the cost of a full-time in-house CISO."
  },
  {
    q: "How does Third-Party Risk Management (TPRM) work?",
    a: "TPRM assesses, monitors, and validates the security controls of external software vendors and supply chain partners to ensure their integrations do not introduce vulnerability vectors into your enterprise network."
  },
  {
    q: "How does Netcradus prepare our enterprise for ISO 27001 or GDPR audits?",
    a: "We conduct gap analyses, design policy frameworks, build risk registries, and ensure continuous monitoring controls align with regulatory standards to ensure seamless audit clearance."
  },
  {
    q: "Why are phishing simulations important for employees?",
    a: "Human error accounts for over 90% of initial breaches. Regular phishing simulations and interactive training significantly reduce workforce susceptibility to social engineering attacks."
  },
  {
    q: "What is included in M&A Security Due Diligence?",
    a: "We evaluate the target company's IT architecture, cloud configurations, active vulnerability exposures, and compliance posture to identify hidden liabilities prior to acquisition."
  }
];

export default function EnterpriseSecurity() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Enterprise Security Services & vCISO Advisory | Netcradus UK";
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="siem-page cyber-security-page enterprise-security-page">

      {/* HERO SECTION */}
      <section className="siem-hero-section cs-hero-section">
        <div className="siem-container">
          <div className="siem-hero-card cs-hero-card" style={{ background: 'linear-gradient(135deg, rgba(25, 12, 35, 0.95) 0%, rgba(12, 5, 20, 0.98) 100%)', borderColor: 'rgba(255, 107, 0, 0.3)' }}>
            <div className="siem-hero-grid">

              <div className="siem-hero-left">
                <div className="siem-badge cs-badge" style={{ background: 'rgba(255, 107, 0, 0.15)', borderColor: 'rgba(255, 107, 0, 0.4)', color: '#FF6A00' }}>
                  <span className="siem-badge-dot" style={{ backgroundColor: '#FF6A00' }} />
                  ENTERPRISE SECURITY PROGRAMS
                </div>

                <h1 className="siem-hero-title cs-hero-title">
                  Align Security. <br />
                  <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #FF6A00 0%, #FF9E00 50%, #f59e0b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Protect Enterprise Growth.
                  </span>
                </h1>

                <p className="siem-hero-desc cs-hero-desc">
                  Securing a modern global enterprise requires more than deploying standalone tools. It demands a holistic, board-aligned security strategy that manages corporate risks, ensures strict regulatory compliance, and validates vendor dependencies.
                </p>

                <div className="cs-hero-highlights">
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" style={{ color: '#FF6A00' }}></i>
                    <span>vCISO Strategic Leadership</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" style={{ color: '#FF6A00' }}></i>
                    <span>Third-Party Risk Management</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" style={{ color: '#FF6A00' }}></i>
                    <span>Continuous Audit Readiness</span>
                  </div>
                </div>

                <div className="siem-buttons-container">
                  <Link to="/contact" className="siem-btn-primary" style={{ background: 'linear-gradient(135deg, #FF6A00 0%, #E05D00 100%)', borderColor: 'rgba(255, 107, 0, 0.4)' }}>
                    <span>Start Your Enterprise Assessment</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <Link to="/contact" className="siem-btn-secondary">
                    Talk to an Advisor
                  </Link>
                </div>
              </div>

              <div className="siem-hero-right">
                <div className="cs-hero-graphic-card">
                  <div className="cs-graphic-header">
                    <div className="cs-graphic-status">
                      <span className="cs-status-pulse" style={{ backgroundColor: '#FF6A00', boxShadow: '0 0 12px #FF6A00' }}></span>
                      <span className="cs-status-text" style={{ color: '#FF6A00' }}>ENTERPRISE GRC ACTIVE</span>
                    </div>
                    <span className="cs-graphic-badge">NETCRADUS UK</span>
                  </div>

                  <div className="cs-graphic-body">
                    <div className="cs-shield-icon-wrapper" style={{ background: 'radial-gradient(circle, rgba(255, 107, 0, 0.2) 0%, rgba(255, 107, 0, 0.02) 70%)', borderColor: 'rgba(255, 107, 0, 0.3)' }}>
                      <i className="fas fa-building-shield cs-hero-shield-icon" style={{ color: '#FF6A00' }}></i>
                      <div className="cs-shield-glow"></div>
                    </div>

                    <div className="cs-metrics-grid">
                      <div className="cs-metric-card">
                        <span className="cs-metric-val" style={{ color: '#FF6A00' }}>vCISO</span>
                        <span className="cs-metric-label">Board Alignment</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val" style={{ color: '#FF6A00' }}>TPRM</span>
                        <span className="cs-metric-label">Vendor Audits</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val" style={{ color: '#FF6A00' }}>GRC</span>
                        <span className="cs-metric-label">Audit Readiness</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHAT IS ENTERPRISE SECURITY? (Strategic Alignment) */}
      <section id="what-is-enterprise-security" className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#FF6A00' }}>
              <i className="fas fa-sitemap"></i> STRATEGIC ALIGNMENT
            </span>
            <h2 className="siem-section-title">What is Enterprise Security?</h2>
          </div>

          <div className="cs-overview-grid">
            <div className="cs-overview-content">
              <p className="cs-overview-lead" style={{ color: '#FF6A00' }}>
                Enterprise Security is the comprehensive practice of designing, managing, and governing security strategies, risk management frameworks, compliance baselines, and employee guidelines across large-scale businesses.
              </p>
              <p className="cs-overview-text">
                Instead of focusing purely on device-level settings, it addresses corporate-wide threats through formal security architectures, board-level reporting, third-party vendor audits, and incident command playbooks.
              </p>
              <p className="cs-overview-text" style={{ fontWeight: 600, color: '#e2e8f0' }}>
                It bridges the gap between raw technical security metrics and business risk management, helping your organization maintain customer trust and audit clearance during high-speed scaling.
              </p>
            </div>

            <div className="cs-overview-cards-col">
              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(255, 107, 0, 0.15)', borderColor: 'rgba(255, 107, 0, 0.3)', color: '#FF6A00' }}>
                  <i className="fas fa-user-tie"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Board-Level GRC Governance</h4>
                  <p className="cs-mini-desc">Translating technical telemetry into risk scores, audit readiness, and strategic scorecards.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(255, 107, 0, 0.15)', borderColor: 'rgba(255, 107, 0, 0.3)', color: '#FF6A00' }}>
                  <i className="fas fa-network-wired"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Third-Party Risk Management</h4>
                  <p className="cs-mini-desc">Validating vendor dependencies, API integrations, and supply chain access keys.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(255, 107, 0, 0.15)', borderColor: 'rgba(255, 107, 0, 0.3)', color: '#FF6A00' }}>
                  <i className="fas fa-chalkboard-user"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Workforce Security Awareness</h4>
                  <p className="cs-mini-desc">Mitigating human vector risks through continuous phishing simulations and employee training.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY ENTERPRISE SECURITY MATTERS (Governance Controls) */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#FF6A00' }}>
              <i className="fas fa-triangle-exclamation"></i> GOVERNANCE CONTROLS
            </span>
            <h2 className="siem-section-title">Why Enterprise Security Matters</h2>
            <p className="siem-section-subtitle">
              Without a unified GRC program and formal CISO leadership, enterprises deploy fragmented security configurations that lead to compliance failure, exposed vendor channels, and data leaks.
            </p>
          </div>

          <div style={{ margin: '2rem 0', padding: '1.25rem 1.75rem', background: 'rgba(255, 107, 0, 0.08)', borderRadius: '16px', borderLeft: '4px solid #FF6A00', fontStyle: 'italic', color: '#e2e8f0', fontSize: '1.05rem' }}>
            "Governance and strategic security architecture are what transform technical security checklists into a sustainable, resilient growth engine."
          </div>

          <div className="cs-threats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {GRC_METRICS.map((m, idx) => (
              <div key={idx} className="cs-threat-card" style={{ borderColor: 'rgba(255, 107, 0, 0.2)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FF6A00', marginBottom: '0.5rem' }}>{m.value}</div>
                <h3 className="cs-threat-title">{m.title}</h3>
                <p className="cs-threat-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY EVERY BUSINESS NEEDS ENTERPRISE SECURITY (Corporate Guardrails) */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#FF6A00' }}>
              <i className="fas fa-shield-halved"></i> CORPORATE GUARDRAILS
            </span>
            <h2 className="siem-section-title">Why Every Business Needs Enterprise Security</h2>
            <p className="siem-section-subtitle">
              Align security architectures, reduce vendor vulnerabilities, and cultivate security compliance at scale.
            </p>
          </div>

          <div className="cs-threats-grid">
            {CORPORATE_GUARDRAILS.map((obj, idx) => (
              <div key={idx} className="cs-threat-card">
                <div className="cs-threat-icon-box" style={{ color: '#FF6A00', background: 'rgba(255, 107, 0, 0.12)', borderColor: 'rgba(255, 107, 0, 0.35)' }}>
                  <i className={`fas ${obj.icon}`}></i>
                </div>
                <h3 className="cs-threat-title">{obj.title}</h3>
                <p className="cs-threat-desc">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR ENTERPRISE SECURITY SERVICES (Strategic Offerings) */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#FF6A00' }}>
              <i className="fas fa-award"></i> STRATEGIC OFFERINGS
            </span>
            <h2 className="siem-section-title">Our Enterprise Security Services</h2>
            <p className="siem-section-subtitle">
              We deliver board-level GRC, security consulting, and architectural modeling matching regulatory demands.
            </p>
          </div>

          <div className="cs-capabilities-grid">
            {STRATEGIC_SERVICES.map((srv, idx) => (
              <div key={idx} className="cs-capability-card">
                <div className="cs-cap-header">
                  <div className="cs-cap-icon-box" style={{ background: 'rgba(255, 107, 0, 0.15)', borderColor: 'rgba(255, 107, 0, 0.3)', color: '#FF6A00' }}>
                    <i className={`fas ${srv.icon}`}></i>
                  </div>
                </div>
                <h3 className="cs-cap-title">{srv.title}</h3>
                <p className="cs-cap-desc">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE DEPLOY YOUR PROGRAM (Governance Cycle) */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#FF6A00' }}>
              <i className="fas fa-arrows-spin"></i> GOVERNANCE CYCLE
            </span>
            <h2 className="siem-section-title">How We Deploy Your Program</h2>
            <p className="siem-section-subtitle">
              Our structured operational cycle ensures continuous protection from discover phase to audit validation.
            </p>
          </div>

          <div className="cs-workflow-grid">
            {GOVERNANCE_STEPS.map((step, idx) => (
              <div key={idx} className="cs-workflow-card">
                <div className="cs-workflow-header">
                  <span className="cs-workflow-num" style={{ color: step.color }}>{step.step}</span>
                  <div className="cs-workflow-icon-box" style={{ background: `${step.color}15`, color: step.color, borderColor: `${step.color}40` }}>
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                </div>
                <h3 className="cs-workflow-title">{step.name}</h3>
                <p className="cs-workflow-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: GRC TOOLS WE SUPPORT (Tech Integrations) */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#FF6A00' }}>
              <i className="fas fa-network-wired"></i> TECH INTEGRATIONS
            </span>
            <h2 className="siem-section-title">GRC Tools We Support</h2>
            <p className="siem-section-subtitle">
              We leverage, support and integrate with leading compliance, reporting, and GRC systems.
            </p>
          </div>

          <div className="cs-threats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {GRC_TOOLS.map((tool, idx) => (
              <div key={idx} className="cs-threat-card" style={{ padding: '1.25rem 1.5rem' }}>
                <div className="cs-threat-icon-box" style={{ width: '40px', height: '40px', fontSize: '1.1rem', color: '#FF6A00', background: 'rgba(255, 107, 0, 0.12)', borderColor: 'rgba(255, 107, 0, 0.3)' }}>
                  <i className={`fas ${tool.icon}`}></i>
                </div>
                <h3 className="cs-threat-title" style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{tool.title}</h3>
                <p className="cs-threat-desc" style={{ fontSize: '0.86rem' }}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: INDUSTRIES WE ALIGN (Verticals Secured) */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#FF6A00' }}>
              <i className="fas fa-building-user"></i> VERTICALS SECURED
            </span>
            <h2 className="siem-section-title">Industries We Align</h2>
            <p className="siem-section-subtitle">
              We design governance policies and risk management programs tailored to sector regulations.
            </p>
          </div>

          <div className="cs-audiences-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {INDUSTRIES_LIST.map((ind, idx) => (
              <div key={idx} className="cs-audience-card" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div className="cs-audience-icon-box" style={{ margin: '0 auto 1rem', background: 'rgba(255, 107, 0, 0.15)', borderColor: 'rgba(255, 107, 0, 0.3)', color: '#FF6A00' }}>
                  <i className={`fas ${ind.icon}`}></i>
                </div>
                <h3 className="cs-audience-title" style={{ fontSize: '1rem', marginBottom: 0 }}>{ind.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: BENEFITS OF INVESTING IN ENTERPRISE SECURITY (Value Realization) */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#FF6A00' }}>
              <i className="fas fa-chart-line"></i> VALUE REALIZATION
            </span>
            <h2 className="siem-section-title">Benefits of Investing in Enterprise Security</h2>
            <p className="siem-section-subtitle">
              Aligning security architectures with business objectives manages corporate risk and builds market trust.
            </p>
          </div>

          <div className="cs-importance-grid">
            {BENEFITS_LIST.map((b, idx) => (
              <div key={idx} className="cs-importance-card">
                <div className="cs-importance-icon-box" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.15)' }}>
                  <i className="fas fa-check"></i>
                </div>
                <div className="cs-importance-content">
                  <h3 className="cs-importance-title" style={{ fontSize: '1rem', fontWeight: 600 }}>{b}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: WHY CHOOSE NETCRADUS? (Netcradus Advantage) */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#FF6A00' }}>
              <i className="fas fa-award"></i> NETCRADUS ADVANTAGE
            </span>
            <h2 className="siem-section-title">Why Choose Netcradus?</h2>
            <p className="siem-section-subtitle">
              At Netcradus, we bridge perimeter controls with corporate governance. Our CISO advisors and automated audits safeguard enterprise operations against global risk vectors.
            </p>
          </div>

          <div style={{ margin: '0 0 2.5rem', padding: '1.25rem 1.75rem', background: 'rgba(255, 107, 0, 0.08)', borderRadius: '16px', borderLeft: '4px solid #FF6A00', fontStyle: 'italic', color: '#e2e8f0', fontSize: '1.05rem', textAlign: 'center' }}>
            "Enterprise GRC alignments. vCISO Strategic Advisory. Comprehensive Vendor Audits."
          </div>

          <div className="cs-audiences-grid">
            {ADVANTAGE_HIGHLIGHTS.map((adv, idx) => (
              <div key={idx} className="cs-audience-card">
                <div className="cs-audience-icon-box" style={{ background: 'rgba(255, 107, 0, 0.15)', borderColor: 'rgba(255, 107, 0, 0.3)', color: '#FF6A00' }}>
                  <i className={`fas ${adv.icon}`}></i>
                </div>
                <h3 className="cs-audience-title">{adv.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className="siem-section cs-section cs-faq-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#FF6A00' }}>
              <i className="fas fa-circle-question"></i> FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="siem-section-title">Enterprise Security FAQs</h2>
            <p className="siem-section-subtitle">
              Clear answers regarding vCISO leadership, third-party vendor risk, and compliance audit readiness.
            </p>
          </div>

          <div className="cs-faq-accordion-list">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`cs-faq-card ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    className="cs-faq-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`ent-faq-answer-${idx}`}
                    id={`ent-faq-header-${idx}`}
                  >
                    <span className="cs-faq-question-text">{faq.q}</span>
                    <i className={`fas fa-chevron-down cs-faq-icon ${isOpen ? 'rotated' : ''}`} style={{ color: '#FF6A00' }}></i>
                  </button>
                  {isOpen && (
                    <div
                      id={`ent-faq-answer-${idx}`}
                      className="cs-faq-answer-body"
                      role="region"
                      aria-labelledby={`ent-faq-header-${idx}`}
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

      {/* SECTION 11: CALL TO ACTION */}
      <section className="siem-section cs-cta-section">
        <div className="siem-container">
          <div className="cs-cta-box" style={{ background: 'linear-gradient(135deg, rgba(25, 12, 35, 0.95) 0%, rgba(255, 107, 0, 0.15) 100%)', borderColor: 'rgba(255, 107, 0, 0.35)' }}>
            <div className="cs-cta-bg-glow" style={{ background: 'radial-gradient(circle, rgba(255, 107, 0, 0.15) 0%, transparent 70%)' }}></div>
            <div className="cs-cta-content">
              <span className="cs-cta-tag" style={{ color: '#FF6A00', background: 'rgba(255, 107, 0, 0.1)', borderColor: 'rgba(255, 107, 0, 0.3)' }}>HARDEN YOUR ENTERPRISE POSTURE</span>
              <h2 className="cs-cta-title">Ready to Harden Your Enterprise Posture?</h2>
              <p className="cs-cta-desc">
                Don't leave vendor risks and compliance audits unmanaged. Connect with our expert advisors to implement enterprise security structures today.
              </p>
              <div className="cs-cta-actions">
                <Link to="/contact" className="siem-btn-primary cs-cta-btn" style={{ background: 'linear-gradient(135deg, #FF6A00 0%, #E05D00 100%)', borderColor: 'rgba(255, 107, 0, 0.4)' }}>
                  <span>Start Your Enterprise Assessment</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
