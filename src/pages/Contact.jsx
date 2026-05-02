import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';

export default function Contact() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden" data-testid="contact-hero">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-signal/20 blur-[120px]" />
        <div className="container-x relative">
          <Reveal>
            <p className="overline mb-6"> Contact</p>
            <h1 className="heading-xl max-w-4xl mb-8">
              Talk to a real <span className="text-signal">security architect</span>.
            </h1>
            <p className="text-lg text-muted max-w-3xl">
              No bots. No SDR funnel. Your message routes directly to one of our principals,
              and we get back within 24 business hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="surface border border-subtle p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-5">
            {[
              {
                Icon: MapPin,
                title: 'Headquarters',
                lines: ['Ramasis Technology', '12th Floor, Prestige Tower', 'Pune 462041, India'],
              },
              {
                Icon: Mail,
                title: 'Email',
                lines: ['hello@ramasis.tech', 'ramasis@gmail.com (incidents)'],
              },
              {
                Icon: Phone,
                title: 'Phone',
                lines: ['+91 12345 67890 (Sales)', '+91 12345 67891 (24/7 SOC)'],
              },
            ].map(({ Icon, title, lines }, i) => (
              <div key={i} className="surface border border-subtle p-7 hover:border-signal/60 transition" data-testid={`contact-info-${i}`}>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 flex items-center justify-center border border-signal/40 text-signal flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="overline mb-2">{title}</p>
                    {lines.map((l) => (
                      <p key={l} className="text-sm leading-relaxed">{l}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="surface border border-signal/40 p-7">
              <p className="overline mb-3 text-signal"> Active Incident?</p>
              <p className="text-sm text-muted leading-relaxed mb-4">
                If you're experiencing an active security incident, call our 24/7 SOC hotline
                immediately or email <span className="text-signal">soc@ramasis.tech</span>.
              </p>
              <a href="tel:+911234567891" className="btn-primary w-full justify-center">
                Call SOC Hotline
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
