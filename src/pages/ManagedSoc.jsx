import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Collect Security Data",
    desc: "Gather relevant security logs and telemetry from supported sources, such as endpoints, servers, networks, applications, identity systems, and cloud environments.",
    icon: "fa-database",
    color: "#06b6d4"
  },
  {
    num: "02",
    title: "Monitor Security Events",
    desc: "Analyse available security events and alerts to identify unusual behaviour, suspicious activity, and potential indicators of compromise.",
    icon: "fa-eye",
    color: "#10b981"
  },
  {
    num: "03",
    title: "Investigate and Prioritise Alerts",
    desc: "Assess alerts using context, severity, affected assets, and potential business impact to distinguish meaningful threats from routine activity.",
    icon: "fa-magnifying-glass-chart",
    color: "#8b5cf6"
  },
  {
    num: "04",
    title: "Respond to Security Incidents",
    desc: "Follow agreed incident response procedures to investigate threats, escalate significant findings, and support containment and remediation.",
    icon: "fa-user-shield",
    color: "#f59e0b"
  },
  {
    num: "05",
    title: "Report and Improve",
    desc: "Provide relevant findings, incident summaries, recommendations, and security insights to help improve visibility and strengthen security controls.",
    icon: "fa-arrows-rotate",
    color: "#ec4899"
  }
];

const CHALLENGES_DATA = [
  {
    title: "Alert Overload",
    desc: "Security tools can generate large volumes of alerts. Effective triage helps teams prioritise the events that require further investigation.",
    icon: "fa-bell-slash",
    color: "#ef4444"
  },
  {
    title: "Limited Security Resources",
    desc: "Organisations may not have enough in-house analysts or specialist expertise to investigate every security event consistently.",
    icon: "fa-users-slash",
    color: "#f97316"
  },
  {
    title: "Delayed Threat Detection",
    desc: "Without appropriate monitoring and investigation processes, suspicious activity may remain unnoticed for longer than necessary.",
    icon: "fa-clock-rotate-left",
    color: "#8b5cf6"
  },
  {
    title: "Complex IT Environments",
    desc: "Security events across endpoints, networks, cloud services, and applications can be difficult to correlate without sufficient visibility.",
    icon: "fa-network-wired",
    color: "#06b6d4"
  },
  {
    title: "Inconsistent Incident Response",
    desc: "Unclear responsibilities and untested procedures can delay decisions during a security incident.",
    icon: "fa-triangle-exclamation",
    color: "#3b82f6"
  },
  {
    title: "Limited Security Visibility",
    desc: "Incomplete logging or disconnected monitoring tools can make it harder to understand activity across an organisation's environment.",
    icon: "fa-eye-slash",
    color: "#ec4899"
  }
];

const CAPABILITIES_DATA = [
  {
    title: "Security Monitoring",
    desc: "Monitor available security telemetry and alerts from supported systems to help identify suspicious activity.",
    icon: "fa-display",
    badge: "Telemetry"
  },
  {
    title: "Alert Triage and Investigation",
    desc: "Review and prioritise security alerts, investigate relevant events, and help determine the appropriate next steps.",
    icon: "fa-filter",
    badge: "Triage"
  },
  {
    title: "Threat Detection Support",
    desc: "Identify potentially malicious patterns and indicators using available security tools, detection rules, and investigation processes.",
    icon: "fa-radar",
    badge: "Detection"
  },
  {
    title: "Incident Response Coordination",
    desc: "Support incident investigation, escalation, containment planning, and remediation according to agreed responsibilities and procedures.",
    icon: "fa-fire-extinguisher",
    badge: "Coordination"
  },
  {
    title: "Security Reporting",
    desc: "Provide relevant information about security events, investigations, recurring risks, and recommended improvements.",
    icon: "fa-file-chart-column",
    badge: "Reporting"
  },
  {
    title: "Detection and Process Improvement",
    desc: "Use investigation findings and recurring alert patterns to help improve detection coverage and operational processes.",
    icon: "fa-chart-line-up",
    badge: "Optimization"
  }
];

