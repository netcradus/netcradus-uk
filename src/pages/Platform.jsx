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

function VisibilityVisual() {
  return (
    <svg className="capability-svg" viewBox="0 0 400 300">
      <defs>
        <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
          <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
        </radialGradient>
        <filter id="glow-visibility">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Central glow */}
      <circle cx="200" cy="150" r="80" fill="url(#center-glow)" />
      
      {/* Connection paths */}
      <path d="M 80 70 L 200 150" className="pulse-line" stroke="#263CFF" strokeWidth="1.5" fill="none" />
      <path d="M 320 70 L 200 150" className="pulse-line" stroke="#EC167A" strokeWidth="1.5" fill="none" />
      <path d="M 80 230 L 200 150" className="pulse-line" stroke="#8B5CF6" strokeWidth="1.5" fill="none" />
      <path d="M 320 230 L 200 150" className="pulse-line" stroke="#06B6D4" strokeWidth="1.5" fill="none" />
      
      {/* Peripheral nodes */}
      {/* Node 1: Endpoint */}
      <circle cx="80" cy="70" r="22" fill="#0c061a" stroke="#263CFF" strokeWidth="2" filter="url(#glow-visibility)" />
      <circle cx="80" cy="70" r="26" fill="none" stroke="rgba(38, 60, 255, 0.3)" strokeWidth="1" strokeDasharray="3, 3" />
      <foreignObject x="68" y="58" width="24" height="24">
        <div style={{ color: '#263CFF', fontSize: '15px', textAlign: 'center', lineHeight: '24px' }}>
          <i className="fas fa-desktop"></i>
        </div>
      </foreignObject>
      <text x="80" y="105" fill="#94a3b8" fontSize="10" fontFamily="sans-serif" textAnchor="middle">ENDPOINT</text>
      
      {/* Node 2: Cloud */}
      <circle cx="320" cy="70" r="22" fill="#0c061a" stroke="#EC167A" strokeWidth="2" filter="url(#glow-visibility)" />
      <circle cx="320" cy="70" r="26" fill="none" stroke="rgba(236, 22, 122, 0.3)" strokeWidth="1" strokeDasharray="3, 3" />
      <foreignObject x="308" y="58" width="24" height="24">
        <div style={{ color: '#EC167A', fontSize: '15px', textAlign: 'center', lineHeight: '24px' }}>
          <i className="fas fa-cloud"></i>
        </div>
      </foreignObject>
      <text x="320" y="105" fill="#94a3b8" fontSize="10" fontFamily="sans-serif" textAnchor="middle">CLOUD</text>
      
      {/* Node 3: Identity */}
      <circle cx="80" cy="230" r="22" fill="#0c061a" stroke="#8B5CF6" strokeWidth="2" filter="url(#glow-visibility)" />
      <circle cx="80" cy="230" r="26" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" strokeDasharray="3, 3" />
      <foreignObject x="68" y="218" width="24" height="24">
        <div style={{ color: '#8B5CF6', fontSize: '15px', textAlign: 'center', lineHeight: '24px' }}>
          <i className="fas fa-user-shield"></i>
        </div>
      </foreignObject>
      <text x="80" y="265" fill="#94a3b8" fontSize="10" fontFamily="sans-serif" textAnchor="middle">IDENTITY</text>
      
      {/* Node 4: Network */}
      <circle cx="320" cy="230" r="22" fill="#0c061a" stroke="#06B6D4" strokeWidth="2" filter="url(#glow-visibility)" />
      <circle cx="320" cy="230" r="26" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" strokeDasharray="3, 3" />
      <foreignObject x="308" y="218" width="24" height="24">
        <div style={{ color: '#06B6D4', fontSize: '15px', textAlign: 'center', lineHeight: '24px' }}>
          <i className="fas fa-network-wired"></i>
        </div>
      </foreignObject>
      <text x="320" y="265" fill="#94a3b8" fontSize="10" fontFamily="sans-serif" textAnchor="middle">NETWORK</text>
      
      {/* Center Console Node */}
      <circle cx="200" cy="150" r="32" fill="#070311" stroke="#00F0FF" strokeWidth="2.5" filter="url(#glow-visibility)" />
      <circle cx="200" cy="150" r="38" fill="none" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1.5" strokeDasharray="6, 4" className="shield-rotate-cw" />
      <circle cx="200" cy="150" r="44" fill="none" stroke="rgba(0, 240, 255, 0.1)" strokeWidth="1" />
      <foreignObject x="185" y="135" width="30" height="30">
        <div style={{ color: '#00F0FF', fontSize: '20px', textAlign: 'center', lineHeight: '30px' }}>
          <i className="fas fa-eye"></i>
        </div>
      </foreignObject>
      <text x="200" y="20" fill="#00F0FF" fontSize="10" fontFamily="monospace" letterSpacing="2" textAnchor="middle">TELEMETRY INGESTION</text>
    </svg>
  );
}

