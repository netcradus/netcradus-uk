import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SJ = [
  "Real-time IOC enrichment",
  "VirusTotal & AbuseIPDB sync",
  "Adversary mapping profiles",
  "Stealthy campaign tracking",
  "Vulnerability exploit scans"
];

const _J = [
  "Threat indicators database",
  "Automated context lookups",
  "Dynamic indicators tagging",
  "Historical search queries",
  "Incident correlation mapping"
];

const kJ = [
  {
    id: 1,
    title: "1. Real-Time IOC Enrichment",
    desc: "Query and enrich IP addresses, domains, file hashes, and registry keys instantly via VirusTotal & AbuseIPDB.",
    icon: "fa-magnifying-glass-shield",
    color: "#06b6d4",
    badgeBg: "rgba(6, 182, 212, 0.12)",
    border: "rgba(6, 182, 212, 0.3)"
  },
  {
    id: 2,
    title: "2. Adversary Intelligence",
    desc: "Map detected indicators directly to known threat actor groups, advanced campaigns, and custom playbooks.",
    icon: "fa-user-secret",
    color: "#8b5cf6",
    badgeBg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  },
  {
    id: 3,
    title: "3. MITRE ATT&CK Mapping",
    desc: "Understand threat behavior by mapping active exploits and tactics directly to MITRE frameworks.",
    icon: "fa-layer-group",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: 4,
    title: "4. Global Threat Feeds",
    desc: "Synchronize internal security alerts continuously with real-time global cyber threat indicator databases.",
    icon: "fa-rss",
    color: "#f59e0b",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)"
  },
  {
    id: 5,
    title: "5. Vulnerability Intel",
    desc: "Triage exposures and identify exploitation risks automatically using centralized CVE databases and advisories.",
    icon: "fa-circle-exclamation",
    color: "#ef4444",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)"
  },
  {
    id: 6,
    title: "6. Contextual Triage",
    desc: "Filter alert fatigue by correlating telemetry logs against validated global Threat Intelligence feeds.",
    icon: "fa-filter",
    color: "#ec4899",
    badgeBg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 7,
    title: "7. Query Workbench",
    desc: "Construct complex SQL-like queries to search for compromised indicators across historical database records.",
    icon: "fa-code",
    color: "#3b82f6",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 8,
    title: "8. SOAR Action Sync",
    desc: "Trigger playbook responses to block validated malicious indicators at firewalls and CDN edges automatically.",
    icon: "fa-bolt",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  }
];

const EJ = [
  {
    title: "Indicator Tracker",
    desc: "Track IP, URL, Domain and Hash indicators status in real-time across your environments.",
    icon: "fa-crosshairs"
  },
  {
    title: "Severity Profiling",
    desc: "Assess indicator severity levels automatically using dynamic scoring algorithms.",
    icon: "fa-chart-pie"
  },
  {
    title: "Source Breakdown",
    desc: "Trace indicator origins across VirusTotal, AbuseIPDB, and internal telemetry feeds.",
    icon: "fa-circle-nodes"
  },
  {
    title: "Interactive Enrichment",
    desc: "Run on-demand context searches and query threat attributes via simple input consoles.",
    icon: "fa-keyboard"
  }
];

const MJ = [
  {
    title: "Block Malicious IPs",
    desc: "Push block rules to firewall devices and DNS servers dynamically upon indicator confirmation.",
    icon: "fa-ban"
  },
  {
    title: "Domain Blacklisting",
    desc: "Invalidate routing access to detected phishing URLs and Command & Control nodes.",
    icon: "fa-globe"
  },
  {
    title: "Isolate Endpoint Hosts",
    desc: "Quarantine host devices exhibiting active compromised indicator activity.",
    icon: "fa-circle-xmark"
  },
  {
    title: "Incident Remediation",
    desc: "Identify and remove malicious files using cryptographic signature lookup matching.",
    icon: "fa-trash-can"
  },
  {
    title: "Forensic Investigation",
    desc: "Capture memory logs and process artifacts around confirmed indicator executions.",
    icon: "fa-dna"
  },
  {
    title: "Security Advisories",
    desc: "Compile indicators reports and notify compliance officers regarding critical CVEs.",
    icon: "fa-file-signature"
  }
];

