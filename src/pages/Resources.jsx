import React, { useState, useMemo } from 'react';
import BlogCard from '../components/BlogCard';
import Reveal from '../components/Reveal';
import { resources } from '../data/content';

export default function Resources() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(resources.map((r) => r.category)))],
    []
  );
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? resources : resources.filter((r) => r.category === active);

  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden" data-testid="resources-hero">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-x relative">
          <Reveal>
            <p className="overline mb-6">/ Resources</p>
            <h1 className="heading-xl max-w-4xl mb-8">
              Articles, whitepapers,<br />
              <span className="text-signal">templates &amp; tools.</span>
            </h1>
            <p className="text-lg text-muted max-w-3xl">
              Everything we publish is built from real engagements — distilled into practical
              guidance you can ship this quarter.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-subtle pb-6" data-testid="resource-filters">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                data-testid={`resource-filter-${c.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-widest2 border transition ${
                  active === c
                    ? 'border-signal text-signal'
                    : 'border-subtle text-muted hover:border-signal hover:text-signal'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
