'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Digital Office Administration',
    description: 'Develop practical digital skills for managing documents, records, schedules, communication, reports, and administrative workflows in modern offices.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 8 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '12+ office management tools' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 40 webinars with experts, up to 8 individual consultations, assignment review and feedback throughout the course',
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
        description: 'We monitor changes in office software, collaboration platforms, and remote work tools. If anything changes, we update the course to reflect the latest digital workplace trends.',
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
        description: 'You can enhance your basic skills with two additional specializations — from project coordination to HR administration — and take your first freelance virtual assistant clients.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for meeting notes, document drafting, scheduling automation, and email management — making you more effective and in-demand as a digital administrator.',
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
    subtitle: 'Build a career in digital office management and administration',
    description: 'After completing the course, you will be able to work as an office manager, administrative coordinator, virtual assistant, or executive assistant. You can work on-site, remotely, or as a freelance virtual assistant serving multiple clients. Digital administration skills are essential for every organization.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Digital office manager coordinating teams and workflows',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Salaries in digital administration grow with experience and scope of responsibilities',
    cardTitle: 'Digital Office Manager',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '150,000', description: 'Starting position managing basic office tasks: scheduling, document filing, meeting coordination, and reception duties using digital tools.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '350,000', description: 'Independent management of office operations, team coordination, vendor management, and process optimization. May supervise junior administrative staff.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '600,000', description: 'Leads office administration for large teams, implements digital transformation initiatives, manages budgets, and serves as executive assistant to C-level management.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Digital Office Management Specialist',
    keySkills: [
      'Digital document management and filing systems',
      'Calendar and meeting management at scale',
      'Email and communication workflow optimization',
      'Team coordination and task tracking',
      'Office budget tracking and expense management',
      'Vendor and procurement management',
      'Event planning and logistics coordination',
      'Remote and hybrid workplace administration',
    ],
    softSkills: [
      'Organization and time management',
      'Professional communication',
      'Discretion and confidentiality',
      'Adaptability and multitasking',
    ],
    tools: [
      { name: 'Microsoft 365', desc: 'Suite of productivity apps: Outlook, Word, Excel, Teams, SharePoint, and OneDrive for business', icon: '/images/course/tool_microsoft365.svg' },
      { name: 'Google Workspace', desc: 'Cloud collaboration platform: Gmail, Calendar, Drive, Docs, Sheets, Meet, and Chat', icon: '/images/course/tool_googleworkspace.svg' },
      { name: 'Slack', desc: 'Team messaging platform for communication, channels, and workflow automation', icon: '/images/course/tool_slack.svg' },
      { name: 'Notion', desc: 'All-in-one workspace for documentation, project management, and knowledge bases', icon: '/images/course/tool_notion.svg' },
      { name: 'Trello', desc: 'Visual project management tool with boards, lists, and cards for task tracking', icon: '/images/course/tool_trello.svg' },
      { name: 'Zoom', desc: 'Video conferencing platform for meetings, webinars, and virtual events', icon: '/images/course/tool_zoom.svg' },
      { name: 'Calendly', desc: 'Automated scheduling tool that eliminates back-and-forth emails for meeting coordination', icon: '/images/course/tool_calendly.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for drafting emails, meeting summaries, document templates, and task automation', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real office scenarios',
        texts: [
          'From the first weeks, you will practice with real office management scenarios: coordinating meetings, managing documents, tracking tasks, and handling communications using actual digital tools.',
          'By the end of the course, you will have a portfolio of 10+ completed administrative projects, from setting up a document management system to coordinating a company-wide event.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real orders and freelancing',
        texts: [
          'Practice on real tasks from partner companies and freelance platforms. You will learn to manage virtual assistant engagements, handle client communications, and deliver administrative support remotely.',
          'We provide access to a PRO account on freelance platforms and help you build your first client relationships as a virtual assistant.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete digital office setup for a simulated company — from document workflows to team coordination systems. This becomes the centerpiece of your professional portfolio.',
          'You will also create sample templates, process documentation, and workflow diagrams — exactly what employers expect from a professional digital office manager.',
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
      { title: 'Digital Office Fundamentals', bonus: false, description: 'Introduction to modern digital office environments. Master Microsoft 365 and Google Workspace: email management, calendar scheduling, cloud storage, and collaborative document editing.' },
      { title: 'Document Management', bonus: false, description: 'Learn digital document workflows: creation, review, approval, archiving, and version control. Master electronic signatures, digital filing systems, and paperless office practices.' },
      { title: 'Communication & Coordination', bonus: false, description: 'Master team communication tools: Slack, Microsoft Teams, and email etiquette. Learn to coordinate meetings, manage agendas, take minutes, and follow up on action items effectively.' },
      { title: 'Task & Project Management', bonus: false, description: 'Use Trello, Asana, and Notion to track tasks, manage projects, and coordinate team workflows. Learn to prioritize, delegate, and monitor progress across multiple initiatives.' },
      { title: 'Office Operations', bonus: false, description: 'Manage day-to-day office operations: supply procurement, vendor management, budget tracking, expense reporting, and facility coordination using digital tools and platforms.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to set up a complete digital office system for a simulated company. Present your office management solution for defense and receive feedback from industry experts.' },
      { title: 'Event Planning', bonus: true, description: 'Learn to plan and coordinate corporate events: meetings, conferences, team building, and virtual events. Master logistics, budgeting, and attendee management using digital tools.' },
      { title: 'Remote Work Management', bonus: true, description: 'Master remote and hybrid workplace administration: virtual onboarding, remote team coordination, digital time tracking, and maintaining company culture in distributed teams.' },
      { title: 'How to start freelancing', bonus: true, description: 'Step-by-step guide to launching your career as a virtual assistant: finding clients, packaging services, setting rates, and managing multiple client accounts remotely.' },
      { title: 'AI tools for administrators', bonus: true, description: 'Practical use of AI in office management: automated meeting notes, email drafting, document templates, scheduling optimization, and workflow automation with ChatGPT and similar tools.' },
    ],
    specializations: [
      { title: 'Executive Assistant', isNew: false, description: 'Specialize in supporting C-level executives: calendar management, travel coordination, briefing preparation, and serving as a key liaison between leadership and teams.' },
      { title: 'Project Coordination', isNew: false, description: 'Master project coordination: project scheduling, resource allocation, stakeholder communication, and progress tracking across multiple concurrent projects.' },
      { title: 'HR Administration', isNew: false, description: 'Learn HR administrative functions: onboarding, employee records, leave management, benefits administration, and HRIS management using digital platforms.' },
      { title: 'Virtual Assistant', isNew: true, description: 'Build a career as a freelance virtual assistant: managing multiple clients, offering services like email management, scheduling, research, and document preparation remotely.' },
      { title: 'Facility Management', isNew: false, description: 'Master digital facility management: maintenance scheduling, space planning, health & safety compliance, and vendor management for office facilities.' },
      { title: 'Records Management', isNew: true, description: 'Specialize in digital records management: document retention policies, compliance, data privacy, and implementing electronic records management systems.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Digital Admin: The Basics',
        description: 'A basic course to get acquainted with digital office management',
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
          'Digital Office Basics',
          '8 instruments',
          '1 final project – office setup, 8 portfolio cases',
          'Document Management and Communication Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Digital Office Manager',
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
          '6 months',
          'Digital Office Fundamentals + Selectable Specialization',
          'Additional classes on event planning, remote work, and freelancing basics',
          '12 instruments',
          '2 final projects, group practice, 15 cases',
          'Help with finding a job',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Digital Office Manager: Advanced',
        description: 'Full base and 2 specializations for more flexible work',
        oldPrice: '300,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '8,300',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '180,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '8 months',
          'Digital Office Fundamentals + 2 Specializations to Choose From',
          'Additional classes on event planning, remote work, AI tools, and records management',
          '12+ instruments',
          '4 final projects, group practice, 25 cases',
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
        { q: 'Do I need office experience to start?', a: 'No, the course is designed for beginners. We start with the fundamentals of digital office tools and gradually move to advanced topics. You just need basic computer skills. No prior office management experience is required.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars, practical assignments with real office tools, and tests. You study according to a schedule but can always return to materials you need. Lesson recordings are stored in your personal account for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. You can speed up or slow down the course depending on your schedule. Online classes are held up to 2 times a week in the evening.' },
        { q: 'Can I study and work at the same time?', a: 'Yes, the program is designed for working professionals. Classes are held in the evening, and all materials are available in your personal account. You can also pause your studies for up to 6 months if needed.' },
      ],
      Profession: [
        { q: 'Will I be able to find a job after completing the course?', a: 'Yes, we provide career support including resume preparation, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months of completing the course. Digital office skills are needed in every organization.' },
        { q: 'Do I need prior experience to start?', a: 'No, the course is designed for beginners. We start with the fundamentals of digital office management and gradually move to advanced topics. You just need basic computer skills and a desire to learn.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Digital Office Administration',
  },
}

export default function DigitalAdminLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
