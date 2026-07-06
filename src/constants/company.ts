import { CompanyInfo, VisionMission, FooterSection } from '../types';

export const companyInfo: CompanyInfo = {
  name: 'LogiFlow',
  tagline: 'Fast, Secure & Reliable Logistics Solutions',
  description:
    'We provide reliable transportation, warehouse management, freight forwarding, and real-time shipment tracking across Indonesia.',
  email: 'contact@logiflow.id',
  phone: '+62 21 1234 5678',
  address: 'Jl. Sudirman No. 123, Jakarta Pusat, Indonesia 10220',
  social: {
    facebook: 'https://facebook.com/logiflow',
    twitter: 'https://twitter.com/logiflow',
    linkedin: 'https://linkedin.com/company/logiflow',
    instagram: 'https://instagram.com/logiflow',
  },
};

export const visionMission: VisionMission = {
  vision:
    "To become Indonesia's most trusted and innovative logistics company by delivering efficient, secure, and technology-driven supply chain solutions that connect businesses across the nation.",
  mission: [
    'Deliver fast, secure, and reliable logistics services.',
    'Utilize modern technology for real-time shipment tracking.',
    'Build long-term partnerships through exceptional customer service.',
    'Continuously improve operational efficiency and sustainability.',
    'Support business growth with scalable logistics solutions.',
  ],
};

export const footerSections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { id: 'about', label: 'About Us', href: '#about' },
      { id: 'team', label: 'Our Team', href: '#team' },
      { id: 'careers', label: 'Careers', href: '#careers' },
      { id: 'news', label: 'News & Blog', href: '#news' },
    ],
  },
  {
    title: 'Services',
    links: [
      { id: 'road', label: 'Road Freight', href: '#services' },
      { id: 'sea', label: 'Sea Freight', href: '#services' },
      { id: 'air', label: 'Air Freight', href: '#services' },
      { id: 'warehouse', label: 'Warehousing', href: '#services' },
    ],
  },
  {
    title: 'Support',
    links: [
      { id: 'help', label: 'Help Center', href: '#help' },
      { id: 'tracking', label: 'Track Shipment', href: '#tracking' },
      { id: 'faq', label: 'FAQs', href: '#faq' },
      { id: 'contact', label: 'Contact Us', href: '#contact' },
    ],
  },
];
