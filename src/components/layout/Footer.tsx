import { motion } from 'framer-motion';
import {
  Truck,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from 'lucide-react';
import { Container } from '../common';
import { companyInfo, footerSections } from '../../constants/company';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: companyInfo.social.facebook, label: 'Facebook' },
    { icon: Twitter, href: companyInfo.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: companyInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: companyInfo.social.instagram, label: 'Instagram' },
  ];

  return (
    <footer className="bg-brand-heading relative" role="contentinfo">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <motion.a
              href="#home"
              className="inline-flex items-center gap-2.5 group mb-5"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.15 }}
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-card transition-shadow duration-250">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">{companyInfo.name}</span>
            </motion.a>

            <p className="text-white/50 mb-6 max-w-md leading-relaxed text-body-sm">
              {companyInfo.description}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-9 h-9 bg-white/5 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-250 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-250" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.08, duration: 0.4 }}
            >
              <h3 className="font-semibold text-white text-sm mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-white/45 hover:text-white text-body-sm transition-colors duration-250 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-250" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact info bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            {/* Contact details */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-caption">
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 text-white/45 hover:text-white transition-colors duration-250">
                <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                <span>{companyInfo.email}</span>
              </a>
              <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 text-white/45 hover:text-white transition-colors duration-250">
                <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                <span>{companyInfo.phone}</span>
              </a>
              <span className="hidden lg:flex items-center gap-2 text-white/45">
                <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                <span>{companyInfo.address.split(',')[0]}</span>
              </span>
            </div>

            {/* Legal links */}
            <nav className="flex items-center gap-5 text-caption" aria-label="Legal">
              <a href="#" className="text-white/45 hover:text-white transition-colors duration-250">
                Privacy Policy
              </a>
              <a href="#" className="text-white/45 hover:text-white transition-colors duration-250">
                Terms of Service
              </a>
            </nav>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-8 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-white/30 text-caption">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
