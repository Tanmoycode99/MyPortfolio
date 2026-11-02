import { useState } from 'react';
import { PROFILE } from '../data';
import PhoneDemo from './PhoneDemo';
// Put avatar.png in src/assets/ (path is relative to this file)
import avatar from '../Images/avatar.png';

/* ------------------------------------------------------------------
   All styles for the hero live here, so this one file is all you need.
   ------------------------------------------------------------------ */
const HERO_CSS = `
/* layout: wider content, narrower phone, real gap between them */
.hero .g {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.8fr);
  column-gap: clamp(40px, 7vw, 120px);
  align-items: center;
}
.hero-content { max-width: 680px; }
.hero-phone { display: flex; justify-content: center; }

.hero h1 { font-size: clamp(2.4rem, 5vw, 4rem); }
.hero .sub { font-size: 1.15rem; max-width: 56ch; margin-bottom: 16px; }

/* avatar sits above the name / description */
.hero .intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 28px;
}

.spin-avatar {
  position: relative;
  width: 150px;
  height: 150px;
  flex: none;
  perspective: 600px;
}

/* spinning gradient ring */
.spin-avatar::before {
  content: "";
  position: absolute;
  inset: -9px;
  border-radius: 50%;
  background: conic-gradient(#7c5cff, #22d3ee, #34d399, #7c5cff);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px));
          mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px));
  animation: av-spin 4s linear infinite;
}

.spin-avatar .av-img,
.spin-avatar .av-ini {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
}
.spin-avatar .av-img {
  display: block;
  object-fit: cover;
  object-position: 50% 10%;   /* keeps the face in view */
}
.spin-avatar .av-ini {
  display: grid;
  place-items: center;
  font-size: 54px;
  font-weight: 700;
}

/* optional 3D coin-style turn: add the "flip" class to .spin-avatar */
.spin-avatar.flip .av-img,
.spin-avatar.flip .av-ini { animation: av-flip 6s linear infinite; }

@keyframes av-spin { to { transform: rotate(360deg); } }
@keyframes av-flip { to { transform: rotateY(360deg); } }

@media (prefers-reduced-motion: reduce) {
  .spin-avatar::before,
  .spin-avatar.flip .av-img,
  .spin-avatar.flip .av-ini { animation: none; }
}

/* stack on tablets and phones */
@media (max-width: 900px) {
  .hero .g { grid-template-columns: 1fr; row-gap: 56px; }
  .hero-content { max-width: none; }
}
`;

function SpinAvatar({ flip = false }) {
  const src = avatar || PROFILE.photo;
  const [failed, setFailed] = useState(!src);
  const initials = PROFILE.name.split(' ').map(w => w[0]).join('').slice(0, 2);
  return (
    <div className={`spin-avatar${flip ? ' flip' : ''}`}>
      {failed ? (
        <span className="av-ini" aria-hidden="true">{initials}</span>
      ) : (
        <img
          className="av-img"
          src={src}
          alt={`Photo of ${PROFILE.name}`}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <style>{HERO_CSS}</style>

      <div className="wrap g">
        <div className="hero-content">
          <div className="intro">
            {/* Use <SpinAvatar flip /> for the 3D coin-style turn */}
            <SpinAvatar />
            <span className="pill card"><i />Open to roles and freelance work</span>
          </div>

          <h1>I build <span className="grad">Android and Web apps</span> that think, scale and stay secure.</h1>

          <p className="sub">
            I’m {PROFILE.name.split(' ')[0]}, a mobile engineer using Kotlin and Jetpack Compose, with React Native, iOS, GenAI and AWS in my toolkit.
          </p>

          <p className="sub">
            I design and ship production Android apps end to end, from architecture and
            Compose UI to secure APIs, on-device AI and AWS-backed services.
          </p>

          <div className="row">
            <a className="btn p" href="#projects">See my work</a>
            <a className="btn" href="#contact">Contact me</a>
          </div>

          <div className="stats">
            <div><b>2+</b><span>years in mobile</span></div>
            <div><b>5+</b><span>apps shipped</span></div>
            <div><b>200000+</b><span>users reached</span></div>
          </div>
        </div>

        <div className="hero-phone">
          <PhoneDemo />
        </div>
      </div>
    </section>
  );
}
