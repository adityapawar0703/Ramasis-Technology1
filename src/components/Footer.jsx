import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { services } from '../data/services';
import { navLinks } from '../data/content';

export default function Footer() {
  return (
    <footer className="relative border-t border-subtle bg-paperSurface dark:bg-surface" data-testid="site-footer">
      <div className="container-x py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="overline mb-4">Ramasis Technology</p>
          <h2 className="font-display font-black text-5xl sm:text-6xl tracking-tighter leading-none mb-6">
            Defend.<br />
            <span className="text-signal">Detect.</span><br />
            Outpace.
          </h2>
          <p className="text-muted max-w-md mb-8">
            Intelligent cybersecurity for modern businesses. We combine elite humans with
            machine-speed AI to keep your business running, no matter what.
          </p>
          <div className="flex items-center gap-3" data-testid="footer-socials">
            {[
              { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { Icon: Github, href: 'https://github.com', label: 'GitHub' },
              { Icon: Mail, href: 'mailto:hello@ramasis.tech', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                data-testid={`footer-social-${label.toLowerCase()}`}
                className="h-10 w-10 flex items-center justify-center border border-subtle hover:border-signal hover:text-signal transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="overline mb-4">Navigate</p>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  data-testid={`footer-nav-${l.label.toLowerCase()}`}
                  className="text-sm hover:text-signal transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="overline mb-4">Services</p>
          <ul className="space-y-3">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  data-testid={`footer-service-${s.slug}`}
                  className="text-sm hover:text-signal transition"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="overline mb-4">Reach Us</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 text-signal flex-shrink-0" />
              <span>Pune · Bengaluru · Bhopal </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-1 text-signal flex-shrink-0" />
              <a href="mailto:hello@ramasis.tech" className="hover:text-signal">
                hello@ramasis.tech
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-1 text-signal flex-shrink-0" />
              <a href="tel:+911234567890" className="hover:text-signal">
                +91 12345 67890
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-subtle">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest2 text-muted">
          <span>© {new Date().getFullYear()} Ramasis Technology. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal animate-pulse" /> SOC OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}
