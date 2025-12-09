'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plane, Building2, Globe, Zap } from 'lucide-react';

const clients = [
  { name: 'SkyJet Aviation', logo: 'SJ', size: 'large', industry: 'Private Jets' },
  { name: 'AeroTech Systems', logo: 'AT', size: 'medium', industry: 'Technology' },
  { name: 'Global Airways', logo: 'GA', size: 'large', industry: 'Commercial' },
  { name: 'Horizon Helicopters', logo: 'HH', size: 'small', industry: 'Rotorcraft' },
  { name: 'Altitude Logistics', logo: 'AL', size: 'medium', industry: 'Cargo' },
  { name: 'CloudNine Charter', logo: 'C9', size: 'small', industry: 'Charter' },
  { name: 'Velocity Air', logo: 'VA', size: 'medium', industry: 'Regional' },
  { name: 'Apex Aviation', logo: 'AA', size: 'small', industry: 'MRO' },
];

const testimonials = [
  {
    quote: "Onix Aviation transformed our brand presence. Their understanding of the aviation industry is unmatched.",
    author: "Sarah Mitchell",
    role: "CMO, SkyJet Aviation",
  },
  {
    quote: "The creative campaigns delivered exceptional ROI. They truly understand what aviation clients need.",
    author: "David Chen",
    role: "VP Marketing, Global Airways",
  },
];

export function ClientsSection() {
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);

  return (
    <section id="clients" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[hsl(var(--onix-navy-dark))]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[hsl(var(--onix-sky))] opacity-5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 glass-panel-light rounded-full text-sm font-medium text-[hsl(var(--onix-gold))] mb-6">
            Trusted Partners
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-foreground mb-6">
            Aviation Leaders
            <span className="block text-gradient">Choose Onix</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            We're proud to partner with industry-leading aviation companies 
            across private, commercial, and cargo sectors.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
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
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
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
        </motion.div>

        {/* Client Grid - Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onHoverStart={() => setHoveredClient(index)}
              onHoverEnd={() => setHoveredClient(null)}
              className={`
                glass-panel rounded-xl p-8 flex flex-col items-center justify-center
                transition-all duration-300 hover:scale-105 hover:glow-gold-sm cursor-pointer
                ${client.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${client.size === 'medium' ? 'md:col-span-2' : ''}
              `}
            >
              {/* Logo Placeholder */}
              <div className={`
                rounded-full bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))]
                flex items-center justify-center font-display font-bold text-[hsl(var(--onix-navy-dark))] mb-4
                transition-transform duration-300
                ${client.size === 'large' ? 'w-24 h-24 text-3xl' : 'w-16 h-16 text-xl'}
                ${hoveredClient === index ? 'scale-110' : ''}
              `}>
                {client.logo}
              </div>

              {/* Client Name */}
              <h3 className={`
                font-display font-bold text-foreground text-center mb-2
                ${client.size === 'large' ? 'text-2xl' : 'text-lg'}
              `}>
                {client.name}
              </h3>

              {/* Industry Tag */}
              <span className="text-xs text-foreground/60 px-3 py-1 glass-panel-light rounded-full">
                {client.industry}
              </span>

              {/* Hover Details */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: hoveredClient === index ? 1 : 0,
                  height: hoveredClient === index ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <p className="text-sm text-[hsl(var(--onix-gold))] font-medium">
                  View Case Study →
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
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
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))]" />
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
  );
}
