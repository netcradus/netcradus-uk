import React from 'react';

export default function Icon3D({ name, size = 36 }) {
  const gradientId = `grad-${name}`;
  const sideGradId = `side-grad-${name}`;
  const highlightId = `hl-${name}`;
  const filterId = `shadow-${name}`;

  return (
    <div className="icon-3d-wrapper" style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible', filter: 'drop-shadow(0 6px 10px rgba(37, 99, 235, 0.25))' }}
      >
        <defs>
          {/* Primary 3D Front Face Gradient */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="40%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>

          {/* 3D Extrusion Side Shadow Gradient */}
          <linearGradient id={sideGradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#172554" />
          </linearGradient>

          {/* Glossy Specular Highlight Gradient */}
          <linearGradient id={highlightId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Soft Ambient Contact Shadow */}
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="150%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
            <feOffset dx="0" dy="5" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ICON 1: AI THREAT DETECTION (3D Neural Brain) */}
        {name === 'ai-brain' && (
          <g filter={`url(#${filterId})`}>
            <path
              d="M14 18C11.5 18 9 20.5 9 24.5C9 28.5 11 31 13 32.5C12 34.5 13 37.5 16 38.5C18.5 39.3 21 38 22.5 36.5C23.5 37.5 25 37.5 26 36.5C27.5 38 30 39.3 32.5 38.5C35.5 37.5 36.5 34.5 35.5 32.5C37.5 31 39.5 28.5 39.5 24.5C39.5 20.5 37 18 34.5 18C34.5 15 32 12.5 28.5 12.5C26.5 12.5 24.8 13.5 24 14.8C23.2 13.5 21.5 12.5 19.5 12.5C16 12.5 13.5 15 14 18Z"
              fill={`url(#${sideGradId})`}
              transform="translate(0, 3)"
            />
            <path
              d="M14 17C11.5 17 9 19.5 9 23.5C9 27.5 11 30 13 31.5C12 33.5 13 36.5 16 37.5C18.5 38.3 21 37 22.5 35.5C23.5 36.5 25 36.5 26 35.5C27.5 37 30 38.3 32.5 37.5C35.5 36.5 36.5 33.5 35.5 31.5C37.5 30 39.5 27.5 39.5 23.5C39.5 19.5 37 17 34.5 17C34.5 14 32 11.5 28.5 11.5C26.5 11.5 24.8 12.5 24 13.8C23.2 12.5 21.5 11.5 19.5 11.5C16 11.5 13.5 14 14 17Z"
              fill={`url(#${gradientId})`}
            />
            <path
              d="M15 16.5C13.5 18 11 20 11 23.5C11 24.5 11.5 25.5 12.2 26.2C13 22 16.5 18.5 20.5 18C18.5 16.5 16.5 15.5 15 16.5Z"
              fill={`url(#${highlightId})`}
            />
            <path d="M24 14V35" stroke="#1D4ED8" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M17 21C20 22 21 26 18 29" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
            <path d="M31 21C28 22 27 26 30 29" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
            <circle cx="18" cy="21" r="2" fill="#ffffff" />
            <circle cx="30" cy="21" r="2" fill="#ffffff" />
            <circle cx="24" cy="26" r="2.2" fill="#93C5FD" />
          </g>
        )}

        {/* ICON 2: SECURITY OPERATIONS (3D SOC Headset) */}
        {name === 'soc-headset' && (
          <g filter={`url(#${filterId})`}>
            <path
              d="M12 24C12 17.37 17.37 12 24 12C30.63 12 36 17.37 36 24"
              stroke={`url(#${sideGradId})`}
              strokeWidth="6"
              strokeLinecap="round"
              transform="translate(0, 3.5)"
            />
            <path
              d="M12 23C12 16.37 17.37 11 24 11C30.63 11 36 16.37 36 23"
              stroke={`url(#${gradientId})`}
              strokeWidth="5.5"
              strokeLinecap="round"
            />
            <rect x="8" y="21" width="7" height="13" rx="3.5" fill={`url(#${sideGradId})`} transform="translate(0, 2.5)" />
            <rect x="8" y="20" width="7" height="13" rx="3.5" fill={`url(#${gradientId})`} />
            <rect x="9.5" y="21.5" width="4" height="10" rx="2" fill={`url(#${highlightId})`} />

            <rect x="33" y="21" width="7" height="13" rx="3.5" fill={`url(#${sideGradId})`} transform="translate(0, 2.5)" />
            <rect x="33" y="20" width="7" height="13" rx="3.5" fill={`url(#${gradientId})`} />
            <rect x="34.5" y="21.5" width="4" height="10" rx="2" fill={`url(#${highlightId})`} />

            <path d="M35 30C35 35 29 37 25 37" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" />
            <circle cx="24" cy="37" r="3" fill="#60A5FA" />
            <circle cx="24" cy="37" r="1.5" fill="#ffffff" />
          </g>
        )}

        {/* ICON 3: ENDPOINT PROTECTION (3D Laptop + Shield) */}
        {name === 'endpoint-laptop' && (
          <g filter={`url(#${filterId})`}>
            <path d="M6 34L10 38H38L42 34V36H6V34Z" fill={`url(#${sideGradId})`} />
            <rect x="6" y="32" width="36" height="4" rx="2" fill={`url(#${gradientId})`} />

            <rect x="10" y="14" width="28" height="19" rx="3" fill={`url(#${sideGradId})`} transform="translate(0, 2)" />
            <rect x="10" y="13" width="28" height="19" rx="3" fill={`url(#${gradientId})`} />
            <rect x="12" y="15" width="24" height="15" rx="1.5" fill="#0B132B" />

            <path d="M12 15L26 15L12 28V15Z" fill="white" fillOpacity="0.12" />

            <path d="M24 17L29 19.5V23.5C29 26.5 26.5 29 24 30C21.5 29 19 26.5 19 23.5V19.5L24 17Z" fill={`url(#${gradientId})`} />
            <path d="M24 17L29 19.5V23.5C29 26.5 26.5 29 24 30V17Z" fill={`url(#${sideGradId})`} opacity="0.35" />
            <path d="M24 19.5L22 23H24.5L23.5 26.5L26 23H23.5L24 19.5Z" fill="#ffffff" />
          </g>
        )}

        {/* ICON 4: AUTOMATED RESPONSE (3D Multi-Faceted Lightning Bolt) */}
        {name === 'automated-lightning' && (
          <g filter={`url(#${filterId})`}>
            <path
              d="M27 9L15 25H25L21 39L33 23H23L27 9Z"
              fill={`url(#${sideGradId})`}
              transform="translate(2, 3)"
            />
            <path
              d="M27 8L15 24H25L21 38L33 22H23L27 8Z"
              fill={`url(#${gradientId})`}
            />
            <path
              d="M27 8L20 24H25L21 38L33 22H23L27 8Z"
              fill={`url(#${highlightId})`}
              opacity="0.6"
            />
            <polygon points="25,18 21,24 26,24" fill="#ffffff" opacity="0.8" />
          </g>
        )}

        {/* ICON 5: INCIDENT INVESTIGATION (3D Glass Magnifier) */}
        {name === 'incident-search' && (
          <g filter={`url(#${filterId})`}>
            <rect x="27" y="27" width="7" height="15" rx="3.5" transform="rotate(-45 27 27)" fill={`url(#${sideGradId})`} />
            <rect x="26" y="26" width="6.5" height="14.5" rx="3.2" transform="rotate(-45 26 26)" fill={`url(#${gradientId})`} />

            <circle cx="21" cy="21" r="13" fill={`url(#${sideGradId})`} transform="translate(0, 2.5)" />
            <circle cx="21" cy="20" r="13" fill={`url(#${gradientId})`} />
            <circle cx="21" cy="20" r="8.5" fill="#0B132B" />

            <path d="M15 15C18 12 24 12 27 15C25.5 13.5 22 13 18 15Z" fill="#ffffff" opacity="0.75" />
            <circle cx="21" cy="20" r="3" fill="#60A5FA" opacity="0.8" />
            <circle cx="21" cy="20" r="1.2" fill="#ffffff" />
          </g>
        )}

        {/* ICON 6: SECURITY ANALYTICS (3D Extruded Pie Chart) */}
        {name === 'analytics-pie' && (
          <g filter={`url(#${filterId})`}>
            <path
              d="M24 12C14.06 12 6 20.06 6 30C6 39.94 14.06 48 24 48C33.94 48 42 39.94 42 30"
              fill={`url(#${sideGradId})`}
              transform="scale(0.85) translate(4, 5)"
            />

            <path
              d="M23 11C14.16 11 7 18.16 7 27C7 35.84 14.16 43 23 43C31.84 43 39 35.84 39 27H23V11Z"
              fill={`url(#${gradientId})`}
            />
            <path
              d="M23 11C14.16 11 7 18.16 7 27C7 35.84 14.16 43 23 43C31.84 43 39 35.84 39 27H23V11Z"
              fill={`url(#${sideGradId})`}
              opacity="0.3"
            />

            <g transform="translate(4, -3)">
              <path d="M25 9V23H39C39 15.27 32.73 9 25 9Z" fill={`url(#${sideGradId})`} transform="translate(0, 2)" />
              <path d="M25 8V22H39C39 14.27 32.73 8 25 8Z" fill={`url(#${gradientId})`} />
              <path d="M25 8V22H39C39 14.27 32.73 8 25 8Z" fill={`url(#${highlightId})`} opacity="0.6" />
            </g>
          </g>
        )}

        {/* ICON 7: CYBER RESILIENCE (3D Shield + Keyhole) */}
        {name === 'cyber-shield' && (
          <g filter={`url(#${filterId})`}>
            <path
              d="M24 10L36 15V24C36 31.5 30.5 38 24 40C17.5 38 12 31.5 12 24V15L24 10Z"
              fill={`url(#${sideGradId})`}
              transform="translate(0, 3)"
            />
            <path
              d="M24 9L36 14V23C36 30.5 30.5 37 24 39C17.5 37 12 30.5 12 23V14L24 9Z"
              fill={`url(#${gradientId})`}
            />
            <path
              d="M24 9L36 14V23C36 25 35 27 33.5 28.5C31 22 27 15 24 9Z"
              fill={`url(#${highlightId})`}
            />
            <circle cx="24" cy="20" r="3.5" fill="#ffffff" />
            <polygon points="22.5,22 25.5,22 26.5,28 21.5,28" fill="#ffffff" />
          </g>
        )}
      </svg>
    </div>
  );
}
