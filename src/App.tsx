import { Navbar, Footer } from './components/layout';
import {
  Hero,
  About,
  Gallery,
  Testimonials,
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-brand-background font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
