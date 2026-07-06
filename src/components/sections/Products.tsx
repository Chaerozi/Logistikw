import { Container, SectionTitle, ProductCard } from '../common';
import { products } from '../../constants/products';

const Products = () => {
  return (
    <section id="products" className="section-padding-lg bg-brand-white relative overflow-hidden" aria-labelledby="products-title">
      {/* Subtle background pattern */}
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl transform -translate-y-1/2 opacity-60" />
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl transform -translate-y-1/2 opacity-50" />

      <Container className="relative">
        <SectionTitle
          badge="Our Solutions"
          title="Comprehensive Logistics Solutions"
          description="End-to-end logistics services designed to simplify transportation, warehousing, and supply chain operations."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
