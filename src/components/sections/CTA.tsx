import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button, Container } from '../common';

const ctaBenefits = [
  'Free quote within 24 hours',
  'No hidden fees',
  'Dedicated account manager',
];

const CTA = () => {
  return (
    <section id="contact" className="section-padding-lg bg-brand-white relative overflow-hidden" aria-labelledby="cta-title">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl" />

          {/* Subtle pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px] rounded-2xl" />

          {/* Content */}
          <div className="relative py-16 lg:py-20 px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <span className="text-caption font-medium text-white/90">Start Your Journey Today</span>
            </motion.div>

            <motion.h2
              id="cta-title"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="text-h2 text-white mb-4"
            >
              Ready to Ship Smarter?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="text-body-lg text-white/80 mb-6 max-w-xl mx-auto leading-relaxed"
            >
              Join 500+ businesses that trust LogiFlow for their logistics needs. Experience seamless shipping with cutting-edge technology.
            </motion.p>

            {/* Benefits pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="flex flex-wrap justify-center gap-2.5 mb-8"
            >
              {ctaBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-caption text-white/90"
                >
                  <CheckCircle className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.32 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-primary hover:bg-brand-background min-w-[180px]"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get Started Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 min-w-[180px]"
              >
                Talk to Sales
              </Button>
            </motion.div>

            {/* Trust note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-white/50 text-caption mt-6"
            >
              No credit card required. Get started in minutes.
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
