import { useState, useEffect, useRef } from 'react';
import { QA, SUGGEST, MAP } from '../data';

export default function PhoneDemo() {
  const [msgs, setMsgs] = useState([{ r: 'a', t: 'Hi! Ask me how I build apps.', s: [] }]);
  const [val, setVal] = useState('');
  const [busy, setBusy] = useState(false);
  const box = useRef(null);

  useEffect(() => { if (box.current) box.current.scrollTop = box.current.scrollHeight; }, [msgs, busy]);

  function ask(q) {
    q = q.trim();
    if (!q || busy) return;
    const key = MAP[q] || q.toLowerCase();
    const hit = QA.find(x => x.k.some(w => key.includes(w))) ||
      { a: 'Try asking about architecture, security, RAG or cloud.', s: [] };
    setMsgs(m => [...m, { r: 'u', t: q }]);
    setVal('');
    setBusy(true);
    setTimeout(() => { setMsgs(m => [...m, { r: 'a', t: hit.a, s: hit.s }]); setBusy(false); }, 900);
  }

  return (
    <div className="phone-wrap">
      <div className="phone"><div className="screen">
        <div className="bar"><span>Ask Tanmoy</span><small>Hey GPT</small></div>
        <div className="msgs" ref={box} aria-live="polite">
          {msgs.map((m, i) => (
            <div key={i} className={`m ${m.r}`}>
              {m.t}
              {m.s?.length > 0 && <div>{m.s.map(s => <span className="src" key={s}>{s}</span>)}</div>}
            </div>
          ))}
          {busy && <div className="m a dots" aria-label="Typing"><span /><span /><span /></div>}
        </div>
        <div className="sugg">
          {SUGGEST.map(s => <button key={s} onClick={() => ask(s)}>{s}</button>)}
        </div>
        <div className="compose">
          <input value={val} placeholder="Ask a question" aria-label="Ask a question"
            onChange={e => setVal(e.target.value)} onKeyDown={e => e.key === 'Enter' && ask(val)} />
          <button onClick={() => ask(val)} aria-label="Send">➤</button>
        </div>
      </div></div>
    </div>
  );
}
