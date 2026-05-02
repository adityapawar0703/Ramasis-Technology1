import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Globe2, Award, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';

const values = [
  {
    Icon: Target,
    title: 'Outcomes Over Optics',
    body: 'We measure success by reduction in MTTR, blast radius, and audit findings — not by dashboards or buzzwords.',
  },
  {
    Icon: Users,
    title: 'Elite Operators',
    body: 'Our analysts hold OSCP, GIAC, CISSP and have shipped at top-tier banks, hyperscalers and intelligence agencies.',
  },
  {
    Icon: Globe2,
    title: 'Global Footprint',
    body: 'Three SOCs across Bengaluru, Singapore and London — follow-the-sun coverage with zero handoff drops.',
  },
  {
    Icon: Award,
    title: 'Vendor Independent',
    body: "We're certified across every major stack — but we're loyal only to your security outcomes.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden" data-testid="about-hero">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-x relative">
          <Reveal>
            <p className="overline mb-6">/ About Ramasis</p>
            <h1 className="heading-xl max-w-4xl mb-8">
              Built by operators<br />
              who've been on <span className="text-signal">both sides</span><br />
              of the breach.
            </h1>
            <p className="text-lg text-muted max-w-3xl">
              Ramasis Technology was founded in 2018 by a team of incident responders, red teamers,
              and ML engineers who lived through too many 3am pages. We built the company we wished
              had existed when our adversaries had the upper hand.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-y border-subtle bg-paperElevated dark:bg-surface">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-10">
          <StatCounter value={2018} label="Founded" testId="about-stat-founded" />
          <StatCounter value={250} suffix="+" label="Enterprise Customers" testId="about-stat-customers" />
          <StatCounter value={3} label="Global SOCs" testId="about-stat-socs" />
          <StatCounter value={120} suffix="+" label="Security Engineers" testId="about-stat-engineers" />
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <p className="overline mb-4">/ Mission</p>
            <h2 className="heading-lg mb-6">
              Make <span className="text-signal">elite-grade</span> defence accessible to every modern business.
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Cybersecurity has historically been an arms race only the largest companies could afford.
              We exist to flip that — combining AI leverage with veteran human expertise to deliver
              top-1% defensive capability at a price point that scales.
            </p>
            <p className="text-muted leading-relaxed">
              From a fast-growing startup to a Fortune 500 bank, the mission is the same:
              keep adversaries out, keep operations running, and keep the board confident.
            </p>
          </Reveal>
          <div className="relative aspect-[4/3] overflow-hidden border border-subtle">
            <img
              src="https://images.unsplash.com/photo-1737505599162-d9932323a889?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400"
              alt="Cybersecurity operations"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="overline text-signal mb-2">/ HQ — Bengaluru</p>
              <p className="font-display font-bold text-2xl">24/7 Security Operations Center</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-subtle bg-paperElevated dark:bg-surface">
        <div className="container-x">
          <Reveal className="max-w-3xl mb-16">
            <p className="overline mb-4">/ Values</p>
            <h2 className="heading-xl">
              How we <span className="text-signal">operate</span>.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map(({ Icon, title, body }, i) => (
              <div key={i} className="surface border border-subtle p-8 hover:border-signal/60 transition" data-testid={`value-card-${i}`}>
                <Icon className="text-signal mb-6" size={28} />
                <h3 className="heading-md mb-3">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y" data-testid="about-cta">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="overline mb-6">/ Join us</p>
            <h2 className="heading-xl mb-8">
              We're always hiring <span className="text-signal">the best</span>.
            </h2>
            <p className="text-muted mb-10">
              If you've broken into Fortune 500s for a living, written ML detection at scale, or
              run live incident response — let's talk.
            </p>
            <Link to="/contact" className="btn-primary">
              Get In Touch <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
