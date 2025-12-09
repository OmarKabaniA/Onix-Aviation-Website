'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export function BlogSection() {
  return (
    <section id="blog" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--onix-navy))] to-[hsl(var(--onix-navy-dark))]" />
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-[hsl(var(--onix-gold))] opacity-5 blur-[120px] rounded-full" />

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
            Latest Insights
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-foreground mb-6">
            Aviation Marketing
            <span className="block text-gradient">Intelligence</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Stay ahead with expert insights, industry trends, and proven strategies 
            from our aviation marketing specialists.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(0, 3).map((post, index) => (
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
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--onix-navy-dark))] to-transparent opacity-60" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 glass-panel-light rounded-full text-xs font-medium text-[hsl(var(--onix-gold))]">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
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

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-gradient transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-foreground/70 mb-4 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground/20 text-foreground hover:bg-foreground/10 text-lg px-8 py-6 backdrop-blur-sm"
            >
              View All Articles
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
