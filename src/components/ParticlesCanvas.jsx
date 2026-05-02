import React, { useEffect, useRef } from 'react';

/**
 * Matrix-rain particle background. Falling vertical streaks of digits.
 */
export default function ParticlesCanvas({ className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let w = 0;
    let h = 0;
    let columns = 0;
    let drops = [];
    const fontSize = 14;
    const chars = 'abcd'.split('');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.floor(w / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -h);
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(5,5,5,0.08)';
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const y = drops[i];
        const x = i * fontSize;
        // head — bright
        ctx.fillStyle = 'rgba(0,255,157,0.85)';
        ctx.fillText(text, x, y);
        // tail
        ctx.fillStyle = 'rgba(0,255,157,0.18)';
        ctx.fillText(text, x, y - fontSize);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        else drops[i] = y + fontSize;
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