function ThreatIntelVisual() {
  return (
    <svg className="capability-svg" viewBox="0 0 400 300">
      <defs>
        <radialGradient id="radar-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(236, 22, 122, 0.15)" />
          <stop offset="100%" stopColor="rgba(236, 22, 122, 0)" />
        </radialGradient>
        <filter id="glow-intel">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Radar rings */}
      <circle cx="200" cy="150" r="120" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" />
      <circle cx="200" cy="150" r="90" fill="none" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" />
      <circle cx="200" cy="150" r="60" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
      <circle cx="200" cy="150" r="30" fill="none" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1" />
      
      {/* Radar crosshairs */}
      <line x1="200" y1="20" x2="200" y2="280" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" />
      <line x1="40" y1="150" x2="360" y2="150" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" />
      
      {/* Map grid lines */}
      <path d="M 50 80 Q 200 40 350 80" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
      <path d="M 50 220 Q 200 260 350 220" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
      
      {/* Radar sweeping scan line */}
      <line x1="200" y1="150" x2="290" y2="70" stroke="rgba(236, 22, 122, 0.8)" strokeWidth="2.5" className="radar-sweep-line" filter="url(#glow-intel)" />
      
      {/* Threat nodes */}
      <circle cx="290" cy="70" r="4" fill="#EC167A" className="pulsing-node-red" />
      <circle cx="110" cy="190" r="3" fill="#EC167A" className="pulsing-node-red" />
      <circle cx="270" cy="210" r="3.5" fill="#ff8a1f" className="pulsing-node" />
      
      {/* Map Target UK Overlay Indicator */}
      <g transform="translate(160, 110)">
        <rect x="0" y="0" width="80" height="50" rx="5" fill="rgba(12, 6, 26, 0.85)" stroke="#06B6D4" strokeWidth="1.5" filter="url(#glow-intel)" />
        <text x="40" y="20" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">UK VECTOR</text>
        <text x="40" y="38" fill="#ff8a1f" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">APT-44 FEED</text>
        <circle cx="10" cy="10" r="3" fill="#00FF66" className="pulsing-node" />
      </g>
      
      {/* Attack paths */}
      <path d="M 290 70 Q 240 90 200 110" fill="none" stroke="#EC167A" strokeWidth="1.5" strokeDasharray="5, 5" className="pulse-line-fast" />
      <path d="M 110 190 Q 150 180 180 160" fill="none" stroke="#EC167A" strokeWidth="1.5" strokeDasharray="5, 5" className="pulse-line-fast" />
      
      <text x="20" y="20" fill="#EC167A" fontSize="9" fontFamily="monospace">CTI_CORE_ONLINE</text>
      <text x="310" y="285" fill="#94a3b8" fontSize="9" fontFamily="monospace">SYS_LOC: 51.5074° N</text>
    </svg>
  );
}

