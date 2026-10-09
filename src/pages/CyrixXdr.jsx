import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LIFECYCLE_CARDS = [
  {
    title: "AI Powered Engine",
    desc: "Advanced AI threat engine learns, detects, and stops threats faster across all layers.",
    icon: "fa-brain",
    color: "#06b6d4"
  },
  {
    title: "Cross-Layer Detect",
    desc: "Detect hidden threats across endpoint, network, cloud, email, and identity environments.",
    icon: "fa-radar",
    color: "#10b981"
  },
  {
    title: "Contextual Investigate",
    desc: "Gain deep visual context and alert correlation for rapid incident investigation.",
    icon: "fa-magnifying-glass-chart",
    color: "#8b5cf6"
  },
  {
    title: "Automated Respond",
    desc: "Automate and orchestrate real-time response playbooks to contain active breaches.",
    icon: "fa-shield-virus",
    color: "#f59e0b"
  },
  {
    title: "Resilient Recover",
    desc: "Minimize impact, restore affected workloads, and recover operations with confidence.",
    icon: "fa-arrows-rotate",
    color: "#ef4444"
  },
  {
    title: "Continuous Optimize",
    desc: "Continuously strengthen your security posture using predictive threat analytics.",
    icon: "fa-sliders",
    color: "#ec4899"
  }
];

const CAPABILITIES_DATA = [
  {
    title: "AI Threat Detection",
    desc: "Identify advanced persistent threats (APTs) and zero-day exploits before damage occurs.",
    icon: "fa-brain",
    badge: "Detection"
  },
  {
    title: "Real-Time Telemetry Correlation",
    desc: "Correlate security events across endpoints, networks, cloud nodes, email, and identity hubs.",
    icon: "fa-diagram-project",
    badge: "Analytics"
  },
  {
    title: "Automated Response Playbooks",
    desc: "Automatically isolate compromised hosts, revoke access keys, and stop active attacks in real time.",
    icon: "fa-shield-halved",
    badge: "SOAR"
  },
  {
    title: "Proactive Threat Hunting",
    desc: "Enable SOC analysts to hunt stealthy threats using flexible search queries and behavioral metrics.",
    icon: "fa-crosshairs",
    badge: "Hunting"
  },
  {
    title: "Attack Chain Visualization",
    desc: "Visualize multi-stage attack paths and understand adversary behavior across the kill chain.",
    icon: "fa-network-wired",
    badge: "Telemetry"
  },
  {
    title: "Audit-Ready Compliance Reports",
    desc: "Generate comprehensive reports mapped to ISO 27001, PCI DSS, GDPR, and NIST standards.",
    icon: "fa-certificate",
    badge: "Audit"
  },
  {
    title: "Multi-Tenant Management",
    desc: "Manage multiple enterprise units, cloud accounts, or client environments from a single glass panel.",
    icon: "fa-cubes",
    badge: "Enterprise"
  },
  {
    title: "MITRE ATT&CK Framework Mapping",
    desc: "Map and analyze attacker tactics, techniques, and procedures (TTPs) dynamically.",
    icon: "fa-matrix",
    badge: "Framework"
  }
];

const TELEMETRY_NODES = [
  { name: "ENDPOINTS", icon: "fa-desktop" },
  { name: "NETWORK", icon: "fa-network-wired" },
  { name: "EMAIL", icon: "fa-envelope" },
  { name: "CLOUD", icon: "fa-cloud" },
  { name: "IDENTITY", icon: "fa-id-card" },
  { name: "SERVERS", icon: "fa-server" }
];

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Ingest & Correlate",
    desc: "Ingest telemetry from agents, network taps, cloud APIs, and identity providers into a unified stream.",
    icon: "fa-satellite-dish",
    color: "#06b6d4"
  },
  {
    num: "02",
    title: "AI Behavioral Analysis",
    desc: "ML models analyze event telemetry against behavioral baselines and MITRE ATT&CK techniques.",
    icon: "fa-brain",
    color: "#10b981"
  },
  {
    num: "03",
    title: "Alert Prioritization",
    desc: "Group related alerts into unified incident timelines to eliminate alert fatigue for SOC analysts.",
    icon: "fa-triangle-exclamation",
    color: "#8b5cf6"
  },
  {
    num: "04",
    title: "Automated Containment",
    desc: "Trigger automated isolation playbooks for compromised endpoints, IPs, and credentials.",
    icon: "fa-shield-virus",
    color: "#f59e0b"
  },
  {
    num: "05",
    title: "Remediation & Recovery",
    desc: "Restore affected workloads, update security policies, and generate compliance audit logs.",
    icon: "fa-arrows-rotate",
    color: "#ec4899"
  }
];

