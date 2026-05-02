import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Activity, Zap } from 'lucide-react';
import GlobeCanvas from '../components/GlobeCanvas';
import ParticlesCanvas from '../components/ParticlesCanvas';
import ServiceCard from '../components/ServiceCard';
import StatCounter from '../components/StatCounter';
import DeliverableCard from '../components/DeliverableCard';
import CaseStudyCard from '../components/CaseStudyCard';
import BlogCard from '../components/BlogCard';
import Reveal from '../components/Reveal';
import { services } from '../data/services';
import { stats, deliverables, caseStudies, blogPosts } from '../data/content';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-ink dark:bg-ink"
        data-testid="hero-section"
      >
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1545987796-200677ee1011?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source
            // src="https://www.w3schools.com/html/mov_bbb.mp4"
            src="/videos/video1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
        <ParticlesCanvas className="absolute inset-0 w-full h-full opacity-50" />
        <GlobeCanvas className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

        <div className="container-x relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-signal/30 bg-ink/60 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest2 text-signal">
                SOC LIVE · 24/7 Active Defence
              </span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter leading-[0.9] text-white mb-8">
              Intelligent<br />
              Cybersecurity<br />
              for <span className="text-signal">Modern</span><br />
              Businesses.
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
              Ramasis Technology fuses elite analysts with AI-driven detection, zero-trust
              architecture, and 24/7 SOC operations — so your business runs at full speed,
              defended at machine scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary" data-testid="hero-cta-primary">
                Start Defending <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="btn-secondary !text-white !border-white/30 hover:!text-signal hover:!border-signal"
                data-testid="hero-cta-secondary"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Floating spec strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-8 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 max-w-7xl mx-auto"
          >
            <div className="glass border-y border-signal/20 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {[
                { Icon: ShieldCheck, label: 'ISO 27001 / SOC 2', value: 'Certified' },
                { Icon: Activity, label: 'Threats / Day', value: '4.5M+' },
                { Icon: Zap, label: 'Avg. MTTR', value: '12 min' },
                { Icon: ShieldCheck, label: 'Uptime', value: '99.99%' },
              ].map(({ Icon, label, value }, i) => (
                <div key={i} className="p-4 sm:p-5 flex items-center gap-3 text-white">
                  <Icon className="text-signal flex-shrink-0" size={18} />
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-widest2 text-white/50 truncate">
                      {label}
                    </p>
                    <p className="font-display font-bold text-base sm:text-lg truncate">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y" data-testid="home-services">
        <div className="container-x">
          <Reveal className="max-w-3xl mb-16">
            <p className="overline mb-4">/ Capabilities</p>
            <h2 className="heading-xl mb-6">
              Eight pillars of <span className="text-signal">modern defence.</span>
            </h2>
            <p className="text-muted text-lg">
              From AI-driven detection to compliance automation, every service is engineered
              to deliver measurable security outcomes.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-y border-y border-subtle bg-paperElevated dark:bg-surface">
        <div className="container-x">
          <Reveal className="mb-16">
            <p className="overline mb-4">/ Outcomes</p>
            <h2 className="heading-lg max-w-2xl">
              The numbers that matter to your <span className="text-signal">board</span>.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <StatCounter
                key={i}
                value={s.value}
                suffix={s.suffix}
                decimals={s.decimals}
                label={s.label}
                testId={`stat-${i}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="section-y" data-testid="home-deliverables">
        <div className="container-x">
          <Reveal className="max-w-3xl mb-16">
            <p className="overline mb-4">/ Deliverables</p>
            <h2 className="heading-xl mb-6">
              Tangible reports.<br />
              <span className="text-signal">Operational outcomes.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((d, i) => (
              <DeliverableCard key={i} item={d} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section-y border-y border-subtle bg-paperElevated dark:bg-surface" data-testid="home-case-studies">
        <div className="container-x">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="overline mb-4">/ Case Studies</p>
              <h2 className="heading-xl">
                Field-proven. <span className="text-signal">Battle-tested.</span>
              </h2>
            </div>
            <Link to="/resources" className="btn-secondary self-start sm:self-end">
              All Case Studies <ArrowRight size={14} />
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <CaseStudyCard key={i} item={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section-y" data-testid="home-blog">
        <div className="container-x">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="overline mb-4">/ Insights</p>
              <h2 className="heading-xl">
                From the <span className="text-signal">frontlines</span>.
              </h2>
            </div>
            <Link to="/resources" className="btn-secondary self-start sm:self-end">
              View All <ArrowRight size={14} />
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden bg-ink text-white" data-testid="home-cta-strip">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-signal/20 blur-3xl" />
        <div className="container-x section-y relative">
          <Reveal className="max-w-4xl">
            <p className="overline mb-6">/ Ready when you are</p>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter leading-none mb-8">
              Your adversaries don't sleep.<br />
              <span className="text-signal">Neither do we.</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mb-10">
              Schedule a 30-minute strategic briefing with our security architects. No sales pitch — a real assessment of where you stand.
            </p>
            <Link to="/contact" className="btn-primary" data-testid="cta-strip-button">
              Book a Briefing <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
