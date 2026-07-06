import { Container, SectionTitle, TestimonialCard } from '../common';
import { testimonials } from '../../constants/testimonials';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding-lg bg-brand-background relative overflow-hidden" aria-labelledby="testimonials-title">
      <Container className="relative">
        <SectionTitle
          badge="Testimonials"
          title="What Our Clients Say"
          description="Hear from the businesses that trust us with their logistics needs."
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
