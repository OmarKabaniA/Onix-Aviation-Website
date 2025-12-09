'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FileText, MessageSquare, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [inquiryCount, setInquiryCount] = useState(0);
  const [blogCount, setBlogCount] = useState(4); // From mock data

  useEffect(() => {
    const inquiries = JSON.parse(localStorage.getItem('onix_inquiries') || '[]');
    setInquiryCount(inquiries.length);
  }, []);

  const stats = [
    { icon: FileText, label: 'Blog Posts', value: blogCount.toString(), href: '/admin/blog' },
    { icon: MessageSquare, label: 'Inquiries', value: inquiryCount.toString(), href: '/admin/inquiries' },
    { icon: Users, label: 'Clients', value: '150+', href: '/clients' },
    { icon: TrendingUp, label: 'Page Views', value: '12.5K', href: '#' },
  ];

  return (
    <div className="relative">
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-luxury" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-4">
              Admin Dashboard
            </h1>
            <p className="text-foreground/70">
              Manage your blog posts and view contact inquiries
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={stat.href}>
                  <div className="glass-panel rounded-xl p-6 hover:glow-gold-sm transition-all duration-300 cursor-pointer">
                    <stat.icon className="text-[hsl(var(--onix-gold))] mb-4" size={32} />
                    <div className="text-3xl font-display font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-foreground/60">
                      {stat.label}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <Link href="/admin/blog">
              <div className="glass-panel rounded-2xl p-8 hover:glow-gold-sm transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] flex items-center justify-center">
                    <FileText className="text-[hsl(var(--onix-navy-dark))]" size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground group-hover:text-gradient transition-colors">
                      Manage Blog
                    </h2>
                    <p className="text-foreground/60">Add, edit, or delete blog posts</p>
                  </div>
                </div>
                <p className="text-foreground/70">
                  Create engaging content for your aviation audience. Manage SEO settings, featured images, and more.
                </p>
              </div>
            </Link>

            <Link href="/admin/inquiries">
              <div className="glass-panel rounded-2xl p-8 hover:glow-gold-sm transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] flex items-center justify-center">
                    <MessageSquare className="text-[hsl(var(--onix-navy-dark))]" size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground group-hover:text-gradient transition-colors">
                      View Inquiries
                    </h2>
                    <p className="text-foreground/60">Review contact form submissions</p>
                  </div>
                </div>
                <p className="text-foreground/70">
                  View and manage all contact form submissions. Filter by status and export data.
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
