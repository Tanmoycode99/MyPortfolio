import { PROFILE } from '../data';

const css = `
#contact .contact-line {
  display: inline-block;
  line-height: 1.8;
}

@media (min-width: 700px) {
  #contact .contact-line { white-space: nowrap; }
}

#contact a.contact-hl {
  font-weight: 600;
  text-decoration: none;
  background: none;
  -webkit-background-clip: border-box;
  background-clip: border-box;
  color: #a78bfa;
  -webkit-text-fill-color: currentColor; /* overrides any leftover transparent fill */
  animation: contactColor 4s linear infinite;
}

#contact a.contact-hl:hover {
  animation-duration: 1.5s;
  text-shadow: 0 0 12px rgba(124, 92, 255, 0.6);
}

@keyframes contactColor {
  0%   { color: #a78bfa; text-shadow: 0 0 4px  rgba(167, 139, 250, 0.3); }
  33%  { color: #22d3ee; text-shadow: 0 0 12px rgba(34, 211, 238, 0.6); }
  66%  { color: #ff5cae; text-shadow: 0 0 12px rgba(255, 92, 174, 0.6); }
  100% { color: #a78bfa; text-shadow: 0 0 4px  rgba(167, 139, 250, 0.3); }
}

@media (prefers-reduced-motion: reduce) {
  #contact a.contact-hl { animation: none; color: #a78bfa; }
}
`;

export default function Contact() {
  // Strip spaces/dashes so the tel: link works on all devices
  const telHref = `tel:${PROFILE.phone.replace(/[^\d+]/g, '')}`;

  return (
    <section id="contact">
      <style>{css}</style>
      <div className="wrap">
        <div className="cta card">
          <h2>
            Let’s build something <span className="grad">great</span>
          </h2>

          <p>
            Available for full-time roles and short projects.
            <br />
            <span className="contact-line">
              Email{' '}
              <a className="contact-hl" href={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
              </a>{' '}
              or call me directly on{' '}
              <a className="contact-hl" href={telHref}>
                {PROFILE.phone}
              </a>
            </span>
          </p>

          <div className="row">
            <a className="btn" href={PROFILE.github} rel="noopener">GitHub</a>
            <a className="btn" href={PROFILE.linkedin} rel="noopener">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}