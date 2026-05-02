import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function StatCounter({ value, suffix = '', decimals = 0, label, testId }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const start = performance.now();
    const duration = 1800;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(value * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  const display = decimals > 0 ? n.toFixed(decimals) : Math.floor(n).toLocaleString();

  return (
    <div ref={ref} className="text-left" data-testid={testId}>
      <div className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-none">
        <span className="text-signal">{display}</span>
        <span className="text-signal/70">{suffix}</span>
      </div>
      <p className="overline mt-3 text-zinc-500 dark:text-zinc-400">{label}</p>
    </div>
  );
}
