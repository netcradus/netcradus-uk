import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SJ = [
  "Real-time endpoint protection",
  "Process & behavior monitoring",
  "Malware detection",
  "File integrity monitoring",
  "Endpoint vulnerability assessment"
];

const _J = [
  "Application & device control",
  "Suspicious activity detection",
  "Endpoint isolation",
  "Automated remediation",
  "Endpoint telemetry collection"
];

const kJ = [
  {
    id: 1,
    title: "1. Real-Time Protection",
    desc: "Continuous endpoint telemetry auditing, kernel-level hook monitoring, and instantaneous threat prevention across all hosts.",
    icon: "fa-shield-halved",
    color: "#7C3AED",
    badgeBg: "rgba(124, 58, 237, 0.12)",
    border: "rgba(124, 58, 237, 0.3)"
  },
  {
    id: 2,
    title: "2. Malware Detection",
    desc: "Detect known signatures, polymorphous malware, and zero-day execution vectors using behavioral machine learning models.",
    icon: "fa-bug-slash",
    color: "#EF4444",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)"
  },
  {
    id: 3,
    title: "3. Behavioral Detection",
    desc: "Identify suspicious process chains, parent-child process anomalies, memory injection attempts, and unauthorized PowerShell calls.",
    icon: "fa-network-wired",
    color: "#FF6B00",
    badgeBg: "rgba(255, 107, 0, 0.12)",
    border: "rgba(255, 107, 0, 0.3)"
  },
  {
    id: 4,
    title: "4. Vulnerability Assessment",
    desc: "Continuously scan installed software packages, OS patch levels, and misconfigured security settings across the fleet.",
    icon: "fa-triangle-exclamation",
    color: "#F59E0B",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)"
  },
  {
    id: 5,
    title: "5. File Integrity Monitoring",
    desc: "Audit critical system files, SAM registry hives, and DLL libraries for unauthorized modifications or stealthy persistence.",
    icon: "fa-file-shield",
    color: "#10B981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: 6,
    title: "6. Device Control",
    desc: "Enforce strict peripheral access policies for USB drives, external storage devices, and unauthorized network adapters.",
    icon: "fa-laptop-code",
    color: "#3B82F6",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 7,
    title: "7. Endpoint Isolation",
    desc: "Instantly sever network communication for compromised endpoints with a single click or automated response policy.",
    icon: "fa-circle-xmark",
    color: "#EC4899",
    badgeBg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 8,
    title: "8. Automated Remediation",
    desc: "Roll back ransomware modifications, purge malicious registry keys, and restore original clean file states automatically.",
    icon: "fa-sync",
    color: "#8B5CF6",
    badgeBg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  }
];

const EJ = [
  {
    title: "Behavioral Detection",
    desc: "Analyze memory allocations, process thread injection, and token impersonation to catch fileless stealth attacks.",
    icon: "fa-microchip"
  },
  {
    title: "IOC Matching",
    desc: "Query live system activity against global threat feeds, YARA rules, and domain blacklists in real time.",
    icon: "fa-search"
  },
  {
    title: "MITRE ATT&CK Mapping",
    desc: "Automatically align detected endpoint events to MITRE tactics, techniques, and sub-techniques.",
    icon: "fa-layer-group"
  },
  {
    title: "Advanced Threat Hunting Engine",
    desc: "SQL-like telemetry query builder for SOC analysts to execute historical searches across millions of log lines.",
    icon: "fa-bullseye"
  }
];

const MJ = [
  {
    title: "Automated Device Isolation",
    desc: "Cut off external and internal network connectivity while preserving encrypted SOC telemetry access.",
    icon: "fa-circle-xmark"
  },
  {
    title: "Process Termination",
    desc: "Instantly kill malicious child processes, script runtimes, and suspicious memory threads in <100ms.",
    icon: "fa-bolt-lightning"
  },
  {
    title: "File Quarantine",
    desc: "Automatically isolate suspicious executables, payload scripts, and suspicious DLLs into a secure vault.",
    icon: "fa-box-archive"
  },
  {
    title: "Network Containment",
    desc: "Block malicious outbound C2 IP addresses and invalidate compromised Active Directory Kerberos tokens.",
    icon: "fa-shield-halved"
  },
  {
    title: "Forensic Incident Response",
    desc: "Generate full timeline forensic artifacts, process trees, and root-cause breakdown reports automatically.",
    icon: "fa-file-shield"
  },
  {
    title: "Automated Remediation",
    desc: "Clean malicious persistence mechanisms, system services, and scheduled tasks without re-imaging the host.",
    icon: "fa-sync"
  }
];

