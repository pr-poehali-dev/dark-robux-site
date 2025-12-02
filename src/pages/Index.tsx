import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Reviews />
        <FAQ />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
