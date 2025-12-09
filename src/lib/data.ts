// Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'read' | 'replied';
}

// Mock Blog Data
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Private Aviation Marketing',
    slug: 'future-private-aviation-marketing',
    excerpt: 'Exploring emerging trends and technologies shaping how luxury aviation brands connect with high-net-worth clients.',
    content: `
      <p>The private aviation industry is undergoing a significant transformation in how it approaches marketing and client engagement. As we move further into the digital age, luxury aviation brands must adapt their strategies to meet the evolving expectations of high-net-worth individuals.</p>
      
      <h2>Digital-First Approach</h2>
      <p>Today's affluent travelers expect seamless digital experiences. From initial research to booking and beyond, every touchpoint must reflect the premium nature of private aviation services.</p>
      
      <h2>Personalization at Scale</h2>
      <p>Advanced data analytics and AI are enabling aviation companies to deliver highly personalized marketing messages while maintaining the exclusive feel that defines luxury travel.</p>
      
      <h2>Sustainability Messaging</h2>
      <p>Environmental consciousness is increasingly important to high-net-worth clients. Aviation brands must authentically communicate their sustainability initiatives and carbon offset programs.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80',
    category: 'Industry Insights',
    author: 'Sarah Mitchell',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    metaTitle: 'Future of Private Aviation Marketing | Onix Aviation',
    metaDescription: 'Discover emerging trends and technologies shaping luxury aviation marketing strategies for high-net-worth clients.',
  },
  {
    id: '2',
    title: 'Digital Transformation in Aviation',
    slug: 'digital-transformation-aviation',
    excerpt: 'How leading airlines are leveraging digital marketing to enhance customer experience and drive bookings.',
    content: `
      <p>Digital transformation is reshaping the aviation industry at an unprecedented pace. Airlines and aviation service providers are investing heavily in technology to improve customer experiences and operational efficiency.</p>
      
      <h2>Mobile-First Strategies</h2>
      <p>With over 70% of travel research happening on mobile devices, aviation brands must prioritize mobile experiences in their digital marketing strategies.</p>
      
      <h2>Social Media Engagement</h2>
      <p>Platforms like Instagram and LinkedIn have become crucial channels for aviation brands to showcase their services and connect with potential clients.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    category: 'Digital Strategy',
    author: 'David Chen',
    date: 'Mar 10, 2024',
    readTime: '7 min read',
    metaTitle: 'Digital Transformation in Aviation | Onix Aviation',
    metaDescription: 'Learn how leading airlines leverage digital marketing to enhance customer experience and drive bookings.',
  },
  {
    id: '3',
    title: 'Building Trust in Aviation Brands',
    slug: 'building-trust-aviation-brands',
    excerpt: 'The critical role of authentic storytelling and transparency in aviation marketing communications.',
    content: `
      <p>Trust is the foundation of any successful aviation brand. In an industry where safety and reliability are paramount, marketing communications must authentically convey these values.</p>
      
      <h2>Authentic Storytelling</h2>
      <p>Sharing real stories from pilots, crew members, and satisfied customers creates emotional connections that resonate with potential clients.</p>
      
      <h2>Transparency in Communications</h2>
      <p>Being open about safety records, maintenance procedures, and company values builds credibility and trust with discerning aviation clients.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
    category: 'Brand Strategy',
    author: 'Emily Rodriguez',
    date: 'Mar 5, 2024',
    readTime: '6 min read',
    metaTitle: 'Building Trust in Aviation Brands | Onix Aviation',
    metaDescription: 'Discover the critical role of authentic storytelling and transparency in aviation marketing.',
  },
  {
    id: '4',
    title: 'Aviation Marketing Trends for 2024',
    slug: 'aviation-marketing-trends-2024',
    excerpt: 'Key marketing trends that will shape the aviation industry in the coming year.',
    content: `
      <p>As we navigate through 2024, several key trends are emerging that will define successful aviation marketing strategies.</p>
      
      <h2>AI-Powered Personalization</h2>
      <p>Artificial intelligence is enabling unprecedented levels of personalization in aviation marketing, from targeted advertising to customized travel recommendations.</p>
      
      <h2>Video Content Dominance</h2>
      <p>Short-form video content continues to dominate social media, offering aviation brands new opportunities to showcase their services in engaging ways.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80',
    category: 'Trends',
    author: 'Michael Thompson',
    date: 'Feb 28, 2024',
    readTime: '8 min read',
    metaTitle: 'Aviation Marketing Trends 2024 | Onix Aviation',
    metaDescription: 'Explore the key marketing trends shaping the aviation industry in 2024.',
  },
];

