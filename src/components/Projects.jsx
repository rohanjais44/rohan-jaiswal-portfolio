import { projects } from '../data.js';
import Reveal from './Reveal.jsx';
import './projects.css';

function LinkButton({ type, url, status }) {
  const labels = {
    live: { available: 'Live Site', placeholder: 'Live link — coming soon', none: 'Not deployed yet' },
    repo: {
      available: 'View Repo',
      private: 'Private Repo',
      placeholder: 'Repo — coming soon',
      none: 'Repo — coming soon',
    },
  };
  const label = labels[type][status];

  if (status === 'available') {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="btn btn-ghost proj-link">
        {label} ↗
      </a>
    );
  }

  if (status === 'private') {
    return (
      <span className="btn btn-disabled proj-link" title="Repository is private — available on request">
        🔒 {label}
      </span>
    );
  }

  return (
    <span className="btn btn-disabled proj-link" title="To be added">
      {label}
    </span>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <Reveal className={`project-card ${featured ? 'project-card-featured' : ''}`}>
      <div className="project-head">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <span className="project-period">{project.period}</span>
        </div>
        {featured && <span className="project-badge">Featured</span>}
      </div>

      <p className="project-tagline">{project.tagline}</p>
      <p className="project-desc">{project.description}</p>

      {project.highlights.length > 0 && (
        <ul className="project-highlights">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}

      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div className="project-links">
        <LinkButton type="live" url={project.links.live} status={project.linkStatus.live} />
        <LinkButton type="repo" url={project.links.repo} status={project.linkStatus.repo} />
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <div className="eyebrow">03 · Projects</div>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-sub">
            A selection of live web applications handling real users and payments, and full-stack software systems.
          </p>
        </Reveal>

        <div className="project-grid">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} featured />
          ))}
        </div>

        <Reveal className="more-projects-heading">
          <h3>More from coursework &amp; teams</h3>
        </Reveal>
        <div className="project-grid project-grid-compact">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
