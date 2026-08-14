import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SJ = [
  "Real-time log aggregation",
  "Multi-source log ingestion",
  "Intelligent alert triage",
  "Outlier & anomaly detection",
  "Forensic log exploration"
];

const _J = [
  "Cross-layer log correlation",
  "Compliance report generation",
  "Natural language SPL search",
  "eBPF cloud runtime audits",
  "Automated response triggers"
];

const kJ = [
  {
    id: 1,
    title: "1. Real-Time Ingestion",
    desc: "Ingest system logs, cloud trails, firewalls, and application records continuously with sub-second processing latency.",
    icon: "fa-database",
    color: "#06b6d4",
    badgeBg: "rgba(6, 182, 212, 0.12)",
    border: "rgba(6, 182, 212, 0.3)"
  },
  {
    id: 2,
    title: "2. Event Correlation",
    desc: "Connect anomalies across network, endpoints, and cloud layers to reconstruct adversary attack timelines automatically.",
    icon: "fa-network-wired",
    color: "#8b5cf6",
    badgeBg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  },
  {
    id: 3,
    title: "3. ML Outlier Analysis",
    desc: "Identify zero-day threat patterns, compromised credentials, and lateral movements using ONNX Isolation Forest models.",
    icon: "fa-brain",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: 4,
    title: "4. Compliance Mapping",
    desc: "Map log telemetry automatically to UK GDPR, NIS2, ISO 27001, Cyber Essentials, and SOC2 compliance controls.",
    icon: "fa-file-shield",
    color: "#f59e0b",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)"
  },
  {
    id: 5,
    title: "5. Active Triage Alerting",
    desc: "Filter out background noise and prioritize critical alerts using state-tracking alert engines and historical rules.",
    icon: "fa-triangle-exclamation",
    color: "#ef4444",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)"
  },
  {
    id: 6,
    title: "6. Natural Language SPL",
    desc: "Formulate analytical security queries effortlessly using our natural-language-to-SPL synthesis engine.",
    icon: "fa-terminal",
    color: "#ec4899",
    badgeBg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 7,
    title: "7. eBPF Runtime Audits",
    desc: "Gather deep kernel operations and runtime process calls directly from virtual machines and server container hosts.",
    icon: "fa-microchip",
    color: "#3b82f6",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 8,
    title: "8. Automated Response",
    desc: "Deploy playbooks to instantly revoke compromised access tokens, adjust firewall rules, or isolate devices.",
    icon: "fa-bolt",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  }
];

const EJ = [
  {
    title: "Behavioral Outliers",
    desc: "Audit user logon hours, geographical distance anomalies, and suspicious API activities automatically.",
    icon: "fa-user-shield"
  },
  {
    title: "MITRE ATT&CK Mapping",
    desc: "Align correlated multi-source log events to standard MITRE adversarial tactics and execution phases.",
    icon: "fa-layer-group"
  },
  {
    title: "IOC Intelligence matching",
    desc: "Compare current traffic signatures and host events against real-time global threat feed indicators.",
    icon: "fa-shield-halved"
  },
  {
    title: "SQL-like SPL Workbench",
    desc: "An advanced query editor that allows analysts to construct queries, plot indicators, and export telemetry data.",
    icon: "fa-code"
  }
];

const MJ = [
  {
    title: "Session & Token Revocation",
    desc: "Invalidate OAuth tokens, revoke credentials, and block Active Directory access in <200ms.",
    icon: "fa-user-xmark"
  },
  {
    title: "Firewall Rule Updates",
    desc: "Automatically push routing and block rules to firewalls, load balancers, and VPN gateways.",
    icon: "fa-shield-halved"
  },
  {
    title: "Automatic Log Archival",
    desc: "Generate and store encrypted hashes of log telemetry to maintain cryptographic chain of custody.",
    icon: "fa-box-archive"
  },
  {
    title: "Telemetry Alerts Triage",
    desc: "Consolidate telemetry patterns and notify local response coordinators using integrated dashboards.",
    icon: "fa-bullseye"
  },
  {
    title: "Endpoint Network Isolation",
    desc: "Instruct containment agents to block all communications to external and internal host environments.",
    icon: "fa-circle-xmark"
  },
  {
    title: "System Services Restores",
    desc: "Rollback unauthorised registry changes and terminate rogue background processes automatically.",
    icon: "fa-sync"
  }
];

