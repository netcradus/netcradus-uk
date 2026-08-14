import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SJ = [
  "Autonomous playbooks execution",
  "Real-time incident containment",
  "Third-party system connectors",
  "Automated analyst notifications",
  "Chain of custody preservation"
];

const _J = [
  "Custom playbook designer",
  "eBPF process terminations",
  "Multi-platform firewall blocks",
  "Identity access revocations",
  "Verification action logs"
];

const kJ = [
  {
    id: 1,
    title: "1. Playbook Orchestration",
    desc: "Design and execute visual playbooks to coordinate threat response steps across all enterprise security tools.",
    icon: "fa-bolt",
    color: "#FF6B00",
    badgeBg: "rgba(255, 107, 0, 0.12)",
    border: "rgba(255, 107, 0, 0.3)"
  },
  {
    id: 2,
    title: "2. Incident Containment",
    desc: "Isolate compromised host endpoints and sever suspicious active network connections in sub-second intervals.",
    icon: "fa-circle-xmark",
    color: "#ef4444",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)"
  },
  {
    id: 3,
    title: "3. Identity Access Lockout",
    desc: "Revoke Active Directory tokens, suspend compromised credentials, and block Okta/Entra identities instantly.",
    icon: "fa-user-xmark",
    color: "#ec4899",
    badgeBg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 4,
    title: "4. Network Edge Blocking",
    desc: "Push routing modifications and block rules to firewalls, load balancers, and Cloudflare CDN edges dynamically.",
    icon: "fa-shield-halved",
    color: "#3b82f6",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 5,
    title: "5. Process Invalidation",
    desc: "Instruct endpoint agents to terminate unauthorized background threads and kill rogue parent processes instantly.",
    icon: "fa-rectangle-xmark",
    color: "#f59e0b",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)"
  },
  {
    id: 6,
    title: "6. Event Triage & Alerts",
    desc: "Group alerts, filter background threat noise, and triage high-priority incidents automatically without analyst fatigue.",
    icon: "fa-triangle-exclamation",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: 7,
    title: "7. Secure Chain of Custody",
    desc: "Generate and store encrypted hashes of containment action logs to verify compliance standards and forensic integrity.",
    icon: "fa-box-archive",
    color: "#8b5cf6",
    badgeBg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  },
  {
    id: 8,
    title: "8. Continuous Optimization",
    desc: "Validate response performance metrics and optimize playbooks using automated post-incident simulation scripts.",
    icon: "fa-rotate",
    color: "#06b6d4",
    badgeBg: "rgba(6, 182, 212, 0.12)",
    border: "rgba(6, 182, 212, 0.3)"
  }
];

const EJ = [
  {
    title: "Session Expiry",
    desc: "Force immediate user logouts and invalidate active OAuth/SAML tokens across all applications.",
    icon: "fa-user-lock"
  },
  {
    title: "IP Edge Invalidation",
    desc: "Add rogue IP addresses to firewall edge blacklist pools within milliseconds of detection.",
    icon: "fa-network-wired"
  },
  {
    title: "Task Kill Scripts",
    desc: "Execute remote payload tasks to suspend registry changes and terminate bad services.",
    icon: "fa-microchip"
  },
  {
    title: "Audit Timeline Log",
    desc: "Maintain a cryptographic ledger of every automated step taken for security accountability.",
    icon: "fa-file-shield"
  }
];

const MJ = [
  {
    title: "Enforce Endpoint Isolation",
    desc: "Sever all external communications to host devices except for secure logging channels.",
    icon: "fa-circle-xmark"
  },
  {
    title: "Revoke API access keys",
    desc: "Deactivate compromised API keys and credentials automatically across SaaS tools.",
    icon: "fa-key"
  },
  {
    title: "Automate Triage Alerts",
    desc: "Synthesize incident timelines and dispatch alert digests to security coordinators.",
    icon: "fa-bell"
  },
  {
    title: "Contain Lateral Spreads",
    desc: "Trigger subnet blocks and routing modifications to isolate affected host segments.",
    icon: "fa-road-barrier"
  },
  {
    title: "Chain of Custody Archives",
    desc: "Store process artifacts and memory logs securely for historical audits.",
    icon: "fa-archive"
  },
  {
    title: "Vulnerability Scanning",
    desc: "Schedule automated vulnerability sweeps on surrounding assets to verify clean states.",
    icon: "fa-magnifying-glass-shield"
  }
];

