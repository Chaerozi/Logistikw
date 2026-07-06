import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, Clock } from 'lucide-react';
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
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-card border border-brand-border/30 group bg-brand-heading"
    >
      {!isPlaying ? (
        <>
          {/* Thumbnail */}
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Duration badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-0.5 bg-black/50 rounded-lg">
            <Clock className="w-3 h-3 text-white/80" />
            <span className="text-xs font-medium text-white/90">{video.duration}</span>
          </div>

          {/* Play Button */}
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
            aria-label={`Play video: ${video.title}`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-large group-hover:bg-white transition-colors duration-250"
            >
              <Play className="w-5 h-5 text-primary ml-0.5" fill="currentColor" />
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
            className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors duration-200"
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
