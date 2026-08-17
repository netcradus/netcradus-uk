import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SJ = [
  "Verify identity directories",
  "Enforce zero trust policies",
  "API access keys isolation",
  "Automated session audits",
  "Role permissions tracing"
];

const _J = [
  "MFA authentication triggers",
  "Unattended agent installers",
  "Encrypted key management",
  "Privileged commands blocks",
  "Active gateways monitor"
];

const kJ = [
  {
    id: 1,
    title: "1. Access & Integrations",
    desc: "Enforce and govern API tokens and secure connected third-party tools dynamically across SaaS applications.",
    icon: "fa-key",
    color: "#FF6B00",
    badgeBg: "rgba(255, 107, 0, 0.12)",
    border: "rgba(255, 107, 0, 0.3)"
  },
  {
    id: 2,
    title: "2. Identity Verification",
    desc: "Verify user identities and directory configurations dynamically with single sign-on (SSO) and LDAP sync.",
    icon: "fa-id-card",
    color: "#8b5cf6",
    badgeBg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  },
  {
    id: 3,
    title: "3. Unattended Agent Install",
    desc: "Deploy host gateway agents automatically using silent shell commands for Windows, Linux, and Kubernetes.",
    icon: "fa-terminal",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: 4,
    title: "4. MFA & Step-Up Auth",
    desc: "Trigger multi-factor authentication (MFA) challenges automatically whenever anomalous tasks are detected.",
    icon: "fa-shield-lock",
    color: "#f59e0b",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)"
  },
  {
    id: 5,
    title: "5. Active Gateways Audit",
    desc: "Monitor enrolled proxy gateway endpoints continuously, tracking and recording sessions for compliance.",
    icon: "fa-eye",
    color: "#ef4444",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)"
  },
  {
    id: 6,
    title: "6. Role-Based Controls",
    desc: "Map user roles directly to resource permissions, and restrict background admin actions automatically.",
    icon: "fa-users-gear",
    color: "#ec4899",
    badgeBg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 7,
    title: "7. Secret Key Rotation",
    desc: "Securely generate and rotate API secrets and credentials automatically to prevent credential leakage.",
    icon: "fa-arrows-rotate",
    color: "#3b82f6",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 8,
    title: "8. Automated SOAR Block",
    desc: "Instruct security playbooks to disable user accounts and revoke active tokens instantly if exfiltration is seen.",
    icon: "fa-bolt",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  }
];

const EJ = [
  {
    title: "Fleet Ingestion",
    desc: "Track total enrolled gateways, online connection heartbeats, and offline devices instantly.",
    icon: "fa-server"
  },
  {
    title: "Silent Install Commands",
    desc: "Copy pre-configured terminal command strings to deploy host gateway connectors automatically.",
    icon: "fa-code"
  },
  {
    title: "Gateway Endpoints",
    desc: "Configure target secure gateway routing paths and monitor active proxy connections health.",
    icon: "fa-network-wired"
  },
  {
    title: "Token Secret Management",
    desc: "Securely view, copy, and regenerate live enrollment secrets for server agents.",
    icon: "fa-key"
  }
];

const MJ = [
  {
    title: "Enforce Step-Up MFA",
    desc: "Force immediate multi-factor challenges during suspicious administrative operations.",
    icon: "fa-shield-halved"
  },
  {
    title: "Revoke User Access",
    desc: "Disable compromised user accounts and expire single sign-on sessions dynamically.",
    icon: "fa-user-slash"
  },
  {
    title: "API Keys Invalidation",
    desc: "Expire active API access keys and credentials automatically across integrations.",
    icon: "fa-key"
  },
  {
    title: "Session Terminations",
    desc: "Sever active terminal proxy connection sessions executing unapproved commands.",
    icon: "fa-circle-xmark"
  },
  {
    title: "Logs Archival Ledgers",
    desc: "Store session keystroke logs and process activities securely for forensic audits.",
    icon: "fa-box-archive"
  },
  {
    title: "Containment Playbooks",
    desc: "Trigger SOAR workflows to quarantine infected host devices and modify firewall rules.",
    icon: "fa-bolt"
  }
];

const CJ = [
  {
    label: "Enrolled Fleet",
    value: "0 Enrolled",
    change: "Ready to Deploy",
    color: "#FF6B00"
  },
  {
    label: "Heartbeat Status",
    value: "Online (0)",
    change: "Active Syncing",
    color: "#10b981"
  },
  {
    label: "Session Latency",
    value: "<5 ms",
    change: "Zero Proxy Overhead",
    color: "#06b6d4"
  },
  {
    label: "Privileged Users",
    value: "04 Users",
    change: "Monitored Sessions",
    color: "#8b5cf6"
  },
  {
    label: "Policy Violations",
    value: "00",
    change: "Compliance Safe",
    color: "#ef4444"
  },
  {
    label: "Secrets Rotated",
    value: "14 Days",
    change: "Automated Lifecycle",
    color: "#ec4899"
  }
];

