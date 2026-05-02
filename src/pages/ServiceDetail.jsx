import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { getServiceBySlug, services } from '../data/services';
import Reveal from '../components/Reveal';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const idx = services.findIndex((s) => s.slug === slug);
  const next = services[(idx + 1) % services.length];

  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden" data-testid="service-detail-hero">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full blur-[120px] opacity-30"
          style={{ background: service.accent }}
        />
        <div className="container-x relative">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest2 text-muted hover:text-signal transition mb-10"
            data-testid="back-to-services"
          >
            <ArrowLeft size={14} /> All Services
          </Link>
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="h-14 w-14 flex items-center justify-center border border-subtle"
                    style={{ color: service.accent }}
                  >
                    <Icon size={26} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest2 text-muted">
                    Service · 0{idx + 1}
                  </span>
                </div>
                <h1 className="heading-xl mb-6">{service.title}</h1>
                <p className="text-lg text-muted">{service.summary}</p>
              </div>
              <Link to="/contact" className="btn-primary" data-testid="service-detail-cta">
                Discuss Engagement <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-y border-subtle bg-paperElevated dark:bg-surface">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="overline mb-4">/ What we deliver</p>
              <h2 className="heading-lg mb-8">
                A complete program — not just a tool.
              </h2>
              <ul className="space-y-4">
                {service.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 surface border border-subtle p-5 hover:border-signal/60 transition"
                    data-testid={`service-bullet-${i}`}
                  >
                    <span
                      className="mt-0.5 h-6 w-6 flex items-center justify-center flex-shrink-0"
                      style={{ background: `${service.accent}20`, color: service.accent }}
                    >
                      <Check size={14} />
                    </span>
                    <span className="text-base leading-relaxed">{b}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 surface border border-subtle p-8">
                <p className="overline mb-4">/ Editable section</p>
                <h3 className="heading-md mb-4">Detailed methodology</h3>
                <p className="text-muted leading-relaxed">
                  This section is intentionally a placeholder — replace this paragraph in
                  <code className="mx-1 font-mono text-signal text-sm">src/data/services.js</code>
                  (or extend each service object with a <code className="mx-1 font-mono text-signal text-sm">details</code> field)
                  with the in-depth content you want users to read here. Add diagrams,
                  workflow descriptions, KPIs, certifications and case study links specific
                  to this service.
                </p>
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="surface border border-subtle p-8 sticky top-28">
                <p className="overline mb-4">/ Engagement at a glance</p>
                <dl className="space-y-5 text-sm">
                  {[
                    ['Typical Duration', '4–12 weeks'],
                    ['Delivery Model', 'Hybrid · On-site + Remote'],
                    ['Team Size', '3–8 specialists'],
                    ['Reporting Cadence', 'Weekly + Final'],
                    ['Frameworks Aligned', 'NIST CSF · ISO 27001 · MITRE ATT&CK'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-subtle pb-3 last:border-0">
                      <dt className="text-muted">{k}</dt>
                      <dd className="font-bold text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
                <Link to="/contact" className="btn-primary w-full justify-center mt-8">
                  Request Proposal <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <Link
            to={`/services/${next.slug}`}
            data-testid="next-service"
            className="group block surface border border-subtle p-10 lg:p-16 hover:border-signal/60 transition"
          >
            <p className="overline mb-4">/ Next service</p>
            <div className="flex items-center justify-between gap-6">
              <h3 className="heading-xl group-hover:text-signal transition-colors">
                {next.title}
              </h3>
              <ArrowRight size={32} className="text-signal flex-shrink-0 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