const VALUE_BENEFITS = [
  {
    title: "90% Reduction in MTTD & MTTR",
    desc: "Accelerate mean time to detect and mean time to respond with automated AI correlation.",
    icon: "fa-gauge-high",
    color: "#06b6d4"
  },
  {
    title: "100% Cross-Layer Visibility",
    desc: "Eliminate security blind spots across endpoint, cloud, network, and identity silos.",
    icon: "fa-eye",
    color: "#10b981"
  },
  {
    title: "Automated Alert Filtering",
    desc: "Filter out noise and false positives so your SOC team focuses only on true threats.",
    icon: "fa-filter-circle-xmark",
    color: "#8b5cf6"
  },
  {
    title: "Zero Trust Enforcement",
    desc: "Dynamically enforce least-privilege policies based on real-time threat scores.",
    icon: "fa-lock",
    color: "#f59e0b"
  },
  {
    title: "Seamless Hybrid Deployment",
    desc: "Deploy on-premises, in cloud environments (AWS/Azure/GCP), or as a managed SOC service.",
    icon: "fa-cloud-arrow-up",
    color: "#ef4444"
  },
  {
    title: "Audit-Ready GRC Compliance",
    desc: "Generate continuous compliance posture reports for regulatory frameworks.",
    icon: "fa-certificate",
    color: "#ec4899"
  }
];

const FAQ_ITEMS = [
  {
    q: "What is the difference between SIEM, EDR, and Cyrix XDR?",
    a: "While EDR focuses on endpoints and SIEM aggregates logs for compliance, Cyrix XDR correlates telemetry across endpoints, networks, cloud workloads, email, and identity systems into unified incident timelines with automated response capabilities."
  },
  {
    q: "How does Cyrix XDR integrate with our existing security tools?",
    a: "Cyrix XDR supports agent-based ingestion, API integrations, syslog feeds, and cloud connectors for AWS, Azure, GCP, Office 365, Fortinet, Palo Alto, and Microsoft Active Directory."
  },
  {
    q: "Can Cyrix XDR automatically isolate compromised endpoints?",
    a: "Yes. Cyrix XDR features automated containment playbooks that can instantly isolate compromised hosts, terminate malicious processes, and revoke compromised user credentials."
  },
  {
    q: "Does Cyrix XDR support multi-tenant MSP / MSSP environments?",
    a: "Yes. Cyrix XDR provides role-based multi-tenancy allowing managed service providers to manage multiple client environments from a single unified console."
  },
  {
    q: "What compliance standards does Cyrix XDR report against?",
    a: "Cyrix XDR automatically maps incident telemetry and security posture controls to ISO 27001, PCI DSS, GDPR, NIS2, and NIST Cybersecurity Frameworks."
  },
  {
    q: "How fast can Cyrix XDR be deployed?",
    a: "Lightweight agent deployment and cloud connector configuration can typically be completed within 24 to 48 hours for enterprise environments."
  }
];

