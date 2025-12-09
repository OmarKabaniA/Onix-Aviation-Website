'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Phone, Building2, Calendar, Eye, Check, Download, Filter } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Inquiry } from '@/lib/data';

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'replied'>('all');

  useEffect(() => {
    // Load inquiries from localStorage
    const savedInquiries = JSON.parse(localStorage.getItem('onix_inquiries') || '[]');
    setInquiries(savedInquiries);
  }, []);

  const updateInquiryStatus = (id: string, status: 'new' | 'read' | 'replied') => {
    const updatedInquiries = inquiries.map(inq =>
      inq.id === id ? { ...inq, status } : inq
    );
    setInquiries(updatedInquiries);
    localStorage.setItem('onix_inquiries', JSON.stringify(updatedInquiries));
    
    if (selectedInquiry?.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status });
    }
  };

  const handleViewInquiry = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    if (inquiry.status === 'new') {
      updateInquiryStatus(inquiry.id, 'read');
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Message', 'Date', 'Status'];
    const rows = inquiries.map(inq => [
      inq.name,
      inq.email,
      inq.phone || '',
      inq.company || '',
      inq.message.replace(/,/g, ';'),
      new Date(inq.submittedAt).toLocaleDateString(),
      inq.status,
    ]);
    
    const csv = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `inquiries-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const filteredInquiries = filter === 'all' 
    ? inquiries 
    : inquiries.filter(inq => inq.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-green-500/20 text-green-400';
      case 'read': return 'bg-yellow-500/20 text-yellow-400';
      case 'replied': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

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
                  Contact Inquiries
                </h1>
              </div>
              <Button
                onClick={exportToCSV}
                variant="outline"
                className="border-foreground/20 text-foreground hover:bg-foreground/10"
              >
                <Download className="mr-2" size={18} />
                Export CSV
              </Button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3 mb-8">
              <Filter size={18} className="text-foreground/60" />
              {(['all', 'new', 'read', 'replied'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === status
                      ? 'bg-gradient-to-r from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] text-[hsl(var(--onix-navy-dark))]'
                      : 'glass-panel text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                  {status !== 'all' && (
                    <span className="ml-2">
                      ({inquiries.filter(i => i.status === status).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {inquiries.length === 0 ? (
              <div className="glass-panel rounded-xl p-12 text-center">
                <Mail className="mx-auto mb-4 text-foreground/40" size={48} />
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  No Inquiries Yet
                </h3>
                <p className="text-foreground/60">
                  Contact form submissions will appear here.
                </p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Inquiry List */}
                <div className="lg:col-span-1 space-y-4">
                  {filteredInquiries.map((inquiry, index) => (
                    <motion.div
                      key={inquiry.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      onClick={() => handleViewInquiry(inquiry)}
                      className={`glass-panel rounded-xl p-4 cursor-pointer transition-all duration-300 hover:glow-gold-sm ${
                        selectedInquiry?.id === inquiry.id ? 'ring-2 ring-[hsl(var(--onix-gold))]' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-display font-bold text-foreground truncate">
                          {inquiry.name}
                        </h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(inquiry.status)}`}>
                          {inquiry.status}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/60 truncate mb-2">
                        {inquiry.email}
                      </p>
                      <p className="text-sm text-foreground/70 line-clamp-2">
                        {inquiry.message}
                      </p>
                      <div className="flex items-center gap-1 mt-3 text-xs text-foreground/50">
                        <Calendar size={12} />
                        <span>{new Date(inquiry.submittedAt).toLocaleDateString()}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Inquiry Detail */}
                <div className="lg:col-span-2">
                  {selectedInquiry ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="glass-panel rounded-xl p-8"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                            {selectedInquiry.name}
                          </h2>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedInquiry.status)}`}>
                            {selectedInquiry.status}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateInquiryStatus(selectedInquiry.id, 'replied')}
                            className="border-foreground/20 text-foreground hover:bg-foreground/10"
                          >
                            <Check className="mr-1" size={14} />
                            Mark Replied
                          </Button>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] flex items-center justify-center">
                            <Mail className="text-[hsl(var(--onix-navy-dark))]" size={18} />
                          </div>
                          <div>
                            <p className="text-xs text-foreground/60">Email</p>
                            <a href={`mailto:${selectedInquiry.email}`} className="text-foreground hover:text-[hsl(var(--onix-gold))]">
                              {selectedInquiry.email}
                            </a>
                          </div>
                        </div>

                        {selectedInquiry.phone && (
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] flex items-center justify-center">
                              <Phone className="text-[hsl(var(--onix-navy-dark))]" size={18} />
                            </div>
                            <div>
                              <p className="text-xs text-foreground/60">Phone</p>
                              <a href={`tel:${selectedInquiry.phone}`} className="text-foreground hover:text-[hsl(var(--onix-gold))]">
                                {selectedInquiry.phone}
                              </a>
                            </div>
                          </div>
                        )}

                        {selectedInquiry.company && (
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] flex items-center justify-center">
                              <Building2 className="text-[hsl(var(--onix-navy-dark))]" size={18} />
                            </div>
                            <div>
                              <p className="text-xs text-foreground/60">Company</p>
                              <p className="text-foreground">{selectedInquiry.company}</p>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] flex items-center justify-center">
                            <Calendar className="text-[hsl(var(--onix-navy-dark))]" size={18} />
                          </div>
                          <div>
                            <p className="text-xs text-foreground/60">Submitted</p>
                            <p className="text-foreground">
                              {new Date(selectedInquiry.submittedAt).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-display font-bold text-foreground mb-3">Message</h3>
                        <div className="glass-panel-light rounded-lg p-4">
                          <p className="text-foreground/80 whitespace-pre-wrap leading-relaxed">
                            {selectedInquiry.message}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-3">
                        <Button
                          onClick={() => window.location.href = `mailto:${selectedInquiry.email}`}
                          className="bg-gradient-to-r from-[hsl(var(--onix-gold))] to-[hsl(var(--onix-gold-light))] text-[hsl(var(--onix-navy-dark))] font-semibold"
                        >
                          <Mail className="mr-2" size={18} />
                          Reply via Email
                        </Button>
                        {selectedInquiry.phone && (
                          <Button
                            variant="outline"
                            onClick={() => window.location.href = `tel:${selectedInquiry.phone}`}
                            className="border-foreground/20 text-foreground hover:bg-foreground/10"
                          >
                            <Phone className="mr-2" size={18} />
                            Call
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="glass-panel rounded-xl p-12 text-center h-full flex flex-col items-center justify-center">
                      <Eye className="mx-auto mb-4 text-foreground/40" size={48} />
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">
                        Select an Inquiry
                      </h3>
                      <p className="text-foreground/60">
                        Click on an inquiry to view details
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
