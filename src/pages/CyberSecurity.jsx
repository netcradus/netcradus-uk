import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Identify Risks",
    desc: "Identify critical systems, devices, applications, user accounts, and sensitive information. Assess vulnerabilities and determine which assets need the highest level of protection.",
    icon: "fa-magnifying-glass-chart",
    color: "#06b6d4"
  },
  {
    num: "02",
    title: "Protect Systems and Data",
    desc: "Apply security controls such as firewalls, access permissions, multifactor authentication, encryption, secure configurations, and software updates to reduce exposure to threats.",
    icon: "fa-lock-keyhole",
    color: "#10b981"
  },
  {
    num: "03",
    title: "Detect Suspicious Activity",
    desc: "Monitor available security logs, network traffic, endpoints, and user activity to identify unusual behaviour and potential indicators of compromise.",
    icon: "fa-radar",
    color: "#8b5cf6"
  },
  {
    num: "04",
    title: "Respond to Threats",
    desc: "Investigate alerts, assess their impact, contain confirmed incidents, and coordinate remediation to limit damage and prevent further compromise.",
    icon: "fa-user-shield",
    color: "#f59e0b"
  },
  {
    num: "05",
    title: "Recover and Improve",
    desc: "Restore affected systems from verified backups where needed, validate recovery, review the incident, and strengthen controls to reduce the likelihood of recurrence.",
    icon: "fa-arrows-rotate",
    color: "#ec4899"
  }
];

const THREATS_DATA = [
  {
    title: "Phishing and Social Engineering",
    desc: "Deceptive attempts to trick individuals into revealing sensitive credentials, financial data, or granting unauthorized access to corporate networks.",
    icon: "fa-envelope-open-text",
    color: "#ef4444"
  },
  {
    title: "Ransomware and Malware",
    desc: "Malicious software designed to encrypt critical files, disrupt operations, exfiltrate confidential data, or demand extortion payments.",
    icon: "fa-bug-slash",
    color: "#f97316"
  },
  {
    title: "Identity and Account Compromise",
    desc: "Unauthorized access to user accounts or privileged credentials resulting from weak authentication, credential stuffing, or session hijacking.",
    icon: "fa-user-lock",
    color: "#8b5cf6"
  },
  {
    title: "Network and Application Vulnerabilities",
    desc: "Flaws and misconfigurations in software, APIs, firewalls, or network infrastructure that allow unauthorized access or lateral movement.",
    icon: "fa-network-wired",
    color: "#06b6d4"
  },
  {
    title: "Cloud and Data Security Risks",
    desc: "Misconfigurations, unauthorized cloud resource access, and insecure data storage in public, private, or hybrid cloud environments.",
    icon: "fa-cloud-shield",
    color: "#3b82f6"
  }
];

const CAPABILITIES_DATA = [
  {
    title: "Threat Prevention and Security Hardening",
    desc: "Implement proactive defensive controls, system hardening, and perimeter security to minimize exposure.",
    icon: "fa-shield-halved",
    badge: "Prevention"
  },
  {
    title: "Threat Detection and Monitoring",
    desc: "Continuously monitor available security logs, network traffic, and system behavior to identify anomalies and potential breaches.",
    icon: "fa-eye",
    badge: "24/7 Monitoring"
  },
  {
    title: "Vulnerability Assessment",
    desc: "Regularly audit systems, applications, and network infrastructure to discover and remediate security flaws.",
    icon: "fa-clipboard-check",
    badge: "Audit & Fix"
  },
  {
    title: "Identity and Access Security",
    desc: "Enforce strict access controls, multi-factor authentication, and privileged identity management across the enterprise.",
    icon: "fa-fingerprint",
    badge: "Zero Trust"
  },
  {
    title: "Incident Response and Recovery",
    desc: "Rapidly contain security breaches, isolate compromised assets, minimize damage, and restore safe operations.",
    icon: "fa-fire-extinguisher",
    badge: "Rapid Response"
  },
  {
    title: "Security Risk and Compliance Support",
    desc: "Align security controls with regulatory frameworks and standards to manage organizational risk effectively.",
    icon: "fa-file-contract",
    badge: "Governance"
  }
];

