import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button, Container } from '../common';
import { navigationItems } from '../../constants/navigation';
import logo from '../../assets/Logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 16);

    const sections = navigationItems.map((item) => item.id);
    for (const section of sections.reverse()) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 80) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-brand-border/30'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-24 lg:h-28" aria-label="Main navigation">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
            aria-label="Spice - Home"
          >
            <div className="relative w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:-rotate-3">
              <img
                src={logo}
                alt="Spice logo"
                className="w-full h-full object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
              />
            </div>
            <span className="text-xl lg:text-2xl font-bold tracking-tight text-brand-heading group-hover:text-primary transition-colors duration-250">
              Spice
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <motion.a
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-250 ${
                      isActive
                        ? 'text-primary'
                        : 'text-brand-body hover:text-brand-heading'
                    }`}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.15 }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-indicator"
                        className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                        transition={{ duration: 0.25, type: 'spring', stiffness: 300 }}
                      />
                    )}
                  </motion.a>
                </li>
              );
            })}
          </ul>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-heading rounded-lg hover:bg-brand-surface transition-colors duration-250"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-brand-white border-t border-brand-border overflow-hidden"
          >
            <Container>
              <nav className="py-4" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {navigationItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04, duration: 0.2 }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                            isActive
                              ? 'bg-primary/10 text-primary'
                              : 'text-brand-body hover:bg-brand-surface hover:text-brand-heading'
                          }`}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col gap-2.5 pt-4 mt-4 border-t border-brand-border"
                >
                  <Button variant="outline" size="md" className="w-full">
                    Login
                  </Button>
                  <Button variant="primary" size="md" className="w-full">
                    Get Started
                  </Button>
                </motion.div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;