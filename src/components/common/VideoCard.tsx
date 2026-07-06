import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { Video } from '../../types';

interface VideoCardProps {
  video: Video;
  index: number;
}

const VideoCard = ({ video, index }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-brand-border/40 group"
    >
      {!isPlaying ? (
        <>
          {/* Thumbnail */}
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          {/* Play Button */}
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
            aria-label={`Play video: ${video.title}`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-card"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
              </div>
            </motion.div>
          </button>
          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-white font-semibold text-base">{video.title}</h4>
          </div>
        </>
      ) : (
        <>
          {/* Embedded Video */}
          <div className="relative w-full h-full bg-black">
            <iframe
              src={`${video.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-colors duration-200"
            aria-label="Close video"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </>
      )}
    </motion.div>
  );
};

export default VideoCard;