const CJ = [
  {
    label: "Indicators Tracked",
    value: "1 Active",
    change: "Real-time Sync",
    color: "#06b6d4"
  },
  {
    label: "Threat Sources",
    value: "2 Services",
    change: "VirusTotal + AbuseIPDB",
    color: "#8b5cf6"
  },
  {
    label: "Queries Response",
    value: "<500 ms",
    change: "Sub-Second Enrichment",
    color: "#10b981"
  },
  {
    label: "Critical Alerts",
    value: "00",
    change: "No Threats Active",
    color: "#ef4444"
  },
  {
    label: "Indicator Score",
    value: "Low (0)",
    change: "Safe State Confirmed",
    color: "#ec4899"
  },
  {
    label: "Threat Feeds Ingested",
    value: "1.8M/day",
    change: "Global Intelligence",
    color: "#3b82f6"
  }
];

const TJ = [
  {
    name: "File Integrity Feeds",
    desc: "Identify trojans, ransomware payloads, and malicious binaries via hash signature analysis.",
    icon: "fas fa-file-code",
    color: "#06b6d4",
    badge: "Hash Fingerprints Sync",
    caps: [
      "MD5/SHA256 Match",
      "Yara Rule Scanning",
      "Process Exec Checks",
      "Binary Static Audit"
    ]
  },
  {
    name: "Network & DNS Intel",
    desc: "Track malicious command & control servers, proxy relays, and rogue DNS domains.",
    icon: "fas fa-network-wired",
    color: "#8b5cf6",
    badge: "IP Blacklist Streams",
    caps: [
      "Domain Reputation",
      "C2 Server Tracker",
      "Dynamic DNS Audit",
      "Phishing URL Blocks"
    ]
  },
  {
    name: "Vulnerability CVEs",
    desc: "Verify exposure status against active software vulnerability catalogues in real time.",
    icon: "fas fa-bug",
    color: "#10b981",
    badge: "CVE Databases Sync",
    caps: [
      "Exploit-DB Mapping",
      "Patch Status Audits",
      "Zero-Day Advisories",
      "Risk Score Profiles"
    ]
  },
  {
    name: "Host OS Telemetry",
    desc: "Correlate server access patterns and OS event indicators with active threat files.",
    icon: "fas fa-desktop",
    color: "#3b82f6",
    badge: "Kernel Events Check",
    caps: [
      "Lsass Memory Dumps",
      "Registry Key Audits",
      "Privilege Shifts Check",
      "Cron Job Mod Scans"
    ]
  }
];

