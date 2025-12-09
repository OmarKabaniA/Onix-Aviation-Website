'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call - In production, this would save to database
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Store inquiry in localStorage for admin demo
    const inquiries = JSON.parse(localStorage.getItem('onix_inquiries') || '[]');
    inquiries.push({
      id: Date.now().toString(),
      ...formData,
      submittedAt: new Date().toISOString(),
      status: 'new',
    });
    localStorage.setItem('onix_inquiries', JSON.stringify(inquiries));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="relative">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
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
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-foreground mb-6"
            >
              Ready to Take Off?
              <span className="block text-gradient">Let's Talk</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto"
            >
              Start your journey to aviation marketing excellence. 
              Our team is ready to elevate your brand.
            </motion.p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-luxury" />
          <div className="absolute top-0 left-0 right-0 jet-trail-divider" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`glass-panel border-foreground/20 focus:border-[hsl(var(--onix-gold))] focus:ring-[hsl(var(--onix-gold))] text-foreground ${
                            errors.name ? 'border-red-500' : ''
                          }`}
                          placeholder="John Smith"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`glass-panel border-foreground/20 focus:border-[hsl(var(--onix-gold))] focus:ring-[hsl(var(--onix-gold))] text-foreground ${
                            errors.email ? 'border-red-500' : ''
                          }`}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="glass-panel border-foreground/20 focus:border-[hsl(var(--onix-gold))] focus:ring-[hsl(var(--onix-gold))] text-foreground"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground/80 mb-2">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="glass-panel border-foreground/20 focus:border-[hsl(var(--onix-gold))] focus:ring-[hsl(var(--onix-gold))] text-foreground"
                          placeholder="Aviation Company Inc."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`glass-panel border-foreground/20 focus:border-[hsl(var(--onix-gold))] focus:ring-[hsl(var(--onix-gold))] text-foreground resize-none ${
                          errors.message ? 'border-red-500' : ''
                        }`}
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] text-[hsl(var(--onix-navy-dark))] font-semibold hover:opacity-90 transition-opacity text-lg py-6 group"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-[hsl(var(--onix-navy-dark))] border-t-transparent rounded-full mr-2"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-panel rounded-2xl p-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    >
                      <CheckCircle2 className="mx-auto mb-6 text-[hsl(var(--onix-gold))]" size={64} />
                    </motion.div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-foreground/70 mb-6">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSuccess(false)}
                      variant="outline"
                      className="border-2 border-foreground/20 text-foreground hover:bg-foreground/10"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: 'Email Us',
                      content: 'hello@onixaviation.com',
                      link: 'mailto:hello@onixaviation.com',
                    },
                    {
                      icon: Phone,
                      title: 'Call Us',
                      content: '+1 (555) 123-4567',
                      link: 'tel:+15551234567',
                    },
                    {
                      icon: MapPin,
                      title: 'Visit Us',
                      content: '123 Aviation Blvd, Suite 500\nLos Angeles, CA 90045',
                      link: '#',
                    },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="glass-panel rounded-xl p-6 flex items-start gap-4 hover:glow-gold-sm transition-all duration-300 group cursor-pointer block"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <item.icon className="text-[hsl(var(--onix-navy-dark))]" size={24} />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-foreground/70 whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="glass-panel rounded-xl overflow-hidden h-64"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--onix-navy))] to-[hsl(var(--onix-navy-light))] flex items-center justify-center relative">
                    <div className="absolute inset-0 runway-pattern opacity-20" />
                    <MapPin className="text-[hsl(var(--onix-gold))]" size={48} />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
