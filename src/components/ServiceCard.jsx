import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="tracing-card"
    >
      <Link
        to={`/services/${service.slug}`}
        data-testid={`service-card-${service.slug}`}
        className="group block h-full surface border border-subtle p-7 hover:border-signal/60 transition-all duration-300 relative overflow-hidden"
      >
        <div
          className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500"
          style={{ background: service.accent }}
        />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-8">
            <div
              className="h-12 w-12 flex items-center justify-center border border-subtle group-hover:border-signal transition"
              style={{ color: service.accent }}
            >
              <Icon size={22} />
            </div>
            <span className="font-mono text-xs text-muted">
              0{index + 1}
            </span>
          </div>
          <h3 className="heading-md mb-3 group-hover:text-signal transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-8">{service.short}</p>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest2 text-signal opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            Explore <ArrowUpRight size={14} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
