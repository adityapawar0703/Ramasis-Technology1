import React, { useEffect, useRef } from 'react';

/**
 * Lightweight 3D-style rotating globe + connection network rendered on canvas.
 * No external 3D dependency — fast, dependency-free, beautiful.
 */
export default function GlobeCanvas({ className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let w = 0;
    let h = 0;
    let cx = 0;
    let cy = 0;
    let radius = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = w / 2;
      cy = h / 2;
      radius = Math.min(w, h) * 0.36;
    };

    // Generate points evenly on a sphere using the golden spiral
    const NUM = 220;
    const points = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < NUM; i++) {
      const y = 1 - (i / (NUM - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      points.push({
        x: Math.cos(theta) * r,
        y,
        z: Math.sin(theta) * r,
      });
    }

    const project = (p, rotY, rotX) => {
      // rotate around Y
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = p.x * cosY - p.z * sinY;
      const z1 = p.x * sinY + p.z * cosY;
      // rotate around X
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y1 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;
      const scale = 600 / (600 - z2 * radius);
      return {
        x: cx + x1 * radius * scale,
        y: cy + y1 * radius * scale,
        z: z2,
        scale,
      };
    };

    let t = 0;
    const draw = () => {
      t += 0.0025;
      ctx.clearRect(0, 0, w, h);

      // Outer halo
      const grd = ctx.createRadialGradient(cx, cy, radius * 0.5, cx, cy, radius * 1.6);
      grd.addColorStop(0, 'rgba(0,255,157,0.05)');
      grd.addColorStop(1, 'rgba(0,255,157,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // Project all points
      const proj = points.map((p) => project(p, t, Math.sin(t * 0.6) * 0.25));

      // Draw connections between near-by points (limit count for performance)
      ctx.lineWidth = 0.6;
      for (let i = 0; i < proj.length; i++) {
        const a = proj[i];
        if (a.z < -0.2) continue;
        for (let j = i + 1; j < proj.length; j++) {
          const b = proj[j];
          if (b.z < -0.2) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 5200) {
            const alpha = (1 - d2 / 5200) * 0.35 * Math.max(a.z, 0.2);
            ctx.strokeStyle = `rgba(0,255,157,${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const p of proj) {
        const a = (p.z + 1) / 2;
        const r = Math.max(0.6, p.scale * 1.4);
        ctx.fillStyle = `rgba(0,229,255,${(0.4 + a * 0.6).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
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
