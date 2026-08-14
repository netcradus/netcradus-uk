import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const platformModules = [
  {
    id: 'xdr',
    title: 'NetCradus XDR',
    tag: '→ Endpoint + Threat Hunting + Detection',
    desc: 'AI-powered unified endpoint, network and real-time threat hunting detection.',
    icon: 'fa-shield-halved',
    link: '/platform/endpoint-detection'
  },
  {
    id: 'siem',
    title: 'NetCradus SIEM',
    tag: '→ Log Management + Detection + Correlation',
    desc: 'Real-time log aggregation, intelligent event correlation and threat detection.',
    icon: 'fa-bullseye',
    link: '/platform/siem'
  },
  {
    id: 'soar',
    title: 'NetCradus SOAR',
    tag: '→ Automated Response + Playbooks',
    desc: 'Autonomous incident containment and agentic playbook orchestration.',
    icon: 'fa-bolt-lightning',
    link: '/platform/soar'
  },
  {
    id: 'cti',
    title: 'NetCradus CTI',
    tag: '→ Threat Intelligence',
    desc: 'Global cyber threat research, adversary tradecraft and IOC feeds.',
    icon: 'fa-eye',
    link: '/platform/cti'
  },
  {
    id: 'pam',
    title: 'NetCradus PAM',
    tag: '→ Privileged Access Management',
    desc: 'Verify identity, enforce zero trust, and secure privileged credentials.',
    icon: 'fa-users-gear',
    link: '/platform/pam'
  },
  {
    id: 'grc',
    title: 'NetCradus GRC',
    tag: '→ Risk + Compliance',
    desc: 'Continuous attack surface management, vulnerability scanning & compliance audits.',
    icon: 'fa-triangle-exclamation',
    link: '/platform/grc'
  },
  {
    id: 'ai-sec',
    title: 'NetCradus AI Security',
    tag: '→ AI/ML Security + AI Threat Detection',
    desc: 'AI engine protection, model vulnerability defense & LLM threat triage.',
    icon: 'fa-microchip',
    link: '/platform/ai-security'
  }
];

const platformCapabilities = [
  {
    title: 'Unified Security Visibility',
    desc: 'Complete telemetry and real-time visibility across endpoints, cloud, identity, and network layers.'
  },
  {
    title: 'Threat Intelligence',
    desc: 'Global cyber intelligence feeds correlated dynamically with UK-specific attack vectors and tradecraft.'
  },
  {
    title: 'Detection & Correlation',
    desc: 'Intelligent threat detection and cross-layer correlation to reduce alert noise and uncover multi-stage attacks.'
  },
  {
    title: 'Response & Containment',
    desc: 'Precision response controls and isolation protocols designed to neutralize attacks at machine speed.'
  },
  {
    title: 'Security Operations',
    desc: 'Integrated dashboard workflows combining automated diagnostics, triage, and human-led security analysis.'
  },
  {
    title: 'Security Orchestration',
    desc: 'Automated playbooks coordinating remediation actions seamlessly across your complete cybersecurity stack.'
  },
  {
    title: 'Cyber Resilience',
    desc: 'Proactive posture hardening and rapid recovery protocols to maintain operational continuity under attack.'
  },
  {
    title: 'Integration & Orchestration',
    desc: 'Open API architecture allowing flexible integrations with third-party tools to orchestrate response actions.'
  }
];

function InteractiveCard({ title, desc }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 2; // max rotateX: 2deg
    const rotateY = ((x - centerX) / centerX) * 3; // max rotateY: 3deg

    setStyle({
      '--mouse-x': `${x}px`,
      '--mouse-y': `${y}px`,
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
    });
  };

  const handleMouseLeave = () => {
    setStyle({});
  };

  return (
    <div
      ref={cardRef}
      className="platform-interactive-card"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-mouse-glow" />
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{desc}</p>
    </div>
  );
}

