export const stats = [
  { value: 250, suffix: '+', label: 'Enterprises Defended' },
  { value: 99.99, suffix: '%', label: 'Uptime SLA', decimals: 2 },
  { value: 4.5, suffix: 'M', label: 'Threats Blocked / Day' },
  { value: 12, suffix: 'min', label: 'Avg. Response Time' },
];

export const deliverables = [
  {
    title: 'Executive Threat Report',
    body: 'A board-ready narrative of your security posture, key risks, and next quarter priorities.',
    tag: 'Quarterly',
  },
  {
    title: 'SOC Operational Dashboard',
    body: 'Live KPIs — MTTD, MTTR, alert volume, top adversaries — co-managed in your tenancy.',
    tag: 'Realtime',
  },
  {
    title: 'Incident Forensics Pack',
    body: 'Full chain-of-custody timeline, IOCs, root-cause analysis, and lessons-learned for every incident.',
    tag: 'Per Event',
  },
  {
    title: 'Compliance Evidence Vault',
    body: 'Continuously gathered evidence mapped to ISO 27001, SOC 2, PCI DSS, HIPAA and DPDP controls.',
    tag: 'Continuous',
  },
  {
    title: 'Red Team Playbook',
    body: 'Adversary simulation reports with reproducible exploitation paths and prioritised fixes.',
    tag: 'Engagement',
  },
  {
    title: 'Roadmap & Maturity Score',
    body: 'NIST CSF / CMMC scored maturity with a 12-month investment-aligned remediation roadmap.',
    tag: 'Annually',
  },
];

export const caseStudies = [
  {
    title: 'Global FinTech: 92% MTTR Reduction',
    industry: 'Financial Services',
    image:
      'https://images.unsplash.com/photo-1680992044138-ce4864c2b962?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400',
    excerpt:
      'How we deployed AI-led triage across 14 regions to cut mean-time-to-respond from 4 hours to 19 minutes.',
    metric: '92% Faster',
  },
  {
    title: 'Healthcare Network: HIPAA in 90 Days',
    industry: 'Healthcare',
    image:
      'https://images.unsplash.com/photo-1680992046617-e2e35451bcdb?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400',
    excerpt:
      'A 17-hospital network achieved continuous HIPAA compliance with zero patient downtime.',
    metric: '0 Downtime',
  },
  {
    title: 'SaaS Unicorn: Stopped a $40M Breach',
    industry: 'Technology',
    image:
      'https://images.unsplash.com/photo-1545987796-200677ee1011?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400',
    excerpt:
      'Detected and contained a sophisticated supply-chain intrusion within 11 minutes of initial access.',
    metric: '11 Min',
  },
];

export const blogPosts = [
  {
    slug: 'ai-driven-soc',
    title: 'Inside the AI-Driven SOC: How Machine Speed is Rewriting Defense',
    date: '2026-01-22',
    readTime: '8 min',
    category: 'AI Security',
    excerpt:
      'A detailed look at how large language models, behavioural analytics and SOAR pipelines are collapsing detection-to-response cycles.',
    image:
      'https://images.unsplash.com/photo-1760199789463-b523db55dd8b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400',
  },
  {
    slug: 'zero-trust-2026',
    title: 'Zero Trust in 2026: From Buzzword to Engineering Discipline',
    date: '2026-01-08',
    readTime: '6 min',
    category: 'Architecture',
    excerpt:
      'The patterns we see working — and the anti-patterns we see failing — across hundreds of zero trust rollouts.',
    image:
      'https://images.unsplash.com/photo-1483817101829-339b08e8d83f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400',
  },
  {
    slug: 'supply-chain-attacks',
    title: 'Anatomy of a Modern Supply-Chain Attack (and How to Stop It)',
    date: '2025-12-19',
    readTime: '11 min',
    category: 'Threat Intel',
    excerpt:
      'Walking through three recent supply-chain incidents, the common threads, and twelve concrete controls to deploy this quarter.',
    image:
      'https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400',
  },
];

export const resources = [
  ...blogPosts,
  {
    slug: 'cloud-security-checklist',
    title: 'Cloud Security Hardening Checklist (AWS / Azure / GCP)',
    date: '2025-11-30',
    readTime: 'Whitepaper',
    category: 'Whitepaper',
    excerpt: 'A 60-control checklist to harden multi-cloud environments before your next audit.',
    image:
      'https://images.unsplash.com/photo-1545987796-200677ee1011?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400',
  },
  {
    slug: 'tabletop-exercise-template',
    title: 'Free: Ransomware Tabletop Exercise Template',
    date: '2025-11-15',
    readTime: 'Template',
    category: 'Toolkit',
    excerpt: 'Run a 2-hour ransomware tabletop with your exec team using our battle-tested template.',
    image:
      'https://images.unsplash.com/photo-1680992046617-e2e35451bcdb?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400',
  },
];

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];
