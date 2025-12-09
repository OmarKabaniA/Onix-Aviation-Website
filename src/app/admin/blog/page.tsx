'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { blogPosts, BlogPost } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Edit, Trash2, ArrowLeft, X, Save } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    category: '',
    author: '',
    metaTitle: '',
    metaDescription: '',
  });

  useEffect(() => {
    // Load posts from localStorage if available
    const savedPosts = localStorage.getItem('onix_blog_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const savePosts = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem('onix_blog_posts', JSON.stringify(newPosts));
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      featuredImage: post.featuredImage,
      category: post.category,
      author: post.author,
      metaTitle: post.metaTitle || '',
      metaDescription: post.metaDescription || '',
    });
    setIsEditing(true);
  };

  const handleCreate = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      featuredImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      category: 'Industry Insights',
      author: 'Onix Team',
      metaTitle: '',
      metaDescription: '',
    });
    setIsCreating(true);
  };

  const handleSave = () => {
    if (isCreating) {
      const newPost: BlogPost = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime: `${Math.ceil(formData.content.length / 1000)} min read`,
      };
      savePosts([newPost, ...posts]);
      setIsCreating(false);
    } else if (editingPost) {
      const updatedPosts = posts.map(p => 
        p.id === editingPost.id 
          ? { ...p, ...formData }
          : p
      );
      savePosts(updatedPosts);
      setIsEditing(false);
      setEditingPost(null);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      savePosts(posts.filter(p => p.id !== id));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Auto-generate slug from title
    if (name === 'title') {
      setFormData(prev => ({
        ...prev,
        slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      }));
    }
  };

  if (isEditing || isCreating) {
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
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => { setIsEditing(false); setIsCreating(false); setEditingPost(null); }}
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <h1 className="text-3xl font-display font-bold text-foreground">
                    {isCreating ? 'Create New Post' : 'Edit Post'}
                  </h1>
                </div>
                <Button
                  onClick={handleSave}
                  className="bg-gradient-to-r from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] text-[hsl(var(--onix-navy-dark))] font-semibold"
                >
                  <Save className="mr-2" size={18} />
                  Save Post
                </Button>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="glass-panel rounded-xl p-6">
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Title</label>
                    <Input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="glass-panel border-foreground/20 text-foreground"
                      placeholder="Enter post title"
                    />
                  </div>

                  <div className="glass-panel rounded-xl p-6">
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Slug</label>
                    <Input
                      name="slug"
                      value={formData.slug}
                      onChange={handleChange}
                      className="glass-panel border-foreground/20 text-foreground"
                      placeholder="post-url-slug"
                    />
                  </div>

                  <div className="glass-panel rounded-xl p-6">
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Excerpt</label>
                    <Textarea
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleChange}
                      rows={3}
                      className="glass-panel border-foreground/20 text-foreground resize-none"
                      placeholder="Brief description of the post"
                    />
                  </div>

                  <div className="glass-panel rounded-xl p-6">
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Content (HTML)</label>
                    <Textarea
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      rows={15}
                      className="glass-panel border-foreground/20 text-foreground resize-none font-mono text-sm"
                      placeholder="<p>Your content here...</p>"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="glass-panel rounded-xl p-6">
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Featured Image URL</label>
                    <Input
                      name="featuredImage"
                      value={formData.featuredImage}
                      onChange={handleChange}
                      className="glass-panel border-foreground/20 text-foreground"
                      placeholder="https://..."
                    />
                    {formData.featuredImage && (
                      <div className="mt-4 relative h-40 rounded-lg overflow-hidden">
                        <Image
                          src={formData.featuredImage}
                          alt="Preview"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div className="glass-panel rounded-xl p-6">
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Category</label>
                    <Input
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="glass-panel border-foreground/20 text-foreground"
                      placeholder="Industry Insights"
                    />
                  </div>

                  <div className="glass-panel rounded-xl p-6">
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Author</label>
                    <Input
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      className="glass-panel border-foreground/20 text-foreground"
                      placeholder="Author name"
                    />
                  </div>

                  <div className="glass-panel rounded-xl p-6">
                    <h3 className="font-display font-bold text-foreground mb-4">SEO Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground/80 mb-2">Meta Title</label>
                        <Input
                          name="metaTitle"
                          value={formData.metaTitle}
                          onChange={handleChange}
                          className="glass-panel border-foreground/20 text-foreground"
                          placeholder="SEO title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground/80 mb-2">Meta Description</label>
                        <Textarea
                          name="metaDescription"
                          value={formData.metaDescription}
                          onChange={handleChange}
                          rows={3}
                          className="glass-panel border-foreground/20 text-foreground resize-none"
                          placeholder="SEO description"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <Link href="/admin" className="text-foreground/70 hover:text-foreground transition-colors">
                  <ArrowLeft size={24} />
                </Link>
                <h1 className="text-3xl font-display font-bold text-foreground">
                  Manage Blog Posts
                </h1>
              </div>
              <Button
                onClick={handleCreate}
                className="bg-gradient-to-r from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] text-[hsl(var(--onix-navy-dark))] font-semibold"
              >
                <Plus className="mr-2" size={18} />
                New Post
              </Button>
            </div>

            <div className="space-y-4">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-panel rounded-xl p-6"
                >
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 glass-panel-light rounded text-xs text-[hsl(var(--onix-gold))]">
                          {post.category}
                        </span>
                        <span className="text-xs text-foreground/60">{post.date}</span>
                      </div>
                      <h3 className="font-display font-bold text-foreground mb-1 truncate">
                        {post.title}
                      </h3>
                      <p className="text-sm text-foreground/60 line-clamp-1">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(post)}
                        className="text-foreground/70 hover:text-[hsl(var(--onix-gold))]"
                      >
                        <Edit size={18} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                        className="text-foreground/70 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
