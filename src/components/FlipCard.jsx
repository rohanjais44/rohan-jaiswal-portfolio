import './flipcard.css';

export default function FlipCard({ onProfileClick }) {
  return (
    <div className="avatar-cell">
      <button
        className="avatar-btn"
        onClick={onProfileClick}
        aria-label="Click profile avatar to open secret modal"
        title="Click profile picture!"
      >
        <div className="avatar-wrapper">
          <img src="/images/profile.jpg?v=2" alt="Rohan Jaiswal" className="avatar-img" />

          <div className="avatar-hover-overlay">
            <span className="know-me-text">KNOW ME</span>
          </div>
          <div className="avatar-glow-ring" />
        </div>
      </button>
    </div>
  );
}
