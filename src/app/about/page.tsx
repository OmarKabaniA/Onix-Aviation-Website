'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Target, Eye, Award, Users, Plane } from 'lucide-react';
import { teamMembers } from '@/lib/data';
import Image from 'next/image';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We exist to elevate aviation brands through strategic marketing excellence and creative innovation.',
  },
  {
    icon: Eye,
    title: 'Visionary Approach',
    description: 'We see beyond the horizon, anticipating industry trends and positioning our clients for future success.',
  },
  {
    icon: Award,
    title: 'Excellence Always',
    description: 'We deliver premium quality in every project, maintaining the highest standards of professionalism.',
  },
  {
    icon: Users,
    title: 'Partnership Focus',
    description: 'We build lasting relationships, becoming trusted advisors and extensions of our clients\' teams.',
  },
];

const milestones = [
  { year: '2009', event: 'Founded in Los Angeles' },
  { year: '2012', event: 'Expanded to International Markets' },
  { year: '2016', event: 'Launched Digital Innovation Lab' },
  { year: '2020', event: 'Reached 100+ Aviation Clients' },
  { year: '2024', event: 'Industry Leader in Aviation Marketing' },
];

export default function AboutPage() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--onix-navy-dark))] via-[hsl(var(--onix-navy))] to-[hsl(var(--onix-navy-dark))]" />
          
          {/* Animated Plane */}
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-foreground mb-6"
            >
              Aviation Marketing
              <span className="block text-gradient">Specialists</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto"
            >
              For over 15 years, we've been the trusted marketing partner for aviation 
              industry leaders worldwide, combining deep sector knowledge with creative excellence.
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-luxury" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-2xl p-8 md:p-12 max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                    Our Story
                  </h2>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    Founded by aviation enthusiasts and marketing professionals, Onix Aviation 
                    was born from a simple observation: the aviation industry deserved marketing 
                    partners who truly understood its unique challenges and opportunities.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    Today, we're proud to be the go-to agency for aviation brands seeking to 
                    elevate their presence, connect with their audiences, and achieve measurable 
                    business growth.
                  </p>
                </div>
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80"
                    alt="Aviation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--onix-navy-dark))] to-transparent opacity-60" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[hsl(var(--onix-navy-dark))]" />
          <div className="absolute top-0 left-0 right-0 jet-trail-divider" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-panel rounded-xl p-6 text-center hover:glow-gold-sm transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-[hsl(var(--onix-navy-dark))]" size={28} />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-luxury" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Aviation experts and creative professionals dedicated to your success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-panel rounded-xl p-6 text-center group hover:glow-gold-sm transition-all duration-300"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[hsl(var(--onix-gold))] mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-foreground/60">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
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
                Our Journey
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))]" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="glass-panel rounded-xl p-6 inline-block">
                        <div className="text-2xl font-display font-bold text-gradient mb-2">
                          {milestone.year}
                        </div>
                        <p className="text-foreground/80">
                          {milestone.event}
                        </p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] flex-shrink-0 relative z-10" />
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
