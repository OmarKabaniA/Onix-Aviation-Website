'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { blogPosts } from '@/lib/data';
import { Calendar, Clock, ArrowLeft, Share2, Plane } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="relative">
        <Navigation />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">Post Not Found</h1>
            <Link href="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="relative">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-end overflow-hidden pt-24">
          <div className="absolute inset-0">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--onix-navy-dark))] via-[hsl(var(--onix-navy-dark))]/80 to-transparent" />
          </div>
          
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100vw' }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/4 z-10"
          >
            <Plane className="w-6 h-6 text-[hsl(var(--onix-gold))] rotate-45 opacity-40" />
          </motion.div>
          
          <div className="container mx-auto px-6 relative z-10 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/blog" className="inline-flex items-center gap-2 text-foreground/70 hover:text-[hsl(var(--onix-gold))] transition-colors mb-6">
                <ArrowLeft size={18} />
                <span>Back to Blog</span>
              </Link>
              
              <span className="inline-block px-3 py-1 glass-panel-light rounded-full text-sm font-medium text-[hsl(var(--onix-gold))] mb-4">
                {post.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-6 max-w-4xl">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-foreground/70">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))]" />
                  <span className="font-medium text-foreground">{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
                <button className="flex items-center gap-1 hover:text-[hsl(var(--onix-gold))] transition-colors">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-luxury" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  color: 'hsl(var(--foreground))',
                }}
              />
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[hsl(var(--onix-navy-dark))]" />
          <div className="absolute top-0 left-0 right-0 jet-trail-divider" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground">
                Related Articles
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="glass-panel rounded-2xl overflow-hidden h-full transition-all duration-300 hover:scale-[1.02] hover:glow-gold-sm">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--onix-navy-dark))] to-transparent opacity-60" />
                      </div>
                      <div className="p-6">
                        <span className="text-xs text-[hsl(var(--onix-gold))] font-medium">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-display font-bold text-foreground mt-2 group-hover:text-gradient transition-colors">
                          {relatedPost.title}
                        </h3>
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
