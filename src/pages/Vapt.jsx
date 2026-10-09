import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Planning & Scoping",
    desc: "Define assessment objectives, catalog target applications and infrastructure, and establish strict testing rules of engagement (RoE).",
    icon: "fa-sliders",
    color: "#06b6d4"
  },
  {
    num: "02",
    title: "Info Gathering & Recon",
    desc: "Collect technical intelligence on exposed attack surfaces, open ports, software versions, and API endpoints.",
    icon: "fa-magnifying-glass-chart",
    color: "#10b981"
  },
  {
    num: "03",
    title: "Vulnerability Assessment",
    desc: "Execute automated scanning loops and deep manual analysis to identify security flaws, misconfigurations, and outdated components.",
    icon: "fa-bug",
    color: "#8b5cf6"
  },
  {
    num: "04",
    title: "Penetration Testing",
    desc: "Safely simulate real-world cyber attacks to exploit identified vulnerabilities and determine their actual business impact.",
    icon: "fa-user-secret",
    color: "#f59e0b"
  },
  {
    num: "05",
    title: "Reporting & PoC",
    desc: "Deliver an executive summary and technical report complete with CVSS risk ratings, proof of concept (PoC) writeups, and developer remediation steps.",
    icon: "fa-file-shield",
    color: "#ef4444"
  },
  {
    num: "06",
    title: "Re-Testing & Verification",
    desc: "Conduct complimentary re-testing to verify that all identified high and critical security gaps have been successfully patched.",
    icon: "fa-arrows-rotate",
    color: "#ec4899"
  }
];

const NEED_REASONS = [
  {
    title: "Detect Gaps Early",
    desc: "Uncover security weaknesses and business logic flaws before malicious actors find and exploit them.",
    icon: "fa-radar",
    color: "#ef4444"
  },
  {
    title: "Protect Vital Data",
    desc: "Safeguard customer records, intellectual property, and confidential financial data against unauthorized exfiltration.",
    icon: "fa-vault",
    color: "#3b82f6"
  },
  {
    title: "Mitigate Breach Risks",
    desc: "Significantly reduce the risk of ransomware infections, credential theft, and catastrophic network intrusions.",
    icon: "fa-shield-virus",
    color: "#f59e0b"
  },
  {
    title: "Harden Security Posture",
    desc: "Strengthen overall perimeter defenses, cloud configurations, and application source code integrity.",
    icon: "fa-shield-halved",
    color: "#10b981"
  },
  {
    title: "Regulatory Alignment",
    desc: "Satisfy compliance requirements for ISO 27001, PCI DSS, GDPR, HIPAA, SOC 2, and NIS2 audit frameworks.",
    icon: "fa-certificate",
    color: "#8b5cf6"
  },
  {
    title: "Reputation Protection",
    desc: "Prevent severe financial penalties, operational downtime, and lasting damage to corporate brand reputation.",
    icon: "fa-building-shield",
    color: "#ec4899"
  },
  {
    title: "Build Stakeholder Trust",
    desc: "Instill confidence in enterprise clients, investors, and regulators with verified independent security audits.",
    icon: "fa-handshake-simple",
    color: "#06b6d4"
  },
  {
    title: "Secure Modern Scale",
    desc: "Enable continuous digital transformation and cloud migrations with minimal operational exposure.",
    icon: "fa-diagram-project",
    color: "#14b8a6"
  }
];

const SERVICES_DATA = [
  {
    title: "Web Application Pen Testing",
    desc: "Comprehensive testing for OWASP Top 10 flaws including SQL Injection (SQLi), Cross-Site Scripting (XSS), and Authentication Bypass.",
    icon: "fa-globe",
    badge: "Web App"
  },
  {
    title: "Mobile Application Security",
    desc: "Audit iOS and Android apps for insecure local storage, hardcoded secrets, weak cryptographic implementation, and data leakage.",
    icon: "fa-mobile-screen-button",
    badge: "Mobile"
  },
  {
    title: "Network Penetration Testing",
    desc: "Evaluate internal and external network perimeters, firewalls, switches, and routers to eliminate exploitable entry points.",
    icon: "fa-network-wired",
    badge: "Network"
  },
  {
    title: "API Security Assessment",
    desc: "Test REST, SOAP, GraphQL, and microservice APIs for broken object-level authorization (BOLA), injection attacks, and rate-limiting flaws.",
    icon: "fa-code",
    badge: "APIs"
  },
  {
    title: "Cloud Infrastructure Audit",
    desc: "Assess AWS, Azure, and GCP environments for IAM misconfigurations, exposed storage buckets, and insecure container settings.",
    icon: "fa-cloud-shield",
    badge: "Cloud"
  },
  {
    title: "Wireless Security Auditing",
    desc: "Assess corporate Wi-Fi networks for weak encryption protocols, rogue access points, and unauthorized client connections.",
    icon: "fa-wifi",
    badge: "Wireless"
  },
  {
    title: "Internal & External Pentesting",
    desc: "Simulate attacks from both outside the perimeter and inside the internal network to evaluate defense-in-depth maturity.",
    icon: "fa-user-secret",
    badge: "Perimeter"
  },
  {
    title: "Configuration & Hardening Review",
    desc: "Review operating systems, database servers, web servers, and firewalls against CIS benchmarks and security standards.",
    icon: "fa-sliders",
    badge: "Hardening"
  }
];

