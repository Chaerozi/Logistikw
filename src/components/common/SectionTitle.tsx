import { motion } from 'framer-motion';

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({
  badge,
  title,
  description,
  centered = true,
  className = '',
}: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`${centered ? 'text-center' : ''} mb-12 lg:mb-14 ${className}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full mb-5"
        >
          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
          <span className="text-caption text-primary uppercase tracking-wide font-semibold">
            {badge}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="text-h2 text-brand-heading mb-4"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className={`text-body-lg text-brand-body leading-relaxed ${
            centered ? 'max-w-2xl mx-auto' : 'max-w-xl'
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
