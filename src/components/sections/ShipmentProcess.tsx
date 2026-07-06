import { motion } from 'framer-motion';
import { Container, SectionTitle } from '../common';
import { shipmentProcess } from '../../constants/process';
import * as Icons from 'lucide-react';
import { Package } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const ShipmentProcess = () => {
  return (
    <section id="tracking" className="section-padding-lg bg-brand-white relative overflow-hidden" aria-labelledby="process-title">
      <Container className="relative">
        <SectionTitle
          badge="How It Works"
          title="Simple Shipment Process"
          description="Track your package through every step with our transparent, tech-driven delivery system."
        />

        {/* Process timeline */}
        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-20 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-30" />

          {/* Process steps */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 relative">
            {shipmentProcess.map((step, index) => {
              const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[step.icon] || Package;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  className="group text-center"
                >
                  {/* Icon container */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.2 + index * 0.08, type: 'spring', stiffness: 200 }}
                    className="relative w-16 h-16 mx-auto mb-5"
                  >
                    {/* Icon background */}
                    <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-card group-hover:shadow-medium group-hover:scale-105 transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    {/* Step indicator */}
                    <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-caption shadow-sm group-hover:scale-110 transition-transform duration-250">
                      {step.step}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h4 className="font-semibold text-brand-heading text-sm mb-1.5 group-hover:text-primary transition-colors duration-250">
                    {step.title}
                  </h4>
                  <p className="text-caption text-brand-body leading-relaxed max-w-[140px] mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ShipmentProcess;
