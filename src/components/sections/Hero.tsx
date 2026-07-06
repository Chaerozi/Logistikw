import { motion } from 'framer-motion';
import { ArrowRight, Truck, Package, Shield, MapPin, TrendingUp, Clock, Globe } from 'lucide-react';
import { Button, Container } from '../common';
import { companyInfo } from '../../constants/company';

const HeroStats = [
  { value: '99', suffix: '%', label: 'On-Time Delivery', icon: Clock },
  { value: '25', suffix: 'K+', label: 'Shipments Monthly', icon: Package },
  { value: '150', suffix: '+', label: 'Cities Covered', icon: Globe },
];

const HeroFeatures = [
  { icon: Truck, title: 'Road Freight', desc: 'Same-day delivery' },
  { icon: Package, title: 'Warehousing', desc: '50K+ sq ft facility' },
  { icon: Shield, title: 'Cargo Security', desc: 'Fully insured' },
  { icon: MapPin, title: 'Live Tracking', desc: 'Real-time GPS' },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-16 lg:pt-20 overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-background via-brand-surface/30 to-brand-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/10 via-primary/5 to-transparent rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl opacity-60" />

      <Container className="relative py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full mb-6"
            >
              <TrendingUp className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <span className="text-caption font-semibold text-brand-heading">
                Trusted by 500+ Businesses
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-h1 text-brand-heading mb-6"
            >
              Delivering Logistics{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Without Limits
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-body-lg text-brand-body leading-relaxed mb-8 max-w-lg"
            >
              {companyInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Track Shipment
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="relative"
          >
            {/* Background glassmorphism card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-2xl blur-xl transform scale-105" />
              <div className="relative bg-brand-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-brand-border/50 shadow-medium">
                {/* Grid of feature cards */}
                <div className="grid grid-cols-2 gap-4">
                  {HeroFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
                      whileHover={{ y: -3, transition: { duration: 0.15 } }}
                      className={`group bg-brand-white rounded-xl p-5 shadow-soft border border-brand-border/30 hover:border-primary/20 hover:shadow-card transition-all duration-300 ${
                        index % 2 === 1 ? 'mt-6' : ''
                      }`}
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                        <feature.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-semibold text-brand-heading text-sm">
                        {feature.title}
                      </h3>
                      <p className="text-caption text-brand-body mt-0.5">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            {HeroStats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className={`absolute bg-brand-white rounded-xl px-4 py-3 shadow-card border border-brand-border/30 hidden lg:flex items-center gap-2.5 ${
                  index === 0
                    ? 'top-2 -left-4'
                    : index === 1
                    ? 'bottom-20 -right-4'
                    : 'bottom-8 left-16'
                }`}
              >
                <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-brand-heading">{stat.value}{stat.suffix}</div>
                  <div className="text-caption text-brand-body">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-primary/30 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-primary/50 rounded-full" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
