import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group relative bg-brand-white rounded-2xl shadow-card border border-brand-border/40 hover:border-primary/20 hover:shadow-medium transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          loading="lazy"
        />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-primary text-white text-caption font-semibold rounded-lg shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-h4 text-brand-heading mb-2 group-hover:text-primary transition-colors duration-250">
          {product.name}
        </h3>
        <p className="text-body-sm text-brand-body leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 flex-1">
          {product.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-brand-body">
              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-body-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Learn more button */}
        <motion.div className="flex items-center gap-1.5 mt-5 text-primary font-semibold text-sm group/btn cursor-pointer">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
    </motion.article>
  );
};

export default ProductCard;
