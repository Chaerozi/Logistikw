import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../common';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-brand-white"
      aria-label="Hero"
    >
      {/* Subtle radial gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary/[0.03] via-transparent to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-secondary/[0.03] via-transparent to-transparent rounded-full transform -translate-x-1/3 translate-y-1/3" />

      {/* Decorative blurred circles behind image */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/[0.03] rounded-full blur-3xl" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm font-semibold text-primary tracking-wide">
                Trusted Logistics Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-brand-heading leading-[1.15] tracking-tight mb-6"
            >
              Global Logistics
              <br />
              <span className="text-primary">Delivered Locally</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg text-brand-body leading-relaxed mb-8 max-w-md"
            >
              End-to-end supply chain solutions with real-time tracking, customs expertise, and reliable delivery across 150+ cities nationwide.
            </motion.p>

            {/* Key points */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-8"
            >
              {['99% On-Time Delivery', 'Fully Insured Cargo', '24/7 Support'].map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-brand-body">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Contact Us
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="bg-brand-white border border-brand-border hover:bg-brand-surface hover:border-primary/30 transition-all duration-250"
              >
                Our Gallery
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative lg:pl-4"
          >
            {/* Main image container */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Image wrapper */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-border/30 group">
                <img
                  src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Global logistics operations - cargo containers at modern shipping terminal"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[560px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Accent decoration */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