function DetectionVisual() {
  return (
    <svg className="capability-svg" viewBox="0 0 400 300">
      <defs>
        <linearGradient id="funnel-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.4)" />
          <stop offset="60%" stopColor="rgba(236, 22, 122, 0.4)" />
          <stop offset="100%" stopColor="rgba(255, 138, 31, 0.6)" />
        </linearGradient>
        <filter id="glow-detection">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Raw signal source nodes (Left) */}
      <g transform="translate(40, 50)">
        <circle cx="0" cy="0" r="14" fill="#0e0719" stroke="#8B5CF6" strokeWidth="1.5" />
        <foreignObject x="-9" y="-9" width="18" height="18">
          <div style={{ color: '#8B5CF6', fontSize: '11px', textAlign: 'center', lineHeight: '18px' }}><i className="fas fa-envelope"></i></div>
        </foreignObject>
        <text x="0" y="25" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="monospace">EMAIL</text>
      </g>
      
      <g transform="translate(40, 115)">
        <circle cx="0" cy="0" r="14" fill="#0e0719" stroke="#06B6D4" strokeWidth="1.5" />
        <foreignObject x="-9" y="-9" width="18" height="18">
          <div style={{ color: '#06B6D4', fontSize: '11px', textAlign: 'center', lineHeight: '18px' }}><i className="fas fa-server"></i></div>
        </foreignObject>
        <text x="0" y="25" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="monospace">LOGS</text>
      </g>
      
      <g transform="translate(40, 180)">
        <circle cx="0" cy="0" r="14" fill="#0e0719" stroke="#EC167A" strokeWidth="1.5" />
        <foreignObject x="-9" y="-9" width="18" height="18">
          <div style={{ color: '#EC167A', fontSize: '11px', textAlign: 'center', lineHeight: '18px' }}><i className="fas fa-globe"></i></div>
        </foreignObject>
        <text x="0" y="25" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="monospace">WEB</text>
      </g>
      
      <g transform="translate(40, 245)">
        <circle cx="0" cy="0" r="14" fill="#0e0719" stroke="#ff8a1f" strokeWidth="1.5" />
        <foreignObject x="-9" y="-9" width="18" height="18">
          <div style={{ color: '#ff8a1f', fontSize: '11px', textAlign: 'center', lineHeight: '18px' }}><i className="fas fa-key"></i></div>
        </foreignObject>
        <text x="0" y="25" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="monospace">AUTH</text>
      </g>
      
      {/* Funnel pathways converging */}
      <path d="M 54 50 L 190 120" className="pulse-line" stroke="#8B5CF6" strokeWidth="1.5" fill="none" />
      <path d="M 54 115 L 190 135" className="pulse-line" stroke="#06B6D4" strokeWidth="1.5" fill="none" />
      <path d="M 54 180 L 190 165" className="pulse-line" stroke="#EC167A" strokeWidth="1.5" fill="none" />
      <path d="M 54 245 L 190 180" className="pulse-line" stroke="#ff8a1f" strokeWidth="1.5" fill="none" />
      
      {/* Correlation Engine Scanner */}
      <g transform="translate(210, 150)">
        <polygon points="-25,-20 25,-20 35,0 25,20 -25,20 -35,0" fill="#070311" stroke="#ff8a1f" strokeWidth="2" filter="url(#glow-detection)" />
        <polygon points="-20,-16 20,-16 28,0 20,16 -20,16 -28,0" fill="none" stroke="rgba(255, 138, 31, 0.4)" strokeWidth="1" strokeDasharray="3, 3" className="shield-rotate-ccw" />
        <foreignObject x="-12" y="-12" width="24" height="24">
          <div style={{ color: '#ff8a1f', fontSize: '14px', textAlign: 'center', lineHeight: '24px' }}><i className="fas fa-microchip"></i></div>
        </foreignObject>
        <text x="0" y="-28" fill="#ff8a1f" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">AI CORRELATION</text>
      </g>
      
      {/* High-fidelity output path */}
      <path d="M 245 150 L 320 150" className="pulse-line-fast" stroke="#ff2d78" strokeWidth="3" fill="none" filter="url(#glow-detection)" />
      
      {/* Final threat incident output */}
      <g transform="translate(335, 150)">
        <circle cx="0" cy="0" r="18" fill="#0c061a" stroke="#ff2d78" strokeWidth="2.5" filter="url(#glow-detection)" />
        <circle cx="0" cy="0" r="23" fill="none" stroke="rgba(255, 45, 120, 0.2)" strokeWidth="1" strokeDasharray="4, 4" className="shield-rotate-cw" />
        <foreignObject x="-9" y="-9" width="18" height="18">
          <div style={{ color: '#ff2d78', fontSize: '13px', textAlign: 'center', lineHeight: '18px' }}><i className="fas fa-exclamation-triangle"></i></div>
        </foreignObject>
        <text x="0" y="32" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">CORRELATED INCIDENT</text>
      </g>
    </svg>
  );
}

