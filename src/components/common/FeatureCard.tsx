import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Feature } from '../../types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      className="flex items-start gap-3.5 group"
    >
      {/* Check container */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.15, type: 'spring', stiffness: 200 }}
        className="flex-shrink-0"
      >
        <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-250">
          <Check className="w-4.5 h-4.5 text-accent group-hover:text-white transition-colors duration-250" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="pt-0.5">
        <h4 className="font-semibold text-brand-heading mb-1 text-sm group-hover:text-primary transition-colors duration-250">
          {feature.title}
        </h4>
        <p className="text-brand-body text-caption leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
