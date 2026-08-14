import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SJ = [
  "Continuous compliance audits",
  "Automated risk scoring",
  "Vulnerability exploit scans",
  "Chain of custody validation",
  "Subnet exposure reporting"
];

const _J = [
  "UK GDPR & NIS2 mapping",
  "Privileged session tracking",
  "Identity conflict tracking",
  "Audit ledger generation",
  "Lateral movement mappings"
];

const kJ = [
  {
    id: 1,
    title: "1. Compliance Mapping",
    desc: "Map event telemetry and security logs automatically to UK GDPR, NIS2, ISO 27001, Cyber Essentials, and SOC2 compliance controls.",
    icon: "fa-file-shield",
    color: "#06b6d4",
    badgeBg: "rgba(6, 182, 212, 0.12)",
    border: "rgba(6, 182, 212, 0.3)"
  },
  {
    id: 2,
    title: "2. Automated Risk Scoring",
    desc: "Calculate asset criticality and overall tenant risk scores dynamically based on detected anomalies and configurations.",
    icon: "fa-chart-line",
    color: "#8b5cf6",
    badgeBg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  },
  {
    id: 3,
    title: "3. Identity Conflicts Tracker",
    desc: "Identify privilege escalation vectors, orphan admin accounts, and conflicting credentials automatically.",
    icon: "fa-user-gear",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: 4,
    title: "4. Attack Surface Audits",
    desc: "Scan and catalog external-facing IP addresses, open ports, and DNS subdomains to check exposure boundaries.",
    icon: "fa-network-wired",
    color: "#f59e0b",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)"
  },
  {
    id: 5,
    title: "5. Active Triage Reports",
    desc: "Compile detailed incident logs and forensics reports automatically for regulatory notifications.",
    icon: "fa-file-invoice",
    color: "#ef4444",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)"
  },
  {
    id: 6,
    title: "6. eBPF Process Audits",
    desc: "Perform real-time kernel call monitoring and container audits to ensure software supply chain compliance.",
    icon: "fa-microchip",
    color: "#ec4899",
    badgeBg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 7,
    title: "7. Cryptographic Chain",
    desc: "Store audit trails and containment log hashes on secure ledger databases to prevent tamper attempts.",
    icon: "fa-box-archive",
    color: "#3b82f6",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 8,
    title: "8. Continuous Optimization",
    desc: "Trigger compliance score recalculations automatically after automated playbook response actions are taken.",
    icon: "fa-rotate",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  }
];

const EJ = [
  {
    title: "Active Rules",
    desc: "Configure risk thresholds and monitor active compliance alert policies.",
    icon: "fa-shield-halved"
  },
  {
    title: "Alerts Fired Today",
    desc: "Track daily compliance incidents and vulnerability violations counts.",
    icon: "fa-bell"
  },
  {
    title: "Rules Disabled",
    desc: "Identify deactivated security controls and track audit exceptions justifications.",
    icon: "fa-circle-pause"
  },
  {
    title: "Average Risk Score",
    desc: "Continuous assessment of enterprise risk, mapped from green to red indicators.",
    icon: "fa-gauge"
  }
];

const MJ = [
  {
    title: "Step-Up Authentication",
    desc: "Trigger immediate MFA challenges during compliance policy violations.",
    icon: "fa-user-shield"
  },
  {
    title: "Isolate Endpoint Host",
    desc: "Instruct containment agents to isolate host devices failing compliance rules.",
    icon: "fa-circle-xmark"
  },
  {
    title: "Revoke SSO Access",
    desc: "Suspend directory accounts automatically upon critical GRC risk alerts.",
    icon: "fa-user-slash"
  },
  {
    title: "Firewall Rule Updates",
    desc: "Add rogue network adapters to local edge blacklist pools instantly.",
    icon: "fa-ban"
  },
  {
    title: "Compliance Archivals",
    desc: "Archive incident parameters dynamically to verify compliance chains.",
    icon: "fa-box-archive"
  },
  {
    title: "Vulnerability Scanning",
    desc: "Initiate automated vulnerability sweeps on surrounding assets.",
    icon: "fa-magnifying-glass-shield"
  }
];