export default function Platform() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isCapabilitiesVisible, setIsCapabilitiesVisible] = useState(false);
  const capabilitiesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const capObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCapabilitiesVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (capabilitiesRef.current) {
      capObserver.observe(capabilitiesRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (capabilitiesRef.current) {
        capObserver.unobserve(capabilitiesRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="platform-hero">
        <div className="platform-hero-overlay"></div>
        <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="section-tag"><i className="fas fa-cubes"></i> NETCRADUS CYBERSECURITY PLATFORM</span>
            <h1 className="section-title">
              Unified Security Visibility. <br />
              <span style={{ background: 'linear-gradient(90deg, #ff8a1f, #ff2d78)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Orchestrated Cyber Resilience.</span>
            </h1>
            <p className="section-desc">
              Netcradus brings together threat visibility, intelligence, detection, response and security operations together in one intelligent platform.
            </p>
          </div>
        </div>
      </section>

      {/* PLATFORM ARCHITECTURE */}
      <section 
        ref={sectionRef} 
        className={`section platform-architecture-section ${isVisible ? 'is-visible' : ''}`}
      >
        {/* Soft Ambient Glow Orbs */}
        <div className="platform-glow-orb platform-glow-purple"></div>
        <div className="platform-glow-orb platform-glow-blue-purple"></div>
        <div className="platform-glow-orb platform-glow-magenta"></div>
        <div className="platform-glow-orb platform-glow-orange-pink"></div>

        {/* Network Connection Lines SVG */}
        <svg className="platform-network-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="blue-purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="var(--purple)" />
            </linearGradient>
            <linearGradient id="purple-magenta-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--purple)" />
              <stop offset="100%" stopColor="var(--pink)" />
            </linearGradient>
          </defs>
          <path d="M-5,15 L35,25 L75,15 L105,35" className="platform-network-path path-anim-1" stroke="url(#blue-purple-grad)" />
          <path d="M-5,85 L45,65 L55,80 L105,60" className="platform-network-path path-anim-2" stroke="url(#purple-magenta-grad)" />
          <path d="M15,-5 L45,45 L35,105" className="platform-network-path path-anim-3" stroke="url(#blue-purple-grad)" />
          
          <circle cx="35" cy="25" r="0.8" className="platform-network-node node-glow-1" />
          <circle cx="75" cy="15" r="0.6" className="platform-network-node node-glow-2" />
          <circle cx="45" cy="65" r="1.0" className="platform-network-node node-glow-3" />
          <circle cx="55" cy="80" r="0.7" className="platform-network-node node-glow-4" />
        </svg>

        {/* Floating Cyber Particles */}
        <div className="platform-cyber-dot platform-cyber-dot-1"></div>
        <div className="platform-cyber-dot platform-cyber-dot-2"></div>
        <div className="platform-cyber-dot platform-cyber-dot-3"></div>
        <div className="platform-cyber-dot platform-cyber-dot-4"></div>

        <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <span className="section-tag"><i className="fas fa-project-diagram"></i> PLATFORM ARCHITECTURE</span>
            <h2 className="section-title">Converged Cyber Defense</h2>
            <p className="section-desc">Seven specialized modules operating continuously as a unified security system.</p>
          </div>

          <div className="converged-platform-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {platformModules.map((module) => (
              <Link key={module.id} to={module.link} className="converged-item-card">
                <div className="converged-item-icon-orb">
                  <i className={`fas ${module.icon}`}></i>
                </div>
                <div className="converged-item-content">
                  <div className="converged-item-title">
                    {module.title}
                  </div>
                  <span className="converged-item-tag">{module.tag}</span>
                  <p className="converged-item-desc">{module.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM-LEVEL CAPABILITIES */}
      <section 
        ref={capabilitiesRef} 
        className={`section platform-capabilities-section ${isCapabilitiesVisible ? 'is-visible' : ''}`}
      >
        {/* Background Ambient Glows */}
        <div className="platform-cap-glow cap-glow-top-left"></div>
        <div className="platform-cap-glow cap-glow-top-center"></div>
        <div className="platform-cap-glow cap-glow-right"></div>
        <div className="platform-cap-glow cap-glow-bottom"></div>

        {/* Moving Light Beam (Security Scanning Light) */}
        <div className="platform-cap-beam"></div>

        {/* Network Connection Lines SVG */}
        <svg className="cap-network-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cap-blue-purple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#263CFF" />
              <stop offset="100%" stopColor="#6D28D9" />
            </linearGradient>
            <linearGradient id="cap-purple-magenta" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6D28D9" />
              <stop offset="100%" stopColor="#EC167A" />
            </linearGradient>
          </defs>
          <path d="M-5,35 L25,45 L50,35 L75,45 L105,25" className="cap-network-path cap-path-1" stroke="url(#cap-blue-purple)" />
          <path d="M-5,65 L35,55 L65,70 L105,50" className="cap-network-path cap-path-2" stroke="url(#cap-purple-magenta)" />
          <path d="M30,-5 L20,50 L45,105" className="cap-network-path cap-path-3" stroke="url(#cap-blue-purple)" />
          
          <circle cx="25" cy="45" r="0.7" className="cap-network-node cap-node-1" />
          <circle cx="50" cy="35" r="0.6" className="cap-network-node cap-node-2" />
          <circle cx="65" cy="70" r="0.8" className="cap-network-node cap-node-3" />
        </svg>

        {/* Floating Cyber Particles */}
        <div className="cap-cyber-dot cap-cyber-dot-1"></div>
        <div className="cap-cyber-dot cap-cyber-dot-2"></div>
        <div className="cap-cyber-dot cap-cyber-dot-3"></div>
        <div className="cap-cyber-dot cap-cyber-dot-4"></div>
        <div className="cap-cyber-dot cap-cyber-dot-5"></div>
        <div className="cap-cyber-dot cap-cyber-dot-6"></div>
        <div className="cap-cyber-dot cap-cyber-dot-7"></div>
        <div className="cap-cyber-dot cap-cyber-dot-8"></div>
        <div className="cap-cyber-dot cap-cyber-dot-9"></div>
        <div className="cap-cyber-dot cap-cyber-dot-10"></div>

        <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <span className="section-tag"><i className="fas fa-shield-alt"></i> CORE CAPABILITIES</span>
            <h2 className="section-title">Platform-Level Security Operations</h2>
            <p className="section-desc">Comprehensive enterprise-grade controls providing continuous resilience.</p>
          </div>

          <div className="cards-grid-4">
            {platformCapabilities.map((cap, idx) => (
              <InteractiveCard key={idx} title={cap.title} desc={cap.desc} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
