'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Digital Media & Content Creation',
    description: 'Learn to plan, create, and manage engaging digital content for social media, websites, brands, and online audiences using modern creative tools.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 10 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '12+ content creation tools' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 40 webinars with content creators, up to 8 individual consultations, portfolio reviews and feedback throughout the course',
        bgImage: '/images/course/approach_live.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="4" y="8" width="32" height="24" rx="4" stroke="#0087CD" strokeWidth="2" fill="none"/>
            <path d="M4 12L20 22L36 12" stroke="#0087CD" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title: 'Current knowledge',
        description: 'We monitor changes in content platforms, video formats, social media trends, and creator tools. If anything changes, we update the course to reflect the latest content creation best practices.',
        bgImage: '/images/course/approach_knowledge.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="16" stroke="#0087CD" strokeWidth="2" fill="none"/>
            <path d="M20 12V20L26 24" stroke="#0087CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        title: 'Selecting a profile',
        description: 'You can enhance your basic skills with two additional specializations — from video production to podcasting — and start monetizing your content creation skills.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for content ideation, video editing, thumbnail design, and caption writing — making you more productive and creative as a content creator.',
        bgImage: '/images/course/approach_ai.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="10" y="10" width="20" height="20" rx="4" stroke="#0087CD" strokeWidth="2" fill="none"/>
            <circle cx="20" cy="20" r="4" stroke="#0087CD" strokeWidth="2" fill="none"/>
            <path d="M20 4V10M20 30V36M4 20H10M30 20H36" stroke="#0087CD" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ),
      },
    ],
  },
  careerOutcomes: {
    title: 'Work flexibly and confidently',
    subtitle: 'Build a career in digital content creation and media',
    description: 'After completing the course, you will be able to work as a content creator, social media producer, video editor, or digital media specialist. You can work at a media company, create content for brands, or build your own audience as an independent creator. Content creation skills are in high demand across every industry.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Content creator producing video and social media content',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Content creation income grows with audience, portfolio, and client base',
    cardTitle: 'Digital Content Creator',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '180,000', description: 'Starting position creating social media content, basic videos, and graphics for brands or agencies. Works under guidance on content calendars and production.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '400,000', description: 'Independent content production: video editing, social media management, content strategy, and working with multiple clients or managing a brand presence.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '750,000', description: 'Leads content teams, develops content strategies for major brands, manages production budgets, or earns significant income as an established independent creator.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Digital Media & Content Creator',
    keySkills: [
      'Video production: shooting, editing, and post-production',
      'Photography: composition, lighting, and photo editing',
      'Social media content strategy and storytelling',
      'Podcast production: recording, editing, and distribution',
      'Content calendar planning and workflow management',
      'Copywriting for social media, blogs, and video scripts',
      'Visual design: thumbnails, graphics, and brand assets',
      'Content distribution and audience growth strategies',
    ],
    softSkills: [
      'Creativity and storytelling',
      'Adaptability to trends and platforms',
      'Time management and content consistency',
      'Audience empathy and engagement',
    ],
    tools: [
      { name: 'Adobe Premiere Pro', desc: 'Professional video editing software for cutting, color grading, audio, and effects', icon: '/images/course/tool_premiere.svg' },
      { name: 'Canva', desc: 'Design platform for social media graphics, thumbnails, presentations, and visual content', icon: '/images/course/tool_canva.svg' },
      { name: 'CapCut', desc: 'Mobile video editor for creating social media content, reels, and short-form videos', icon: '/images/course/tool_capcut.svg' },
      { name: 'Adobe Photoshop', desc: 'Photo editing and graphic design software for professional image manipulation', icon: '/images/course/tool_photoshop.svg' },
      { name: 'Audacity', desc: 'Free audio editing software for podcast production, voiceovers, and sound design', icon: '/images/course/tool_audacity.svg' },
      { name: 'Buffer', desc: 'Social media scheduling tool for planning and publishing content across platforms', icon: '/images/course/tool_buffer.svg' },
      { name: 'Notion', desc: 'Content planning workspace for editorial calendars, scripts, and production workflows', icon: '/images/course/tool_notion.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for content ideation, script writing, captions, and creative brainstorming', icon: '/images/course/tool_chatgpt.svg' },
    ],
  },
  diploma: {
    title: 'Diploma of professional retraining',
    licenseText: 'The document is issued by Hybreed Academy, which has an educational license',
    description: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.',
  },
  practice: {
    title: 'Practice from the first weeks',
    cards: [
      {
        title: 'Real content production',
        texts: [
          'From the first weeks, you will create real content: shooting and editing videos, taking and editing photos, recording podcasts, and designing social media posts. Every module includes hands-on production work.',
          'By the end of the course, you will have a portfolio of 12+ content pieces across formats — from short-form videos to photo stories and podcast episodes.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real client work',
        texts: [
          'Practice on real content projects from partner companies and freelance platforms. You will learn to produce content for brands, manage client briefs, and deliver professional media assets.',
          'We help you build your first client relationships in content creation and provide frameworks for delivering professional work.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete content campaign — from strategy to production to distribution — showcasing your ability to create compelling content that drives engagement.',
          'You will build a professional portfolio with diverse content formats, demonstrating your range and creativity to potential employers or clients.',
        ],
        image: '/images/course/practice_portfolio.webp',
      },
    ],
  },
  program: {
    title: 'The training program is up to 10 months',
    subtitle: 'First, complete the main course, then choose one of the specializations.',
    researchNote: 'To ensure the program meets the needs of the labor market, we conduct three stages of research',
    bullets: ['Advanced training program', 'Working with a mentor'],
    mainProgram: [
      { title: 'Content Creation Fundamentals', bonus: false, description: 'Introduction to digital content: formats, platforms, audience psychology, and the content creation lifecycle. Learn what makes content engaging and how to develop a content creator mindset.' },
      { title: 'Video Production', bonus: false, description: 'Master video creation: shooting techniques, lighting, audio recording, editing in Premiere Pro and CapCut, color grading, and producing content for YouTube, TikTok, and Instagram.' },
      { title: 'Photography & Visual Design', bonus: false, description: 'Learn photography fundamentals: composition, lighting, and editing in Photoshop. Master visual design for social media: thumbnails, graphics, and brand-consistent visuals using Canva.' },
      { title: 'Social Media Storytelling', bonus: false, description: 'Master social media content: platform-specific strategies, storytelling frameworks, content calendars, engagement tactics, and building a consistent brand voice across channels.' },
      { title: 'Content Distribution & Growth', bonus: false, description: 'Learn to distribute content effectively: platform algorithms, posting strategies, hashtags, collaborations, and organic growth techniques to build and engage an audience.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to create a complete content campaign across multiple platforms. Produce videos, photos, and social posts, then present your content strategy and results for defense.' },
      { title: 'Podcast Production', bonus: true, description: 'Learn podcasting: recording equipment, audio editing in Audacity, episode planning, interview techniques, and distributing on Spotify, Apple Podcasts, and YouTube.' },
      { title: 'Copywriting for Content', bonus: true, description: 'Master content copywriting: video scripts, social media captions, blog posts, headlines, and storytelling that captures attention and drives engagement.' },
      { title: 'How to monetize content', bonus: true, description: 'Learn to earn from content creation: brand deals, sponsored content, affiliate marketing, platform monetization, and building a sustainable creator income.' },
      { title: 'AI for content creators', bonus: true, description: 'Practical use of AI in content: ChatGPT for scripts and ideas, AI image generation, automated editing tools, and scaling content production with AI assistance.' },
    ],
    specializations: [
      { title: 'Video Production', isNew: false, description: 'Specialize in video: advanced editing, motion graphics, color grading, multi-camera production, and creating professional video content for brands and platforms.' },
      { title: 'Social Media Content', isNew: false, description: 'Master social media content: platform-specific strategies, viral content, community management, and building engaged followings on TikTok, Instagram, and YouTube.' },
      { title: 'Podcasting', isNew: false, description: 'Specialize in podcasting: show development, audio production, interview skills, podcast marketing, and building a loyal listener base.' },
      { title: 'Brand Content', isNew: true, description: 'Learn brand content creation: brand storytelling, product content, corporate videos, and creating content that aligns with brand identity and marketing goals.' },
      { title: 'Photography', isNew: false, description: 'Master digital photography: product photography, portrait photography, photo editing, and building a professional photography portfolio for clients.' },
      { title: 'Content Strategy', isNew: true, description: 'Specialize in content strategy: content audits, editorial planning, content operations, and managing content teams for organizations and brands.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Content Creation: The Basics',
        description: 'A basic course to get started with digital content creation',
        oldPrice: '160,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '6,700',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '96,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '4 months',
          'Content Creation Basics',
          '8 instruments',
          '1 final project – content campaign, 10 portfolio pieces',
          'Video and Photography Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Content Creator',
        description: 'All the base and focus on specialization in one direction',
        oldPrice: '280,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '7,800',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '168,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '7 months',
          'Content Creation Fundamentals + Selectable Specialization',
          'Additional classes on podcasting, copywriting, and content monetization',
          '12 instruments',
          '2 final projects, content portfolio, 20 pieces',
          'Help with finding clients',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Content Creator: Advanced',
        description: 'Full base and 2 specializations for more flexible work',
        oldPrice: '360,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '10,000',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '216,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '10 months',
          'Content Creation Fundamentals + 2 Specializations to Choose From',
          'Additional classes on podcasting, copywriting, AI tools, and content strategy',
          '12+ instruments',
          '4 final projects, full portfolio, 30 pieces',
          'Freelance client acquisition support',
          'Diploma of professional retraining',
        ],
        recommended: false,
        gradient: false,
      },
    ],
  },
  faq: {
    title: 'Answering questions',
    tabs: ['Payment', 'Education', 'Profession'],
    questions: {
      Payment: [
        { q: 'How to arrange an installment plan, what are the terms and conditions for an installment plan?', a: 'You can pay for the course in installments for up to 36 months without overpayments. To arrange an installment plan, select the appropriate option at checkout. You will need to fill out a short form and wait for approval. The installment plan is available without a guarantor and without a bank visit.' },
        { q: 'What is payment by installments?', a: 'Payment by installments means you divide the total cost of the course into equal monthly payments over a period of up to 36 months. There are no additional fees or interest — you pay exactly the same amount as with a one-time payment, just spread out over time.' },
        { q: 'How do I get a refund if I don\'t like the course?', a: 'You can request a full refund within 14 days of the start of training, no questions asked. After this period, a proportional refund is possible for the unused portion of the course. To request a refund, contact our support team.' },
        { q: 'How to pay for tuition from abroad?', a: 'We accept international payments via bank card (Visa, Mastercard) and international wire transfer. You can also use PayPal or other international payment systems. Contact our support team for detailed instructions on international payments.' },
        { q: 'What is a tax deduction for education and how to get it?', a: 'A tax deduction allows you to return part of the money spent on education. You can get back up to 13% of the course cost if you have an official employment contract and pay personal income tax. To receive the deduction, you need to collect the necessary documents (license, payment receipt, contract) and submit them to the tax authority.' },
      ],
      Education: [
        { q: 'Do I need expensive equipment to start?', a: 'No, you can start with a smartphone. The course teaches you to create professional content with basic equipment and gradually upgrade as you grow. We also cover what equipment to invest in first when you\'re ready to level up.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with content creators, hands-on production assignments, and portfolio reviews. You study according to a schedule but can always return to materials. Lesson recordings are stored for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week, including production time. Content creation requires practice, so expect to spend additional time shooting, editing, and creating content for your portfolio.' },
        { q: 'Can I study and work at the same time?', a: 'Yes, the program is designed for working professionals. Classes are held in the evening, and all materials are available in your personal account. You can also pause your studies for up to 6 months if needed.' },
      ],
      Profession: [
        { q: 'Will I be able to find work after completing the course?', a: 'Yes, we provide career support and client acquisition guidance. 84% of our graduates achieve their career goals within 3 months. Content creation skills are in demand at agencies, brands, media companies, and as freelance work.' },
        { q: 'Can I build my own audience as a creator?', a: 'Yes! The course covers audience growth strategies, platform algorithms, and content distribution. Many of our students build significant followings during the course itself. We also teach monetization strategies for independent creators.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Digital Media & Content Creation',
  },
}

export default function DigitalMediaLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