const CJ = [
  {
    label: "Endpoints Protected",
    value: "24,500+",
    change: "+12% this month",
    color: "#7C3AED"
  },
  {
    label: "Active Agents",
    value: "99.98%",
    change: "Healthy Heartbeat",
    color: "#10B981"
  },
  {
    label: "Threats Blocked (24h)",
    value: "1,420",
    change: "Sub-Second Containment",
    color: "#FF6B00"
  },
  {
    label: "High-Risk Hosts",
    value: "03",
    change: "Action Required",
    color: "#EF4444"
  },
  {
    label: "Isolated Systems",
    value: "01",
    change: "Quarantined",
    color: "#EC4899"
  },
  {
    label: "Vulnerabilities Patched",
    value: "8,940",
    change: "Continuous Assessment",
    color: "#3B82F6"
  }
];

const TJ = [
  {
    name: "Windows",
    desc: "Windows 10/11 Workstations & Windows Server 2016-2025.",
    icon: "fab fa-windows",
    color: "#3B82F6",
    badge: "EPP + EDR + NGAV",
    caps: [
      "Memory Injection Guard",
      "Anti-Ransomware Shield",
      "ETW Event Audit",
      "Registry File Lock"
    ]
  },
  {
    name: "Linux Servers",
    desc: "Enterprise Linux distributions (RHEL, Ubuntu, Debian, CentOS, AlmaLinux).",
    icon: "fab fa-linux",
    color: "#FF6B00",
    badge: "Kernel eBPF Audit",
    caps: [
      "eBPF System Call Audit",
      "SSH Brute-Force Shield",
      "Container Runtime Defense",
      "Rootkit Prevention"
    ]
  },
  {
    name: "macOS",
    desc: "macOS Ventura, Sonoma & Sequoia running Apple Silicon or Intel.",
    icon: "fab fa-apple",
    color: "#10B981",
    badge: "System Extension Agent",
    caps: [
      "Endpoint Security Framework",
      "Gatekeeper Enforcement",
      "XProtect Log Sync",
      "File Integrity Monitor"
    ]
  },
  {
    name: "Cloud & IoT",
    desc: "AWS EC2, Azure VMs, GCP Compute, Kubernetes Nodes & OT Gateways.",
    icon: "fas fa-cloud",
    color: "#8B5CF6",
    badge: "Container Telemetry",
    caps: [
      "Kubernetes Pod Isolation",
      "Virtual Machine Guard",
      "OT Sensor Telemetry",
      "Multi-Cloud Workload Shield"
    ]
  }
];