const TJ = [
  {
    name: "Workloads Identity",
    desc: "Enforce zero trust access across AWS IAM, Azure RBAC, GCP Operations, and Kubernetes service accounts.",
    icon: "fas fa-cloud",
    color: "#FF6B00",
    badge: "Cloud Gateways Sync",
    caps: [
      "Access policy audits",
      "Kube RBAC mapping",
      "IAM privilege checks",
      "Multi-Cloud role sync"
    ]
  },
  {
    name: "Identity Providers",
    desc: "Active Directory, Okta single sign-on, Microsoft Entra ID, and LDAP authentication catalogs.",
    icon: "fas fa-users-gear",
    color: "#8b5cf6",
    badge: "SSO Directory Bind",
    caps: [
      "MFA Step-Up Trigger",
      "OAuth token audit",
      "SSO session revoke",
      "Logon hours check"
    ]
  },
  {
    name: "Privileged Commands",
    desc: "Command-line terminal proxies, SSH tunnel gateways, and secure administrative web consoles.",
    icon: "fas fa-terminal",
    color: "#10b981",
    badge: "Session Telemetry Parse",
    caps: [
      "Keystroke recording",
      "Privileged command blocks",
      "SSH keys rotations",
      "Console access limits"
    ]
  },
  {
    name: "Operating Systems",
    desc: "Windows local administrator controls, Linux root audits, and macOS gateway security.",
    icon: "fas fa-desktop",
    color: "#3b82f6",
    badge: "Host OS Policies",
    caps: [
      "Root access tracking",
      "Local admins audits",
      "Process spawns blocks",
      "FIM registry sync"
    ]
  }
];

