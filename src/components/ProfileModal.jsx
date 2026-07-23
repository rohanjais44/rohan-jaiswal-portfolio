import './profilemodal.css';

export default function ProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="profile-modal-header">
          <span className="profile-modal-title">Since you have clicked my profile picture</span>
          <button className="profile-modal-close" onClick={onClose}>
            CLOSE ✕
          </button>
        </div>

        <div className="profile-modal-body">
          <div className="profile-quote-block">
            <p className="profile-quote-text">
              "What is software without art? It's just lines of instructions running in a void."
            </p>
            <span className="profile-quote-author">— Rohan Jaiswal</span>
          </div>

          <div className="profile-section">
            <h4 className="profile-section-title">Favorite Music</h4>
            <p className="profile-section-items">
              Cartoon — On &amp; On (feat. Daniel Levi)<br />
              Janji — Heroes Tonight (feat. Johnning)<br />
              Julius Dreisig &amp; Zeus x Crona — Invisible
            </p>
          </div>

          <div className="profile-section">
            <h4 className="profile-section-title">Actors I Admire</h4>
            <p className="profile-section-items">Cillian Murphy · Irrfan Khan · Manoj Bajpayee</p>
          </div>

          <div className="profile-section">
            <h4 className="profile-section-title">Engineering Philosophy</h4>
            <p className="profile-section-items">
              Build products that solve real problems for real users, with auditability, clean API contracts, and high-quality software craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
