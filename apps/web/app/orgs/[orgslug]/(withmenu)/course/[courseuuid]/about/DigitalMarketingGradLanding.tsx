'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Digital Marketing for Marketing Graduates',
    description: 'Turn your marketing knowledge into practical digital skills through SEO, social media, content, advertising, analytics, and modern marketing platforms.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 8 months' },
      { title: 'Level', value: 'Intermediate to advanced' },
      { title: 'Tools', value: '15+ digital marketing platforms' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 30 webinars with senior marketers, up to 6 individual consultations, campaign reviews and portfolio feedback throughout the course',
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
        description: 'We monitor changes in marketing technology, automation platforms, and consumer behavior. If anything changes, we update the course to reflect the latest digital marketing innovations.',
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
        description: 'You can enhance your digital skills with two additional specializations — from growth marketing to brand strategy — and position yourself for senior marketing roles.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for campaign optimization, content scaling, audience segmentation, and marketing analytics — making you a more effective and data-driven marketer.',
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
    subtitle: 'Accelerate your marketing career with digital expertise',
    description: 'After completing the course, you will be positioned for roles like digital marketing manager, growth marketer, marketing strategist, or performance marketing lead. Your marketing degree combined with digital skills makes you a strong candidate for mid-level and senior marketing positions across industries.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Marketing graduate working on digital campaigns and analytics',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Marketing graduates with digital skills command higher starting salaries and faster career growth',
    cardTitle: 'Digital Marketing Manager',
    points: [
      { label: 'Entry+', sublabel: '0-1 year with degree', position: 0, salary: '300,000', description: 'Starting position leveraging marketing degree plus digital skills. Manages social media, content, and basic ad campaigns with faster advancement than non-digital peers.' },
      { label: 'Mid-level', sublabel: '2-3 years experience', position: 50, salary: '600,000', description: 'Manages multi-channel campaigns, marketing budgets, and strategy. Leads digital initiatives and reports on ROI to senior management.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '1,100,000', description: 'Leads marketing departments, drives growth strategy, manages teams, and oversees comprehensive digital marketing operations for companies or agencies.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Digital skills that complement your marketing education',
    professionName: 'Digital Marketing Manager (Graduate Track)',
    keySkills: [
      'Digital campaign strategy and multi-channel orchestration',
      'Performance marketing: Google Ads, Meta Ads, programmatic',
      'Marketing automation and CRM integration',
      'Advanced analytics: attribution, funnel analysis, LTV/CAC',
      'Content strategy for digital channels at scale',
      'Growth marketing and conversion rate optimization',
      'Marketing technology stack selection and management',
      'Data-driven budget allocation and ROI optimization',
    ],
    softSkills: [
      'Strategic thinking and planning',
      'Data-driven decision making',
      'Cross-functional team leadership',
      'Stakeholder presentation and reporting',
    ],
    tools: [
      { name: 'Google Ads', desc: 'Advanced advertising: search, display, video, shopping campaigns with conversion tracking and bid strategies', icon: '/images/course/tool_googleads.svg' },
      { name: 'Meta Business Suite', desc: 'Complete Meta marketing platform: Ads Manager, Business Manager, Pixel, and audience insights', icon: '/images/course/tool_metaads.svg' },
      { name: 'Google Analytics 4', desc: 'Advanced web analytics: events, conversions, audiences, and cross-platform tracking', icon: '/images/course/tool_googleanalytics.svg' },
      { name: 'HubSpot', desc: 'Marketing automation platform: CRM, email, workflows, lead scoring, and inbound marketing tools', icon: '/images/course/tool_hubspot.svg' },
      { name: 'SEMrush', desc: 'Comprehensive SEO and competitive intelligence: keyword research, site audit, and position tracking', icon: '/images/course/tool_semrush.svg' },
      { name: 'Canva Pro', desc: 'Professional design tool for marketing visuals, brand kits, templates, and team collaboration', icon: '/images/course/tool_canva.svg' },
      { name: 'Hotjar', desc: 'User behavior analytics: heatmaps, session recordings, and conversion funnel analysis', icon: '/images/course/tool_hotjar.svg' },
      { name: 'ChatGPT', desc: 'AI for content scaling, campaign ideation, audience research, and marketing data analysis', icon: '/images/course/tool_chatgpt.svg' },
    ],
  },
  diploma: {
    title: 'Diploma of professional retraining',
    licenseText: 'The document is issued by Hybreed Academy, which has an educational license',
    description: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. Combined with your marketing degree, this positions you for senior digital marketing roles.',
  },
  practice: {
    title: 'Practice from the first weeks',
    cards: [
      {
        title: 'Real campaign management',
        texts: [
          'From the first weeks, you will manage real digital marketing campaigns with live budgets: setting up ads, creating content, analyzing results, and optimizing performance across multiple channels.',
          'By the end of the course, you will have a portfolio of 12+ campaign case studies demonstrating measurable results — from lead generation to revenue growth.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real client projects',
        texts: [
          'Work on real marketing projects from partner companies. You will develop strategies, execute campaigns, and deliver results for actual businesses — building your professional track record.',
          'We connect you with companies seeking digital marketing support and help you build a portfolio of client work.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Executive-level portfolio',
        texts: [
          'Your final project is a comprehensive digital marketing strategy with executed campaigns, analytics dashboards, and ROI analysis — presented at a professional standard.',
          'You will create strategy documents, campaign reports, and marketing plans that demonstrate senior-level thinking to potential employers.',
        ],
        image: '/images/course/practice_portfolio.webp',
      },
    ],
  },
  program: {
    title: 'The training program is up to 8 months',
    subtitle: 'Designed for marketing graduates — bridges theory to digital practice.',
    researchNote: 'Developed in consultation with marketing directors and agency leaders to address the digital skills gap',
    bullets: ['Accelerated program for graduates', 'Working with senior marketing mentors'],
    mainProgram: [
      { title: 'Digital Marketing Landscape', bonus: false, description: 'Bridge your marketing knowledge to the digital ecosystem. Understand the full funnel: awareness, consideration, conversion, retention. Learn how digital channels work together and where traditional marketing principles apply online.' },
      { title: 'Performance Marketing', bonus: false, description: 'Master paid advertising at an advanced level: Google Ads (search, display, video), Meta Ads (Facebook, Instagram), bid strategies, audience targeting, retargeting, and conversion optimization with real budgets.' },
      { title: 'Marketing Automation', bonus: false, description: 'Learn marketing automation: HubSpot, email workflows, lead scoring, CRM integration, drip campaigns, and lifecycle marketing. Master the tools that scale marketing operations.' },
      { title: 'Advanced Analytics', bonus: false, description: 'Go beyond basic metrics: attribution models, multi-touch attribution, funnel analysis, LTV/CAC calculation, cohort analysis, and building dashboards that demonstrate marketing ROI.' },
      { title: 'Growth Marketing', bonus: false, description: 'Master growth marketing: experimentation frameworks, A/B testing, viral loops, referral programs, and conversion rate optimization. Learn the methodology behind rapid, data-driven growth.' },
      { title: 'Final Project', bonus: false, description: 'Develop and execute a comprehensive digital marketing strategy for a real business. Manage live campaigns, analyze results, and present your ROI to a panel of marketing directors.' },
      { title: 'Content Strategy at Scale', bonus: true, description: 'Learn to build content engines: editorial calendars, content production workflows, SEO-driven content, and scaling content with AI tools while maintaining quality and brand voice.' },
      { title: 'Brand & Positioning in Digital', bonus: true, description: 'Apply brand strategy principles to digital: digital brand identity, online positioning, brand storytelling across channels, and measuring brand impact in digital campaigns.' },
      { title: 'Marketing leadership', bonus: true, description: 'Prepare for marketing leadership: team management, agency selection and management, marketing budgets, stakeholder communication, and presenting marketing results to executives.' },
      { title: 'AI-powered marketing', bonus: true, description: 'Advanced AI for marketing: GPT for content scaling, AI for ad creative testing, predictive analytics, marketing data analysis with AI, and building AI-assisted marketing workflows.' },
    ],
    specializations: [
      { title: 'Growth Marketing', isNew: false, description: 'Master growth marketing: full-funnel experimentation, viral growth, retention optimization, and data-driven growth strategies for startups and scale-ups.' },
      { title: 'Performance Marketing', isNew: false, description: 'Specialize in performance: advanced ad management, large budget optimization, multi-platform campaigns, and scaling paid acquisition efficiently.' },
      { title: 'Brand Strategy', isNew: false, description: 'Apply your marketing education to digital brand building: brand positioning, digital identity, brand campaigns, and measuring brand equity online.' },
      { title: 'Marketing Operations', isNew: true, description: 'Master marketing ops: MarTech stack management, data infrastructure, automation workflows, and the technical side of running marketing at scale.' },
      { title: 'Product Marketing', isNew: false, description: 'Learn product marketing: go-to-market strategy, product launches, positioning, competitive analysis, and bridging product and marketing teams.' },
      { title: 'Data & Analytics', isNew: true, description: 'Specialize in marketing analytics: advanced attribution, marketing mix modeling, predictive analytics, and building data-driven marketing organizations.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Graduate: Digital Essentials',
        description: 'Core digital marketing skills to complement your degree',
        oldPrice: '200,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '8,300',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '120,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '4 months',
          'Digital Marketing Essentials for Graduates',
          '12 instruments',
          '1 final project – live campaign with ROI, 10 portfolio cases',
          'Performance Marketing and Analytics Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Graduate: Digital Marketer',
        description: 'Full digital skill set with one specialization for career acceleration',
        oldPrice: '300,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '8,300',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '180,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '6 months',
          'Complete Digital Marketing + Selectable Specialization',
          'Additional classes on content strategy, brand, and marketing leadership',
          '15 instruments',
          '2 final projects, live campaigns, 20 cases',
          'Career coaching and job placement support',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Graduate: Digital Marketing Leader',
        description: 'Full program with 2 specializations for senior marketing roles',
        oldPrice: '380,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '10,600',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '228,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '8 months',
          'Complete Digital Marketing + 2 Specializations to Choose From',
          'Additional classes on content, brand, leadership, and AI-powered marketing',
          '15+ instruments',
          '4 final projects, live campaigns, 30 cases',
          'Mentorship from senior marketing directors',
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
        { q: 'Is this course only for marketing graduates?', a: 'The course is designed for people who already have a marketing education or significant marketing knowledge. We bridge the gap between traditional marketing theory and modern digital practice. If you have a marketing degree, diploma, or equivalent experience, this course is for you.' },
        { q: 'How is this different from the standard Digital Marketing course?', a: 'This course is accelerated and assumes you already understand marketing fundamentals. We skip basic marketing theory and go straight into digital tools, advanced analytics, automation, and growth strategies. It\'s designed to make you job-ready for mid-level positions faster.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with senior marketers, hands-on campaign management with real budgets, and peer reviews. You study according to a schedule but can always return to materials. Lesson recordings are stored for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. Since this is an accelerated course, expect a more intensive pace. Online classes are held up to 2 times a week in the evening.' },
      ],
      Profession: [
        { q: 'What positions can I apply for after completing the course?', a: 'With your marketing degree plus digital skills, you can apply for Digital Marketing Manager, Growth Marketing Specialist, Performance Marketing Lead, Marketing Strategist, or Senior Marketing Executive positions. The combination of theoretical knowledge and practical digital skills makes you highly competitive.' },
        { q: 'Will this help me get a higher starting salary?', a: 'Yes. Marketing graduates with proven digital skills typically command 30-50% higher starting salaries than those without. Your portfolio of real campaigns and digital certifications demonstrates practical value to employers.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. Combined with your marketing degree, this creates a strong professional profile for employers.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Digital Marketing for Marketing Graduates',
  },
}

export default function DigitalMarketingGradLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
