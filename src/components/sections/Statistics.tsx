import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { Container } from '../common';
import { statistics } from '../../constants/statistics';
import { Package, Building2, TrendingUp, Heart } from 'lucide-react';

const statIcons = [Package, Building2, TrendingUp, Heart];

const AnimatedCounter = ({ value, suffix }: { value: string; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayValue = useTransform(rounded, (latest) => `${latest}${suffix || ''}`);

  useEffect(() => {
    const numValue = parseInt(value);
    const controls = animate(count, numValue, {
      duration: 1.8,
      ease: 'easeOut',
    });
    return controls.stop;
  }, [count, value]);

  return <motion.span className="tabular-nums">{displayValue}</motion.span>;
};

const Statistics = () => {
  return (
    <section className="section-padding-lg relative overflow-hidden" aria-label="Company statistics">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1.5px,transparent_1.5px)] bg-[size:48px_48px] opacity-40" />

      <Container className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-5"
          >
            <TrendingUp className="w-3.5 h-3.5 text-white/80" aria-hidden="true" />
            <span className="text-caption font-medium text-white/90 uppercase tracking-wide">
              Our Impact
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-h2 text-white mb-3"
          >
            Numbers That Speak
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="text-body text-white/70 max-w-lg mx-auto"
          >
            Our commitment to excellence is reflected in every milestone we achieve.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {statistics.map((statistic, index) => {
            const IconComponent = statIcons[index] || Package;
            return (
              <motion.div
                key={statistic.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 lg:p-6 border border-white/10 hover:border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-250">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Counter value */}
                  <div className="text-h2 text-white mb-1 tracking-tight">
                    <AnimatedCounter value={statistic.value} suffix={statistic.suffix} />
                  </div>

                  {/* Label */}
                  <p className="text-white/70 text-body-sm">{statistic.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Statistics;
