import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudyCard({ item, index = 0 }) {
  return (
    <motion.a
      href="#"
      onClick={(e) => e.preventDefault()}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      data-testid={`case-study-${index}`}
      className="group relative block surface border border-subtle overflow-hidden hover:border-signal/60 transition"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent dark:from-ink dark:via-ink/30" />
      </div>
      <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
        <span className="overline bg-ink/60 backdrop-blur px-3 py-1.5 text-signal">
          {item.industry}
        </span>
        <span className="font-display font-black text-3xl text-signal">
          {item.metric}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="heading-md mb-2">{item.title}</h3>
        <p className="text-sm text-white/70 mb-4 line-clamp-2">{item.excerpt}</p>
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest2 text-signal">
          Read Case Study <ArrowUpRight size={14} />
        </div>
      </div>
    </motion.a>
  );
}
