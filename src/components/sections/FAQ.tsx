import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Container, SectionTitle } from '../common';
import { faqItems } from '../../constants/faq';

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
      className="group"
    >
      <div
        className={`bg-brand-white rounded-2xl border transition-all duration-300 ${
          isOpen
            ? 'border-primary/20 shadow-card'
            : 'border-brand-border/50 hover:border-primary/10 hover:shadow-soft'
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
          aria-expanded={isOpen}
        >
          <span className="font-semibold text-brand-heading group-hover:text-primary transition-colors duration-250">
            {question}
          </span>
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-250 ${
              isOpen
                ? 'bg-primary text-white'
                : 'bg-brand-surface text-brand-body group-hover:bg-primary/10 group-hover:text-primary'
            }`}
          >
            {isOpen ? (
              <Minus className="w-4 h-4" />
            ) : (
              <Plus className="w-4 h-4" />
            )}
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-5">
                <div className="h-px bg-brand-border/50 mb-4" />
                <p className="text-brand-body leading-relaxed text-body-sm">
                  {answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding-lg bg-brand-background relative overflow-hidden" aria-labelledby="faq-title">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-primary/3 to-transparent rounded-full blur-3xl opacity-50" />

      <Container className="relative">
        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our logistics services, shipping process, and export-import solutions."
        />

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
              index={index}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-brand-body text-body-sm">
            Still have questions?{' '}
            <a
              href="#contact"
              className="text-primary font-semibold hover:text-primary-600 transition-colors duration-250"
            >
              Contact our team
            </a>{' '}
            for personalized assistance.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQ;
