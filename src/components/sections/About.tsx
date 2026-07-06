import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import { Container, Button, SectionTitle } from '../common';
import { companyInfo } from '../../constants/company';

const aboutHighlights = [
  { icon: Award, value: '15+', label: 'Years Experience', description: 'Proven track record in logistics excellence' },
  { icon: Users, value: '500+', label: 'Enterprise Clients', description: 'Trusted by leading businesses' },
  { icon: Globe, value: '150+', label: 'Cities Covered', description: 'Nationwide logistics network' },
  { icon: TrendingUp, value: '25K+', label: 'Monthly Shipments', description: 'Reliable delivery operations' },
];

const About = () => {
  return (
    <section id="about" className="section-padding-lg bg-brand-white relative overflow-hidden" aria-labelledby="about-title">
      {/* Subtle background accents */}
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl transform -translate-y-1/2 opacity-60" />
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl transform -translate-y-1/2 opacity-50" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <SectionTitle
              badge="About LogiFlow"
              title={`Delivering Excellence Since 2009`}
              description={`${companyInfo.description} With over 15 years of experience, we have established ourselves as a leader in Indonesia's logistics industry.`}
              centered={false}
            />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <Button variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Learn More
              </Button>
              <Button variant="outline" size="md">
                Our Story
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-4"
          >
            {aboutHighlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className={`group bg-brand-surface rounded-xl p-5 hover:shadow-card transition-all duration-300 ${
                  index % 2 === 1 ? 'mt-6' : ''
                }`}
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Value */}
                <div className="text-2xl font-bold text-brand-heading mb-0.5">{item.value}</div>

                {/* Label */}
                <div className="font-semibold text-brand-heading text-caption mb-1">{item.label}</div>

                {/* Description */}
                <p className="text-brand-body text-caption">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
