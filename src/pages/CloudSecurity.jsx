import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Assess the Cloud Environment",
    desc: "Identify cloud accounts, workloads, applications, storage resources, connected services, and sensitive data. Understand the security risks and existing configurations.",
    icon: "fa-magnifying-glass-chart",
    color: "#06b6d4"
  },
  {
    num: "02",
    title: "Secure Access and Identities",
    desc: "Apply least-privilege access, multifactor authentication, role-based permissions, and strong identity controls to reduce the risk of unauthorised access.",
    icon: "fa-user-shield",
    color: "#10b981"
  },
  {
    num: "03",
    title: "Protect Data and Workloads",
    desc: "Use appropriate encryption, secure storage configurations, network controls, backups, and workload protection measures to safeguard critical resources.",
    icon: "fa-vault",
    color: "#8b5cf6"
  },
  {
    num: "04",
    title: "Monitor and Detect Threats",
    desc: "Monitor relevant cloud logs, account activity, configuration changes, network traffic, and workload behaviour to identify suspicious activity.",
    icon: "fa-radar",
    color: "#f59e0b"
  },
  {
    num: "05",
    title: "Respond and Improve",
    desc: "Investigate security alerts, contain incidents, remediate misconfigurations, recover affected resources, and continuously improve cloud security controls.",
    icon: "fa-arrows-rotate",
    color: "#ec4899"
  }
];

const RISKS_DATA = [
  {
    title: "Misconfigured Cloud Resources",
    desc: "Incorrect storage permissions, exposed services, and insecure settings can unintentionally make sensitive information or systems accessible.",
    icon: "fa-sliders",
    color: "#ef4444"
  },
  {
    title: "Identity and Access Compromise",
    desc: "Stolen credentials, excessive permissions, and compromised accounts can allow attackers to access cloud resources and sensitive data.",
    icon: "fa-user-lock",
    color: "#f97316"
  },
  {
    title: "Data Breaches and Data Exposure",
    desc: "Weak access controls, insecure integrations, or improper data handling can expose confidential business and customer information.",
    icon: "fa-database",
    color: "#8b5cf6"
  },
  {
    title: "Insecure APIs and Applications",
    desc: "Vulnerable APIs, outdated software, and poorly secured application interfaces can create entry points for attackers.",
    icon: "fa-code-fork",
    color: "#06b6d4"
  },
  {
    title: "Cloud Malware and Ransomware",
    desc: "Malicious software can affect cloud-connected workloads, compromise accounts, or disrupt access to important business information.",
    icon: "fa-bug-slash",
    color: "#3b82f6"
  },
  {
    title: "Limited Visibility and Monitoring",
    desc: "Incomplete logging and insufficient monitoring can make suspicious activity harder to detect and investigate.",
    icon: "fa-eye-slash",
    color: "#ec4899"
  }
];

const CAPABILITIES_DATA = [
  {
    title: "Cloud Security Assessment",
    desc: "Review cloud architecture, configurations, access permissions, and existing safeguards to identify potential security gaps.",
    icon: "fa-clipboard-check",
    badge: "Assessment"
  },
  {
    title: "Identity and Access Management",
    desc: "Strengthen authentication, permissions, and access policies to help ensure users and services receive only the access they require.",
    icon: "fa-fingerprint",
    badge: "IAM Control"
  },
  {
    title: "Cloud Configuration Security",
    desc: "Identify potentially insecure configurations and prioritise remediation based on risk and business impact.",
    icon: "fa-gears",
    badge: "Hardening"
  },
  {
    title: "Data Protection",
    desc: "Support appropriate data classification, encryption, access restrictions, backup practices, and protection of sensitive information.",
    icon: "fa-lock",
    badge: "Encryption"
  },
  {
    title: "Cloud Threat Monitoring",
    desc: "Use available logs, monitoring tools, and security alerts to help identify suspicious activity across supported cloud environments.",
    icon: "fa-desktop",
    badge: "Monitoring"
  },
  {
    title: "Incident Response Support",
    desc: "Help investigate cloud security incidents, contain threats, support remediation, and improve preparedness for future events.",
    icon: "fa-fire-extinguisher",
    badge: "Response"
  }
];

