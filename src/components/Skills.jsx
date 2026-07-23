import { skillGroups } from '../data.js';
import Reveal from './Reveal.jsx';
import './skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <div className="eyebrow">02 · Skills</div>
          <h2 className="section-title">Toolbox</h2>
          <p className="section-sub">
            What I reach for day to day — from shipping web applications to machine learning models.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 80} className="skill-card">
              <span className="skill-card-label">{group.label}</span>
              <div className="skill-chip-row">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