export default function CyrixXdr() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "CYRIX XDR | Extended Detection & Response Platform | Netcradus UK";
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="siem-page cyber-security-page cloud-security-page cyrix-xdr-page">

      {/* SECTION 1: HERO */}
      <section className="siem-hero-section cs-hero-section">
        <div className="siem-container">
          <div className="siem-hero-card cs-hero-card">
            <div className="siem-hero-grid">

              <div className="siem-hero-left">
                <div className="siem-badge cs-badge">
                  <span className="siem-badge-dot" />
                  EXTENDED DETECTION & RESPONSE PLATFORM
                </div>

                <h1 className="siem-hero-title cs-hero-title">
                  CYRIX XDR — Extended Threat Detection <br />
                  <span className="gradient-text">&amp; Automated Response.</span>
                </h1>

                <p className="siem-hero-desc cs-hero-desc">
                  Cyrix XDR delivers AI-powered threat detection, automated response, and unified visibility across endpoints, networks, cloud environments, and identities.
                </p>

                <div className="cs-hero-highlights">
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" />
                    <span>AI Threat Correlation & Detection</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" />
                    <span>Cross-Domain Telemetry Ingestion</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" />
                    <span>Automated Sub-15m Containment</span>
                  </div>
                </div>

                <div className="siem-buttons-container">
                  <Link to="/contact" className="siem-btn-primary">
                    <span>Request a Cyrix XDR Demo</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                  <a href="#capabilities" className="siem-btn-secondary">
                    Explore Capabilities
                  </a>
                </div>
              </div>

              <div className="siem-hero-right">
                <div className="cs-hero-graphic-card">
                  <div className="cs-graphic-header">
                    <div className="cs-graphic-status">
                      <span className="cs-status-pulse" />
                      <span className="cs-status-text">CYRIX ENGINE ACTIVE</span>
                    </div>
                    <span className="cs-graphic-badge">NETCRADUS UK</span>
                  </div>

                  <div className="cs-graphic-body">
                    <div style={{ width: '100%', overflow: 'hidden', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.12)', background: 'rgba(5, 2, 8, 0.8)', padding: '8px', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)' }}>
                      <img
                        src={`${import.meta.env.BASE_URL}assets/cyrix-dashboard.png`}
                        alt="CYRIX Cyber Defense Platform Dashboard"
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', objectFit: 'cover' }}
                      />
                    </div>

                    <div className="cs-metrics-grid" style={{ marginTop: '1rem' }}>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">100%</span>
                        <span className="cs-metric-label">Cross-Domain Telemetry</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">&lt;15m</span>
                        <span className="cs-metric-label">Auto Containment SLA</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">Zero</span>
                        <span className="cs-metric-label">Data Silos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: AI THREAT DETECTION LIFECYCLE */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-brain" /> AI THREAT ENGINE
            </span>
            <h2 className="siem-section-title">End-to-End XDR Lifecycle</h2>
            <p className="siem-section-subtitle">
              Cyrix XDR transforms fragmented security telemetry into coordinated, machine-speed cyber defense.
            </p>
          </div>

          <div className="cs-capabilities-grid">
            {LIFECYCLE_CARDS.map((card, idx) => (
              <div key={idx} className="cs-capability-card">
                <div className="cs-cap-header">
                  <div
                    className="cs-cap-icon-box"
                    style={{ color: card.color, background: `${card.color}15` }}
                  >
                    <i className={`fas ${card.icon}`} />
                  </div>
                </div>
                <h3 className="cs-cap-title">{card.title}</h3>
                <p className="cs-cap-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CYRIX XDR? */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-crosshairs" /> UNIFIED VISIBILITY
            </span>
            <h2 className="siem-section-title">Why CYRIX XDR?</h2>
            <p className="siem-section-subtitle">
              Cyrix XDR unifies telemetry data from across your enterprise network to deliver complete visual context, immediate incident correlation, and smart containment actions.
            </p>
          </div>

          <div className="cs-overview-grid">
            <div className="cs-overview-content">
              <p className="cs-overview-lead">
                Traditional point security solutions operate in isolation, generating fragmented alerts that slow down response times. Cyrix XDR breaks down data silos to correlate events across all vectors.
              </p>
              <p className="cs-overview-text">
                By ingesting logs and telemetry across endpoints, network traffic, cloud nodes, identity providers, and email streams, Cyrix XDR establishes unified attack timelines that illuminate hidden cyber threats.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 138, 31, 0.15)', border: '1px solid rgba(255, 138, 31, 0.3)', color: '#ff8a1f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-check" style={{ fontSize: '0.75rem' }} />
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0' }}>Break down data silos across endpoint, cloud, and network logs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 138, 31, 0.15)', border: '1px solid rgba(255, 138, 31, 0.3)', color: '#ff8a1f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-check" style={{ fontSize: '0.75rem' }} />
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0' }}>Correlate attack events across multiple security layers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 138, 31, 0.15)', border: '1px solid rgba(255, 138, 31, 0.3)', color: '#ff8a1f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-check" style={{ fontSize: '0.75rem' }} />
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0' }}>Reduce alert fatigue with automated prioritization engines</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255, 138, 31, 0.15)', border: '1px solid rgba(255, 138, 31, 0.3)', color: '#ff8a1f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-check" style={{ fontSize: '0.75rem' }} />
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0' }}>Automate containment responses with high confidence</span>
                </div>
              </div>
            </div>

            <div className="cs-overview-cards-col">
              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(6, 182, 212, 0.15)', borderColor: 'rgba(6, 182, 212, 0.3)', color: '#06b6d4' }}>
                  <i className="fas fa-layer-group"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Break Down Security Silos</h4>
                  <p className="cs-mini-desc">Correlate signals from endpoints, networks, cloud workloads, and identity hubs into single incident graphs.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(255, 138, 31, 0.15)', borderColor: 'rgba(255, 138, 31, 0.3)', color: '#ff8a1f' }}>
                  <i className="fas fa-bolt"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Sub-15m Automated Containment</h4>
                  <p className="cs-mini-desc">Trigger automated playbooks to isolate infected hosts, revoke compromised tokens, and block malicious IPs instantly.</p>
                </div>
              </div>

              <div className="cs-mini-card" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '1rem', padding: '1.25rem 1.5rem' }}>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ff8a1f', textAlign: 'center' }}>
                  Unified Telemetry Sources
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.65rem' }}>
                  {TELEMETRY_NODES.map((node, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 0.75rem', borderRadius: '10px', background: 'rgba(5, 2, 8, 0.6)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <i className={`fas ${node.icon}`} style={{ color: '#06b6d4', fontSize: '0.85rem' }} />
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff' }}>{node.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: POWERFUL CAPABILITIES */}
      <section id="capabilities" className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-cubes" /> CORE CAPABILITIES
            </span>
            <h2 className="siem-section-title">Powerful Capabilities</h2>
            <p className="siem-section-subtitle">
              Everything your SOC team needs to detect, investigate, and respond — in one unified platform.
            </p>
          </div>

          <div className="cs-capabilities-grid">
            {CAPABILITIES_DATA.map((cap, idx) => (
              <div key={idx} className="cs-capability-card">
                <div className="cs-cap-header">
                  <div className="cs-cap-icon-box">
                    <i className={`fas ${cap.icon}`} />
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

      {/* SECTION 5: DETECTION & INVESTIGATION WORKFLOW */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-arrows-spin" /> INVESTIGATION WORKFLOW
            </span>
            <h2 className="siem-section-title">How CYRIX XDR Stops Cyber Attacks</h2>
            <p className="siem-section-subtitle">
              A structured five-step lifecycle to continuously defend, correlate, investigate, contain, and remediate.
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

      {/* SECTION 6: ONE PLATFORM COMPLETE VISIBILITY */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-desktop" /> UNIFIED DEFENSE
            </span>
            <h2 className="siem-section-title">One Platform. Complete Visibility.</h2>
            <p className="siem-section-subtitle">
              See every threat. Understand every risk. Respond to active attacks with immediate speed and precision.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', paddingTop: '1rem' }}>
            <div style={{
              width: '100%',
              maxWidth: '1024px',
              marginInline: 'auto',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              background: '#090415',
              padding: '12px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              overflow: 'hidden'
            }}>
              <img
                src={`${import.meta.env.BASE_URL}assets/cyrix-dashboard.png`}
                alt="CYRIX Cyber Defense Platform Dashboard Screenshot"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  marginInline: 'auto',
                  borderRadius: '16px',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: BENEFITS & VALUE */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-chart-line" /> VALUE & IMPACT
            </span>
            <h2 className="siem-section-title">Benefits of CYRIX XDR</h2>
            <p className="siem-section-subtitle">
              Empower your security teams to outpace sophisticated threat actors.
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

      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS */}
      <section className="siem-section bg-dark cs-section cs-faq-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-circle-question" /> FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="siem-section-title">Cyrix XDR FAQs</h2>
            <p className="siem-section-subtitle">
              Get clear, direct answers about Cyrix XDR deployment, data ingestion, and SOC integration.
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
                    aria-controls={`xdr-faq-answer-${idx}`}
                    id={`xdr-faq-header-${idx}`}
                  >
                    <span className="cs-faq-question-text">{faq.q}</span>
                    <i className={`fas fa-chevron-down cs-faq-icon ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div
                      id={`xdr-faq-answer-${idx}`}
                      className="cs-faq-answer-body"
                      role="region"
                      aria-labelledby={`xdr-faq-header-${idx}`}
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

      {/* SECTION 9: CALL TO ACTION */}
      <section className="siem-section cs-cta-section">
        <div className="siem-container">
          <div className="cs-cta-box">
            <div className="cs-cta-bg-glow" />
            <div className="cs-cta-content">
              <span className="cs-cta-tag">GET PROTECTED</span>
              <h2 className="cs-cta-title">Stay Ahead of Every Threat</h2>
              <p className="cs-cta-desc">
                AI-powered Extended Detection & Response that learns and evolves with every attack pattern. Request your live Cyrix XDR demonstration today.
              </p>
              <p className="cs-cta-subtext">
                Speak with the Netcradus team to discuss your Cyrix XDR deployment.
              </p>
              <div className="cs-cta-actions">
                <Link to="/contact" className="siem-btn-primary cs-cta-btn">
                  <span>Request a Cyrix XDR Demo</span>
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
