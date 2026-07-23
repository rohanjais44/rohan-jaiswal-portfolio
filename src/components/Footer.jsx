import { profile } from '../data.js';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer-built">Built with React · Deployed on Vercel</span>
      </div>
    </footer>
  );
}
