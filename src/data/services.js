import {
  ShieldCheck,
  Eye,
  Cloud,
  Lock,
  Bug,
  Brain,
  ServerCog,
  FileSearch,
} from 'lucide-react';

export const services = [
  {
    slug: 'threat-detection-response',
    title: 'Threat Detection & Response',
    short: 'AI-powered 24/7 monitoring with instant containment of advanced threats.',
    icon: Eye,
    accent: '#00FF9D',
    summary:
      'Detect, investigate, and neutralise sophisticated threats in real time with our AI-driven SOC. We fuse human expertise with machine speed.',
    bullets: [
      '24/7 Security Operations Center (SOC) coverage',
      'Behavioural analytics and anomaly detection',
      'Automated containment & response playbooks',
      'Threat hunting led by certified analysts',
    ],
  },
  {
    slug: 'zero-trust-architecture',
    title: 'Zero Trust Architecture',
    short: 'Never trust, always verify — perimeter-less security for the cloud era.',
    icon: ShieldCheck,
    accent: '#00E5FF',
    summary:
      'Design and deploy identity-first, least-privilege architectures across every workload, user, and device.',
    bullets: [
      'Identity & access governance',
      'Micro-segmentation & policy enforcement',
      'Device posture & continuous verification',
      'SASE / ZTNA rollout',
    ],
  },
  {
    slug: 'cloud-security',
    title: 'Cloud Security',
    short: 'Lock down AWS, Azure & GCP with continuous compliance and hardening.',
    icon: Cloud,
    accent: '#00FF9D',
    summary:
      'Shift-left security, posture management, and runtime protection across multi-cloud and hybrid estates.',
    bullets: [
      'CSPM, CWPP & CIEM',
      'Container & Kubernetes security',
      'Infrastructure-as-Code scanning',
      'Cloud-native incident response',
    ],
  },
  {
    slug: 'penetration-testing',
    title: 'Penetration Testing',
    short: 'Adversarial simulations from elite red teamers across all attack surfaces.',
    icon: Bug,
    accent: '#00E5FF',
    summary:
      'Find what scanners miss. Our offensive team simulates real attackers across web, network, mobile, cloud, and people.',
    bullets: [
      'Web, API & mobile penetration testing',
      'Red-team / purple-team exercises',
      'Social engineering & phishing campaigns',
      'Detailed exploitation reports & retests',
    ],
  },
  {
    slug: 'identity-access-management',
    title: 'Identity & Access',
    short: 'Frictionless yet ironclad IAM for workforce, customers and machines.',
    icon: Lock,
    accent: '#00FF9D',
    summary:
      'Modern IAM that scales — SSO, MFA, PAM, and just-in-time access without slowing the business.',
    bullets: [
      'SSO, MFA, passwordless rollouts',
      'Privileged Access Management (PAM)',
      'Identity governance & lifecycle',
      'Customer IAM (CIAM) integrations',
    ],
  },
  {
    slug: 'ai-security-operations',
    title: 'AI Security Operations',
    short: 'Operationalise AI to triage, correlate and remediate at machine speed.',
    icon: Brain,
    accent: '#00E5FF',
    summary:
      'We embed AI/ML across detection, triage, and response — reducing alert fatigue and MTTR by orders of magnitude.',
    bullets: [
      'Custom ML detection models',
      'LLM-assisted alert triage',
      'Generative reporting & summaries',
      'AI / LLM application security',
    ],
  },
  {
    slug: 'managed-soc',
    title: 'Managed SOC',
    short: 'Your extended security team — outcomes-driven, transparent, always-on.',
    icon: ServerCog,
    accent: '#00FF9D',
    summary:
      'A fully managed SOC delivered as a service, with co-managed dashboards, SLAs and dedicated analysts.',
    bullets: [
      'Tier 1–3 analyst coverage',
      'SIEM/SOAR engineering',
      'Incident response retainers',
      'Monthly executive reporting',
    ],
  },
  {
    slug: 'compliance-grc',
    title: 'Compliance & GRC',
    short: 'Audit-ready ISO 27001, SOC 2, HIPAA, PCI DSS and DPDP without the chaos.',
    icon: FileSearch,
    accent: '#00E5FF',
    summary:
      'Practical GRC programs that translate frameworks into engineering controls and board-ready evidence.',
    bullets: [
      'Gap assessments & roadmaps',
      'Policy authoring & evidence automation',
      'Vendor risk management',
      'Continuous control monitoring',
    ],
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
