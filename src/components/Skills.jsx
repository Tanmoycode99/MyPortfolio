import { STACK } from '../data';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2>Skills and <span className="grad">tech stack</span></h2>
        <p className="lead">
          Android is home base. The rest of the stack lets me take a feature from idea to production.
        </p>
        <div className="bento">
          {STACK.map(s => (
            <div key={s.t} className={`b card ${s.span}`}>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div className="chips">
                {s.tags.map(t => <span className="chip" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}