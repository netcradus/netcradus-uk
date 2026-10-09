import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Ingest Telemetry",
    desc: "Route and correlate telemetry logs from switches, routers, firewalls, and host agents into a centralized surveillance plane.",
    icon: "fa-satellite-dish",
    color: "#06b6d4"
  },
  {
    num: "02",
    title: "Inspect Traffic",
    desc: "Analyze packets, signatures, and network traffic protocols in real time to detect anomalous behaviors and hidden payloads.",
    icon: "fa-magnifying-glass-chart",
    color: "#10b981"
  },
  {
    num: "03",
    title: "Enforce Boundaries",
    desc: "Apply next-generation firewall policies, zero-trust network access boundaries, and microsegmentation rules.",
    icon: "fa-shield-halved",
    color: "#8b5cf6"
  },
  {
    num: "04",
    title: "Alert & Contain",
    desc: "Flag threat anomalies, isolate lateral movement attempts, and trigger automated containment for malicious traffic spikes.",
    icon: "fa-triangle-exclamation",
    color: "#f59e0b"
  },
  {
    num: "05",
    title: "Adapt & Fine-Tune",
    desc: "Update access privileges, patch network vulnerabilities, refine inspection rules, and strengthen overall security posture.",
    icon: "fa-arrows-rotate",
    color: "#ec4899"
  }
];

const NEED_REASONS = [
  {
    title: "Block Lateral Movement",
    desc: "Enforce network segmentation and zero-trust policies to isolate compromised assets instantly before breaches spread.",
    icon: "fa-shield-halved",
    color: "#ef4444"
  },
  {
    title: "Defend Remote Connections",
    desc: "Provide secure encrypted ZTNA and SD-WAN links for hybrid and remote office workforces connecting across locations.",
    icon: "fa-network-wired",
    color: "#3b82f6"
  },
  {
    title: "Prevent Operational Downtime",
    desc: "Mitigate expensive outages with real-time DDoS filtering and high-capacity automated traffic scrubbing.",
    icon: "fa-bolt",
    color: "#f59e0b"
  },
  {
    title: "Regulatory Compliance",
    desc: "Meet strict compliance audits including PCI-DSS, ISO 27001, GDPR, and NIS2 for all data in transit.",
    icon: "fa-certificate",
    color: "#10b981"
  },
  {
    title: "Identify Intrusions Early",
    desc: "Detect and flag anomalous traffic spikes, unauthorized port scans, and command-and-control (C2) behaviors.",
    icon: "fa-radar",
    color: "#8b5cf6"
  },
  {
    title: "Hardened Gateway Access",
    desc: "Deploy next-generation firewalls to monitor and control inbound and outbound network traffic flows granularly.",
    icon: "fa-server",
    color: "#06b6d4"
  }
];

const SERVICES_DATA = [
  {
    title: "Next-Generation Firewall (NGFW)",
    desc: "Granular access control, deep packet inspection, and comprehensive traffic visibility across perimeters.",
    icon: "fa-firewall",
    badge: "Perimeter"
  },
  {
    title: "Intrusion Detection & Prevention (IDPS)",
    desc: "Real-time threat signature mapping, automated alert triage, and anomalous packet isolation.",
    icon: "fa-shield-virus",
    badge: "Detection"
  },
  {
    title: "Network Traffic Analysis (NTA)",
    desc: "Machine learning telemetry analytics to flag lateral movements and suspicious C2 connections.",
    icon: "fa-chart-line",
    badge: "Analytics"
  },
  {
    title: "Secure SD-WAN Management",
    desc: "Encrypted, optimized and managed network connectivity for multi-branch office infrastructures.",
    icon: "fa-diagram-project",
    badge: "Connectivity"
  },
  {
    title: "Network Microsegmentation",
    desc: "Isolating server workloads, applications, and databases into distinct zero-trust security zones.",
    icon: "fa-cubes-stacked",
    badge: "Isolation"
  },
  {
    title: "DDoS Mitigation Services",
    desc: "High-volume traffic scrubbing to preserve digital service availability during heavy volumetric attacks.",
    icon: "fa-shield-slash",
    badge: "Availability"
  },
  {
    title: "Zero Trust Network Access (ZTNA)",
    desc: "Identity-verified, application-specific access control replacing legacy insecure VPN setups.",
    icon: "fa-lock",
    badge: "Identity"
  },
  {
    title: "SSL/TLS Traffic Inspection",
    desc: "Decrypting and analyzing network traffic safely to detect hidden malicious payloads.",
    icon: "fa-eye",
    badge: "Inspection"
  },
  {
    title: "Network Access Control (NAC)",
    desc: "Profile endpoint devices, verify compliance postures, and authorize network connection access.",
    icon: "fa-id-badge",
    badge: "Posture"
  }
];

