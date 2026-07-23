import { useState } from 'react';
import { profile } from '../data.js';
import Reveal from './Reveal.jsx';
import './contact.css';

const socials = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phoneRaw}` },
  { label: 'GitHub', value: `github.com/${profile.githubHandle}`, href: profile.github },
  { label: 'LinkedIn', value: 'linkedin.com/in/rohan-jaiswal00', href: profile.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <div className="eyebrow">05 · Contact</div>
          <h2 className="section-title">Let's talk</h2>
          <p className="section-sub">
            Open to full-stack engineering, software roles and interesting collaborations. The fastest way to reach me is email or a direct message on LinkedIn.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-list">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="contact-row" target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span className="contact-label">{s.label}</span>
                <span className="contact-value">{s.value}</span>
                <span className="contact-arrow">↗</span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={100}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                <span>Message</span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What would you like to talk about?"
                />
              </label>
              <button type="submit" className="btn btn-primary contact-submit">
                Send via Email ↗
              </button>
              <p className="contact-form-note">
                Opens your email app with this pre-filled — no data is stored anywhere.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
