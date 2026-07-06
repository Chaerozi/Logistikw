import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'premium';
}

const Badge = ({ children, className = '', variant = 'default' }: BadgeProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium text-caption transition-all duration-250 ${
        variant === 'premium'
          ? 'bg-primary/5 border border-primary/10 text-primary hover:border-primary/20'
          : 'bg-brand-surface text-brand-heading border border-transparent hover:border-brand-border'
      } ${className}`}
    >
      {variant === 'premium' && (
        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
      )}
      {children}
    </motion.span>
  );
};

export default Badge;
