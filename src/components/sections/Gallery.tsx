import { motion } from 'framer-motion';
import { Container, GalleryCard, VideoCard } from '../common';
import { galleryProducts, galleryVideos } from '../../constants/gallery';

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding-lg bg-brand-white relative overflow-hidden" aria-labelledby="gallery-title">
      <Container className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full mb-5"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-caption text-primary uppercase tracking-wide font-semibold">
              Our Gallery
            </span>
          </motion.div>
          <h2 id="gallery-title" className="text-h2 text-brand-heading mb-3">
            Explore Our Solutions
          </h2>
          <p className="text-body-lg text-brand-body max-w-2xl mx-auto">
            Discover our logistics products and watch our operations in action.
          </p>
        </motion.div>

        {/* Products Subsection */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-h4 text-brand-heading mb-6"
          >
            Products
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryProducts.map((item, index) => (
              <GalleryCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Videos Subsection */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-h4 text-brand-heading mb-6"
          >
            Videos
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
