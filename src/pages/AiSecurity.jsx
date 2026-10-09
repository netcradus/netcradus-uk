import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const METRICS_DATA = [
  {
    value: "90%",
    title: "Companies with Shadow AI Leaks",
    desc: "High majority of companies suffer from unapproved uploads of corporate data into public consumer models."
  },
  {
    value: "5x",
    title: "Increase in Automated Exploits",
    desc: "Hacker platforms are using LLMs to continuously rewrite and deliver targeted phishing payloads."
  },
  {
    value: "74%",
    title: "Vulnerability in Default LLM APIs",
    desc: "Most custom agent setups lack standard security safeguards against prompt injection exploits."
  }
];

const DEFENSE_OBJECTIVES = [
  {
    title: "Prompt Guardrails",
    desc: "Block semantic injection, prompt escapes, and system jailbreak commands at the API layer.",
    icon: "fa-filter-circle-xmark"
  },
  {
    title: "Data Leakage Prevention",
    desc: "Scan context histories to prevent customer PII or API secrets from reaching external model builders.",
    icon: "fa-user-lock"
  },
  {
    title: "Model Theft Isolation",
    desc: "Harden API access models to prevent parameter extraction and reverse-engineering of IP.",
    icon: "fa-box-archive"
  },
  {
    title: "Compliance Safeguards",
    desc: "Conform to regulatory framework guidelines (including EU AI Act, NIST AI Framework).",
    icon: "fa-scale-balanced"
  },
  {
    title: "Mitigate Model Poisoning",
    desc: "Audit and catalog input datasets to prevent malicious corruption of training sets.",
    icon: "fa-vial-circle-check"
  },
  {
    title: "Trust and Safety Auditing",
    desc: "Run continuous audits to eliminate hallucinations and secure AI decision logic.",
    icon: "fa-clipboard-check"
  }
];

const EXPERTISE_SERVICES = [
  {
    title: "AI Security Assessments",
    desc: "Holistic vulnerability assessments mapping model architectures and permission scopes.",
    icon: "fa-shield-halved"
  },
  {
    title: "AI Risk Audits",
    desc: "Mapping integration risks, shadow AI profiles and compliance posture metrics.",
    icon: "fa-clipboard-list"
  },
  {
    title: "Prompt Injection Testing",
    desc: "Simulated jailbreak assaults targeting custom LLM application layers.",
    icon: "fa-terminal"
  },
  {
    title: "AI Model Penetration Testing",
    desc: "Adversarial testing targeting model weights, parameter extraction, and extraction.",
    icon: "fa-bug-slash"
  },
  {
    title: "LLM Security Reviews",
    desc: "Validating API configuration limits, data storage systems, and agent permissions.",
    icon: "fa-magnifying-glass-chart"
  },
  {
    title: "AI Data Leakage Testing",
    desc: "Tracking data ingestion and egress vectors to prevent compliance leaks.",
    icon: "fa-arrow-up-from-bracket"
  },
  {
    title: "Secure AI Consulting",
    desc: "Strategic architecture design mapping model perimeters and secure host parameters.",
    icon: "fa-compass-drafting"
  },
  {
    title: "AI Governance Frameworks",
    desc: "Formulating enterprise AI usage, logging, and security compliance programs.",
    icon: "fa-file-signature"
  },
  {
    title: "Shadow AI Discovery",
    desc: "Continuous network detection of unauthorized model traffic and API connections.",
    icon: "fa-radar"
  }
];

const OPERATIONAL_STEPS = [
  {
    step: "01",
    name: "Intercept",
    desc: "Filter and log user prompts and model parameters before execution.",
    icon: "fa-filter",
    color: "#06b6d4"
  },
  {
    step: "02",
    name: "Filter",
    desc: "Apply real-time sanitization, regex patterns, and jailbreak detection.",
    icon: "fa-shield-virus",
    color: "#10b981"
  },
  {
    step: "03",
    name: "Sandbox",
    desc: "Execute model completions in isolated sandbox runtimes to prevent side-channel exploits.",
    icon: "fa-cube",
    color: "#8b5cf6"
  },
  {
    step: "04",
    name: "Audit",
    desc: "Continuous logging and compliance checking of completed transactions.",
    icon: "fa-list-check",
    color: "#f59e0b"
  },
  {
    step: "05",
    name: "Tune",
    desc: "Continuously update models, fine-tune safety guardrails, and retrain filters.",
    icon: "fa-sliders",
    color: "#ec4899"
  }
];