const SCOPE_ITEMS = [
  { name: "Web Applications", icon: "fa-globe" },
  { name: "Mobile Applications", icon: "fa-mobile-screen-button" },
  { name: "APIs (REST & GraphQL)", icon: "fa-code" },
  { name: "Corporate Networks", icon: "fa-network-wired" },
  { name: "Cloud Infrastructure", icon: "fa-cloud-shield" },
  { name: "Firewalls & VPN Gateways", icon: "fa-server" },
  { name: "Active Directory & IAM", icon: "fa-id-card" },
  { name: "Wireless Networks", icon: "fa-wifi" },
  { name: "Email Security Systems", icon: "fa-envelope-shield" },
  { name: "Servers & Databases", icon: "fa-database" },
  { name: "Container & K8s Clusters", icon: "fa-cubes" },
  { name: "IoT & Perimeter Devices", icon: "fa-microchip" }
];

const COMMON_VULNS = [
  "SQL Injection (SQLi)",
  "Cross-Site Scripting (XSS)",
  "Cross-Site Request Forgery (CSRF)",
  "Authentication & Session Flaws",
  "Remote Code Execution (RCE)",
  "Broken Access Control (BOLA)",
  "Security Misconfigurations",
  "Sensitive Data Exposure",
  "Weak Password Policies",
  "Unpatched Server Flaws",
  "API Rate-Limiting & Auth Bugs",
  "Cloud Bucket Misconfigurations"
];

const VALUE_BENEFITS = [
  {
    title: "Identify Critical Gaps Before Attackers",
    desc: "Uncover unknown vulnerabilities through real-world ethical hacker simulations.",
    icon: "fa-shield-halved",
    color: "#06b6d4"
  },
  {
    title: "Developer-Friendly Remediation",
    desc: "Receive clear, step-by-step code snippets and PoCs to accelerate bug fixing.",
    icon: "fa-code",
    color: "#10b981"
  },
  {
    title: "Compliance & Audit Certification",
    desc: "Fulfill ISO 27001, PCI DSS, GDPR, and SOC 2 security testing requirements.",
    icon: "fa-certificate",
    color: "#8b5cf6"
  },
  {
    title: "Free Verification Re-Testing",
    desc: "Includes complimentary follow-up testing to confirm all high risks are resolved.",
    icon: "fa-arrows-rotate",
    color: "#f59e0b"
  }
];

const ADVANTAGE_FEATURES = [
  { title: "Certified Ethical Hackers (CEH & OSCP)", desc: "Lead by senior accredited security researchers.", icon: "fa-user-graduate", color: "#06b6d4" },
  { title: "Manual + Automated Hybrid Testing", desc: "Combining scanner speed with deep human business logic analysis.", icon: "fa-bug-slash", color: "#10b981" },
  { title: "OWASP & PTES Standards Aligned", desc: "Methodology structured around globally accepted pentesting frameworks.", icon: "fa-layer-group", color: "#8b5cf6" },
  { title: "Actionable PoC Writeups", desc: "Detailed proof-of-concept steps for rapid vulnerability reproduction.", icon: "fa-file-code", color: "#f59e0b" },
  { title: "Zero Production Downtime Guarantee", desc: "Strict adherence to agreed rules of engagement and testing windows.", icon: "fa-clock", color: "#ef4444" },
  { title: "Audit-Ready GRC Compliance Reports", desc: "Executive summaries for board members and detailed technical reports for IT.", icon: "fa-file-shield", color: "#ec4899" }
];

