'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Compass, Gauge, TrendingUp, Megaphone, Camera, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: Compass,
    title: 'Brand Strategy',
    description: 'Navigate your brand to new heights with strategic positioning and messaging.',
    details: 'We develop comprehensive brand strategies that resonate with aviation industry stakeholders, from C-suite executives to end consumers.',
  },
  {
    icon: Gauge,
    title: 'Digital Marketing',
    description: 'Accelerate your digital presence with data-driven campaigns and optimization.',
    details: 'Our digital marketing services include SEO, PPC, social media management, and content marketing tailored for the aviation sector.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Marketing',
    description: 'Scale your business with performance-focused growth strategies.',
    details: 'We implement growth hacking techniques, conversion optimization, and customer acquisition strategies that deliver measurable results.',
  },
  {
    icon: Megaphone,
    title: 'PR & Communications',
    description: 'Amplify your message across aviation industry channels and media.',
    details: 'From press releases to crisis management, we handle all aspects of public relations and corporate communications.',
  },
  {
    icon: Camera,
    title: 'Creative Production',
    description: 'Capture stunning visuals that showcase your aviation excellence.',
    details: 'Our creative team produces high-quality photography, videography, and design assets that elevate your brand.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Make informed decisions with comprehensive data analysis and reporting.',
    details: 'We provide detailed analytics, market research, and actionable insights to optimize your marketing performance.',
  },
];

export function ServicesSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-luxury" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[hsl(var(--onix-gold))] opacity-5 blur-[120px] rounded-full" />
      
      {/* Jet Trail Divider */}
      <div className="absolute top-0 left-0 right-0 jet-trail-divider" />
      
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
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-foreground mb-6">
            Comprehensive Aviation
            <span className="block text-gradient">Marketing Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            From strategy to execution, we deliver end-to-end marketing services 
            designed specifically for the aviation industry.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setExpandedCard(index)}
              onHoverEnd={() => setExpandedCard(null)}
              className="group relative"
            >
              <div className="glass-panel rounded-2xl p-8 h-full transition-all duration-300 hover:scale-[1.02] hover:glow-gold-sm cursor-pointer">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-[hsl(var(--onix-navy-dark))]" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Expandable Details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedCard === index ? 'auto' : 0,
                    opacity: expandedCard === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-foreground/60 mb-4 leading-relaxed">
                    {service.details}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[hsl(var(--onix-gold))] hover:text-[hsl(var(--onix-gold-light))] p-0"
                  >
                    Learn More →
                  </Button>
                </motion.div>

                {/* Hover Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: expandedCard === index ? 1 : 0 }}
                  className="absolute bottom-4 right-4 text-[hsl(var(--onix-gold))] text-sm font-medium"
                >
                  Explore
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] text-[hsl(var(--onix-navy-dark))] font-semibold hover:opacity-90 transition-opacity text-lg px-8 py-6"
            >
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