const CJ = [
  {
    label: "Scored Events (Total)",
    value: "166 events",
    change: "Live Anomaly Triage",
    color: "#06b6d4"
  },
  {
    label: "Active Integrations",
    value: "42 Sources",
    change: "Cloud & On-Premises",
    color: "#8b5cf6"
  },
  {
    label: "Inference Latency",
    value: "1.2 ms/evt",
    change: "ONNX Local AI Edge",
    color: "#10b981"
  },
  {
    label: "Critical Incidents",
    value: "00",
    change: "No Actions Required",
    color: "#ef4444"
  },
  {
    label: "High-Risk Users",
    value: "01",
    change: "Under Surveillance",
    color: "#ec4899"
  },
  {
    label: "Logs Ingested (24h)",
    value: "85.2M",
    change: "Sub-Second Processing",
    color: "#3b82f6"
  }
];

const TJ = [
  {
    name: "Cloud Workloads",
    desc: "AWS CloudTrail, Azure Monitor Activity Logs, GCP Operations suite & Kubernetes audits.",
    icon: "fas fa-cloud",
    color: "#06b6d4",
    badge: "Cloud APIs Integration",
    caps: [
      "IAM Access Audits",
      "GCP Log Router Bind",
      "AWS S3 Access Scans",
      "Kube Audit Logging"
    ]
  },
  {
    name: "Network & Security",
    desc: "DNS queries, VPN connectivity logs, enterprise firewall routing events, and proxy traffic.",
    icon: "fas fa-network-wired",
    color: "#8b5cf6",
    badge: "Flow Logs Parsing",
    caps: [
      "Firewall Access Check",
      "DNS Anomaly Detection",
      "VPN Session Tracker",
      "Traffic Volume Spike Alert"
    ]
  },
  {
    name: "Identity & Directory",
    desc: "Active Directory, Okta, Microsoft Entra ID events, and single sign-on authentications.",
    icon: "fas fa-user-check",
    color: "#10b981",
    badge: "Access Logs Triage",
    caps: [
      "Brute-Force Detection",
      "MFA Bypassing Auditor",
      "Unusual Logon Hours Alert",
      "Privilege Escalation Audit"
    ]
  },
  {
    name: "Host Systems Logs",
    desc: "Windows Event Logs, Linux Syslogs, and macOS Endpoint Security Framework logs.",
    icon: "fas fa-desktop",
    color: "#3b82f6",
    badge: "Kernel Events Collector",
    caps: [
      "System Call Intercepts",
      "Auditd Logs Correlation",
      "FIM Log Consolidation",
      "Authentication Failure Sync"
    ]
  }
];

