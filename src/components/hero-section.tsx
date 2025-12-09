'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plane } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
    >
      {/* Animated Background Gradient - Sky inspired */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--onix-navy-dark))] via-[hsl(var(--onix-navy))] to-[hsl(240_35%_25%)]"
      />

      {/* Animated Airplane */}
      <motion.div
        initial={{ x: '-100%', y: 0 }}
        animate={{ x: '100vw', y: [-20, 20, -20] }}
        transition={{ 
          x: { duration: 15, repeat: Infinity, ease: 'linear' },
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-1/4 z-10"
      >
        <Plane className="w-8 h-8 text-[hsl(var(--onix-gold))] rotate-45 opacity-60" />
        {/* Jet Trail */}
        <motion.div
          className="absolute right-full top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-l from-[hsl(var(--onix-gold))] to-transparent"
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Animated Flight Path Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 0 300 Q 400 200 800 300 T 1600 300"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
        />
        <motion.path
          d="M 0 500 Q 500 400 1000 500 T 2000 500"
          stroke="url(#skyGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2.5, delay: 0.7, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--onix-gold))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--onix-gold))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--onix-gold-light))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--onix-sky))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--onix-sky))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--onix-sky-light))" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Runway-inspired Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--onix-off-white)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--onix-off-white)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 glass-panel-light rounded-full text-sm font-medium text-[hsl(var(--onix-gold))]">
              ✈️ Premium Aviation Marketing Agency
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[1.1] mb-8"
          >
            <span className="block text-foreground">Elevate Your</span>
            <span className="block text-gradient">Aviation Brand</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-12 max-w-3xl leading-relaxed"
          >
            We craft premium marketing experiences for aviation industry leaders. 
            From private jets to commercial airlines, we understand your altitude.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] text-[hsl(var(--onix-navy-dark))] font-semibold hover:opacity-90 transition-opacity text-lg px-8 py-6 glow-gold-sm group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 text-foreground hover:bg-foreground/10 text-lg px-8 py-6 backdrop-blur-sm"
              >
                Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl"
          >
            {[
              { value: '150+', label: 'Clients Served' },
              { value: '500+', label: 'Projects Completed' },
              { value: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-[hsl(var(--onix-gold))] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
