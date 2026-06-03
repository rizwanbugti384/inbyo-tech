import { Service, Project, Strength, Testimonial, ProcessStep } from "./types";

export const SERVICES: Service[] = [
  {
    id: "django",
    title: "Django Development",
    shortDesc: "Enterprise-grade backends, high-performance database design, and robust APIs.",
    fullDesc: "Ensure absolute reliability, scalability, and security with custom Python backends using Django. We architect modular REST/GraphQL APIs, secure authentication systems, automated background worker tasks (Celery), and lightning-fast database optimization.",
    icon: "Server",
    basePrice: 2499,
    baseDays: 14,
    techStack: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "RabbitMQ"]
  },
  {
    id: "react",
    title: "React.js Development",
    shortDesc: "Interactive single-page apps, smooth transition mechanics, and tailored modular UI.",
    fullDesc: "Build lightning-fast, state-of-the-art client-side experiences using the best React patterns. We focus on lightweight bundles, strict state management (Zustand/Redux), fluid CSS-in-JS or Tailwind styling, and complex interactive features like dashboards and data visualizers.",
    icon: "Code2",
    basePrice: 1999,
    baseDays: 10,
    techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Vite", "Motion"]
  },
  {
    id: "nextjs",
    title: "Next.js Development",
    shortDesc: "SEO-optimized production apps, server-side rendering, and instant load speeds.",
    fullDesc: "Unlock peak marketplace and search performance with full-stack React frameworks. Our Next.js apps leverage robust App Router setups, server-side data fetching for instant content representation, static generation, image optimizations, and seamless middleware control.",
    icon: "Layers",
    basePrice: 2799,
    baseDays: 15,
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel", "Prisma", "PostgreSQL"]
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    shortDesc: "Smart LLM integrations, automatic data categorization, and generative search helpers.",
    fullDesc: "Elevate your product with native artificial intelligence capabilities. We integrate cutting-edge LLMs (like Google Gemini API) for custom automation pipelines, context-reinforced retrieval systems (RAG), automated voice transcription, and semantic content processing.",
    icon: "Cpu",
    basePrice: 3499,
    baseDays: 18,
    techStack: ["Google Gen AI", "LangChain", "Vector DBs", "OpenAI API", "Hugging Face"]
  },
  {
    id: "saas-dev",
    title: "SaaS Development",
    shortDesc: "Full-scale multi-tenant subscription networks with automated billing pipelines.",
    fullDesc: "Turn your business idea into a recurring-revenue goldmine. We handle the complete SaaS lifecycle: multi-tenant architecture, role-based authorization rules, webhook integration of systems like Stripe, invoice automations, and custom onboarding loops.",
    icon: "Globe",
    basePrice: 3999,
    baseDays: 21,
    techStack: ["Next.js/Django", "Stripe API", "Auth0/Firebase", "Cloudflare", "AWS"]
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    shortDesc: "Slick, responsive cross-platform native iOS & Android applications.",
    fullDesc: "Exquisite visual apps delivered straight to the App Store and Google Play using single-codebase frameworks. We ensure flawless native-feeling transitions, fluid scrolling, offline sync support, local notify handlers, and native device sensor integrations.",
    icon: "Smartphone",
    basePrice: 3199,
    baseDays: 20,
    techStack: ["React Native", "Expo", "TypeScript", "Tailwind Native", "SQLite"]
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    shortDesc: "User-centric interactive flows, high-fidelity wireframes, and design guidelines.",
    fullDesc: "Design isn't just how it looks; it's how it works. We construct comprehensive typography systems, delightful interaction micro-states, intuitive interface cards, fluid responsive screens, and interactive figma prototypes to make your software a joy to use.",
    icon: "Palette",
    basePrice: 1299,
    baseDays: 7,
    techStack: ["Figma", "Adobe CC", "Tailwind Spec", "Framing", "Prototyping"]
  },
  {
    id: "api-dev",
    title: "API Development",
    shortDesc: "Supercharged REST and GraphQL endpoints crafted for secure data transport.",
    fullDesc: "The backbone of connected apps. We design highly-concurrent API proxies, unified GraphQL search layers, secure token managers (JWTRole), webhook event dispatchers, and detailed OpenAPI/Swagger endpoints definitions with strict rate limits.",
    icon: "ArrowLeftRight",
    basePrice: 1500,
    baseDays: 7,
    techStack: ["Express", "Node.js", "FastAPI", "GraphQL", "Swagger", "JWT"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "studymanager",
    title: "Student Management System",
    category: "Web",
    desc: "A comprehensive core platform designed to streamline student registration, class attendance, and grade analytics in real-time.",
    longDesc: "This enterprise educational application handles large loads of concurrent records. It features direct student identity tracking, automated report card compilation, class schedules, parent messaging channels, and rich administrative metrics tables for school boards. Designed for ultimate speeds and responsiveness, the UI dynamically displays visual tables and grade-trend metrics charts.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
    metrics: "Served 15k+ students across 10 institutes with 99.9% uptime.",
    techStack: ["Django", "PostgreSQL", "React", "Tailwind CSS", "Recharts"]
  },
  {
    id: "aisaas",
    title: "AI-Powered SaaS Platform",
    category: "AI/SaaS",
    desc: "A high-end content generation workspace powered by advanced Gemini modeling for automated marketing, copy editing, and SEO planning.",
    longDesc: "A sleek B2B subscription application with unified workspaces. Users can generate rich blog posts, analyze keyword density, run SEO checks, schedule weekly newsletter dispatches, and map campaign strategies. Integrated with Stripe subscription rules, usage-based pricing meters, and customizable client organization workspaces for teams.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    metrics: "$12k MRR reached in the first 3 months with 450+ paid seats.",
    techStack: ["Next.js", "Google Gen AI", "Stripe", "Prisma", "Tailwind CSS"]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    category: "Web",
    desc: "Next-generation headless marketplace featuring instant product catalog searches and robust cart-checkout pipelines.",
    longDesc: "A complete redesign of contemporary digital shopping. Built to handle millions of items with dynamic multi-attribute categorization (filters for size, color, range), instant fuzzy searches (Algolia), a high-speed custom shopping cart, secure payments processing, and an intuitive administrative backend for order fulfillments.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    metrics: "Reduced page-load speeds by 40% resulting in a 25% increase in carts purchase success.",
    techStack: ["React", "Vite", "Node.js", "MongoDB", "Stripe Webhooks", "Tailwind CSS"]
  },
  {
    id: "dashboard",
    title: "Business Dashboard",
    category: "Design",
    desc: "An executive-grade financial and business activity dashboard visualizing live product sales, client conversion, and active cash flows.",
    longDesc: "Designed with ultimate modern typography and visual density. It imports raw bank feeds, parses invoice states, compiles daily tax logs, and outputs stunning interactive line, bar, and pie graphs using D3/Recharts. Includes editable reports, dark/light visual layouts with ambient glow, and high-frequency real-time logs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    metrics: "Enables business owners to shave off 12 hours of weekly financial bookkeeping.",
    techStack: ["React", "recharts", "TypeScript", "Tailwind CSS", "Express API"]
  },
  {
    id: "mobile",
    title: "FitVibe: Native Fitness App",
    category: "Mobile",
    desc: "A tracking and community fitness application with custom workout programs generator and calorie burning charts.",
    longDesc: "The ultimate workout companion. Features biometric fingerprint entry, local workout routine schedulers, offline progress trackers, real-time stopwatch sessions, target milestones, and direct social feed sharing options. Highly fluid animations and low battery footprint.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    metrics: "Rating of 4.8 on App Store with over 80k downloads across 25 countries.",
    techStack: ["React Native", "Expo", "Zustand State", "Tailwind Native", "Node.js API"]
  }
];