const CJ = [
  {
    label: "Active Playbooks",
    value: "28 Active",
    change: "Continuous Triage",
    color: "#FF6B00"
  },
  {
    label: "Containment Speed",
    value: "<200 ms",
    change: "Sub-Second Action",
    color: "#ef4444"
  },
  {
    label: "Integrations Connected",
    value: "35 Systems",
    change: "Enterprise Connected",
    color: "#ec4899"
  },
  {
    label: "Incident Triage Rate",
    value: "100%",
    change: "Automated Filtering",
    color: "#3b82f6"
  },
  {
    label: "Playbook Runs (24h)",
    value: "1,482 runs",
    change: "Zero Analyst Overhead",
    color: "#10b981"
  },
  {
    label: "Pending Actions",
    value: "00",
    change: "Fully Remediated",
    color: "#8b5cf6"
  }
];

const TJ = [
  {
    name: "Cloud Integration",
    desc: "AWS GuardDuty, Azure Sentinel, GCP Security Command Center and Kubernetes clusters.",
    icon: "fas fa-cloud",
    color: "#FF6B00",
    badge: "API Webhook Hooks",
    caps: [
      "Container Terminations",
      "IAM Access Lock",
      "AWS SG Modifications",
      "Kube Pod Isolations"
    ]
  },
  {
    name: "Network Defense",
    desc: "Enterprise firewalls, Palo Alto NGFW, Cisco ASA, Cloudflare edges, and VPN concentrators.",
    icon: "fas fa-network-wired",
    color: "#ef4444",
    badge: "Edge Policy Blocks",
    caps: [
      "IP blacklisting triggers",
      "Routing modifications",
      "VPN session disconnects",
      "Cloudflare rule push"
    ]
  },
  {
    name: "Identity & SaaS",
    desc: "Active Directory, Okta single sign-on, Microsoft Entra ID, and Google Workspace.",
    icon: "fas fa-user-lock",
    color: "#ec4899",
    badge: "Token Invalidation",
    caps: [
      "Force MFA challenge",
      "Account suspension",
      "OAuth token revocation",
      "Password resets triggers"
    ]
  },
  {
    name: "Host Systems Response",
    desc: "Windows workstations, Linux servers, macOS devices, and local endpoint agents.",
    icon: "fas fa-desktop",
    color: "#3b82f6",
    badge: "Agent Process Kill",
    caps: [
      "Process tree termination",
      "Host network isolation",
      "Registry revert scripts",
      "Task Scheduler audits"
    ]
  }
];

