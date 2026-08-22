'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'WordPress Website Development',
    description: 'Learn to build and customize professional WordPress websites, including themes, plugins, WooCommerce, customization, performance, security, and deployment.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 8 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '10+ WordPress tools and plugins' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 40 webinars with WordPress developers, up to 8 individual consultations, project reviews and feedback throughout the course',
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
        description: 'We monitor WordPress updates, Gutenberg changes, plugin ecosystem, and industry trends. If anything changes, we update the course to reflect the latest WordPress development best practices.',
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
        description: 'You can enhance your basic skills with two additional specializations — from WooCommerce to custom plugin development — and take your first freelance WordPress clients.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for code generation, debugging, content creation, and learning WordPress development — making you more productive and in-demand as a WordPress developer.',
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
    subtitle: 'Build a career in WordPress development',
    description: 'After completing the course, you will be able to work as a WordPress developer, theme developer, plugin developer, or WooCommerce specialist. You can work at an agency, as a freelancer, or build your own WordPress business. WordPress powers over 800 million websites, creating massive demand for developers.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'WordPress developer building custom themes and websites',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'WordPress developer income grows with custom development skills and client base',
    cardTitle: 'WordPress Developer',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '200,000', description: 'Starting position building WordPress sites with themes and plugins, customizing layouts, and supporting existing websites. Works under senior developers.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '450,000', description: 'Independent WordPress development: custom themes, plugin customization, WooCommerce stores, and delivering complete websites for clients.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '850,000', description: 'Builds custom plugins, leads complex WordPress projects, manages multi-site installations, and may run a WordPress agency or premium plugin business.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'WordPress Developer',
    keySkills: [
      'WordPress installation, configuration, and management',
      'Theme development: custom themes, child themes, and template hierarchy',
      'Plugin development: hooks, filters, shortcodes, and widgets',
      'Custom post types, taxonomies, and custom fields',
      'WooCommerce: e-commerce setup, customization, and payment integration',
      'WordPress security, performance optimization, and SEO',
      'PHP, HTML, CSS, and JavaScript for WordPress',
      'Page builders: Elementor and Gutenberg block development',
    ],
    softSkills: [
      'Problem-solving and debugging',
      'Client communication and project delivery',
      'Attention to detail and quality',
      'Continuous learning of WordPress ecosystem',
    ],
    tools: [
      { name: 'WordPress', desc: 'The world\'s most popular CMS for building websites, blogs, and web applications', icon: '/images/course/tool_wordpress.svg' },
      { name: 'Elementor', desc: 'Leading page builder for WordPress: visual design, responsive layouts, and dynamic content', icon: '/images/course/tool_elementor.svg' },
      { name: 'WooCommerce', desc: 'WordPress e-commerce plugin for building online stores with product management and payments', icon: '/images/course/tool_woocommerce.svg' },
      { name: 'VS Code', desc: 'Code editor for WordPress development: PHP, CSS, JavaScript, and Git integration', icon: '/images/course/tool_vscode.svg' },
      { name: 'Local by Flywheel', desc: 'Local WordPress development environment for building and testing sites on your computer', icon: '/images/course/tool_localwp.svg' },
      { name: 'Yoast SEO', desc: 'WordPress SEO plugin for on-page optimization, XML sitemaps, and meta tags', icon: '/images/course/tool_yoast.svg' },
      { name: 'Advanced Custom Fields', desc: 'WordPress plugin for creating custom fields and flexible content management systems', icon: '/images/course/tool_acf.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for PHP code generation, debugging, WordPress functions, and learning development', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real WordPress projects',
        texts: [
          'From the first weeks, you will build real WordPress websites: business sites, blogs, portfolios, and e-commerce stores. Every module includes hands-on WordPress development with real projects.',
          'By the end of the course, you will have a portfolio of 12+ WordPress projects, from custom themes to WooCommerce stores and plugin customizations.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real client work',
        texts: [
          'Practice on real WordPress projects from partner companies and freelance platforms. You will learn to work with client requirements, build custom themes, and deliver professional WordPress websites.',
          'We provide access to a PRO account on freelance platforms and help you build your first client relationships in WordPress development.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete, custom WordPress website — from theme development to plugin integration to deployment — demonstrating your ability to build production-ready WordPress sites.',
          'You will create a portfolio with live WordPress websites and code samples — exactly what employers and clients expect from a professional WordPress developer.',
        ],
        image: '/images/course/practice_portfolio.webp',
      },
    ],
  },
  program: {
    title: 'The training program is up to 8 months',
    subtitle: 'First, complete the main course, then choose one of the specializations.',
    researchNote: 'To ensure the program meets the needs of the labor market, we conduct three stages of research',
    bullets: ['Advanced training program', 'Working with a mentor'],
    mainProgram: [
      { title: 'WordPress Fundamentals', bonus: false, description: 'Master WordPress basics: installation, the dashboard, posts vs pages, themes, plugins, settings, user management, and the WordPress ecosystem. Build your first WordPress website.' },
      { title: 'Theme Development', bonus: false, description: 'Learn to build custom WordPress themes: template hierarchy, PHP template files, the loop, functions.php, child themes, CSS styling, and creating responsive custom themes from scratch.' },
      { title: 'Plugin Development', bonus: false, description: 'Master WordPress plugin development: hooks (actions and filters), shortcodes, widgets, admin pages, settings API, and building custom plugins that extend WordPress functionality.' },
      { title: 'Custom Content & Fields', bonus: false, description: 'Learn custom post types, taxonomies, and custom fields with Advanced Custom Fields (ACF). Build flexible content management systems that let clients manage complex content easily.' },
      { title: 'Page Builders & Gutenberg', bonus: false, description: 'Master WordPress page building: Elementor for visual design, Gutenberg block development, creating custom blocks, and building editable layouts that clients can manage.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to build a complete custom WordPress website with a custom theme, plugins, and CMS features. Present your website for defense to senior WordPress developers.' },
      { title: 'WooCommerce Development', bonus: true, description: 'Learn WooCommerce: setting up online stores, product management, payment gateways, shipping, WooCommerce theming, and customizing the e-commerce experience.' },
      { title: 'WordPress Security & Performance', bonus: true, description: 'Master WordPress security and performance: hardening WordPress, SSL, backups, caching, image optimization, database optimization, and making WordPress sites fast and secure.' },
      { title: 'How to start freelancing', bonus: true, description: 'Step-by-step guide to launching your freelance WordPress career: finding clients, pricing projects, managing maintenance contracts, and delivering professional WordPress websites.' },
      { title: 'AI for WordPress developers', bonus: true, description: 'Practical AI for WordPress: ChatGPT for PHP code generation, AI for debugging, automated content creation, and using AI to learn WordPress development faster.' },
    ],
    specializations: [
      { title: 'WooCommerce Development', isNew: false, description: 'Specialize in WooCommerce: custom store development, payment integration, shipping, product management, and building professional e-commerce experiences with WordPress.' },
      { title: 'Custom Plugin Development', isNew: false, description: 'Master custom plugin development: advanced hooks, REST API integration, database operations, settings frameworks, and building commercial WordPress plugins.' },
      { title: 'Theme Development', isNew: false, description: 'Specialize in custom themes: advanced theme architecture, Gutenberg block themes, full site editing, and building premium WordPress themes.' },
      { title: 'Headless WordPress', isNew: true, description: 'Learn headless WordPress: WP REST API, GraphQL with WPGraphQL, React/Next.js frontend, and using WordPress as a backend for modern JavaScript applications.' },
      { title: 'WordPress Maintenance', isNew: false, description: 'Master WordPress maintenance: site management, security monitoring, performance optimization, updates, backups, and building a WordPress maintenance business.' },
      { title: 'Multi-Site & Enterprise', isNew: true, description: 'Learn enterprise WordPress: WordPress Multisite, large-scale deployments, managed hosting, and managing WordPress for large organizations and networks.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'WordPress: The Basics',
        description: 'A basic course to get started with WordPress development',
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
          'WordPress Development Basics',
          '8 instruments',
          '1 final project – custom WordPress site, 10 portfolio pieces',
          'WordPress Fundamentals and Theme Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'WordPress Developer',
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
          '6 months',
          'WordPress Development + Selectable Specialization',
          'Additional classes on WooCommerce, security, and freelancing basics',
          '10 instruments',
          '2 final projects, live WordPress sites, 20 exercises',
          'Help with finding WordPress developer jobs',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'WordPress Developer: Advanced',
        description: 'Full base and 2 specializations for comprehensive WordPress expertise',
        oldPrice: '360,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '10,000',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '216,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '8 months',
          'WordPress Development + 2 Specializations to Choose From',
          'Additional classes on WooCommerce, security, AI tools, and headless WordPress',
          '10+ instruments',
          '4 final projects, full portfolio, 30 exercises',
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
        { q: 'Do I need coding experience to learn WordPress?', a: 'No, the course starts with WordPress fundamentals that require no coding. We gradually introduce PHP, CSS, and JavaScript as needed for theme and plugin development. Beginners can start and build up to custom development.' },
        { q: 'Do I need hosting for the course?', a: 'No, we use Local by Flywheel for local WordPress development on your computer. You\'ll learn to develop locally and deploy to hosting when ready. We also cover choosing and setting up hosting for production websites.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with WordPress developers, hands-on website building assignments, and project reviews. You study according to a schedule but can always return to materials. Lesson recordings are stored for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. WordPress development requires practice, so expect to spend additional time building websites and themes for your portfolio.' },
      ],
      Profession: [
        { q: 'Will I be able to find work after completing the course?', a: 'Yes, we provide career support including portfolio building, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months. WordPress development is in high demand with over 800 million WordPress sites.' },
        { q: 'Can I work as a freelance WordPress developer?', a: 'Absolutely! WordPress is one of the most popular freelance development skills. The course covers finding clients, pricing projects, and managing freelance WordPress work. We also provide access to freelance platforms.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'WordPress Website Development',
  },
}

export default function WordPressLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