const FAQ_ITEMS = [
  {
    q: "What is the difference between a Vulnerability Assessment and a Penetration Test?",
    a: "A Vulnerability Assessment is an automated or semi-automated scan that identifies potential weaknesses without attempting exploitation. A Penetration Test actively attempts to safely exploit those vulnerabilities to prove their real-world impact."
  },
  {
    q: "How often should an organisation undergo VAPT?",
    a: "We recommend conducting full VAPT audits at least once or twice annually, as well as whenever major code releases, infrastructure changes, or cloud migrations take place."
  },
  {
    q: "Will Penetration Testing cause downtime to our live production systems?",
    a: "No. Our certified ethical hackers strictly adhere to agreed testing windows and rules of engagement (RoE), ensuring zero disruption to live production services."
  },
  {
    q: "What deliverables do we receive at the conclusion of a VAPT assessment?",
    a: "You will receive an executive summary for leadership, a detailed technical report with CVSS risk ratings, step-by-step Proof of Concept (PoC) writeups, developer remediation guidance, and a re-testing compliance certificate."
  },
  {
    q: "Does Netcradus provide free re-testing after we remediate the vulnerabilities?",
    a: "Yes. We include a complimentary re-testing phase to verify that your team has successfully patched all identified high and critical findings."
  },
  {
    q: "How long does a standard VAPT engagement take?",
    a: "Depending on the scope (e.g. web application, mobile app, or internal network), a typical VAPT assessment takes 3 to 10 business days from kickoff to final report delivery."
  }
];

