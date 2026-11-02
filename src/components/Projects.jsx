import { useEffect, useState } from 'react';
import { PROJECTS } from '../data';

const CATS = ['All', 'React Native', 'Kotlin'];

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M3 2.5v19l10-9.5L3 2.5zm11.2 8.3L16.9 8 5.5 1.7l8.7 9.1zm0 2.4l-8.7 9.1L16.9 16l-2.7-2.8zM18.4 9.1l-2.2 2.1 2.2 2.1 2.6-1.5c.8-.5.8-1.2 0-1.7l-2.6-1z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M16.37 1.43c0 1.14-.46 2.22-1.2 3-.8.85-2.1 1.5-3.17 1.42-.13-1.1.42-2.25 1.15-3 .8-.84 2.2-1.46 3.22-1.42zM20.5 17.3c-.55 1.27-.82 1.84-1.52 2.96-.98 1.57-2.37 3.53-4.09 3.54-1.53.02-1.93-1-4.01-.99-2.08.01-2.52 1.01-4.05.99-1.72-.02-3.03-1.78-4.01-3.35C-.04 16.1-.33 11 1.37 8.4c1.2-1.84 3.1-2.92 4.88-2.92 1.81 0 2.95 1 4.45 1 1.45 0 2.34-1 4.43-1 1.58 0 3.26.86 4.46 2.35-3.92 2.15-3.28 7.75.91 9.47z" />
  </svg>
);

const iconCache = new Map(); // avoids refetching when filters re-render cards

const appleId = url => url?.match(/id(\d+)/)?.[1];

async function fetchIcon({ play, apple }) {
  // 1) Play Store icon via your serverless function
  if (play) {
    try {
      const r = await fetch(`/api/play-icon?id=${encodeURIComponent(play)}`);
      if (r.ok) return (await r.json()).icon;
    } catch {}
  }
  // 2) App Store icon via Apple's public lookup API
  const id = appleId(apple);
  if (id) {
    try {
      const r = await fetch(`https://itunes.apple.com/lookup?id=${id}`);
      const d = await r.json();
      return d.results?.[0]?.artworkUrl512 || d.results?.[0]?.artworkUrl100;
    } catch {}
  }
  return null;
}

function ProjectArt({ logo, play, apple, emoji }) {
  const key = play || apple;
  const [src, setSrc] = useState(logo || (key && iconCache.get(key)) || null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (logo || !key || iconCache.has(key)) return;
    let cancelled = false;
    fetchIcon({ play, apple }).then(icon => {
      if (cancelled) return;
      if (icon) { iconCache.set(key, icon); setSrc(icon); }
      else setFailed(true);
    });
    return () => { cancelled = true; };
  }, [logo, key, play, apple]);

  return (
    <div className="art" aria-hidden="true">
      {src && !failed ? (
        <img
          src={src}
          alt=""
          className="art-logo"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      ) : (
        <span>{emoji}</span>
      )}
    </div>
  );
}

export default function Projects() {
  const [f, setF] = useState('All');
  const list = PROJECTS.filter(p => f === 'All' || p.tags.includes(f));

  return (
    <section id="projects">
      <div className="wrap">
        <h2>Deployed <span className="grad">apps</span></h2>
        <p className="lead">Apps I built with React Native and Kotlin, live on the Play Store and App Store.</p>

        <div className="filters">
          {CATS.map(c => (
            <button key={c} aria-pressed={f === c} onClick={() => setF(c)}>{c}</button>
          ))}
        </div>

        <div className="projs">
          {list.map(p => (
            <article key={p.t} className="pj card">
              <ProjectArt logo={p.logo} play={p.play} apple={p.apple} emoji={p.e} />
              <div className="bd">
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <div className="chips">
                  {p.tags.map(t => <span className="chip" key={t}>{t}</span>)}
                </div>
                <div className="stores">
                  {p.play && (
                    <a
                      className="store-btn"
                      href={`https://play.google.com/store/apps/details?id=${p.play}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PlayIcon /><span>Google Play</span>
                    </a>
                  )}
                  {p.apple && (
                    <a
                      className="store-btn"
                      href={p.apple}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AppleIcon /><span>App Store</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}