// Mock Inquiries Data
export const inquiries: Inquiry[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@skyjet.com',
    phone: '+1 555-123-4567',
    company: 'SkyJet Aviation',
    message: 'We are looking for a comprehensive rebranding campaign for our private jet charter service. Would love to discuss how Onix can help.',
    submittedAt: '2024-03-15T10:30:00Z',
    status: 'new',
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria@globalair.com',
    company: 'Global Air Services',
    message: 'Interested in your digital marketing services for our new route launch. Please send more information.',
    submittedAt: '2024-03-14T15:45:00Z',
    status: 'read',
  },
  {
    id: '3',
    name: 'Robert Johnson',
    email: 'r.johnson@heliservices.com',
    phone: '+1 555-987-6543',
    company: 'Heli Services Inc',
    message: 'Need help with social media strategy and content creation for our helicopter tour business.',
    submittedAt: '2024-03-13T09:15:00Z',
    status: 'replied',
  },
];

// Services Data
export const services = [
  {
    id: 'brand-strategy',
    title: 'Brand Strategy',
    shortDescription: 'Navigate your brand to new heights with strategic positioning and messaging.',
    fullDescription: 'We develop comprehensive brand strategies that resonate with aviation industry stakeholders, from C-suite executives to end consumers. Our approach combines deep industry knowledge with creative excellence to position your brand for success.',
    features: [
      'Brand positioning and messaging',
      'Visual identity development',
      'Brand guidelines creation',
      'Competitive analysis',
      'Market research and insights',
    ],
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Accelerate your digital presence with data-driven campaigns and optimization.',
    fullDescription: 'Our digital marketing services are tailored specifically for the aviation sector. We understand the unique challenges and opportunities in reaching aviation decision-makers and travelers online.',
    features: [
      'Search engine optimization (SEO)',
      'Pay-per-click advertising (PPC)',
      'Social media marketing',
      'Email marketing campaigns',
      'Content marketing strategy',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 'growth-marketing',
    title: 'Growth Marketing',
    shortDescription: 'Scale your business with performance-focused growth strategies.',
    fullDescription: 'We implement growth hacking techniques, conversion optimization, and customer acquisition strategies that deliver measurable results for aviation businesses.',
    features: [
      'Conversion rate optimization',
      'A/B testing and experimentation',
      'Customer acquisition strategies',
      'Retention marketing',
      'Performance analytics',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 'pr-communications',
    title: 'PR & Communications',
    shortDescription: 'Amplify your message across aviation industry channels and media.',
    fullDescription: 'From press releases to crisis management, we handle all aspects of public relations and corporate communications for aviation brands.',
    features: [
      'Media relations',
      'Press release writing',
      'Crisis communications',
      'Thought leadership',
      'Industry event support',
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
  },
  {
    id: 'creative-production',
    title: 'Creative Production',
    shortDescription: 'Capture stunning visuals that showcase your aviation excellence.',
    fullDescription: 'Our creative team produces high-quality photography, videography, and design assets that elevate your brand and capture the essence of aviation.',
    features: [
      'Aviation photography',
      'Video production',
      'Graphic design',
      'Motion graphics',
      '3D visualization',
    ],
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
  },
  {
    id: 'analytics-insights',
    title: 'Analytics & Insights',
    shortDescription: 'Make informed decisions with comprehensive data analysis and reporting.',
    fullDescription: 'We provide detailed analytics, market research, and actionable insights to optimize your marketing performance and drive business growth.',
    features: [
      'Marketing analytics',
      'Market research',
      'Competitive intelligence',
      'ROI measurement',
      'Custom reporting dashboards',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
];

// Team Members
export const teamMembers = [
  {
    name: 'Alexandra Wright',
    role: 'CEO & Founder',
    bio: 'Former airline executive with 20+ years in aviation marketing.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Marcus Chen',
    role: 'Creative Director',
    bio: 'Award-winning designer specializing in luxury brand experiences.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Head of Strategy',
    bio: 'Strategic marketing expert with deep aviation industry knowledge.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    name: 'David Rodriguez',
    role: 'Digital Marketing Lead',
    bio: 'Data-driven marketer focused on aviation sector growth.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
];