const TECH_INTEGRATIONS = [
  {
    title: "OpenAI API",
    desc: "Prompt inspection, GPT guardrails and audit logging.",
    icon: "fa-brain"
  },
  {
    title: "Anthropic Claude",
    desc: "Access telemetry analysis and compliance audits.",
    icon: "fa-robot"
  },
  {
    title: "LangChain Sec.",
    desc: "Pipeline isolation, agent sandboxing and flow checks.",
    icon: "fa-diagram-project"
  },
  {
    title: "Hugging Face",
    desc: "Model registry testing and model scanning.",
    icon: "fa-face-smile"
  },
  {
    title: "LlamaIndex",
    desc: "Context injection protection and database audits.",
    icon: "fa-database"
  },
  {
    title: "TensorFlow",
    desc: "Training set poisoning analysis and asset mapping.",
    icon: "fa-microchip"
  },
  {
    title: "PyTorch",
    desc: "Weights validation and adversarial model audits.",
    icon: "fa-fire"
  },
  {
    title: "Pinecone DB",
    desc: "Vector store compliance, isolation and IAM control.",
    icon: "fa-server"
  },
  {
    title: "AWS Bedrock",
    desc: "Cloud endpoint hardening and trail monitoring.",
    icon: "fa-cloud"
  },
  {
    title: "Azure OpenAI",
    desc: "Entra access policy alignments and logging.",
    icon: "fa-network-wired"
  }
];

const INDUSTRIES_LIST = [
  { name: "Banking & Finance", icon: "fa-building-columns" },
  { name: "Healthcare", icon: "fa-heart-pulse" },
  { name: "Manufacturing", icon: "fa-industry" },
  { name: "Government", icon: "fa-landmark" },
  { name: "Education", icon: "fa-graduation-cap" },
  { name: "Retail & E-commerce", icon: "fa-cart-shopping" },
  { name: "IT & SaaS", icon: "fa-server" },
  { name: "Telecommunications", icon: "fa-tower-cell" },
  { name: "Logistics", icon: "fa-truck-fast" },
  { name: "Energy & Utilities", icon: "fa-bolt" }
];

const BENEFITS_LIST = [
  "Complete protection against semantic prompt injections",
  "Ensured data privacy for LLM contexts",
  "Prevent unauthorized database access from agent nodes",
  "Eliminate Shadow AI risk and unapproved uploads",
  "Ensure compliance with the EU AI Act and local guidelines",
  "Block adversarial dataset poisoning vectors",
  "Safeguard proprietary model weights and logic",
  "Continuous testing for hallucinations and bias",
  "Secure deployment of intelligent workflow agents"
];

const ADVANTAGE_HIGHLIGHTS = [
  { title: "Semantic Prompt Shielding", icon: "fa-shield-cat" },
  { title: "Automated Jailbreak Defense", icon: "fa-user-shield" },
  { title: "Compliance & Governance Logs", icon: "fa-file-shield" },
  { title: "Agent Permission Hardening", icon: "fa-key" },
  { title: "Shadow AI Network Surveillance", icon: "fa-radar" },
  { title: "Model Weight & IP Protection", icon: "fa-box-archive" }
];

const FAQ_ITEMS = [
  {
    q: "What is AI Security?",
    a: "AI Security is the specialized branch of cybersecurity dedicated to safeguarding machine learning workflows, LLMs, training repositories, and automated agent environments from semantic threats, data leaks, and model exploits."
  },
  {
    q: "How does prompt injection work and how is it blocked?",
    a: "Prompt injection occurs when malicious inputs bypass model instructions to force unwanted actions or output sensitive data. We block prompt injections using real-time API filters, pattern sanitization, and input-output guardrails."
  },
  {
    q: "What is Shadow AI and why is it dangerous?",
    a: "Shadow AI refers to employees using unapproved external AI tools or models with corporate data. It creates high risks of IP loss, customer PII exposure, and compliance violations."
  },
  {
    q: "Does AI Security protect vector databases and RAG pipelines?",
    a: "Yes. We audit vector database retrievals, context histories, and RAG embeddings to prevent poison data injection and unauthorized contextual data retrieval."
  },
  {
    q: "Can AI Security help with EU AI Act compliance?",
    a: "Yes. Our AI governance frameworks, risk audits, and safety ledgers support alignment with EU AI Act requirements, NIST AI Risk Management Framework, and enterprise compliance standards."
  },
  {
    q: "Does AI Security slow down model inference latency?",
    a: "No. Our lightweight API filtering and prompt guardrails process requests in milliseconds, maintaining security protection without introducing noticeable latency."
  }
];

