import { motion } from 'framer-motion';
import { GalleryCategory } from '../../types';

interface GalleryFilterProps {
  categories: GalleryCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const GalleryFilter = ({ categories, activeCategory, onCategoryChange }: GalleryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Gallery categories">
      {categories.map((category, index) => {
        const isActive = activeCategory === category.id;
        return (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: index * 0.04 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCategoryChange(category.id)}
            className={`relative px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-250 ${
              isActive
                ? 'text-white'
                : 'text-brand-body hover:text-brand-heading bg-transparent hover:bg-brand-surface'
            }`}
            role="tab"
            aria-selected={isActive}
          >
            {isActive && (
              <motion.div
                layoutId="gallery-filter-active"
                className="absolute inset-0 bg-primary rounded-lg"
                transition={{ duration: 0.25, ease: 'easeOut' }}
              />
            )}
            <span className="relative z-10">{category.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default GalleryFilter;