const CJ = [
  {
    label: "Active Rules",
    value: "0 Rules Active",
    change: "Continuous Monitoring",
    color: "#06b6d4"
  },
  {
    label: "Alerts Fired Today",
    value: "0 Alerts",
    change: "System Safe State",
    color: "#10b981"
  },
  {
    label: "Rules Disabled",
    value: "0 Rules",
    change: "Zero Audit Gaps",
    color: "#8b5cf6"
  },
  {
    label: "Avg Risk Score",
    value: "0 (Low)",
    change: "Compliance Safe State",
    color: "#3b82f6"
  },
  {
    label: "GRC Audits Ingested",
    value: "42 Sources",
    change: "Real-time Correlation",
    color: "#ec4899"
  },
  {
    label: "Unassigned Risks",
    value: "00",
    change: "Fully Remediated",
    color: "#ef4444"
  }
];

const TJ = [
  {
    name: "Cloud Compliance",
    desc: "Verify access configuration compliance across AWS, Azure, GCP, and Kubernetes Node settings.",
    icon: "fas fa-cloud",
    color: "#06b6d4",
    badge: "API Cloud Scanners",
    caps: [
      "CIS benchmark audits",
      "IAM permissions audit",
      "Kube API security check",
      "Cloud trail logging check"
    ]
  },
  {
    name: "Enterprise Directories",
    desc: "Active Directory user groups, single sign-on access parameters, and directory logs.",
    icon: "fas fa-users-gear",
    color: "#8b5cf6",
    badge: "SSO Policy Auditor",
    caps: [
      "Privileged groups check",
      "Orphan account scan",
      "Logon anomalies search",
      "MFA bypass checks"
    ]
  },
  {
    name: "Host Compliance",
    desc: "Windows system integrity logs, Linux file access logs, and macOS OS parameters.",
    icon: "fas fa-desktop",
    color: "#10b981",
    badge: "Agent FIM Collector",
    caps: [
      "File integrity tracker",
      "Local admins changes",
      "Registry alterations scan",
      "Cron job modification checks"
    ]
  },
  {
    name: "Regulatory Frameworks",
    desc: "UK GDPR compliance mapping, NIS2 frameworks parameters, ISO 27001 logs, and SOC2 ledgers.",
    icon: "fas fa-file-invoice",
    color: "#3b82f6",
    badge: "Frameworks Mapping",
    caps: [
      "GDPR policy matching",
      "NIS2 operations audit",
      "SOC2 logs archiving",
      "ISO controls validation"
    ]
  }
];

