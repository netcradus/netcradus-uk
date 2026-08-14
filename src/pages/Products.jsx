import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ScrollingCard({ children, title, desc, link, linkText }) {
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
      className={`service-scrolling-card card-item-3d ${isVisible ? 'visible' : ''} ${children ? 'card-has-preview' : ''}`}
    >
      {children ? (
        children
      ) : (
        <>
          <h3 className="service-title">{title}</h3>
          <p className="service-desc">{desc}</p>
          <Link to={link} className="platform-card-arrow" style={{ marginTop: 'auto', paddingTop: '1.5rem', textDecoration: 'none' }}>
            {linkText} &rarr;
          </Link>
        </>
      )}
    </div>
  );
}

export default function Products() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check user prefers-reduced-motion setting
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMotionChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // Update playback state on prefersReducedMotion change
  useEffect(() => {
    if (videoRef.current) {
      if (prefersReducedMotion) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, [prefersReducedMotion]);

  // Handle play/pause toggle click
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.log("Video play interrupted:", err);
          setIsPlaying(false);
        });
      }
    }
  };

  // Seek video timeline handler
  const handleSeek = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      if (videoRef.current.paused && !prefersReducedMotion) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.log("Video play interrupted:", err);
        });
      }
    }
  };

  return (
    <div className="products-page-wrapper" style={{ paddingTop: '6rem' }}>
      
      {/* Video Showcase Section (Full Screen Width Breakout) */}
      <div className="products-video-showcase-wrapper">
        <div className="products-video-showcase">
          <div className="showcase-header">
            <span className="section-tag" style={{ marginBottom: '1.2rem', display: 'inline-flex' }}>
              <i className="fas fa-play-circle"></i> CORE SYSTEM PREVIEW
            </span>
            <h2 className="showcase-title">Our Product Suite</h2>
            <p className="showcase-subtitle">Four products. One unified platform.</p>
          </div>

          {/* Centered Video Panel */}
          <div className="showcase-video-container" onClick={togglePlay}>
            <video 
              ref={videoRef}
              src={`${import.meta.env.BASE_URL}videos/netcradus_products_carousel_v4.mp4`}
              autoPlay={!prefersReducedMotion}
              loop
              muted
              playsInline
              preload="auto"
              poster={`${import.meta.env.BASE_URL}videos/netcradus_products_carousel_v4_poster.png`}
              className="showcase-video"
            />
            
            {/* Play Button Overlay (visible when paused) */}
            {!isPlaying && (
              <div className="video-play-overlay">
                <div className="play-button-orb">
                  <i className="fas fa-play"></i>
                </div>
              </div>
            )}
          </div>

          {/* Quick-Jump Timeline Seek Indicators */}
          <div className="showcase-timeline-controls">
            <button onClick={() => handleSeek(0)} className="timeline-btn">
              <span className="timeline-dot"></span>
              NetCRM
            </button>
            <button onClick={() => handleSeek(4)} className="timeline-btn">
              <span className="timeline-dot"></span>
              ACIS
            </button>
            <button onClick={() => handleSeek(8)} className="timeline-btn">
              <span className="timeline-dot"></span>
              NIF
            </button>
            <button onClick={() => handleSeek(12)} className="timeline-btn">
              <span className="timeline-dot"></span>
              Cyrix XDR
            </button>
          </div>
        </div>
      </div>

      {/* Alternating Light & Dark Immersive Sections */}
      <div className="products-alternating-sections">
        
        {/* SECTION 1 - LIGHT MODE (NetCRM) */}
        <section className="product-scroll-section light-section section-crm">
          <div className="product-scroll-header">
            <h3 className="service-title">NetCRM Portal</h3>
            <p className="service-desc">Enterprise relationship management, secure stakeholder operations, and digital compliance platforms built for secure business communications.</p>
            <Link to="/contact" className="platform-card-arrow" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Explore NetCRM &rarr;
            </Link>
          </div>
          
          <ScrollingCard>
            <img 
              src={`${import.meta.env.BASE_URL}images/netcrm_dashboard.png`} 
              alt="NetCRM System Overview" 
              className="card-preview-image"
            />
          </ScrollingCard>
        </section>

        {/* SECTION 2 - DARK MODE (ACIS) */}
        <section className="product-scroll-section dark-section section-acis">
          <ScrollingCard 
            title="ACIS™ Autonomous Engine"
            desc="Continuous real-time threat anomaly detection, sub-second auto-containment, and agentic response playbooks."
            link="/products/acis"
            linkText="Explore ACIS"
          />
        </section>

        {/* SECTION 3 - LIGHT MODE (NIF) */}
        <section className="product-scroll-section light-section section-nif">
          <ScrollingCard 
            title="NetCradus Identity Factor (NIF)"
            desc="AI-powered multi-factor authentication, secure credential identity management, and unified zero-trust user access control."
            link="/products"
            linkText="Explore NIF"
          />
        </section>

        {/* SECTION 4 - DARK MODE (CYRIX XDR) */}
        <section className="product-scroll-section dark-section section-cyrix">
          <ScrollingCard 
            title="CYRIX XDR Unified Detection"
            desc="Extended cross-layer threat detection and response across endpoint, network, identity, and cloud assets."
            link="/platform/endpoint-detection"
            linkText="Explore CYRIX"
          />
        </section>

        {/* SECTION 5 - LIGHT MODE (Managed SOC & SIEM) */}
        <section className="product-scroll-section light-section section-soc">
          <ScrollingCard 
            title="24/7 Managed SOC & SIEM"
            desc="Continuous co-managed SIEM, proactive threat hunting, compliance reporting, and security operations."
            link="/managed-soc"
            linkText="Explore Managed SOC"
          />
        </section>

      </div>

    </div>
  );
}