export default function EndpointDetection() {
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
                  ENDPOINT SECURITY
                </div>
                
                <h1 className="endpoint-hero-title">
                  Protect Every <span className="gradient-text">Endpoint.</span>
                </h1>
                
                <p className="endpoint-hero-desc">
                  NetCradus XDR protects endpoints across your entire digital environment, including Windows, Linux, macOS, servers, laptops, workstations, cloud workloads, and IoT devices.
                </p>
                
                <div className="endpoint-capabilities-wrapper">
                  <h4 className="endpoint-capabilities-heading">KEY CAPABILITIES:</h4>
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
                    <span>Request Demo</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <a href="#live-telemetry" className="endpoint-btn-secondary">
                    View Live Console
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
                    <span className="endpoint-browser-address">app.netcradus.com/xdr-endpoints-management</span>
                    <span className="endpoint-browser-title">NETCRADUS CONSOLE</span>
                  </div>
                  
                  <div className="endpoint-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-endpoints-management.png", alt: "NetCradus Endpoint Security Dashboard" })}>
                    <img src="/images/netxdr-endpoints-management.png" alt="NetCradus Endpoint Security Dashboard" className="endpoint-browser-image" />
                    <div className="endpoint-image-overlay">
                      <i className="fas fa-expand"></i> Click to Expand NetCradus Dashboard
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
            <span className="endpoint-section-tag">COMPREHENSIVE ENDPOINT DEFENSE</span>
            <h2 className="endpoint-section-title">Enterprise Endpoint Capabilities</h2>
            <p className="endpoint-section-subtitle">
              Complete, end-to-end protection for every host across your organization, preventing ransomware, fileless exploits, and lateral movement.
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
                  <span>NETCRADUS EPP</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Telemetry Section */}
      <section id="live-telemetry" className="endpoint-section bg-dark">
        <div className="endpoint-container">
          <div className="endpoint-section-header">
            <span className="endpoint-section-tag">LIVE TELEMETRY & CONSOLE</span>
            <h2 className="endpoint-section-title">Centralized Host Visibility & Threat Isolation</h2>
            <p className="endpoint-section-subtitle">
              Inspect real-time process execution logs, active agent health scores, endpoint telemetry, and threat hunting indicators from a centralized security console.
            </p>
          </div>

          <div className="endpoint-grid-3">
            
            {/* Box 1 */}
            <div className="endpoint-telemetry-card">
              <div>
                <div className="endpoint-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-desktop text-[#FF6B00]"></i> Endpoint Telemetry Agent
                  </h3>
                  <span className="endpoint-telemetry-badge-active">ACTIVE</span>
                </div>
                <div className="endpoint-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-endpoints-management.png", alt: "Endpoint Telemetry Agent" })}>
                  <img src="/images/netxdr-endpoints-management.png" alt="Endpoint Telemetry Agent" className="endpoint-telemetry-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Windows & Linux Process Telemetry</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Real-time monitoring of process lineage, ETW events, memory modifications, file activity, and network connections.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="endpoint-telemetry-card">
              <div>
                <div className="endpoint-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-magnifying-glass text-[#7C3AED]"></i> Threat Hunting & IOC Matching
                  </h3>
                  <span className="endpoint-telemetry-badge-live">LIVE STREAM</span>
                </div>
                <div className="endpoint-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-threat-hunting-ioc.png", alt: "Threat Hunting & IOC Matching" })}>
                  <img src="/images/netxdr-threat-hunting-ioc.png" alt="Threat Hunting & IOC Matching" className="endpoint-telemetry-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Adversary TTP & Hash Search</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Search endpoint behavior against global indicators, YARA rules, MITRE ATT&CK techniques, and threat intelligence feeds.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="endpoint-telemetry-card">
              <div>
                <div className="endpoint-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-bolt text-[#EC4899]"></i> Real-Time Containment Engine
                  </h3>
                  <span className="endpoint-telemetry-badge-subsecond">SUB-SECOND</span>
                </div>
                <div className="endpoint-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-realtime-detections.png", alt: "Real-Time Containment Engine" })}>
                  <img src="/images/netxdr-realtime-detections.png" alt="Real-Time Containment Engine" className="endpoint-telemetry-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Automated Device Isolation</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Automatically detect suspicious activity and trigger containment workflows when high-risk behavior is identified.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Threat Hunting Section */}
      <section className="endpoint-section bg-dark-violet">
        <div className="endpoint-container">
          <div className="endpoint-hero-grid">
            
            <div className="endpoint-hero-left">
              <span className="endpoint-section-tag">PROACTIVE DEFENSE</span>
              <h2 className="endpoint-section-title">Proactive Threat Hunting</h2>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FF6B00', margin: 0 }}>Find threats before they become incidents.</h3>
              <p className="endpoint-hero-desc" style={{ margin: 0 }}>
                NetCradus continuously analyzes endpoint telemetry, process behavior, network activity, file changes, and suspicious execution patterns to uncover stealthy adversaries.
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
                  <span className="endpoint-browser-address" style={{ color: '#FF6B00' }}>THREAT HUNTING ENGINE</span>
                  <span className="endpoint-browser-title">MITRE ATT&CK RETROSPECTION</span>
                </div>
                <div className="endpoint-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-threat-hunting-ioc.png", alt: "Proactive Threat Hunting Workbench" })}>
                  <img src="/images/netxdr-threat-hunting-ioc.png" alt="Proactive Threat Hunting Workbench" className="endpoint-browser-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Threat Hunting Console
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Automated Response Section */}
      <section className="endpoint-section bg-dark">
        <div className="endpoint-container">
          <div className="endpoint-section-header">
            <span className="endpoint-section-tag">AUTOMATED RESPONSE</span>
            <h2 className="endpoint-section-title">Contain Threats Before They Spread.</h2>
            <p className="endpoint-section-subtitle">
              When malicious activity is detected, NetCradus can automatically isolate affected endpoints, terminate malicious processes, quarantine files, and initiate remediation workflows.
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
                  <span className="endpoint-browser-address" style={{ color: '#EC4899' }}>AUTOMATED ISOLATION PLAYBOOK</span>
                  <span className="endpoint-browser-title" style={{ color: '#34d399' }}>EXECUTED</span>
                </div>
                <div className="endpoint-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-realtime-detections.png", alt: "Automated Device Isolation Console" })}>
                  <img src="/images/netxdr-realtime-detections.png" alt="Automated Device Isolation Console" className="endpoint-browser-image" />
                  <div className="endpoint-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Isolation Console
                  </div>
                </div>
              </div>
            </div>

            <div className="endpoint-hero-right">
              <div className="endpoint-sub-grid">
                {MJ.map((item, idx) => (
                  <div key={idx} className="endpoint-sub-card response-theme">
                    <div className="endpoint-sub-icon-wrapper response-theme">
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
      <section className="endpoint-section bg-dark-violet">
        <div className="endpoint-container">
          <div className="endpoint-section-header">
            <span className="endpoint-section-tag">ENTERPRISE TELEMETRY</span>
            <h2 className="endpoint-section-title">Complete Endpoint Intelligence.</h2>
            <p className="endpoint-section-subtitle">
              Get complete visibility into endpoint health, users, processes, applications, network connections, vulnerabilities, and security events.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="endpoint-stats-grid">
            {CJ.map((item, idx) => (
              <div key={idx} className="endpoint-stats-card">
                <span className="stats-label">{item.label}</span>
                <span className="stats-value" style={{ color: item.color }}>{item.value}</span>
                <span className="stats-change">{item.change}</span>
              </div>
            ))}
          </div>

          {/* Centralized Dashboard */}
          <div className="endpoint-browser-shell">
            <div className="endpoint-browser-header">
              <div className="endpoint-browser-dots">
                <span className="endpoint-browser-dot red" />
                <span className="endpoint-browser-dot yellow" />
                <span className="endpoint-browser-dot green" />
              </div>
              <span className="endpoint-browser-address" style={{ color: '#FF6B00' }}>CYRIX CYBER DEFENSE PLATFORM DASHBOARD</span>
              <span className="endpoint-browser-title">REAL-TIME TELEMETRY AUDIT</span>
            </div>
            <div className="endpoint-browser-image-container" onClick={() => setModalImage({ src: "/images/cyrix-dashboard.png", alt: "CYRIX Cyber Defense Platform Dashboard" })}>
              <img src="/images/cyrix-dashboard.png" alt="CYRIX Cyber Defense Platform Dashboard" className="endpoint-browser-image" />
              <div className="endpoint-image-overlay">
                <i className="fas fa-expand"></i> Click to Expand CYRIX Platform Dashboard
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Environments Section */}
      <section className="endpoint-section bg-dark">
        <div className="endpoint-container">
          <div className="endpoint-section-header">
            <span className="endpoint-section-tag">CROSS-PLATFORM DEFENSE</span>
            <h2 className="endpoint-section-title">Protect Every Environment.</h2>
            <p className="endpoint-section-subtitle">
              Lightweight, high-performance agent architecture built for heterogeneous enterprise environments.
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
            <span className="endpoint-section-tag">UNIFIED CYBER IMMUNITY</span>
            <h2>Secure Every Endpoint With NetCradus.</h2>
            <p>
              Unify endpoint protection, threat hunting, detection, and automated response in one intelligent security platform.
            </p>
            <div className="endpoint-cta-buttons">
              <Link to="/contact" className="endpoint-cta-btn-primary">
                <span>REQUEST A DEMO</span>
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
