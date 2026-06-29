// data/resources/faqs/faqs.ts

export interface FAQ {
  question: string;
  answer: string;
  meta: string;
  popular: boolean;
}

export const faqs: FAQ[] = [
  {
    question: "How do you decide which problems to solve first?",
    answer:
      "We map opportunities across impact, feasibility, and effort, then prototype the riskiest assumption within 72 hours to make sure we are shipping momentum, not guesswork.",
    meta: "Discovery",
    popular: true,
  },
  {
    question: "What does collaboration look like once we start?",
    answer:
      "A dedicated trio of design, engineering, and strategy meets daily in a shared async dashboard. Decisions are recorded in-line, so the team, stakeholders, and audit trail stay perfectly aligned.",
    meta: "Collaboration",
    popular: true,
  },
  {
    question: "Can you adapt to an existing design system or stack?",
    answer:
      "Yes. We map tokens, components, and build steps into our pipeline on day one. If a gap appears, we patch the system with regression tests so velocity never compromises fidelity.",
    meta: "Systems",
    popular: false,
  },
  {
    question: "How is quality validated before release?",
    answer:
      "Accessibility sweeps, automated visual diffs, and performance budgets run on every merge. We ship only after the experience hits the expected thresholds on real devices.",
    meta: "Quality",
    popular: true,
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Most projects range from 4-12 weeks depending on complexity. We work in agile sprints, delivering working software every 2 weeks so you can see progress continuously.",
    meta: "Process",
    popular: false,
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes, we offer flexible maintenance packages including bug fixes, security updates, performance monitoring, and feature enhancements. Plans start at $500/month.",
    meta: "Support",
    popular: false,
  },
  {
    question: "What happens if I need to make changes after launch?",
    answer:
      "We include 30 days of post-launch support for any critical fixes. For new features or enhancements, we can scope them as part of a separate phase or ongoing retainer.",
    meta: "Support",
    popular: false,
  },
  {
    question: "How do you handle data privacy and security?",
    answer:
      "We take security seriously. All data is encrypted at rest and in transit. We sign NDAs, follow GDPR/CCPA compliance, and can work within your security framework.",
    meta: "Security",
    popular: false,
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. We integrate seamlessly with your in-house team, working alongside your developers, designers, and product managers. We're flexible in our collaboration style.",
    meta: "Collaboration",
    popular: false,
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have deep expertise in FinTech, HealthTech, SaaS, E-commerce, and Enterprise software. Our approach adapts to your specific industry needs and regulations.",
    meta: "Discovery",
    popular: false,
  },
  {
    question: "Do you provide training for our team?",
    answer:
      "Yes, we provide comprehensive training sessions, documentation, and knowledge transfer to ensure your team is confident in managing and extending the solution.",
    meta: "Support",
    popular: false,
  },
];

export const categories = [
  { id: "all", name: "All", icon: "📋" },
  { id: "Discovery", name: "Discovery", icon: "🔍" },
  { id: "Collaboration", name: "Collaboration", icon: "🤝" },
  { id: "Systems", name: "Systems", icon: "⚙️" },
  { id: "Quality", name: "Quality", icon: "✅" },
  { id: "Process", name: "Process", icon: "📊" },
  { id: "Support", name: "Support", icon: "🛟" },
  { id: "Security", name: "Security", icon: "🔒" },
];

export const faqStats = {
  totalQuestions: 50,
  satisfactionRate: 98,
  averageRating: 4.8,
  supportAvailable: "24/7",
};

// Helper function to get icon based on FAQ category
export function getFAQIcon(meta: string): string {
  const iconMap: Record<string, string> = {
    "Discovery": "🔍",
    "Collaboration": "🤝",
    "Systems": "⚙️",
    "Quality": "✅",
    "Process": "📊",
    "Support": "🛟",
    "Security": "🔒",
  };
  return iconMap[meta] || "❓";
}

export function getFAQsByCategory(categoryId: string) {
  if (categoryId === "all") return faqs;
  return faqs.filter((faq) => faq.meta === categoryId);
}

export function getPopularFAQs() {
  return faqs.filter((faq) => faq.popular).slice(0, 3);
}

export function getCategoryCount(categoryId: string) {
  if (categoryId === "all") return faqs.length;
  return faqs.filter((f) => f.meta === categoryId).length;
}

export function searchFAQs(query: string) {
  const term = query.toLowerCase().trim();
  if (!term) return faqs;
  return faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(term) ||
      faq.answer.toLowerCase().includes(term)
  );
}