const IMPORTANCE_DATA = [
  {
    title: "Protect Sensitive Data",
    desc: "Reduce the risk of unauthorised access to confidential business information and customer data.",
    icon: "fa-shield-heart",
    color: "#06b6d4"
  },
  {
    title: "Reduce Security Exposure",
    desc: "Identify misconfigurations, excessive permissions, and vulnerable resources before they contribute to a security incident.",
    icon: "fa-chart-line-down",
    color: "#10b981"
  },
  {
    title: "Support Business Continuity",
    desc: "Improve preparedness for cloud-related disruptions through suitable recovery plans, backups, and incident response processes.",
    icon: "fa-arrows-spin",
    color: "#8b5cf6"
  },
  {
    title: "Strengthen Access Control",
    desc: "Maintain better oversight of users, service accounts, identities, and permissions.",
    icon: "fa-key",
    color: "#f59e0b"
  },
  {
    title: "Support Compliance Requirements",
    desc: "Help organisations implement appropriate security controls and maintain evidence needed for applicable compliance obligations.",
    icon: "fa-file-contract",
    color: "#ec4899"
  }
];

const APPROACH_STEPS = [
  {
    step: "01",
    name: "Assess",
    desc: "Understand your cloud architecture, critical assets, data flows, access policies, and security requirements.",
    icon: "fa-magnifying-glass",
    color: "#06b6d4"
  },
  {
    step: "02",
    name: "Protect",
    desc: "Prioritise risks and strengthen identity controls, configurations, data safeguards, and workload security.",
    icon: "fa-lock",
    color: "#10b981"
  },
  {
    step: "03",
    name: "Monitor",
    desc: "Use available telemetry and security alerts to identify suspicious activity and changes that may introduce risk.",
    icon: "fa-desktop",
    color: "#8b5cf6"
  },
  {
    step: "04",
    name: "Improve",
    desc: "Review findings, remediate gaps, validate controls, and adapt security measures as your cloud environment evolves.",
    icon: "fa-chart-line",
    color: "#f59e0b"
  }
];

const AUDIENCES_DATA = [
  {
    title: "Small and Medium-Sized Businesses",
    desc: "Protect cloud-hosted applications, business data, and online services.",
    icon: "fa-store"
  },
  {
    title: "Large Enterprises",
    desc: "Manage security risks across complex, distributed cloud environments.",
    icon: "fa-building-columns"
  },
  {
    title: "Cloud-First Organisations",
    desc: "Secure systems and services that depend heavily on cloud infrastructure.",
    icon: "fa-cloud"
  },
  {
    title: "Technology Companies",
    desc: "Protect development environments, APIs, applications, and customer data.",
    icon: "fa-laptop-code"
  },
  {
    title: "Organisations Using Multiple Cloud Services",
    desc: "Improve visibility and maintain consistent security controls across different environments.",
    icon: "fa-network-wired"
  }
];

const FAQ_ITEMS = [
  {
    q: "What is cloud security in simple terms?",
    a: "Cloud security means protecting cloud-based systems, applications, accounts, and data against unauthorised access, cyberattacks, and data loss."
  },
  {
    q: "Why is cloud security important?",
    a: "It helps protect sensitive information, reduce misconfiguration risks, control access, and improve resilience against security incidents."
  },
  {
    q: "What are the most common cloud security risks?",
    a: "Common risks include misconfigured resources, compromised identities, excessive permissions, data exposure, vulnerable APIs, and insufficient monitoring."
  },
  {
    q: "Is cloud security the responsibility of the cloud provider?",
    a: "Cloud security generally follows a shared responsibility model. Providers secure aspects of their underlying infrastructure, while customers remain responsible for certain configurations, identities, data, applications, and workloads, depending on the service."
  },
  {
    q: "How can a business improve cloud security?",
    a: "Start by reviewing cloud configurations, enabling multifactor authentication, limiting permissions, protecting sensitive data, maintaining appropriate backups, and monitoring relevant security events."
  },
  {
    q: "Does cloud security apply to multi-cloud environments?",
    a: "Yes. Organisations using multiple cloud providers need visibility into each environment and appropriate controls for identities, configurations, data, and workloads."
  },
  {
    q: "What is the first step in a cloud security assessment?",
    a: "Begin by identifying cloud accounts, critical workloads, sensitive data, users, permissions, and existing security controls. Use this information to prioritise risks."
  }
];

