import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'elevated' | 'outlined';
}

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
  variant = 'default',
}: CardProps) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variants = {
    default: 'bg-brand-white shadow-card border border-brand-border/50',
    elevated: 'bg-brand-white shadow-medium border border-brand-border/30',
    outlined: 'bg-transparent border-2 border-brand-border',
  };

  return (
    <motion.div
      whileHover={hover ? { y: -2 } : {}}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`rounded-2xl ${variants[variant]} ${paddings[padding]} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
