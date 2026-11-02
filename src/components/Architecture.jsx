import { Fragment, useState } from 'react';
import { ARCH } from '../data';

export default function Architecture({
  id = 'architecture',
  data = ARCH,
  variant = 'arch',
  heading = <>How I <span className="grad">structure</span> apps</>,
  lead = 'I choose the pattern that fits the app’s size and team.',
}) {
  const [k, setK] = useState(Object.keys(data)[0]);
  const a = data[k] ?? data[Object.keys(data)[0]];

  return (
    <section id={id} className={`sec-${variant}`}>
      <div className="wrap">
        <h2>{heading}</h2>
        <p className="lead">{lead}</p>

        <div className={`seg card seg--${variant}`} role="group" aria-label={id}>
          {Object.keys(data).map(n => (
            <button key={n} aria-pressed={k === n} onClick={() => setK(n)}>{n}</button>
          ))}
        </div>

        <div className="arch">
          <div className="diag card" key={k}>
            {a.nodes.map(([n, s], i) => (
              <Fragment key={n}>
                {i > 0 && <div className="arrow">↓</div>}
                <div className="node" style={{ animationDelay: `${i * 70}ms` }}>
                  {n}<small>{s}</small>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="why card">
            <h3>Why {k}</h3>
            <ul>{a.pts.map(p => <li key={p}>{p}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}