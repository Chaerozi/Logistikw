import { motion } from 'framer-motion';
import { Eye, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { Container, SectionTitle } from '../common';
import { visionMission } from '../../constants/company';

const VisionMission = () => {
  return (
    <section id="vision" className="section-padding-lg bg-brand-background relative overflow-hidden" aria-labelledby="vision-title">
      <Container className="relative">
        <SectionTitle
          badge="Our Purpose"
          title="Driving Excellence in Logistics"
          description="Our vision and mission guide every decision, shaping the future of logistics in Indonesia."
        />

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Vision Card */}
          <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group relative"
          >
            {/* Gradient border */}
            <div className="absolute -inset-px bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative bg-brand-white rounded-2xl p-6 lg:p-8">
              {/* Icon and header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-h4 text-brand-heading mb-0.5">Our Vision</h3>
                  <p className="text-caption text-brand-body">Where we&apos;re headed</p>
                </div>
              </div>

              {/* Vision content */}
              <p className="text-body text-brand-body leading-relaxed">
                {visionMission.vision}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-60" />
            </div>
          </motion.article>

          {/* Mission Card */}
          <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            className="group relative"
          >
            <div className="absolute -inset-px bg-gradient-to-br from-accent via-secondary to-primary rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative bg-brand-white rounded-2xl p-6 lg:p-8">
              {/* Icon and header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-h4 text-brand-heading mb-0.5">Our Mission</h3>
                  <p className="text-caption text-brand-body">How we&apos;ll get there</p>
                </div>
              </div>

              {/* Mission items */}
              <ul className="space-y-3">
                {visionMission.mission.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.15 + index * 0.06 }}
                    className="flex items-start gap-2.5 group/item"
                  >
                    <div className="w-5 h-5 bg-accent/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent transition-colors duration-250">
                      <CheckCircle className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-body-sm text-brand-body leading-relaxed group-hover/item:text-brand-heading transition-colors duration-250">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA link */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-1.5 mt-6 text-primary font-semibold cursor-pointer group/link"
              >
                <span className="group-hover/link:underline text-sm">Join our journey</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform duration-250" />
              </motion.div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-secondary to-primary opacity-60" />
            </div>
          </motion.article>
        </div>
      </Container>
    </section>
  );
};

export default VisionMission;