const IMPORTANCE_DATA = [
  {
    title: "Improve Threat Visibility",
    desc: "Bring relevant security events together to help teams understand activity across supported systems.",
    icon: "fa-eye",
    color: "#06b6d4"
  },
  {
    title: "Reduce Investigation Workload",
    desc: "Help security teams prioritise important alerts and focus their attention on higher-risk events.",
    icon: "fa-list-check",
    color: "#10b981"
  },
  {
    title: "Support Faster Decision-Making",
    desc: "Structured alert investigation and escalation processes can help teams make more informed security decisions.",
    icon: "fa-bolt",
    color: "#8b5cf6"
  },
  {
    title: "Strengthen Incident Readiness",
    desc: "Defined response procedures help organisations prepare for investigation, escalation, and recovery.",
    icon: "fa-shield-heart",
    color: "#f59e0b"
  },
  {
    title: "Support Internal Security Teams",
    desc: "A managed SOC can complement existing IT and security teams by providing additional monitoring and investigation support.",
    icon: "fa-people-group",
    color: "#ec4899"
  }
];

const APPROACH_STEPS = [
  {
    step: "01",
    name: "Understand",
    desc: "Review your environment, critical assets, existing security tools, business priorities, and monitoring requirements.",
    icon: "fa-magnifying-glass",
    color: "#06b6d4"
  },
  {
    step: "02",
    name: "Connect",
    desc: "Identify suitable security data sources and establish agreed monitoring and escalation processes.",
    icon: "fa-plug-circle-check",
    color: "#10b981"
  },
  {
    step: "03",
    name: "Monitor and Investigate",
    desc: "Review available alerts, investigate suspicious activity, and prioritise findings based on risk and context.",
    icon: "fa-radar",
    color: "#8b5cf6"
  },
  {
    step: "04",
    name: "Respond and Improve",
    desc: "Coordinate agreed response actions, communicate findings, and recommend improvements to strengthen security operations.",
    icon: "fa-chart-line",
    color: "#f59e0b"
  }
];

const AUDIENCES_DATA = [
  {
    title: "Small and Medium-Sized Businesses",
    desc: "Organisations that need security monitoring support without building a large internal SOC.",
    icon: "fa-store"
  },
  {
    title: "Large Enterprises",
    desc: "Businesses that need additional visibility and support across complex IT environments.",
    icon: "fa-building-columns"
  },
  {
    title: "Cloud-First Organisations",
    desc: "Companies that rely on cloud platforms, applications, and remote access.",
    icon: "fa-cloud"
  },
  {
    title: "Technology Companies",
    desc: "Organisations that need to monitor applications, infrastructure, identities, and customer-facing services.",
    icon: "fa-laptop-code"
  },
  {
    title: "Organisations with Internal Security Teams",
    desc: "Businesses looking to supplement existing security operations and investigation capacity.",
    icon: "fa-user-group"
  }
];

const FAQ_ITEMS = [
  {
    q: "What does SOC stand for?",
    a: "SOC stands for Security Operations Centre. It is a function that monitors security activity, investigates potential threats, and coordinates security response activities."
  },
  {
    q: "What is a Managed SOC?",
    a: "A Managed SOC is a security service delivered by an external provider to support activities such as security monitoring, alert investigation, threat detection, and incident escalation."
  },
  {
    q: "How is a Managed SOC different from an internal SOC?",
    a: "An internal SOC is operated by an organisation's own team. A Managed SOC uses an external service provider for some or all agreed security operations. The best model depends on resources, requirements, and the service scope."
  },
  {
    q: "Does a Managed SOC provide 24/7 monitoring?",
    a: "Some Managed SOC services offer continuous 24/7 monitoring, while others operate within defined service hours. Organisations should confirm monitoring coverage, escalation arrangements, and response commitments in the service agreement."
  },
  {
    q: "What is the difference between a SOC and a SIEM?",
    a: "A SOC is the security operations function involving people, processes, and technologies. A SIEM is a technology platform that collects and analyses security data to support detection, investigation, and monitoring."
  },
  {
    q: "Can a Managed SOC respond to incidents?",
    a: "Depending on the agreed service scope, a Managed SOC may investigate alerts, escalate incidents, and support containment or remediation. Responsibilities and authorisation should be defined before response actions are taken."
  },
  {
    q: "Does a Managed SOC replace an internal IT team?",
    a: "Not necessarily. A Managed SOC can complement internal IT and security teams. Responsibilities should be clearly defined so monitoring, investigation, escalation, and remediation work together effectively."
  }
];

