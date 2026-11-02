import { useState, useEffect } from 'react';
import { PROFILE } from '../data';
import Avatar from './Avatar';

const ITEMS = [
  ['Skills', 'skills'],
  ['Architecture', 'architecture'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
];

const css = `
/* hamburger: hidden on desktop */
.nav-burger {
  display: none;
  background: none;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 8px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.nav-burger span {
  display: block;
  width: 18px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
}

/* left sidebar + overlay: hidden on desktop */
.nav-overlay,
.nav-drawer { display: none; }

@media (max-width: 760px) {
  .nav .links { display: none; }          /* hide the top links */
  .nav .in { justify-content: space-between; }
  .nav-burger { display: flex; }

  .nav-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.55);
    opacity: 0;
    pointer-events: none;
    transition: opacity .25s ease;
    z-index: 998;
  }
  .nav-overlay.open { opacity: 1; pointer-events: auto; }

  .nav-drawer {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 260px;
    max-width: 80vw;
    padding: 20px 16px;
    background: #0d0d1a;
    border-right: 1px solid rgba(255,255,255,0.1);
    transform: translateX(-100%);
    transition: transform .28s ease;
    z-index: 999;
    overflow-y: auto;
  }
  .nav-drawer.open { transform: translateX(0); }

  .nav-drawer-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .nav-close {
    background: none;
    border: none;
    color: #fff;
    font-size: 28px;
    line-height: 1;
    cursor: pointer;
  }
  .nav-drawer a.nav-item {
    color: #fff;
    text-decoration: none;
    padding: 12px 14px;
    border-radius: 10px;
    font-weight: 500;
  }
  .nav-drawer a.nav-item:hover { background: rgba(124,92,255,0.18); }
}
`;

export default function Nav() {
  const [open, setOpen] = useState(false);

  // close on Escape, lock page scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <style>{css}</style>

      <header className="nav">
        <div className="in card">
          <a className="logo" href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar size={32} />{PROFILE.name}
          </a>

          <nav className="links" aria-label="Primary">
            {ITEMS.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>

          <button
            className="nav-burger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* kept outside <header> so position:fixed isn't affected by the header's blur/transform */}
      <div className={`nav-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />

      <aside className={`nav-drawer ${open ? 'open' : ''}`} aria-label="Mobile menu" aria-hidden={!open}>
        <div className="nav-drawer-head">
          <a className="logo" href="#top" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar size={32} />{PROFILE.name}
          </a>
          <button className="nav-close" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
        </div>

        {ITEMS.map(([label, id]) => (
          <a key={id} className="nav-item" href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </aside>
    </>
  );
}