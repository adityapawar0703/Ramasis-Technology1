import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Wrap content in <Reveal> to fade up on scroll. Uses GSAP without ScrollTrigger
 * to keep the bundle lean — IntersectionObserver triggers the GSAP tween.
 */
export default function Reveal({ children, delay = 0, y = 40, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.set(el, { opacity: 0, y });
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            delay,
          });
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
