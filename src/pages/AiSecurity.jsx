import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SJ = [
  "LLM prompt injection blocks",
  "Model weights exfil checks",
  "Inference query sanitation",
  "Real-time AI safety logs",
  "ONNX runtime system protection"
];

const _J = [
  "PII data masking rules",
  "RAG injection containment",
  "Latency diagnostics checks",
  "Model output validations",
  "AI incident forensics logs"
];

const kJ = [
  {
    id: 1,
    title: "1. Prompt Injection Firewalls",
    desc: "Inspect and intercept incoming inference prompts to block prompt injections, jailbreaks, and unauthorized system instructions.",
    icon: "fa-filter-shield",
    color: "#06b6d4",
    badgeBg: "rgba(6, 182, 212, 0.12)",
    border: "rgba(6, 182, 212, 0.3)"
  },
  {
    id: 2,
    title: "2. Model Weights Protection",
    desc: "Monitor model runtime files (ONNX, PyTorch) continuously to prevent weights manipulation and weights exfiltration.",
    icon: "fa-shield-halved",
    color: "#8b5cf6",
    badgeBg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  },
  {
    id: 3,
    title: "3. PII & Secret Data Masking",
    desc: "Mask credentials, API tokens, and personally identifiable information (PII) before prompts reach remote AI models.",
    icon: "fa-user-lock",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: 4,
    title: "4. RAG Injections Containment",
    desc: "Audit vector database retrievals dynamically to intercept poison embeddings and malicious RAG context injects.",
    icon: "fa-database",
    color: "#f59e0b",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)"
  },
  {
    id: 5,
    title: "5. Inference Latency Logs",
    desc: "Measure inference query validation overhead to maintain security filters without introducing performance lag.",
    icon: "fa-gauge",
    color: "#ef4444",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)"
  },
  {
    id: 6,
    title: "6. Model Outputs Validator",
    desc: "Sanitize model outputs in real time to filter out hallucinations, hate speech, and sensitive system data leakage.",
    icon: "fa-clipboard-check",
    color: "#ec4899",
    badgeBg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 7,
    title: "7. AI Safety Audits Ledger",
    desc: "Log every blocked prompt, PII mask action, and model exfiltration attempt in an encrypted ledger.",
    icon: "fa-box-archive",
    color: "#3b82f6",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 8,
    title: "8. Playbook Remediations Sync",
    desc: "Trigger SOAR playbooks automatically to lock out user accounts executing persistent prompt jailbreaks.",
    icon: "fa-bolt",
    color: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  }
];

const EJ = [
  {
    title: "Active LLM Models",
    desc: "Configure security rules and track queries across active enterprise models.",
    icon: "fa-brain"
  },
  {
    title: "Prompt Injections Blocked",
    desc: "Track prompt jailbreaks, system instructions hacks, and poisoned queries blocked.",
    icon: "fa-ban"
  },
  {
    title: "PII Elements Masked",
    desc: "Identify sensitive credentials, tokens, and PII masked before model transmission.",
    icon: "fa-user-lock"
  },
  {
    title: "Model Output Violations",
    desc: "Sanitize and block unauthorized outputs containing system paths or secrets.",
    icon: "fa-shield"
  }
];

const MJ = [
  {
    title: "Enforce Query Sanitation",
    desc: "Sanitize prompts dynamically to strip malicious code injections.",
    icon: "fa-filter-shield"
  },
  {
    title: "Revoke Account SSO",
    desc: "Lock directory accounts executing persistent prompt jailbreaks.",
    icon: "fa-user-slash"
  },
  {
    title: "Invalidate Model Access",
    desc: "Sever user connections to enterprise LLM nodes instantly.",
    icon: "fa-circle-xmark"
  },
  {
    title: "Isolate Endpoint Hosts",
    desc: "Quarantine developer host endpoints attempting weights manipulations.",
    icon: "fa-desktop"
  },
  {
    title: "Safety Audits Logs",
    desc: "Archive query timeline records dynamically to verify security audits.",
    icon: "fa-box-archive"
  },
  {
    title: "Compliance Alerts Sync",
    desc: "Dispatch alert summaries to risk assessment and governance compliance officers.",
    icon: "fa-bell"
  }
];