export const CORE_STRENGTHS: Strength[] = [
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    description: "We work with agile sprint methodologies and pre-engineered boilerplates to ship highly stable products twice as fast without sacrificing an ounce of visual polish.",
    iconName: "Zap",
    metric: "2x Faster shipping"
  },
  {
    id: "clean-code",
    title: "Clean Code",
    description: "Strictly structured, typed, and documented codebases. Our projects pass through thorough automated linting and static analysis to ensure they are easy for any team to maintain.",
    iconName: "FileCheck2",
    metric: "100% Type Safe"
  },
  {
    id: "scalable-arch",
    title: "Scalable Architecture",
    description: "Designed for explosive growth. We configure microservices, load balancers, caching layers, and database replica clusters so your app stays fast as your customer count grows.",
    iconName: "TrendingUp",
    metric: "10M+ Load Ready"
  },
  {
    id: "modern-tech",
    title: "Modern Technologies",
    description: "Never fall behind. We develop exclusively with modern stack solutions like React 19, TypeScript, Tailwind CSS v4, Django, Next.js, and Google's latest Gemini AI SDK.",
    iconName: "Sparkles",
    metric: "Cutting edge stacks"
  },
  {
    id: "dedicated-support",
    title: "Dedicated Support",
    description: "Your success is ours. After launch, we stay on standby to handle optimization reviews, infrastructure upgrades, security checks, and rapid updates to meet user demand.",
    iconName: "HeartHandshake",
    metric: "24/7 Priority support"
  },
  {
    id: "secure-solutions",
    title: "Secure Solutions",
    description: "Built like a fortress. We execute automated dependency checking, secure cryptographic storage, protection against OWASP Top 10 exploits, and strict JWT authentications.",
    iconName: "ShieldAlert",
    metric: "Enterprise grade security"
  }
];