function ResponseVisual() {
  return (
    <svg className="capability-svg" viewBox="0 0 400 300">
      <defs>
        <radialGradient id="isolation-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255, 45, 120, 0.25)" />
          <stop offset="100%" stopColor="rgba(255, 45, 120, 0)" />
        </radialGradient>
        <filter id="glow-response">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Protected Enterprise Network Cluster (Left) */}
      <g transform="translate(130, 150)">
        {/* Network connections */}
        <line x1="-50" y1="-50" x2="0" y2="0" stroke="#00FF66" strokeWidth="1.5" />
        <line x1="-50" y1="50" x2="0" y2="0" stroke="#00FF66" strokeWidth="1.5" />
        <line x1="50" y1="-50" x2="0" y2="0" stroke="#00FF66" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="0" y2="0" stroke="#00FF66" strokeWidth="1.5" />
        
        {/* Core switch node */}
        <circle cx="0" cy="0" r="16" fill="#050208" stroke="#00FF66" strokeWidth="2" />
        <foreignObject x="-10" y="-10" width="20" height="20">
          <div style={{ color: '#00FF66', fontSize: '12px', textAlign: 'center', lineHeight: '20px' }}><i className="fas fa-network-wired"></i></div>
        </foreignObject>
        <text x="0" y="-23" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">NET_HUB</text>
        
        {/* Healthy devices */}
        <circle cx="-50" cy="-50" r="8" fill="#00FF66" />
        <circle cx="-50" cy="50" r="8" fill="#00FF66" />
        <circle cx="50" cy="-50" r="8" fill="#00FF66" />
        <circle cx="50" cy="50" r="8" fill="#00FF66" />
      </g>
      
      {/* Severed Connection to Infected Host */}
      <line x1="130" y1="150" x2="280" y2="150" stroke="#ff2d78" strokeWidth="2" strokeDasharray="4, 4" />
      
      {/* Barrier wall indicators (Severed Cross) */}
      <g transform="translate(205, 150)">
        <circle cx="0" cy="0" r="12" fill="#0c061a" stroke="#ff2d78" strokeWidth="1.5" />
        <line x1="-5" y1="-5" x2="5" y2="5" stroke="#ff2d78" strokeWidth="2" />
        <line x1="5" y1="-5" x2="-5" y2="5" stroke="#ff2d78" strokeWidth="2" />
      </g>
      
      {/* Compromised Isolated Node (Right) */}
      <g transform="translate(300, 150)">
        <circle cx="0" cy="0" r="60" fill="url(#isolation-glow)" />
        
        {/* Containment shield ring */}
        <circle cx="0" cy="0" r="32" fill="none" stroke="#EC167A" strokeWidth="2" strokeDasharray="5, 3" className="shield-rotate-cw" filter="url(#glow-response)" />
        <circle cx="0" cy="0" r="38" fill="none" stroke="rgba(236, 22, 122, 0.2)" strokeWidth="1.5" />
        
        {/* Infected endpoint node */}
        <circle cx="0" cy="0" r="18" fill="#0c061a" stroke="#ff2d78" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="18" fill="none" stroke="#ff2d78" className="pulsing-node-red" />
        
        <foreignObject x="-10" y="-10" width="20" height="20">
          <div style={{ color: '#ff2d78', fontSize: '13px', textAlign: 'center', lineHeight: '20px' }}><i className="fas fa-skull-crossbones"></i></div>
        </foreignObject>
        
        <text x="0" y="-46" fill="#EC167A" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace" letterSpacing="1">ISOLATED</text>
        <text x="0" y="50" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="monospace">HOST_CONTAINED</text>
      </g>
      
      <text x="20" y="280" fill="#00FF66" fontSize="9" fontFamily="monospace">STATUS: ACTIVE_SHIELD_UP</text>
    </svg>
  );
}