const TECH_STACK = [
  {
    title: "Fortinet NGFW",
    desc: "Perimeter logs, security policies, and SD-WAN integrations.",
    icon: "fa-firewall"
  },
  {
    title: "Palo Alto Networks",
    desc: "Prisma access tunnels, firewalls, and policy configurations.",
    icon: "fa-shield-halved"
  },
  {
    title: "Cisco Systems",
    desc: "Identity services engine (ISE) audits and switch mappings.",
    icon: "fa-network-wired"
  },
  {
    title: "Check Point",
    desc: "Packet inspection logs, WAF alerts and firewall rules.",
    icon: "fa-sliders"
  },
  {
    title: "F5 BIG-IP",
    desc: "Load balancer settings, SSL termination and WAF setups.",
    icon: "fa-diagram-project"
  },
  {
    title: "Cloudflare WAF",
    desc: "Edge rules, DDoS scrubbing and DNS security.",
    icon: "fa-cloud"
  },
  {
    title: "Aruba ClearPass",
    desc: "Endpoint posture profiles and network access controls.",
    icon: "fa-id-badge"
  },
  {
    title: "Zscaler ZTNA",
    desc: "Private access gateway configs and user policies.",
    icon: "fa-lock"
  },
  {
    title: "pfSense Security",
    desc: "Open-source firewall configurations and VPN bridges.",
    icon: "fa-server"
  },
  {
    title: "Ubiquiti Networks",
    desc: "WLAN settings, switch maps and local perimeters.",
    icon: "fa-wifi"
  }
];

const VERTICALS = [
  { title: "Banking & Finance", desc: "Securing financial transaction channels and core banking perimeters.", icon: "fa-building-columns" },
  { title: "Healthcare & Pharma", desc: "Protecting hospital networks, medical IoT devices, and sensitive patient data.", icon: "fa-heart-pulse" },
  { title: "Manufacturing & OT", desc: "Isolating industrial control networks and plant operations from cyber threats.", icon: "fa-industry" },
  { title: "Government & Public Sector", desc: "Hardening national infrastructure and public service network gateways.", icon: "fa-landmark" },
  { title: "Education & Research", desc: "Safeguarding academic networks, research labs, and campus Wi-Fi infrastructure.", icon: "fa-graduation-cap" },
  { title: "Retail & E-commerce", desc: "Enforcing PCI-DSS compliant POS networks and secure payment gateways.", icon: "fa-cart-shopping" },
  { title: "IT & SaaS Providers", desc: "Securing multi-tenant cloud networks, microservices, and API endpoints.", icon: "fa-laptop-code" },
  { title: "Telecommunications", desc: "Protecting high-capacity carrier networks and core routing backbones.", icon: "fa-tower-cell" },
  { title: "Logistics & Supply Chain", desc: "Securing distribution center communications and fleet telemetry networks.", icon: "fa-truck-fast" },
  { title: "Energy & Utilities", desc: "Defending power grid networks and utility SCADA communications.", icon: "fa-bolt-lightning" }
];

const VALUE_BENEFITS = [
  {
    title: "Complete Isolation of Compromised Assets",
    desc: "Prevent lateral breach movement across internal subnetworks through granular microsegmentation.",
    icon: "fa-shield-halved",
    color: "#06b6d4"
  },
  {
    title: "Encrypted Secure Channels",
    desc: "Safeguard all remote user connections and branch office traffic with high-grade encryption.",
    icon: "fa-lock",
    color: "#10b981"
  },
  {
    title: "Minimized Operational Downtime",
    desc: "Mitigate service disruptions with active, high-bandwidth DDoS mitigation scrubbing.",
    icon: "fa-bolt",
    color: "#f59e0b"
  },
  {
    title: "Audit & Compliance Readiness",
    desc: "Maintain constant compliance posture for ISO 27001, PCI-DSS, GDPR, and regional standards.",
    icon: "fa-certificate",
    color: "#8b5cf6"
  },
  {
    title: "Early Intrusion Detection",
    desc: "Identify anomalous network behavior, unauthorized port scanning, and C2 traffic instantly.",
    icon: "fa-radar",
    color: "#ef4444"
  },
  {
    title: "Hardened Perimeter Protection",
    desc: "Enforce intelligent inspection policies across next-generation firewalls and edge routers.",
    icon: "fa-server",
    color: "#ec4899"
  }
];

