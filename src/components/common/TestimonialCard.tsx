import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group relative bg-brand-white rounded-2xl p-6 lg:p-7 shadow-card border border-brand-border/40 hover:border-primary/20 hover:shadow-medium transition-all duration-300 h-full flex flex-col"
    >
      {/* Star rating */}
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? 'fill-amber-400 text-amber-400'
                : 'fill-gray-150 text-gray-150'
            }`}
          />
        ))}
      </div>

      {/* Testimonial content */}
      <blockquote className="text-body text-brand-heading leading-relaxed flex-1">
        "{testimonial.content}"
      </blockquote>

      {/* Divider */}
      <div className="h-px bg-brand-border/50 my-5" />

      {/* Author info */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
          <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold text-brand-heading text-sm truncate group-hover:text-primary transition-colors duration-250">
            {testimonial.name}
          </h4>
          <p className="text-caption text-brand-body truncate">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default TestimonialCard;