const CJ = [
  {
    label: "Protected Models",
    value: "0 Protected",
    change: "Continuous Monitoring",
    color: "#06b6d4"
  },
  {
    label: "Prompt Injections",
    value: "00 Blocked",
    change: "No Threats Fired",
    color: "#10b981"
  },
  {
    label: "PII Masks Run",
    value: "0 Runs",
    change: "Credentials Secured",
    color: "#8b5cf6"
  },
  {
    label: "Risk Score Index",
    value: "0 (Low)",
    change: "System Safe State",
    color: "#3b82f6"
  },
  {
    label: "Safety Audits Ingested",
    value: "20 Sources",
    change: "Real-time Telemetry",
    color: "#ec4899"
  },
  {
    label: "Unresolved Risks",
    value: "00",
    change: "Fully Remediated",
    color: "#ef4444"
  }
];

const TJ = [
  {
    name: "Model Runtimes",
    desc: "Secure PyTorch, ONNX, TensorFlow, and custom inference containers running on-premises or cloud.",
    icon: "fas fa-microchip",
    color: "#06b6d4",
    badge: "Runtime Kernel Scans",
    caps: [
      "ONNX weights audit",
      "Weights drift checks",
      "File integrity checks",
      "Container exploit scs"
    ]
  },
  {
    name: "Generative AI APIs",
    desc: "Secure API calls to OpenAI, Anthropic, Google Vertex AI, and local huggingface nodes.",
    icon: "fas fa-network-wired",
    color: "#8b5cf6",
    badge: "API Gateway Firewalls",
    caps: [
      "Jailbreak filters",
      "PII data mask scans",
      "Model outputs audit",
      "OAuth tokens check"
    ]
  },
  {
    name: "Vector Databases",
    desc: "Secure embeddings retrieval across Pinecone, Milvus, Qdrant, and local vector indices.",
    icon: "fas fa-database",
    color: "#10b981",
    badge: "Embeddings Scanners",
    caps: [
      "Poison embeddings checks",
      "RAG context sanitation",
      "Retrieve access checks",
      "Query distance audits"
    ]
  },
  {
    name: "Host Applications",
    desc: "Secure local enterprise chat apps, AI code assistants, and automated document parsers.",
    icon: "fas fa-desktop",
    color: "#3b82f6",
    badge: "App Context Scanners",
    caps: [
      "Prompt sanitations",
      "Response sanitations",
      "User credentials sync",
      "Exceptions reports logs"
    ]
  }
];