function SecOpsVisual() {
  return (
    <svg className="capability-svg" viewBox="0 0 400 300">
      <defs>
        <filter id="glow-ops">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background SOC panels grid */}
      <rect x="20" y="20" width="170" height="110" rx="6" fill="#0c061a" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
      <rect x="210" y="20" width="170" height="110" rx="6" fill="#0c061a" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
      <rect x="20" y="150" width="360" height="110" rx="6" fill="#0c061a" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
      
      {/* Panel 1 Content (Live Telemetry graph) */}
      <text x="35" y="42" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">THREAT TELEMETRY ENGINE</text>
      <path d="M 35 100 L 60 70 L 85 90 L 110 50 L 135 85 L 160 40 L 175 60" fill="none" stroke="#06B6D4" strokeWidth="2" className="stream-graph-line" />
      <line x1="35" y1="105" x2="175" y2="105" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
      <circle cx="160" cy="40" r="3" fill="#06B6D4" className="pulsing-node" />
      
      {/* Panel 2 Content (Live Event Triage Logs) */}
      <text x="225" y="42" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">LIVE EVENT TRIAGE</text>
      <text x="225" y="65" fill="#a78bfa" fontSize="7" fontFamily="monospace">&gt; CORRELATING RAW_DATA...</text>
      <text x="225" y="80" fill="#EC167A" fontSize="7" fontFamily="monospace">&gt; ATTACK SIGNATURE DETECTED</text>
      <text x="225" y="95" fill="#34d399" fontSize="7" fontFamily="monospace">&gt; RUNNING AUTOMATED CONTAINMENT</text>
      <text x="225" y="110" fill="#ff8a1f" fontSize="7" fontFamily="monospace">&gt; ANALYST ASSIGNMENT: OK</text>
      
      {/* Panel 3 Content (SOC Monitor Workspace) */}
      <text x="35" y="172" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CONVERGED WORKFLOW STATUS</text>
      
      {/* Diagnostic checkmarks */}
      <g transform="translate(45, 210)">
        <rect x="0" y="0" width="80" height="30" rx="4" fill="rgba(6, 182, 212, 0.1)" stroke="#06B6D4" strokeWidth="1" />
        <text x="40" y="18" fill="#06B6D4" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">DIAGNOSTICS: OK</text>
      </g>
      
      <g transform="translate(160, 210)">
        <rect x="0" y="0" width="80" height="30" rx="4" fill="rgba(255, 45, 120, 0.1)" stroke="#ff2d78" strokeWidth="1" />
        <text x="40" y="18" fill="#ff2d78" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">TRIAGE: ACTIVE</text>
        <circle cx="70" cy="10" r="3" fill="#ff2d78" className="pulsing-node-red" />
      </g>
      
      <g transform="translate(275, 210)">
        <rect x="0" y="0" width="80" height="30" rx="4" fill="rgba(0, 255, 102, 0.1)" stroke="#34D399" strokeWidth="1" />
        <text x="40" y="18" fill="#34D399" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">SECURITY COGNITIVE</text>
      </g>
      
      <text x="360" y="172" fill="#ff2d78" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="end" filter="url(#glow-ops)">SOC_ALERT_CRITICAL</text>
    </svg>
  );
}

