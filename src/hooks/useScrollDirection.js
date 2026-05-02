import { useEffect, useState } from 'react';

// Returns 'up' | 'down' based on scroll direction. Used for sticky navbar hide/show.
export default function useScrollDirection() {
  const [direction, setDirection] = useState('up');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 20);
        if (Math.abs(y - lastY) > 6) {
          setDirection(y > lastY ? 'down' : 'up');
          lastY = y;
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { direction, scrolled };
}