export default function Cti() {
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
                  THREAT INTELLIGENCE
                </div>
                
                <h1 className="siem-hero-title">
                  NetCradus CTI <span className="gradient-text">Intelligence.</span>
                </h1>
                
                <p className="siem-hero-desc">
                  NetCradus CTI monitors, aggregates, and enriches indicators of compromise in real time. We query global intelligence networks and track adversary tactics dynamically to prevent zero-day attacks.
                </p>
                
                <div className="siem-capabilities-wrapper">
                  <h4 className="siem-capabilities-heading">CORE CTI FUNCTIONS:</h4>
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
                    <span>Request CTI Access</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <a href="#cti-console" className="siem-btn-secondary">
                    View Indicators Console
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
                    <span className="siem-browser-address">app.netcradus.com/acis-threat-intelligence</span>
                    <span className="siem-browser-title">THREAT INTELLIGENCE</span>
                  </div>
                  
                  <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-threat-intel.png", alt: "NetCradus CTI Indicators Console" })}>
                    <img src="/images/netxdr-siem-threat-intel.png" alt="NetCradus CTI Indicators Console" className="siem-browser-image" />
                    <div className="siem-image-overlay">
                      <i className="fas fa-expand"></i> Click to Expand Indicators Console
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
            <span className="siem-section-tag">THREAT INTELLIGENCE SYSTEM</span>
            <h2 className="siem-section-title">The Three Pillars of NetCradus CTI</h2>
            <p className="siem-section-subtitle">
              Live IOC enrichment, adversary campaign profiling, and compliance threat assessments working as a unified intelligence engine.
            </p>
          </div>

          <div className="siem-grid-3">
            {/* Pillar 1 */}
            <div className="siem-cap-card" style={{ borderColor: 'rgba(6, 182, 212, 0.3)' }}>
              <div>
                <div className="siem-cap-icon-wrapper" style={{ backgroundColor: 'rgba(6, 182, 212, 0.12)', color: '#06b6d4' }}>
                  <i className="fas fa-magnifying-glass text-lg"></i>
                </div>
                <h3 className="siem-cap-title">1. Live Enrichment</h3>
                <p className="siem-cap-desc" style={{ marginBottom: '1.25rem' }}>
                  Enrich suspicious parameters instantly by querying VirusTotal, AbuseIPDB, and national feeds in real time.
                </p>
                <div className="siem-capabilities-list" style={{ gap: '0.5rem' }}>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>On-demand domain lookup checks</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>File hash signature reputation scans</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Malicious IP address scoring</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Automated enrichment cache records</span>
                  </div>
                </div>
              </div>
              <div className="siem-cap-footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: '#06b6d4' }}>
                <span>ENRICHMENT LAYER</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>&lt;500 ms Response</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="siem-cap-card" style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}>
              <div>
                <div className="siem-cap-icon-wrapper" style={{ backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}>
                  <i className="fas fa-skull text-lg"></i>
                </div>
                <h3 className="siem-cap-title">2. Adversary Profiling</h3>
                <p className="siem-cap-desc" style={{ marginBottom: '1.25rem' }}>
                  Correlate incoming attack patterns with advanced persistent threats (APT) and cybercrime group signatures.
                </p>
                <div className="siem-capabilities-list" style={{ gap: '0.5rem' }}>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>APT group tradecraft tracking</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>MITRE ATT&CK technique mapping</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Phishing template fingerprinting</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Exploit-DB CVE correlation check</span>
                  </div>
                </div>
              </div>
              <div className="siem-cap-footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: '#10b981' }}>
                <span>PROFILING LAYER</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Real-time Mapping</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="siem-cap-card" style={{ borderColor: 'rgba(139, 92, 246, 0.3)' }}>
              <div>
                <div className="siem-cap-icon-wrapper" style={{ backgroundColor: 'rgba(139, 92, 246, 0.12)', color: '#8b5cf6' }}>
                  <i className="fas fa-shield-virus text-lg"></i>
                </div>
                <h3 className="siem-cap-title">3. Actionable Context</h3>
                <p className="siem-cap-desc" style={{ marginBottom: '1.25rem' }}>
                  Transform threat data into active network block rules, DNS quarantines, and endpoint security advisories instantly.
                </p>
                <div className="siem-capabilities-list" style={{ gap: '0.5rem' }}>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Dynamic block list auto-generation</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Firewall API block triggers sync</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>SaaS identity token revocation rules</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Compliance exposure warnings logs</span>
                  </div>
                </div>
              </div>
              <div className="siem-cap-footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: '#8b5cf6' }}>
                <span>ACTION LAYER</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>SOAR Playbooks Linked</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="siem-section bg-dark-violet">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">GLOBAL IOC CORRELATION</span>
            <h2 className="siem-section-title">Threat Intelligence Capabilities</h2>
            <p className="siem-section-subtitle">
              Unified threat lookup and indicators triage built on real-time integrations.
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
                  <span>NETCRADUS CTI</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Triage Section */}
      <section id="cti-console" className="siem-section bg-dark">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">INDICATOR ENRICHMENT</span>
            <h2 className="siem-section-title">Indicator Triage & Reputation Scoring</h2>
            <p className="siem-section-subtitle">
              Continuously audit threat indicators, map server severity levels, and track feeds origins.
            </p>
          </div>

          <div className="siem-grid-3">
            
            {/* Box 1 */}
            <div className="siem-telemetry-card">
              <div>
                <div className="siem-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-shapes text-[#06b6d4]"></i> Threat Intel Indicators
                  </h3>
                  <span className="siem-telemetry-badge-active">ACTIVE SYNC</span>
                </div>
                <div className="siem-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-threat-intel.png", alt: "Threat Intel Indicators Panel" })}>
                  <img src="/images/netxdr-siem-threat-intel.png" alt="Threat Intel Indicators Panel" className="siem-telemetry-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Tracked Indicators ledger</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Aggregated catalog of file hashes, COMMAND Control IPs, and compromised domain records.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="siem-telemetry-card">
              <div>
                <div className="siem-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-chart-pie text-[#8b5cf6]"></i> Severity Breakdown
                  </h3>
                  <span className="siem-telemetry-badge-live">DYNAMIC SCORING</span>
                </div>
                <div className="siem-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-threat-intel.png", alt: "Severity Breakdown Console" })}>
                  <img src="/images/netxdr-siem-threat-intel.png" alt="Severity Breakdown Console" className="siem-telemetry-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Vulnerability Scoring</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Calculate indicator severity profiles dynamically based on threat reputation metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="siem-telemetry-card">
              <div>
                <div className="siem-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-share-nodes text-[#10b981]"></i> Threat Sources Sync
                  </h3>
                  <span className="siem-telemetry-badge-subsecond">REAL-TIME</span>
                </div>
                <div className="siem-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-threat-intel.png", alt: "Threat Sources Integration Dashboard" })}>
                  <img src="/images/netxdr-siem-threat-intel.png" alt="Threat Sources Integration Dashboard" className="siem-telemetry-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Enrichment Integrations</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Trace indicators reputation ratings instantly across threat validation services.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Threat Profiling Section */}
      <section className="siem-section bg-dark-violet">
        <div className="siem-container">
          <div className="siem-hero-grid">
            
            <div className="siem-hero-left">
              <span className="siem-section-tag">DIAGNOSTICS</span>
              <h2 className="siem-section-title">Interactive Threat Profiling</h2>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#06b6d4', margin: 0 }}>Audit campaigns and verify footprints.</h3>
              <p className="siem-hero-desc" style={{ margin: 0 }}>
                Trace adversarial campaign structures and verify active vulnerability exploits dynamically using simple query inputs.
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
                  <span className="siem-browser-address" style={{ color: '#06b6d4' }}>app.netcradus.com/acis-threat-enrichment</span>
                  <span className="siem-browser-title">IOC LOOKUP CONSOLE</span>
                </div>
                <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-threat-intel.png", alt: "IOC Enrichment Search Interface" })}>
                  <img src="/images/netxdr-siem-threat-intel.png" alt="IOC Enrichment Search Interface" className="siem-browser-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Lookup Console
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
            <span className="siem-section-tag">PLAYBOOKS ALIGNMENT</span>
            <h2 className="siem-section-title">Automated Playbook Block Triggers</h2>
            <p className="siem-section-subtitle">
              Push block policies to firewalls and CDN edges automatically upon threat indicator verification.
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
                  <span className="siem-browser-address" style={{ color: '#06b6d4' }}>app.netcradus.com/acis-cti-remediation</span>
                  <span className="siem-browser-title">ACTIVE REACTION</span>
                </div>
                <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-threat-intel.png", alt: "CTI Active Containment Playbook" })}>
                  <img src="/images/netxdr-siem-threat-intel.png" alt="CTI Active Containment Playbook" className="siem-browser-image" />
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
            <span className="siem-section-tag">PERFORMANCE METRICS</span>
            <h2 className="siem-section-title">Threat Feeds Ingestion Summary</h2>
            <p className="siem-section-subtitle">
              Continuous visibility into threat indicator counts, connected lookup services, and feeds sync logs.
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
              <span className="siem-browser-address" style={{ color: '#06b6d4' }}>app.netcradus.com/acis-threat-intel-dashboard</span>
              <span className="siem-browser-title">THREAT INTELLIGENCE SUMMARY</span>
            </div>
            <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-threat-intel.png", alt: "Threat Intelligence Dashboard Overview" })}>
              <img src="/images/netxdr-siem-threat-intel.png" alt="Threat Intelligence Dashboard Overview" className="siem-browser-image" />
              <div className="siem-image-overlay">
                <i className="fas fa-expand"></i> Click to Expand Dashboard Overview
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Threat Feeds Category Section */}
      <section className="siem-section bg-dark">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">THREAT INTELLIGENCE FEEDS</span>
            <h2 className="siem-section-title">Correlate Threat Feeds Across All Vectors</h2>
            <p className="siem-section-subtitle">
              High-performance connectors and feeds parsing built for cloud, networks, SaaS, and host operating systems.
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
            <span className="siem-section-tag">REAL-TIME IOC ENRICHMENT</span>
            <h2>Identify and Contain Malicious Security Indicators Instantly.</h2>
            <p>
              Synchronize internal alerts with real-time global threat feeds, parse file hashes and commands, and automate CDN blocking with NetCradus CTI.
            </p>
            <div className="siem-cta-buttons">
              <Link to="/contact" className="siem-cta-btn-primary">
                <span>REQUEST CTI ACCESS</span>
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