export default function Grc() {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="siem-page">
      
      {/* Hero Section */}
      <section className="siem-hero-section">
        <div className="siem-container">
          <div className="siem-hero-card">
            <div className="siem-hero-grid">
              
              <div className="siem-hero-left">
                <div className="siem-badge">
                  <span className="siem-badge-dot" />
                  RISK & COMPLIANCE
                </div>
                
                <h1 className="siem-hero-title">
                  NetCradus GRC <span className="gradient-text">Compliance.</span>
                </h1>
                
                <p className="siem-hero-desc">
                  NetCradus GRC automates compliance mapping, risk score analysis, and attack surface audits in real time, keeping your enterprise aligned with UK GDPR, NIS2, Cyber Essentials, and ISO 27001.
                </p>
                
                <div className="siem-capabilities-wrapper">
                  <h4 className="siem-capabilities-heading">CORE GRC FUNCTIONS:</h4>
                  <div className="siem-capabilities-grid">
                    <div className="siem-capabilities-list">
                      {SJ.map((item, idx) => (
                        <div key={idx} className="siem-capability-item">
                          <span className="siem-check-icon-wrapper">
                            <i className="fas fa-check text-center" style={{ fontSize: '0.7rem' }}></i>
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="siem-capabilities-list">
                      {_J.map((item, idx) => (
                        <div key={idx} className="siem-capability-item">
                          <span className="siem-check-icon-wrapper">
                            <i className="fas fa-check text-center" style={{ fontSize: '0.7rem' }}></i>
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="siem-buttons-container">
                  <Link to="/contact" className="siem-btn-primary">
                    <span>Request GRC Demo</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <a href="#grc-console" className="siem-btn-secondary">
                    View Compliance Console
                  </a>
                </div>
              </div>

              <div className="siem-hero-right">
                <div className="siem-browser-shell">
                  <div className="siem-browser-header">
                    <div className="siem-browser-dots">
                      <span className="siem-browser-dot red" />
                      <span className="siem-browser-dot yellow" />
                      <span className="siem-browser-dot green" />
                    </div>
                    <span className="siem-browser-address">app.netcradus.com/acis-compliance-audits</span>
                    <span className="siem-browser-title">RISK & COMPLIANCE</span>
                  </div>
                  
                  <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-correlation.png", alt: "NetCradus GRC Compliance & Searches Dashboard" })}>
                    <img src="/images/netxdr-siem-correlation.png" alt="NetCradus GRC Compliance & Searches Dashboard" className="siem-browser-image" />
                    <div className="siem-image-overlay">
                      <i className="fas fa-expand"></i> Click to Expand GRC Dashboard
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="siem-section bg-dark">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">COMPLIANCE ASSURANCE</span>
            <h2 className="siem-section-title">The Three Pillars of NetCradus GRC</h2>
            <p className="siem-section-subtitle">
              Intelligent risk score modeling, continuous framework auditing, and automated compliance alert reporting working together.
            </p>
          </div>

          <div className="siem-grid-3">
            {/* Pillar 1 */}
            <div className="siem-cap-card" style={{ borderColor: 'rgba(6, 182, 212, 0.3)' }}>
              <div>
                <div className="siem-cap-icon-wrapper" style={{ backgroundColor: 'rgba(6, 182, 212, 0.12)', color: '#06b6d4' }}>
                  <i className="fas fa-clipboard-check text-lg"></i>
                </div>
                <h3 className="siem-cap-title">1. Framework Audits</h3>
                <p className="siem-cap-desc" style={{ marginBottom: '1.25rem' }}>
                  Audit system events and settings automatically against controls for UK GDPR, NIS2, ISO 27001, and SOC2.
                </p>
                <div className="siem-capabilities-list" style={{ gap: '0.5rem' }}>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>GDPR access policies checks</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>NIS2 business security audits</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>SOC2 log ledger encryption check</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Continuous exposure metrics mapping</span>
                  </div>
                </div>
              </div>
              <div className="siem-cap-footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: '#06b6d4' }}>
                <span>AUDIT LAYER</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Real-time Parsing</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="siem-cap-card" style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}>
              <div>
                <div className="siem-cap-icon-wrapper" style={{ backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}>
                  <i className="fas fa-scale-balanced text-lg"></i>
                </div>
                <h3 className="siem-cap-title">2. Risk Analytics</h3>
                <p className="siem-cap-desc" style={{ marginBottom: '1.25rem' }}>
                  Assess and score enterprise security exposure dynamically based on configurations, logs anomalies, and open ports.
                </p>
                <div className="siem-capabilities-list" style={{ gap: '0.5rem' }}>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Asset criticality tagging engines</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Dynamic risk score calculations</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Identity access overlap audits</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Threat severity mapping logic</span>
                  </div>
                </div>
              </div>
              <div className="siem-cap-footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: '#10b981' }}>
                <span>RISK LAYER</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Dynamic Dashboards</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="siem-cap-card" style={{ borderColor: 'rgba(139, 92, 246, 0.3)' }}>
              <div>
                <div className="siem-cap-icon-wrapper" style={{ backgroundColor: 'rgba(139, 92, 246, 0.12)', color: '#8b5cf6' }}>
                  <i className="fas fa-file-lines text-lg"></i>
                </div>
                <h3 className="siem-cap-title">3. Governance & Reporting</h3>
                <p className="siem-cap-desc" style={{ marginBottom: '1.25rem' }}>
                  Generate validated compliance audit documents and risk mitigation profiles dynamically for management reviews.
                </p>
                <div className="siem-capabilities-list" style={{ gap: '0.5rem' }}>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Auto-compliance reports creation</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Encrypted ledger audit trails</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Exposures remediation workflow sync</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Compliance score tracking charts</span>
                  </div>
                </div>
              </div>
              <div className="siem-cap-footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: '#8b5cf6' }}>
                <span>REPORT LAYER</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Governance Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="siem-section bg-dark-violet">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">COMPLIANCE AND EXPOSURES</span>
            <h2 className="siem-section-title">GRC Governance Capabilities</h2>
            <p className="siem-section-subtitle">
              Verify compliance frameworks status and map risk metrics across all assets domains.
            </p>
          </div>

          <div className="siem-grid-4">
            {kJ.map((card) => (
              <div key={card.id} className="siem-cap-card" style={{ borderColor: card.border }}>
                <div>
                  <div className="siem-cap-icon-wrapper" style={{ backgroundColor: card.badgeBg, color: card.color }}>
                    <i className={`fas ${card.icon} text-lg`}></i>
                  </div>
                  <h3 className="siem-cap-title">{card.title}</h3>
                  <p className="siem-cap-desc">{card.desc}</p>
                </div>
                <div className="siem-cap-footer">
                  <span>NETCRADUS GRC</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Triage Section */}
      <section id="grc-console" className="siem-section bg-dark">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">COMPLIANCE ENFORCEMENT</span>
            <h2 className="siem-section-title">Real-Time Risk & Compliance Monitoring</h2>
            <p className="siem-section-subtitle">
              Continuous validation of active governance rules, vulnerability alerts, and overall tenant risk scores.
            </p>
          </div>

          <div className="siem-grid-3">
            
            {/* Box 1 */}
            <div className="siem-telemetry-card">
              <div>
                <div className="siem-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-shield-halved text-[#06b6d4]"></i> Active Governance Rules
                  </h3>
                  <span className="siem-telemetry-badge-active">MONITORED</span>
                </div>
                <div className="siem-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-correlation.png", alt: "Active Compliance Rules Panel" })}>
                  <img src="/images/netxdr-siem-correlation.png" alt="Active Compliance Rules Panel" className="siem-telemetry-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Compliance Rules Tracker</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Audit configuration policies health and trace control thresholds across your resources.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="siem-telemetry-card">
              <div>
                <div className="siem-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-bell text-[#8b5cf6]"></i> Policy Violations
                  </h3>
                  <span className="siem-telemetry-badge-live">DAILY TRACK</span>
                </div>
                <div className="siem-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-correlation.png", alt: "Policy Violations Console" })}>
                  <img src="/images/netxdr-siem-correlation.png" alt="Policy Violations Console" className="siem-telemetry-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Vulnerability Alert logs</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Verify incident counts, compliance failures, and trace exception approvals dynamically.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="siem-telemetry-card">
              <div>
                <div className="siem-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-gauge text-[#10b981]"></i> Tenant Risk Index
                  </h3>
                  <span className="siem-telemetry-badge-subsecond">LIVE INDEX</span>
                </div>
                <div className="siem-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-correlation.png", alt: "GRC Risk Index Panel" })}>
                  <img src="/images/netxdr-siem-correlation.png" alt="GRC Risk Index Panel" className="siem-telemetry-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Critical Exposure Scoring</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Monitor overall risk index mapped dynamically across high-risk and low-risk scopes.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GRC Configuration Section */}
      <section className="siem-section bg-dark-violet">
        <div className="siem-container">
          <div className="siem-hero-grid">
            
            <div className="siem-hero-left">
              <span className="siem-section-tag">COMPLIANCE SCANS</span>
              <h2 className="siem-section-title">Interactive Risk Assessments</h2>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#06b6d4', margin: 0 }}>Triage audit gaps and verify controls.</h3>
              <p className="siem-hero-desc" style={{ margin: 0 }}>
                Audit active directories, network boundaries, and cloud configurations, and run compliance scans via centralized query workbenches.
              </p>
              
              <div className="siem-sub-grid">
                {EJ.map((item, idx) => (
                  <div key={idx} className="siem-sub-card">
                    <div className="siem-sub-icon-wrapper">
                      <i className={`fas ${item.icon} text-sm`}></i>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="siem-hero-right">
              <div className="siem-browser-shell">
                <div className="siem-browser-header">
                  <div className="siem-browser-dots">
                    <span className="siem-browser-dot red" />
                    <span className="siem-browser-dot yellow" />
                    <span className="siem-browser-dot green" />
                  </div>
                  <span className="siem-browser-address" style={{ color: '#06b6d4' }}>app.netcradus.com/acis-compliance-searches</span>
                  <span className="siem-browser-title">GRC SEARCHES CONSOLE</span>
                </div>
                <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-correlation.png", alt: "Compliance Rules Searches Workbench" })}>
                  <img src="/images/netxdr-siem-correlation.png" alt="Compliance Rules Searches Workbench" className="siem-browser-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand GRC Searches Console
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Enforcement Actions Section */}
      <section className="siem-section bg-dark">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">COMPLIANCE REACTION</span>
            <h2 className="siem-section-title">Automated Risk Containment Workflows</h2>
            <p className="siem-section-subtitle">
              Trigger step-up MFA challenges, block access tokens, and isolate host devices failing compliance checks automatically.
            </p>
          </div>

          <div className="siem-hero-grid">
            
            <div className="siem-hero-left">
              <div className="siem-browser-shell">
                <div className="siem-browser-header">
                  <div className="siem-browser-dots">
                    <span className="siem-browser-dot red" />
                    <span className="siem-browser-dot yellow" />
                    <span className="siem-browser-dot green" />
                  </div>
                  <span className="siem-browser-address" style={{ color: '#06b6d4' }}>app.netcradus.com/acis-grc-containment</span>
                  <span className="siem-browser-title">COMPLIANCE CONTAINMENT</span>
                </div>
                <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-correlation.png", alt: "Compliance Active Containment Dashboard" })}>
                  <img src="/images/netxdr-siem-correlation.png" alt="Compliance Active Containment Dashboard" className="siem-browser-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Containment Console
                  </div>
                </div>
              </div>
            </div>

            <div className="siem-hero-right">
              <div className="siem-sub-grid">
                {MJ.map((item, idx) => (
                  <div key={idx} className="siem-sub-card response-theme">
                    <div className="siem-sub-icon-wrapper response-theme">
                      <i className={`fas ${item.icon} text-sm`}></i>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="siem-section bg-dark-violet">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">COMPLIANCE SUMMARY</span>
            <h2 className="siem-section-title">GRC Alerts Ingestion Metrics</h2>
            <p className="siem-section-subtitle">
              Continuous visibility into compliance health states, violations alerts counts, and rules disabled audits.
            </p>
          </div>

          <div className="siem-stats-grid">
            {CJ.map((item, idx) => (
              <div key={idx} className="siem-stats-card">
                <span className="stats-label">{item.label}</span>
                <span className="stats-value" style={{ color: item.color }}>{item.value}</span>
                <span className="stats-change">{item.change}</span>
              </div>
            ))}
          </div>

          <div className="siem-browser-shell">
            <div className="siem-browser-header">
              <div className="siem-browser-dots">
                <span className="siem-browser-dot red" />
                <span className="siem-browser-dot yellow" />
                <span className="siem-browser-dot green" />
              </div>
              <span className="siem-browser-address" style={{ color: '#06b6d4' }}>app.netcradus.com/acis-compliance-dashboard</span>
              <span className="siem-browser-title">GRC COMPLIANCE OVERVIEW</span>
            </div>
            <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-correlation.png", alt: "GRC Metrics Dashboard Overview" })}>
              <img src="/images/netxdr-siem-correlation.png" alt="GRC Metrics Dashboard Overview" className="siem-browser-image" />
              <div className="siem-image-overlay">
                <i className="fas fa-expand"></i> Click to Expand Dashboard Overview
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Compliance Sources Category Section */}
      <section className="siem-section bg-dark">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">COMPLIANCE CONNECTOR FEEDS</span>
            <h2 className="siem-section-title">Verify Controls Across All Scopes</h2>
            <p className="siem-section-subtitle">
              Verify compliance configs dynamically across cloud providers, host files, directory structures, and regulatory frameworks.
            </p>
          </div>

          <div className="siem-grid-4">
            {TJ.map((item, idx) => (
              <div key={idx} className="siem-env-card">
                <div className="siem-env-icon-wrapper" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                  <i className={`${item.icon} text-lg`}></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', margin: '0 0 0.5rem 0' }}>{item.name}</h3>
                  <span className="siem-env-badge">{item.badge}</span>
                  <p className="siem-env-desc">{item.desc}</p>
                </div>
                <div className="siem-env-caps">
                  {item.caps.map((cap, cIdx) => (
                    <div key={cIdx} className="siem-env-bullet">
                      <i className="fas fa-check-circle" style={{ color: item.color }}></i>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="siem-cta-section">
        <div className="siem-container">
          <div className="siem-cta-card">
            <span className="siem-section-tag">AUTOMATED GOVERNANCE AUDITS</span>
            <h2>Automate Compliance Scans and Score Enterprise Exposure.</h2>
            <p>
              Map event telemetry to regulatory frameworks, identify directory privilege overlaps, and track overall risk indices with NetCradus GRC.
            </p>
            <div className="siem-cta-buttons">
              <Link to="/contact" className="siem-cta-btn-primary">
                <span>REQUEST GRC ACCESS</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/platform" className="siem-cta-btn-secondary">
                EXPLORE PLATFORM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Glassmorphic Lightbox Zoom Modal */}
      {modalImage && (
        <div className="siem-modal-overlay" onClick={() => setModalImage(null)}>
          <div className="siem-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="siem-modal-close" onClick={() => setModalImage(null)}>
              &times;
            </button>
            <img src={modalImage.src} alt={modalImage.alt} className="siem-modal-img" />
            <p className="siem-modal-caption">{modalImage.alt}</p>
          </div>
        </div>
      )}

    </div>
  );
}