export default function ManagedSoc() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Managed SOC Services for Continuous Cybersecurity Monitoring | Netcradus UK";
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="siem-page cyber-security-page managed-soc-page">

      {/* SECTION 1: HERO */}
      <section className="siem-hero-section cs-hero-section">
        <div className="siem-container">
          <div className="siem-hero-card cs-hero-card">
            <div className="siem-hero-grid">

              <div className="siem-hero-left">
                <div className="siem-badge cs-badge" style={{ background: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}>
                  <span className="siem-badge-dot" style={{ backgroundColor: '#10b981' }} />
                  MANAGED SOC SERVICES
                </div>

                <h1 className="siem-hero-title cs-hero-title">
                  Managed SOC Services for <span className="gradient-text">Continuous Cybersecurity Monitoring</span>
                </h1>

                <p className="siem-hero-desc cs-hero-desc">
                  Strengthen your security operations with continuous threat monitoring, security alert investigation, and incident response support designed to help your organisation stay ahead of evolving cyber threats.
                </p>

                <div className="cs-hero-highlights">
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" style={{ color: '#10b981' }}></i>
                    <span>Threat Detection & Alert Triage</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" style={{ color: '#10b981' }}></i>
                    <span>Incident Response Support</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" style={{ color: '#10b981' }}></i>
                    <span>Security Telemetry Correlation</span>
                  </div>
                </div>

                <div className="siem-buttons-container">
                  <Link to="/contact" className="siem-btn-primary">
                    <span>Discuss Your Managed SOC Requirements</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <a href="#what-is-managed-soc" className="siem-btn-secondary">
                    Explore Managed SOC
                  </a>
                </div>
              </div>

              <div className="siem-hero-right">
                <div className="cs-hero-graphic-card">
                  <div className="cs-graphic-header">
                    <div className="cs-graphic-status">
                      <span className="cs-status-pulse"></span>
                      <span className="cs-status-text">SOC OPERATIONS MONITORING ACTIVE</span>
                    </div>
                    <span className="cs-graphic-badge">NETCRADUS UK</span>
                  </div>

                  <div className="cs-graphic-body">
                    <div className="cs-shield-icon-wrapper" style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.02) 70%)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                      <i className="fas fa-headset cs-hero-shield-icon" style={{ color: '#10b981' }}></i>
                      <div className="cs-shield-glow"></div>
                    </div>

                    <div className="cs-metrics-grid">
                      <div className="cs-metric-card">
                        <span className="cs-metric-val" style={{ color: '#10b981' }}>Log Data</span>
                        <span className="cs-metric-label">Telemetry Collection</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val" style={{ color: '#10b981' }}>Triage</span>
                        <span className="cs-metric-label">Alert Analysis</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val" style={{ color: '#10b981' }}>Response</span>
                        <span className="cs-metric-label">Incident Escalate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS A MANAGED SOC? */}
      <section id="what-is-managed-soc" className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-eye"></i> OVERVIEW
            </span>
            <h2 className="siem-section-title">What Is a Managed SOC?</h2>
          </div>

          <div className="cs-overview-grid">
            <div className="cs-overview-content">
              <p className="cs-overview-lead" style={{ color: '#10b981' }}>
                A Managed Security Operations Centre (Managed SOC) is a security service that helps organisations monitor their digital environments, investigate suspicious activity, and respond to potential cyber threats.
              </p>
              <p className="cs-overview-text">
                A Managed SOC brings together security analysts, monitoring processes, and security technologies to improve visibility across systems, networks, endpoints, and cloud environments.
              </p>
              <p className="cs-overview-text">
                Instead of relying entirely on an internal security team, organisations can use managed SOC services to support threat detection, alert triage, incident investigation, and security operations.
              </p>
              <p className="cs-overview-text">
                The scope of monitoring, service coverage, and response activities depends on the agreed service model.
              </p>
            </div>

            <div className="cs-overview-cards-col">
              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#10b981' }}>
                  <i className="fas fa-users-gear"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Security Analysts & Processes</h4>
                  <p className="cs-mini-desc">Combining skilled analysts, structured workflows, and detection tech into unified operations.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#10b981' }}>
                  <i className="fas fa-chart-network"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Extended Visibility</h4>
                  <p className="cs-mini-desc">Monitoring security signals across endpoints, servers, networks, identity systems, and cloud assets.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#10b981' }}>
                  <i className="fas fa-sliders"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Flexible Service Scope</h4>
                  <p className="cs-mini-desc">Tailoring monitoring hours, escalation pathways, and incident support to fit agreed operational needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW DOES A MANAGED SOC WORK? */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-diagram-project"></i> OPERATIONAL WORKFLOW
            </span>
            <h2 className="siem-section-title">How Does a Managed SOC Work?</h2>
            <p className="siem-section-subtitle">
              A structured five-step lifecycle to collect telemetry, monitor events, triage alerts, respond to incidents, and improve defense.
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

      {/* SECTION 4: COMMON SECURITY CHALLENGES */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-triangle-exclamation"></i> CHALLENGES ADDRESSED
            </span>
            <h2 className="siem-section-title">Common Security Challenges Managed SOC Helps Address</h2>
            <p className="siem-section-subtitle">
              Overcoming key operational friction points that leave digital environments exposed to risk.
            </p>
          </div>

          <div className="cs-threats-grid">
            {CHALLENGES_DATA.map((ch, idx) => (
              <div key={idx} className="cs-threat-card">
                <div className="cs-threat-icon-box" style={{ color: ch.color, background: `${ch.color}12`, borderColor: `${ch.color}35` }}>
                  <i className={`fas ${ch.icon}`}></i>
                </div>
                <h3 className="cs-threat-title">{ch.title}</h3>
                <p className="cs-threat-desc">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR MANAGED SOC CAPABILITIES */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-cubes"></i> CORE CAPABILITIES
            </span>
            <h2 className="siem-section-title">Our Managed SOC Capabilities</h2>
            <p className="siem-section-subtitle">
              Targeted security operations services designed to support threat detection, investigation, and incident escalation.
            </p>
          </div>

          <div className="cs-capabilities-grid">
            {CAPABILITIES_DATA.map((cap, idx) => (
              <div key={idx} className="cs-capability-card">
                <div className="cs-cap-header">
                  <div className="cs-cap-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#10b981' }}>
                    <i className={`fas ${cap.icon}`}></i>
                  </div>
                  <span className="cs-cap-badge" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.25)' }}>{cap.badge}</span>
                </div>
                <h3 className="cs-cap-title">{cap.title}</h3>
                <p className="cs-cap-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY IS A MANAGED SOC IMPORTANT? */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-chart-line"></i> VALUE & IMPACT
            </span>
            <h2 className="siem-section-title">Why Is a Managed SOC Important?</h2>
            <p className="siem-section-subtitle">
              Delivering enhanced visibility, structured triage, and strengthened incident readiness.
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

      {/* SECTION 7: OUR MANAGED SOC APPROACH */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-arrows-spin"></i> METHODOLOGY
            </span>
            <h2 className="siem-section-title">Our Managed SOC Approach</h2>
            <p className="siem-section-subtitle">
              Four clear steps: Understand, Connect, Monitor & Investigate, and Respond & Improve.
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

      {/* SECTION 8: WHO CAN BENEFIT? */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-building-user"></i> TARGET ORGANISATIONS
            </span>
            <h2 className="siem-section-title">Who Can Benefit from Managed SOC Services?</h2>
            <p className="siem-section-subtitle">
              Security operations support tailored for diverse operational needs and team sizes.
            </p>
          </div>

          <div className="cs-audiences-grid">
            {AUDIENCES_DATA.map((aud, idx) => (
              <div key={idx} className="cs-audience-card">
                <div className="cs-audience-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#10b981' }}>
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
            <h2 className="siem-section-title">Managed SOC FAQs</h2>
            <p className="siem-section-subtitle">
              Get answers to essential questions about Managed SOC operations, SIEM differences, and monitoring scope.
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
                    aria-controls={`soc-faq-answer-${idx}`}
                    id={`soc-faq-header-${idx}`}
                  >
                    <span className="cs-faq-question-text">{faq.q}</span>
                    <i className={`fas fa-chevron-down cs-faq-icon ${isOpen ? 'rotated' : ''}`}></i>
                  </button>
                  {isOpen && (
                    <div
                      id={`soc-faq-answer-${idx}`}
                      className="cs-faq-answer-body"
                      role="region"
                      aria-labelledby={`soc-faq-header-${idx}`}
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
          <div className="cs-cta-box" style={{ background: 'linear-gradient(135deg, rgba(14, 7, 25, 0.95) 0%, rgba(16, 185, 129, 0.15) 100%)', borderColor: 'rgba(16, 185, 129, 0.35)' }}>
            <div className="cs-cta-bg-glow" style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)' }}></div>
            <div className="cs-cta-content">
              <span className="cs-cta-tag" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>STRENGTHEN SECURITY OPERATIONS</span>
              <h2 className="cs-cta-title">Strengthen Your Security Operations</h2>
              <p className="cs-cta-desc">
                Security threats require visibility, informed investigation, and a clear response process.
              </p>
              <p className="cs-cta-subtext">
                Netcradus can discuss your security operations requirements and help you explore an approach aligned with your organisation's environment, risks, and operational priorities.
              </p>
              <div className="cs-cta-actions">
                <Link to="/contact" className="siem-btn-primary cs-cta-btn" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', borderColor: 'rgba(16, 185, 129, 0.4)' }}>
                  <span>Discuss Your Managed SOC Requirements</span>
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
