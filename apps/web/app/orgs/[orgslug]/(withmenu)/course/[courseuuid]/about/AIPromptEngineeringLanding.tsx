'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'AI Productivity & Prompt Engineering',
    description: 'Learn to communicate effectively with AI and use advanced prompting techniques for research, writing, analysis, content creation, problem-solving, and professional workflows.',
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
        description: 'Up to 30 webinars with prompt engineering experts, up to 6 individual consultations, project reviews and feedback throughout the course',
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
        description: 'We monitor AI model updates, new prompting techniques, and tool changes. If anything changes, we update the course to reflect the latest prompting strategies and AI capabilities.',
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
        description: 'You can enhance your prompting skills with two additional specializations — from AI workflow automation to advanced content creation — and build AI-powered professional systems.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI as your productivity engine — from prompt design to workflow automation — making you dramatically more effective at any professional task.',
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
    subtitle: 'Build a career with advanced AI skills',
    description: 'After completing the course, you will be able to use AI as a powerful professional tool in any field. Prompt engineering and AI productivity skills are among the fastest-growing capabilities in the job market. You can work as an AI specialist, prompt engineer, productivity consultant, or apply these skills to dramatically enhance your existing career.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Professional using advanced AI prompting techniques for productivity',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Advanced AI skills command a growing premium in the job market',
    cardTitle: 'AI Productivity Specialist',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '400,000', description: 'Starting position applying prompt engineering and AI tools in content, research, or business operations. Works under guidance to build AI-powered workflows.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '800,000', description: 'Independent AI application: designing prompt systems, building automated workflows, and delivering AI-enhanced solutions for organizations.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '1,500,000', description: 'Leads AI strategy, designs enterprise AI workflows, and drives AI-powered transformation. May consult, build AI products, or lead AI teams.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'AI Productivity Specialist',
    keySkills: [
      'Advanced prompt engineering: structured prompts, chain-of-thought, and multi-turn prompting',
      'System prompts and prompt templates for repeatable professional workflows',
      'Using ChatGPT, Claude, and other LLMs for complex research and analysis',
      'AI for content creation: long-form writing, marketing copy, and creative content',
      'AI for problem-solving: breaking down complex tasks and using AI iteratively',
      'Building AI-powered workflows with Zapier, APIs, and automation tools',
      'AI for data analysis: cleaning, interpreting, and visualizing data with AI',
      'Evaluating AI outputs, handling hallucinations, and ensuring quality',
    ],
    softSkills: [
      'Analytical thinking and prompt design',
      'Iterative problem-solving with AI',
      'Quality assessment and critical evaluation',
      'Workflow design and optimization',
    ],
    tools: [
      { name: 'ChatGPT', desc: 'Advanced prompting with GPT-4: system prompts, custom instructions, and multi-turn conversations for professional tasks', icon: '/images/course/tool_chatgpt.svg' },
      { name: 'Claude', desc: 'AI assistant for long-context analysis, document processing, and complex reasoning with extended thinking', icon: '/images/course/tool_claude.svg' },
      { name: 'Midjourney', desc: 'AI image generation with advanced prompting techniques for professional visual content', icon: '/images/course/tool_midjourney.svg' },
      { name: 'Zapier', desc: 'Automation platform for connecting AI tools with apps and building AI-powered automated workflows', icon: '/images/course/tool_zapier.svg' },
      { name: 'Notion AI', desc: 'AI-integrated workspace for knowledge management, automated notes, and AI-powered project organization', icon: '/images/course/tool_notion.svg' },
      { name: 'Perplexity', desc: 'AI-powered research tool for finding, synthesizing, and citing information from multiple sources', icon: '/images/course/tool_perplexity.svg' },
      { name: 'GitHub Copilot', desc: 'AI code assistant for programming productivity, code generation, and technical problem-solving', icon: '/images/course/tool_copilot.svg' },
      { name: 'Make (Integromat)', desc: 'Advanced automation platform for building complex AI-powered workflows and integrations', icon: '/images/course/tool_make.svg' },
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
        title: 'Real AI prompting projects',
        texts: [
          'From the first weeks, you will write and refine prompts for real tasks: research reports, content creation, data analysis, and workflow automation. Every module includes hands-on prompt engineering practice.',
          'By the end of the course, you will have a portfolio of 10+ AI projects with documented prompt strategies and real outputs.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real workplace tasks',
        texts: [
          'Practice on real AI tasks from partner companies and freelance platforms. You will learn to design prompt systems that solve business problems and automate professional workflows.',
          'We help you build a collection of reusable prompt templates and AI workflows that you can immediately apply in your job or freelance work.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete AI-powered workflow system — a set of prompts, automations, and processes that solve a real professional problem end-to-end.',
          'You will create a portfolio demonstrating your ability to design effective prompts and build AI workflows — exactly what employers expect from an AI productivity specialist.',
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
      { title: 'Prompt Engineering Fundamentals', bonus: false, description: 'Master the art and science of prompting: how language models interpret prompts, what makes a prompt effective, and how to structure prompts for different tasks and AI models.' },
      { title: 'Advanced Prompting Techniques', bonus: false, description: 'Learn advanced techniques: chain-of-thought prompting, few-shot learning, role prompting, system prompts, and multi-turn conversations. Build prompt templates for repeatable professional use.' },
      { title: 'AI for Research & Analysis', bonus: false, description: 'Use AI for research: finding information, synthesizing sources, analyzing documents, generating insights, and producing research reports with AI assistance.' },
      { title: 'AI for Content Creation', bonus: false, description: 'Master AI for content: long-form writing, marketing copy, social media content, video scripts, and creative content. Learn to produce high-quality content with AI while maintaining voice and quality.' },
      { title: 'AI Workflow Automation', bonus: false, description: 'Build AI-powered workflows: connecting AI tools with apps using Zapier and APIs, automating repetitive tasks, and creating end-to-end AI pipelines for professional work.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to build a complete AI-powered workflow system. Design prompts, automations, and processes that solve a real professional problem. Present your project for defense.' },
      { title: 'AI for Data & Analysis', bonus: true, description: 'Learn to use AI for data tasks: cleaning data, generating insights, creating visualizations, statistical analysis, and building AI-powered data pipelines.' },
      { title: 'Prompt Design for Business', bonus: true, description: 'Master prompt design for business applications: automated reporting, customer communication, market analysis, and decision support using AI.' },
      { title: 'How to start freelancing with AI', bonus: true, description: 'Step-by-step guide to launching your freelance AI career: offering prompt engineering and AI automation services, finding clients, and pricing projects.' },
      { title: 'AI Quality & Ethics', bonus: true, description: 'Learn to evaluate AI outputs, handle hallucinations, ensure quality, and use AI responsibly. Understand limitations and build quality checks into AI workflows.' },
    ],
    specializations: [
      { title: 'AI Workflow Automation', isNew: false, description: 'Specialize in building AI-powered automated workflows: connecting tools, designing pipelines, and automating business processes with AI.' },
      { title: 'AI Content Strategy', isNew: false, description: 'Master AI for content strategy: planning, creating, and managing content at scale using AI tools, prompt templates, and automated workflows.' },
      { title: 'AI for Business Operations', isNew: false, description: 'Specialize in applying AI to business: automated reporting, customer insights, process optimization, and AI-powered decision support.' },
      { title: 'Prompt System Design', isNew: true, description: 'Master the design of complete prompt systems: reusable templates, multi-step prompts, and prompt libraries for organizations and professional use.' },
      { title: 'AI for Research', isNew: false, description: 'Specialize in AI-powered research: literature reviews, data synthesis, source evaluation, and research automation using AI tools.' },
      { title: 'AI for Marketing', isNew: true, description: 'Master AI for marketing: ad copy generation, audience research, campaign optimization, and AI-powered marketing analytics and automation.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'AI Productivity: The Basics',
        description: 'A basic course to get started with prompt engineering',
        oldPrice: '140,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '5,800',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '84,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '3 months',
          'Prompt Engineering Basics',
          '8 instruments',
          '1 final project – AI workflow system, 8 prompt portfolio pieces',
          'Prompt Fundamentals and Techniques Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'AI Productivity Professional',
        description: 'All the base and focus on specialization in one direction',
        oldPrice: '240,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '6,700',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '144,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '5 months',
          'AI Productivity + Selectable Specialization',
          'Additional classes on workflow automation and freelancing basics',
          '10 instruments',
          '2 final projects, prompt portfolio, 20 exercises',
          'Help with finding AI-related jobs',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'AI Productivity: Advanced',
        description: 'Full base and 2 specializations for comprehensive AI expertise',
        oldPrice: '320,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '8,900',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '192,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '6 months',
          'AI Productivity + 2 Specializations to Choose From',
          'Additional classes on prompt system design, quality, and advanced tools',
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
        { q: 'Do I need to know how to code for this course?', a: 'No, prompt engineering is about communicating with AI in natural language. While some modules cover API integration and automation, no programming experience is required. The course is designed for professionals from any field.' },
        { q: 'Do I need paid AI tool subscriptions?', a: 'We provide access to AI tools during the course. Some tools offer free tiers that are sufficient for learning. For advanced features, we guide you on which subscriptions provide the best value for professional use.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with prompt engineering experts, hands-on prompting assignments, and project reviews. You study according to a schedule but can always return to materials. Lesson recordings are stored for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 8 hours per week. Prompt engineering requires hands-on practice, so expect to spend additional time experimenting with prompts and building AI workflows for your portfolio.' },
      ],
      Profession: [
        { q: 'What is prompt engineering and why is it valuable?', a: 'Prompt engineering is the skill of designing effective instructions for AI models. As AI becomes central to business and creative work, the ability to get high-quality outputs from AI is a highly valued professional skill across all industries.' },
        { q: 'Can I work as a freelance prompt engineer?', a: 'Yes! Many businesses need help integrating AI and designing effective prompts. The course covers freelancing with AI services, finding clients, and delivering professional AI solutions. We also provide access to freelance platforms.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'AI Productivity & Prompt Engineering',
  },
}

export default function AIPromptEngineeringLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
