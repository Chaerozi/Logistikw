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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-medium border border-brand-border/30 group bg-brand-heading"
    >
      {!isPlaying ? (
        <>
          {/* Thumbnail */}
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Duration badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-black/40 backdrop-blur-sm rounded-lg">
            <Clock className="w-3.5 h-3.5 text-white/80" />
            <span className="text-xs font-medium text-white/90">{video.duration}</span>
          </div>

          {/* Play Button */}
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
            aria-label={`Play video: ${video.title}`}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl"
            >
              <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
            </motion.div>
          </button>

          {/* Title and description */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h4 className="text-white font-semibold text-lg mb-1">{video.title}</h4>
            <p className="text-white/70 text-sm line-clamp-2">{video.description}</p>
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
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
            aria-label="Close video"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </>
      )}
    </motion.div>
  );
};

export default VideoCard;