export default function Vapt() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "VAPT & Ethical Hacking Services | Netcradus UK";
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="siem-page cyber-security-page cloud-security-page vapt-page">

      {/* SECTION 1: HERO */}
      <section className="siem-hero-section cs-hero-section">
        <div className="siem-container">
          <div className="siem-hero-card cs-hero-card">
            <div className="siem-hero-grid">

              <div className="siem-hero-left">
                <div className="siem-badge cs-badge">
                  <span className="siem-badge-dot" />
                  VAPT & ETHICAL HACKING
                </div>

                <h1 className="siem-hero-title cs-hero-title">
                  Identify Vulnerabilities <br />
                  <span className="gradient-text">Before Attackers Do.</span>
                </h1>

                <p className="siem-hero-desc cs-hero-desc">
                  At Netcradus, our Vulnerability Assessment & Penetration Testing (VAPT) services help organisations identify, evaluate, and remediate security vulnerabilities before they can be exploited. Our security experts simulate real-world cyber attacks to uncover hidden weaknesses and provide actionable recommendations to strengthen your security posture.
                </p>

                <div className="cs-hero-highlights">
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" />
                    <span>CEH & OSCP Certified Hackers</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" />
                    <span>Manual + Automated Testing</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" />
                    <span>Free Re-Testing Validation</span>
                  </div>
                </div>

                <div className="siem-buttons-container">
                  <Link to="/contact" className="siem-btn-primary">
                    <span>Request a VAPT Assessment</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                  <a href="#what-is-vapt" className="siem-btn-secondary">
                    Explore VAPT Services
                  </a>
                </div>
              </div>

              <div className="siem-hero-right">
                <div className="cs-hero-graphic-card">
                  <div className="cs-graphic-header">
                    <div className="cs-graphic-status">
                      <span className="cs-status-pulse" />
                      <span className="cs-status-text">ETHICAL AUDIT ACTIVE</span>
                    </div>
                    <span className="cs-graphic-badge">NETCRADUS UK</span>
                  </div>

                  <div className="cs-graphic-body">
                    <div
                      className="cs-shield-icon-wrapper"
                      style={{
                        background: 'radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.02) 70%)',
                        borderColor: 'rgba(239, 68, 68, 0.35)'
                      }}
                    >
                      <i className="fas fa-user-secret cs-hero-shield-icon" style={{ color: '#ef4444' }} />
                      <div className="cs-shield-glow" />
                    </div>

                    <div className="cs-metrics-grid">
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">100%</span>
                        <span className="cs-metric-label">OWASP Coverage</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">Zero</span>
                        <span className="cs-metric-label">False-Positives</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">Free</span>
                        <span className="cs-metric-label">Re-Testing Loop</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS VAPT? */}
      <section id="what-is-vapt" className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-bug" /> SECURITY AUDIT
            </span>
            <h2 className="siem-section-title">What is VAPT?</h2>
          </div>

          <div className="cs-overview-grid">
            <div className="cs-overview-content">
              <p className="cs-overview-lead">
                Vulnerability Assessment & Penetration Testing (VAPT) is a comprehensive security testing process that combines two essential approaches to evaluate digital infrastructure.
              </p>
              <p className="cs-overview-text">
                <strong>Vulnerability Assessment (VA):</strong> A systematic process of identifying, classifying, and prioritizing security vulnerabilities across your IT infrastructure, applications, networks, cloud environments, and endpoints.
              </p>
              <p className="cs-overview-text">
                <strong>Penetration Testing (PT):</strong> An authorized simulation of real-world cyber attacks where ethical hackers attempt to exploit identified vulnerabilities to determine their actual business impact.
              </p>
              <p className="cs-overview-text font-semibold text-white/90">
                Together, VAPT provides organisations with a clear understanding of their security risks and practical guidance to eliminate them before attackers can take advantage.
              </p>
            </div>

            <div className="cs-overview-cards-col">
              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' }}>
                  <i className="fas fa-magnifying-glass-chart" />
                </div>
                <div>
                  <h4 className="cs-mini-title">Systematic VA Scanning</h4>
                  <p className="cs-mini-desc">Identifying open ports, outdated libraries, unpatched OS versions, and misconfigurations.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
                  <i className="fas fa-user-secret" />
                </div>
                <div>
                  <h4 className="cs-mini-title">Real-World PT Exploitation</h4>
                  <p className="cs-mini-desc">Safe manual penetration testing to prove actual exploitability and business risk.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                  <i className="fas fa-file-shield" />
                </div>
                <div>
                  <h4 className="cs-mini-title">Developer Remediation Roadmap</h4>
                  <p className="cs-mini-desc">Actionable code fixes, PoC proof, and re-testing verification.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY YOUR BUSINESS NEEDS VAPT */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-shield-halved" /> PROACTIVE DEFENSE
            </span>
            <h2 className="siem-section-title">Why Your Business Needs VAPT</h2>
            <p className="siem-section-subtitle">
              Cyber threats are constantly evolving, and new vulnerabilities emerge every day. Regular VAPT helps organisations proactively identify security gaps before they become serious incidents.
            </p>
          </div>

          <div className="cs-threats-grid">
            {NEED_REASONS.map((reason, idx) => (
              <div key={idx} className="cs-threat-card">
                <div
                  className="cs-threat-icon-box"
                  style={{
                    color: reason.color,
                    background: `${reason.color}15`,
                    borderColor: `${reason.color}35`
                  }}
                >
                  <i className={`fas ${reason.icon}`} />
                </div>
                <h3 className="cs-threat-title">{reason.title}</h3>
                <p className="cs-threat-desc">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR VAPT SERVICES */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-cubes" /> AUDITING SERVICES
            </span>
            <h2 className="siem-section-title">Our VAPT Services</h2>
            <p className="siem-section-subtitle">
              We deliver dedicated manual ethical hacking assessments and automated scanning loops across all major interfaces.
            </p>
          </div>

          <div className="cs-capabilities-grid">
            {SERVICES_DATA.map((srv, idx) => (
              <div key={idx} className="cs-capability-card">
                <div className="cs-cap-header">
                  <div className="cs-cap-icon-box">
                    <i className={`fas ${srv.icon}`} />
                  </div>
                  <span className="cs-cap-badge">{srv.badge}</span>
                </div>
                <h3 className="cs-cap-title">{srv.title}</h3>
                <p className="cs-cap-desc">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT WE TEST */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-layer-group" /> COMPREHENSIVE SCOPE
            </span>
            <h2 className="siem-section-title">What We Test</h2>
            <p className="siem-section-subtitle">
              Our certified security professionals evaluate every component of your modern enterprise attack surface.
            </p>
          </div>

          <div className="cs-audiences-grid">
            {SCOPE_ITEMS.map((item, idx) => (
              <div key={idx} className="cs-audience-card">
                <div className="cs-audience-icon-box">
                  <i className={`fas ${item.icon}`} />
                </div>
                <h3 className="cs-audience-title">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR VAPT METHODOLOGY */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-arrows-spin" /> AUDITING ROADMAP
            </span>
            <h2 className="siem-section-title">Our VAPT Methodology</h2>
            <p className="siem-section-subtitle">
              We follow a strict, multi-phase assessment workflow to securely detect, validate, and confirm remediations.
            </p>
          </div>

          <div className="cs-workflow-grid">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div key={idx} className="cs-workflow-card">
                <div className="cs-workflow-header">
                  <span className="cs-workflow-num" style={{ color: step.color }}>{step.num}</span>
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

      {/* SECTION 7: COMMON VULNERABILITIES WE IDENTIFY */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-triangle-exclamation" /> IDENTIFIED RISKS
            </span>
            <h2 className="siem-section-title">Common Vulnerabilities We Identify</h2>
            <p className="siem-section-subtitle">
              We test systems against critical risk vectors, compliance vulnerabilities, and logic flaws.
            </p>
          </div>

          <div className="cs-audiences-grid">
            {COMMON_VULNS.map((vuln, idx) => (
              <div key={idx} className="cs-audience-card">
                <div className="cs-audience-icon-box" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
                  <i className="fas fa-bug" />
                </div>
                <h3 className="cs-audience-title">{vuln}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: VALUE DELIVERY / BENEFITS */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-chart-line" /> VALUE DELIVERY
            </span>
            <h2 className="siem-section-title">Benefits of Our VAPT Services</h2>
            <p className="siem-section-subtitle">
              Harden perimeters, identify issues, and satisfy compliance expectations under expert guidance.
            </p>
          </div>

          <div className="cs-importance-grid">
            {VALUE_BENEFITS.map((item, idx) => (
              <div key={idx} className="cs-importance-card">
                <div
                  className="cs-importance-icon-box"
                  style={{ color: item.color, background: `${item.color}15` }}
                >
                  <i className={`fas ${item.icon}`} />
                </div>
                <div className="cs-importance-content">
                  <h3 className="cs-importance-title">{item.title}</h3>
                  <p className="cs-importance-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: NETCRADUS EDGE / WHY CHOOSE US */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-award" /> NETCRADUS EDGE
            </span>
            <h2 className="siem-section-title">Why Choose Netcradus for VAPT?</h2>
            <p className="siem-section-subtitle">
              At Netcradus, our certified security professionals combine automated scanning with expert manual testing to uncover vulnerabilities that automated tools alone often miss. Every assessment includes detailed technical findings, risk prioritization, and practical remediation guidance to help you strengthen your security posture effectively.
            </p>
          </div>

          <div className="cs-importance-grid">
            {ADVANTAGE_FEATURES.map((adv, idx) => (
              <div key={idx} className="cs-importance-card">
                <div
                  className="cs-importance-icon-box"
                  style={{ color: adv.color, background: `${adv.color}15` }}
                >
                  <i className={`fas ${adv.icon}`} />
                </div>
                <div className="cs-importance-content">
                  <h3 className="cs-importance-title">{adv.title}</h3>
                  <p className="cs-importance-desc">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className="siem-section bg-dark cs-section cs-faq-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-circle-question" /> FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="siem-section-title">VAPT FAQs</h2>
            <p className="siem-section-subtitle">
              Get clear, direct answers to essential VAPT concepts and testing procedures.
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
                    aria-controls={`vapt-faq-answer-${idx}`}
                    id={`vapt-faq-header-${idx}`}
                  >
                    <span className="cs-faq-question-text">{faq.q}</span>
                    <i className={`fas fa-chevron-down cs-faq-icon ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div
                      id={`vapt-faq-answer-${idx}`}
                      className="cs-faq-answer-body"
                      role="region"
                      aria-labelledby={`vapt-faq-header-${idx}`}
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
          <div className="cs-cta-box">
            <div className="cs-cta-bg-glow" />
            <div className="cs-cta-content">
              <span className="cs-cta-tag">GET PROTECTED</span>
              <h2 className="cs-cta-title">Secure Your Business Before Attackers Find the Weakness</h2>
              <p className="cs-cta-desc">
                Don't wait for a cyber incident to expose hidden vulnerabilities. Proactively identify and eliminate security risks with Netcradus VAPT Services and build a stronger, more resilient security foundation.
              </p>
              <p className="cs-cta-subtext">
                Speak with the Netcradus team to discuss your VAPT assessment requirements.
              </p>
              <div className="cs-cta-actions">
                <Link to="/contact" className="siem-btn-primary cs-cta-btn">
                  <span>Request a VAPT Assessment</span>
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
