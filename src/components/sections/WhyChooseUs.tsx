import { motion } from 'framer-motion';
import { Container, SectionTitle, FeatureCard } from '../common';
import { features } from '../../constants/features';
import { Warehouse, Package, Truck, CheckCircle, ArrowRight } from 'lucide-react';

const showcaseItems = [
  { icon: Warehouse, title: 'Modern Warehouse', stat: '50,000+', sub: 'sq ft facility' },
  { icon: Truck, title: 'Fleet Network', stat: '500+', sub: 'delivery vehicles' },
  { icon: Package, title: 'Package Handling', stat: '10M+', sub: 'parcels annually' },
  { icon: CheckCircle, title: 'Quality Control', stat: '99.9%', sub: 'accuracy rate' },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding-lg bg-brand-white relative overflow-hidden" aria-labelledby="why-choose-title">
      {/* Subtle background */}
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl transform -translate-y-1/2 opacity-60" />
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl transform -translate-y-1/2 opacity-50" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Visual showcase */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            {/* Main content card */}
            <div className="relative bg-brand-surface rounded-2xl p-6 lg:p-8 border border-brand-border/50">
              <div className="grid grid-cols-2 gap-4">
                {showcaseItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className={`group bg-brand-white rounded-xl p-5 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer ${
                      index % 2 === 1 ? 'mt-6' : ''
                    }`}
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-3 shadow-sm">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>

                    <h4 className="font-semibold text-brand-heading text-caption">{item.title}</h4>
                    <div className="mt-2">
                      <span className="text-xl font-bold text-brand-heading">{item.stat}</span>
                      <span className="block text-caption text-brand-body mt-0.5">{item.sub}</span>
                    </div>

                    {/* Hover arrow */}
                    <ArrowRight className="absolute bottom-4 right-4 w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-250" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <SectionTitle
              badge="Why Choose Us"
              title="The Smart Choice for Your Logistics"
              description="We combine cutting-edge technology, industry expertise, and unwavering dedication to deliver exceptional logistics experiences."
              centered={false}
            />

            {/* Features list */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <FeatureCard key={feature.id} feature={feature} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