function OrchestrationVisual() {
  return (
    <svg className="capability-svg" viewBox="0 0 400 300">
      <defs>
        <filter id="glow-orch">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Playbook connection line */}
      <path d="M 60 150 L 340 150" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="4" />
      <path d="M 60 150 L 340 150" className="pulse-line" stroke="#8B5CF6" strokeWidth="2.5" fill="none" />
      
      {/* Step 1: Detection */}
      <g transform="translate(60, 150)">
        <circle cx="0" cy="0" r="22" fill="#0c061a" stroke="#8B5CF6" strokeWidth="2" filter="url(#glow-orch)" />
        <circle cx="0" cy="0" r="22" fill="none" stroke="#8B5CF6" strokeWidth="1" className="pulsing-node" />
        <foreignObject x="-9" y="-9" width="18" height="18">
          <div style={{ color: '#8B5CF6', fontSize: '12px', textAlign: 'center', lineHeight: '18px' }}><i className="fas fa-bell"></i></div>
        </foreignObject>
        <text x="0" y="38" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">DETECTION</text>
        <text x="0" y="48" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="monospace">PLAYBOOK RUN</text>
      </g>
      
      {/* Step 2: Analysis */}
      <g transform="translate(150, 150)">
        <circle cx="0" cy="0" r="22" fill="#0c061a" stroke="#06B6D4" strokeWidth="2" filter="url(#glow-orch)" />
        <foreignObject x="-9" y="-9" width="18" height="18">
          <div style={{ color: '#06B6D4', fontSize: '12px', textAlign: 'center', lineHeight: '18px' }}><i className="fas fa-brain"></i></div>
        </foreignObject>
        <text x="0" y="38" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ANALYSIS</text>
        <text x="0" y="48" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="monospace">COGNITIVE ENGINE</text>
      </g>
      
      {/* Step 3: Remediation */}
      <g transform="translate(240, 150)">
        <circle cx="0" cy="0" r="22" fill="#0c061a" stroke="#EC167A" strokeWidth="2" filter="url(#glow-orch)" />
        <foreignObject x="-9" y="-9" width="18" height="18">
          <div style={{ color: '#EC167A', fontSize: '12px', textAlign: 'center', lineHeight: '18px' }}><i className="fas fa-bolt"></i></div>
        </foreignObject>
        <text x="0" y="38" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">MITIGATION</text>
        <text x="0" y="48" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="monospace">AUTO BLOCK</text>
      </g>
      
      {/* Step 4: Verification */}
      <g transform="translate(330, 150)">
        <circle cx="0" cy="0" r="22" fill="#0c061a" stroke="#00FF66" strokeWidth="2" filter="url(#glow-orch)" />
        <foreignObject x="-9" y="-9" width="18" height="18">
          <div style={{ color: '#00FF66', fontSize: '12px', textAlign: 'center', lineHeight: '18px' }}><i className="fas fa-check-double"></i></div>
        </foreignObject>
        <text x="0" y="38" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">VERIFIED</text>
        <text x="0" y="48" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="monospace">SYSTEM HARDENED</text>
      </g>
      
      <text x="200" y="40" fill="#a78bfa" fontSize="10" fontWeight="bold" fontFamily="monospace" letterSpacing="1" textAnchor="middle">PLAYBOOK: RANSOMWARE_CONTAINMENT</text>
    </svg>
  );
}

function ResilienceVisual() {
  return (
    <svg className="capability-svg" viewBox="0 0 400 300">
      <defs>
        <radialGradient id="shield-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(6, 182, 212, 0.2)" />
          <stop offset="80%" stopColor="rgba(6, 182, 212, 0.05)" />
          <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
        </radialGradient>
        <filter id="glow-shield">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Concentric rotating shield forcefields */}
      <circle cx="200" cy="150" r="90" fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="10, 8" className="shield-rotate-cw" filter="url(#glow-shield)" />
      <circle cx="200" cy="150" r="70" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="30, 20" className="shield-rotate-ccw" filter="url(#glow-shield)" />
      <circle cx="200" cy="150" r="50" fill="url(#shield-glow)" stroke="rgba(255, 45, 120, 0.4)" strokeWidth="1" />
      
      {/* Enterprise core server architecture node */}
      <g transform="translate(200, 150)">
        <rect x="-18" y="-22" width="36" height="44" rx="4" fill="#070311" stroke="#00FF66" strokeWidth="2" />
        <line x1="-12" y1="-10" x2="12" y2="-10" stroke="#00FF66" strokeWidth="1.5" />
        <line x1="-12" y1="0" x2="12" y2="0" stroke="#00FF66" strokeWidth="1.5" />
        <line x1="-12" y1="10" x2="12" y2="10" stroke="#00FF66" strokeWidth="1.5" />
        
        <circle cx="-6" cy="-10" r="1.5" fill="#050208" />
        <circle cx="-6" cy="0" r="1.5" fill="#050208" />
        <circle cx="-6" cy="10" r="1.5" fill="#050208" />
        
        <circle cx="10" cy="-10" r="2" fill="#00FF66" className="pulsing-node" />
        <circle cx="10" cy="0" r="2" fill="#00FF66" className="pulsing-node" />
        <circle cx="10" cy="10" r="2" fill="#00FF66" className="pulsing-node" />
      </g>
      
      {/* Threat waves deflecting on shield */}
      <path d="M 70 70 A 100 100 0 0 1 120 120" fill="none" stroke="#EC167A" strokeWidth="2" strokeLinecap="round" className="threat-wave" />
      <path d="M 280 230 A 100 100 0 0 1 330 280" fill="none" stroke="#EC167A" strokeWidth="2" strokeLinecap="round" className="threat-wave" />
      
      {/* Recovery backup sync stream */}
      <path d="M 200 240 L 200 270" fill="none" stroke="#34D399" strokeWidth="2" strokeDasharray="4, 4" className="pulse-line-fast" />
      <text x="200" y="285" fill="#34D399" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">RECOVERY_BACKUP_SYNC</text>
      
      <text x="20" y="30" fill="#06B6D4" fontSize="9" fontFamily="monospace">SHIELD_STATUS: ACTIVE [100%]</text>
    </svg>
  );
}

