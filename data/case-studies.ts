// data/resources/case-studies/case-studies.ts

export const caseStudies = [
  {
    id: "proptech-platform",
    slug: "proptech-build-to-rent-portfolio-management",
    icon: "🏗️",
    category: "PropTech",
    location: "UK",
    title: "PropTech Build-to-Rent Portfolio Management Platform — UK Institutional Landlord",
    description: "A UK institutional landlord managing 4,200 build-to-rent units across 18 developments wanted a unified portfolio management system.",
    techStack: ["React", "Node.js/Fastify", "PostgreSQL", "DocuSign", "Ofgem DCC API", "Vaillant API", "Homes England API", "AWS eu-west-2"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    
    challenge: "A UK institutional landlord managing 4,200 build-to-rent units across 18 developments wanted a unified portfolio management platform — replacing five separate systems (Fixflo for maintenance, Yardi for accounting, Excel for void management, paper tenancy files, and a bespoke but unmaintained application for reporting). RICS code for leasing, Renters' Rights Bill 2024 compliance (decent homes standard, rent increase restrictions), UK GDPR for tenant data, and Homes England reporting (for affordable housing units) were the requirements. Budget: £140,000.",
    
    approach: [
      {
        title: "Tenancy Lifecycle Management",
        description: "Build-to-rent tenancy lifecycle: enquiry → reference → tenancy agreement → occupancy → rent collection → maintenance → renewal/checkout."
      },
      {
        title: "Digital Tenancy Agreement",
        description: "DocuSign eSignature, tenancy terms inline (no PDF download required — accessibility-first)."
      },
      {
        title: "Renters' Rights Bill 2024 Compliance",
        description: "Periodic tenancy by default (no fixed-term ASTs for BTR), rent increase process (Section 13 notice with prescribed 2-month notice period), and grounds for possession (grounds 1–17 with landlord obligation evidence requirements)."
      },
      {
        title: "IoT Sensor Integration",
        description: "Smart meters (Ofgem DCC API for energy consumption), boiler service alerts (connected boilers — Vaillant/Worcester Bosch API), and water leak sensors (push notifications)."
      },
      {
        title: "Predictive Maintenance Algorithm",
        description: "Boiler service history + average service interval + last service date = predicted next service date."
      },
      {
        title: "Void Management",
        description: "Unit checkout → automated check schedule (electrical test, gas safety, EPC, inventory check) → contractor booking."
      },
      {
        title: "RICS Decent Homes Standard",
        description: "Automated compliance checklist per unit."
      },
      {
        title: "Homes England Affordable Housing Reporting",
        description: "Homes England SOAHP (Shared Ownership and Affordable Homes Programme): affordable units within BTR development require quarterly reporting to Homes England. Data: unit type, tenure, rent (vs market rent — affordability calculation), and occupation status."
      },
      {
        title: "Automated Data Extraction",
        description: "Homes England Data Collections system: automated data extract in Homes England-specified format, uploaded via API. Rent to market ratio automated calculation per quarter — flag units drifting above Homes England affordability threshold."
      },
      {
        title: "Data Privacy & Compliance",
        description: "Tenant data in BTR is highly sensitive (home address, rent payment history, financial referencing data, maintenance request content). Legal basis: contract performance (tenancy agreement). Retention: tenancy data retained 6 years post-tenancy (Limitation Act 1980 — potential claims period)."
      },
      {
        title: "Tenant Portal",
        description: "Tenant can view their own data, download documents, and request erasure (subject to legal retention obligations). Subject access requests: automated DSAR export (all tenant data in one PDF within 30 days)."
      }
    ],
    
    results: [
      "Platform live at 20 weeks, £130,000 — under budget.",
      "Five systems replaced by one.",
      "Maintenance request resolution time: 8.4 days → 4.1 days.",
      "Void turnaround time: 23 days → 11 days.",
      "Homes England reporting: automated — previously 3 days/quarter.",
      "Renters' Rights Bill compliance: legal review confirmed all processes compliant.",
      "Tenant satisfaction NPS: 52 (from 34 pre-platform).",
      "RICS inspection: portfolio management cited as best practice."
    ],
    
    testimonial: {
      quote: "Maintenance resolution from 8.4 days to 4.1 days — that is the tenant satisfaction metric. Void turnaround from 23 to 11 days — at £1,800/month average rent, that is £720 per unit recovered. Homes England automated reporting saving 3 days per quarter. Renters' Rights Bill compliance legal review confirmed — we were ready before the Act came into force.",
      author: "Chief Operating Officer, UK Institutional BTR Landlord (name withheld)"
    },
    
    projectDetails: {
      sector: "PropTech",
      country: "UK",
      status: "On Time",
      contract: "Fixed Price",
      techStackCount: "8 Technologies",
      readingTime: "6 min",
      ipOwnership: "100% transferred",
      lastUpdated: "August 2025",
      writtenBy: "ClickMasters Case Study Team",
      reviewedBy: "James Whitmore, CTO"
    },
    
    complianceStandards: [
      "Renters' Rights Bill 2024",
      "RICS decent homes standard",
      "Homes England SOAHP",
      "UK GDPR",
      "Cyber Essentials"
    ]
  },
  {
    id: "fintech-wealth",
    slug: "fintech-wealth-management-platform",
    icon: "💰",
    category: "FinTech",
    location: "UK",
    title: "FinTech Wealth Management Platform — UK Discretionary Investment Manager",
    description: "A UK discretionary investment manager with £840M AUM and 1,400 client portfolios needed to replace their legacy system.",
    techStack: ["React", "Node.js/Fastify", "PostgreSQL", "Refinitiv (LSEG) Data API", "Bloomberg API", "AWS"],
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    
    challenge: "A UK discretionary investment manager with £840M in Assets Under Management and 1,400 client portfolios was struggling with a legacy system that couldn't handle real-time data processing, automated rebalancing, or compliance reporting. They needed a modern wealth management platform that could integrate with Refinitiv data, provide real-time portfolio analytics, and automate regulatory reporting to the FCA.",
    
    approach: [
      {
        title: "Real-time Portfolio Management",
        description: "Built a modern portfolio management system with real-time data integration from Refinitiv (LSEG) for live market data, pricing, and analytics."
      },
      {
        title: "Automated Rebalancing",
        description: "Implemented automated portfolio rebalancing algorithms that trigger when portfolios drift beyond predefined thresholds, reducing manual intervention by 85%."
      },
      {
        title: "Client Portal",
        description: "Developed a secure client portal allowing 1,400 clients to view their portfolio performance, generate reports, and communicate with their advisors."
      },
      {
        title: "Regulatory Compliance",
        description: "Built automated reporting engine that generates MiFID II and FCA required reports, reducing compliance team workload by 70%."
      }
    ],
    
    results: [
      "Platform deployed in 16 weeks, £160,000 — 10% under budget.",
      "Portfolio rebalancing time reduced from 3 days to 15 minutes.",
      "Client satisfaction score increased from 72 to 89.",
      "Regulatory reporting time reduced from 5 days to 2 hours.",
      "Assets Under Management grew by 22% within 6 months.",
      "Operational efficiency improved by 65%."
    ],
    
    testimonial: {
      quote: "The new platform has transformed our business. We can now rebalance portfolios in real-time, our clients have unprecedented visibility into their investments, and we've reduced our operational costs by 40%. This is exactly what we needed to compete in today's market.",
      author: "Head of Investments, UK Discretionary Investment Manager"
    },
    
    projectDetails: {
      sector: "FinTech",
      country: "UK",
      status: "On Time",
      contract: "Fixed Price",
      techStackCount: "6 Technologies",
      readingTime: "5 min",
      ipOwnership: "100% transferred",
      lastUpdated: "August 2025",
      writtenBy: "ClickMasters Case Study Team",
      reviewedBy: "James Whitmore, CTO"
    },
    
    complianceStandards: [
      "FCA Regulations",
      "MiFID II",
      "UK GDPR",
      "Financial Services Act"
    ]
  },
  {
    id: "govtech-housing",
    slug: "govtech-housing-allocations-platform",
    icon: "🏛️",
    category: "GovTech",
    location: "UK",
    title: "GovTech Local Authority Housing Allocations Platform — UK District Council",
    description: "A UK District Council managing 4,800 properties (council and housing association) with 3,400 applicants on the housing register.",
    techStack: ["React", "GOV.UK Design System", "Node.js/Fastify", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&h=400&fit=crop",
    
    challenge: "A UK District Council managing 4,800 properties and 3,400 housing register applicants was using a manual, paper-based allocation process that was slow, error-prone, and lacked transparency. They needed a digital platform that could automate housing allocations, ensure fairness, and provide real-time visibility to applicants while complying with the Local Government Act and Data Protection regulations.",
    
    approach: [
      {
        title: "Digital Housing Register",
        description: "Created a digital housing register with online applications, document uploads, and automated eligibility checking."
      },
      {
        title: "Automated Allocation Engine",
        description: "Built a rules-based allocation engine that automatically matches applicants to properties based on priority, eligibility, and location preferences."
      },
      {
        title: "Applicant Portal",
        description: "Developed a self-service portal where applicants can check their position, update their details, and view property offers."
      },
      {
        title: "Reporting Dashboard",
        description: "Built a real-time dashboard for council staff to monitor allocations, waiting lists, and key performance indicators."
      }
    ],
    
    results: [
      "Allocation time reduced from 14 days to 3 days.",
      "Manual data entry reduced by 95%.",
      "Applicant satisfaction increased from 45% to 82%.",
      "Transparency improved with real-time tracking.",
      "Staff productivity increased by 70%.",
      "Complaints reduced by 60%."
    ],
    
    testimonial: {
      quote: "This platform has completely transformed how we manage housing allocations. What used to take weeks now happens in days. Our applicants can track their progress, and our staff can focus on helping people rather than pushing paper.",
      author: "Housing Director, UK District Council"
    },
    
    projectDetails: {
      sector: "GovTech",
      country: "UK",
      status: "On Time",
      contract: "Fixed Price",
      techStackCount: "4 Technologies",
      readingTime: "5 min",
      ipOwnership: "100% transferred",
      lastUpdated: "August 2025",
      writtenBy: "ClickMasters Case Study Team",
      reviewedBy: "James Whitmore, CTO"
    },
    
    complianceStandards: [
      "Local Government Act",
      "Data Protection Act 2018",
      "UK GDPR",
      "Equalities Act"
    ]
  },
  {
    id: "healthtech-frailty",
    slug: "healthtech-frailty-assessment-tool",
    icon: "🏥",
    category: "HealthTech",
    location: "UK",
    title: "HealthTech NHS Frailty Assessment Digital Tool — Community Trust",
    description: "An NHS Community Trust providing frailty services to a population of 420,000 adults over 65 wanted to digitise frailty assessments.",
    techStack: ["React", "GOV.UK/NHS Design System", "Node.js/Fastify", "PostgreSQL", "HL7 FHIR", "NHS API"],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    
    challenge: "An NHS Community Trust serving 420,000 adults over 65 was using paper-based frailty assessments that were inconsistent, time-consuming, and difficult to track. They needed a digital tool that could standardize assessments, provide clinical decision support, and integrate with existing NHS systems while complying with NHS Digital standards and UK GDPR.",
    
    approach: [
      {
        title: "Digital Frailty Assessment",
        description: "Developed a digital frailty assessment tool using NHS-approved clinical frameworks (Electronic Frailty Index, Rockwood Frailty Scale)."
      },
      {
        title: "Clinical Decision Support",
        description: "Implemented automated risk stratification and care pathway recommendations based on assessment results."
      },
      {
        title: "Integration with NHS Systems",
        description: "Built APIs to integrate with NHS Spine, GP systems, and hospital discharge data for comprehensive patient records."
      },
      {
        title: "Mobile Assessment",
        description: "Created a mobile-optimized assessment tool for community healthcare professionals to use during home visits."
      }
    ],
    
    results: [
      "Assessment time reduced from 45 minutes to 15 minutes.",
      "Paper usage eliminated (saving 24,000 sheets annually).",
      "Frailty identification accuracy improved by 40%.",
      "Early intervention increased by 55%.",
      "Hospital admissions reduced by 18%.",
      "Patient satisfaction score: 92%."
    ],
    
    testimonial: {
      quote: "This tool has revolutionized how we identify and manage frailty in our community. Our clinicians can now make faster, more accurate assessments, and we're catching frailty earlier than ever before. The integration with NHS systems has been seamless.",
      author: "Clinical Lead, NHS Community Trust"
    },
    
    projectDetails: {
      sector: "HealthTech",
      country: "UK",
      status: "On Time",
      contract: "Fixed Price",
      techStackCount: "6 Technologies",
      readingTime: "5 min",
      ipOwnership: "100% transferred",
      lastUpdated: "August 2025",
      writtenBy: "ClickMasters Case Study Team",
      reviewedBy: "James Whitmore, CTO"
    },
    
    complianceStandards: [
      "NHS Digital Standards",
      "UK GDPR",
      "Data Security and Protection Toolkit",
      "Clinical Safety (DCB0129)"
    ]
  },
  {
    id: "ecommerce-fashion",
    slug: "ecommerce-fashion-marketplace-platform",
    icon: "👗",
    category: "eCommerce",
    location: "UK",
    title: "eCommerce Fashion Marketplace Platform — UK Multi-Brand Retailer",
    description: "A UK multi-brand fashion retailer with 340 independent designer brands, 2.4 million registered customers, and complex inventory management.",
    techStack: ["Next.js App Router", "React", "Shopify Plus Storefront API", "Stripe Connect", "AWS", "Redis"],
    imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop",
    
    challenge: "A UK multi-brand fashion retailer with 340 independent designer brands and 2.4 million customers needed a marketplace platform that could handle complex inventory management (multi-vendor, multi-warehouse), provide a seamless shopping experience, and automate payments and commissions while managing the complexity of 340 independent sellers with their own inventory, pricing, and fulfillment requirements.",
    
    approach: [
      {
        title: "Multi-Vendor Marketplace",
        description: "Built a marketplace platform where 340 independent brands can manage their own inventory, pricing, and shipping."
      },
      {
        title: "Smart Inventory Management",
        description: "Implemented real-time inventory sync across multiple warehouses and sellers with automated stock alerts."
      },
      {
        title: "Automated Payments & Commission",
        description: "Integrated Stripe Connect for automated seller payouts, commission calculations, and tax handling."
      },
      {
        title: "Personalized Shopping Experience",
        description: "Developed AI-powered product recommendations and personalized shopping journeys for 2.4M customers."
      },
      {
        title: "Mobile-First Design",
        description: "Created a mobile-first responsive platform with 60% of users shopping on mobile devices."
      }
    ],
    
    results: [
      "Platform launched in 22 weeks, £210,000 — on budget.",
      "2.4M registered customers onboarded.",
      "Average order value increased by 35%.",
      "Seller satisfaction score: 94%.",
      "Mobile conversion rate increased by 45%.",
      "Annual GMV reached £48M.",
      "Return rate reduced from 18% to 11%."
    ],
    
    testimonial: {
      quote: "This platform has been a game-changer for our business. We've been able to onboard 340 brands, manage complex inventory across multiple warehouses, and provide a seamless experience for 2.4M customers. The automated payments and commission system has eliminated manual reconciliation work entirely.",
      author: "Chief Operating Officer, UK Multi-Brand Fashion Retailer"
    },
    
    projectDetails: {
      sector: "eCommerce",
      country: "UK",
      status: "On Time",
      contract: "Fixed Price",
      techStackCount: "6 Technologies",
      readingTime: "6 min",
      ipOwnership: "100% transferred",
      lastUpdated: "August 2025",
      writtenBy: "ClickMasters Case Study Team",
      reviewedBy: "James Whitmore, CTO"
    },
    
    complianceStandards: [
      "UK Consumer Rights Act",
      "UK GDPR",
      "PCI DSS Level 1",
      "Distance Selling Regulations"
    ]
  }
];