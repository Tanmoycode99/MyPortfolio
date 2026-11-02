import { useState } from 'react';
import { PROFILE } from '../data';

export default function Avatar({ size }) {
  const [failed, setFailed] = useState(!PROFILE.photo);
  const initials = PROFILE.name.split(' ').map(w => w[0]).join('').slice(0, 2);
  return (
    <span className="av" style={{ width: size, height: size }}>
      {failed ? (
        <span className="ini" style={{ fontSize: Math.round(size * 0.36) }} aria-hidden="true">{initials}</span>
      ) : (
        <img src={PROFILE.photo} alt={`Photo of ${PROFILE.name}`} onError={() => setFailed(true)} />
      )}
    </span>
  );
}