export default function Siem() {
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
                  SECURITY OPERATIONS
                </div>
                
                <h1 className="siem-hero-title">
                  AI SIEM Intelligence <span className="gradient-text">Center.</span>
                </h1>
                
                <p className="siem-hero-desc">
                  NetCradus SIEM ingests, normalizes, and correlates log telemetry from all your servers, networks, directories, and cloud resources in real time, detecting anomalies with our ONNX Isolation Forest engine.
                </p>
                
                <div className="siem-capabilities-wrapper">
                  <h4 className="siem-capabilities-heading">KEY CAPABILITIES:</h4>
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
                    <span>Request Demo</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <a href="#live-telemetry" className="siem-btn-secondary">
                    View Live Console
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
                    <span className="siem-browser-address">app.netcradus.com/acis-siem-intelligence</span>
                    <span className="siem-browser-title">NETCRADUS CONSOLE</span>
                  </div>
                  
                  <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-dashboard.png", alt: "NetCradus AI SIEM Intelligence Center Console" })}>
                    <img src="/images/netxdr-siem-dashboard.png" alt="NetCradus AI SIEM Intelligence Center Console" className="siem-browser-image" />
                    <div className="siem-image-overlay">
                      <i className="fas fa-expand"></i> Click to Expand Console Dashboard
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="siem-section bg-dark">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">CORE ARCHITECTURE</span>
            <h2 className="siem-section-title">The Three Pillars of NetCradus SIEM</h2>
            <p className="siem-section-subtitle">
              Intelligent log management, machine learning threat detection, and cross-domain event correlation working together as a unified cyber defense system.
            </p>
          </div>

          <div className="siem-grid-3">
            {/* Pillar 1: Log Management */}
            <div className="siem-cap-card" style={{ borderColor: 'rgba(6, 182, 212, 0.3)' }}>
              <div>
                <div className="siem-cap-icon-wrapper" style={{ backgroundColor: 'rgba(6, 182, 212, 0.12)', color: '#06b6d4' }}>
                  <i className="fas fa-file-invoice text-lg"></i>
                </div>
                <h3 className="siem-cap-title">1. Log Management</h3>
                <p className="siem-cap-desc" style={{ marginBottom: '1.25rem' }}>
                  Aggregate, parse, and store raw log telemetry securely from all enterprise sources, maintaining full compliance visibility.
                </p>
                <div className="siem-capabilities-list" style={{ gap: '0.5rem' }}>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Multi-source syslog & cloud APIs ingestion</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>CEF/JSON event normalization</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Hot, warm & cold encrypted tiering</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Cryptographic log integrity checks</span>
                  </div>
                </div>
              </div>
              <div className="siem-cap-footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: '#06b6d4' }}>
                <span>INGESTION LAYER</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>10k+ EPS / Source</span>
              </div>
            </div>

            {/* Pillar 2: Threat Detection */}
            <div className="siem-cap-card" style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}>
              <div>
                <div className="siem-cap-icon-wrapper" style={{ backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}>
                  <i className="fas fa-shield-virus text-lg"></i>
                </div>
                <h3 className="siem-cap-title">2. Threat Detection</h3>
                <p className="siem-cap-desc" style={{ marginBottom: '1.25rem' }}>
                  Leverage machine learning anomaly detection and signature verification to isolate active threat actors and zero-day vectors.
                </p>
                <div className="siem-capabilities-list" style={{ gap: '0.5rem' }}>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>ONNX Isolation Forest anomaly scoring</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Real-time VirusTotal & AbuseIPDB check</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>User & entity behavior analytics (UEBA)</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Triage rules database filtering noise</span>
                  </div>
                </div>
              </div>
              <div className="siem-cap-footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: '#10b981' }}>
                <span>ANOMALY LAYER</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>&lt;1.2 ms Latency</span>
              </div>
            </div>

            {/* Pillar 3: Event Correlation */}
            <div className="siem-cap-card" style={{ borderColor: 'rgba(139, 92, 246, 0.3)' }}>
              <div>
                <div className="siem-cap-icon-wrapper" style={{ backgroundColor: 'rgba(139, 92, 246, 0.12)', color: '#8b5cf6' }}>
                  <i className="fas fa-project-diagram text-lg"></i>
                </div>
                <h3 className="siem-cap-title">3. Event Correlation</h3>
                <p className="siem-cap-desc" style={{ marginBottom: '1.25rem' }}>
                  Correlate multi-source events dynamically across networks, identities, and cloud infrastructures to trace the full kill-chain.
                </p>
                <div className="siem-capabilities-list" style={{ gap: '0.5rem' }}>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Cross-domain endpoint-to-cloud mapping</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>MITRE ATT&CK tactic matching timelines</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Stealthy lateral movement detection</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>SOAR response playbooks trigger rules</span>
                  </div>
                </div>
              </div>
              <div className="siem-cap-footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: '#8b5cf6' }}>
                <span>CORRELATION LAYER</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Real-time Graphing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="siem-section bg-dark-violet">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">COMPREHENSIVE TELEMETRY CORRELATION</span>
            <h2 className="siem-section-title">Enterprise SIEM Capabilities</h2>
            <p className="siem-section-subtitle">
              Unified real-time visibility and advanced event correlation across cloud services, networks, systems, identities, and directories.
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
                  <span>NETCRADUS SIEM</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Telemetry Section */}
      <section id="live-telemetry" className="siem-section bg-dark">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">REAL-TIME LOG INTELLIGENCE</span>
            <h2 className="siem-section-title">Centralized Log Analytics & Anomaly Detection</h2>
            <p className="siem-section-subtitle">
              Track real-time log ingestion feeds, model latency records, anomaly metrics, and threat hunting indicators from our centralized dashboard.
            </p>
          </div>

          <div className="siem-grid-3">
            
            {/* Box 1 */}
            <div className="siem-telemetry-card">
              <div>
                <div className="siem-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-shapes text-[#06b6d4]"></i> Multi-Source Integrations
                  </h3>
                  <span className="siem-telemetry-badge-active">ACTIVE</span>
                </div>
                <div className="siem-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-collectors.png", alt: "Access & Integrations Console" })}>
                  <img src="/images/netxdr-siem-collectors.png" alt="Access & Integrations Console" className="siem-telemetry-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Integrations Console
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Cloud & On-Premises Collectors</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Continuous ingestion and normalization of event records from Windows, Linux, network devices, and multi-cloud providers.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="siem-telemetry-card">
              <div>
                <div className="siem-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-brain text-[#8b5cf6]"></i> Live AI Security Analyst
                  </h3>
                  <span className="siem-telemetry-badge-live">LIVE BRIEF</span>
                </div>
                <div className="siem-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-agent-deployment.png", alt: "Access & Integrations Console" })}>
                  <img src="/images/netxdr-siem-agent-deployment.png" alt="Access & Integrations Console" className="siem-telemetry-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Agent Ingestion Console
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Agentic Synthesis Briefings</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Generate real-time security briefings and execute direct threat investigations through natural language prompts.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="siem-telemetry-card">
              <div>
                <div className="siem-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-chart-line text-[#10b981]"></i> Anomaly Anlytics Engine
                  </h3>
                  <span className="siem-telemetry-badge-subsecond">1.2 MS/EVT</span>
                </div>
                 <div className="siem-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-datasources.png", alt: "Access & Integrations - Data Sources Console" })}>
                  <img src="/images/netxdr-siem-datasources.png" alt="Access & Integrations - Data Sources Console" className="siem-telemetry-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Data Sources Console
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Isolation Forest Anomaly Scoring</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Track scored events, monitor inference metrics, and trigger automated containment whenever outlier activity spikes.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Threat Investigation Section */}
      <section className="siem-section bg-dark-violet">
        <div className="siem-container">
          <div className="siem-hero-grid">
            
            <div className="siem-hero-left">
              <span className="siem-section-tag">THREAT DETECTION</span>
              <h2 className="siem-section-title">Intelligent Threat Investigation</h2>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#06b6d4', margin: 0 }}>Construct timelines and isolate incidents.</h3>
              <p className="siem-hero-desc" style={{ margin: 0 }}>
                NetCradus SIEM correlates raw logs dynamically across all enterprise domains, validating logs and discovering multi-stage adversary tactics.
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
                  <span className="siem-browser-address" style={{ color: '#06b6d4' }}>app.netcradus.com/acis-threat-intelligence</span>
                  <span className="siem-browser-title">REAL-TIME IOC ENRICHMENT</span>
                </div>
                <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-threat-intel.png", alt: "Threat Intelligence Dashboard" })}>
                  <img src="/images/netxdr-siem-threat-intel.png" alt="Threat Intelligence Dashboard" className="siem-browser-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Threat Intelligence Console
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Automated Response Section */}
      <section className="siem-section bg-dark">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">PLAYBOOKS ORCHESTRATION</span>
            <h2 className="siem-section-title">Automated Event Response & Triage.</h2>
            <p className="siem-section-subtitle">
              Configure trigger rules to execute automated response playbooks, block malicious addresses, quarantine endpoints, or lock compromised identities.
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
                  <span className="siem-browser-address" style={{ color: '#06b6d4' }}>app.netcradus.com/acis-assets-identities</span>
                  <span className="siem-browser-title">ASSETS & IDENTITIES CONSOLE</span>
                </div>
                <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-assets.png", alt: "ACIS Assets & Identities Console Dashboard" })}>
                  <img src="/images/netxdr-siem-assets.png" alt="ACIS Assets & Identities Console Dashboard" className="siem-browser-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Assets & Identities Console
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

      {/* Telemetry Stats & Dashboard Overview Section */}
      <section className="siem-section bg-dark-violet">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">METRICS OVERVIEW</span>
            <h2 className="siem-section-title">Telemetry Scored Events Summary.</h2>
            <p className="siem-section-subtitle">
              Continuous visibility into log sources health, active integrations, scored events, telemetry flow, and critical incidents.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="siem-stats-grid">
            {CJ.map((item, idx) => (
              <div key={idx} className="siem-stats-card">
                <span className="stats-label">{item.label}</span>
                <span className="stats-value" style={{ color: item.color }}>{item.value}</span>
                <span className="stats-change">{item.change}</span>
              </div>
            ))}
          </div>

          {/* Centralized Dashboard */}
          <div className="siem-browser-shell">
            <div className="siem-browser-header">
              <div className="siem-browser-dots">
                <span className="siem-browser-dot red" />
                <span className="siem-browser-dot yellow" />
                <span className="siem-browser-dot green" />
              </div>
              <span className="siem-browser-address" style={{ color: '#06b6d4' }}>app.netcradus.com/acis-event-correlation</span>
              <span className="siem-browser-title">EVENT CORRELATION CONSOLE</span>
            </div>
            <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-correlation.png", alt: "ACIS Event Correlation Console Dashboard" })}>
              <img src="/images/netxdr-siem-correlation.png" alt="ACIS Event Correlation Console Dashboard" className="siem-browser-image" />
              <div className="siem-image-overlay">
                <i className="fas fa-expand"></i> Click to Expand Correlation Console
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Environments Section */}
      <section className="siem-section bg-dark">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">MULTI-SOURCE LOG COLLECTORS</span>
            <h2 className="siem-section-title">Correlate Every Environment.</h2>
            <p className="siem-section-subtitle">
              High-performance collector agents and connectors built for multi-cloud, hybrid, and on-premises environments.
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
            <span className="siem-section-tag">UNIFIED SECURITY MONITORING</span>
            <h2>Secure Your Infrastructure With NetCradus SIEM.</h2>
            <p>
              Unify log management, real-time threat hunting, event correlation, and automated playbook response in one intelligent system.
            </p>
            <div className="siem-cta-buttons">
              <Link to="/contact" className="siem-cta-btn-primary">
                <span>REQUEST A DEMO</span>
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
            <button className="endpoint-modal-close" onClick={() => setModalImage(null)}>
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
