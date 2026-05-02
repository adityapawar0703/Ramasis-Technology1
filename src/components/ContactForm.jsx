import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useToast } from './ToastHost';
import { services } from '../data/services';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().min(2, 'Please enter your company name'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Tell us a little more (10+ chars)'),
});

export default function ContactForm() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 700));
    // eslint-disable-next-line no-console
    console.log('Contact submission:', data);
    toast.success(`Thanks, ${data.name.split(' ')[0]} — our team will reach out within 24 hours.`);
    reset();
  };

  const inputBase =
    'w-full bg-paper dark:bg-elevated border border-subtle px-4 py-3.5 font-body text-sm focus:outline-none focus:border-signal transition placeholder:text-muted';
  const labelBase = 'overline mb-2 block';

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      data-testid="contact-form"
      className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      noValidate
    >
      <div>
        <label className={labelBase} htmlFor="name">Full Name</label>
        <input
          id="name"
          {...register('name')}
          placeholder="Jane Doe"
          data-testid="contact-input-name"
          className={inputBase}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500" data-testid="contact-error-name">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className={labelBase} htmlFor="email">Work Email</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          placeholder="jane@company.com"
          data-testid="contact-input-email"
          className={inputBase}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500" data-testid="contact-error-email">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className={labelBase} htmlFor="company">Company</label>
        <input
          id="company"
          {...register('company')}
          placeholder="Acme Corp"
          data-testid="contact-input-company"
          className={inputBase}
        />
        {errors.company && (
          <p className="mt-1 text-xs text-red-500" data-testid="contact-error-company">{errors.company.message}</p>
        )}
      </div>
      <div>
        <label className={labelBase} htmlFor="service">Service Of Interest</label>
        <select
          id="service"
          {...register('service')}
          data-testid="contact-input-service"
          defaultValue=""
          className={inputBase}
        >
          <option value="" disabled>Select a service…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Other">Other</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-red-500" data-testid="contact-error-service">{errors.service.message}</p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label className={labelBase} htmlFor="message">Tell us about your environment</label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          placeholder="Briefly describe your goals, current stack and any compliance requirements…"
          data-testid="contact-input-message"
          className={`${inputBase} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500" data-testid="contact-error-message">{errors.message.message}</p>
        )}
      </div>
      <div className="sm:col-span-2 flex items-center justify-between flex-wrap gap-4 mt-2">
        <p className="text-xs text-muted">
          We respond within 24 business hours. No spam — ever.
        </p>
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          type="submit"
          disabled={isSubmitting}
          data-testid="contact-submit"
          className="btn-primary disabled:opacity-60"
        >
          {isSubmitting ? 'Sending…' : 'Send Message'} <Send size={14} />
        </motion.button>
      </div>
    </form>
  );
}
