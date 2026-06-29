// data/resources/testimonials/testimonials.ts
import { StaticImageData } from 'next/image';
import michelChen from "@/assets/testimonials/michel-chen.avif";
import jessica from "@/assets/testimonials/jessica.avif";
import williamsCarter from "@/assets/testimonials/williams carter.avif";
import sarahCarter from "@/assets/testimonials/sarah carter.avif";
import photo from "@/assets/testimonials/photo-1507003211169-0a1dd7228f2d.avif";
import emily from "@/assets/testimonials/emily.avif";

export interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: StaticImageData; // Changed from string to StaticImageData
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  rating?: number;
  company?: string;
  industry?: string;
  useCase?: string;
  featured?: boolean;
  date?: string;
  videoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Michael Chen",
    title: "Senior Software Engineer, Cloud Infrastructure",
    description: "Working with this team completely changed our infrastructure game. The support and expertise were incredible. They delivered beyond our expectations and helped us scale to millions of users.",
    imageUrl: michelChen,
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
    rating: 5,
    company: "CloudTech Inc.",
    industry: "Technology",
    useCase: "Infrastructure Scaling",
    featured: true,
    date: "2024-01-15",
  },
  {
    name: "Jessica Roberts",
    title: "Lead Data Scientist, InsightX",
    description: "The data analytics platform they built gave our team the confidence and tools needed for true data-driven decisions. Their dashboarding capabilities went above and beyond our expectations.",
    imageUrl: jessica,
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
    rating: 5,
    company: "InsightX Analytics",
    industry: "Data Science",
    useCase: "Analytics Platform",
    featured: true,
    date: "2024-02-01",
  },
  {
    name: "William Carter",
    title: "VP Product, NovaLabs",
    description: "NovaLabs helped our products find the perfect market fit. Their engineering team exceeded every delivery milestone and provided exceptional technical leadership.",
    imageUrl: williamsCarter,
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
    rating: 5,
    company: "NovaLabs",
    industry: "Product Development",
    useCase: "Product Strategy",
    featured: true,
    date: "2024-02-15",
  },
  {
    name: "Sarah Johnson",
    title: "CTO, HealthTech Solutions",
    description: "Their expertise in healthcare technology was invaluable. They delivered a HIPAA-compliant platform that revolutionized how we handle patient data while maintaining the highest security standards.",
    imageUrl: sarahCarter,
    rating: 5,
    company: "HealthTech Solutions",
    industry: "Healthcare",
    useCase: "HIPAA Compliance",
    date: "2024-01-20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "David Park",
    title: "VP Engineering, FinTech Innovations",
    description: "They built a robust financial platform that handles millions of transactions daily. Their attention to security and performance is unmatched in the industry.",
    imageUrl: photo,
    rating: 5,
    company: "FinTech Innovations",
    industry: "Fintech",
    useCase: "Financial Platform",
    date: "2024-02-10",
  },
  {
    name: "Emily Rodriguez",
    title: "Marketing Director, GrowthLab",
    description: "The marketing automation platform they developed increased our lead conversion by 150%. Their team understood our needs perfectly and delivered a solution that exceeded expectations.",
    imageUrl: emily,
    rating: 4,
    company: "GrowthLab",
    industry: "Marketing",
    useCase: "Marketing Automation",
    date: "2024-01-25",
  },
];

export const stats = {
  totalClients: 500,
  satisfactionRate: 98,
  averageRating: 4.8,
  projectsDelivered: 1200,
};

export const industries = ["all", ...new Set(testimonials.map((t) => t.industry).filter(Boolean))];