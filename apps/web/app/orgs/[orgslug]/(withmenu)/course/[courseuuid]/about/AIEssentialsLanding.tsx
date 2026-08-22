'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'AI Essentials',
    description: 'Understand artificial intelligence, how modern AI tools work, and how students, professionals, and entrepreneurs can use AI for learning, work, productivity, and everyday tasks.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 6 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '10+ AI tools and platforms' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 30 webinars with AI practitioners, up to 6 individual consultations, project reviews and feedback throughout the course',
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
        description: 'We monitor AI developments, new tools, and industry changes. If anything changes, we update the course to reflect the latest AI tools, models, and best practices.',
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
        description: 'You can enhance your basic AI skills with two additional specializations — from AI for business to AI for content creation — and apply AI to your specific field.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for learning, research, content creation, and problem-solving — making you more productive and capable in any field you choose.',
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
    subtitle: 'Build a career with AI skills',
    description: 'After completing the course, you will be able to apply AI tools in any profession — from business and education to creative work and technology. AI literacy is becoming a fundamental skill that employers increasingly expect. You can work as an AI specialist, consultant, or apply AI to enhance your existing career.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Professional using AI tools for work and productivity',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'AI skills command a premium across industries',
    cardTitle: 'AI-Equipped Professional',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '350,000', description: 'Starting position applying AI tools in business operations, content creation, or analysis. Works under guidance to integrate AI into existing workflows.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '700,000', description: 'Independent AI application: building AI-powered workflows, automating processes, and delivering AI-enhanced solutions for organizations.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '1,300,000', description: 'Leads AI strategy, designs AI-integrated systems, and drives digital transformation initiatives. May consult or build AI-powered products.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'AI-Equipped Professional',
    keySkills: [
      'Understanding AI fundamentals: machine learning, neural networks, and language models',
      'Using ChatGPT, Claude, and other LLMs for writing, research, and analysis',
      'AI image generation with DALL-E, Midjourney, and Stable Diffusion',
      'AI for productivity: automating tasks, summarizing documents, and managing information',
      'AI for business: market research, customer insights, and data analysis',
      'AI ethics, responsible use, and understanding AI limitations',
      'Building AI-powered workflows and integrating AI into existing processes',
      'AI for learning: using AI as a study tool and knowledge assistant',
    ],
    softSkills: [
      'Critical thinking and AI literacy',
      'Problem-solving with AI assistance',
      'Adaptability to new AI tools',
      'Ethical reasoning about AI use',
    ],
    tools: [
      { name: 'ChatGPT', desc: 'Leading AI conversational tool for writing, research, coding, analysis, and general productivity', icon: '/images/course/tool_chatgpt.svg' },
      { name: 'Claude', desc: 'AI assistant for long-form writing, analysis, document processing, and complex reasoning tasks', icon: '/images/course/tool_claude.svg' },
      { name: 'Midjourney', desc: 'AI image generation tool for creating professional visuals, art, and design concepts', icon: '/images/course/tool_midjourney.svg' },
      { name: 'DALL-E', desc: 'OpenAI image generation tool for creating images from text descriptions', icon: '/images/course/tool_dalle.svg' },
      { name: 'GitHub Copilot', desc: 'AI code assistant for programming, code completion, and development productivity', icon: '/images/course/tool_copilot.svg' },
      { name: 'Notion AI', desc: 'AI-integrated workspace for notes, documents, project management, and knowledge organization', icon: '/images/course/tool_notion.svg' },
      { name: 'Perplexity', desc: 'AI-powered search and research tool for finding and synthesizing information', icon: '/images/course/tool_perplexity.svg' },
      { name: 'Zapier', desc: 'Automation platform for connecting AI tools with other apps and building automated workflows', icon: '/images/course/tool_zapier.svg' },
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
        title: 'Real AI projects',
        texts: [
          'From the first weeks, you will use AI tools to solve real problems: writing content, analyzing data, creating visuals, and automating tasks. Every module includes hands-on AI practice with real-world scenarios.',
          'By the end of the course, you will have a portfolio of 10+ AI projects, from automated workflows to AI-enhanced business solutions.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real workplace tasks',
        texts: [
          'Practice on real AI tasks from partner companies and freelance platforms. You will learn to apply AI to business problems, content creation, research, and workflow automation.',
          'We help you build AI workflows that you can immediately apply in your current job or use to attract new clients.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete AI-powered solution — an automated workflow, an AI-enhanced business process, or an AI application — demonstrating your ability to use AI practically.',
          'You will create a portfolio showing how you used AI to solve real problems — exactly what employers expect from an AI-literate professional.',
        ],
        image: '/images/course/practice_portfolio.webp',
      },
    ],
  },
  program: {
    title: 'The training program is up to 6 months',
    subtitle: 'First, complete the main course, then choose one of the specializations.',
    researchNote: 'To ensure the program meets the needs of the labor market, we conduct three stages of research',
    bullets: ['Advanced training program', 'Working with a mentor'],
    mainProgram: [
      { title: 'AI Fundamentals', bonus: false, description: 'Understand what AI is, how it works, and what it can and cannot do. Learn about machine learning, neural networks, language models, and the current AI landscape.' },
      { title: 'AI for Writing & Content', bonus: false, description: 'Learn to use ChatGPT, Claude, and other LLMs for writing, editing, summarizing, research, and content creation. Master prompt techniques for different writing tasks.' },
      { title: 'AI for Visual Creation', bonus: false, description: 'Master AI image generation with DALL-E, Midjourney, and Stable Diffusion. Learn to create professional visuals, design concepts, and marketing materials using AI.' },
      { title: 'AI for Productivity', bonus: false, description: 'Learn to automate tasks, manage information, and streamline workflows using AI tools. Build AI-powered processes that save time and increase output.' },
      { title: 'AI for Business & Analysis', bonus: false, description: 'Apply AI to business tasks: market research, customer analysis, data interpretation, report generation, and decision support. Use AI to work smarter in any business role.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to build a complete AI-powered solution. Implement AI tools to solve a real problem, automate a workflow, or enhance a business process. Present your project for defense.' },
      { title: 'AI Ethics & Responsible Use', bonus: true, description: 'Understand AI ethics, bias, privacy, and responsible AI use. Learn to evaluate AI outputs critically and use AI tools ethically in professional contexts.' },
      { title: 'AI for Learning & Research', bonus: true, description: 'Learn to use AI as a learning and research tool: finding information, synthesizing sources, explaining concepts, and accelerating your learning on any topic.' },
      { title: 'How to start freelancing with AI', bonus: true, description: 'Step-by-step guide to launching your freelance AI career: offering AI services, finding clients, pricing projects, and delivering professional AI solutions.' },
      { title: 'Building AI Workflows', bonus: true, description: 'Learn to build automated AI workflows using Zapier, APIs, and AI tools. Connect multiple AI services to create powerful automated pipelines.' },
    ],
    specializations: [
      { title: 'AI for Business', isNew: false, description: 'Specialize in applying AI to business operations: automated reporting, customer insights, market analysis, and AI-powered decision making.' },
      { title: 'AI for Content Creation', isNew: false, description: 'Master AI for content: automated blog posts, social media content, video scripts, and multimedia creation using AI tools.' },
      { title: 'AI for Education', isNew: false, description: 'Specialize in AI for teaching and learning: creating educational content, personalized learning paths, and AI-assisted assessment.' },
      { title: 'AI for Productivity', isNew: true, description: 'Master AI productivity systems: building automated workflows, AI-powered task management, and personal AI assistants.' },
      { title: 'AI for Data Analysis', isNew: false, description: 'Learn to use AI for data analysis: cleaning data, generating insights, creating visualizations, and building AI-powered analytics pipelines.' },
      { title: 'AI for Marketing', isNew: true, description: 'Specialize in AI for marketing: AI-generated ad copy, audience research, campaign optimization, and AI-powered marketing analytics.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'AI Essentials: The Basics',
        description: 'A basic course to get started with AI tools',
        oldPrice: '120,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '5,000',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '72,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '3 months',
          'AI Essentials Basics',
          '8 instruments',
          '1 final project – AI workflow, 8 portfolio exercises',
          'AI Fundamentals and Writing Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'AI Essentials Professional',
        description: 'All the base and focus on specialization in one direction',
        oldPrice: '220,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '6,100',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '132,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '5 months',
          'AI Essentials + Selectable Specialization',
          'Additional classes on AI workflows and freelancing basics',
          '10 instruments',
          '2 final projects, AI portfolio, 20 exercises',
          'Help with finding AI-related jobs',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'AI Essentials: Advanced',
        description: 'Full base and 2 specializations for comprehensive AI expertise',
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
          'AI Essentials + 2 Specializations to Choose From',
          'Additional classes on AI workflows, ethics, and advanced tools',
          '10+ instruments',
          '4 final projects, full portfolio, 30 exercises',
          'Internship opportunities with tech companies',
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
        { q: 'Do I need technical experience to learn AI?', a: 'No, the course is designed for beginners. We start with AI fundamentals that require no technical background. You just need basic computer skills and a willingness to learn. AI tools are designed to be user-friendly.' },
        { q: 'Do I need a powerful computer?', a: 'No, most AI tools run in the cloud. You just need a computer with internet access and a modern web browser. No special hardware is required for the course.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with AI practitioners, hands-on AI tool assignments, and project reviews. You study according to a schedule but can always return to materials. Lesson recordings are stored for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 8 hours per week. AI tools require hands-on practice, so expect to spend additional time experimenting with AI tools and building projects for your portfolio.' },
      ],
      Profession: [
        { q: 'Will AI skills help me in my current job?', a: 'Absolutely! AI skills are valuable in every profession. Whether you work in business, education, marketing, or technology, AI tools can make you more productive, creative, and effective. Employers increasingly expect AI literacy.' },
        { q: 'Can I work as an AI consultant?', a: 'Yes! Many businesses need help integrating AI into their operations. The course covers practical AI applications and freelancing, so you can offer AI consulting services or enhance your existing work with AI.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'AI Essentials',
  },
}

export default function AIEssentialsLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
