export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  basePrice: number;
  baseDays: number;
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "Web" | "Mobile" | "AI/SaaS" | "Design";
  desc: string;
  longDesc: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  techStack: string[];
}

export interface Strength {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metric?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  desc: string;
  deliverables: string[];
  iconName: string;
}
