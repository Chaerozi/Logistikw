import { motion } from 'framer-motion';
import { Container, GalleryCard, VideoCard } from '../common';
import { galleryProducts, galleryVideos } from '../../constants/gallery';

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding-lg bg-brand-white relative overflow-hidden" aria-labelledby="gallery-title">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-background to-transparent opacity-50" />

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full mb-5"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-caption text-primary uppercase tracking-wide font-semibold">
              Our Gallery
            </span>
          </motion.div>
          <h2 id="gallery-title" className="text-h2 text-brand-heading mb-4">
            Explore Our Solutions
          </h2>
          <p className="text-body-lg text-brand-body max-w-2xl mx-auto leading-relaxed">
            Discover our logistics products and watch our operations in action.
          </p>
        </motion.div>

        {/* Products Subsection */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1 h-6 bg-primary rounded-full" />
            <h3 className="text-h4 text-brand-heading font-semibold">Products</h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {galleryProducts.map((item, index) => (
              <GalleryCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Videos Subsection - Premium Style */}
        <div>
          {/* Video Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h3 className="text-h4 text-brand-heading font-semibold">Videos</h3>
            </div>
            <p className="text-body text-brand-body">
              Watch our operations and see logistics excellence in action.
            </p>
          </motion.div>

          {/* Videos Grid - All same size */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {galleryVideos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
