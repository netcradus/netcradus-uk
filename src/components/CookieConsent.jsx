import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "netcradus_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (storedValue === "accepted" || storedValue === "declined") {
      return;
    }

    setVisible(true);

    const timer = window.setTimeout(() => {
      setMounted(true);
    }, 20);

    return () => window.clearTimeout(timer);
  }, []);

  const handleChoice = (value) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setMounted(false);
    window.setTimeout(() => setVisible(false), 400);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="cookie-consent-banner"
      style={{ transform: mounted ? "translateY(0)" : "translateY(100%)" }}
    >
      <div className="cookie-consent-container">
        <div className="cookie-consent-info">
          <span className="cookie-consent-icon-wrapper">
            <i className="fas fa-shield-halved" style={{ fontSize: '0.875rem' }}></i>
          </span>
          <p className="cookie-consent-text">
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By continuing to use our site, you consent to our use of cookies.{" "}
            <Link to="/compliance" className="cookie-consent-link">
              Learn more
            </Link>
          </p>
        </div>

        <div className="cookie-consent-buttons">
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="cookie-consent-btn-accept"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="cookie-consent-btn-decline"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