const ADVANTAGE_FEATURES = [
  { title: "Continuous Traffic Surveillance", desc: "Real-time packet inspection across hybrid network nodes.", icon: "fa-eye", color: "#06b6d4" },
  { title: "Automated DDoS Mitigation", desc: "High-capacity volumetric scrubbing for seamless availability.", icon: "fa-shield-slash", color: "#10b981" },
  { title: "Granular Network Microsegmentation", desc: "Isolating database tiers and critical workloads.", icon: "fa-cubes-stacked", color: "#8b5cf6" },
  { title: "Zero Trust Network Access (ZTNA)", desc: "Identity-driven application connections replacing legacy VPNs.", icon: "fa-lock", color: "#f59e0b" },
  { title: "Unified Log & Telemetry Flow", desc: "Single-pane-of-glass visibility into network activity.", icon: "fa-satellite-dish", color: "#ef4444" },
  { title: "Ensured Regional Compliance", desc: "Aligned with UK & international data protection standards.", icon: "fa-file-shield", color: "#ec4899" }
];

const FAQ_ITEMS = [
  {
    q: "What is the difference between a traditional VPN and Zero Trust Network Access (ZTNA)?",
    a: "Traditional VPNs grant broad network-level access once a user authenticates, allowing potential lateral movement. ZTNA grants identity-verified, application-specific access on a strict need-to-know basis."
  },
  {
    q: "How does network microsegmentation prevent threat propagation?",
    a: "Microsegmentation divides the network into isolated security zones, placing granular controls around individual workloads. If one server is compromised, lateral movement is blocked at the zone boundary."
  },
  {
    q: "Can Netcradus integrate with our existing firewalls and network hardware?",
    a: "Yes. We integrate with major vendor platforms including Fortinet, Palo Alto Networks, Cisco, Check Point, F5, Cloudflare, and Zscaler."
  },
  {
    q: "What is involved in Next-Generation Firewall (NGFW) management?",
    a: "NGFW management includes deep packet inspection configuration, intrusion prevention system (IPS) rule tuning, SSL/TLS decryption inspection, and continuous traffic policy updates."
  },
  {
    q: "How does DDoS mitigation protect corporate network availability?",
    a: "DDoS mitigation routes incoming network traffic through high-capacity scrubbing centers that filter out malicious volumetric and application-layer attacks before clean traffic reaches your network."
  },
  {
    q: "How quickly can a network security assessment be completed?",
    a: "An initial architectural review and perimeter risk assessment can typically be executed within 3 to 5 business days, yielding an actionable remediation roadmap."
  }
];

