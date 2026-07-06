import { motion } from 'framer-motion';
import { Container } from '../common';
import { partners } from '../../constants/partners';

const Partners = () => {
  return (
    <section className="py-12 lg:py-16 bg-brand-white relative overflow-hidden" aria-label="Trusted partners">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-border/50 to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-caption font-semibold text-brand-body uppercase tracking-wide">
            Trusted by Industry Leaders
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-5 lg:gap-x-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="px-5 py-3 rounded-lg hover:bg-brand-surface transition-colors duration-250">
                <span className="text-lg lg:text-xl font-bold text-brand-body/35 group-hover:text-primary transition-colors duration-250 tracking-tight">
                  {partner.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-border/50 to-transparent" />
    </section>
  );
};

export default Partners;
