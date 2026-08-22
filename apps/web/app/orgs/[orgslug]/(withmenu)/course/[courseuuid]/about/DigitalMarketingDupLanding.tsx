'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Digital Marketing: Master Online Promotion & Growth Strategies',
    description: 'Master digital marketing channels: social media, content marketing, email campaigns, paid advertising, and SEO. Learn to create marketing strategies, analyze results, and drive business growth online.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 12 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '15+ marketing platforms' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 40 webinars with marketing experts, up to 8 individual consultations, campaign reviews and feedback throughout the course',
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
        description: 'We monitor changes in social media algorithms, advertising platforms, and marketing tools. If anything changes, we update the course to reflect the latest trends and best practices.',
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
        description: 'You can enhance your basic skills with two additional specializations — from SMM to SEO — and take your first freelance marketing clients.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for content creation, ad copy, audience research, and campaign optimization — making you more effective and in-demand as a digital marketer.',
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
    subtitle: 'Build a career in digital marketing and online promotion',
    description: 'After completing the course, you will be able to work as a digital marketing specialist, SMM manager, content marketer, or marketing strategist. You can work in an agency, in-house at a company, or as a freelance marketer. Digital marketing skills are in high demand as every business needs an online presence.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Digital marketer working on campaigns and analytics',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Salaries in digital marketing grow with experience, campaign results, and client portfolio',
    cardTitle: 'Digital Marketing Specialist',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '200,000', description: 'Starting position managing social media posts, basic ad campaigns, and content creation. Works under supervision on marketing execution tasks.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '450,000', description: 'Independent management of marketing campaigns, budget allocation, performance analysis, and strategy development. Handles multiple channels and clients.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '850,000', description: 'Leads marketing departments, develops comprehensive strategies, manages large budgets, and drives growth for companies or multiple agency clients.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Digital Marketing Specialist',
    keySkills: [
      'Social media marketing and community management',
      'Content strategy and creation for digital channels',
      'Paid advertising: Google Ads, Facebook Ads, Instagram Ads',
      'Email marketing and automation workflows',
      'SEO fundamentals and content optimization',
      'Marketing analytics and performance reporting',
      'Marketing strategy and campaign planning',
      'Influencer marketing and partnership management',
    ],
    softSkills: [
      'Creativity and content thinking',
      'Analytical mindset for data-driven decisions',
      'Communication and client management',
      'Adaptability to platform changes',
    ],
    tools: [
      { name: 'Google Ads', desc: 'Advertising platform for search, display, and video ads with targeting and conversion tracking', icon: '/images/course/tool_googleads.svg' },
      { name: 'Meta Ads Manager', desc: 'Facebook and Instagram advertising platform for creating, managing, and analyzing ad campaigns', icon: '/images/course/tool_metaads.svg' },
      { name: 'Google Analytics', desc: 'Web analytics platform for tracking traffic, user behavior, and marketing campaign performance', icon: '/images/course/tool_googleanalytics.svg' },
      { name: 'Canva', desc: 'Design platform for creating social media graphics, presentations, and marketing visuals', icon: '/images/course/tool_canva.svg' },
      { name: 'Mailchimp', desc: 'Email marketing platform for campaigns, automation, newsletters, and subscriber management', icon: '/images/course/tool_mailchimp.svg' },
      { name: 'Buffer', desc: 'Social media management tool for scheduling posts, analyzing performance, and managing multiple accounts', icon: '/images/course/tool_buffer.svg' },
      { name: 'SEMrush', desc: 'SEO and competitive analysis tool for keyword research, site audits, and tracking rankings', icon: '/images/course/tool_semrush.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for ad copy, content ideas, audience research, and marketing strategy brainstorming', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real marketing campaigns',
        texts: [
          'From the first weeks, you will create real marketing campaigns: social media content, ad campaigns, email sequences, and SEO-optimized content. Each module includes hands-on marketing projects.',
          'By the end of the course, you will have a portfolio of 12+ marketing assets, from social media calendars to full campaign reports and marketing strategies.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real orders and freelancing',
        texts: [
          'Practice on real tasks from partner companies and freelance platforms. You will learn to manage client campaigns, report on results, and deliver marketing services to actual businesses.',
          'We provide access to a PRO account on freelance platforms and help you build your first client relationships in digital marketing.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete digital marketing strategy for a real or simulated business — from audience research to campaign execution to performance analysis.',
          'You will also create campaign reports, content calendars, and strategy decks — exactly what employers expect from a professional digital marketer.',
        ],
        image: '/images/course/practice_portfolio.webp',
      },
    ],
  },
  program: {
    title: 'The training program is up to 12 months',
    subtitle: 'First, complete the main course, then choose one of the specializations.',
    researchNote: 'To ensure the program meets the needs of the labor market, we conduct three stages of research',
    bullets: ['Advanced training program', 'Working with a mentor'],
    mainProgram: [
      { title: 'Digital Marketing Fundamentals', bonus: false, description: 'Introduction to the digital marketing ecosystem: channels, platforms, metrics, and the role of a marketer. Learn how businesses use digital marketing to reach customers and drive growth.' },
      { title: 'Social Media Marketing', bonus: false, description: 'Master SMM across platforms: content strategy, posting schedules, community management, engagement tactics, and paid social advertising on Facebook, Instagram, and TikTok.' },
      { title: 'Content Marketing', bonus: false, description: 'Learn content strategy: blog posts, videos, infographics, and social content. Master content calendars, storytelling, and creating content that drives engagement and conversions.' },
      { title: 'Paid Advertising', bonus: false, description: 'Master Google Ads and Meta Ads: campaign setup, audience targeting, ad creative, budget management, A/B testing, and conversion optimization for search and social campaigns.' },
      { title: 'Marketing Analytics', bonus: false, description: 'Learn to measure and analyze marketing performance: Google Analytics, KPIs, ROI calculation, conversion tracking, and creating reports that demonstrate campaign impact.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to develop and execute a complete digital marketing campaign for a real or simulated business. Present your results and strategy for defense to industry experts.' },
      { title: 'Email Marketing', bonus: true, description: 'Master email marketing: list building, segmentation, automation sequences, newsletters, and drip campaigns using Mailchimp and similar platforms.' },
      { title: 'SEO Fundamentals', bonus: true, description: 'Learn search engine optimization: keyword research, on-page SEO, link building, and tracking rankings. Understand how to get organic traffic from Google.' },
      { title: 'How to start freelancing', bonus: true, description: 'Step-by-step guide to launching your freelance marketing career: finding clients, packaging services, pricing campaigns, and managing multiple client accounts.' },
      { title: 'AI for marketers', bonus: true, description: 'Practical use of AI in marketing: ChatGPT for content and ad copy, Midjourney for visuals, automated research, and using AI to scale marketing output.' },
    ],
    specializations: [
      { title: 'SMM & Content', isNew: false, description: 'Specialize in social media and content: advanced content strategies, influencer marketing, community building, and social media management at scale.' },
      { title: 'Performance Marketing', isNew: false, description: 'Master performance marketing: advanced ad campaigns, conversion optimization, retargeting, and scaling paid acquisition across Google and Meta platforms.' },
      { title: 'SEO', isNew: false, description: 'Specialize in SEO: technical SEO, content optimization, link building strategies, local SEO, and ranking for competitive keywords.' },
      { title: 'Email & CRM Marketing', isNew: true, description: 'Master lifecycle marketing: email automation, CRM segmentation, personalized campaigns, and customer retention strategies using marketing automation platforms.' },
      { title: 'E-commerce Marketing', isNew: false, description: 'Learn marketing for online stores: product page optimization, shopping ads, marketplace promotion, and conversion rate optimization for e-commerce.' },
      { title: 'Brand Marketing', isNew: true, description: 'Specialize in brand marketing: brand strategy, positioning, visual identity, brand campaigns, and building long-term brand equity in digital channels.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Digital Marketing: The Basics',
        description: 'A basic course to get acquainted with digital marketing and start working',
        oldPrice: '180,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '7,500',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '108,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '5 months',
          'Digital Marketing Basics',
          '13 instruments',
          '1 final project – marketing campaign, 12 portfolio cases',
          'SMM and Content Marketing Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Digital Marketer',
        description: 'All the base and focus on specialization in one direction',
        oldPrice: '320,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '8,900',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '192,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '8 months',
          'Digital Marketing Fundamentals + Selectable Specialization',
          'Additional classes on email marketing, SEO, and freelancing basics',
          '15 instruments',
          '2 final projects, group campaign, 20 cases',
          'Help with finding a job',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Digital Marketer: Advanced',
        description: 'Full base and 2 specializations for more flexible work',
        oldPrice: '400,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '11,100',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '240,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '12 months',
          'Digital Marketing Fundamentals + 2 Specializations to Choose From',
          'Additional classes on email, SEO, AI tools, and brand marketing',
          '15+ instruments',
          '4 final projects, group campaign, 30 cases',
          'Internship opportunities with partner companies',
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
        { q: 'Do I need marketing experience to start?', a: 'No, the course is designed for beginners. We start with the fundamentals of digital marketing and gradually move to advanced topics. You just need basic computer skills and familiarity with social media. No prior marketing experience is required.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with marketing experts, practical campaign assignments, and tests. You study according to a schedule but can always return to materials you need. Lesson recordings are stored in your personal account for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. You can speed up or slow down the course depending on your schedule. Online classes are held up to 2 times a week in the evening.' },
        { q: 'Can I study and work at the same time?', a: 'Yes, the program is designed for working professionals. Classes are held in the evening, and all materials are available in your personal account. You can also pause your studies for up to 6 months if needed.' },
      ],
      Profession: [
        { q: 'Will I be able to find a job after completing the course?', a: 'Yes, we provide career support including resume preparation, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months of completing the course. Digital marketing is one of the most in-demand skills in the job market.' },
        { q: 'Do I need prior experience to start?', a: 'No, the course is designed for beginners. We start with the fundamentals of marketing and gradually move to advanced topics. You just need basic computer skills and a desire to learn.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Digital Marketing',
  },
}

export default function DigitalMarketingDupLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
