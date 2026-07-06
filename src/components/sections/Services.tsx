import { Container, SectionTitle, ServiceCard } from '../common';
import { services } from '../../constants/services';

const Services = () => {
  return (
    <section id="services" className="section-padding-lg bg-brand-background relative overflow-hidden" aria-labelledby="services-title">
      {/* Subtle dividers */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-border/50 to-transparent" />

      <Container className="relative">
        <SectionTitle
          badge="Our Services"
          title="Comprehensive Logistics Solutions"
          description="We offer end-to-end logistics services tailored to meet your business needs with efficiency and reliability."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
