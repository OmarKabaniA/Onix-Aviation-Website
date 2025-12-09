'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { blogPosts } from '@/lib/data';
import { Calendar, Clock, ArrowRight, Plane } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const categories = ['All', 'Industry Insights', 'Digital Strategy', 'Brand Strategy', 'Trends'];

export default function BlogPage() {
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
              Blog & Insights
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-foreground mb-6"
            >
              Aviation Marketing
              <span className="block text-gradient">Intelligence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto"
            >
              Stay ahead with expert insights, industry trends, and proven strategies 
              from our aviation marketing specialists.
            </motion.p>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts[0] && (
          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(var(--onix-navy-dark))]" />
            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  <div className="glass-panel rounded-2xl overflow-hidden group cursor-pointer hover:glow-gold-sm transition-all duration-300">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={blogPosts[0].featuredImage}
                          alt={blogPosts[0].title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(var(--onix-navy-dark))] opacity-60" />
                        <span className="absolute top-4 left-4 px-3 py-1 glass-panel-light rounded-full text-xs font-medium text-[hsl(var(--onix-gold))]">
                          Featured
                        </span>
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-[hsl(var(--onix-gold))] text-sm font-medium mb-3">
                          {blogPosts[0].category}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 group-hover:text-gradient transition-colors">
                          {blogPosts[0].title}
                        </h2>
                        <p className="text-foreground/70 mb-6 leading-relaxed">
                          {blogPosts[0].excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-foreground/60 mb-6">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{blogPosts[0].date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{blogPosts[0].readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-[hsl(var(--onix-gold))] font-medium group-hover:gap-3 transition-all">
                          <span>Read Article</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-luxury" />
          <div className="absolute top-0 left-0 right-0 jet-trail-divider" />
          
          <div className="container mx-auto px-6 relative z-10">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-r from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] text-[hsl(var(--onix-navy-dark))]'
                      : 'glass-panel text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="glass-panel rounded-2xl overflow-hidden h-full transition-all duration-300 hover:scale-[1.02] hover:glow-gold-sm">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--onix-navy-dark))] to-transparent opacity-60" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 glass-panel-light rounded-full text-xs font-medium text-[hsl(var(--onix-gold))]">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-gradient transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-foreground/70 mb-4 leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-[hsl(var(--onix-gold))] font-medium group-hover:gap-3 transition-all">
                          <span>Read Article</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
