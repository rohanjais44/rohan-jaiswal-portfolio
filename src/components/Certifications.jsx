import { certifications, activities } from '../data.js';
import Reveal from './Reveal.jsx';
import './certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="section certs">
      <div className="container">
        <Reveal>
          <div className="eyebrow">04 · Certifications &amp; Beyond Code</div>
          <h2 className="section-title">Certifications</h2>
        </Reveal>

        <div className="certs-grid">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="cert-card">
              <div className="cert-card-top">
                <h3>{c.title}</h3>
                <span className="cert-date">{c.date}</span>
              </div>
              <span className="cert-issuer">{c.issuer}</span>
              <p className="cert-desc">{c.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="beyond-heading">
          <h3>Beyond code</h3>
        </Reveal>
        <div className="activity-grid">
          {activities.map((a, i) => (
            <Reveal key={a.title} delay={i * 60} className="activity-card">
              <span className="activity-role">{a.role}</span>
              <h4>{a.title}</h4>
              <p>{a.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
