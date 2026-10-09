import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FEATURES_DATA = [
  {
    title: "Lead Management",
    desc: "Capture, qualify, and segment incoming prospect leads dynamically. Automate lead scoring based on user interactions.",
    icon: "fa-filter",
    color: "#06b6d4"
  },
  {
    title: "Sales Automation",
    desc: "Automate follow-ups, sync outreach templates, schedule calls, and focus on closing deals faster.",
    icon: "fa-robot",
    color: "#f59e0b"
  },
  {
    title: "Contact Management",
    desc: "Keep complete customer context with rich timelines, emails, document logs, and transaction details.",
    icon: "fa-address-book",
    color: "#10b981"
  },
  {
    title: "AI Insights",
    desc: "Forecast pipeline velocities and scan ticket data to identify churn risk before it happens.",
    icon: "fa-brain",
    color: "#8b5cf6"
  },
  {
    title: "Workflow Automation",
    desc: "Build custom workflow maps to automate manual data syncs and internal notifications.",
    icon: "fa-diagram-project",
    color: "#ef4444"
  },
  {
    title: "Enterprise Security",
    desc: "Constructed on bank-grade security baselines featuring hardware authentication key configurations.",
    icon: "fa-shield-halved",
    color: "#ec4899"
  }
];

const BENTO_MODULES = [
  { title: "Sales CRM", desc: "Track pipelines, deals, and compile custom proposals effortlessly.", icon: "fa-chart-line" },
  { title: "Marketing CRM", desc: "Build audience segmentation lists and execute automated email campaigns.", icon: "fa-bullhorn" },
  { title: "Customer Support", desc: "Centralize omnichannel support queries, ticketing, and live chats.", icon: "fa-headset" },
  { title: "Project Workspace", desc: "Linked milestone trackers, project boards, and shared files.", icon: "fa-list-check" },
  { title: "Finance & Billing", desc: "Integrate Stripe invoices, quotes, and recurring subscriptions.", icon: "fa-file-invoice-dollar" },
  { title: "Reports & Analytics", desc: "Generate deep-dive conversion, revenue, and rep velocity logs.", icon: "fa-chart-pie" },
  { title: "HR Workspace", desc: "Coordinate remote onboarding, team rosters, and performance audits.", icon: "fa-users-gear" }
];

const AI_TAGS = [
  "Smart Reply Engine",
  "Predictive Analytics",
  "Auto Lead Qualifier",
  "Sentiment Tracker"
];

const AUTOMATION_STEPS = [
  { step: "01", name: "Lead Capture", desc: "Form captures client info", icon: "fa-user-plus", color: "#06b6d4" },
  { step: "02", name: "Qualification", desc: "Scored by predictive AI engine", icon: "fa-star", color: "#10b981" },
  { step: "03", name: "Assignment", desc: "Dispatched to regional rep", icon: "fa-user-check", color: "#8b5cf6" },
  { step: "04", name: "Meeting", desc: "Calendar synced automatically", icon: "fa-calendar-check", color: "#f59e0b" },
  { step: "05", name: "Proposal", desc: "Dynamic quotes generated", icon: "fa-file-contract", color: "#3b82f6" },
  { step: "06", name: "Deal Won", desc: "Sign-offs recorded securely", icon: "fa-trophy", color: "#10b981" },
  { step: "07", name: "Onboarding", desc: "SLA dashboard provisioned", icon: "fa-headset", color: "#ec4899" }
];

const SECURITY_BADGES = [
  { title: "AES-256 Encryption", desc: "Protects database entries both in-transit and at-rest on mirrored nodes.", icon: "fa-lock", color: "#06b6d4" },
  { title: "MFA Authentication", desc: "Enforce biometric and security key options for all staff logins.", icon: "fa-key", color: "#10b981" },
  { title: "Role-Based Access", desc: "Restricted visibility masks client files dynamically by credentials.", icon: "fa-user-shield", color: "#8b5cf6" },
  { title: "Audit Logs", desc: "Immutable history logs track data exports and user settings changes.", icon: "fa-file-lines", color: "#f59e0b" },
  { title: "Single Sign-On (SSO)", desc: "Sync directory hubs using Okta, Azure, or Google Cloud IAM standards.", icon: "fa-passport", color: "#ef4444" },
  { title: "Cloud Backup", desc: "Real-time replica backups stored across multiple storage servers.", icon: "fa-cloud-arrow-up", color: "#ec4899" }
];

const TESTIMONIALS = [
  {
    rating: 5,
    quote: "NetCradus CRM has completely streamlined our sales pipelines. Releasing manual follow-ups gave our sales reps more hours to focus on high-value client relationships.",
    name: "Vikram Malhotra",
    title: "VP of Business Development, Apex Digital"
  },
  {
    rating: 5,
    quote: "We chose NetCradus CRM because of its clean aesthetic and built-in security details. It matches our brand identity and is incredibly fast to navigate.",
    name: "Sarah Jenkins",
    title: "Director of CRM Strategy, CloudMatrix Solutions"
  },
  {
    rating: 5,
    quote: "The visual automation flow and Stripe billing integration made customer onboarding automatic. Highly recommended for expanding startup organizations.",
    name: "Marcus Dupont",
    title: "Chief Executive Officer, FinTrust International"
  }
];