function IntegrationVisual() {
  return (
    <svg className="capability-svg" viewBox="0 0 400 300">
      <defs>
        <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
        </radialGradient>
        <filter id="glow-integration">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Central Integration Hub */}
      <circle cx="200" cy="150" r="60" fill="url(#hub-glow)" />
      <circle cx="200" cy="150" r="30" fill="#070311" stroke="#8B5CF6" strokeWidth="2" filter="url(#glow-integration)" />
      <foreignObject x="188" y="138" width="24" height="24">
        <div style={{ color: '#8B5CF6', fontSize: '15px', textAlign: 'center', lineHeight: '24px' }}><i className="fas fa-plug"></i></div>
      </foreignObject>
      <text x="200" y="196" fill="#8B5CF6" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">API_GATEWAY</text>
      
      {/* Connection spokes radiating outwards */}
      {/* Spoke 1: IAM */}
      <line x1="200" y1="150" x2="100" y2="70" stroke="#8B5CF6" strokeWidth="1.5" className="api-pulse-flow" />
      <g transform="translate(100, 70)">
        <rect x="-35" y="-12" width="70" height="24" rx="4" fill="rgba(12, 6, 26, 0.9)" stroke="#8B5CF6" strokeWidth="1" />
        <text x="0" y="4" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">IAM/IDP</text>
      </g>
      
      {/* Spoke 2: Firewall */}
      <line x1="200" y1="150" x2="300" y2="70" stroke="#8B5CF6" strokeWidth="1.5" className="api-pulse-flow" />
      <g transform="translate(300, 70)">
        <rect x="-35" y="-12" width="70" height="24" rx="4" fill="rgba(12, 6, 26, 0.9)" stroke="#8B5CF6" strokeWidth="1" />
        <text x="0" y="4" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">FIREWALL</text>
      </g>
      
      {/* Spoke 3: EDR */}
      <line x1="200" y1="150" x2="80" y2="150" stroke="#8B5CF6" strokeWidth="1.5" className="api-pulse-flow" />
      <g transform="translate(80, 150)">
        <rect x="-30" y="-12" width="60" height="24" rx="4" fill="rgba(12, 6, 26, 0.9)" stroke="#8B5CF6" strokeWidth="1" />
        <text x="0" y="4" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">EDR</text>
      </g>
      
      {/* Spoke 4: Cloud Security */}
      <line x1="200" y1="150" x2="320" y2="150" stroke="#8B5CF6" strokeWidth="1.5" className="api-pulse-flow" />
      <g transform="translate(320, 150)">
        <rect x="-35" y="-12" width="70" height="24" rx="4" fill="rgba(12, 6, 26, 0.9)" stroke="#8B5CF6" strokeWidth="1" />
        <text x="0" y="4" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">CLOUD</text>
      </g>
      
      {/* Spoke 5: Collaboration */}
      <line x1="200" y1="150" x2="200" y2="245" stroke="#8B5CF6" strokeWidth="1.5" className="api-pulse-flow" />
      <g transform="translate(200, 245)">
        <rect x="-45" y="-12" width="90" height="24" rx="4" fill="rgba(12, 6, 26, 0.9)" stroke="#8B5CF6" strokeWidth="1" />
        <text x="0" y="4" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">COLLAB / ITSM</text>
      </g>
      
      <text x="20" y="285" fill="#8B5CF6" fontSize="9" fontFamily="monospace">OPEN_API: REST/WEBHOOKS</text>
    </svg>
  );
}

