import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Reveal from '../components/Reveal';
import { services } from '../data/services';

export default function Services() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden" data-testid="services-hero">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-x relative">
          <Reveal>
            <p className="overline mb-6">/ Services</p>
            <h1 className="heading-xl max-w-4xl mb-8">
              Eight services.<br />
              One <span className="text-signal">unified defence</span>.
            </h1>
            <p className="text-lg text-muted max-w-3xl">
              Every Ramasis service is built to plug into the others — share threat intelligence,
              policy, and identity context — so the whole becomes greater than the sum.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
