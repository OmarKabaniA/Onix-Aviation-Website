'use client';

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { ClientsSection } from '@/components/clients-section';
import { BlogSection } from '@/components/blog-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ClientsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
