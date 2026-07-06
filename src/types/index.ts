export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  step: number;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

export interface VisionMission {
  vision: string;
  mission: string[];
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'export' | 'import';
  image: string;
  description: string;
  icon?: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