export default function Pam() {
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
                  IDENTITY PROTECTION
                </div>
                
                <h1 className="endpoint-hero-title">
                  NetCradus PAM <span className="gradient-text">Identity.</span>
                </h1>
                
                <p className="endpoint-hero-desc">
                  NetCradus PAM enforces Zero Trust access, monitors privileged admin sessions, and automates credentials rotation to prevent lateral movements and credential thefts.
                </p>
                
                <div className="endpoint-capabilities-wrapper">
                  <h4 className="endpoint-capabilities-heading">CORE PAM FUNCTIONS:</h4>
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
                    <span>Request PAM Trial</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <a href="#pam-console" className="endpoint-btn-secondary">
                    View Gateways Console
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
                    <span className="endpoint-browser-address">app.netcradus.com/acis-privileged-access</span>
                    <span className="endpoint-browser-title">ACCESS & INTEGRATIONS</span>
                  </div>
                  
                  <div className="endpoint-browser-image-container" onClick={() => setModalImage({ src: "/images/pam-dashboard.png", alt: "NetCradus PAM Credentials & Agent Deployment Console" })}>
                    <img src="/images/pam-dashboard.png" alt="NetCradus PAM Credentials & Agent Deployment Console" className="endpoint-browser-image" />
                    <div className="endpoint-image-overlay">
                      <i className="fas fa-expand"></i> Click to Expand PAM Console
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
            <span className="endpoint-section-tag">ZERO TRUST ACCESS RULES</span>
            <h2 className="endpoint-section-title">PAM Identity Capabilities</h2>
            <p className="endpoint-section-subtitle">
              Govern software API keys and monitor administrative terminal sessions across your enterprise systems.
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
                  <span>NETCRADUS PAM</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gateways Ingestion Section */}
      <section id="pam-console" className="endpoint-section bg-dark">
        <div className="endpoint-container">
          <div className="endpoint-section-header">
            <span className="endpoint-section-tag">ACCESS GATEWAYS</span>
            <h2 className="endpoint-section-title">API Credentials & Gateways Deployment</h2>
            <p className="endpoint-section-subtitle">
              Verify gateway heartbeats, monitor token secrets, and copy unattended installation scripts.
            </p>
          </div>

          <div className="endpoint-grid-3">
            
            {/* Box 1 */}
            <div className="endpoint-telemetry-card">
              <div>
                <div className="endpoint-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-server text-[#FF6B00]"></i> Gateways Ingestion
                  </h3>
                  <span className="endpoint-telemetry-badge-active">ACTIVE SYNC</span>
                </div>
                <div className="endpoint-telemetry-image-container" onClick={() => setModalImage({ src: "/images/pam-agent-deployment.png", alt: "Gateways Enrollment Console" })}>
                  <img src="/images/pam-agent-deployment.png" alt="Gateways Enrollment Console" className="endpoint-telemetry-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Enrolled Proxy Gateways</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Audit active connection states and gateway offline heartbeats dynamically.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="endpoint-telemetry-card">
              <div>
                <div className="endpoint-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-terminal text-[#8b5cf6]"></i> Silent Installation
                  </h3>
                  <span className="endpoint-telemetry-badge-live">AUTOMATED RUN</span>
                </div>
                <div className="endpoint-telemetry-image-container" onClick={() => setModalImage({ src: "/images/pam-silent-install.jpg", alt: "Silent Installation Commands Panel" })}>
                  <img src="/images/pam-silent-install.jpg" alt="Silent Installation Commands Panel" className="endpoint-telemetry-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Multi-OS Deploy Scripts</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Deploy local gateway client software using pre-built command strings for Windows, Linux, and Kubernetes.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="endpoint-telemetry-card">
              <div>
                <div className="endpoint-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-key text-[#10b981]"></i> Enrollment Secrets
                  </h3>
                  <span className="endpoint-telemetry-badge-subsecond">SECURE TOKENS</span>
                </div>
                <div className="endpoint-telemetry-image-container" onClick={() => setModalImage({ src: "/images/pam-keys-rotation.png", alt: "Token Secret Management Panel" })}>
                  <img src="/images/pam-keys-rotation.png" alt="Token Secret Management Panel" className="endpoint-telemetry-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Secret Keys Rotation</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Generate, view, and regenerate secure onboarding secrets and access tokens instantly.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PAM Control Section */}
      <section className="endpoint-section bg-dark-violet">
        <div className="endpoint-container">
          <div className="endpoint-hero-grid">
            
            <div className="endpoint-hero-left">
              <span className="endpoint-section-tag">IDENTITY TUNNELS</span>
              <h2 className="endpoint-section-title">Secure Proxy Workbenches</h2>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FF6B00', margin: 0 }}>Audit privileged logins and command scopes.</h3>
              <p className="endpoint-hero-desc" style={{ margin: 0 }}>
                Enforce command scopes, record SSH terminal proxy logs, and audit active logins dynamically via central gateways.
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
                  <span className="endpoint-browser-address" style={{ color: '#FF6B00' }}>app.netcradus.com/acis-pam-credentials</span>
                  <span className="endpoint-browser-title">GATEWAY DEPLOYMENT</span>
                </div>
                <div className="endpoint-browser-image-container" onClick={() => setModalImage({ src: "/images/pam-workbenches.jpg", alt: "Secure Gateway Deployment Panel" })}>
                  <img src="/images/pam-workbenches.jpg" alt="Secure Gateway Deployment Panel" className="endpoint-browser-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Gateway Console
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Enforcement Actions Sub-grid */}
      <section className="endpoint-section bg-dark">
        <div className="endpoint-container">
          <div className="endpoint-section-header">
            <span className="endpoint-section-tag">ZERO TRUST COMPLIANCE</span>
            <h2 className="endpoint-section-title">Automated Session Actions & Restrictions</h2>
            <p className="endpoint-section-subtitle">
              Trigger step-up MFA challenges, expire active OAuth tokens, and sever unauthorized SSH tunnels.
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
                  <span className="endpoint-browser-address" style={{ color: '#FF6B00' }}>app.netcradus.com/acis-pam-actions</span>
                  <span className="endpoint-browser-title">ACCESS RESTRICTIONS</span>
                </div>
                <div className="endpoint-browser-image-container" onClick={() => setModalImage({ src: "/images/pam-dashboard.png", alt: "Active Session Restrictions Panel" })}>
                  <img src="/images/pam-dashboard.png" alt="Active Session Restrictions Panel" className="endpoint-browser-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Restrictions Console
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
            <span className="endpoint-section-tag">CREDENTIALS ROTATION</span>
            <h2 className="endpoint-section-title">PAM Gateways Health Metrics</h2>
            <p className="endpoint-section-subtitle">
              Verify online host gateways counts, secrets lifecycle, and secure proxy latency metrics.
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
              <span className="endpoint-browser-address" style={{ color: '#FF6B00' }}>app.netcradus.com/acis-pam-dashboard</span>
              <span className="endpoint-browser-title">ACCESS CREDENTIALS SUMMARY</span>
            </div>
            <div className="endpoint-browser-image-container" onClick={() => setModalImage({ src: "/images/pam-dashboard.png", alt: "PAM Gateways Dashboard Overview" })}>
              <img src="/images/pam-dashboard.png" alt="PAM Gateways Dashboard Overview" className="endpoint-browser-image" />
              <div className="endpoint-image-overlay">
                <i className="fas fa-expand"></i> Click to Expand Dashboard Overview
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Environments Section */}
      <section className="endpoint-section bg-dark">
        <div className="endpoint-container">
          <div className="endpoint-section-header">
            <span className="endpoint-section-tag">IDENTITY VECTOR CONNECTIONS</span>
            <h2 className="endpoint-section-title">Govern Every Access Vector</h2>
            <p className="endpoint-section-subtitle">
              Secure, proxy-driven gateways built to monitor access logs dynamically across cloud and operating systems.
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
            <span className="endpoint-section-tag">SECURE ACCESS MANAGEMENT</span>
            <h2>Govern Privileged Credentials and Enforce Zero Trust Access.</h2>
            <p>
              Verify active user directory roles, rotate API secret keys automatically, and monitor terminal session proxy logs with NetCradus PAM.
            </p>
            <div className="endpoint-cta-buttons">
              <Link to="/contact" className="endpoint-cta-btn-primary">
                <span>REQUEST PAM ACCESS</span>
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