const platformCapabilities = [
  {
    number: '01',
    title: 'Unified Security Visibility',
    desc: 'Complete telemetry and real-time visibility across endpoints, cloud, identity, and network layers.',
    visual: VisibilityVisual
  },
  {
    number: '02',
    title: 'Threat Intelligence',
    desc: 'Global cyber intelligence feeds correlated dynamically with UK-specific attack vectors and tradecraft.',
    visual: ThreatIntelVisual
  },
  {
    number: '03',
    title: 'Detection & Correlation',
    desc: 'Intelligent threat detection and cross-layer correlation to reduce alert noise and uncover multi-stage attacks.',
    visual: DetectionVisual
  },
  {
    number: '04',
    title: 'Response & Containment',
    desc: 'Precision response controls and isolation protocols designed to neutralize attacks at machine speed.',
    visual: ResponseVisual
  },
  {
    number: '05',
    title: 'Security Operations',
    desc: 'Integrated dashboard workflows combining automated diagnostics, triage, and human-led security analysis.',
    visual: SecOpsVisual
  },
  {
    number: '06',
    title: 'Security Orchestration',
    desc: 'Automated playbooks coordinating remediation actions seamlessly across your complete cybersecurity stack.',
    visual: OrchestrationVisual
  },
  {
    number: '07',
    title: 'Cyber Resilience',
    desc: 'Proactive posture hardening and rapid recovery protocols to maintain operational continuity under attack.',
    visual: ResilienceVisual
  },
  {
    number: '08',
    title: 'Integration & Orchestration',
    desc: 'Open API architecture allowing flexible integrations with third-party tools to orchestrate response actions.',
    visual: IntegrationVisual
  }
];

function CapabilityRow({ number, title, desc, Visual, index }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
      }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`capability-card ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="capability-row">
        <div className="capability-text-col">
          <div className="capability-number-wrap">
            <span className="capability-number">{number}</span>
          </div>
          <h3 className="capability-title">{title}</h3>
          <p className="capability-desc">{desc}</p>
        </div>
        <div className="capability-visual-col">
          <div className="capability-visual-container">
            <div className="cyber-grid-overlay" />
            <Visual />
          </div>
        </div>
      </div>
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

      {/* PLATFORM-LEVEL CAPABILITIES */}
      <section className="platform-capabilities-section">
        {/* Abstract low opacity background circuit grid */}
        <svg className="light-cyber-bg-svg" viewBox="0 0 1000 800" preserveAspectRatio="none">
          <path d="M50,100 L150,100 L200,150 L400,150 L450,100 L750,100 L800,150 L950,150" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M100,300 L250,300 L300,350 L700,350 L750,300 L900,300" fill="none" stroke="#3b82f6" strokeWidth="1" />
          <path d="M50,700 L350,700 L400,650 L600,650 L650,700 L950,700" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="200" cy="150" r="3" fill="#8b5cf6" />
          <circle cx="400" cy="150" r="3" fill="#8b5cf6" />
          <circle cx="800" cy="150" r="3" fill="#8b5cf6" />
          <circle cx="300" cy="350" r="3" fill="#3b82f6" />
          <circle cx="700" cy="350" r="3" fill="#3b82f6" />
        </svg>

        {/* Background Ambient Glows */}
        <div className="platform-cap-glow cap-glow-top-left"></div>
        <div className="platform-cap-glow cap-glow-top-center"></div>
        <div className="platform-cap-glow cap-glow-right"></div>
        <div className="platform-cap-glow cap-glow-bottom"></div>

        <div className="capabilities-container">
          <div className="section-header" style={{ marginBottom: '5rem', textAlign: 'center' }}>
            <span className="section-tag">
              <i className="fas fa-shield-alt"></i> CORE CAPABILITIES
            </span>
            <h2 className="section-title">Platform-Level Security Operations</h2>
            <p className="section-desc">
              Comprehensive enterprise-grade controls providing continuous resilience.
            </p>
          </div>

          <div className="capabilities-vertical-list">
            {platformCapabilities.map((cap, idx) => (
              <CapabilityRow 
                key={idx}
                number={cap.number}
                title={cap.title}
                desc={cap.desc}
                Visual={cap.visual}
                index={idx}
              />
            ))}
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
    </>
  );
}
