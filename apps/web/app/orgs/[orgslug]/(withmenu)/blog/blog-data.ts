export interface BlogCategory {
  slug: string
  name: string
  href: string
}

export interface BlogTag {
  slug: string
  name: string
  href: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt?: string
  image: string
  category: string
  tag?: string
  date: string
  href: string
  featured?: boolean
}

export interface BlogNewsItem {
  id: string
  title: string
  excerpt: string
  date: string
  href: string
}

export const blogCategories: BlogCategory[] = [
  { slug: 'professions', name: 'Modern Professions', href: '/blog/category/professions' },
  { slug: 'what-is', name: 'Figure Out', href: '/blog/category/what-is' },
  { slug: 'books', name: 'Bookshelf', href: '/blog/category/books' },
  { slug: 'experience', name: 'Personal Experience', href: '/blog/category/experience' },
  { slug: 'productivity', name: 'Self-Development', href: '/blog/category/productivity' },
  { slug: 'lists', name: 'Collections', href: '/blog/category/lists' },
  { slug: 'career', name: 'Career', href: '/blog/category/career' },
  { slug: 'easy', name: 'Simply About the Complex', href: '/blog/category/easy' },
  { slug: 'education', name: 'Learn to Learn', href: '/blog/category/education' },
  { slug: 'hybreed', name: 'Hybreed', href: '/blog/category/hybreed' },
  { slug: 'news', name: 'News', href: '/blog/news' },
]

export const blogTags: BlogTag[] = [
  { slug: 'business', name: '#business and management', href: '/blog/tag/business' },
  { slug: 'marketing', name: '#marketing', href: '/blog/tag/marketing' },
  { slug: 'analytics', name: '#analytics and data science', href: '/blog/tag/analytics' },
  { slug: 'design', name: '#design and ux', href: '/blog/tag/design' },
  { slug: 'creation', name: '#creation', href: '/blog/tag/creation' },
  { slug: 'programming', name: '#programming', href: '/blog/tag/programming' },
  { slug: 'edtech', name: '#edtech', href: '/blog/tag/edtech' },
  { slug: 'finance', name: '#finance', href: '/blog/tag/finance' },
]

export const newsItems: BlogNewsItem[] = [
  {
    id: 'news-1',
    title: '14 Free Courses and Lessons on AI and Neural Networks',
    excerpt: 'We have gathered programs and lectures to help beginners master neural networks. We provide knowledge for using AI in design, analytics, business, management, editing, and medicine.',
    date: '14 November 2025',
    href: '/blog/news/free-courses-ai',
  },
  {
    id: 'news-2',
    title: '10 Free Programming Courses for Beginners',
    excerpt: 'For those who have long been considering programming but were hesitant to try their hand at a new direction, we have gathered options to get acquainted with in-demand professions.',
    date: '23 October 2025',
    href: '/blog/news/free-courses-programming',
  },
  {
    id: 'news-3',
    title: '15 Free Design Courses and Lessons in Various Fields',
    excerpt: 'Courses and lessons in design across different fields: graphic design, UX/UI, environmental design, illustration, 3D modeling and animation, motion and game design.',
    date: '03 October 2025',
    href: '/blog/news/free-courses-design',
  },
]

export const featuredCollection: BlogPost[] = [
  {
    id: 'feat-1',
    title: 'How to Choose an Online Course: Formats, Criteria, and Questions for the Manager',
    image: '/images/home/sf-start-1.webp',
    category: 'Figure Out',
    date: 'August 2021',
    href: '/blog/how-to-choose-online-course',
  },
  {
    id: 'feat-2',
    title: 'Diploma, Certificate, and Training Course — What Documents Are Issued in Online Courses?',
    image: '/images/course/diploma.webp',
    category: 'Figure Out',
    date: 'August 2021',
    href: '/blog/diploma-certificate',
  },
  {
    id: 'feat-3',
    title: 'How to Get a Tax Deduction for Tuition: What to Look For and Whether It Is Worth Applying Through Intermediaries',
    image: '/images/home/sf-goals-2.webp',
    category: 'Figure Out',
    date: 'December 2019',
    href: '/blog/tax-deduction',
  },
  {
    id: 'feat-4',
    title: 'How to Learn as an Adult, Why It Is Important, and Why It Is Not Too Late',
    image: '/images/home/collection-9.webp',
    category: 'Figure Out',
    date: 'December 2022',
    href: '/blog/adult-learning',
  },
]

export const articleFeed: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Automation Engineer: Career Guide',
    image: '/images/home/collection-1.webp',
    category: 'Figure Out',
    tag: '#programming',
    date: '15 July 2026',
    href: '/blog/automation-engineer',
  },
  {
    id: 'post-2',
    title: 'The Most Popular Professions in Analytics',
    image: '/images/home/collection-2.webp',
    category: 'Modern Professions',
    tag: '#business and management',
    date: '13 July 2026',
    href: '/blog/popular-analyst-professions',
  },
  {
    id: 'post-3',
    title: 'Landscape Design: Where to Start and What Styles Exist',
    image: '/images/home/collection-3.webp',
    category: 'Figure Out',
    tag: '#design and ux',
    date: '10 July 2026',
    href: '/blog/landscape-design',
  },
  {
    id: 'post-4',
    title: 'University Admission After College on an Accelerated Program — Do You Need to Take the Unified State Exam?',
    image: '/images/home/collection-4.webp',
    category: 'Figure Out',
    date: '30 June 2026',
    href: '/blog/university-after-college',
  },
  {
    id: 'post-5',
    title: 'Targeted University Training: What It Is, How to Apply, and the Pros and Cons of the Agreement',
    image: '/images/home/collection-5.webp',
    category: 'Figure Out',
    tag: '#edtech',
    date: '30 June 2026',
    href: '/blog/targeted-university-training',
  },
  {
    id: 'post-6',
    title: 'Video Production: From Idea to Editing and How to Enter the Profession',
    image: '/images/home/collection-6.webp',
    category: 'Figure Out',
    tag: '#marketing',
    date: '25 June 2026',
    href: '/blog/video-production',
  },
  {
    id: 'post-7',
    title: 'Data-Driven Personnel Assessment: How to Measure Soft Skills',
    image: '/images/home/collection-7.webp',
    category: 'Figure Out',
    tag: '#business and management',
    date: '25 June 2026',
    href: '/blog/data-driven-personnel-assessment',
  },
  {
    id: 'post-8',
    title: 'Spatial Thinking: What It Is and How to Develop It for Interior Design',
    image: '/images/home/collection-8.webp',
    category: 'Figure Out',
    tag: '#design and ux',
    date: '23 June 2026',
    href: '/blog/spatial-thinking',
  },
]

export const specialProject = {
  title: 'Where We Are Not: How IT Professionals Live in Different Cities',
  description: 'A special project in which we explore how the IT industry is developing in different regions. Specialists talk about the pros and cons of working and living in different cities.',
  image: '/images/home/corporate-training.webp',
  href: '/blog/special-project-it-cities',
  banners: [
    '/images/home/slide1.webp',
    '/images/home/slide2.webp',
    '/images/home/slide3.webp',
    '/images/home/slide4.webp',
  ],
}
