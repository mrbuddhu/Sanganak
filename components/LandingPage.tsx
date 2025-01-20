'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Code2,
  ExternalLink,
  Play,
  Linkedin,
  Menu,
  Star,
  Clock,
  X,
  Zap,
  Search,
  Palette,
  Rocket,
  PenTool,
  Globe,
  Smartphone,
  Brain,
  Box,
  Instagram,
  Github,
  Youtube
} from 'lucide-react';
import { motion } from 'framer-motion';

const floatKeyframes = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
`;

interface Testimonial {
  text: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Working with Sanganak was a game-changer for our startup. Their expertise in AI integration helped us launch our product ahead of schedule.",
    author: "Priya M.",
    role: "Tech Startup Founder",
    image: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZGlhbiUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
  },
  {
    text: "Outstanding work on our e-commerce platform. The performance improvements and user experience upgrades exceeded our expectations.",
    author: "Vikram P.",
    role: "E-commerce Director",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
  },
  {
    text: "The team's approach to solving complex technical challenges while maintaining clear communication made the development process smooth and efficient.",
    author: "Rahul R.",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMG1hbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
  },
  {
    text: "Their blockchain expertise helped us implement a secure and scalable solution. Highly recommend their services!",
    author: "Anjali S.",
    role: "Blockchain Lead",
    image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
  },
  {
    text: "Exceptional mobile app development service. The final product was polished and user-friendly.",
    author: "Arjun L.",
    role: "Product Owner",
    image: "https://images.unsplash.com/photo-1624797432677-6f803a98acb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGluZGlhbiUyMG1hbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
  }
];

interface Project {
  name: string;
  description: string;
  image: string;
  author: string;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const portfolioProjects: Record<string, Project[]> = {
  saas: [
    {
      name: "Creators Home",
      description: "Platform for content creators to manage their digital presence",
      image: "/portfolio/saas-1.jpg",
      author: "mrbuddhu"
    },
    {
      name: "Task Flow",
      description: "AI-powered project management solution",
      image: "/portfolio/saas-2.jpg",
      author: "msbuddhu"
    },
    {
      name: "Analytics Hub",
      description: "Real-time business analytics dashboard",
      image: "/portfolio/saas-3.jpg",
      author: "mrbuddhu"
    }
  ],
  design: [
    {
      name: "Brand Identity",
      description: "Complete brand identity design for tech startup",
      image: "/portfolio/design-1.jpg",
      author: "msbuddhu"
    },
    {
      name: "UI Kit",
      description: "Modern UI component library for web applications",
      image: "/portfolio/design-2.jpg",
      author: "mrbuddhu"
    },
    {
      name: "Design System",
      description: "Comprehensive design system for enterprise",
      image: "/portfolio/design-3.jpg",
      author: "mrbuddhu"
    }
  ],
  web: [
    {
      name: "E-commerce Platform",
      description: "Custom e-commerce solution with advanced features",
      image: "/portfolio/web-1.jpg",
      author: "mrbuddhu"
    },
    {
      name: "Learning Management",
      description: "Online learning platform with interactive features",
      image: "/portfolio/web-2.jpg",
      author: "msbuddhu"
    },
    {
      name: "Real Estate Portal",
      description: "Modern real estate listing and management system",
      image: "/portfolio/web-3.jpg",
      author: "mrbuddhu"
    }
  ],
  mobile: [
    {
      name: "Fitness Tracker",
      description: "Health and fitness tracking mobile application",
      image: "/portfolio/mobile-1.jpg",
      author: "msbuddhu"
    },
    {
      name: "Food Delivery",
      description: "On-demand food delivery platform",
      image: "/portfolio/mobile-2.jpg",
      author: "msbuddhu"
    },
    {
      name: "Travel Companion",
      description: "AI-powered travel planning application",
      image: "/portfolio/mobile-3.jpg",
      author: "msbuddhu"
    }
  ],
  ai: [
    {
      name: "AI Assistant",
      description: "Custom AI assistant for business automation",
      image: "/portfolio/ai-1.jpg",
      author: "mrbuddhu"
    },
    {
      name: "Vision AI",
      description: "Computer vision solution for quality control",
      image: "/portfolio/ai-2.jpg",
      author: "msbuddhu"
    },
    {
      name: "NLP Engine",
      description: "Natural language processing for document analysis",
      image: "/portfolio/ai-3.jpg",
      author: "msbuddhu"
    }
  ],
  blockchain: [
    {
      name: "NFT Marketplace",
      description: "Digital art NFT marketplace platform",
      image: "/portfolio/blockchain-1.jpg",
      author: "mrbuddhu"
    },
    {
      name: "DeFi Platform",
      description: "Decentralized finance trading platform",
      image: "/portfolio/blockchain-2.jpg",
      author: "msbuddhu"
    },
    {
      name: "Smart Contracts",
      description: "Custom smart contract development",
      image: "/portfolio/blockchain-3.jpg",
      author: "mrbuddhu"
    }
  ]
};

const portfolioCategories = [
  { id: 'saas', label: 'SaaS' },
  { id: 'design', label: 'Design' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'blockchain', label: 'Blockchain' }
];

const pricingTiers: PricingTier[] = [
  {
    name: "Branding Essential",
    price: "Starting at $999",
    description: "Perfect for businesses needing a brand identity",
    features: [
      "Logo Design & Brand Guidelines",
      "Color Palette & Typography",
      "Social Media Templates",
      "Basic Marketing Materials",
      "Email Signature Design",
      "Brand Style Guide",
      "2 Rounds of Revisions"
    ],
    cta: "Get Started"
  },
  {
    name: "Branding + Dev",
    price: "Starting at $2,499",
    description: "Complete brand identity with a professional website",
    features: [
      "Everything in Branding Essential",
      "Custom Website Design",
      "Responsive Development",
      "CMS Integration",
      "Contact Forms",
      "Google Analytics Setup",
      "Basic SEO Optimization",
      "Social Media Integration",
      "3 Months Support"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Custom Dev",
    price: "Get Custom Quote",
    description: "Advanced web applications and custom solutions",
    features: [
      "Custom Web Application",
      "User Authentication",
      "Database Integration",
      "API Development",
      "Payment Gateway Integration",
      "Admin Dashboard",
      "Advanced Security Features",
      "Performance Optimization",
      "6 Months Support"
    ],
    cta: "Get Started"
  },
  {
    name: "Advanced Tech",
    price: "Get Custom Quote",
    description: "Cutting-edge solutions with advanced technologies",
    features: [
      "AI/ML Integration",
      "Blockchain Development",
      "Cloud Architecture",
      "Microservices",
      "Real-time Analytics",
      "Scalable Infrastructure",
      "DevOps Setup",
      "Custom Security Solutions",
      "12 Months Support"
    ],
    cta: "Get Started"
  }
];

const developmentProcess = [
  {
    icon: <Search className="h-6 w-6" />,
    stepNumber: "Step 1",
    title: "Discovery & Strategy",
    description: "Deep dive into your requirements, goals, and vision through collaborative strategy sessions",
    steps: ["Requirements gathering", "Market research", "Technical planning"],
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Design & Branding",
    description: "Create intuitive interfaces and strong brand identity through visual design, digital assets, and strategic storytelling",
    steps: ["UI/UX wireframes", "Interactive prototypes", "Design System & Copywriting"],
    stepNumber: "Step 2"
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Dev & Test",
    description: "Agile development with regular updates and continuous integration/deployment",
    steps: ["Sprint planning", "Regular demos", "Quality testing"],
    stepNumber: "Step 3"
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Launch & Support",
    description: "Smooth deployment with ongoing maintenance and dedicated support",
    steps: ["Final testing", "Deployment", "24/7 support"],
    stepNumber: "Step 4"
  }
];

const features = [
  {
    title: "AI-Powered Analytics",
    description: "Real-time insights with machine learning."
  },
  {
    title: "Smart Automation",
    description: "Automated workflows and processes."
  },
  {
    title: "Computer Vision",
    description: "Computer vision for automated recognition."
  }
];

const categories = [
  { id: 'saas', label: 'SAAS' },
  { id: 'design', label: 'DESIGN' },
  { id: 'web', label: 'WEB' },
  { id: 'mobile', label: 'MOBILE' },
  { id: 'blockchain', label: 'BLOCKCHAIN' },
  { id: 'ai', label: 'AI' }
];

const projects = [
  { name: "SaaS Web Application", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D" },
  { name: "E-commerce Platform", image: "https://images.unsplash.com/photo-1472851294608-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww" },
  { name: "AI-Powered Assistant", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D" },
  { name: "Mobile App Development", image: "https://images.unsplash.com/photo-1512941937669-80e3c103d31a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "PredictX Analytics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D" },
  { name: "AutoVision Recognition", image: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjB2aXNpb258ZW58MHx8MHx8fDA%3D" }
];

const services: any[] = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Custom SaaS Development",
    description: [
      "End-to-end SaaS application development",
      "Scalable cloud infrastructure",
      "Third-party integrations",
      "Subscription management"
    ]
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Branding & Design",
    description: [
      "Visual branding with logo and identity design",
      "Digital branding for UI/UX and web presence",
      "Content strategy and brand storytelling",
      "Brand guidelines and asset development"
    ]
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Development",
    description: [
      "Custom web development with modern frameworks",
      "Professional Webflow design and development",
      "E-commerce solutions with Shopify integration",
      "Custom WordPress themes and plugins"
    ]
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile App Development",
    description: [
      "Native iOS and Android app development",
      "Cross-platform solutions with React Native",
      "Real-time features and offline functionality",
      "App Store optimization and deployment"
    ]
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Integration",
    description: [
      "Custom AI model development and training",
      "Natural Language Processing solutions",
      "Computer Vision and Image Recognition",
      "AI-powered automation and analytics"
    ]
  },
  {
    icon: <Box className="h-6 w-6" />,
    title: "Blockchain Solutions",
    description: [
      "Smart contract development and auditing",
      "DeFi and NFT platform development",
      "Blockchain integration with existing systems",
      "Secure wallet and payment solutions"
    ]
  }
];

const projectsData = [
  {
    title: "Tube2Text",
    description: "A powerful SaaS tool that converts YouTube videos to text transcripts, making content more accessible and searchable.",
    image: "/projects/tube2text.png",
    category: "SAAS",
    author: "mrbuddhu",
    status: "Live",
    link: "https://tube2text.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI", "Vercel"]
  },
  {
    title: "Interio",
    description: "Modern interior design platform showcasing beautiful spaces and connecting designers with clients.",
    image: "/projects/interio.png",
    category: "WEB",
    author: "mrbuddhu",
    status: "Live",
    link: "https://interio-eta.vercel.app/",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel"]
  },
  {
    title: "GlobalEats",
    description: "A modern food delivery marketplace connecting local restaurants with hungry customers, featuring real-time ordering and tracking.",
    image: "/projects/globaleats.png",
    category: "SAAS",
    author: "mrbuddhu",
    status: "Live",
    link: "https://16bpv657xpfacoen.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "Food Delivery", "Marketplace"]
  },
  {
    title: "Web Design Collection",
    description: "A curated collection of modern and responsive web designs, showcasing various styles and layouts.",
    image: "/projects/Web.jpg",
    category: "DESIGN",
    author: "msbuddhu",
    status: "Live",
    link: "https://www.figma.com/community/file/1456301418969661033/web-design-collection",
    tags: ["Figma", "Web Design", "UI/UX", "Responsive", "Modern"]
  },
  {
    title: "Mobile Designs Collection",
    description: "Comprehensive collection of mobile app designs featuring various categories and user interfaces.",
    image: "/projects/Mobile.jpg",
    category: "DESIGN",
    author: "msbuddhu",
    status: "Live",
    link: "https://www.figma.com/community/file/1456300569826999910/mobile-designs-collection",
    tags: ["Figma", "Mobile Design", "UI/UX", "iOS", "Android"]
  },
  {
    title: "CreatorVerse",
    description: "One-stop platform design for content creators to manage, grow, and monetize their digital presence.",
    image: "/projects/Creatorvrse.png",
    category: "DESIGN",
    author: "msbuddhu",
    status: "Live",
    link: "https://www.figma.com/community/file/1454089978333081244/creatorverse-a-one-stop-platform-for-content-creators",
    tags: ["Figma", "UI/UX", "Creator Economy", "Social Media"]
  },
  {
    title: "Movie Time",
    description: "Modern movie ticket booking app design with seamless user experience and beautiful interfaces.",
    image: "/projects/movie.png",
    category: "DESIGN",
    author: "msbuddhu",
    status: "Live",
    link: "https://www.figma.com/community/file/1446028718049525532/movie-time-show-ticket-booking-app",
    tags: ["Figma", "UI/UX", "Mobile App", "Booking System"]
  }
];

const portfolioItems = [
  {
    id: 1,
    title: "Tech Stack Guide",
    description: "A comprehensive guide to modern tech stacks",
    image: "/images/portfolio/tech-stack.jpg",
    category: "guide",
    link: "/guides/sanganak-tech-stack-guide.pdf",
    author: "mrbuddhu"
  }
];

const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "https://hashnode.com/@sanganak", external: true },
  { name: "Contact", href: "#contact" },
];

const toolLogos = [
  { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Framer", icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" },
  { name: "Webflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Ethereum", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png" },
  { name: "Solidity", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-plain.svg" },
  { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
  { name: "Shopify", icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
  { name: "WordPress", icon: "https://s.w.org/style/images/about/WordPress-logotype-standard.png" }
];

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = React.useState(0);
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = React.useState(0);
  const [hoveredTier, setHoveredTier] = React.useState<number | null>(1); // Default to second tier
  const [currentProjectIndex, setCurrentProjectIndex] = React.useState(0);

  const [showStickyBanner, setShowStickyBanner] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
  const testimonialRef = React.useRef<HTMLDivElement>(null);
  const portfolioRef = React.useRef<HTMLDivElement>(null);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex >= projectsData.length - 2 ? 0 : prevIndex + 2
    );
  };

  const previousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 2 : prevIndex - 2
    );
  };

  const scrollLeft = () => {
    setCurrentTestimonialIndex(prev => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setCurrentTestimonialIndex(prev => Math.min(testimonials.length - 3, prev + 1));
  };

  const scrollPortfolioLeft = () => {
    if (currentPortfolioIndex > 0) {
      setCurrentPortfolioIndex(prev => prev - 3);
    }
  };

  const scrollPortfolioRight = () => {
    if (currentPortfolioIndex + 3 < projectsData.length) {
      setCurrentPortfolioIndex(prev => prev + 3);
    }
  };

  const visibleTestimonials = testimonials.slice(currentTestimonialIndex, currentTestimonialIndex + 3);
  const visibleProjects = projectsData.slice(currentPortfolioIndex, currentPortfolioIndex + 3);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowStickyBanner(window.scrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const smoothScroll = (e: Event) => {
    e.preventDefault();
    const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href")?.slice(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  React.useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      <main>
        {/* Sticky Banner */}
        {showStickyBanner && (
          <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-900/95 to-blue-900/95 backdrop-blur-md border-t border-white/10 transform transition-all duration-500 z-50">
            <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between h-full">
              <div className="flex items-center mb-3 sm:mb-0">
                <div className="bg-purple-500/20 rounded-full p-2 mr-4">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Ready to Transform Your Vision?</h3>
                  <p className="text-gray-300 text-sm">Book your free strategy call now - Limited slots available</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  className="border-purple-400 text-purple-400 hover:bg-purple-400/10"
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </Button>
                <Link href="https://cal.com/sanganak/strategycall">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Book Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* Space-themed Background */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/stars.png')] opacity-30" />
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(76, 29, 149, 0.1) 0%, transparent 40%),
                radial-gradient(circle at 80% 20%, rgba(29, 78, 216, 0.1) 0%, transparent 40%)
              `
            }}
          />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Header */}
        <header className="fixed top-4 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-black/90 backdrop-blur-md">
          <div className="flex h-16 items-center justify-between px-4 md:px-8">
            <Link href="https://sanganak.org" className="text-xl md:text-2xl font-bold text-white hover:text-purple-400">
              Sanganak
            </Link>
            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (!item.external) {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-sm font-semibold leading-6 text-white hover:text-purple-400 transition-colors duration-300"
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <div className="flex items-center">
                    {item.name}
                    {item.external && (
                      <ExternalLink className="inline-block ml-1 h-4 w-4" />
                    )}
                  </div>
                </a>
              ))}
            </nav>
            <Button size="lg" className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="https://cal.com/sanganak/strategycall">
                Free Strategy Call
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm md:hidden">
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (!item.external) {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="text-2xl text-gray-300 hover:text-white capitalize"
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <div className="flex items-center">
                    {item.name}
                    {item.external && (
                      <ExternalLink className="inline-block ml-1 h-4 w-4" />
                    )}
                  </div>
                </a>
              ))}
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="https://cal.com/sanganak/strategycall">
                  Book Free Strategy Call
                </Link>
              </Button>
            </nav>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight md:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Transform Your Vision Into Digital Reality
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                Empowering businesses with cutting-edge technology solutions. From concept to launch, we deliver excellence in every project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link href="https://cal.com/sanganak/strategycall" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#portfolio" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full border-purple-400 text-purple-400 hover:bg-purple-400/10 px-8 py-6 text-lg">
                    View Our Work <Play className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {testimonials.slice(0, 5).map((testimonial, i) => (
                      <div key={i} className="relative w-8 h-8 rounded-full border border-purple-400 shrink-0 overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-300">
                    <span className="text-purple-400 font-bold">5</span> Happy Clients and Counting
                  </p>
                </div>
                <div className="flex items-center space-x-8 text-gray-300">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="font-bold">100%</span> Success Rate
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-400 mr-2" />
                    <span className="font-bold">24/7</span> Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mt-24 md:mt-32 text-white">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold">About Sanganak</h2>
            <p className="mt-4 text-base md:text-lg text-purple-400">Innovating for a digital future</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 md:space-y-6 text-gray-300">
              <p className="text-lg">
                Founded in July 2021 by visionaries Aryabhatta and Shabi Kaushal, Sanganak is a trailblazing Bihar-based bootstrap startup that&apos;s redefining the landscape of technological innovation. Our elite team of IT professionals is dedicated to transforming visionary ideas into cutting-edge solutions for businesses of all scales.
              </p>
              <p className="text-lg">
                At Sanganak, we&apos;re driven by a singular mission: to empower businesses in the digital age through innovative, scalable, and efficient IT solutions. Since our inception, we&apos;ve consistently delivered excellence across a spectrum of services, including:
              </p>
              <p className="text-lg">
                Complete branding solutions from Visual Branding with logo and identity design, Digital Branding for UI/UX, Content Branding including copy and strategy, to Brand Identity Development focusing on story and vision. Custom SaaS Development, Web and Mobile App Creation, Graphics & UI/UX Design, Blockchain Technology Solutions, and Artificial Intelligence Integration.
              </p>
              <p className="text-lg">
                We believe in the transformative power of technology to revolutionize businesses and enhance lives. Our commitment to staying ahead of the technological curve ensures that our clients receive state-of-the-art solutions tailored to their unique needs, positioning them at the vanguard of their respective industries.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
              <Card className="rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 p-6 transform hover:scale-105 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 rounded-full border border-amber-400/30 flex items-center justify-center shrink-0 overflow-hidden">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aryabhatta.jpg-JOgEjTplTIdV5dDYhPFhQF2E7aJc6p.jpeg"
                        alt="Aryabhatta (mrbuddhu)"
                        width={96}
                        height={96}
                        className="rounded-full object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Aryabhatta (mrbuddhu)</h3>
                      <p className="text-purple-400">Dev Lead & Founder</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4">
                    Aryabhatta, known as mrbuddhu, is a passionate developer and branding strategist with years of experience in creating innovative solutions. As the Dev Lead of Sanganak, he drives both technical excellence and brand vision, ensuring the delivery of high-quality products while building strong brand identities through comprehensive branding solutions including visual design, digital presence, and strategic storytelling.
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <Link href="https://x.com/_mrbuddhu_" className="text-gray-300 hover:text-purple-400">
                      <X className="w-5 h-5" />
                    </Link>
                    <Link href="https://linkedin.com/in/mrbuddhu" className="text-gray-300 hover:text-purple-400">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 p-6 transform hover:scale-105 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 rounded-full border border-amber-400/30 flex items-center justify-center shrink-0">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ShabiK-buGilxwRkR509eYuhDO9xjDRY1qO1n.jpeg"
                        alt="Shabi Kaushal (msbuddhu)"
                        width={96}
                        height={96}
                        className="rounded-full object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Shabi Kaushal (msbuddhu)</h3>
                      <p className="text-purple-400">Design Lead & Co-founder</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4">
                    Shabi Kaushal, known as msbuddhu, is a creative powerhouse with a keen eye for design and user experience. As the Design Lead of Sanganak, she ensures that all our products are not only functional but also aesthetically pleasing and user-friendly, creating digital experiences that delight and inspire.
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <Link href="https://x.com/msbuddhu" className="text-gray-300 hover:text-purple-400"><X className="w-5 h-5" />
                    </Link>
                    <Link href="https://linkedin.com/in/msbuddhu" className="text-gray-300 hover:text-purple-400">
                      <Linkedin className="w-5" />
                    </Link>                    </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="container mt-20">
          <div className="rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm p-8 transition-transform duration-300 transform hover:scale-105">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-purple-400">Why Choose Us?</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-2">
                <div className="text-3xl font-bold text-white">5</div>
                <div className="text-sm text-gray-300 text-center">Successful Projects Delivered</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-300 text-center">Client Satisfaction</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-300 text-center">Dedicated Support</div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-center text-gray-300 text-sm md:text-base">
                We're a boutique development studio that takes on limited projects to ensure exceptional quality and personal attention for each client.
              </p>
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="container mt-24 md:mt-32 text-white">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Development Process</h2>
            <p className="mt-4 text-base md:text-lg text-purple-400">How we bring your vision to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentProcess.map((phase, index) => (
              <div 
                key={index} 
                className="rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 p-6 flex flex-col h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-400/20 text-purple-400 transition-transform duration-300 hover:scale-105">
                  {phase.icon}
                </div>
                <div className="text-sm font-medium text-purple-400 mb-2">{phase.stepNumber}</div>
                <h3 className="text-lg font-bold mb-3 text-white">{phase.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{phase.description}</p>
                <ul className="space-y-3">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-purple-400" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container mt-24 md:mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-base md:text-lg text-purple-400">Comprehensive digital solutions for your business</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-gray-800/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-400/20 text-purple-400 transition-transform duration-300 hover:scale-105">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.description.map((desc: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-purple-400" />
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Transparent Pricing</h2>
            <p className="mt-4 text-base md:text-lg text-purple-400">Choose the perfect plan for your needs</p>
          </div>

          <div className="max-w-[90rem] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl ${
                    hoveredTier === index
                      ? 'bg-purple-600 text-white scale-105'
                      : 'bg-gray-900/50 backdrop-blur-sm border border-white/10'
                  } p-8 transition-all duration-300 hover:bg-purple-600 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/50`
                  }
                  onMouseEnter={() => setHoveredTier(index)}
                  onMouseLeave={() => setHoveredTier(1)} // Reset to second tier
                >
                  {tier.popular && (
                    <div className="absolute -top-4 right-8 rounded-full bg-purple-800 px-4 py-1 text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">{tier.name}</h3>
                    <p className={`mt-2 text-sm ${hoveredTier === index ? 'text-white' : 'text-gray-300'}`}>
                      {tier.description}
                    </p>
                  </div>
                  <p className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                  </p>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-start text-sm ${hoveredTier === index ? 'text-white' : 'text-gray-300'}`}>
                        <CheckCircle2 
                          className={`h-4 w-4 mr-2 flex-shrink-0 ${
                            hoveredTier === index ? 'text-white' : 'text-purple-400'
                          }`} 
                          aria-hidden="true" 
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={tier.name === "Custom Dev" || tier.name === "Advanced Tech" 
                      ? "https://cal.com/sanganak/customquote" 
                      : "https://cal.com/sanganak/strategycall"}
                    className="block w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      className={`w-full ${
                        hoveredTier === index
                          ? 'bg-white text-purple-600 hover:bg-gray-100' 
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      {tier.name === "Custom Dev" || tier.name === "Advanced Tech" 
                        ? "Get Custom Quote" 
                        : tier.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="container mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Portfolio</h2>
            <p className="mt-4 text-base md:text-lg text-purple-400">Showcasing our digital excellence</p>
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <button
              onClick={scrollPortfolioLeft}
              disabled={currentPortfolioIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-900/50 hover:bg-gray-900/75 backdrop-blur-sm text-white p-2 rounded-full border border-white/10 transition-all duration-300 ${
                currentPortfolioIndex === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-800/50'
              }`}
              aria-label="Previous projects"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={scrollPortfolioRight}
              disabled={currentPortfolioIndex + 3 >= projectsData.length}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gray-900/50 hover:bg-gray-900/75 backdrop-blur-sm text-white p-2 rounded-full border border-white/10 transition-all duration-300 ${
                currentPortfolioIndex + 3 >= projectsData.length
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-800/50'
              }`}
              aria-label="Next projects"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div
              ref={portfolioRef}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {projectsData.slice(currentPortfolioIndex, currentPortfolioIndex + 3).map((project, index) => (
                <div
                  key={currentPortfolioIndex + index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={675}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-400/10 text-purple-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-400">{project.category}</span>
                        <span className="text-xs text-gray-500">by {project.author}</span>
                      </div>
                      {project.status === "Live" ? (
                        <Link
                          href={project.link}
                          className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium"
                        >
                          Visit Site <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      ) : (
                        <Link
                          href="https://cal.com/sanganak/strategycall"
                          className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium"
                        >
                          Get Early Access <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(projectsData.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPortfolioIndex(index * 3)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentPortfolioIndex / 3) === index
                      ? 'bg-purple-500 w-4'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to projects ${index * 3 + 1}-${Math.min((index + 1) * 3, projectsData.length)}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Tech Stack</h2>
            <p className="mt-4 text-base md:text-lg text-purple-400">Cutting-edge technologies we use</p>
          </div>

          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <div className="absolute inset-0">
              <div className="flex flex-wrap justify-center items-center h-full gap-6 md:gap-8 px-4">
                {toolLogos.map((tool, index) => (
                  <div
                    key={tool.name}
                    className="group flex flex-col items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      animation: `float 6s ease-in-out infinite ${index * 0.15}s`,
                    }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative flex items-center justify-center mb-2 bg-gray-800/50 rounded-full p-2.5 transition-all duration-300 group-hover:bg-gray-700/50 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs text-center text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="container mt-24 md:mt-32 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Our Clients Say</h2>
            <p className="mt-4 text-base md:text-lg text-purple-400">Trusted by businesses worldwide</p>
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <div
              ref={testimonialRef}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={currentTestimonialIndex + index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-gray-800/50 hover:scale-[1.01] hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <p className="text-gray-300 mb-6">{testimonial.text}</p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-24 w-24 mb-6 transition-transform duration-300 hover:scale-105">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="rounded-full object-cover transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.author}</h4>
                      <p className="text-purple-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollLeft}
              disabled={currentTestimonialIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-900/50 hover:bg-gray-900/75 backdrop-blur-sm text-white p-2 rounded-full border border-white/10 transition-all duration-300 ${
                currentTestimonialIndex === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-800/50'
              }`}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={scrollRight}
              disabled={currentTestimonialIndex >= testimonials.length - 3}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gray-900/50 hover:bg-gray-900/75 backdrop-blur-sm text-white p-2 rounded-full border border-white/10 transition-all duration-300 ${
                currentTestimonialIndex >= testimonials.length - 3
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-800/50'
              }`}
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mt-24 md:mt-32 mb-24 md:mb-32 text-white">
          <div className="rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 md:p-16 hover:bg-gray-800/50 transition-colors duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold sm:text-4xl">Contact Sanganak</h2>
              <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-300 max-w-2xl">
                Ready to transform your business with cutting-edge tech solutions? <br className="hidden md:inline" />Get in touch today!
              </p>
              <Link href="https://cal.com/sanganak/strategycall">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white mb-6 md:mb-8 w-full sm:w-auto">
                  Book Your Free Strategy Call
                </Button>
              </Link>
              <p className="mb-4 text-base md:text-lg text-gray-300">Connect with Sanganak on social media:</p>
              <div className="flex justify-center space-x-4 mb-6 md:mb-8">
                <Link href="https://www.instagram.com/sanganakorg/" className="text-gray-300 hover:text-purple-400">
                  <Instagram className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
                <Link href="https://github.com/SanganakOrg" className="text-gray-300 hover:text-purple-400">
                  <Github className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
                <Link href="https://www.youtube.com/@sanganakorg" className="text-gray-300 hover:text-purple-400">
                  <Youtube className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
                <Link href="https://www.linkedin.com/company/sanganakorg/" className="text-gray-300 hover:text-purple-400">
                  <Linkedin className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
                <Link href="https://x.com/sanganakorg" className="text-gray-300 hover:text-purple-400">
                  <X className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
              </div>
              <p className="text-sm md:text-base text-gray-300">Email: <Link href="mailto:contact@sanganak.org" className="text-purple-400 hover:underline">contact@sanganak.org</Link></p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/10 py-6 md:py-8 text-center text-xs md:text-sm text-gray-400 mt-8 md:mt-16 pb-[120px] md:pb-[88px] mb-10"> 
          <div className="container">
            <p>
              Built with ❤️ by{' '}
              <Link href="https://linktr.ee/mrbuddhu" className="text-purple-400 hover:underline">
                mrbuddhu
              </Link>{' '}
              &{' '}
              <Link href="https://linktr.ee/msbuddhu" className="text-purple-400 hover:underline">
                msbuddhu
              </Link>
            </p>
          </div>
        </footer>

        {/* Sticky Banner */}
        {showStickyBanner && (
          <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-900/95 to-blue-900/95 backdrop-blur-md border-t border-white/10 transform transition-all duration-500 z-50">
            <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between h-full">
              <div className="flex items-center mb-3 sm:mb-0">
                <div className="bg-purple-500/20 rounded-full p-2 mr-4">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Ready to Transform Your Vision?</h3>
                  <p className="text-gray-300 text-sm">Book your free strategy call now - Limited slots available</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  className="border-purple-400 text-purple-400 hover:bg-purple-400/10"
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </Button>
                <Link href="https://cal.com/sanganak/strategycall">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Book Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <style jsx global>{`
        /* Global Styles */
        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #000;
          color: #fff;
        }

        .star {
          position: absolute;
          background-color: #fff;
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .star:nth-child(1) {
          animation-delay: 0s;
        }

        .star:nth-child(2) {
          animation-delay: 0.2s;
        }

        .star:nth-child(3) {
          animation-delay: 0.4s;
        }

        .star:nth-child(4) {
          animation-delay: 0.6s;
        }

        .star:nth-child(5) {
          animation-delay: 0.8s;
        }

        .star:nth-child(6) {
          animation-delay: 1s;
        }

        .star:nth-child(7) {
          animation-delay: 1.2s;
        }

        .star:nth-child(8) {
          animation-delay: 1.4s;
        }

        .star:nth-child(9) {
          animation-delay: 1.6s;
        }

        .star:nth-child(10) {
          animation-delay: 1.8s;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}
      </style>
    </div>
  )
}

export default LandingPage;