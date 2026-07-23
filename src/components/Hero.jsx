import { useRef, useState } from 'react';
import { profile } from '../data.js';
import FlipCard from './FlipCard.jsx';
import ProfileModal from './ProfileModal.jsx';
import VibeModal from './VibeModal.jsx';
import './hero.css';

export default function Hero() {
  const [isVibeOpen, setIsVibeOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const bannerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!bannerRef.current) return;
    const rect = bannerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const ry = ((x - centerX) / centerX) * 8;
    const rx = -((y - centerY) / centerY) * 8;

    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">

        <div
          ref={bannerRef}
          className="hero-banner"
          onClick={() => setIsVibeOpen(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          }}
          title="Click to change vibes"
        >
          <div className="hero-banner-content">
            <h1 className="hero-banner-title">ROHAN JAISWAL</h1>
            <p className="hero-banner-tagline">Building full-stack applications &amp; intelligent software systems</p>
          </div>
          <div className="hero-banner-action">
            <svg className="banner-arrow" viewBox="0 0 120 50" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10,15 C40,5 90,15 105,35" strokeDasharray="3,3" />
              <path d="M96,33 L105,35 L104,26" />
            </svg>
            <button className="vibe-btn" onClick={(e) => { e.stopPropagation(); setIsVibeOpen(true); }}>
              Change the vibes ↻
            </button>
          </div>
        </div>

        <div className="hero-profile-box">
          <FlipCard onProfileClick={() => setIsProfileOpen(true)} />
          <div className="hero-profile-info">
            <h2 className="hero-name">{profile.name}</h2>
            <p className="hero-role-title">{profile.role}</p>
          </div>
        </div>

        <div className="hero-info-grid">
          {profile.projectRoles.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="info-box info-box-clickable"
            >
              <span className="info-icon">{item.icon}</span>
              <span className="info-text">{item.label} <strong className="info-org">{item.org}</strong></span>
            </div>
          ))}

          <div className="info-box">
            <span className="info-icon">📍</span>
            <span className="info-text">{profile.location}</span>
          </div>

          <a href={`tel:${profile.phoneRaw}`} className="info-box info-box-clickable">
            <span className="info-icon">📞</span>
            <span className="info-text">{profile.phone}</span>
          </a>

          <a href={`mailto:${profile.email}`} className="info-box info-box-clickable">
            <span className="info-icon">✉</span>
            <span className="info-text">{profile.email}</span>
          </a>

          <a href={profile.github} target="_blank" rel="noreferrer" className="info-box info-box-clickable">
            <span className="info-icon">⚡</span>
            <span className="info-text">github.com/{profile.githubHandle}</span>
          </a>
        </div>

        <VibeModal isOpen={isVibeOpen} onClose={() => setIsVibeOpen(false)} />
        <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      </div>
    </section>
  );
}
