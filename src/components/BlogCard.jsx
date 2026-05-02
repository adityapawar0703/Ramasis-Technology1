import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.a
      href="#"
      onClick={(e) => e.preventDefault()}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      data-testid={`blog-card-${post.slug}`}
      className="group block surface border border-subtle hover:border-signal/60 transition overflow-hidden"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3 font-mono text-[11px] uppercase tracking-widest2 text-muted">
          <span className="text-signal">{post.category}</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="heading-md mb-3 group-hover:text-signal transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-5">{post.excerpt}</p>
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest2 text-signal">
          Read Article <ArrowUpRight size={14} />
        </div>
      </div>
    </motion.a>
  );
}