export default function Crm() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Netcradus CRM | AI-Powered Customer Relationship Platform";
  }, []);

  return (
    <div className="siem-page cyber-security-page cloud-security-page crm-page">

      {/* SECTION 1: HERO */}
      <section className="siem-hero-section cs-hero-section">
        <div className="siem-container">
          <div className="siem-hero-card cs-hero-card">
            <div className="siem-hero-grid">

              <div className="siem-hero-left">
                <div className="siem-badge cs-badge">
                  <span className="siem-badge-dot" />
                  ✨ AI-POWERED ENTERPRISE CRM
                </div>

                <h1 className="siem-hero-title cs-hero-title">
                  Manage Customer Relationships <br />
                  <span className="gradient-text">Smarter. Faster. Better.</span>
                </h1>

                <p className="siem-hero-desc cs-hero-desc">
                  Netcradus CRM helps businesses automate sales, manage leads, improve customer relationships, and increase revenue with AI-powered automation.
                </p>

                <div className="cs-hero-highlights">
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" />
                    <span>AI Lead Scoring & Automation</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" />
                    <span>Omnichannel Contact Timelines</span>
                  </div>
                  <div className="cs-highlight-item">
                    <i className="fas fa-check-circle cs-check-icon" />
                    <span>Bank-Grade Data Encryption</span>
                  </div>
                </div>

                <div className="siem-buttons-container">
                  <Link to="/contact" className="siem-btn-primary">
                    <span>Talk to an Expert</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                  <a href="#crm-features" className="siem-btn-secondary">
                    Explore Features
                  </a>
                </div>
              </div>

              <div className="siem-hero-right">
                <div className="cs-hero-graphic-card">
                  <div className="cs-graphic-header">
                    <div className="cs-graphic-status">
                      <span className="cs-status-pulse" />
                      <span className="cs-status-text">CRM DASHBOARD ONLINE</span>
                    </div>
                    <span className="cs-graphic-badge">NETCRADUS UK</span>
                  </div>

                  <div className="cs-graphic-body">
                    <div className="w-full overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/80 p-2 shadow-2xl">
                      <img
                        src={`${import.meta.env.BASE_URL}assets/crm-hero.png`}
                        alt="Netcradus Enterprise CRM Dashboard Screenshot"
                        className="w-full h-auto object-cover rounded-xl"
                      />
                    </div>

                    <div className="cs-metrics-grid mt-4">
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">10K+</span>
                        <span className="cs-metric-label">Active Customers</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">98%</span>
                        <span className="cs-metric-label">Satisfaction Rate</span>
                      </div>
                      <div className="cs-metric-card">
                        <span className="cs-metric-val">35%</span>
                        <span className="cs-metric-label">Sales Growth</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SPACIOUS TOOLS BUILT FOR BETTER OUTPUT */}
      <section id="crm-features" className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-layer-group" /> CORE CAPABILITIES
            </span>
            <h2 className="siem-section-title">Spacious Tools Built for Better Output</h2>
            <p className="siem-section-subtitle">
              Netcradus CRM unifies lead scoring, drip marketing, contract records, and communication histories into a clean workspace.
            </p>
          </div>

          <div className="cs-capabilities-grid">
            {FEATURES_DATA.map((feat, idx) => (
              <div key={idx} className="cs-capability-card">
                <div className="cs-cap-header">
                  <div className="cs-cap-icon-box" style={{ color: feat.color, background: `${feat.color}15` }}>
                    <i className={`fas ${feat.icon}`} />
                  </div>
                </div>
                <h3 className="cs-cap-title">{feat.title}</h3>
                <p className="cs-cap-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MODULAR CRM BENTO WORKSPACE */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-cubes" /> MODULAR WORKSPACE
            </span>
            <h2 className="siem-section-title">Modular CRM Bento Workspace</h2>
            <p className="siem-section-subtitle">
              Scale CRM tools dynamically. Choose features, set permissions, and coordinate operations instantly across multi-team workflows.
            </p>
          </div>

          <div className="cs-audiences-grid">
            {BENTO_MODULES.map((mod, idx) => (
              <div key={idx} className="cs-audience-card">
                <div className="cs-audience-icon-box">
                  <i className={`fas ${mod.icon}`} />
                </div>
                <h3 className="cs-audience-title">{mod.title}</h3>
                <p className="cs-audience-desc">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: AI SALES ASSISTANT */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-brain" /> AI AUTOMATION
            </span>
            <h2 className="siem-section-title">Work Smarter with Your AI Sales Assistant</h2>
            <p className="siem-section-subtitle">
              Automate outbound email replies, summarize virtual audio conferences, compile quotes, and qualify client profiles automatically.
            </p>
          </div>

          <div className="cs-overview-grid">
            <div className="cs-overview-content">
              <p className="cs-overview-lead">
                Netcradus CRM integrates a continuous AI engine to accelerate your sales pipeline and eliminate manual admin work.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {AI_TAGS.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-orange-500/30 bg-orange-500/10 text-xs font-bold text-orange-400"
                  >
                    <i className="fas fa-bolt text-xs" /> {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="cs-overview-cards-col">
              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(249, 115, 22, 0.15)', color: '#f97316' }}>
                  <i className="fas fa-envelope-circle-check" />
                </div>
                <div>
                  <h4 className="cs-mini-title">AI Email Draft Ready</h4>
                  <p className="cs-mini-desc">Drafted follow-up deal terms and contract proposals in 0.4 seconds.</p>
                </div>
              </div>

              <div className="cs-mini-card">
                <div className="cs-mini-icon-box" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6' }}>
                  <i className="fas fa-chart-line" />
                </div>
                <div>
                  <h4 className="cs-mini-title">Lead Scored: 98/100</h4>
                  <p className="cs-mini-desc">High purchase intent identified via multi-channel engagement signals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VISUAL WORKFLOW AUTOMATION TRACK */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-diagram-project" /> PIPELINE TRACK
            </span>
            <h2 className="siem-section-title">Visual Workflow Automation</h2>
            <p className="siem-section-subtitle">
              Route leads, synchronize outreach, and close deals automatically with a 7-step pipeline.
            </p>
          </div>

          <div className="cs-workflow-grid">
            {AUTOMATION_STEPS.map((step, idx) => (
              <div key={idx} className="cs-workflow-card">
                <div className="cs-workflow-header">
                  <span className="cs-workflow-num" style={{ color: step.color }}>{step.step}</span>
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
                <h3 className="cs-workflow-title">{step.name}</h3>
                <p className="cs-workflow-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: ENTERPRISE CYBERSECURITY & DATA PRIVACY */}
      <section className="siem-section bg-dark cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-shield-halved" /> SECURITY & PRIVACY
            </span>
            <h2 className="siem-section-title">Enterprise Cybersecurity. Data Privacy Guaranteed.</h2>
            <p className="siem-section-subtitle">
              All customer databases are fully isolated with AES-256 standards, restricting client files dynamically by access credentials.
            </p>
          </div>

          <div className="cs-overview-grid">
            <div className="cs-overview-content">
              <div className="w-full overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/80 p-2 shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}assets/netcradus-crm-security-dashboard.png`}
                  alt="Netcradus Enterprise CRM Security & Analytics Dashboard"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="cs-overview-cards-col">
              {SECURITY_BADGES.map((badge, idx) => (
                <div key={idx} className="cs-mini-card">
                  <div
                    className="cs-mini-icon-box"
                    style={{ color: badge.color, background: `${badge.color}15` }}
                  >
                    <i className={`fas ${badge.icon}`} />
                  </div>
                  <div>
                    <h4 className="cs-mini-title">{badge.title}</h4>
                    <p className="cs-mini-desc">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CLIENT TESTIMONIALS */}
      <section className="siem-section cs-section">
        <div className="siem-container">
          <div className="siem-section-header">
            <span className="siem-section-tag">
              <i className="fas fa-star" /> REVENUE TEAMS
            </span>
            <h2 className="siem-section-title">Trusted by Revenue Teams Worldwide</h2>
            <p className="siem-section-subtitle">
              Read how scaling organisations manage workflows with Netcradus CRM.
            </p>
          </div>

          <div className="cs-importance-grid">
            {TESTIMONIALS.map((test, idx) => (
              <div key={idx} className="cs-importance-card">
                <div className="cs-importance-icon-box" style={{ color: '#f59e0b', background: 'rgba(245, 158, 11, 0.15)' }}>
                  <i className="fas fa-quote-left" />
                </div>
                <div className="cs-importance-content">
                  <p className="text-xs sm:text-sm text-slate-300 italic mb-3">"{test.quote}"</p>
                  <h3 className="cs-importance-title">{test.name}</h3>
                  <p className="cs-importance-desc">{test.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CALL TO ACTION */}
      <section className="siem-section cs-cta-section">
        <div className="siem-container">
          <div className="cs-cta-box">
            <div className="cs-cta-bg-glow" />
            <div className="cs-cta-content">
              <span className="cs-cta-tag">GET STARTED TODAY</span>
              <h2 className="cs-cta-title">Ready to Grow Your Business with Netcradus CRM?</h2>
              <p className="cs-cta-desc">
                Automate follow-ups, forecast deal values, compile proposals, and coordinate workflows in one secure, modern platform.
              </p>
              <p className="cs-cta-subtext">
                Speak with the Netcradus team to discuss your CRM requirements.
              </p>
              <div className="cs-cta-actions">
                <Link to="/contact" className="siem-btn-primary cs-cta-btn">
                  <span>Talk to an Expert</span>
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
