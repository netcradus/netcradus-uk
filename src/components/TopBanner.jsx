import React from 'react';
import { Link } from 'react-router-dom';

export default function TopBanner() {
  return (
    <div className="top-banner">
      <div className="top-banner-inner">
        <div>
          <span className="top-banner-badge">🇬🇧 UK CYBERSECURITY</span>
          <strong>UK Cybersecurity | Enterprise Defence | 24/7 Security Operations</strong> &bull; Netcradus Limited (ICO Ref: <code>ZC045097</code>)
        </div>
        <div>
          <Link to="/compliance" className="top-banner-link">
            <i className="fas fa-shield-alt"></i> Verify ICO Certificate &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