export default function AiSecurity() {
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
                  AI SECURITY
                </div>
                
                <h1 className="siem-hero-title">
                  NetCradus AI <span className="gradient-text">Security.</span>
                </h1>
                
                <p className="siem-hero-desc">
                  NetCradus AI Security intercepts malicious prompts, prevents weights exfiltration, and masks PII in real time to secure generative AI and LLM workloads across multi-cloud environments.
                </p>
                
                <div className="siem-capabilities-wrapper">
                  <h4 className="siem-capabilities-heading">CORE AI SECURITY FUNCTIONS:</h4>
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
                    <span>Request AI Security Trial</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <a href="#aisec-console" className="siem-btn-secondary">
                    View Security Console
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
                    <span className="siem-browser-address">app.netcradus.com/llm-login</span>
                    <span className="siem-browser-title">NETCRADUS LLM | LOGIN</span>
                  </div>
                  
                  <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netcradus-llm-login.png", alt: "NetCradus LLM Secure AI Platform Login" })}>
                    <img src="/images/netcradus-llm-login.png" alt="NetCradus LLM Secure AI Platform Login" className="siem-browser-image" />
                    <div className="siem-image-overlay">
                      <i className="fas fa-expand"></i> Click to Expand NetCradus LLM Login
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
            <span className="siem-section-tag">AI SAFETY ENGINE</span>
            <h2 className="siem-section-title">The Three Pillars of NetCradus AI Security</h2>
            <p className="siem-section-subtitle">
              Dynamic prompt filtering, model runtime protection, and vector database checks working as a unified AI firewall.
            </p>
          </div>

          <div className="siem-grid-3">
            {/* Pillar 1 */}
            <div className="siem-cap-card" style={{ borderColor: 'rgba(6, 182, 212, 0.3)' }}>
              <div>
                <div className="siem-cap-icon-wrapper" style={{ backgroundColor: 'rgba(6, 182, 212, 0.12)', color: '#06b6d4' }}>
                  <i className="fas fa-shield-halved text-lg"></i>
                </div>
                <h3 className="siem-cap-title">1. Prompt Firewalls</h3>
                <p className="siem-cap-desc" style={{ marginBottom: '1.25rem' }}>
                  Intercept prompts to strip jailbreaks, restrict system hacks, and mask sensitive PII fields.
                </p>
                <div className="siem-capabilities-list" style={{ gap: '0.5rem' }}>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Prompt injection validation scans</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Credentials & token data masking</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Hallucination output filters</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Latency diagnostic metrics logs</span>
                  </div>
                </div>
              </div>
              <div className="siem-cap-footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: '#06b6d4' }}>
                <span>PROMPT LAYER</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>&lt;10 ms Overhead</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="siem-cap-card" style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}>
              <div>
                <div className="siem-cap-icon-wrapper" style={{ backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}>
                  <i className="fas fa-microchip text-lg"></i>
                </div>
                <h3 className="siem-cap-title">2. Model Protection</h3>
                <p className="siem-cap-desc" style={{ marginBottom: '1.25rem' }}>
                  Secure weights runtime engines (ONNX, PyTorch) against model theft and configuration drift attacks.
                </p>
                <div className="siem-capabilities-list" style={{ gap: '0.5rem' }}>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Model weights exfil checks</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Inference execution profiling</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Tensorflow container audits</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#10b981' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Host kernel events monitoring</span>
                  </div>
                </div>
              </div>
              <div className="siem-cap-footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: '#10b981' }}>
                <span>RUNTIME LAYER</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Secure Inference</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="siem-cap-card" style={{ borderColor: 'rgba(139, 92, 246, 0.3)' }}>
              <div>
                <div className="siem-cap-icon-wrapper" style={{ backgroundColor: 'rgba(139, 92, 246, 0.12)', color: '#8b5cf6' }}>
                  <i className="fas fa-database text-lg"></i>
                </div>
                <h3 className="siem-cap-title">3. Vector Integrity</h3>
                <p className="siem-cap-desc" style={{ marginBottom: '1.25rem' }}>
                  Audit vector databases queries to detect poisoned context injections and unauthorized database updates.
                </p>
                <div className="siem-capabilities-list" style={{ gap: '0.5rem' }}>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Poisoned embeddings validation</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>RAG query validation checks</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Database write permissions scan</span>
                  </div>
                  <div className="siem-capability-item" style={{ fontSize: '0.8rem' }}>
                    <span className="siem-check-icon-wrapper" style={{ width: '18px', height: '18px', backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#8b5cf6' }}><i className="fas fa-check text-center" style={{ fontSize: '0.6rem' }}></i></span>
                    <span>Compliance exposure mappings</span>
                  </div>
                </div>
              </div>
              <div className="siem-cap-footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: '#8b5cf6' }}>
                <span>VECTOR LAYER</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>RAG Validation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="siem-section bg-dark-violet">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">SECURE AI DEPLOYMENT</span>
            <h2 className="siem-section-title">AI Security Platform Capabilities</h2>
            <p className="siem-section-subtitle">
              Unified prompt analysis, models risk assessments, and queries latencies checks.
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
                  <span>NETCRADUS AI SEC</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Triage Section */}
      <section id="aisec-console" className="siem-section bg-dark">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">AI SECURITY ENFORCEMENT</span>
            <h2 className="siem-section-title">Real-Time AI Security Monitoring</h2>
            <p className="siem-section-subtitle">
              Verify prompt validations states, check exfil queries logs, and trace PII mask rules.
            </p>
          </div>

          <div className="siem-grid-3">
            
            {/* Box 1 */}
            <div className="siem-telemetry-card">
              <div>
                <div className="siem-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-filter-shield text-[#06b6d4]"></i> Prompt Firewalls
                  </h3>
                  <span className="siem-telemetry-badge-active">ACTIVE SCAN</span>
                </div>
                <div className="siem-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-dashboard.png", alt: "Active Prompt Firewalls Panel" })}>
                  <img src="/images/netxdr-siem-dashboard.png" alt="Active Prompt Firewalls Panel" className="siem-telemetry-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Prompt Validation Rules</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Interposed sanitizers intercepting prompts to strip jailbreak attempts dynamically.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="siem-telemetry-card">
              <div>
                <div className="siem-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-ban text-[#8b5cf6]"></i> Injections Blocked
                  </h3>
                  <span className="siem-telemetry-badge-live">SUB-SECOND</span>
                </div>
                <div className="siem-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-dashboard.png", alt: "Prompt Injections Block Logs" })}>
                  <img src="/images/netxdr-siem-dashboard.png" alt="Prompt Injections Block Logs" className="siem-telemetry-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>Blocked Injection Logs</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Trace system instruction hacks, payload sizes, and user accounts profiles dynamically.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="siem-telemetry-card">
              <div>
                <div className="siem-telemetry-card-header">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <i className="fas fa-user-lock text-[#10b981]"></i> PII Masking Engine
                  </h3>
                  <span className="siem-telemetry-badge-subsecond">SECURE PIPELINE</span>
                </div>
                <div className="siem-telemetry-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-dashboard.png", alt: "PII Masking Pipeline Panel" })}>
                  <img src="/images/netxdr-siem-dashboard.png" alt="PII Masking Pipeline Panel" className="siem-telemetry-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand Screenshot
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', margin: 0 }}>PII Data Scanners</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    Mask API tokens and credentials fields automatically before query transmission to AI endpoints.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AI Controls Workbenches Section */}
      <section className="siem-section bg-dark-violet">
        <div className="siem-container">
          <div className="siem-hero-grid">
            
            <div className="siem-hero-left">
              <span className="siem-section-tag">AI DIAGNOSTICS</span>
              <h2 className="siem-section-title">Interactive AI Controls</h2>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#06b6d4', margin: 0 }}>Manage LLM systems and sanitize prompts.</h3>
              <p className="siem-hero-desc" style={{ margin: 0 }}>
                Audit active models, sanitize inference queries, and monitor compliance safety alerts via centralized AI workbenches.
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
                  <span className="siem-browser-address" style={{ color: '#06b6d4' }}>app.netcradus.com/acis-ai-controls</span>
                  <span className="siem-browser-title">AI CONTROLS PANEL</span>
                </div>
                <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-dashboard.png", alt: "Active LLM Models Controls Console" })}>
                  <img src="/images/netxdr-siem-dashboard.png" alt="Active LLM Models Controls Console" className="siem-browser-image" />
                  <div className="siem-image-overlay">
                    <i className="fas fa-expand"></i> Click to Expand AI Controls Console
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Playbook Actions Section */}
      <section className="siem-section bg-dark">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">AI CONTAINMENT REACTION</span>
            <h2 className="siem-section-title">Automated AI Threat Containment Playbooks</h2>
            <p className="siem-section-subtitle">
              Sanitize queries, revoke credentials access, and isolate developer host machines during weights modification threats.
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
                  <span className="siem-browser-address" style={{ color: '#06b6d4' }}>app.netcradus.com/acis-ai-containment</span>
                  <span className="siem-browser-title">AI CONTAINMENT PLAYBOOKS</span>
                </div>
                <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netxdr-siem-dashboard.png", alt: "AI Containment Playbook Designer" })}>
                  <img src="/images/netxdr-siem-dashboard.png" alt="AI Containment Playbook Designer" className="siem-browser-image" />
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
            <span className="siem-section-tag">SAFETY METRICS</span>
            <h2 className="siem-section-title">AI Security & Safety Metrics Overview</h2>
            <p className="siem-section-subtitle">
              Continuous visibility into protected enterprise models, blocked prompts jailbreaks, and sensitive data masks.
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
              <span className="siem-browser-address" style={{ color: '#06b6d4' }}>app.netcradus.com/llm-interface</span>
              <span className="siem-browser-title">NETCRADUS LLM | AI INTERFACE</span>
            </div>
            <div className="siem-browser-image-container" onClick={() => setModalImage({ src: "/images/netcradus-llm-interface.png", alt: "NetCradus LLM AI Interface Dashboard" })}>
              <img src="/images/netcradus-llm-interface.png" alt="NetCradus LLM AI Interface Dashboard" className="siem-browser-image" />
              <div className="siem-image-overlay">
                <i className="fas fa-expand"></i> Click to Expand NetCradus LLM Interface
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Threat Feeds Category Section */}
      <section className="siem-section bg-dark">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">AI SECURITY INTEGRATION VECTOR</span>
            <h2 className="siem-section-title">Secure AI Workloads Across All Vector Layers</h2>
            <p className="siem-section-subtitle">
              Secure model execution runtimes, GenAI APIs integration gates, vector database files, and host client applications.
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
            <span className="siem-section-tag">SECURE AI MODEL RUNTIMES</span>
            <h2>Intercept Prompt Jailbreaks and Prevent Model Weights Exploitation.</h2>
            <p>
              Deploy dynamic filters to sanitize inference queries, mask PII data fields, and audit vector databases context retrievals automatically with NetCradus AI Security.
            </p>
            <div className="siem-cta-buttons">
              <Link to="/contact" className="siem-cta-btn-primary">
                <span>REQUEST AI SEC ACCESS</span>
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
