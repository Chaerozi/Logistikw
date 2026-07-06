import { motion } from 'framer-motion';
import { ArrowRight, Package } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Service } from '../../types';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[service.icon] || Package;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group relative bg-brand-white rounded-2xl p-6 lg:p-7 shadow-card border border-brand-border/40 hover:border-primary/20 hover:shadow-medium transition-all duration-300 cursor-pointer h-full flex flex-col"
      role="article"
    >
      {/* Icon container */}
      <div className="relative mb-5">
        <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all duration-300">
          <IconComponent className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-h4 text-brand-heading mb-2 group-hover:text-primary transition-colors duration-250">
          {service.title}
        </h3>
        <p className="text-body-sm text-brand-body leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Learn more link */}
        <div className="flex items-center gap-1.5 mt-5 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
    </motion.div>
  );
};

export default ServiceCard;