const IMPORTANCE_DATA = [
  {
    title: "Protect Sensitive Information",
    desc: "Safeguard confidential customer data, intellectual property, and internal records from data breaches and leaks.",
    icon: "fa-shield-heart",
    color: "#06b6d4"
  },
  {
    title: "Support Business Continuity",
    desc: "Maintain uninterrupted operations and avoid costly downtime caused by malicious attacks or system outages.",
    icon: "fa-arrows-spin",
    color: "#10b981"
  },
  {
    title: "Reduce Security Risk",
    desc: "Proactively address vulnerabilities and minimize overall operational and financial exposure.",
    icon: "fa-chart-line-down",
    color: "#8b5cf6"
  },
  {
    title: "Build Customer Confidence",
    desc: "Demonstrate a strong commitment to privacy and data protection to foster trust with clients and partners.",
    icon: "fa-handshake-simple",
    color: "#f59e0b"
  },
  {
    title: "Improve Incident Readiness",
    desc: "Prepare your organization to detect, respond to, and recover swiftly from unexpected security events.",
    icon: "fa-gauge-high",
    color: "#ec4899"
  }
];

const APPROACH_STEPS = [
  {
    step: "01",
    name: "Assess",
    desc: "Understand your assets, exposures, and security priorities.",
    icon: "fa-magnifying-glass",
    color: "#06b6d4"
  },
  {
    step: "02",
    name: "Secure",
    desc: "Implement safeguards appropriate to your environment.",
    icon: "fa-lock",
    color: "#10b981"
  },
  {
    step: "03",
    name: "Monitor",
    desc: "Review available security signals and investigate anomalies.",
    icon: "fa-desktop",
    color: "#8b5cf6"
  },
  {
    step: "04",
    name: "Improve",
    desc: "Learn from findings and continuously refine security controls.",
    icon: "fa-chart-line",
    color: "#f59e0b"
  }
];

const AUDIENCES_DATA = [
  {
    title: "Small and medium-sized businesses",
    desc: "Protecting growing operations, customer records, and digital workflows against common and automated cyber threats.",
    icon: "fa-store"
  },
  {
    title: "Large enterprises",
    desc: "Safeguarding complex distributed environments, multi-site infrastructure, and critical corporate assets.",
    icon: "fa-building-columns"
  },
  {
    title: "Cloud-first organisations",
    desc: "Securing dynamic cloud workloads, SaaS environments, and API integrations across multiple providers.",
    icon: "fa-cloud"
  },
  {
    title: "Technology companies",
    desc: "Defending proprietary source code, software supply chains, and customer-facing digital platforms.",
    icon: "fa-laptop-code"
  },
  {
    title: "Regulated organisations",
    desc: "Meeting stringent industry standards, compliance mandates, and privacy regulations through structured security controls.",
    icon: "fa-scale-balanced"
  }
];

const FAQ_ITEMS = [
  {
    q: "What is cyber security in simple terms?",
    a: "Cybersecurity is the practice of protecting connected systems, networks, devices, and digital data from cyber threats, unauthorized access, and malicious attacks."
  },
  {
    q: "How does cyber security work?",
    a: "Cybersecurity works by combining defensive technology, operational processes, and user awareness into a continuous loop of identifying risks, securing assets, monitoring activity, responding to incidents, and recovering systems."
  },
  {
    q: "What are the most common cyber threats?",
    a: "Common cyber threats include phishing scams, malware and ransomware infections, credential theft, network exploitation, and cloud security misconfigurations."
  },
  {
    q: "What is the difference between cyber security and information security?",
    a: "Cybersecurity specifically focuses on protecting digital data, networks, and internet-connected systems from cyber threats, whereas information security is a broader discipline that protects all data types, including physical paper documents and offline assets."
  },
  {
    q: "Can cyber security prevent every cyberattack?",
    a: "While robust security controls significantly reduce risk and stop the vast majority of threats, no security strategy can guarantee 100% prevention. A comprehensive approach focuses on threat prevention, rapid detection, effective incident response, and fast recovery."
  },
  {
    q: "How can a business improve its cyber security?",
    a: "Businesses can improve their security by implementing multi-factor authentication, keeping software updated, conducting regular vulnerability assessments, training employees on phishing risks, enforcing strict access controls, and maintaining secure backups."
  },
  {
    q: "What is the first step in a cyber security assessment?",
    a: "The first step is identifying and cataloging critical digital assets, systems, data stores, and user identities to understand your threat exposure and prioritize defense priorities."
  }
];