export default function NetworkSecurity() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Network Security Services | Netcradus UK";
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="siem-page cyber-security-page cloud-security-page network-security-page">

      {/* SECTION 1: HERO */}
      <section className="siem-hero-section cs-hero-section">
        <div className="siem-container">
          <div className="siem-hero-card cs-hero-card">
            <div className="siem-hero-grid">

              <div className="siem-hero-left">
                <div className="siem-badge cs-badge">
                  <span className="siem-badge-dot" />
                  NETWORK SECURITY
                </div>

                <h1 className="siem-hero-title cs-hero-title">
                  Secure Your Perimeter. <br />
                  <span className="gradient-text">Protect Your Infrastructure.</span>
                </h1>

                <p className="siem-hero-desc cs-hero-desc">
                  As organisations support hybrid workforces and deploy applications across multiple environments, the network perimeter has evolved. Our Network Security Services protect your networks, servers, and remote connections against intrusion, lateral movement, and data exfiltration.
                </p>

                <div className="cs-hero-highlights">
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" />
                    <span>Next-Gen Firewall Protection</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" />
                    <span>Zero-Trust ZTNA Access</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" />
                    <span>Active DDoS Scrubbing</span>
                  </div>
                </div>

                <div className="siem-buttons-container">
                  <Link to="/contact" className="siem-btn-primary">
                    <span>Start Network Assessment</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                  <a href="#what-is-network-security" className="siem-btn-secondary">
                    Explore Network Security
                  </a>
                </div>
              </div>

              <div className="siem-hero-right">
                <div className="cs-hero-graphic-card">
                  <div className="cs-graphic-header">
                    <div className="cs-graphic-status">
                      <span className="cs-status-pulse" />
                      <span className="cs-status-text">PERIMETER SHIELD ACTIVE</span>
                    </div>
                    <span className="cs-graphic-badge">NETCRADUS UK</span>
                  </div>

                  <div className="cs-graphic-body">
                    <div
                      className="cs-shield-icon-wrapper"
                      style={{
                        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, rgba(249, 115, 22, 0.02) 70%)',
                        borderColor: 'rgba(249, 115, 22, 0.35)'
                      }}
                    >
                      <i className="fas fa-network-wired cs-hero-shield-icon" style={{ color: '#f97316' }} />
                      <div className="cs-shield-glow" />
                    </div>

                    <div className="cs-metrics-grid">
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">£3.8M</span>
                        <span className="cs-metric-label">Avg Intrusion Cost</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">68%</span>
                        <span className="cs-metric-label">Lateral Movement Risk</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">50%</span>
                        <span className="cs-metric-label">Downtime Reduction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS NETWORK SECURITY? */}
      <section id="what-is-network-security" className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-shield-alt" /> CORE FOUNDATION
            </span>
            <h2 className="siem-section-title">What Is Network Security?</h2>
          </div>

          <div className="cs-overview-grid">
            <div className="cs-overview-content">
              <p className="cs-overview-lead">
                Network Security is the set of configurations, policies, and systems designed to defend the integrity, confidentiality, and accessibility of corporate computer networks and data.
              </p>
              <p className="cs-overview-text">
                It combines hardware and software controls—such as next-generation firewalls, intrusion prevention systems (IPS), web application firewalls (WAF), secure SD-WAN, and zero-trust network access (ZTNA)—to intercept threats before they enter your perimeter.
              </p>
              <p className="cs-overview-text">
                In today's decentralized environments, network security shifts from securing a static physical boundary to establishing dynamic, identity-based boundaries that secure workloads wherever they run.
              </p>
            </div>

            <div className="cs-overview-cards-col">
              <div className="cs-mini-card">
                <div className="cs-mini-icon-box">
                  <i className="fas fa-shield-halved" />
                </div>
                <div>
                  <h4 className="cs-mini-title">Perimeter & Internal Controls</h4>
                  <p className="cs-mini-desc">Combining next-gen firewalls, IPS, and WAF to intercept threats before entry.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box">
                  <i className="fas fa-lock" />
                </div>
                <div>
                  <h4 className="cs-mini-title">Zero-Trust Identity Boundaries</h4>
                  <p className="cs-mini-desc">Shifting from static physical boundaries to dynamic identity-driven access rules.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box">
                  <i className="fas fa-diagram-project" />
                </div>
                <div>
                  <h4 className="cs-mini-title">Micro-Segmentation & Containment</h4>
                  <p className="cs-mini-desc">Isolating server workloads and databases to eliminate unrestricted lateral movement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: STRATEGIC DEFENSE */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-diagram-project" /> STRATEGIC DEFENSE
            </span>
            <h2 className="siem-section-title">Why Network Security Matters</h2>
            <p className="siem-section-subtitle">
              As network perimeters expand to cloud nodes and remote office endpoints, traditional flat-network architectures present high exposure risks. A single compromised host can allow unrestricted lateral movement.
            </p>
          </div>

          <div className="cs-overview-grid">
            <div className="cs-overview-content">
              <p className="cs-overview-lead">
                Modern network security limits these threats by deploying micro-segmentation, continuous packet inspections, and multi-factor access policies that isolate breaches at the point of origin.
              </p>
              <p className="cs-overview-text">
                "Securing the network is not just about blocking entry—it's about containing threats and ensuring the business can operate uninterrupted."
              </p>
            </div>

            <div className="cs-overview-cards-col">
              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
                  <i className="fas fa-triangle-exclamation" />
                </div>
                <div>
                  <h4 className="cs-mini-title">Contain Breach Propagation</h4>
                  <p className="cs-mini-desc">Micro-segmentation prevents a single compromised host from exposing secondary assets.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(249, 115, 22, 0.15)', color: '#f97316' }}>
                  <i className="fas fa-lock" />
                </div>
                <div>
                  <h4 className="cs-mini-title">Protect Remote Connections</h4>
                  <p className="cs-mini-desc">Encrypted ZTNA bridges protect employees connecting from remote branches or home networks.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                  <i className="fas fa-bolt" />
                </div>
                <div>
                  <h4 className="cs-mini-title">Mitigate Expensive Outages</h4>
                  <p className="cs-mini-desc">Real-time DDoS traffic scrubbing preserves service availability during volumetric attacks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PILLARS OF INTEGRITY */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-shield-halved" /> PILLARS OF INTEGRITY
            </span>
            <h2 className="siem-section-title">Why Every Business Needs Network Security</h2>
            <p className="siem-section-subtitle">
              Ensure continuous runtime protection, threat isolation and connection privacy across enterprise networks.
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

      {/* SECTION 5: OUR OFFERINGS / CAPABILITIES */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-cubes" /> OUR OFFERINGS
            </span>
            <h2 className="siem-section-title">Our Network Security Services</h2>
            <p className="siem-section-subtitle">
              We deploy full-suite security solutions matching the demands of modern enterprise networks.
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

      {/* SECTION 6: OPERATIONAL CYCLE */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-arrows-spin" /> OPERATIONAL CYCLE
            </span>
            <h2 className="siem-section-title">How We Secure Your Network</h2>
            <p className="siem-section-subtitle">
              Our structured operational cycle ensures continuous protection from network ingestion to adaptive containment.
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

      {/* SECTION 7: TECH INTEGRATIONS */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-layer-group" /> TECH INTEGRATIONS
            </span>
            <h2 className="siem-section-title">Technologies We Support</h2>
            <p className="siem-section-subtitle">
              We leverage, support and integrate with industry-leading network security solutions.
            </p>
          </div>

          <div className="cs-audiences-grid">
            {TECH_STACK.map((tech, idx) => (
              <div key={idx} className="cs-audience-card">
                <div className="cs-audience-icon-box">
                  <i className={`fas ${tech.icon}`} />
                </div>
                <h3 className="cs-audience-title">{tech.title}</h3>
                <p className="cs-audience-desc">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: VERTICALS SECURED */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-building-user" /> TARGET SECTORS
            </span>
            <h2 className="siem-section-title">Industries We Secure</h2>
            <p className="siem-section-subtitle">
              We deliver custom network isolation and surveillance models tailored to vertical regulations.
            </p>
          </div>

          <div className="cs-audiences-grid">
            {VERTICALS.map((vert, idx) => (
              <div key={idx} className="cs-audience-card">
                <div className="cs-audience-icon-box">
                  <i className={`fas ${vert.icon}`} />
                </div>
                <h3 className="cs-audience-title">{vert.title}</h3>
                <p className="cs-audience-desc">{vert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: VALUE REALIZATION */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-chart-line" /> VALUE & IMPACT
            </span>
            <h2 className="siem-section-title">Benefits of Investing in Network Security</h2>
            <p className="siem-section-subtitle">
              Proactive network security safeguards operational runtime and mitigates lateral breach propagation.
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

      {/* SECTION 10: NETCRADUS ADVANTAGE */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-award" /> NETCRADUS ADVANTAGE
            </span>
            <h2 className="siem-section-title">Why Choose Netcradus for Network Security?</h2>
            <p className="siem-section-subtitle">
              At Netcradus, we bridge perimeter controls with cloud native networks. Our continuous traffic scanning and automated mitigations safeguard operations against complex network attacks.
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

      {/* SECTION 11: FREQUENTLY ASKED QUESTIONS */}
      <section className="siem-section cs-section cs-faq-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-circle-question" /> FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="siem-section-title">Network Security FAQs</h2>
            <p className="siem-section-subtitle">
              Get clear, direct answers to essential network security concepts and questions.
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
                    aria-controls={`ns-faq-answer-${idx}`}
                    id={`ns-faq-header-${idx}`}
                  >
                    <span className="cs-faq-question-text">{faq.q}</span>
                    <i className={`fas fa-chevron-down cs-faq-icon ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div
                      id={`ns-faq-answer-${idx}`}
                      className="cs-faq-answer-body"
                      role="region"
                      aria-labelledby={`ns-faq-header-${idx}`}
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
              <h2 className="cs-cta-title">Ready to Secure Your Network?</h2>
              <p className="cs-cta-desc">
                Don't leave perimeter structures exposed. Connect with our expert advisors to implement robust network security controls today.
              </p>
              <p className="cs-cta-subtext">
                Speak with the Netcradus team to discuss your network security requirements.
              </p>
              <div className="cs-cta-actions">
                <Link to="/contact" className="siem-btn-primary cs-cta-btn">
                  <span>Start Network Assessment</span>
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
