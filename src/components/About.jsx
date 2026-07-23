import { education, languages, profile } from '../data.js';
import Reveal from './Reveal.jsx';
import './about.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <div className="eyebrow">01 · About</div>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-bio-col">
            <h2 className="section-title">A bit about how I work</h2>
            <p className="about-bio">{profile.bio}</p>

            <div className="lang-row">
              {languages.map((l) => (
                <div key={l.name} className="lang-pill">
                  <span className="lang-name">{l.name}</span>
                  <span className="lang-level">{l.level}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="about-edu-col">
            <h3 className="edu-heading">Education</h3>
            <ul className="edu-list">
              {education.map((e, i) => (
                <li key={i} className="edu-item">
                  <span className="edu-period">{e.period}</span>
                  <span className="edu-school">{e.school}</span>
                  <span className="edu-degree">{e.degree}</span>
                  {e.meta && <span className="edu-cgpa">{e.meta}</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
