import { motion } from 'framer-motion';
import { Container, SectionTitle, TestimonialCard } from '../common';
import { testimonials } from '../../constants/testimonials';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding-lg bg-brand-background relative overflow-hidden" aria-labelledby="testimonials-title">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-br from-primary/3 via-accent/2 to-transparent rounded-full blur-3xl opacity-50" />

      <Container className="relative">
        <SectionTitle
          badge="Testimonials"
          title="What Our Clients Say"
          description="Hear from businesses that trust us with their logistics needs."
        />

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