export default function CyberSecurity() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cyber Security for the Digital Era | Netcradus UK";
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="siem-page cyber-security-page">

      {/* SECTION 1: HERO */}
      <section className="siem-hero-section cs-hero-section">
        <div className="siem-container">
          <div className="siem-hero-card cs-hero-card">
            <div className="siem-hero-grid">

              <div className="siem-hero-left">
                <div className="siem-badge cs-badge">
                  <span className="siem-badge-dot" />
                  CYBER SECURITY
                </div>

                <h1 className="siem-hero-title cs-hero-title">
                  Cyber Security for the <span className="gradient-text">Digital Era</span>
                </h1>

                <p className="siem-hero-desc cs-hero-desc">
                  Protect your business, secure your digital assets, and stay prepared for evolving cyber threats with a proactive approach to cybersecurity.
                </p>

                <div className="cs-hero-highlights">
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon"></i>
                    <span>Proactive Cyber Protection</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon"></i>
                    <span>Continuous Risk Reduction</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon"></i>
                    <span>Enterprise Resilience</span>
                  </div>
                </div>

                <div className="siem-buttons-container">
                  <Link to="/contact" className="siem-btn-primary">
                    <span>Get Started</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <a href="#what-is-cybersecurity" className="siem-btn-secondary">
                    Explore Cyber Security
                  </a>
                </div>
              </div>

              <div className="siem-hero-right">
                <div className="cs-hero-graphic-card">
                  <div className="cs-graphic-header">
                    <div className="cs-graphic-status">
                      <span className="cs-status-pulse"></span>
                      <span className="cs-status-text">CYBER DEFENSE MATRIX ACTIVE</span>
                    </div>
                    <span className="cs-graphic-badge">NETCRADUS UK</span>
                  </div>

                  <div className="cs-graphic-body">
                    <div className="cs-shield-icon-wrapper">
                      <i className="fas fa-shield-halved cs-hero-shield-icon"></i>
                      <div className="cs-shield-glow"></div>
                    </div>

                    <div className="cs-metrics-grid">
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">100%</span>
                        <span className="cs-metric-label">Asset Visibility</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">24/7</span>
                        <span className="cs-metric-label">Threat Detection</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">Zero</span>
                        <span className="cs-metric-label">Trust Baseline</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS CYBER SECURITY? */}
      <section id="what-is-cybersecurity" className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-shield-alt"></i> OVERVIEW
            </span>
            <h2 className="siem-section-title">What Is Cyber Security?</h2>
          </div>

          <div className="cs-overview-grid">
            <div className="cs-overview-content">
              <p className="cs-overview-lead">
                Cybersecurity is the practice of protecting computers, networks, applications, cloud environments, and sensitive data from unauthorised access, cyberattacks, damage, and disruption.
              </p>
              <p className="cs-overview-text">
                As businesses become increasingly digital, their exposure to threats such as ransomware, phishing, malware, data breaches, and identity theft also increases. Cybersecurity combines technology, processes, and people to reduce these risks and support secure business operations.
              </p>
              <p className="cs-overview-text">
                At Netcradus, cybersecurity can be presented as a continuous process of understanding risks, implementing safeguards, monitoring suspicious activity, responding to incidents, and improving security over time.
              </p>
            </div>

            <div className="cs-overview-cards-col">
              <div className="cs-mini-card">
                <div className="cs-mini-icon-box">
                  <i className="fas fa-layer-group"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Technology, Processes & People</h4>
                  <p className="cs-mini-desc">Unifying tools, operational guidelines, and human awareness into one robust defense strategy.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box">
                  <i className="fas fa-arrows-spin"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Continuous Process</h4>
                  <p className="cs-mini-desc">Moving beyond static point-in-time checks to ongoing monitoring, response, and posture refinement.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box">
                  <i className="fas fa-vault"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Multi-Layered Asset Protection</h4>
                  <p className="cs-mini-desc">Safeguarding cloud workloads, endpoints, applications, networks, and sensitive enterprise data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW DOES CYBER SECURITY WORK? */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-diagram-project"></i> SECURITY LIFECYCLE
            </span>
            <h2 className="siem-section-title">How Does Cyber Security Work?</h2>
            <p className="siem-section-subtitle">
              A structured five-step lifecycle to continuously defend, detect, and improve your cybersecurity posture.
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

      {/* SECTION 4: KEY CYBERSECURITY THREATS */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-triangle-exclamation"></i> THREAT LANDSCAPE
            </span>
            <h2 className="siem-section-title">Key Cybersecurity Threats</h2>
            <p className="siem-section-subtitle">
              Understanding modern digital attack vectors to effectively protect your organization.
            </p>
          </div>

          <div className="cs-threats-grid">
            {THREATS_DATA.map((threat, idx) => (
              <div key={idx} className="cs-threat-card">
                <div className="cs-threat-icon-box" style={{ color: threat.color, background: `${threat.color}12`, borderColor: `${threat.color}35` }}>
                  <i className={`fas ${threat.icon}`}></i>
                </div>
                <h3 className="cs-threat-title">{threat.title}</h3>
                <p className="cs-threat-desc">{threat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR CYBERSECURITY CAPABILITIES */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-cubes"></i> CORE CAPABILITIES
            </span>
            <h2 className="siem-section-title">Our Cybersecurity Capabilities</h2>
            <p className="siem-section-subtitle">
              Comprehensive cybersecurity services designed to secure your digital operations at every layer.
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

      {/* SECTION 6: WHY IS CYBER SECURITY IMPORTANT? */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-chart-line"></i> VALUE & IMPACT
            </span>
            <h2 className="siem-section-title">Why Is Cyber Security Important?</h2>
            <p className="siem-section-subtitle">
              Building organizational resilience, customer trust, and long-term business stability.
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

      {/* SECTION 7: OUR CYBERSECURITY APPROACH */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-arrows-spin"></i> STRATEGY & METHODOLOGY
            </span>
            <h2 className="siem-section-title">Our Cybersecurity Approach</h2>
            <p className="siem-section-subtitle">
              Four visually consistent steps for assessing, securing, monitoring, and continuously improving your defense.
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

      {/* SECTION 8: WHO NEEDS CYBER SECURITY? */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-building-user"></i> TARGET SECTORS
            </span>
            <h2 className="siem-section-title">Who Needs Cyber Security?</h2>
            <p className="siem-section-subtitle">
              Every digital enterprise—from growing startups to regulated global institutions.
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
            <h2 className="siem-section-title">Cyber Security FAQs</h2>
            <p className="siem-section-subtitle">
              Get clear, direct answers to essential cybersecurity concepts and questions.
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
                    aria-controls={`cs-faq-answer-${idx}`}
                    id={`cs-faq-header-${idx}`}
                  >
                    <span className="cs-faq-question-text">{faq.q}</span>
                    <i className={`fas fa-chevron-down cs-faq-icon ${isOpen ? 'rotated' : ''}`}></i>
                  </button>
                  {isOpen && (
                    <div
                      id={`cs-faq-answer-${idx}`}
                      className="cs-faq-answer-body"
                      role="region"
                      aria-labelledby={`cs-faq-header-${idx}`}
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
              <span className="cs-cta-tag">GET PROTECTED</span>
              <h2 className="cs-cta-title">Strengthen Your Cybersecurity Posture</h2>
              <p className="cs-cta-desc">
                Every organisation faces a different set of digital risks. Build a security approach that reflects your systems, business priorities, and operational needs.
              </p>
              <p className="cs-cta-subtext">
                Speak with the Netcradus team to discuss your cybersecurity requirements.
              </p>
              <div className="cs-cta-actions">
                <Link to="/contact" className="siem-btn-primary cs-cta-btn">
                  <span>Get Started</span>
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