export default function CloudSecurity() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cloud Security for the Digital Era | Netcradus UK";
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="siem-page cyber-security-page cloud-security-page">

      {/* SECTION 1: HERO */}
      <section className="siem-hero-section cs-hero-section">
        <div className="siem-container">
          <div className="siem-hero-card cs-hero-card">
            <div className="siem-hero-grid">

              <div className="siem-hero-left">
                <div className="siem-badge cs-badge">
                  <span className="siem-badge-dot" />
                  CLOUD SECURITY
                </div>

                <h1 className="siem-hero-title cs-hero-title">
                  Cloud Security for the <span className="gradient-text">Digital Era</span>
                </h1>

                <p className="siem-hero-desc cs-hero-desc">
                  Protect your cloud environments, secure sensitive data, and maintain control over your digital infrastructure with a proactive approach to cloud security.
                </p>

                <div className="cs-hero-highlights">
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon"></i>
                    <span>Multi-Cloud Security</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon"></i>
                    <span>Identity & Access Control</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon"></i>
                    <span>Continuous Cloud Hardening</span>
                  </div>
                </div>

                <div className="siem-buttons-container">
                  <Link to="/contact" className="siem-btn-primary">
                    <span>Discuss Your Cloud Security Requirements</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <a href="#what-is-cloud-security" className="siem-btn-secondary">
                    Explore Cloud Security
                  </a>
                </div>
              </div>

              <div className="siem-hero-right">
                <div className="cs-hero-graphic-card">
                  <div className="cs-graphic-header">
                    <div className="cs-graphic-status">
                      <span className="cs-status-pulse"></span>
                      <span className="cs-status-text">CLOUD DEFENSE SHIELD ACTIVE</span>
                    </div>
                    <span className="cs-graphic-badge">NETCRADUS UK</span>
                  </div>

                  <div className="cs-graphic-body">
                    <div className="cs-shield-icon-wrapper" style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(56, 189, 248, 0.02) 70%)', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                      <i className="fas fa-cloud-shield cs-hero-shield-icon" style={{ color: '#38bdf8' }}></i>
                      <div className="cs-shield-glow"></div>
                    </div>

                    <div className="cs-metrics-grid">
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">100%</span>
                        <span className="cs-metric-label">Cloud Visibility</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">IAM</span>
                        <span className="cs-metric-label">Least Privilege</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">Shared</span>
                        <span className="cs-metric-label">Responsibility</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS CLOUD SECURITY? */}
      <section id="what-is-cloud-security" className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-cloud"></i> OVERVIEW
            </span>
            <h2 className="siem-section-title">What Is Cloud Security?</h2>
          </div>

          <div className="cs-overview-grid">
            <div className="cs-overview-content">
              <p className="cs-overview-lead">
                Cloud security is the practice of protecting cloud-based infrastructure, applications, platforms, and data from cyber threats, unauthorised access, data loss, and service disruption.
              </p>
              <p className="cs-overview-text">
                As businesses increasingly use cloud services to store information, run applications, and manage operations, security must be built into every layer of the cloud environment.
              </p>
              <p className="cs-overview-text">
                Effective cloud security combines identity and access management, data protection, secure configurations, continuous monitoring, threat detection, and incident response.
              </p>
            </div>

            <div className="cs-overview-cards-col">
              <div className="cs-mini-card">
                <div className="cs-mini-icon-box">
                  <i className="fas fa-user-lock"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Identity & Access Control</h4>
                  <p className="cs-mini-desc">Enforcing strict IAM baselines, MFA, and role-based permissions across cloud resources.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box">
                  <i className="fas fa-sliders"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Configuration Hardening</h4>
                  <p className="cs-mini-desc">Preventing storage exposure, insecure APIs, and misconfigured cloud assets.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box">
                  <i className="fas fa-shield-halved"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Data & Workload Safeguards</h4>
                  <p className="cs-mini-desc">Securing data at rest and in transit while maintaining continuous threat visibility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW DOES CLOUD SECURITY WORK? */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-diagram-project"></i> CLOUD SECURITY LIFECYCLE
            </span>
            <h2 className="siem-section-title">How Does Cloud Security Work?</h2>
            <p className="siem-section-subtitle">
              A continuous 5-step process to assess, secure, protect, monitor, and improve cloud posture.
            </p>
          </div>

          <div className="cs-workflow-grid">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div key={idx} className="cs-workflow-card">
                <div className="cs-workflow-header">
                  <span className="cs-workflow-num" style={{ color: step.color }}>{step.num}</span>
                  <div className="cs-workflow-icon-box" style={{ background: `${step.color}15`, color: step.color, borderColor: `${step.color}40` }}>
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                </div>
                <h3 className="cs-workflow-title">{step.title}</h3>
                <p className="cs-workflow-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMON CLOUD SECURITY RISKS */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-triangle-exclamation"></i> RISK LANDSCAPE
            </span>
            <h2 className="siem-section-title">Common Cloud Security Risks</h2>
            <p className="siem-section-subtitle">
              Understanding primary cloud vulnerabilities to build effective defense mechanisms.
            </p>
          </div>

          <div className="cs-threats-grid">
            {RISKS_DATA.map((risk, idx) => (
              <div key={idx} className="cs-threat-card">
                <div className="cs-threat-icon-box" style={{ color: risk.color, background: `${risk.color}12`, borderColor: `${risk.color}35` }}>
                  <i className={`fas ${risk.icon}`}></i>
                </div>
                <h3 className="cs-threat-title">{risk.title}</h3>
                <p className="cs-threat-desc">{risk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR CLOUD SECURITY CAPABILITIES */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-cubes"></i> CORE CAPABILITIES
            </span>
            <h2 className="siem-section-title">Our Cloud Security Capabilities</h2>
            <p className="siem-section-subtitle">
              Proactive services tailored to secure your cloud environments and sensitive workloads.
            </p>
          </div>

          <div className="cs-capabilities-grid">
            {CAPABILITIES_DATA.map((cap, idx) => (
              <div key={idx} className="cs-capability-card">
                <div className="cs-cap-header">
                  <div className="cs-cap-icon-box">
                    <i className={`fas ${cap.icon}`}></i>
                  </div>
                  <span className="cs-cap-badge">{cap.badge}</span>
                </div>
                <h3 className="cs-cap-title">{cap.title}</h3>
                <p className="cs-cap-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY IS CLOUD SECURITY IMPORTANT? */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-chart-line"></i> VALUE & BENEFITS
            </span>
            <h2 className="siem-section-title">Why Is Cloud Security Important?</h2>
            <p className="siem-section-subtitle">
              Safeguarding data assets, access baselines, and cloud operational resilience.
            </p>
          </div>

          <div className="cs-importance-grid">
            {IMPORTANCE_DATA.map((item, idx) => (
              <div key={idx} className="cs-importance-card">
                <div className="cs-importance-icon-box" style={{ color: item.color, background: `${item.color}15` }}>
                  <i className={`fas ${item.icon}`}></i>
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

      {/* SECTION 7: OUR CLOUD SECURITY APPROACH */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-arrows-spin"></i> METHODOLOGY
            </span>
            <h2 className="siem-section-title">Our Cloud Security Approach</h2>
            <p className="siem-section-subtitle">
              Four structured steps: Assess, Protect, Monitor, and Improve.
            </p>
          </div>

          <div className="cs-approach-grid">
            {APPROACH_STEPS.map((step, idx) => (
              <div key={idx} className="cs-approach-card">
                <div className="cs-approach-step-num" style={{ color: step.color }}>{step.step}</div>
                <div className="cs-approach-icon-box" style={{ color: step.color, background: `${step.color}15`, borderColor: `${step.color}35` }}>
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h3 className="cs-approach-title">{step.name}</h3>
                <p className="cs-approach-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHO NEEDS CLOUD SECURITY? */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-building-user"></i> TARGET ORGANISATIONS
            </span>
            <h2 className="siem-section-title">Who Needs Cloud Security?</h2>
            <p className="siem-section-subtitle">
              Essential cloud protection for organisations across every operational model.
            </p>
          </div>

          <div className="cs-audiences-grid">
            {AUDIENCES_DATA.map((aud, idx) => (
              <div key={idx} className="cs-audience-card">
                <div className="cs-audience-icon-box">
                  <i className={`fas ${aud.icon}`}></i>
                </div>
                <h3 className="cs-audience-title">{aud.title}</h3>
                <p className="cs-audience-desc">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
      <section className="siem-section cs-section cs-faq-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-circle-question"></i> FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="siem-section-title">Cloud Security FAQs</h2>
            <p className="siem-section-subtitle">
              Clear answers to common cloud security and shared responsibility questions.
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
                    aria-controls={`cloud-faq-answer-${idx}`}
                    id={`cloud-faq-header-${idx}`}
                  >
                    <span className="cs-faq-question-text">{faq.q}</span>
                    <i className={`fas fa-chevron-down cs-faq-icon ${isOpen ? 'rotated' : ''}`}></i>
                  </button>
                  {isOpen && (
                    <div
                      id={`cloud-faq-answer-${idx}`}
                      className="cs-faq-answer-body"
                      role="region"
                      aria-labelledby={`cloud-faq-header-${idx}`}
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

      {/* SECTION 10: CALL TO ACTION */}
      <section className="siem-section cs-cta-section">
        <div className="siem-container">
          <div className="cs-cta-box">
            <div className="cs-cta-bg-glow"></div>
            <div className="cs-cta-content">
              <span className="cs-cta-tag">SECURE YOUR CLOUD</span>
              <h2 className="cs-cta-title">Strengthen Your Cloud Security Posture</h2>
              <p className="cs-cta-desc">
                Your cloud environment should support your business without introducing unnecessary security risks.
              </p>
              <p className="cs-cta-subtext">
                Speak with the Netcradus team to explore your security needs and next steps.
              </p>
              <div className="cs-cta-actions">
                <Link to="/contact" className="siem-btn-primary cs-cta-btn">
                  <span>Discuss Your Cloud Security Requirements</span>
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
