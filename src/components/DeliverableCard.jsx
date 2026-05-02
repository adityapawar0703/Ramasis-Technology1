import React from 'react';
import { motion } from 'framer-motion';

export default function DeliverableCard({ item, index = 0, span = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`tracing-card surface border border-subtle p-7 group hover:border-signal/60 transition relative overflow-hidden ${span}`}
      data-testid={`deliverable-card-${index}`}
    >
      <div className="absolute top-0 right-0 px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 bg-signal/10 text-signal">
        {item.tag}
      </div>
      <h3 className="heading-md mb-3 mt-4 group-hover:text-signal transition-colors">
        {item.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{item.body}</p>
    </motion.div>
  );
}