export default function AiSecurity() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AI Security Services & Model Guardrails | Netcradus UK";
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="siem-page cyber-security-page ai-security-page">

      {/* HERO SECTION */}
      <section className="siem-hero-section cs-hero-section">
        <div className="siem-container">
          <div className="siem-hero-card cs-hero-card" style={{ background: 'linear-gradient(135deg, rgba(20, 10, 35, 0.95) 0%, rgba(10, 5, 20, 0.98) 100%)', borderColor: 'rgba(139, 92, 246, 0.3)' }}>
            <div className="siem-hero-grid">

              <div className="siem-hero-left">
                <div className="siem-badge cs-badge" style={{ background: 'rgba(139, 92, 246, 0.15)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#a78bfa' }}>
                  <span className="siem-badge-dot" style={{ backgroundColor: '#a78bfa' }} />
                  AI SECURITY SERVICES
                </div>

                <h1 className="siem-hero-title cs-hero-title">
                  Secure Your Models. <br />
                  <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #FF6B00 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Protect Your Intelligent Future.
                  </span>
                </h1>

                <p className="siem-hero-desc cs-hero-desc">
                  As organizations integrate generative AI, LLMs, and automated agents into their core workflows, they introduce specialized security challenges. From prompt injection and data poisoning to model theft and compliance leaks, securing AI pipelines is essential.
                </p>

                <div className="cs-hero-highlights">
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" style={{ color: '#a78bfa' }}></i>
                    <span>Prompt Injection Firewalls</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" style={{ color: '#a78bfa' }}></i>
                    <span>Model Weights Protection</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" style={{ color: '#a78bfa' }}></i>
                    <span>PII & Secret Data Masking</span>
                  </div>
                </div>

                <div className="siem-buttons-container">
                  <Link to="/contact" className="siem-btn-primary" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)', borderColor: 'rgba(139, 92, 246, 0.4)' }}>
                    <span>Start Your AI Risk Audit</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <Link to="/contact" className="siem-btn-secondary">
                    Talk to an Expert
                  </Link>
                </div>
              </div>

              <div className="siem-hero-right">
                <div className="cs-hero-graphic-card">
                  <div className="cs-graphic-header">
                    <div className="cs-graphic-status">
                      <span className="cs-status-pulse" style={{ backgroundColor: '#a78bfa', boxShadow: '0 0 12px #a78bfa' }}></span>
                      <span className="cs-status-text" style={{ color: '#a78bfa' }}>AI MODEL GUARDRAILS ACTIVE</span>
                    </div>
                    <span className="cs-graphic-badge">NETCRADUS UK</span>
                  </div>

                  <div className="cs-graphic-body">
                    <div className="cs-shield-icon-wrapper" style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.02) 70%)', borderColor: 'rgba(139, 92, 246, 0.3)' }}>
                      <i className="fas fa-brain cs-hero-shield-icon" style={{ color: '#a78bfa' }}></i>
                      <div className="cs-shield-glow"></div>
                    </div>

                    <div className="cs-metrics-grid">
                      <div className="cs-metric-card">
                        <span className="cs-metric-val" style={{ color: '#c084fc' }}>Real-time</span>
                        <span className="cs-metric-label">Prompt Guard</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val" style={{ color: '#c084fc' }}>Masked</span>
                        <span className="cs-metric-label">PII Data Logs</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val" style={{ color: '#c084fc' }}>Isolated</span>
                        <span className="cs-metric-label">Agent Sandbox</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHAT IS AI SECURITY? (New Perimeter) */}
      <section id="what-is-ai-security" className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#a78bfa' }}>
              <i className="fas fa-shield-cat"></i> NEW PERIMETER
            </span>
            <h2 className="siem-section-title">What is AI Security?</h2>
          </div>

          <div className="cs-overview-grid">
            <div className="cs-overview-content">
              <p className="cs-overview-lead" style={{ color: '#c084fc' }}>
                AI Security is the specialized branch of cybersecurity dedicated to safeguarding machine learning workflows, large language models (LLMs), training repositories, and automated agent environments from exploit vectors.
              </p>
              <p className="cs-overview-text">
                Traditional perimeters fail against semantic vulnerabilities (such as jailbreaks, prompt manipulation, or model extraction). Safeguarding AI requires real-time prompt filtering, robust training set protection, and pipeline isolation.
              </p>
              <p className="cs-overview-text" style={{ fontWeight: 600, color: '#e2e8f0' }}>
                Securing AI is crucial to prevent leakage of intellectual property, model poisoning, privacy compromises, and unauthorized system access from compromised AI integrations.
              </p>
            </div>

            <div className="cs-overview-cards-col">
              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(139, 92, 246, 0.15)', borderColor: 'rgba(139, 92, 246, 0.3)', color: '#a78bfa' }}>
                  <i className="fas fa-filter-circle-xmark"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Real-Time Prompt Filtering</h4>
                  <p className="cs-mini-desc">Intercepting malicious prompt commands before they execute in model contexts.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(139, 92, 246, 0.15)', borderColor: 'rgba(139, 92, 246, 0.3)', color: '#a78bfa' }}>
                  <i className="fas fa-database"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Training Set Protection</h4>
                  <p className="cs-mini-desc">Preventing dataset poisoning and auditing vector embedding retrievals.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(139, 92, 246, 0.15)', borderColor: 'rgba(139, 92, 246, 0.3)', color: '#a78bfa' }}>
                  <i className="fas fa-boxes-packing"></i>
                </div>
                <div>
                  <h4 className="cs-mini-title">Pipeline Isolation</h4>
                  <p className="cs-mini-desc">Sandboxing LLM agent outputs to restrict unauthorized database and API execution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY AI SECURITY MATTERS (Adversarial Risks) */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#a78bfa' }}>
              <i className="fas fa-triangle-exclamation"></i> ADVERSARIAL RISKS
            </span>
            <h2 className="siem-section-title">Why AI Security Matters</h2>
            <p className="siem-section-subtitle">
              Generative AI applications have direct access to database structures, private user contexts, and operational code repositories. A single prompt injection can compromise database layers.
            </p>
          </div>

          <div style={{ margin: '2rem 0', padding: '1.25rem 1.75rem', background: 'rgba(139, 92, 246, 0.08)', borderRadius: '16px', borderLeft: '4px solid #8b5cf6', fontStyle: 'italic', color: '#e2e8f0', fontSize: '1.05rem' }}>
            "As AI drives operations, model assurance and data guardrails are the only lines of defense against semantic exploitation."
          </div>

          <div className="cs-threats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {METRICS_DATA.map((m, idx) => (
              <div key={idx} className="cs-threat-card" style={{ borderColor: 'rgba(139, 92, 246, 0.2)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#c084fc', marginBottom: '0.5rem' }}>{m.value}</div>
                <h3 className="cs-threat-title">{m.title}</h3>
                <p className="cs-threat-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY EVERY BUSINESS NEEDS AI SECURITY (Defense Objectives) */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#a78bfa' }}>
              <i className="fas fa-bullseye"></i> DEFENSE OBJECTIVES
            </span>
            <h2 className="siem-section-title">Why Every Business Needs AI Security</h2>
            <p className="siem-section-subtitle">
              Enable continuous model verification, data protection, and prompt integrity across intelligent networks.
            </p>
          </div>

          <div className="cs-threats-grid">
            {DEFENSE_OBJECTIVES.map((obj, idx) => (
              <div key={idx} className="cs-threat-card">
                <div className="cs-threat-icon-box" style={{ color: '#a78bfa', background: 'rgba(139, 92, 246, 0.12)', borderColor: 'rgba(139, 92, 246, 0.35)' }}>
                  <i className={`fas ${obj.icon}`}></i>
                </div>
                <h3 className="cs-threat-title">{obj.title}</h3>
                <p className="cs-threat-desc">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR AI SECURITY SERVICES (Our Expertise) */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#a78bfa' }}>
              <i className="fas fa-award"></i> OUR EXPERTISE
            </span>
            <h2 className="siem-section-title">Our AI Security Services</h2>
            <p className="siem-section-subtitle">
              We provide professional cybersecurity solutions to verify and secure generative AI deployments.
            </p>
          </div>

          <div className="cs-capabilities-grid">
            {EXPERTISE_SERVICES.map((srv, idx) => (
              <div key={idx} className="cs-capability-card">
                <div className="cs-cap-header">
                  <div className="cs-cap-icon-box" style={{ background: 'rgba(139, 92, 246, 0.15)', borderColor: 'rgba(139, 92, 246, 0.3)', color: '#a78bfa' }}>
                    <i className={`fas ${srv.icon}`}></i>
                  </div>
                </div>
                <h3 className="cs-cap-title">{srv.title}</h3>
                <p className="cs-cap-desc">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE SECURE YOUR AI (Operational Cycle) */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#a78bfa' }}>
              <i className="fas fa-arrows-spin"></i> OPERATIONAL CYCLE
            </span>
            <h2 className="siem-section-title">How We Secure Your AI</h2>
            <p className="siem-section-subtitle">
              Our structured operational cycle ensures continuous protection from input capture to runtime verification.
            </p>
          </div>

          <div className="cs-workflow-grid">
            {OPERATIONAL_STEPS.map((step, idx) => (
              <div key={idx} className="cs-workflow-card">
                <div className="cs-workflow-header">
                  <span className="cs-workflow-num" style={{ color: step.color }}>{step.step}</span>
                  <div className="cs-workflow-icon-box" style={{ background: `${step.color}15`, color: step.color, borderColor: `${step.color}40` }}>
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                </div>
                <h3 className="cs-workflow-title">{step.name}</h3>
                <p className="cs-workflow-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TECHNOLOGIES WE SUPPORT (Tech Integrations) */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#a78bfa' }}>
              <i className="fas fa-network-wired"></i> TECH INTEGRATIONS
            </span>
            <h2 className="siem-section-title">Technologies We Support</h2>
            <p className="siem-section-subtitle">
              We secure and integrate natively with leading AI pipelines, LLM APIs, and vector databases.
            </p>
          </div>

          <div className="cs-threats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {TECH_INTEGRATIONS.map((tech, idx) => (
              <div key={idx} className="cs-threat-card" style={{ padding: '1.25rem 1.5rem' }}>
                <div className="cs-threat-icon-box" style={{ width: '40px', height: '40px', fontSize: '1.1rem', color: '#a78bfa', background: 'rgba(139, 92, 246, 0.12)', borderColor: 'rgba(139, 92, 246, 0.3)' }}>
                  <i className={`fas ${tech.icon}`}></i>
                </div>
                <h3 className="cs-threat-title" style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{tech.title}</h3>
                <p className="cs-threat-desc" style={{ fontSize: '0.86rem' }}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: INDUSTRIES WE SECURE (Verticals Covered) */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#a78bfa' }}>
              <i className="fas fa-building-user"></i> VERTICALS COVERED
            </span>
            <h2 className="siem-section-title">Industries We Secure</h2>
            <p className="siem-section-subtitle">
              Deploying secure AI models across regulated global industries.
            </p>
          </div>

          <div className="cs-audiences-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {INDUSTRIES_LIST.map((ind, idx) => (
              <div key={idx} className="cs-audience-card" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div className="cs-audience-icon-box" style={{ margin: '0 auto 1rem', background: 'rgba(139, 92, 246, 0.15)', borderColor: 'rgba(139, 92, 246, 0.3)', color: '#a78bfa' }}>
                  <i className={`fas ${ind.icon}`}></i>
                </div>
                <h3 className="cs-audience-title" style={{ fontSize: '1rem', marginBottom: 0 }}>{ind.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: BENEFITS OF INVESTING IN AI SECURITY (Value Metric) */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#a78bfa' }}>
              <i className="fas fa-chart-line"></i> VALUE METRIC
            </span>
            <h2 className="siem-section-title">Benefits of Investing in AI Security</h2>
            <p className="siem-section-subtitle">
              Protect your machine learning pipelines, LLM deployments, and enterprise AI agents from specialized threat vectors.
            </p>
          </div>

          <div className="cs-importance-grid">
            {BENEFITS_LIST.map((b, idx) => (
              <div key={idx} className="cs-importance-card">
                <div className="cs-importance-icon-box" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.15)' }}>
                  <i className="fas fa-check"></i>
                </div>
                <div className="cs-importance-content">
                  <h3 className="cs-importance-title" style={{ fontSize: '1rem', fontWeight: 600 }}>{b}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: WHY CHOOSE NETCRADUS? (Our Advantage) */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#a78bfa' }}>
              <i className="fas fa-award"></i> OUR ADVANTAGE
            </span>
            <h2 className="siem-section-title">Why Choose Netcradus?</h2>
            <p className="siem-section-subtitle">
              At Netcradus, we bridge the gap between advanced data science and enterprise-grade security. Our custom guardrails and prompt filtering block semantic threats at scale.
            </p>
          </div>

          <div style={{ margin: '0 0 2.5rem', padding: '1.25rem 1.75rem', background: 'rgba(139, 92, 246, 0.08)', borderRadius: '16px', borderLeft: '4px solid #8b5cf6', fontStyle: 'italic', color: '#e2e8f0', fontSize: '1.05rem', textAlign: 'center' }}>
            "Secure AI Deployment. Continuous Model Audits. Dedicated Adversarial Testing."
          </div>

          <div className="cs-audiences-grid">
            {ADVANTAGE_HIGHLIGHTS.map((adv, idx) => (
              <div key={idx} className="cs-audience-card">
                <div className="cs-audience-icon-box" style={{ background: 'rgba(139, 92, 246, 0.15)', borderColor: 'rgba(139, 92, 246, 0.3)', color: '#a78bfa' }}>
                  <i className={`fas ${adv.icon}`}></i>
                </div>
                <h3 className="cs-audience-title">{adv.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className="siem-section cs-section cs-faq-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag" style={{ color: '#a78bfa' }}>
              <i className="fas fa-circle-question"></i> FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="siem-section-title">AI Security FAQs</h2>
            <p className="siem-section-subtitle">
              Clear answers to AI model protection, prompt injection, and shadow AI risks.
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
                    aria-controls={`ai-faq-answer-${idx}`}
                    id={`ai-faq-header-${idx}`}
                  >
                    <span className="cs-faq-question-text">{faq.q}</span>
                    <i className={`fas fa-chevron-down cs-faq-icon ${isOpen ? 'rotated' : ''}`} style={{ color: '#a78bfa' }}></i>
                  </button>
                  {isOpen && (
                    <div
                      id={`ai-faq-answer-${idx}`}
                      className="cs-faq-answer-body"
                      role="region"
                      aria-labelledby={`ai-faq-header-${idx}`}
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

      {/* SECTION 11: CALL TO ACTION */}
      <section className="siem-section cs-cta-section">
        <div className="siem-container">
          <div className="cs-cta-box" style={{ background: 'linear-gradient(135deg, rgba(20, 10, 35, 0.95) 0%, rgba(139, 92, 246, 0.15) 100%)', borderColor: 'rgba(139, 92, 246, 0.35)' }}>
            <div className="cs-cta-bg-glow" style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)' }}></div>
            <div className="cs-cta-content">
              <span className="cs-cta-tag" style={{ color: '#a78bfa', background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.3)' }}>SECURE YOUR AI PIPELINES</span>
              <h2 className="cs-cta-title">Ready to Secure Your AI Pipelines?</h2>
              <p className="cs-cta-desc">
                Ensure model safety and prevent compliance data leaks. Connect with our expert advisors to implement robust AI security guardrails today.
              </p>
              <div className="cs-cta-actions">
                <Link to="/contact" className="siem-btn-primary cs-cta-btn" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)', borderColor: 'rgba(139, 92, 246, 0.4)' }}>
                  <span>Start Your AI Risk Audit</span>
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
