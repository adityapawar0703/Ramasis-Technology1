import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import useScrollDirection from '../hooks/useScrollDirection';
import { navLinks } from '../data/content';

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { direction, scrolled } = useScrollDirection();
  const [open, setOpen] = React.useState(false);

  const hidden = direction === 'down' && scrolled && !open;

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -90 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
      data-testid="site-navbar"
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-testid="navbar-logo"
          onClick={() => setOpen(false)}
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center border border-signal/40">
            <span className="absolute inset-0 bg-signal/10 group-hover:bg-signal/20 transition" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-signal" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L21 6v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z" />
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="font-display font-black text-lg tracking-tight">
            RAMASIS<span className="text-signal">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              data-testid={`navlink-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-2 font-mono text-xs uppercase tracking-widest2 transition-colors ${
                  isActive
                    ? 'text-signal'
                    : 'text-zinc-700 dark:text-zinc-300 hover:text-signal'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            data-testid="theme-toggle-btn"
            className="h-10 w-10 flex items-center justify-center border border-subtle hover:border-signal hover:text-signal transition"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex btn-primary !px-5 !py-2.5 !text-xs"
            data-testid="navbar-cta"
          >
            Get Started
          </Link>
          <button
            className="lg:hidden h-10 w-10 flex items-center justify-center border border-subtle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-subtle bg-paperSurface dark:bg-surface"
            data-testid="mobile-menu"
          >
            <div className="container-x py-6 flex flex-col gap-1">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-navlink-${l.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `py-3 font-display font-bold text-2xl ${
                      isActive ? 'text-signal' : ''
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 justify-center"
                data-testid="mobile-cta"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
