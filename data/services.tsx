// lib/data/services.ts

export interface CredibilityItem {
  text: string;
}

export interface HeroData {
  heading: string;
  subheading: string;
  credibilityBar: string[];
  primaryCTA: string;
  secondaryCTA: string;
  socialProof: string;
}

export interface FeaturedAnswerData {
  question: string;
  answer: string;
}

export interface ProblemStat {
  label: string;
  value: string;
  description: string;
}

export interface ProblemSectionData {
  heading: string;
  content: string[];
  stats?: ProblemStat[];
}

export interface SolutionPillar {
  title: string;
  description: string;
}

export interface SolutionSectionData {
  heading: string;
  content: string;
  pillars: SolutionPillar[];
}

export interface CapabilityItem {
  service: string;
  whatItIs: string;
  businessImpact: string;
}

export interface CapabilitiesData {
  heading: string;
  items: CapabilityItem[];
}

export interface ComparisonOption {
  option: string;
  whereWorks: string;
  whereFails: string;
  ourPosition: string;
}

export interface ComparisonData {
  heading: string;
  intro: string;
  options: ComparisonOption[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface ProcessData {
  heading: string;
  steps: ProcessStep[];
}

export interface OutcomeMetric {
  kpi: string;
  result: string;
  whyItMatters: string;
}

export interface OutcomeData {
  challenge: string;
  solution: string;
  metrics: OutcomeMetric[];
}

export interface BusinessCaseData {
  heading: string;
  content: string;
  valueStreams: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CTAData {
  heading: string;
  primary: string;
  secondary: string;
}

export interface PricingData {
  range: string;
  note: string;
}

export interface ServicePageData {
  // Meta
  slug: string;
  title: string;
  metaDescription: string;
  pageGoal: string;
  buyerPersona: string;
  uniquePositioning: string;
  
  // Sections
  hero: HeroData;
  featuredAnswer: FeaturedAnswerData;
  problemSection: ProblemSectionData;
  solutionSection: SolutionSectionData;
  capabilities: CapabilitiesData;
  comparison: ComparisonData;
  process: ProcessData;
  outcome: OutcomeData;
  businessCase: BusinessCaseData;
  faqs: FAQ[];
  cta: CTAData;
  riskReversal: string;
  pricing: PricingData;
  
  // SEO
  internalLinks: string[];
  schema: {
    serviceType: string;
    priceRange: string;
    audience: string;
  };
}

// ============================================
// DATA FOR ALL 9 SERVICES
// ============================================

export const serviceData: Record<string, ServicePageData> = {
  // ------------------------------------------
  // 1. Web Development Services (Pillar)
  // ------------------------------------------
  'web-development-services': {
    slug: 'web-development-services',
    title: 'Web Development Services',
    metaDescription: 'Enterprise-grade web development services engineered for revenue, scale, and business outcomes. Custom web platforms that perform as business infrastructure.',
    pageGoal: 'Capture broad commercial intent and route qualified mid-market/enterprise buyers into a scoped consultation',
    buyerPersona: 'Mid-market & enterprise decision-makers (CEO, COO, VP Eng, CMO) evaluating a serious web build or rebuild',
    uniquePositioning: 'We build web platforms as business infrastructure — engineered for revenue, scale, and the realities of your industry — not websites as marketing artifacts.',
    
    hero: {
      heading: 'Web Development That Performs as Business Infrastructure',
      subheading: 'We design, build, and scale web platforms for companies where the website is not a brochure — it is where revenue is won, operations run, and growth is constrained or unlocked. From custom applications to enterprise eCommerce, we engineer for the outcomes your board measures.',
      credibilityBar: [
        'Senior-led engagements',
        'Fixed-scope or dedicated-team models',
        'Security & compliance built in',
        'You own 100% of the code'
      ],
      primaryCTA: 'Book a 30-minute scoping consultation',
      secondaryCTA: 'Request a sample scope & estimate',
      socialProof: '[PLACEHOLDER: Clutch rating · G2 rating · "4.9/5 across N verified reviews"] · Representative work spans SaaS, healthcare, financial services, logistics, and eCommerce.'
    },
    
    featuredAnswer: {
      question: 'What are web development services?',
      answer: 'Web development services cover the strategy, design, engineering, and ongoing optimization of websites and web applications. For mid-market and enterprise buyers, the value is not the site itself but what it changes: higher conversion, lower operating cost, faster time-to-market, and a platform that scales without a rebuild. The right partner is measured on business outcomes, not deliverables.'
    },
    
    problemSection: {
      heading: 'What a Weak Web Platform Actually Costs You',
      content: [
        'Most companies don\'t lose money because their website looks dated. They lose it in ways the website quietly causes and no one attributes back.',
        'A checkout that drops 2% of carts on mobile. A lead form that takes nine fields and loses a third of the people who start it. A CMS so brittle that every change needs a developer, so changes stop happening. A platform that can\'t integrate with the CRM, so sales works off spreadsheets.',
        'These are not design problems. They are margin problems. A B2B company spending $40,000 a month on demand generation and converting at 1.2% instead of an achievable 2.4% is not under-spending on ads — it is leaving half its pipeline on the floor at the last step. An eCommerce brand doing $5M a year with a 1.5-second slower load than its category leader is forfeiting revenue measured in six figures annually, because speed and conversion move together.',
        'The risk of inaction compounds. Technical debt accrues interest: the cheaper, faster build you chose two years ago is now the reason a six-week feature takes four months. Competitors who treated their platform as infrastructure are now iterating weekly while you wait on a queue. The cost of a poor platform is rarely a line item — which is exactly why it goes unmanaged.'
      ],
      stats: [
        {
          label: 'Conversion Loss',
          value: '50%',
          description: 'Pipeline left on the floor at 1.2% vs 2.4% conversion'
        },
        {
          label: 'Revenue Impact',
          value: '$100K+',
          description: 'Annual revenue forfeited from slow load times'
        }
      ]
    },
    
    solutionSection: {
      heading: 'How We Engineer for the Outcome, Not the Deliverable',
      content: 'We run every engagement through a value-first methodology: before a line of code, we establish what business metric this build must move and what it is worth. That number governs scope, sequencing, and trade-offs. It is the difference between a project that ships features and one that changes the P&L.',
      pillars: [
        {
          title: 'Architecture Before Aesthetics',
          description: 'We design the data model, integrations, and scale path first — because that determines whether the platform is an asset or a liability in year three.'
        },
        {
          title: 'Conversion as an Engineering Discipline',
          description: 'We instrument, test, and optimize the revenue path, not just build it.'
        },
        {
          title: 'You Own Everything',
          description: 'The code, the infrastructure, the documentation, and the ability to walk away or take it in-house. No lock-in, no proprietary black boxes.'
        }
      ]
    },
    
    capabilities: {
      heading: 'What We Deliver',
      items: [
        {
          service: 'Custom Web Development',
          whatItIs: 'Bespoke platforms built to your workflows and data, not bent to fit a template.',
          businessImpact: 'Eliminates the operational tax of software that doesn\'t fit how you actually work.'
        },
        {
          service: 'Enterprise Web Development',
          whatItIs: 'Large-scale, secure, integrated platforms with the governance enterprises require.',
          businessImpact: 'Supports complex orgs, compliance, and multi-team delivery without breaking.'
        },
        {
          service: 'eCommerce & Shopify Development',
          whatItIs: 'Conversion-engineered storefronts on Shopify, Shopify Plus, and headless stacks.',
          businessImpact: 'Directly grows revenue per visitor and lowers cost-to-serve.'
        },
        {
          service: 'Web Application Development',
          whatItIs: 'Customer-facing and internal apps, portals, and dashboards.',
          businessImpact: 'Turns manual processes into scalable, automated systems.'
        },
        {
          service: 'SaaS Development',
          whatItIs: 'Multi-tenant products engineered for scale, security, and unit economics.',
          businessImpact: 'Builds the asset your valuation is based on.'
        },
        {
          service: 'Website Redesign & Migration',
          whatItIs: 'Replatforming and redesigns that preserve SEO equity and lift conversion.',
          businessImpact: 'Modernizes without losing the traffic and rankings you\'ve paid for.'
        },
        {
          service: 'Optimization & Support',
          whatItIs: 'Speed, Core Web Vitals, CRO, and managed maintenance.',
          businessImpact: 'Protects and compounds the value of what you\'ve built.'
        }
      ]
    },
    
    comparison: {
      heading: 'Why Companies Choose Us Over the Alternatives',
      intro: 'The honest comparison isn\'t us versus another agency — it\'s us versus the three real options on your desk: a cheap offshore team, a freelancer, or hiring in-house. Each has a place, and each has a failure mode.',
      options: [
        {
          option: 'Offshore at a third of the cost',
          whereWorks: 'Well-specified, low-complexity builds',
          whereFails: 'Ambiguous scope, senior judgment, accountability across time zones',
          ourPosition: 'Senior-led, outcome-accountable; we cost more per hour and less per result'
        },
        {
          option: 'Freelancer',
          whereWorks: 'Small, contained projects',
          whereFails: 'Continuity, scale, security review, bus-factor of one',
          ourPosition: 'A team with redundancy, process, and documentation you own'
        },
        {
          option: 'Hire in-house',
          whereWorks: 'Long-term ownership of a stable product',
          whereFails: '12–18 month ramp, $300K+ loaded cost before output, hiring risk',
          ourPosition: 'Immediate senior capacity; hand off to your team when ready'
        },
        {
          option: 'Generic agency',
          whereWorks: 'Marketing sites',
          whereFails: 'Treating a revenue platform like a brochure',
          ourPosition: 'We engineer for the metric, not the launch'
        }
      ]
    },
    
    process: {
      heading: 'Our Process: Discovery to Optimization',
      steps: [
        {
          number: 1,
          title: 'Discovery',
          description: 'We establish the business goal, the metric to move, and what it\'s worth. Stakeholder interviews, technical audit, and a defined success definition.'
        },
        {
          number: 2,
          title: 'Strategy',
          description: 'Scope, sequencing, and trade-offs governed by ROI. You see the plan and the reasoning before we build.'
        },
        {
          number: 3,
          title: 'Architecture',
          description: 'Data model, integrations, security, and scale path designed first — the decisions that determine cost in year three.'
        },
        {
          number: 4,
          title: 'Design',
          description: 'Conversion-led UX and UI, prototyped and validated, not decorated.'
        },
        {
          number: 5,
          title: 'Development',
          description: 'Senior-led engineering in tested, documented increments with regular working demos.'
        },
        {
          number: 6,
          title: 'QA',
          description: 'Functional, performance, security, and accessibility testing as a gate, not an afterthought.'
        },
        {
          number: 7,
          title: 'Launch',
          description: 'Controlled deployment with rollback, monitoring, and zero-surprise cutover.'
        },
        {
          number: 8,
          title: 'Optimization',
          description: 'Post-launch instrumentation and iteration — because the launch is the start of the value, not the end of the project.'
        }
      ]
    },
    
    outcome: {
      challenge: 'A mid-market B2B services company was generating strong ad-driven traffic but converting poorly. The site was visually fine but architecturally weak: slow, a nine-field lead form, no CRM integration, and a CMS only developers could touch.',
      solution: 'We rebuilt the conversion path as an engineering problem — reduced the form to the three fields sales actually used, integrated directly with their CRM for instant lead routing, cut load time by more than half, and gave marketing a CMS they could run without a ticket queue.',
      metrics: [
        {
          kpi: 'Lead conversion rate',
          result: '~1.2% → ~2.5%',
          whyItMatters: 'Roughly doubled qualified pipeline from the same ad spend'
        },
        {
          kpi: 'Page load time',
          result: 'Cut by >50%',
          whyItMatters: 'Lower bounce, higher conversion, better rankings'
        },
        {
          kpi: 'Time to publish a change',
          result: 'Days → minutes',
          whyItMatters: 'Marketing ships independently; engineering freed for product'
        },
        {
          kpi: 'Cost per qualified lead',
          result: 'Down ~45%',
          whyItMatters: 'Same budget, far more pipeline'
        }
      ]
    },
    
    businessCase: {
      heading: 'The Business Case',
      content: 'A web platform engagement should pay for itself, and the math is usually straightforward. If a rebuild lifts conversion from 1.2% to 2.4% on a site that drives $40K/month in demand-gen spend, you\'ve effectively doubled the return on that spend — a six-figure annual swing that dwarfs the build cost. If it cuts the time to ship marketing changes from days to minutes, you recover engineering capacity and move faster than competitors waiting in a queue.',
      valueStreams: [
        'Revenue impact (conversion, AOV, retention)',
        'Cost savings (operational efficiency, reduced developer dependency, lower cost-to-serve)',
        'Efficiency gains (automation of manual work)',
        'Growth optionality (a platform that scales into new markets and products without a rebuild)'
      ]
    },
    
    faqs: [
      {
        question: 'What does a web development project actually cost?',
        answer: 'It depends on scope, but ranges are knowable. A focused custom site typically runs $15K–$50K; a complex web application or enterprise platform $50K–$250K+; a SaaS product or large eCommerce build $100K–$500K+. We give a defined estimate after a short scoping conversation, and we\'d rather right-size the project than win it on a number that can\'t deliver.'
      },
      {
        question: 'Why not just use an offshore team at a third of the price?',
        answer: 'For well-specified, contained work, you sometimes should — and we\'ll tell you when that\'s the smart call. The offshore model fails on ambiguous scope, senior architectural judgment, and accountability. The cheaper build often becomes the expensive rebuild. We cost more per hour and frequently less per outcome, because we get it right the first time and you own a platform that doesn\'t need redoing.'
      },
      {
        question: 'How long will it take?',
        answer: 'A focused site is typically 6–12 weeks; a complex application or platform 3–6 months. We sequence so that value ships in increments rather than one distant launch, and we commit to dates in the SOW with transparent change management.'
      },
      {
        question: 'What if we outgrow the build?',
        answer: 'You won\'t, because we architect for scale from the first decision — that\'s the point of architecture before aesthetics. The data model, integrations, and infrastructure are designed for where you\'re going, not just where you are. And because you own all the code and documentation, you\'re never trapped.'
      },
      {
        question: 'What about security and compliance?',
        answer: 'Security and data handling are designed in, not bolted on. We work to the requirements your industry demands — whether that\'s HIPAA, PCI-DSS, SOC 2 readiness, or GDPR — and we\'re built to pass your procurement and security review, not skate around it.'
      },
      {
        question: 'Do we own the code?',
        answer: 'Completely. The code, the infrastructure, the documentation, and the credentials are yours. No proprietary lock-in, no hostage scenarios. You can take it in-house or move it anytime — we earn the relationship by being worth keeping, not by trapping you.'
      }
    ],
    
    cta: {
      heading: 'Start With a Conversation, Not a Commitment',
      primary: 'Book your scoping consultation',
      secondary: 'Request a sample scope & estimate'
    },
    
    riskReversal: 'Fixed-scope engagements are quoted to a defined deliverable and price. Dedicated-team engagements run on a 30-day rolling basis — if we\'re not earning the relationship, you\'re not locked in.',
    
    pricing: {
      range: '$15K–$500K+',
      note: 'Focused custom site: $15K–$50K; complex application: $50K–$250K+; SaaS/eCommerce: $100K–$500K+'
    },
    
    internalLinks: ['/enterprise-web-development', '/saas-development', '/ecommerce-development', '/shopify-development', '/wordpress-development', '/web-design-services', '/custom-web-development', '/web-application-development'],
    
    schema: {
      serviceType: 'Web Development',
      priceRange: '$15,000 - $500,000+',
      audience: 'Mid-market & Enterprise Organizations'
    }
  },

  // ------------------------------------------
  // 2. Enterprise Web Development
  // ------------------------------------------
  'enterprise-web-development': {
    slug: 'enterprise-web-development',
    title: 'Enterprise Web Development',
    metaDescription: 'Enterprise web development engineered for scale, security, and governance. Custom platforms that pass security review and serve complex organizations.',
    pageGoal: 'Convert enterprise and upper-mid-market buyers with complex, multi-stakeholder, security-gated requirements into a scoped engagement',
    buyerPersona: 'Enterprise VP Engineering, CTO, CIO, Director of Digital, and procurement; buying through committee, security review, and an MSA',
    uniquePositioning: 'We deliver enterprise web platforms with the engineering rigor, security posture, and governance of a consulting firm — at the speed and accountability of a senior product team.',
    
    hero: {
      heading: 'Enterprise Web Development, Engineered for Scale and Scrutiny',
      subheading: 'Large organizations don\'t need a website — they need a platform that integrates with a complex stack, survives a security review, supports multiple teams and stakeholders, and scales without a rebuild. We build that, with the governance and accountability your environment requires.',
      credibilityBar: [
        'Security & compliance by design',
        'SOC 2 / HIPAA / PCI-aware delivery',
        'MSA & SOW ready',
        'Dedicated senior teams',
        'You own all IP'
      ],
      primaryCTA: 'Request an enterprise scoping session',
      secondaryCTA: 'Download our enterprise delivery & security overview',
      socialProof: '[PLACEHOLDER: enterprise client logos / Clutch enterprise rating] · Representative engagements across financial services, healthcare, logistics, and manufacturing.'
    },
    
    featuredAnswer: {
      question: 'What is enterprise web development?',
      answer: 'Enterprise web development is the delivery of large-scale, secure, integrated web platforms for complex organizations. It differs from standard web development in four ways: it must integrate with existing enterprise systems, satisfy formal security and compliance review, support multi-team governance, and scale across business units. The right partner is judged on architecture, security posture, and delivery governance — not visual design.'
    },
    
    problemSection: {
      heading: 'Why Enterprise Web Projects Fail — and What It Costs',
      content: [
        'Enterprise web initiatives rarely fail on code. They fail on the things smaller projects never have to confront: an architecture that can\'t integrate with the ERP, the CRM, the identity provider, and the data warehouse without brittle workarounds. A vendor who can\'t pass the security team\'s review and stalls the project for a quarter. A build that works for one business unit and breaks the moment a second one needs it. Governance that collapses the instant three stakeholders want different things.',
        'The cost of these failures is not measured in the build budget — it\'s measured in delay and risk. A platform initiative that slips two quarters because the vendor couldn\'t clear security review is two quarters of competitive ground lost and a budget cycle put at risk. A rebuild forced by an architecture that didn\'t anticipate scale is a seven-figure write-off and a credibility cost no one wants to own internally.',
        'For enterprise buyers, the real risk is not overpaying — it\'s choosing a partner who looks capable in a demo and cannot operate at the scale, security, and governance your organization actually requires. That risk is what this page exists to retire.'
      ]
    },
    
    solutionSection: {
      heading: 'Our Enterprise Delivery Model',
      content: 'We operate the way your environment demands: senior-led, security-first, and governed. Every enterprise engagement is structured around three pillars that map directly to why enterprise projects fail.',
      pillars: [
        {
          title: 'Integration-first architecture',
          description: 'We design for your existing stack from day one — identity, data, ERP, CRM, analytics — so the platform is a citizen of your environment, not an island bolted to its edge.'
        },
        {
          title: 'Security and compliance as a gate',
          description: 'We build to pass your security review, with data-handling, access control, and audit posture designed to your standards (SOC 2, HIPAA, PCI-DSS, GDPR as applicable).'
        },
        {
          title: 'Delivery governance',
          description: 'A defined RACI, regular stakeholder demos, change control, and a named senior accountable lead — so multi-stakeholder complexity is managed, not chaotic.'
        }
      ]
    },
    
    capabilities: {
      heading: 'Enterprise Capabilities',
      items: [
        {
          service: 'Enterprise platform engineering',
          whatItIs: 'Large-scale web platforms and portals built for multi-team, multi-unit use.',
          businessImpact: 'One platform that serves the whole organization without forking.'
        },
        {
          service: 'Systems integration',
          whatItIs: 'Secure integration with ERP, CRM, identity, data warehouse, and internal APIs.',
          businessImpact: 'Eliminates manual handoffs and data silos across the business.'
        },
        {
          service: 'Headless & composable architecture',
          whatItIs: 'Decoupled front and back ends for flexibility and independent scaling.',
          businessImpact: 'Future-proofs the stack and speeds iteration.'
        },
        {
          service: 'Migration & replatforming',
          whatItIs: 'Moving off legacy platforms with zero data loss and preserved SEO equity.',
          businessImpact: 'Modernizes without operational disruption or traffic loss.'
        },
        {
          service: 'Security & compliance engineering',
          whatItIs: 'Access control, encryption, audit logging, and compliance-aligned delivery.',
          businessImpact: 'Passes review; protects the organization from regulatory and breach risk.'
        },
        {
          service: 'Managed support & SLAs',
          whatItIs: 'Ongoing maintenance, monitoring, and contractual response times.',
          businessImpact: 'Operational certainty for a business-critical system.'
        }
      ]
    },
    
    comparison: {
      heading: 'Why Enterprises Choose Us Over a Big-Four Digital Practice or a Body Shop',
      intro: 'At the enterprise level, your alternatives are a large consulting firm\'s digital practice, an offshore body shop scaled to enterprise headcount, or an internal build. Here\'s the honest trade-off.',
      options: [
        {
          option: 'Big-Four digital practice',
          whereWorks: 'Brand cover, scale',
          whereFails: 'High cost, junior delivery teams, slow, layered overhead',
          ourPosition: 'Senior practitioners on the actual work, at materially lower cost'
        },
        {
          option: 'Offshore body shop',
          whereWorks: 'Headcount, low rate',
          whereFails: 'Coordination overhead, accountability gaps, quality variance',
          ourPosition: 'Senior-led, accountable, governed delivery'
        },
        {
          option: 'Internal build',
          whereWorks: 'Full control',
          whereFails: 'Hiring lag, opportunity cost, single points of failure',
          ourPosition: 'Immediate senior capacity, knowledge transfer, optional handoff'
        }
      ]
    },
    
    process: {
      heading: 'Governed Delivery, Stage by Stage',
      steps: [
        {
          number: 1,
          title: 'Discovery & alignment',
          description: 'Stakeholder mapping, requirements, technical and security audit, success metrics, and a defined governance model.'
        },
        {
          number: 2,
          title: 'Architecture & security design',
          description: 'Integration architecture, data model, security and compliance design — reviewed with your security team before build.'
        },
        {
          number: 3,
          title: 'Strategy & roadmap',
          description: 'Phased delivery plan sequenced by business value and dependency, with change-control process defined.'
        },
        {
          number: 4,
          title: 'Design & prototyping',
          description: 'Validated UX for complex workflows and multi-role access.'
        },
        {
          number: 5,
          title: 'Development',
          description: 'Senior-led engineering in governed increments, with regular stakeholder demos and documented progress.'
        },
        {
          number: 6,
          title: 'QA & security testing',
          description: 'Functional, performance, accessibility, and security testing including penetration-test readiness.'
        },
        {
          number: 7,
          title: 'Launch',
          description: 'Controlled, monitored deployment with rollback and a zero-surprise cutover plan.'
        },
        {
          number: 8,
          title: 'Optimization & support',
          description: 'Post-launch monitoring, SLA-backed support, and a continuous improvement roadmap.'
        }
      ]
    },
    
    outcome: {
      challenge: 'A financial-services organization needed to replatform a customer portal that couldn\'t integrate with its core systems, couldn\'t pass a tightening security standard, and required a developer for every content change. Three business units had conflicting requirements and the previous vendor had stalled in security review.',
      solution: 'We led with integration and security architecture, cleared the security review before building, and delivered a composable platform serving all three business units from a shared core with role-based access. Governance was handled through a defined RACI and biweekly stakeholder demos.',
      metrics: [
        {
          kpi: 'Security review',
          result: 'Passed first cycle',
          whyItMatters: 'Project unblocked; timeline protected'
        },
        {
          kpi: 'System integrations',
          result: 'Manual → automated',
          whyItMatters: 'Eliminated cross-team data handoffs'
        },
        {
          kpi: 'Business units served',
          result: '1 → 3 on one platform',
          whyItMatters: 'Removed duplicate systems and cost'
        },
        {
          kpi: 'Content change cycle',
          result: 'Developer-gated → self-serve',
          whyItMatters: 'Each unit operates independently'
        }
      ]
    },
    
    businessCase: {
      heading: 'The Enterprise Business Case',
      content: 'Enterprise platform ROI is rarely about the build cost — it\'s about risk retired and capacity unlocked. Clearing security review on the first cycle protects a budget cycle and a roadmap. Consolidating three business units onto one platform removes duplicate licensing, support, and maintenance cost permanently. Replacing manual cross-system handoffs with automated integration recovers staff time across the organization, every day, forever.',
      valueStreams: [
        'Risk reduction (security, compliance, breach, and project-failure risk)',
        'Cost consolidation (duplicate systems, licensing, manual labor)',
        'Velocity (faster iteration than competitors and than your prior vendor)',
        'Scalability (one platform that absorbs new units, markets, and products without a rebuild)'
      ]
    },
    
    faqs: [
      {
        question: 'Can you pass our security review?',
        answer: 'Yes — it\'s designed into delivery, not handled as an afterthought. We build to SOC 2, HIPAA, PCI-DSS, and GDPR requirements as your environment demands, and we sequence security architecture before build so review is cleared early rather than becoming a late-stage blocker. We\'re built to satisfy procurement and security, not to route around them.'
      },
      {
        question: 'Will you work under our MSA and security requirements?',
        answer: 'Yes. We\'re set up for enterprise contracting — MSA, SOW, DPA, and your security and data-handling requirements. We\'d rather invest in clearing your process than ask you to bend it.'
      },
      {
        question: 'How do you handle multiple stakeholders with conflicting requirements?',
        answer: 'With governance. A defined RACI, a named accountable lead, regular stakeholder demos, and a change-control process turn multi-stakeholder complexity into a managed process. Conflicting requirements are surfaced and resolved early, in the open, against the business goal — not discovered at launch.'
      },
      {
        question: 'What if your team is the single point of failure?',
        answer: 'It isn\'t. We deliver with team redundancy, documented architecture, and knowledge transfer built in. You own all code, infrastructure, and documentation, and we\'ll train your internal team for handoff whenever you choose. The relationship is retained on value, never on dependency.'
      },
      {
        question: 'How does pricing work at this scale?',
        answer: 'Enterprise engagements typically run $100K–$500K+ depending on scope, and we structure them as fixed-scope phases or dedicated-team models depending on how defined the requirements are. You get a transparent estimate and phased commitment after a scoping session — not a black-box number.'
      },
      {
        question: 'How do we know you can operate at our scale?',
        answer: 'References on request — we\'ll connect you with comparable engagements under NDA. The faster signal is the scoping session itself: bring your hardest integration and security constraints, and judge us on how we reason about them.'
      }
    ],
    
    cta: {
      heading: 'Bring Us Your Hardest Constraints',
      primary: 'Request an enterprise scoping session',
      secondary: 'Download the enterprise delivery & security overview'
    },
    
    riskReversal: 'Phased engagements gate spend to defined deliverables, so you commit one phase at a time. Dedicated-team engagements are 30-day rolling. You\'re never committed beyond demonstrated value.',
    
    pricing: {
      range: '$100K–$500K+',
      note: 'Enterprise engagements typically run $100K–$500K+ depending on scope, structured as fixed-scope phases or dedicated-team models.'
    },
    
    internalLinks: ['/web-development-services', '/saas-development', '/ecommerce-development', '/web-application-development'],
    
    schema: {
      serviceType: 'Enterprise Software Development',
      priceRange: '$100,000 - $500,000+',
      audience: 'Enterprise Organizations'
    }
  },

  // ------------------------------------------
  // 3. SaaS Development
  // ------------------------------------------
  'saas-development': {
    slug: 'saas-development',
    title: 'SaaS Development',
    metaDescription: 'SaaS development for products your valuation depends on. Multi-tenant platforms engineered for scale, security, and unit economics by senior product engineers.',
    pageGoal: 'Convert SaaS founders and product leaders building or scaling a product into a scoping engagement',
    buyerPersona: 'SaaS founders, technical and non-technical; VPs of Product/Engineering at funded startups and scaleups; occasionally their investors',
    uniquePositioning: 'We build SaaS products as the asset your valuation rests on — engineered for scale, security, and unit economics from the first commit, by senior teams who\'ve shipped products, not just features.',
    
    hero: {
      heading: 'SaaS Development for Products Your Valuation Depends On',
      subheading: 'Your product is your company. We build multi-tenant SaaS platforms engineered for the things that determine whether you scale or stall — architecture that holds at 100x the users, security that survives enterprise procurement, and unit economics that work when you grow. Senior-led, equity-grade engineering.',
      credibilityBar: [
        'Multi-tenant architecture',
        'SOC 2-ready delivery',
        'MVP to scale',
        'Senior product engineers',
        'You own 100% of the IP'
      ],
      primaryCTA: 'Book a product scoping session',
      secondaryCTA: 'Request our SaaS architecture & MVP guide',
      socialProof: '[PLACEHOLDER: SaaS client logos / founder testimonials] · Representative work spans B2B SaaS, vertical SaaS, and platform products.'
    },
    
    featuredAnswer: {
      question: 'What is SaaS development?',
      answer: 'SaaS development is the design and engineering of multi-tenant software delivered over the web, where one platform securely serves many customers. For founders, the stakes are existential: the architecture, security, and unit economics decided early determine whether the product scales profitably, passes enterprise procurement, and supports the valuation. The right partner builds for where the product is going, not just the first release.'
    },
    
    problemSection: {
      heading: 'The Architecture Decisions That Decide Whether You Scale',
      content: [
        'Most SaaS products that stall don\'t stall on features — they stall on decisions made in the first three months that no one revisited. A single-tenant shortcut that made the MVP faster and now makes every enterprise deal impossible because you can\'t isolate customer data. An architecture that runs fine at 200 users and falls over at 20,000, forcing a rebuild exactly when momentum is highest. Infrastructure costs that scale linearly with users, so growth destroys your margin instead of building it.',
        'These aren\'t engineering details — they\'re business-model decisions disguised as technical ones. A SaaS company that can\'t pass a SOC 2 review forfeits the entire enterprise segment and the multiples that come with it. A product whose cost-to-serve rises as fast as its revenue has no path to profitability no matter how well it sells. A platform that needs a rebuild at the scaleup stage burns the runway and the timing that the rebuild was supposed to protect.',
        'For a funded company, the cost of getting this wrong isn\'t the build budget — it\'s the round you can\'t raise because the product can\'t demonstrate the scale, security, and economics the next investor underwrites. That is the risk this page exists to address.'
      ]
    },
    
    solutionSection: {
      heading: 'How We Build SaaS That Scales Profitably',
      content: 'We engineer for the three things that determine a SaaS company\'s trajectory, from the first architectural decision.',
      pillars: [
        {
          title: 'Multi-tenancy and scale by design',
          description: 'Proper tenant isolation, an architecture that scales horizontally, and infrastructure whose cost decouples from user growth — so scaling builds margin instead of eroding it.'
        },
        {
          title: 'Security as a growth enabler',
          description: 'SOC 2-ready architecture, data isolation, and access control built in, because the enterprise segment and its multiples depend on it.'
        },
        {
          title: 'Unit-economics awareness',
          description: 'We treat cost-to-serve as an engineering metric, because a product that can\'t be served profitably can\'t be a business.'
        }
      ]
    },
    
    capabilities: {
      heading: 'SaaS Engineering Capabilities',
      items: [
        {
          service: 'MVP development',
          whatItIs: 'A real, sellable first version on a foundation that scales.',
          businessImpact: 'Proves the model fast without a rebuild when it works.'
        },
        {
          service: 'Multi-tenant platform engineering',
          whatItIs: 'Proper tenant isolation and horizontally scalable architecture.',
          businessImpact: 'Supports growth and unlocks the enterprise segment.'
        },
        {
          service: 'SaaS architecture & infrastructure',
          whatItIs: 'Cloud architecture engineered for scale and cost-efficiency.',
          businessImpact: 'Decouples cost from growth; protects margin.'
        },
        {
          service: 'Security & SOC 2-ready delivery',
          whatItIs: 'Data isolation, access control, audit posture.',
          businessImpact: 'Passes enterprise procurement; protects valuation.'
        },
        {
          service: 'Integrations & API development',
          whatItIs: 'Public APIs, webhooks, and third-party integrations.',
          businessImpact: 'Drives adoption, stickiness, and ecosystem value.'
        },
        {
          service: 'AI feature engineering',
          whatItIs: 'LLM and AI capabilities built into the product.',
          businessImpact: 'Differentiates and adds defensible value.'
        },
        {
          service: 'Scale & optimization',
          whatItIs: 'Performance, reliability, and cost optimization as you grow.',
          businessImpact: 'Keeps the product fast, stable, and profitable at scale.'
        }
      ]
    },
    
    comparison: {
      heading: 'Why Founders Choose Us Over an Offshore Team, a Dev Shop, or a First Hire',
      intro: 'Your options for building the product are an offshore team, a generalist dev shop, a technical co-founder or first hire, or us. The right answer depends on your stage and what\'s at stake.',
      options: [
        {
          option: 'Offshore team',
          whereWorks: 'Well-specified features, tight budget',
          whereFails: 'Architecture judgment, product thinking, scale decisions',
          ourPosition: 'Senior product engineers who make the decisions that compound'
        },
        {
          option: 'Generalist dev shop',
          whereWorks: 'Standard web builds',
          whereFails: 'SaaS-specific architecture, multi-tenancy, unit economics',
          ourPosition: 'SaaS specialists who build for scale and procurement'
        },
        {
          option: 'First engineering hire',
          whereWorks: 'Long-term ownership',
          whereFails: 'Months to hire, single point of failure, no senior backup',
          ourPosition: 'Immediate senior team; knowledge transfer to your hires'
        },
        {
          option: 'Technical co-founder only',
          whereWorks: 'Early prototyping',
          whereFails: 'Bandwidth and breadth at the scaling stage',
          ourPosition: 'Senior capacity that extends your team without diluting equity'
        }
      ]
    },
    
    process: {
      heading: 'From Idea to Scale',
      steps: [
        {
          number: 1,
          title: 'Discovery',
          description: 'Product goals, target users, business model, and the architecture implications of where you\'re headed.'
        },
        {
          number: 2,
          title: 'Strategy & MVP scope',
          description: 'Ruthless prioritization to a real MVP that proves the core value — and a scale path the MVP won\'t violate.'
        },
        {
          number: 3,
          title: 'Architecture',
          description: 'Multi-tenancy, scale, security, and cost model designed first — the decisions that determine your trajectory.'
        },
        {
          number: 4,
          title: 'Design',
          description: 'Product UX engineered for activation and retention, not just screens.'
        },
        {
          number: 5,
          title: 'Development',
          description: 'Senior-led, incremental builds with working demos and tight founder feedback loops.'
        },
        {
          number: 6,
          title: 'QA & security',
          description: 'Functional, performance, and security testing including SOC 2-readiness posture.'
        },
        {
          number: 7,
          title: 'Launch',
          description: 'Controlled release with monitoring, analytics, and an instrumented activation funnel.'
        },
        {
          number: 8,
          title: 'Scale & optimize',
          description: 'Performance, reliability, cost, and feature iteration as you grow and raise.'
        }
      ]
    },
    
    outcome: {
      challenge: 'A funded B2B SaaS startup had an MVP built fast and cheap that was winning SMB customers but losing every enterprise deal — it was single-tenant, couldn\'t isolate data, and couldn\'t pass a security questionnaire. The architecture also couldn\'t handle the user growth the next round required.',
      solution: 'We re-architected to proper multi-tenancy with tenant isolation, built SOC 2-ready security in, and moved to infrastructure whose cost decoupled from user count — sequenced so the product kept selling throughout. We instrumented the activation funnel so product decisions ran on data.',
      metrics: [
        {
          kpi: 'Enterprise segment',
          result: 'Locked out → open',
          whyItMatters: 'Larger deals and higher multiples now winnable'
        },
        {
          kpi: 'Scale ceiling',
          result: '~hundreds → tens of thousands of users',
          whyItMatters: 'Growth without a rebuild'
        },
        {
          kpi: 'Infrastructure cost curve',
          result: 'Linear → sublinear vs. users',
          whyItMatters: 'Scaling now builds margin'
        },
        {
          kpi: 'Security questionnaire',
          result: 'Failed → passed',
          whyItMatters: 'Enterprise procurement unblocked'
        }
      ]
    },
    
    businessCase: {
      heading: 'The Founder & Investor Business Case',
      content: 'For a SaaS company, the product build isn\'t a cost — it\'s the asset the valuation is computed on. The ROI shows up in three places investors care about. Market access: a SOC 2-ready, multi-tenant platform opens the enterprise segment, where deal sizes and retention — and therefore multiples — are highest. Margin: an architecture whose cost decouples from growth turns scaling into margin expansion rather than burn. Velocity and runway: building the right foundation once, instead of rebuilding mid-scale, protects the runway and the timing the next round depends on.',
      valueStreams: [
        'Market access (SOC 2-ready, multi-tenant opens enterprise segment)',
        'Margin (cost decouples from growth, scaling builds margin)',
        'Velocity and runway (build once, no rebuild mid-scale)',
        'Fundability (scale, security, clean unit economics = higher valuation)'
      ]
    },
    
    faqs: [
      {
        question: 'Should we build an MVP or the full product?',
        answer: 'An MVP — but a real one, on an architecture that scales. The trap is either a throwaway prototype that accidentally becomes production, or over-building for scale you haven\'t earned. We scope a genuine MVP that proves the core value fast and cheap, on a foundation that won\'t need replacing when it works. That\'s the sequencing that protects both speed and runway.'
      },
      {
        question: 'How do you handle multi-tenancy and security?',
        answer: 'Both are architected from the first decision, because retrofitting them is expensive and sometimes impossible. We build proper tenant isolation and SOC 2-ready security in from the start — it\'s what makes the enterprise segment, and its multiples, available to you. Building it later usually means a re-architecture exactly when you can least afford one.'
      },
      {
        question: 'What does a SaaS build cost?',
        answer: 'A focused MVP typically runs $50K–$150K; a more complex platform or a scale-stage build $150K–$500K+. The number depends on scope, and we\'d rather scope a defensible MVP than win the project on a figure that produces a prototype you outgrow in a quarter. You get a transparent estimate after a scoping session.'
      },
      {
        question: 'Will we own the IP and code?',
        answer: 'Entirely — code, infrastructure, and documentation. For a company whose value is its product, anything less is unacceptable, and we agree. No lock-in, full handoff to your team whenever you hire, and we earn the relationship by being worth keeping.'
      },
      {
        question: 'Can you work with our existing technical team or co-founder?',
        answer: 'Yes — we frequently extend a founder\'s or a small team\'s capacity rather than replace it. We bring senior architectural judgment and delivery bandwidth, integrate with your team and tools, and transfer knowledge as you hire. You scale capacity without diluting equity.'
      },
      {
        question: 'How do we know the architecture will actually scale?',
        answer: 'Because scale is the first thing we design for, not the last thing we hope for — and we\'ll walk you and your technical advisors through the architecture and the reasoning before we build. Bring your investor\'s technical diligence questions to the scoping session and judge us on the answers.'
      }
    ],
    
    cta: {
      heading: 'Scope the Build Before You Bet the Company on It',
      primary: 'Book a product scoping session',
      secondary: 'Request the SaaS architecture & MVP guide'
    },
    
    riskReversal: 'MVP engagements are fixed-scope to a defined, sellable deliverable. Ongoing build runs on a 30-day rolling basis — your runway, your control, never locked in beyond value delivered.',
    
    pricing: {
      range: '$50K–$500K+',
      note: 'Focused MVP: $50K–$150K; complex platform/scale-stage: $150K–$500K+'
    },
    
    internalLinks: ['/web-development-services', '/web-application-development', '/custom-web-development'],
    
    schema: {
      serviceType: 'SaaS Development',
      priceRange: '$50,000 - $500,000+',
      audience: 'SaaS Founders & Product Leaders'
    }
  },

  // ------------------------------------------
  // 4. eCommerce Development
  // ------------------------------------------
  'ecommerce-development': {
    slug: 'ecommerce-development',
    title: 'eCommerce Development',
    metaDescription: 'eCommerce development built to grow revenue per visitor. Shopify, Shopify Plus, and headless stores engineered for conversion, AOV, and cost-to-serve.',
    pageGoal: 'Convert eCommerce brands and retailers into a scoping engagement focused on revenue per visitor and cost-to-serve',
    buyerPersona: 'Founders, CEOs, and eCommerce/digital directors at growing DTC and B2B commerce brands ($1M–$50M+ revenue)',
    uniquePositioning: 'We build commerce platforms as revenue engines — engineered around conversion, average order value, and cost-to-serve — on the right stack for your stage, from Shopify to fully headless.',
    
    hero: {
      heading: 'eCommerce Development Built to Grow Revenue Per Visitor',
      subheading: 'A store\'s job is not to exist — it\'s to convert traffic into revenue and do it at a cost that protects margin. We build and replatform commerce experiences engineered around the numbers that decide whether you grow profitably: conversion rate, AOV, retention, and cost-to-serve.',
      credibilityBar: [
        'Shopify, Shopify Plus & headless',
        'Conversion-engineered',
        'Performance-first',
        'Integrated with your stack',
        'You own the build'
      ],
      primaryCTA: 'Book an eCommerce strategy call',
      secondaryCTA: 'Request a conversion & performance teardown',
      socialProof: '[PLACEHOLDER: brand logos / Clutch eCommerce rating] · Representative work across DTC, B2B commerce, and high-volume retail.'
    },
    
    featuredAnswer: {
      question: 'What is eCommerce development?',
      answer: 'eCommerce development is the design and engineering of online stores and commerce platforms. For brands, the value isn\'t the storefront — it\'s revenue per visitor and cost-to-serve. The right build raises conversion and average order value, lowers operating cost, and runs on a platform matched to your volume and complexity, from Shopify for most brands to headless for those with specific performance or content needs.'
    },
    
    problemSection: {
      heading: 'Where Commerce Brands Quietly Lose Revenue',
      content: [
        'Most stores don\'t have a traffic problem — they have a conversion-and-margin problem they can\'t see. A mobile checkout that loses customers at the payment step. A site half a second slower than the category leader, which alone can cost a measurable share of revenue because speed and conversion move together. A product page that doesn\'t answer the objection that stops the purchase. A back end so manual that every order costs staff time that should have been automated away.',
        'The math is unforgiving. A store doing $5M a year at a 1.8% conversion rate is leaving roughly $1.4M on the table versus an achievable 2.5% — on the same traffic, the same ad spend, the same brand. A 1.5-second load-time gap against a competitor is revenue forfeited every single day. Rising cost-to-serve — manual fulfillment, disconnected systems, no automation — eats the margin that growth was supposed to create.',
        'Replatforming too late, or onto the wrong stack, is its own cost: a brand that outgrows its platform mid-growth faces a rebuild exactly when it can least afford the disruption, while a brand that jumps to expensive headless before it needs to burns budget on complexity it can\'t yet use.'
      ]
    },
    
    solutionSection: {
      heading: 'How We Engineer Commerce for Profit, Not Just Launch',
      content: 'We treat your store as a revenue system with three levers, and we engineer each one deliberately.',
      pillars: [
        {
          title: 'Conversion',
          description: 'We instrument and optimize the path from landing to purchase — product pages that close, a checkout that doesn\'t leak, and performance fast enough that speed stops costing you sales.'
        },
        {
          title: 'Average order value and retention',
          description: 'Merchandising, bundling, and post-purchase experiences engineered to raise the value of every customer, because acquiring them is the expensive part.'
        },
        {
          title: 'Cost-to-serve',
          description: 'Integration and automation — inventory, fulfillment, ERP, CRM — so growth doesn\'t mean proportional headcount.'
        }
      ]
    },
    
    capabilities: {
      heading: 'Commerce Capabilities',
      items: [
        {
          service: 'Shopify & Shopify Plus development',
          whatItIs: 'Conversion-engineered stores on the platform with the best return for most brands.',
          businessImpact: 'Fast to launch, low overhead, proven to scale.'
        },
        {
          service: 'Headless commerce',
          whatItIs: 'Decoupled storefronts for brands with specific performance or content needs.',
          businessImpact: 'Maximum speed and flexibility where it pays off.'
        },
        {
          service: 'Replatforming & migration',
          whatItIs: 'Moving stores between platforms with zero data loss and preserved SEO equity.',
          businessImpact: 'Modernize without losing traffic or revenue.'
        },
        {
          service: 'Conversion rate optimization',
          whatItIs: 'Data-led optimization of the full purchase path.',
          businessImpact: 'More revenue from the traffic you already have.'
        },
        {
          service: 'Systems integration',
          whatItIs: 'ERP, inventory, fulfillment, CRM, and marketing-stack integration.',
          businessImpact: 'Lowers cost-to-serve and removes manual work.'
        },
        {
          service: 'B2B & wholesale commerce',
          whatItIs: 'Account-based pricing, quoting, and workflows for B2B sellers.',
          businessImpact: 'Captures B2B revenue most storefronts can\'t handle.'
        },
        {
          service: 'Performance & speed optimization',
          whatItIs: 'Core Web Vitals and load-time engineering.',
          businessImpact: 'Recovers the revenue that slow pages lose.'
        }
      ]
    },
    
    comparison: {
      heading: 'Why Brands Choose Us Over a Template, a Freelancer, or a Generalist',
      intro: 'Your options are a do-it-yourself theme, a freelancer, a generalist agency, or a partner who builds commerce as a revenue system. Here\'s the honest trade-off.',
      options: [
        {
          option: 'Off-the-shelf theme',
          whereWorks: 'Pre-revenue, tiny catalog',
          whereFails: 'Conversion, performance, differentiation at scale',
          ourPosition: 'Engineered for conversion and your specific funnel'
        },
        {
          option: 'Freelancer',
          whereWorks: 'Small tweaks',
          whereFails: 'Strategy, integration, performance, continuity',
          ourPosition: 'A team that builds the system, not just the screens'
        },
        {
          option: 'Generalist agency',
          whereWorks: 'Marketing sites',
          whereFails: 'Commerce-specific conversion and operations depth',
          ourPosition: 'Commerce specialists measured on revenue per visitor'
        },
        {
          option: 'Enterprise platform (Salesforce/Adobe)',
          whereWorks: 'Very large, complex retail',
          whereFails: 'Cost and overhead for most brands',
          ourPosition: 'Right-sized stack — we won\'t sell you complexity you don\'t need'
        }
      ]
    },
    
    process: {
      heading: 'From Audit to Optimization',
      steps: [
        {
          number: 1,
          title: 'Discovery & audit',
          description: 'Conversion, performance, and operations audit; revenue goals; the right-platform decision.'
        },
        {
          number: 2,
          title: 'Strategy',
          description: 'Scope and platform choice governed by ROI — conversion lift, AOV, and cost-to-serve targets.'
        },
        {
          number: 3,
          title: 'Architecture',
          description: 'Catalog, integrations, and data model designed for your volume and operations.'
        },
        {
          number: 4,
          title: 'Design',
          description: 'Conversion-led UX for product, cart, and checkout — tested, not guessed.'
        },
        {
          number: 5,
          title: 'Development',
          description: 'Senior-led build with working demos and a migration plan that preserves SEO equity.'
        },
        {
          number: 6,
          title: 'QA',
          description: 'Functional, payment, performance, and cross-device testing as a launch gate.'
        },
        {
          number: 7,
          title: 'Launch',
          description: 'Controlled cutover with redirects, monitoring, and zero traffic loss.'
        },
        {
          number: 8,
          title: 'Optimization',
          description: 'Post-launch CRO and performance iteration — compounding revenue from existing traffic.'
        }
      ]
    },
    
    outcome: {
      challenge: 'A DTC brand doing several million in revenue had strong paid traffic but a conversion rate well below its category, a slow mobile experience, and manual fulfillment that ate margin as it grew.',
      solution: 'We rebuilt the store on Shopify Plus with a conversion-engineered product and checkout experience, cut mobile load time substantially, and integrated inventory and fulfillment to automate the operations that were costing staff time.',
      metrics: [
        {
          kpi: 'Conversion rate',
          result: '~1.8% → ~2.6%',
          whyItMatters: '~44% more revenue from the same traffic'
        },
        {
          kpi: 'Mobile load time',
          result: 'Cut by ~half',
          whyItMatters: 'Lower bounce, higher mobile conversion'
        },
        {
          kpi: 'Fulfillment',
          result: 'Manual → automated',
          whyItMatters: 'Margin protected as volume grew'
        },
        {
          kpi: 'AOV',
          result: 'Up ~15%',
          whyItMatters: 'Bundling and merchandising lifted order value'
        }
      ]
    },
    
    businessCase: {
      heading: 'The Commerce Business Case',
      content: 'Commerce ROI is the most directly measurable in this entire category, because every lever maps to a number you already track. A conversion lift from 1.8% to 2.6% on a $5M store is roughly $2M in additional annual revenue from traffic you\'re already paying for. A 15% AOV increase compounds across every order. Automating fulfillment converts a growing cost line into a fixed one. Recovering load-time-driven losses is pure found revenue.',
      valueStreams: [
        'Conversion (revenue per visitor)',
        'AOV and retention (revenue per customer)',
        'Cost-to-serve (margin protection through automation)',
        'Acquisition efficiency (better conversion lowers effective CAC)'
      ]
    },
    
    faqs: [
      {
        question: 'Shopify, Shopify Plus, or headless — which do we need?',
        answer: 'For most brands, Shopify or Shopify Plus delivers the best return: fast to market, low operational overhead, and a deep ecosystem. Headless earns its added complexity only when you have specific performance, content, or omnichannel requirements. We\'ll tell you which your business actually needs — and we frequently recommend the less expensive option, because the right answer is the one that grows your profit, not our invoice.'
      },
      {
        question: 'Will replatforming hurt our SEO and traffic?',
        answer: 'Not when it\'s done correctly — preserving SEO equity is a core part of the migration, with a full redirect map, URL strategy, and careful cutover. Done carelessly, replatforming can lose traffic; that\'s precisely why it shouldn\'t be handed to a freelancer or done as an afterthought. We treat traffic preservation as a deliverable.'
      },
      {
        question: 'What does an eCommerce build cost?',
        answer: 'A focused Shopify build typically runs $15K–$60K; a Shopify Plus or complex store $60K–$150K; a headless or B2B commerce platform $100K–$250K+. The number follows scope, and we size it to the return. You get a transparent estimate after a strategy call.'
      },
      {
        question: 'How quickly will we see results?',
        answer: 'Conversion and performance gains often show within weeks of launch because they act on existing traffic. We instrument from day one so the impact is measured, not assumed, and optimization continues compounding after launch.'
      },
      {
        question: 'Can you integrate with our ERP, fulfillment, and marketing stack?',
        answer: 'Yes — integration is central to lowering cost-to-serve. We connect inventory, fulfillment, ERP, CRM, and marketing tools so operations scale without proportional headcount, and so your data isn\'t trapped in silos.'
      },
      {
        question: 'Do we own the store and data?',
        answer: 'Completely — the build, the theme code, the configuration, and the data are yours. No lock-in, full control, and you can take it elsewhere anytime. We keep the relationship by growing your revenue, not by holding your store hostage.'
      }
    ],
    
    cta: {
      heading: 'Find the Revenue Your Store Is Leaving on the Table',
      primary: 'Book an eCommerce strategy call',
      secondary: 'Request a conversion & performance teardown'
    },
    
    riskReversal: 'Builds are fixed-scope to a defined deliverable and price. Optimization runs on a 30-day rolling basis — retained on measured revenue impact, never locked in.',
    
    pricing: {
      range: '$15K–$250K+',
      note: 'Focused Shopify: $15K–$60K; Shopify Plus/complex: $60K–$150K; headless/B2B: $100K–$250K+'
    },
    
    internalLinks: ['/web-development-services', '/shopify-development', '/web-design-services'],
    
    schema: {
      serviceType: 'eCommerce Development',
      priceRange: '$15,000 - $250,000+',
      audience: 'DTC & B2B Commerce Brands'
    }
  },

  // ------------------------------------------
  // 5. Shopify Development
  // ------------------------------------------
  'shopify-development': {
    slug: 'shopify-development',
    title: 'Shopify Development',
    metaDescription: 'Shopify development that treats your store as a revenue engine. Custom Shopify and Shopify Plus stores engineered for conversion, AOV, and scale.',
    pageGoal: 'Capture high-intent Shopify buyers and convert to a scoping call; position as Shopify experts who optimize for revenue, not theme-installers',
    buyerPersona: 'DTC and B2B brand founders and eCommerce managers on or moving to Shopify; growth-stage and scaling',
    uniquePositioning: 'We\'re Shopify specialists who treat the platform as a revenue engine — building and optimizing stores on Shopify and Shopify Plus for conversion, AOV, and scale, not just launching themes.',
    
    hero: {
      heading: 'Shopify Development That Treats Your Store as a Revenue Engine',
      subheading: 'Shopify is the best commerce platform for most brands — if it\'s built to convert. We design, build, and optimize Shopify and Shopify Plus stores around the metrics that grow profit: conversion rate, average order value, and cost-to-serve. Specialists, not theme-installers.',
      credibilityBar: [
        'Shopify & Shopify Plus',
        'Conversion-first',
        'Custom apps & integrations',
        'Performance-engineered',
        'You own the build'
      ],
      primaryCTA: 'Book a Shopify strategy call',
      secondaryCTA: 'Request a free Shopify store teardown',
      socialProof: '[PLACEHOLDER: Shopify Partner badge / brand logos / rating] · Representative work across DTC, scaling, and B2B Shopify brands.'
    },
    
    featuredAnswer: {
      question: 'What is Shopify development?',
      answer: 'Shopify development is the design, customization, and engineering of stores on Shopify and Shopify Plus. For brands, the value is in how well the store converts and scales — not the theme. Expert Shopify development optimizes the product and checkout experience for conversion and average order value, integrates operations to lower cost-to-serve, and extends the platform with custom apps where standard features fall short.'
    },
    
    problemSection: {
      heading: 'Why Most Shopify Stores Underperform',
      content: [
        'Shopify makes it easy to launch a store — and that\'s exactly why so many underperform. A theme installed and lightly customized looks fine and converts poorly, because it was designed to look good in a demo, not to close your specific customer. An app stack bolted on without discipline slows the site to the point that speed costs sales. A checkout left at default leaks customers no one is watching for. Operations run manually because the integrations were never built.',
        'The result is a store that works but doesn\'t perform. A brand converting at 1.8% on Shopify when 2.5%+ is achievable is leaving substantial revenue unclaimed on every visit. A site dragged down by a dozen redundant apps is paying for that bloat in lost conversions and monthly fees. Manual order and inventory handling is margin quietly bleeding out as volume grows.',
        'The gap between a Shopify store that exists and one that\'s engineered for revenue is usually six figures a year for a growing brand — and it\'s invisible until someone measures it.'
      ]
    },
    
    solutionSection: {
      heading: 'How We Build Shopify for Revenue and Scale',
      content: 'We approach Shopify as commerce engineering, not theme configuration.',
      pillars: [
        {
          title: 'Conversion-first build',
          description: 'Product pages, cart, and checkout designed and tested to close — including Shopify Plus\'s checkout customization where it moves the number — on a store fast enough that performance stops costing sales.'
        },
        {
          title: 'Disciplined app and custom-code strategy',
          description: 'We use apps where they earn their place and build custom functionality where apps fall short or slow you down, keeping the store lean.'
        },
        {
          title: 'Operations integration',
          description: 'Inventory, fulfillment, ERP, and marketing connected so growth doesn\'t mean proportional headcount.'
        }
      ]
    },
    
    capabilities: {
      heading: 'Shopify Capabilities',
      items: [
        {
          service: 'Custom Shopify theme development',
          whatItIs: 'Conversion-engineered, brand-specific storefronts — not lightly-skinned templates.',
          businessImpact: 'Higher conversion from a store built to close your customer.'
        },
        {
          service: 'Shopify Plus development',
          whatItIs: 'Advanced builds using Plus\'s checkout, scripts, and B2B capabilities.',
          businessImpact: 'Enterprise-grade commerce with higher conversion control.'
        },
        {
          service: 'Custom Shopify app development',
          whatItIs: 'Private apps and custom functionality where standard features fall short.',
          businessImpact: 'Capabilities competitors using stock Shopify can\'t match.'
        },
        {
          service: 'Store optimization & CRO',
          whatItIs: 'Data-led optimization of the conversion path and app stack.',
          businessImpact: 'More revenue and lower app bloat from the store you have.'
        },
        {
          service: 'Migration to Shopify',
          whatItIs: 'Moving from other platforms with zero data loss and preserved SEO.',
          businessImpact: 'Modernize onto Shopify without losing traffic.'
        },
        {
          service: 'Integrations',
          whatItIs: 'ERP, fulfillment, inventory, subscription, and marketing-stack integration.',
          businessImpact: 'Lower cost-to-serve through automation.'
        },
        {
          service: 'B2B & wholesale on Shopify',
          whatItIs: 'Account pricing, quoting, and wholesale workflows.',
          businessImpact: 'Captures B2B revenue on a platform built for DTC.'
        }
      ]
    },
    
    comparison: {
      heading: 'Why Brands Choose Us Over a Cheap Themer or a Freelancer',
      intro: 'The Shopify market is full of cheap theme installs and freelancers. Here\'s where they work, where they don\'t, and where we fit.',
      options: [
        {
          option: '$500 theme install',
          whereWorks: 'Pre-revenue test store',
          whereFails: 'Conversion, performance, differentiation',
          ourPosition: 'Engineered for your funnel and your numbers'
        },
        {
          option: 'Shopify freelancer',
          whereWorks: 'Small fixes',
          whereFails: 'Strategy, custom apps, integration, continuity',
          ourPosition: 'A team with redundancy, apps, and ops depth'
        },
        {
          option: 'Marketplace app stack',
          whereWorks: 'Quick features',
          whereFails: 'Bloat, speed loss, fragility',
          ourPosition: 'Disciplined apps + custom code; lean and fast'
        },
        {
          option: 'Generalist agency',
          whereWorks: 'General web work',
          whereFails: 'Shopify-specific conversion and Plus depth',
          ourPosition: 'Shopify specialists measured on revenue per visitor'
        }
      ]
    },
    
    process: {
      heading: 'From Teardown to Growth',
      steps: [
        {
          number: 1,
          title: 'Discovery & teardown',
          description: 'Conversion, performance, and app-stack audit; revenue goals; Plus-vs-standard decision.'
        },
        {
          number: 2,
          title: 'Strategy',
          description: 'Scope governed by conversion, AOV, and cost-to-serve targets.'
        },
        {
          number: 3,
          title: 'Architecture',
          description: 'Theme structure, app strategy, custom-code plan, and integration map.'
        },
        {
          number: 4,
          title: 'Design',
          description: 'Conversion-led product, cart, and checkout UX — tested.'
        },
        {
          number: 5,
          title: 'Development',
          description: 'Senior Shopify build with working demos and SEO-safe migration where applicable.'
        },
        {
          number: 6,
          title: 'QA',
          description: 'Functional, payment, performance, and device testing as a gate.'
        },
        {
          number: 7,
          title: 'Launch',
          description: 'Controlled cutover with redirects and monitoring — no traffic loss.'
        },
        {
          number: 8,
          title: 'Optimization',
          description: 'Ongoing CRO and performance work — compounding revenue post-launch.'
        }
      ]
    },
    
    outcome: {
      challenge: 'A scaling DTC brand on a customized Shopify theme had decent traffic, a conversion rate below category benchmark, a store slowed by a stack of overlapping apps, and manual operations.',
      solution: 'We rebuilt the store on a lean, conversion-engineered Shopify Plus theme, replaced redundant apps with targeted custom functionality, cut load time, and integrated fulfillment and inventory.',
      metrics: [
        {
          kpi: 'Conversion rate',
          result: '~1.9% → ~2.7%',
          whyItMatters: '~42% more revenue from the same traffic'
        },
        {
          kpi: 'Installed apps',
          result: 'Cut by ~half',
          whyItMatters: 'Faster store, lower monthly app cost'
        },
        {
          kpi: 'Load time',
          result: 'Down ~45%',
          whyItMatters: 'Lower bounce, higher mobile conversion'
        },
        {
          kpi: 'Operations',
          result: 'Manual → automated',
          whyItMatters: 'Margin protected through growth'
        }
      ]
    },
    
    businessCase: {
      heading: 'The Shopify Business Case',
      content: 'Shopify ROI is fast and measurable because it acts on traffic you already have. Lifting conversion from 1.9% to 2.7% on a $4M store adds well over $1.5M in annual revenue at no extra acquisition cost. Cutting app bloat lowers both monthly fees and the conversion loss that slow stores cause. Automating operations protects margin as you scale. Most builds pay for themselves out of the conversion lift within the first months.',
      valueStreams: [
        'Conversion lift (more revenue from same traffic)',
        'App cost reduction (lower monthly fees, faster store)',
        'Operations automation (margin protection through scale)',
        'Acquisition efficiency (better conversion lowers effective CAC)'
      ]
    },
    
    faqs: [
      {
        question: 'Is Shopify good enough for a serious or large brand?',
        answer: 'Yes — Shopify and especially Shopify Plus power some very large brands, and for the large majority of businesses it delivers a better return than more complex platforms. The differentiator is how it\'s built. A serious brand on a conversion-engineered Shopify build outperforms one on an over-engineered enterprise platform that drains budget on overhead. We\'ll tell you honestly if your needs are the rare exception.'
      },
      {
        question: 'Do we need Shopify Plus or is standard Shopify enough?',
        answer: 'Most brands start perfectly well on standard Shopify. Plus earns its higher cost when you need checkout customization, advanced B2B/wholesale, higher volume, or scripting. We\'ll assess your stage and tell you which is the right spend — and we won\'t push Plus if standard Shopify serves your goals.'
      },
      {
        question: 'What does a Shopify build cost?',
        answer: 'A custom theme build typically runs $15K–$60K; a Shopify Plus or app-heavy build $60K–$150K+. Cost follows scope and we size it to the return. You get a transparent estimate after a strategy call — and a free teardown shows you the opportunity first.'
      },
      {
        question: 'Will too many apps slow our store down?',
        answer: 'Yes, and it\'s one of the most common causes of underperformance. We take a disciplined approach — keep the apps that earn their place, replace redundant ones with lean custom code, and engineer for speed — because performance and conversion move together.'
      },
      {
        question: 'Can you migrate us to Shopify without losing SEO?',
        answer: 'Yes — SEO-preserving migration with a full redirect map and careful cutover is standard practice for us. Done carelessly, migration loses traffic; we treat traffic preservation as a deliverable, not an afterthought.'
      },
      {
        question: 'Do we own the store and custom code?',
        answer: 'Completely — the theme code, any custom apps, the configuration, and the data are yours. No lock-in, full control, take it elsewhere anytime. We earn the relationship by growing your store.'
      }
    ],
    
    cta: {
      heading: 'See What Your Shopify Store Could Be Earning',
      primary: 'Book a Shopify strategy call',
      secondary: 'Request a free Shopify store teardown'
    },
    
    riskReversal: 'Builds are fixed-scope to a defined deliverable and price; optimization is 30-day rolling, retained on measured results.',
    
    pricing: {
      range: '$15K–$150K+',
      note: 'Custom theme: $15K–$60K; Shopify Plus/app-heavy: $60K–$150K+'
    },
    
    internalLinks: ['/ecommerce-development', '/web-development-services', '/web-design-services'],
    
    schema: {
      serviceType: 'Shopify Development',
      priceRange: '$15,000 - $150,000+',
      audience: 'DTC & B2B Shopify Brands'
    }
  },

  // ------------------------------------------
  // 6. WordPress Development
  // ------------------------------------------
  'wordpress-development': {
    slug: 'wordpress-development',
    title: 'WordPress Development',
    metaDescription: 'WordPress development for companies that outgrew cheap WordPress. Custom, fast, secure, and marketing-empowering WordPress sites built properly.',
    pageGoal: 'Convert businesses seeking serious WordPress work — not cheap theme jobs — into scoping engagements',
    buyerPersona: 'Marketing leaders, founders, and operators at content-driven and mid-market businesses who need a fast, secure, manageable WordPress site or are escaping a bad one',
    uniquePositioning: 'We build WordPress as a fast, secure, marketing-empowering platform — enterprise-grade where it needs to be — not the slow, fragile, plugin-bloated builds that give WordPress a bad name.',
    
    hero: {
      heading: 'WordPress Development for Companies That Outgrew Cheap WordPress',
      subheading: 'WordPress powers a huge share of the web — and most of those sites are slow, insecure, and a developer-dependent headache. We build WordPress the way it should be: fast, secure, and built so your marketing team can run it without a ticket queue. Enterprise-grade when you need it.',
      credibilityBar: [
        'Custom themes, no bloat',
        'Performance & security-hardened',
        'Headless WordPress available',
        'Marketing-team friendly',
        'You own everything'
      ],
      primaryCTA: 'Book a WordPress strategy call',
      secondaryCTA: 'Request a WordPress performance & security audit',
      socialProof: '[PLACEHOLDER: client logos / rating] · Representative work across content-driven, mid-market, and enterprise WordPress sites.'
    },
    
    featuredAnswer: {
      question: 'What is WordPress development?',
      answer: 'WordPress development is the design and engineering of websites on WordPress, the world\'s most widely used CMS. Done well, WordPress is fast, secure, and easy for non-technical teams to manage. Done poorly — with bloated themes and excessive plugins — it\'s slow, vulnerable, and developer-dependent. Professional WordPress development means custom, performance-engineered, security-hardened builds that empower marketing teams rather than trapping them.'
    },
    
    problemSection: {
      heading: 'Why WordPress Gets a Bad Name — and What It Costs You',
      content: [
        'WordPress\'s reputation problem is really a how-it-was-built problem. A premium theme stacked with twenty plugins to force it into shape is slow, fragile, and a security liability — and it\'s how most WordPress sites are made. The result: pages that load slowly enough to cost conversions and rankings, a constant patching burden, and a site so brittle that every change requires a developer, so marketing stops changing things.',
        'Each of those has a price. A slow WordPress site loses conversions and search visibility, because Core Web Vitals and speed are ranking and conversion factors. An unmaintained, plugin-heavy install is a breach waiting to happen — and a breach on a business site is a direct financial and reputational hit. A marketing team that needs a developer for every landing page moves at a fraction of the speed of a competitor whose team ships independently.',
        'The hidden cost is velocity. When the platform fights your team, content and campaigns slow to the pace of your developer queue — and in a content-driven business, that pace is your growth rate.'
      ]
    },
    
    solutionSection: {
      heading: 'How We Build WordPress That\'s Fast, Secure, and Yours to Run',
      content: 'We build WordPress the way capable teams build it — deliberately, not by stacking plugins.',
      pillars: [
        {
          title: 'Custom, lean themes',
          description: 'We build to your needs rather than bending a bloated theme, so the site is fast by design and free of the plugin sprawl that causes most WordPress problems.'
        },
        {
          title: 'Performance and security hardening',
          description: 'Core Web Vitals engineering, caching, and a hardened security posture, so the site is quick and defensible.'
        },
        {
          title: 'Marketing empowerment',
          description: 'A clean, well-structured editing experience — often with a page builder configured properly — so your team ships pages and campaigns without a developer.'
        }
      ]
    },
    
    capabilities: {
      heading: 'WordPress Capabilities',
      items: [
        {
          service: 'Custom WordPress theme development',
          whatItIs: 'Lean, fast, brand-specific themes — no bloated templates.',
          businessImpact: 'Speed and stability by design; better conversion and rankings.'
        },
        {
          service: 'Headless WordPress',
          whatItIs: 'WordPress back end with a modern decoupled front end.',
          businessImpact: 'Maximum performance and flexibility where it pays off.'
        },
        {
          service: 'WordPress performance optimization',
          whatItIs: 'Core Web Vitals, caching, and speed engineering.',
          businessImpact: 'Recovers conversions and search visibility lost to slow pages.'
        },
        {
          service: 'Security hardening & maintenance',
          whatItIs: 'Hardening, monitoring, updates, and managed care.',
          businessImpact: 'Protects against breaches and the cost they bring.'
        },
        {
          service: 'WooCommerce development',
          whatItIs: 'Commerce on WordPress, built to convert.',
          businessImpact: 'Sell on WordPress without the typical performance penalty.'
        },
        {
          service: 'Custom plugin development',
          whatItIs: 'Bespoke functionality instead of bloated third-party plugins.',
          businessImpact: 'Capabilities you need without the sprawl that slows sites.'
        },
        {
          service: 'Migration & rebuilds',
          whatItIs: 'Escaping bad WordPress or moving onto it, with SEO preserved.',
          businessImpact: 'Modernize without losing traffic.'
        }
      ]
    },
    
    comparison: {
      heading: 'Why Companies Choose Us Over a Cheap WordPress Shop',
      intro: 'WordPress is cheap to do badly and the market reflects that. Here\'s the honest comparison.',
      options: [
        {
          option: 'Theme + plugins DIY',
          whereWorks: 'Tiny brochure site',
          whereFails: 'Speed, security, scale, manageability',
          ourPosition: 'Custom, lean, fast, secure by design'
        },
        {
          option: 'Cheap WordPress freelancer',
          whereWorks: 'Small sites, low stakes',
          whereFails: 'Performance, security, continuity, complex builds',
          ourPosition: 'Enterprise-capable team with redundancy'
        },
        {
          option: 'Page-builder-only agency',
          whereWorks: 'Quick simple sites',
          whereFails: 'Performance and custom functionality at scale',
          ourPosition: 'Proper engineering + marketing-friendly editing'
        },
        {
          option: 'Moving off WordPress entirely',
          whereWorks: 'Specific edge cases',
          whereFails: 'Often unnecessary cost and retraining',
          ourPosition: 'Right-sized — we fix WordPress when that\'s the smart call'
        }
      ]
    },
    
    process: {
      heading: 'From Audit to Optimization',
      steps: [
        {
          number: 1,
          title: 'Discovery & audit',
          description: 'Performance, security, and manageability audit; goals; traditional-vs-headless decision.'
        },
        {
          number: 2,
          title: 'Strategy',
          description: 'Scope governed by speed, security, and marketing-velocity goals.'
        },
        {
          number: 3,
          title: 'Architecture',
          description: 'Theme structure, plugin strategy, content model, and security plan.'
        },
        {
          number: 4,
          title: 'Design',
          description: 'Conversion-led UX with a clean, team-friendly editing experience.'
        },
        {
          number: 5,
          title: 'Development',
          description: 'Senior, lean build with working demos and SEO-safe migration.'
        },
        {
          number: 6,
          title: 'QA',
          description: 'Performance, security, accessibility, and device testing as a gate.'
        },
        {
          number: 7,
          title: 'Launch',
          description: 'Controlled cutover with redirects and monitoring — no traffic loss.'
        },
        {
          number: 8,
          title: 'Optimization & care',
          description: 'Ongoing performance, security, and managed maintenance.'
        }
      ]
    },
    
    outcome: {
      challenge: 'A content-driven mid-market company was on a bloated premium theme with thirty-plus plugins: slow, repeatedly flagged for security issues, and so brittle that marketing needed a developer for every page.',
      solution: 'We rebuilt on a lean custom theme, replaced redundant plugins with targeted custom code, hardened security, engineered Core Web Vitals, and configured a clean editing experience the marketing team could run independently.',
      metrics: [
        {
          kpi: 'Page load time',
          result: 'Cut by ~60%',
          whyItMatters: 'Better rankings and conversion; lower bounce'
        },
        {
          kpi: 'Plugins',
          result: '30+ → single digits',
          whyItMatters: 'Faster, more secure, far less fragile'
        },
        {
          kpi: 'Security incidents',
          result: 'Recurring → none',
          whyItMatters: 'Breach risk and firefighting eliminated'
        },
        {
          kpi: 'Marketing publish time',
          result: 'Developer-gated → self-serve',
          whyItMatters: 'Campaigns ship at marketing speed'
        }
      ]
    },
    
    businessCase: {
      heading: 'The WordPress Business Case',
      content: 'WordPress ROI comes from three places. Performance: faster pages recover the conversions and search traffic that slow sites lose — a direct revenue effect. Security: a hardened, maintained site avoids the substantial cost of a breach and the firefighting that follows. Velocity: a marketing team that ships independently moves at a multiple of the pace of one stuck in a developer queue — which, for a content-driven business, compounds directly into growth.',
      valueStreams: [
        'Performance (conversion and SEO gains from faster pages)',
        'Security (breach prevention and firefighting elimination)',
        'Velocity (marketing team independence and speed)',
        'Cost reduction (lower developer dependency and maintenance)'
      ]
    },
    
    faqs: [
      {
        question: 'Isn\'t WordPress slow and insecure?',
        answer: 'Badly built WordPress is — and that\'s most of it. Properly built WordPress, with a lean custom theme, disciplined plugins, performance engineering, and security hardening, is fast and secure. The platform isn\'t the problem; the typical build is. We build the version that performs.'
      },
      {
        question: 'Should we use WordPress or move to something else?',
        answer: 'For most content-driven and mid-market sites, a properly built WordPress is the right, cost-effective answer — it\'s flexible, your team likely knows it, and it avoids retraining and migration cost. We\'ll tell you honestly if your specific needs genuinely warrant a different platform, but we won\'t push you off WordPress to inflate a project.'
      },
      {
        question: 'What does a WordPress build cost?',
        answer: 'A custom WordPress build typically runs $10K–$40K; a complex, headless, or enterprise build $40K–$100K+. Cost follows scope and we size it to the return. You get a transparent estimate after a strategy call, and an audit shows the opportunity first.'
      },
      {
        question: 'Will our marketing team be able to manage it?',
        answer: 'Yes — that\'s a core design goal. We deliver a clean, well-structured editing experience, often with a properly configured page builder, so your team can create and update pages and campaigns without a developer. Empowering your team is part of the deliverable.'
      },
      {
        question: 'Can you fix or rebuild our existing WordPress site?',
        answer: 'Often, yes — and sometimes fixing is smarter than rebuilding. We audit first and tell you candidly whether a targeted fix or a rebuild gives the better return. Either way, we preserve your SEO and content.'
      },
      {
        question: 'Do we own the site, theme, and code?',
        answer: 'Completely — the theme, any custom plugins, the content, and the data are yours, with no lock-in. WordPress is open-source and we keep it that way: full control, take it anywhere. We keep the relationship on results.'
      }
    ],
    
    cta: {
      heading: 'Get the WordPress Site You Should Have Had',
      primary: 'Book a WordPress strategy call',
      secondary: 'Request a performance & security audit'
    },
    
    riskReversal: 'Builds are fixed-scope to a defined deliverable and price; managed care is month-to-month, retained on performance.',
    
    pricing: {
      range: '$10K–$100K+',
      note: 'Custom build: $10K–$40K; complex/headless/enterprise: $40K–$100K+'
    },
    
    internalLinks: ['/web-development-services', '/web-design-services', '/custom-web-development'],
    
    schema: {
      serviceType: 'WordPress Development',
      priceRange: '$10,000 - $100,000+',
      audience: 'Content-driven & Mid-market Businesses'
    }
  },

  // ------------------------------------------
  // 7. Web Design Services (UI/UX)
  // ------------------------------------------
  'web-design-services': {
    slug: 'web-design-services',
    title: 'Web Design Services (UI/UX)',
    metaDescription: 'Web design engineered for conversion, not compliments. UI/UX services grounded in research and testing to move business metrics, not just look good.',
    pageGoal: 'Convert buyers who think they need \'design\' into a conversion-and-revenue conversation; reframe design as a business lever',
    buyerPersona: 'Founders, marketing and product leaders who want a better-looking or better-converting site and may not yet frame it in revenue terms',
    uniquePositioning: 'We design for conversion and revenue, not awards — UI/UX engineered to move the business metrics that matter, backed by research and testing, not taste.',
    
    hero: {
      heading: 'Web Design Engineered for Conversion, Not Compliments',
      subheading: 'A beautiful site that doesn\'t convert is an expensive liability. We design UI and UX around the numbers your business runs on — conversion rate, lead quality, activation, retention — using research and testing, not taste. Design as a revenue lever, not decoration.',
      credibilityBar: [
        'Conversion-led UX',
        'Research & testing-based',
        'Accessible by standard',
        'Built to convert across devices',
        'Design you own'
      ],
      primaryCTA: 'Book a design strategy call',
      secondaryCTA: 'Request a UX & conversion teardown',
      socialProof: '[PLACEHOLDER: client logos / rating] · Representative work across SaaS, eCommerce, and B2B services.'
    },
    
    featuredAnswer: {
      question: 'What is web design (UI/UX)?',
      answer: 'Web design (UI/UX) is the design of how a website looks and works — the interface and the experience. For businesses, its value is measured in behavior: whether visitors convert, complete tasks, and return. Effective web design is a conversion discipline grounded in user research and testing, not an aesthetic exercise. The goal is a site that moves business metrics, not just one that looks good.'
    },
    
    problemSection: {
      heading: 'When \'It Looks Great\' Is Costing You Money',
      content: [
        'Plenty of good-looking sites convert badly, and the disconnect is expensive precisely because it\'s invisible — the site looks like a success while quietly underperforming. A hero section that wins design compliments but doesn\'t tell visitors what you do or why to act. A navigation organized around your org chart instead of the customer\'s intent. A form or checkout designed for visual balance rather than completion. A mobile experience treated as an afterthought when most of your traffic is on a phone.',
        'Design decisions are conversion decisions whether or not anyone treats them that way. A B2B site converting at 1.2% because the path to contact is unclear is leaving half its potential pipeline unrealized. A SaaS landing page that doesn\'t communicate value in five seconds loses the visitor before the product ever gets a chance. A confusing checkout abandons revenue at the final step. None of these show up as \'design problems\' — they show up as soft numbers no one connects back to the design.',
        'The cost of design-by-taste is the gap between what your traffic does and what it could do — and that gap is usually large enough to fund the redesign several times over.'
      ]
    },
    
    solutionSection: {
      heading: 'How We Design for the Number, Not the Mood Board',
      content: 'We treat design as applied behavioral engineering.',
      pillars: [
        {
          title: 'Research first',
          description: 'We design around real user intent and behavior — what visitors are trying to do and what stops them — not internal preference or trend.'
        },
        {
          title: 'Conversion-led structure',
          description: 'Every page is built around a clear job and a clear path to action, with hierarchy, messaging, and flow engineered to move the metric.'
        },
        {
          title: 'Tested, not guessed',
          description: 'We validate with prototypes and, where volume allows, testing — so design choices are decisions backed by evidence, not opinions defended in a meeting.'
        }
      ]
    },
    
    capabilities: {
      heading: 'Design Capabilities',
      items: [
        {
          service: 'Conversion-led web design',
          whatItIs: 'Full-site UI/UX engineered around conversion paths.',
          businessImpact: 'More revenue and leads from the same traffic.'
        },
        {
          service: 'UX research & strategy',
          whatItIs: 'User research, journey mapping, and information architecture.',
          businessImpact: 'Design grounded in real intent, not assumption.'
        },
        {
          service: 'UI design & design systems',
          whatItIs: 'Polished, consistent interfaces and reusable design systems.',
          businessImpact: 'Trust-building visuals and faster, cheaper future iteration.'
        },
        {
          service: 'Landing page & funnel design',
          whatItIs: 'High-intent pages engineered to convert.',
          businessImpact: 'Directly lifts campaign and demand-gen return.'
        },
        {
          service: 'Product & app UX',
          whatItIs: 'Activation- and retention-focused product design.',
          businessImpact: 'Better onboarding, engagement, and retention.'
        },
        {
          service: 'Conversion rate optimization',
          whatItIs: 'Testing-led optimization of the live experience.',
          businessImpact: 'Compounding gains from continuous improvement.'
        },
        {
          service: 'Accessibility & responsive design',
          whatItIs: 'Standards-compliant, fully responsive experiences.',
          businessImpact: 'Wider audience, lower legal risk, better conversion.'
        }
      ]
    },
    
    comparison: {
      heading: 'Why Companies Choose Us Over a Visual-Only Designer',
      intro: 'Most design options optimize for how it looks. Here\'s the honest comparison when you care how it performs.',
      options: [
        {
          option: 'Visual-only designer / studio',
          whereWorks: 'Brand and aesthetics',
          whereFails: 'Conversion, UX research, testing',
          ourPosition: 'Design measured on business metrics'
        },
        {
          option: 'Template / DIY design',
          whereWorks: 'Pre-revenue, minimal needs',
          whereFails: 'Differentiation and conversion at scale',
          ourPosition: 'Custom, research-led, conversion-engineered'
        },
        {
          option: 'Freelance designer',
          whereWorks: 'Small projects',
          whereFails: 'Strategy, testing, dev handoff, continuity',
          ourPosition: 'Full UX-to-build capability with redundancy'
        },
        {
          option: 'Design inside a dev shop',
          whereWorks: 'Convenience',
          whereFails: 'Often design as an afterthought',
          ourPosition: 'Design as a first-class conversion discipline'
        }
      ]
    },
    
    process: {
      heading: 'From Research to Optimization',
      steps: [
        {
          number: 1,
          title: 'Discovery & research',
          description: 'User research, behavior analysis, conversion goals, and a UX audit of the current experience.'
        },
        {
          number: 2,
          title: 'Strategy',
          description: 'Information architecture and conversion strategy governed by the metric to move.'
        },
        {
          number: 3,
          title: 'UX design',
          description: 'Wireframes and prototypes of the key flows — structure before surface.'
        },
        {
          number: 4,
          title: 'UI design',
          description: 'Polished, on-brand, accessible interface design and a design system.'
        },
        {
          number: 5,
          title: 'Validation',
          description: 'Prototype testing and, where volume allows, live testing before and after launch.'
        },
        {
          number: 6,
          title: 'Development handoff',
          description: 'Pixel-accurate, developer-ready specs — or we build it end to end.'
        },
        {
          number: 7,
          title: 'Launch',
          description: 'Instrumented launch so impact is measured from day one.'
        },
        {
          number: 8,
          title: 'Optimization',
          description: 'Ongoing CRO — compounding conversion gains over time.'
        }
      ]
    },
    
    outcome: {
      challenge: 'A B2B SaaS company had a recently redesigned site that looked modern but converted below its old one. The value proposition was unclear above the fold, the path to demo was buried, and the mobile experience was weak.',
      solution: 'We re-grounded the design in user research, rebuilt the homepage and key pages around a clear value proposition and an obvious path to demo, redesigned the mobile experience, and validated changes with testing.',
      metrics: [
        {
          kpi: 'Demo conversion rate',
          result: '~1.3% → ~2.4%',
          whyItMatters: 'Nearly doubled qualified demos from the same traffic'
        },
        {
          kpi: 'Bounce rate',
          result: 'Down materially',
          whyItMatters: 'Clearer value proposition held visitors'
        },
        {
          kpi: 'Mobile conversion',
          result: 'Up substantially',
          whyItMatters: 'Mobile traffic finally converting'
        },
        {
          kpi: 'Time to first meaningful action',
          result: 'Reduced',
          whyItMatters: 'Faster path to the action that matters'
        }
      ]
    },
    
    businessCase: {
      heading: 'The Design Business Case',
      content: 'Design ROI is conversion ROI, and it acts on the traffic you already pay for — which is what makes it efficient. Lifting a B2B site from 1.3% to 2.4% conversion can nearly double pipeline at zero additional acquisition cost. A clearer SaaS landing page raises the return on every marketing dollar. A better checkout recovers revenue lost at the final step. Because these gains apply to existing traffic, the payback is typically fast and the effect compounds with ongoing optimization.',
      valueStreams: [
        'Conversion lift (more revenue from existing traffic)',
        'Lead quality improvement (better targeting of high-value actions)',
        'Activation and retention (better product and service engagement)',
        'Acquisition efficiency (higher conversion lowers effective CAC)'
      ]
    },
    
    faqs: [
      {
        question: 'Isn\'t design just about looking good?',
        answer: 'Looking good builds trust, and trust converts — so aesthetics matter. But if a site looks great and converts poorly, the design has failed at its actual job. We design for behavior and measure the result, with aesthetics serving the outcome rather than replacing it. Pretty is necessary; it isn\'t sufficient.'
      },
      {
        question: 'How do you know your design will convert better?',
        answer: 'Because we ground it in user research and validate it with testing rather than defending opinions in a meeting. We instrument before and after so the impact is measured, not assumed — and where traffic volume allows, we test changes rather than betting the whole site on a redesign.'
      },
      {
        question: 'What does web design cost?',
        answer: 'A focused conversion-led design typically runs $10K–$40K; a larger site or product UX engagement $40K–$100K+. Cost follows scope and we size it to the conversion return. You get a transparent estimate after a strategy call, and a teardown shows the opportunity first.'
      },
      {
        question: 'Do you just design, or also build?',
        answer: 'Both. We can deliver developer-ready designs for your team, or design and build the site end to end — which avoids the quality loss that often happens in handoff. We\'ll recommend whichever fits your situation.'
      },
      {
        question: 'Will the design work on mobile?',
        answer: 'Yes — responsive, mobile-first design is standard, because most traffic is mobile and a weak mobile experience silently costs the majority of your conversions. We design and test across devices as a matter of course.'
      },
      {
        question: 'Do we own the designs?',
        answer: 'Completely — the design files, the design system, and the assets are yours, with no lock-in. Full control, use them anywhere. We keep the relationship by improving your numbers.'
      }
    ],
    
    cta: {
      heading: 'See the Conversion Your Design Is Leaving Behind',
      primary: 'Book a design strategy call',
      secondary: 'Request a UX & conversion teardown'
    },
    
    riskReversal: 'Design engagements are fixed-scope to defined deliverables; optimization is 30-day rolling, retained on measured conversion impact.',
    
    pricing: {
      range: '$10K–$100K+',
      note: 'Focused conversion-led design: $10K–$40K; larger site/product UX: $40K–$100K+'
    },
    
    internalLinks: ['/web-development-services', '/custom-web-development', '/web-application-development'],
    
    schema: {
      serviceType: 'Web Design (UI/UX)',
      priceRange: '$10,000 - $100,000+',
      audience: 'Founders, Marketing & Product Leaders'
    }
  },

  // ------------------------------------------
  // 8. Custom Web Development
  // ------------------------------------------
  'custom-web-development': {
    slug: 'custom-web-development',
    title: 'Custom Web Development',
    metaDescription: 'Custom web development for when off-the-shelf stops fitting. Bespoke platforms engineered to your workflows, scale, and differentiation.',
    pageGoal: 'Convert buyers whose needs exceed templates/platforms into a scoping engagement; justify custom over off-the-shelf in business terms',
    buyerPersona: 'Founders and operators whose workflows, scale, or differentiation can\'t be served by templates or off-the-shelf platforms',
    uniquePositioning: 'We build custom when — and only when — it earns its cost: bespoke platforms engineered to your exact workflows, scale, and differentiation, with the judgment to tell you when off-the-shelf is the smarter spend.',
    
    hero: {
      heading: 'Custom Web Development for When Off-the-Shelf Stops Fitting',
      subheading: 'Templates and platforms are the right answer until your workflows, scale, or differentiation outgrow them — then forcing a fit costs more than building right. We engineer bespoke platforms to your exact requirements, and we have the judgment to tell you when you don\'t need one.',
      credibilityBar: [
        'Built to your workflows',
        'Engineered for scale',
        'Full systems integration',
        'You own 100% of the code',
        'No lock-in'
      ],
      primaryCTA: 'Book a scoping consultation',
      secondaryCTA: 'Request a custom-vs-platform assessment',
      socialProof: '[PLACEHOLDER: client logos / rating] · Representative custom builds across SaaS, operations-heavy, and differentiated businesses.'
    },
    
    featuredAnswer: {
      question: 'What is custom web development?',
      answer: 'Custom web development is the building of a website or web application from the ground up to specific requirements, rather than using a template or off-the-shelf platform. It\'s justified when standard tools can\'t match your workflows, scale, or differentiation — the cost of forcing a fit then exceeds the cost of building right. The right partner builds custom only when it earns its return, and says so when it doesn\'t.'
    },
    
    problemSection: {
      heading: 'The Hidden Cost of Forcing an Off-the-Shelf Fit',
      content: [
        'There\'s a point where standard tools stop saving you money and start costing it — and most companies pass it without noticing. The workarounds pile up: a process that doesn\'t fit the software, so staff bridge the gap manually, every day. A platform bent into shape with so many add-ons that it\'s slower and more fragile than a custom build would have been. A ceiling on scale or capability that the off-the-shelf tool simply can\'t pass, quietly capping what the business can do.',
        'These costs are real but disguised as normal. The hours staff spend compensating for software that doesn\'t fit your workflow are a permanent operating tax. The deals or capabilities you can\'t pursue because the platform won\'t allow them are opportunity cost no one books. The eventual forced migration — when the stretched platform finally breaks — arrives at the worst possible time and costs more than building right would have.',
        'Custom isn\'t automatically the answer — over-building a bespoke system you didn\'t need wastes money just as surely. The real question is where your specific situation sits relative to that line, and that\'s a judgment, not a default.'
      ]
    },
    
    solutionSection: {
      heading: 'How We Decide — and Build — Custom',
      content: 'We start with the honest question most vendors skip: do you actually need custom?',
      pillars: [
        {
          title: 'The honest assessment',
          description: 'We assess whether your workflows, scale, and differentiation genuinely exceed what off-the-shelf can do. If a platform or a configured solution will serve you well, we\'ll tell you — even though it\'s a smaller engagement for us — because recommending unnecessary custom work is how trust is lost.'
        },
        {
          title: 'Workflow-exact engineering',
          description: 'When custom is justified, we build to earn its cost. The system fits how you actually work, eliminating the manual tax of ill-fitting software.'
        },
        {
          title: 'Architecture for scale',
          description: 'Built for where you\'re going, so it doesn\'t become the next forced migration. Full integration: connected to your existing stack so data flows instead of being re-keyed.'
        }
      ]
    },
    
    capabilities: {
      heading: 'Custom Capabilities',
      items: [
        {
          service: 'Custom web platforms',
          whatItIs: 'Bespoke sites and platforms built to your exact requirements.',
          businessImpact: 'Eliminates the operating tax of software that doesn\'t fit.'
        },
        {
          service: 'Custom web applications',
          whatItIs: 'Customer-facing and internal apps, portals, and tools.',
          businessImpact: 'Turns manual processes into scalable systems.'
        },
        {
          service: 'Workflow & process automation',
          whatItIs: 'Systems that automate the work staff do manually today.',
          businessImpact: 'Recovers staff time and reduces error.'
        },
        {
          service: 'Systems integration',
          whatItIs: 'Connecting your stack — CRM, ERP, data, internal APIs.',
          businessImpact: 'Ends data silos and re-keying.'
        },
        {
          service: 'API & backend engineering',
          whatItIs: 'Robust APIs and backends for complex needs.',
          businessImpact: 'A foundation that scales and integrates.'
        },
        {
          service: 'Custom CMS & admin tools',
          whatItIs: 'Tailored content and admin systems your team can run.',
          businessImpact: 'Control without developer dependency.'
        },
        {
          service: 'Legacy modernization',
          whatItIs: 'Replacing or rebuilding systems that have hit their ceiling.',
          businessImpact: 'Removes the constraint capping the business.'
        }
      ]
    },
    
    comparison: {
      heading: 'Why Companies Choose Us for Custom Work',
      intro: 'When you genuinely need custom, the question is who can deliver it with judgment and accountability. Here\'s the comparison.',
      options: [
        {
          option: 'Force-fitting a platform',
          whereWorks: 'Until you pass the fit line',
          whereFails: 'Workflow fit, scale, the manual tax',
          ourPosition: 'We assess the line honestly, then build right'
        },
        {
          option: 'Offshore custom build',
          whereWorks: 'Well-specified scope',
          whereFails: 'Architecture judgment, accountability',
          ourPosition: 'Senior-led, accountable, you own the result'
        },
        {
          option: 'Freelancer',
          whereWorks: 'Small custom jobs',
          whereFails: 'Scale, continuity, integration, bus factor',
          ourPosition: 'Team redundancy, integration depth, documentation'
        },
        {
          option: 'In-house build',
          whereWorks: 'Long-term core systems',
          whereFails: 'Hiring lag and opportunity cost',
          ourPosition: 'Immediate senior capacity; handoff when ready'
        }
      ]
    },
    
    process: {
      heading: 'From Assessment to Optimization',
      steps: [
        {
          number: 1,
          title: 'Discovery & assessment',
          description: 'Workflow, scale, and differentiation analysis; the honest custom-vs-platform decision; success metrics.'
        },
        {
          number: 2,
          title: 'Strategy',
          description: 'Scope and sequencing governed by ROI — build what earns its cost, in the right order.'
        },
        {
          number: 3,
          title: 'Architecture',
          description: 'Data model, integrations, and scale path designed first.'
        },
        {
          number: 4,
          title: 'Design',
          description: 'Workflow- and conversion-led UX for the actual users.'
        },
        {
          number: 5,
          title: 'Development',
          description: 'Senior-led, incremental engineering with working demos.'
        },
        {
          number: 6,
          title: 'QA',
          description: 'Functional, performance, security, and accessibility testing as a gate.'
        },
        {
          number: 7,
          title: 'Launch',
          description: 'Controlled, monitored deployment with rollback.'
        },
        {
          number: 8,
          title: 'Optimization',
          description: 'Post-launch iteration and support — protecting and growing the investment.'
        }
      ]
    },
    
    outcome: {
      challenge: 'An operations-heavy mid-market company was running a core process across spreadsheets and an off-the-shelf tool it had bent badly out of shape — slow, error-prone, and consuming significant staff time daily, with a hard ceiling on growth.',
      solution: 'We built a custom platform engineered to their actual workflow, automated the manual steps, and integrated it with their existing CRM and data systems so information flowed instead of being re-keyed.',
      metrics: [
        {
          kpi: 'Manual processing time',
          result: 'Cut by ~70%',
          whyItMatters: 'Significant staff time recovered, permanently'
        },
        {
          kpi: 'Error rate',
          result: 'Down sharply',
          whyItMatters: 'Fewer costly mistakes and rework'
        },
        {
          kpi: 'Scale ceiling',
          result: 'Removed',
          whyItMatters: 'Process now supports growth it previously capped'
        },
        {
          kpi: 'Data re-keying',
          result: 'Eliminated',
          whyItMatters: 'Systems integrated; one source of truth'
        }
      ]
    },
    
    businessCase: {
      heading: 'The Custom Business Case',
      content: 'Custom ROI is an operating-efficiency and capability story. Automating a process that consumes staff hours daily recovers that cost permanently — it compounds every day the system runs. Removing a scale or capability ceiling unlocks growth the old tool prevented, which can dwarf the build cost. Ending data re-keying and silos reduces error and the rework that follows. The investment is recovered from recovered time and unlocked capability, usually on a timeline we can estimate before you commit.',
      valueStreams: [
        'Operating-cost savings (recovered staff time, permanently)',
        'Error and rework reduction (quality and cost gains)',
        'Capacity recovered (staff time redirected to higher-value work)',
        'Growth unlocked (removing the ceiling that capped the business)'
      ]
    },
    
    faqs: [
      {
        question: 'Do we actually need custom, or will a platform work?',
        answer: 'Often a platform works — and we\'ll tell you when it does, even though that\'s a smaller project for us. Custom is justified only when your workflows, scale, or differentiation genuinely exceed what off-the-shelf can do. We assess that honestly first, because recommending unnecessary custom work is the fastest way to lose your trust and your money.'
      },
      {
        question: 'Isn\'t custom development expensive?',
        answer: 'It costs more upfront than a template — but the relevant comparison is total cost. The manual workarounds, capability ceilings, and eventual forced migration of an ill-fitting platform often cost far more over time than building right once. We size both sides of that comparison so the decision is grounded in numbers, not assumption.'
      },
      {
        question: 'What does a custom build cost?',
        answer: 'A focused custom site typically runs $15K–$50K; a custom web application or platform $50K–$150K+. Cost follows scope and we size it to the return. You get a transparent estimate after a scoping consultation.'
      },
      {
        question: 'How long does custom development take?',
        answer: 'A focused custom build is typically 8–16 weeks; a complex platform 3–6 months. We sequence so value ships in increments rather than one distant launch, with dates committed in the SOW.'
      },
      {
        question: 'What if our needs change during the build?',
        answer: 'They often do, and our process expects it — incremental delivery with working demos means you see and steer the build as it progresses, and a transparent change-control process handles evolving scope without surprises.'
      },
      {
        question: 'Do we own the code?',
        answer: 'Completely — all the code, infrastructure, and documentation, with no proprietary lock-in. You can take it in-house or move it anytime. With custom work especially, anything less would be unacceptable, and we agree.'
      }
    ],
    
    cta: {
      heading: 'Find Out Whether Custom Is the Right Call',
      primary: 'Book a scoping consultation',
      secondary: 'Request a custom-vs-platform assessment'
    },
    
    riskReversal: 'Engagements are fixed-scope to defined deliverables, or 30-day rolling for dedicated teams. You commit to value, not to a black box.',
    
    pricing: {
      range: '$15K–$150K+',
      note: 'Focused custom site: $15K–$50K; custom application/platform: $50K–$150K+'
    },
    
    internalLinks: ['/web-development-services', '/web-application-development', '/enterprise-web-development'],
    
    schema: {
      serviceType: 'Custom Web Development',
      priceRange: '$15,000 - $150,000+',
      audience: 'Founders & Operators with Unique Requirements'
    }
  },

  // ------------------------------------------
  // 9. Web Application Development
  // ------------------------------------------
  'web-application-development': {
    slug: 'web-application-development',
    title: 'Web Application Development',
    metaDescription: 'Web application development for software that runs your business. Customer portals, internal tools, dashboards, and workflow systems engineered to scale.',
    pageGoal: 'Convert buyers needing customer-facing or internal web apps, portals, and dashboards into scoping engagements',
    buyerPersona: 'Founders, product leaders, and operations executives who need functional software delivered over the web — portals, dashboards, internal tools, customer apps',
    uniquePositioning: 'We build web applications as operational and revenue infrastructure — portals, dashboards, and tools engineered for the workflows and scale your business runs on.',
    
    hero: {
      heading: 'Web Application Development for Software That Runs Your Business',
      subheading: 'When you need software — a customer portal, an internal tool, a dashboard, a workflow system — delivered over the web, the build quality determines whether it accelerates the business or becomes a liability. We engineer web applications for the workflows, scale, and reliability your operations and customers depend on.',
      credibilityBar: [
        'Customer & internal apps',
        'Engineered for scale',
        'Secure & integrated',
        'Senior-led',
        'You own 100% of the code'
      ],
      primaryCTA: 'Book an application scoping call',
      secondaryCTA: 'Request a web-app architecture guide',
      socialProof: '[PLACEHOLDER: client logos / rating] · Representative work across portals, dashboards, internal tools, and customer-facing apps.'
    },
    
    featuredAnswer: {
      question: 'What is web application development?',
      answer: 'Web application development is the engineering of interactive software delivered through a browser — customer portals, dashboards, internal tools, and workflow systems — rather than static websites. For businesses, the value is operational and financial: applications that automate work, serve customers, and scale. The right partner engineers for the workflow, scale, security, and reliability the application\'s role demands.'
    },
    
    problemSection: {
      heading: 'When the Application Is the Bottleneck',
      content: [
        'A web application sits at the center of how work gets done or how customers are served — which means when it\'s built poorly, it becomes the constraint on everything around it. An internal tool too clunky to use, so staff avoid it and revert to manual work. A customer portal that frustrates users into support tickets or churn. A dashboard that can\'t handle the data volume the business now generates. An application that can\'t integrate, so it creates a new silo instead of removing one.',
        'The cost lands on operations and customers directly. A clunky internal application is staff time wasted and adoption lost — you paid to build it and you\'re paying again in the manual work it failed to replace. A poor customer-facing app drives support cost and churn, both of which hit revenue. An application that can\'t scale forces a rebuild exactly when usage is growing, which is the most expensive possible moment.',
        'Application quality is operational leverage: a well-built one compounds in saved time, served customers, and unlocked capability, while a poorly built one compounds in friction, cost, and the eventual rebuild.'
      ]
    },
    
    solutionSection: {
      heading: 'How We Engineer Applications That Hold Up',
      content: 'We build web applications as engineering, not as websites with extra buttons.',
      pillars: [
        {
          title: 'Workflow-first design',
          description: 'The application fits how people actually work or what customers actually need, so it gets adopted and used rather than avoided.'
        },
        {
          title: 'Architecture for scale and reliability',
          description: 'Built for the data volume, user load, and uptime its role demands, so it doesn\'t buckle as usage grows or become the next forced rebuild.'
        },
        {
          title: 'Security and integration',
          description: 'Secured to its sensitivity and connected to your stack, so it removes silos instead of creating them.'
        }
      ]
    },
    
    capabilities: {
      heading: 'Application Capabilities',
      items: [
        {
          service: 'Customer portals',
          whatItIs: 'Secure, self-service portals for customers and partners.',
          businessImpact: 'Lowers support cost; improves customer experience.'
        },
        {
          service: 'Internal tools & dashboards',
          whatItIs: 'Operational software and data dashboards for your team.',
          businessImpact: 'Automates work and surfaces decisions.'
        },
        {
          service: 'Workflow & process applications',
          whatItIs: 'Systems that run and automate business processes.',
          businessImpact: 'Recovers staff time and reduces error.'
        },
        {
          service: 'Customer-facing web apps',
          whatItIs: 'Interactive applications your customers use directly.',
          businessImpact: 'New capability, engagement, and revenue.'
        },
        {
          service: 'Data & analytics applications',
          whatItIs: 'Apps that turn your data into usable insight.',
          businessImpact: 'Better, faster decisions from your own data.'
        },
        {
          service: 'API & backend engineering',
          whatItIs: 'Robust APIs and backends powering the application layer.',
          businessImpact: 'A scalable, integratable foundation.'
        },
        {
          service: 'Progressive web apps',
          whatItIs: 'App-like web experiences without app-store friction.',
          businessImpact: 'Reach and engagement without native-app overhead.'
        }
      ]
    },
    
    comparison: {
      heading: 'Why Companies Choose Us for Application Work',
      intro: 'Application engineering rewards judgment and punishes shortcuts. Here\'s the honest comparison.',
      options: [
        {
          option: 'No-code / off-the-shelf',
          whereWorks: 'Simple, standard needs',
          whereFails: 'Custom workflows, scale, integration',
          ourPosition: 'Engineered to your workflow and scale'
        },
        {
          option: 'Offshore build',
          whereWorks: 'Well-specified scope',
          whereFails: 'Architecture judgment, reliability, accountability',
          ourPosition: 'Senior-led, accountable, reliable'
        },
        {
          option: 'Freelancer',
          whereWorks: 'Small apps',
          whereFails: 'Scale, security, continuity, bus factor',
          ourPosition: 'Team redundancy, security, documentation'
        },
        {
          option: 'In-house build',
          whereWorks: 'Long-term core software',
          whereFails: 'Hiring lag, opportunity cost',
          ourPosition: 'Immediate senior capacity; handoff when ready'
        }
      ]
    },
    
    process: {
      heading: 'From Discovery to Optimization',
      steps: [
        {
          number: 1,
          title: 'Discovery',
          description: 'Workflow and user needs, scale and reliability requirements, integration map, and success metrics.'
        },
        {
          number: 2,
          title: 'Strategy & scope',
          description: 'A focused first version that proves core value, with a scale path it won\'t violate.'
        },
        {
          number: 3,
          title: 'Architecture',
          description: 'Data model, scale, security, and integration designed first.'
        },
        {
          number: 4,
          title: 'Design',
          description: 'Workflow- and usability-led UX for the actual users.'
        },
        {
          number: 5,
          title: 'Development',
          description: 'Senior-led, incremental engineering with working demos and tight feedback loops.'
        },
        {
          number: 6,
          title: 'QA',
          description: 'Functional, performance, security, and accessibility testing as a gate.'
        },
        {
          number: 7,
          title: 'Launch',
          description: 'Controlled, monitored deployment with rollback and analytics.'
        },
        {
          number: 8,
          title: 'Optimization',
          description: 'Post-launch iteration, scaling, and support.'
        }
      ]
    },
    
    outcome: {
      challenge: 'A growing services company served customers through email and manual processes that didn\'t scale, driving rising support load and a customer experience that was starting to cost retention.',
      solution: 'We built a secure customer portal that automated the highest-volume requests, integrated it with their internal systems so staff and customers saw one source of truth, and engineered it to scale with their customer base.',
      metrics: [
        {
          kpi: 'Support ticket volume',
          result: 'Cut by ~50%',
          whyItMatters: 'Lower support cost; staff freed for higher-value work'
        },
        {
          kpi: 'Customer self-service',
          result: 'Manual → 24/7 self-serve',
          whyItMatters: 'Better experience; higher retention'
        },
        {
          kpi: 'Process automation',
          result: 'Significant manual work removed',
          whyItMatters: 'Operating cost reduced as volume grew'
        },
        {
          kpi: 'Scale',
          result: 'Built for growth',
          whyItMatters: 'Handles a growing customer base without rebuild'
        }
      ]
    },
    
    businessCase: {
      heading: 'The Application Business Case',
      content: 'Application ROI is operational leverage made measurable. A customer portal that cuts support volume in half lowers a cost line permanently while improving the experience that drives retention. An internal tool that automates manual work recovers staff time every day it runs. A data application that speeds decisions improves outcomes across whatever it touches. Because these effects compound daily, a well-built application typically recovers its cost from operating savings and capability gains on a timeline we can estimate up front.',
      valueStreams: [
        'Support and operating cost reduction',
        'Staff time recovered (automation of manual work)',
        'Retention and experience gains',
        'New capability or revenue (unlocking what wasn\'t possible)'
      ]
    },
    
    faqs: [
      {
        question: 'What\'s the difference between a website and a web application?',
        answer: 'A website presents information; a web application does work — customers and staff interact with it to accomplish tasks (a portal, a dashboard, a workflow tool). Applications demand more from architecture, security, and reliability because people depend on them operationally, which is why build quality matters far more than it does for a marketing site.'
      },
      {
        question: 'Should we build a full application or start smaller?',
        answer: 'Start with a focused first version that proves the core value and gets into users\' hands — on an architecture that scales when it works. The trap is a big-bang build that\'s wrong in expensive ways no one discovers until launch. We scope a real, useful first version and sequence the rest against what usage teaches us.'
      },
      {
        question: 'What does a web application cost?',
        answer: 'A focused application typically runs $25K–$75K; a complex portal or platform $75K–$250K+. Cost follows scope and we size it to the operational return. You get a transparent estimate after a scoping call.'
      },
      {
        question: 'Will it scale as our usage grows?',
        answer: 'Yes — scale and reliability are designed in from the first architectural decision, because an application that buckles as usage grows forces a rebuild at the worst possible moment. We engineer for the load and uptime the application\'s role demands.'
      },
      {
        question: 'Can it integrate with our existing systems?',
        answer: 'Yes — integration is central, so the application removes silos rather than creating one. We connect it to your CRM, ERP, data, and internal systems so information flows and isn\'t re-keyed.'
      },
      {
        question: 'Do we own the application and code?',
        answer: 'Completely — all code, infrastructure, and documentation, with full handoff and no lock-in. For software your operations depend on, anything less would be unacceptable, and we agree.'
      }
    ],
    
    cta: {
      heading: 'Scope the Application Before You Build It',
      primary: 'Book an application scoping call',
      secondary: 'Request a web-app architecture guide'
    },
    
    riskReversal: 'Builds are fixed-scope to defined deliverables, or 30-day rolling for dedicated teams — you commit to value delivered, not to a black box.',
    
    pricing: {
      range: '$25K–$250K+',
      note: 'Focused application: $25K–$75K; complex portal/platform: $75K–$250K+'
    },
    
    internalLinks: ['/web-development-services', '/saas-development', '/custom-web-development'],
    
    schema: {
      serviceType: 'Web Application Development',
      priceRange: '$25,000 - $250,000+',
      audience: 'Founders, Product Leaders & Operations Executives'
    }
  }
};

// Helper function to get all service slugs
export function getAllServiceSlugs(): string[] {
  return Object.keys(serviceData);
}

// Helper function to get service by slug
export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return serviceData[slug];
}