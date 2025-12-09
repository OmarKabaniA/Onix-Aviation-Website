'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Plane, Building2, Globe, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const clients = [
  { name: 'SkyJet Aviation', logo: 'SJ', industry: 'Private Jets', description: 'Premium private jet charter services' },
  { name: 'AeroTech Systems', logo: 'AT', industry: 'Technology', description: 'Aviation technology solutions' },
  { name: 'Global Airways', logo: 'GA', industry: 'Commercial', description: 'International airline operations' },
  { name: 'Horizon Helicopters', logo: 'HH', industry: 'Rotorcraft', description: 'Helicopter charter and tours' },
  { name: 'Altitude Logistics', logo: 'AL', industry: 'Cargo', description: 'Air freight and logistics' },
  { name: 'CloudNine Charter', logo: 'C9', industry: 'Charter', description: 'Executive charter services' },
  { name: 'Velocity Air', logo: 'VA', industry: 'Regional', description: 'Regional airline services' },
  { name: 'Apex Aviation', logo: 'AA', industry: 'MRO', description: 'Maintenance and repair' },
  { name: 'Pacific Wings', logo: 'PW', industry: 'Commercial', description: 'Pacific route specialist' },
  { name: 'Elite Jets', logo: 'EJ', industry: 'Private Jets', description: 'Ultra-luxury jet services' },
  { name: 'AirCraft Solutions', logo: 'AS', industry: 'Technology', description: 'Aviation software solutions' },
  { name: 'Northern Air', logo: 'NA', industry: 'Cargo', description: 'Arctic cargo operations' },
];

const testimonials = [
  {
    quote: "Onix Aviation transformed our brand presence. Their understanding of the aviation industry is unmatched. We've seen a 40% increase in qualified leads since partnering with them.",
    author: "Sarah Mitchell",
    role: "CMO, SkyJet Aviation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },
  {
    quote: "The creative campaigns delivered exceptional ROI. They truly understand what aviation clients need. Our brand recognition has never been stronger.",
    author: "David Chen",
    role: "VP Marketing, Global Airways",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    quote: "Working with Onix has been transformative for our digital presence. Their team's expertise in aviation marketing is evident in every campaign.",
    author: "Emily Rodriguez",
    role: "Director of Marketing, Horizon Helicopters",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
];

const industries = ['All', 'Private Jets', 'Commercial', 'Cargo', 'Technology', 'Charter', 'Rotorcraft', 'MRO', 'Regional'];

export default function ClientsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);

  const filteredClients = selectedIndustry === 'All' 
    ? clients 
    : clients.filter(client => client.industry === selectedIndustry);

  return (
    <div className="relative">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--onix-navy-dark))] via-[hsl(var(--onix-navy))] to-[hsl(var(--onix-navy-dark))]" />
          
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100vw' }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/3 z-10"
          >
            <Plane className="w-6 h-6 text-[hsl(var(--onix-gold))] rotate-45 opacity-40" />
          </motion.div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 glass-panel-light rounded-full text-sm font-medium text-[hsl(var(--onix-gold))] mb-6"
            >
              Our Clients
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-foreground mb-6"
            >
              Aviation Leaders
              <span className="block text-gradient">Trust Onix</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto"
            >
              We're proud to partner with industry-leading aviation companies 
              across private, commercial, and cargo sectors.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[hsl(var(--onix-navy-dark))]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Building2, value: '150+', label: 'Clients Worldwide' },
                { icon: Plane, value: '12', label: 'Industry Sectors' },
                { icon: Globe, value: '45+', label: 'Countries Served' },
                { icon: Zap, value: '98%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-panel rounded-xl p-6 text-center"
                >
                  <stat.icon className="mx-auto mb-3 text-[hsl(var(--onix-gold))]" size={32} />
                  <div className="text-3xl font-display font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Grid */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-luxury" />
          <div className="absolute top-0 left-0 right-0 jet-trail-divider" />
          
          <div className="container mx-auto px-6 relative z-10">
            {/* Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedIndustry === industry
                      ? 'bg-gradient-to-r from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] text-[hsl(var(--onix-navy-dark))]'
                      : 'glass-panel text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredClients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onHoverStart={() => setHoveredClient(index)}
                  onHoverEnd={() => setHoveredClient(null)}
                  className="glass-panel rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:glow-gold-sm cursor-pointer"
                >
                  <div className={`
                    w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))]
                    flex items-center justify-center font-display font-bold text-[hsl(var(--onix-navy-dark))] text-2xl mb-4
                    transition-transform duration-300
                    ${hoveredClient === index ? 'scale-110' : ''}
                  `}>
                    {client.logo}
                  </div>
                  <h3 className="font-display font-bold text-foreground text-center mb-2">
                    {client.name}
                  </h3>
                  <span className="text-xs text-foreground/60 px-3 py-1 glass-panel-light rounded-full mb-2">
                    {client.industry}
                  </span>
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredClient === index ? 1 : 0,
                      height: hoveredClient === index ? 'auto' : 0,
                    }}
                    className="text-xs text-foreground/70 text-center overflow-hidden"
                  >
                    {client.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[hsl(var(--onix-navy-dark))]" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-panel rounded-2xl p-8"
                >
                  <div className="text-4xl text-[hsl(var(--onix-gold))] mb-4">"</div>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-foreground/60">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-luxury" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Join Our Client Roster
              </h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                Become part of our growing family of aviation industry leaders.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] text-[hsl(var(--onix-navy-dark))] font-semibold hover:opacity-90 transition-opacity text-lg px-8 py-6 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