export default function Soar() {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="endpoint-detection-page">
      
      {/* Hero Section */}
      <section className="endpoint-hero-section">
        <div className="endpoint-container">
          <div className="endpoint-hero-card">
            <div className="endpoint-hero-grid">
              
              <div className="endpoint-hero-left">
                <div className="endpoint-badge">
                  <span className="endpoint-badge-dot" />
                  INCIDENT RESPONSE
                </div>
                
                <h1 className="endpoint-hero-title">
                  NetCradus SOAR <span className="gradient-text">Playbooks.</span>
                </h1>
                
                <p className="endpoint-hero-desc">
                  NetCradus SOAR automates incident containment and playbook execution across your entire security stack, eliminating manual response delays and neutralizing threats in sub-seconds.
                </p>
                
                <div className="endpoint-capabilities-wrapper">
                  <h4 className="endpoint-capabilities-heading">CORE SOAR WORKFLOWS:</h4>
                  <div className="endpoint-capabilities-grid">
                    <div className="endpoint-capabilities-list">
                      {SJ.map((item, idx) => (
                        <div key={idx} className="endpoint-capability-item">
                          <span className="endpoint-check-icon-wrapper">
                            <i className="fas fa-check text-center" style={{ fontSize: '0.7rem' }}></i>
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="endpoint-capabilities-list">
                      {_J.map((item, idx) => (
                        <div key={idx} className="endpoint-capability-item">
                          <span className="endpoint-check-icon-wrapper">
                            <i className="fas fa-check text-center" style={{ fontSize: '0.7rem' }}></i>
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="endpoint-buttons-container">
                  <Link to="/contact" className="endpoint-btn-primary">
                    <span>Request SOAR Demo</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <a href="#soar-console" className="endpoint-btn-secondary">
                    View Playbook Console
                  </a>
                </div>
              </div>

              <div className="endpoint-hero-right">
                <div className="endpoint-browser-shell">
                  <div className="endpoint-browser-header">
                    <div className="endpoint-browser-dots">
                      <span className="endpoint-browser-dot red" />
                      <span className="endpoint-browser-dot yellow" />
                      <span className="endpoint-browser-dot green" />
                    </div>
                    <span className="endpoint-browser-address">app.netcradus.com/acis-soar-containment</span>
                    <span className="endpoint-browser-title">PLAYBOOK ORCHESTRATION</span>
                  </div>
                  
                  <div className="endpoint-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-soar-playbooks.png", alt: "NetCradus SOAR Playbooks Console" })}>
                    <img src="/images/netxdr-siem-soar-playbooks.png" alt="NetCradus SOAR Playbooks Console" className="endpoint-browser-image" />
                    <div className="endpoint-image-overlay">
                      <i className="fas fa-expand"></i> Click to Expand SOAR Playbook
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="endpoint-section bg-dark-violet">
        <div className="endpoint-container">
          <div className="endpoint-section-header">
            <span className="endpoint-section-tag">AUTONOMOUS SECURITY ORCHESTRATION</span>
            <h2 className="endpoint-section-title">SOAR Automation Capabilities</h2>
            <p className="endpoint-section-subtitle">
              Scale your security operations with standardized, executable response guides running across all system layers.
            </p>
          </div>

          <div className="endpoint-grid-4">
            {kJ.map((card) => (
              <div key={card.id} className="endpoint-cap-card" style={{ borderColor: card.border }}>
                <div>
                  <div className="endpoint-cap-icon-wrapper" style={{ backgroundColor: card.badgeBg, color: card.color }}>
                    <i className={`fas ${card.icon} text-lg`}></i>
                  </div>
                  <h3 className="endpoint-cap-title">{card.title}</h3>
                  <p className="endpoint-cap-desc">{card.desc}</p>
                </div>
                <div className="endpoint-cap-footer">
                  <span>NETCRADUS SOAR</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response Section */}
      <section id="soar-console" className="endpoint-section bg-dark">
        <div className="endpoint-container">
          <div className="endpoint-section-header">
            <span className="endpoint-section-tag">CONTAINMENT PLAYBOOKS</span>
            <h2 className="endpoint-section-title">Automated Event Response & Incident Containment</h2>
            <p className="endpoint-section-subtitle">
              Configure and trace immediate execution steps to verify, quarantine, and remediate active threat paths.
            </p>
          </div>

          <div className="endpoint-grid-3">
            
            {/* Box 1 */}
            <div className="endpoint-telemetry-card">
              <div>
                <div className="endpoint-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-shapes text-[#FF6B00]"></i> Active Integrations
                  </h3>
                  <span className="endpoint-telemetry-badge-active">CONNECTED</span>
                </div>
                <div className="endpoint-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-soar-playbooks.png", alt: "Active Playbooks Console" })}>
                  <img src="/images/netxdr-siem-soar-playbooks.png" alt="Active Playbooks Console" className="endpoint-telemetry-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Cross-Domain Connectors</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Coordinate automated actions across third-party endpoint, network, active directories, and cloud frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="endpoint-telemetry-card">
              <div>
                <div className="endpoint-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-clock text-[#ef4444]"></i> Timeline Correlation
                  </h3>
                  <span className="endpoint-telemetry-badge-live">SUB-SECOND</span>
                </div>
                <div className="endpoint-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-soar-playbooks-dark.png", alt: "Timeline Correlation Console" })}>
                  <img src="/images/netxdr-siem-soar-playbooks-dark.png" alt="Timeline Correlation Console" className="endpoint-telemetry-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Autonomous Triage Logs</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Execute playbooks instantly upon threat confirmation, tracking every containment phase on an active graph.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="endpoint-telemetry-card">
              <div>
                <div className="endpoint-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-shield text-[#10b981]"></i> Cryptographic Ledger
                  </h3>
                  <span className="endpoint-telemetry-badge-subsecond">SECURE LOGS</span>
                </div>
                <div className="endpoint-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-soar-chain.png", alt: "Audit Chain of Custody Console" })}>
                  <img src="/images/netxdr-siem-soar-chain.png" alt="Audit Chain of Custody Console" className="endpoint-telemetry-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Chain of Custody
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Audit Chain of Custody</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Hash action parameters dynamically to maintain chronological proof of containment audits.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SOAR Action Block */}
      <section className="endpoint-section bg-dark-violet">
        <div className="endpoint-container">
          <div className="endpoint-hero-grid">
            
            <div className="endpoint-hero-left">
              <span className="endpoint-section-tag">EXECUTION PATHS</span>
              <h2 className="endpoint-section-title">Automated Playbook Workbenches</h2>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FF6B00', margin: 0 }}>Define rules and orchestrate playbooks.</h3>
              <p className="endpoint-hero-desc" style={{ margin: 0 }}>
                Develop conditional playbooks utilizing our drag-and-drop workflow designer, and test rules safety via integrated simulation tools.
              </p>
              
              <div className="endpoint-sub-grid">
                {EJ.map((item, idx) => (
                  <div key={idx} className="endpoint-sub-card">
                    <div className="endpoint-sub-icon-wrapper">
                      <i className={`fas ${item.icon} text-sm`}></i>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="endpoint-hero-right">
              <div className="endpoint-browser-shell">
                <div className="endpoint-browser-header">
                  <div className="endpoint-browser-dots">
                    <span className="endpoint-browser-dot red" />
                    <span className="endpoint-browser-dot yellow" />
                    <span className="endpoint-browser-dot green" />
                  </div>
                  <span className="endpoint-browser-address" style={{ color: '#FF6B00' }}>app.netcradus.com/acis-soar-designer</span>
                  <span className="endpoint-browser-title">PLAYBOOKS DESIGNER</span>
                </div>
                <div className="endpoint-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-soar-designer.png", alt: "Create SOAR Playbook Modal" })}>
                  <img src="/images/netxdr-siem-soar-designer.png" alt="Create SOAR Playbook Modal" className="endpoint-browser-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Playbooks Creator
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Automated Response Sub-grid */}
      <section className="endpoint-section bg-dark">
        <div className="endpoint-container">
          <div className="endpoint-section-header">
            <span className="endpoint-section-tag">REMEDIATION TASKS</span>
            <h2 className="endpoint-section-title">Automated Playbook Remediation Actions</h2>
            <p className="endpoint-section-subtitle">
              Coordinate remediation scripts, revert system states, and remove malicious components automatically.
            </p>
          </div>

          <div className="endpoint-hero-grid">
            
            <div className="endpoint-hero-left">
              <div className="endpoint-browser-shell">
                <div className="endpoint-browser-header">
                  <div className="endpoint-browser-dots">
                    <span className="endpoint-browser-dot red" />
                    <span className="endpoint-browser-dot yellow" />
                    <span className="endpoint-browser-dot green" />
                  </div>
                  <span className="endpoint-browser-address" style={{ color: '#FF6B00' }}>app.netcradus.com/acis-soar-remediation</span>
                  <span className="endpoint-browser-title">ACTIVE REMEDIATION</span>
                </div>
                <div className="endpoint-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-soar-playbooks.png", alt: "Automated Playbook Remediation Console" })}>
                  <img src="/images/netxdr-siem-soar-playbooks.png" alt="Automated Playbook Remediation Console" className="endpoint-browser-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Remediation Console
                  </div>
                </div>
              </div>
            </div>

            <div className="endpoint-hero-right">
              <div className="endpoint-sub-grid">
                {MJ.map((item, idx) => (
                  <div key={idx} className="endpoint-sub-card">
                    <div className="endpoint-sub-icon-wrapper" style={{ backgroundColor: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00' }}>
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
      <section className="endpoint-section bg-dark-violet">
        <div className="endpoint-container">
          <div className="endpoint-section-header">
            <span className="endpoint-section-tag">PERFORMANCE METRICS</span>
            <h2 className="endpoint-section-title">Automated Playbook Performance Metrics</h2>
            <p className="endpoint-section-subtitle">
              Continuous validation and performance tracking of automated containment playbooks.
            </p>
          </div>

          <div className="endpoint-stats-grid">
            {CJ.map((item, idx) => (
              <div key={idx} className="endpoint-stats-card">
                <span className="stats-label">{item.label}</span>
                <span className="stats-value" style={{ color: item.color }}>{item.value}</span>
                <span className="stats-change">{item.change}</span>
              </div>
            ))}
          </div>

          <div className="endpoint-browser-shell">
            <div className="endpoint-browser-header">
              <div className="endpoint-browser-dots">
                <span className="endpoint-browser-dot red" />
                <span className="endpoint-browser-dot yellow" />
                <span className="endpoint-browser-dot green" />
              </div>
              <span className="endpoint-browser-address" style={{ color: '#FF6B00' }}>app.netcradus.com/acis-soar-dashboard</span>
              <span className="endpoint-browser-title">PLAYBOOKS RUNS METRICS</span>
            </div>
            <div className="endpoint-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-soar-playbooks.png", alt: "SOAR Metrics Dashboard" })}>
              <img src="/images/netxdr-siem-soar-playbooks.png" alt="SOAR Metrics Dashboard" className="endpoint-browser-image" />
              <div className="endpoint-image-overlay">
                <i className="fas fa-expand"></i> Click to Expand Metrics Console
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Environments Section */}
      <section className="endpoint-section bg-dark">
        <div className="endpoint-container">
          <div className="endpoint-section-header">
            <span className="endpoint-section-tag">CONNECTIVITY ENVIRONMENT</span>
            <h2 className="endpoint-section-title">Remediate Across All Environments</h2>
            <p className="endpoint-section-subtitle">
              Secure, API-driven plugins and connectors designed to trigger immediate actions across multi-cloud and on-premises environments.
            </p>
          </div>

          <div className="endpoint-grid-4">
            {TJ.map((item, idx) => (
              <div key={idx} className="endpoint-env-card">
                <div className="endpoint-env-icon-wrapper" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                  <i className={`${item.icon} text-lg`}></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', margin: '0 0 0.5rem 0' }}>{item.name}</h3>
                  <span className="endpoint-env-badge">{item.badge}</span>
                  <p className="endpoint-env-desc">{item.desc}</p>
                </div>
                <div className="endpoint-env-caps">
                  {item.caps.map((cap, cIdx) => (
                    <div key={cIdx} className="endpoint-env-bullet">
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
      <section className="endpoint-cta-section">
        <div className="endpoint-container">
          <div className="endpoint-cta-card">
            <span className="endpoint-section-tag">AUTOMATED THREAT CONTAINMENT</span>
            <h2>Remediate Cyber Threats Autonomously in Sub-Seconds.</h2>
            <p>
              Deploy standardized playbook responses, orchestrate actions across your security stack, and neutralize lateral threats with NetCradus SOAR.
            </p>
            <div className="endpoint-cta-buttons">
              <Link to="/contact" className="endpoint-cta-btn-primary">
                <span>REQUEST SOAR DEMO</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/platform" className="endpoint-cta-btn-secondary">
                EXPLORE PLATFORM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Glassmorphic Lightbox Zoom Modal */}
      {modalImage && (
        <div className="endpoint-modal-overlay" onClick={() => setModalImage(null)}>
          <div className="endpoint-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="endpoint-modal-close" onClick={() => setModalImage(null)}>
              &times;
            </button>
            <img src={modalImage.src} alt={modalImage.alt} className="endpoint-modal-img" />
            <p className="endpoint-modal-caption">{modalImage.alt}</p>
          </div>
        </div>
      )}

    </div>
  );
}
