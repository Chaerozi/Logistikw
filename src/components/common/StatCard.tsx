import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { Statistic } from '../../types';

interface StatCardProps {
  statistic: Statistic;
  index: number;
}

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

const StatCard = ({ statistic, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-h1 text-white mb-1.5 tracking-tight">
        <AnimatedCounter value={statistic.value} suffix={statistic.suffix} />
      </div>
      <p className="text-white/70 text-body-sm">{statistic.label}</p>
    </motion.div>
  );
};

export default StatCard;
