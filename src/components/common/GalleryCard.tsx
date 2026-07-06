import { useState } from 'react';
import { motion } from 'framer-motion';
import { GalleryItem } from '../../types';

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
}

const GalleryCard = ({ item, index }: GalleryCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      className="relative w-full aspect-[4/3] perspective-1000 cursor-pointer group"
      onClick={handleFlip}
      onTouchEnd={(e) => {
        e.preventDefault();
        handleFlip();
      }}
      role="button"
      tabIndex={0}
      aria-label={`${item.title} - Click to ${isFlipped ? 'view image' : 'see details'}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleFlip();
        }
      }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side - Product Image */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-soft border border-brand-border/40 group-hover:shadow-card group-hover:border-primary/20 transition-all duration-300">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span
                className={`px-2.5 py-1 rounded-lg text-caption font-semibold ${
                  item.category === 'export'
                    ? 'bg-primary text-white'
                    : 'bg-accent text-white'
                }`}
              >
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </span>
            </div>
            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h4 className="text-white font-semibold text-base">{item.title}</h4>
            </div>
          </div>
        </div>

        {/* Back Side - Product Description */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-soft border border-primary/20 bg-brand-heading">
            {/* Background image with dark overlay */}
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover opacity-20"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-heading via-brand-heading/95 to-primary/90" />
            </div>
            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-5">
              {/* Category Badge */}
              <div>
                <span
                  className={`inline-block px-2.5 py-1 rounded-lg text-caption font-semibold ${
                    item.category === 'export'
                      ? 'bg-primary text-white'
                      : 'bg-accent text-white'
                  }`}
                >
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
              </div>
              {/* Title and Description */}
              <div className="flex-1 flex flex-col justify-center py-4">
                <h4 className="text-white font-semibold text-lg mb-3">
                  {item.title}
                </h4>
                <p className="text-white/80 text-body-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              {/* Learn More Button */}
              <div className="mt-auto">
                <button
                  className="w-full py-2.5 px-4 bg-primary hover:bg-primary-600 text-white font-medium text-sm rounded-xl transition-colors duration-250"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryCard;