export const METHODOLOGY_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    desc: "We analyze your target market, competitors, business metrics, and core objectives to draft a pristine product requirement blueprint.",
    deliverables: ["Product specification map", "Competition review", "Architecture proposal"],
    iconName: "SearchCode"
  },
  {
    step: 2,
    title: "Planning",
    desc: "Mapping explicit timelines, technical stacks, budget boundaries, data schemas, and user journeys so everyone moves with full clarity.",
    deliverables: ["Interactive timeline plan", "Database schema chart", "Budget breakdown summary"],
    iconName: "Compass"
  },
  {
    step: 3,
    title: "Design",
    desc: "We construct wireframes and translate them into high-fidelity Figma styles with complete color pallets, typography scales, and visual interfaces.",
    deliverables: ["Sleek responsive UI design", "Interactive user flows prototyping", "Tailwind token sheet"],
    iconName: "Paintbrush"
  },
  {
    step: 4,
    title: "Development",
    desc: "Our coders begin building! We implement frontend interfaces with rich micro-animations, write modular typed servers, and hook up smart database relations.",
    deliverables: ["Fully functional sandbox preview", "Continuous integration build logs", "100% test-covered features"],
    iconName: "Terminal"
  },
  {
    step: 5,
    title: "Testing",
    desc: "Meticulous quality audits. We run intensive unit tests, responsive grid checks on mobile/desktop, database stress benchmarks, and core security scans.",
    deliverables: ["Performance benchmark report", "Detailed QA pass certificate", "Exploit protection audit"],
    iconName: "Binary"
  },
  {
    step: 6,
    title: "Deployment",
    desc: "Liftoff! We configure SSL pathways, register custom domains, launch on global edge networks (Cloud Run, AWS, Vercel), and set up live activity monitoring alerts.",
    deliverables: ["Production live deployment", "Docker container images", "Real-time logs & alarms console"],
    iconName: "Rocket"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test1",
    name: "Alex Rivera",
    role: "Chief Product Officer",
    company: "ScribeAI Networks",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    quote: "Inbyo Tech converted our slow, confusing interface into an absolute work of art. The Next.js optimization and clean UI resulted in an instant 35% bump in conversions. Their speed and precision are world-class.",
    rating: 5
  },
  {
    id: "test2",
    name: "Sarah Jenkins",
    role: "Lead Architect",
    company: "EduSphere Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    quote: "Building the custom Student Management System with them was incredibly smooth. They wrote type-safe, modular code that integrated beautifully with our existing Django databases. Irar's technical insights saved us weeks of development.",
    rating: 5
  },
  {
    id: "test3",
    name: "Dr. Kenji Tanaka",
    role: "Founder & CEO",
    company: "BioVibe Medical Systems",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    quote: "Expert visual polish and absolute reliable execution. Our complex biotech dashboard was completed on time, meeting all strict secure requirements, in a clean Tailwind aesthetic that blew our partners away.",
    rating: 5
  },
  {
    id: "test4",
    name: "Elena Rostova",
    role: "VP of Engineering",
    company: "AuraPay Ventures",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    quote: "If you need a team that behaves as a true engineering partner and not just outsourced workers, Inbyo Tech is it. Their API performance is blazing, and their documentation is spotless.",
    rating: 5
  }
];

export const FOUNDER = {
  name: "Rizwan Bugti",
  title: "Founder of Inbyo & Web Developer",
  bio: "Rizwan Bugti is a passionate young technology enthusiast, web developer, and the Founder of Inbyo. Originally from Dera Bugti, Balochistan, he is currently pursuing his Intermediate in Computer Science (ICS, 2nd Year) at Tameer-e-Nau College, Quetta. Alongside his academic studies, Rizwan has been actively developing his technical skills through the Saylani Mass IT Training Program (SMIT), where he has been studying Web Development for the past 11 months. His expertise includes HTML, CSS, JavaScript, and React, and he continues to expand his knowledge in modern web technologies. Through these experiences, he has developed strong skills in web development, digital marketing, freelancing, problem-solving, creativity, teamwork, communication, and project management. As the Founder of Inbyo, Rizwan aims to create innovative digital solutions that help individuals and businesses grow through technology, creativity, and continuous learning.",
  quote: "Building innovative digital solutions, learning continuously, and empowering growth through technology.",
  avatar: "/src/assets/images/rizwan_bugti_avatar_1780427392532.png",
  socials: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/rizwanbugti",
    instagram: "https://www.instagram.com/rizwanbugti11",
    facebook: "https://www.facebook.com/share/1XrAyvnMoN/",
    twitter: "https://x.com/MRizwanbugti",
    email: "rizwanbugti33@gmail.com",
    phone: "03048588384"
  },
  skills: [
    { name: "Web Dev (HTML/CSS/React/JS)", level: 92 },
    { name: "Digital Marketing & SEO", level: 85 },
    { name: "Freelancing & Client Growth", level: 88 },
    { name: "Project Management", level: 85 },
    { name: "Problem Solving & Logic", level: 90 },
    { name: "Teamwork & Communication", level: 92 }
  ],
  certifications: [
    { title: "Microsoft Office (Excel, Word & PowerPoint)", institution: "Learning With Earning (PVT) Ltd." },
    { title: "Digital Marketing Certificate", institution: "DigiSkills Training Program" },
    { title: "Freelancing Training Certificate", institution: "DigiSkills Training Program" },
    { title: "Foundations of Project Management", institution: "Google Career Certificates via Coursera" },
    { title: "STEAM Poetry Competition Participation Certificate", institution: "FG Public School Quetta Cantt" }
  ]
};
