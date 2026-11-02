import { JOBS } from '../data';

export default function Experience() {
  return (
    <section id="experience"><div className="wrap">
      <h2>Experience</h2>
      <p className="lead">Sample roles. Edit freely.</p>
      <ol className="tl">
        {JOBS.map(([d, t, p]) => (
          <li key={d} className="card"><time>{d}</time><div><h3>{t}</h3><p>{p}</p></div></li>
        ))}
      </ol>
    </div></section>
  );
}
