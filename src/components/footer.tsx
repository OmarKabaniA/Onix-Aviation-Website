'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  services: [
    { label: 'Brand Strategy', href: '/services#brand-strategy' },
    { label: 'Digital Marketing', href: '/services#digital-marketing' },
    { label: 'Growth Marketing', href: '/services#growth-marketing' },
    { label: 'PR & Communications', href: '/services#pr-communications' },
    { label: 'Creative Production', href: '/services#creative-production' },
    { label: 'Analytics & Insights', href: '/services#analytics-insights' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Clients', href: '/clients' },
    { label: 'Case Studies', href: '/clients' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Industry Reports', href: '/blog' },
    { label: 'Whitepapers', href: '/blog' },
    { label: 'Newsletter', href: '/contact' },
    { label: 'FAQs', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[hsl(var(--onix-navy-dark))] pt-20 pb-8">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 runway-pattern" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold text-foreground mb-3">
                Stay Updated
              </h3>
              <p className="text-foreground/70">
                Get the latest aviation marketing insights delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="glass-panel border-foreground/20 focus:border-[hsl(var(--onix-gold))] text-foreground flex-1"
                disabled={isSubscribed}
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] text-[hsl(var(--onix-navy-dark))] font-semibold hover:opacity-90 transition-opacity"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  'Subscribed!'
                ) : (
                  <>
                    <Mail className="mr-2" size={18} />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/onix-logo.jpeg"
                alt="Onix Aviation"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div>
                <span className="text-xl font-display font-extrabold text-foreground">ONIX</span>
                <span className="text-xl font-display font-light text-foreground/80 ml-1">AVIATION</span>
              </div>
            </Link>
            <p className="text-foreground/70 mb-6 leading-relaxed max-w-md">
              Elevating aviation brands through strategic marketing, creative excellence, 
              and industry expertise since 2009.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-foreground/70 hover:text-[hsl(var(--onix-gold))] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-[hsl(var(--onix-gold))] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-[hsl(var(--onix-gold))] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display font-bold text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-[hsl(var(--onix-gold))] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Onix Aviation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-foreground/60 hover:text-[hsl(var(--onix-gold))] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-[hsl(var(--onix-gold))] transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-[hsl(var(--onix-gold))] transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
