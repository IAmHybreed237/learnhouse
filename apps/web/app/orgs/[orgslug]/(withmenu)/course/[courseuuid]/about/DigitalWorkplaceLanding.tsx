'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Digital Workplace Excellence',
    description: 'Learn how to work effectively in a modern digital workplace through professional communication, collaboration, information management, productivity tools, and digital workflows.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 6 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '12+ workplace collaboration tools' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 30 webinars with workplace experts, up to 6 individual consultations, workflow reviews and feedback throughout the course',
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
        description: 'We monitor changes in workplace tools, collaboration platforms, and remote work best practices. If anything changes, we update the course to reflect the latest digital workplace trends.',
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
        description: 'You can enhance your basic skills with two additional specializations — from project coordination to remote team management — and position yourself for modern workplace roles.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for meeting notes, task automation, document drafting, and workflow optimization — making you more productive in any digital workplace.',
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
    subtitle: 'Build a career in the modern digital workplace',
    description: 'After completing the course, you will be equipped for any role that requires digital collaboration skills — from remote team member to project coordinator to virtual assistant. Digital workplace skills are essential as companies adopt remote and hybrid work models permanently.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Professional working remotely with digital collaboration tools',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Digital workplace skills increase your value across all roles and industries',
    cardTitle: 'Digital Workplace Professional',
    points: [
      { label: 'Entry', sublabel: '0-1 year experience', position: 0, salary: '180,000', description: 'Starting position in remote or hybrid roles: digital communication, task management, document collaboration, and virtual meeting participation.' },
      { label: 'Experienced', sublabel: '2-3 years experience', position: 50, salary: '400,000', description: 'Manages digital workflows, coordinates remote teams, optimizes collaboration processes, and serves as a digital workplace champion within organizations.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '700,000', description: 'Leads digital transformation initiatives, manages distributed teams, implements workplace technology, and drives productivity at organizational scale.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Digital Workplace Specialist',
    keySkills: [
      'Remote collaboration and virtual team communication',
      'Digital project management and task tracking',
      'Cloud document collaboration and file management',
      'Virtual meeting facilitation and online presentations',
      'Digital time management and productivity systems',
      'Asynchronous communication and documentation',
      'Digital security and data privacy best practices',
      'Remote onboarding and virtual team building',
    ],
    softSkills: [
      'Self-motivation and remote discipline',
      'Clear written communication',
      'Cross-cultural virtual collaboration',
      'Adaptability to new digital tools',
    ],
    tools: [
      { name: 'Microsoft Teams', desc: 'Unified communication platform: chat, video calls, file sharing, and team collaboration in one hub', icon: '/images/course/tool_teams.svg' },
      { name: 'Slack', desc: 'Team messaging platform with channels, threads, integrations, and workflow automation', icon: '/images/course/tool_slack.svg' },
      { name: 'Asana', desc: 'Project and task management platform for tracking work, deadlines, and team assignments', icon: '/images/course/tool_asana.svg' },
      { name: 'Google Workspace', desc: 'Cloud collaboration suite: Docs, Sheets, Slides, Drive, Meet, and Calendar', icon: '/images/course/tool_googleworkspace.svg' },
      { name: 'Notion', desc: 'All-in-one workspace for documentation, wikis, project management, and knowledge bases', icon: '/images/course/tool_notion.svg' },
      { name: 'Zoom', desc: 'Video conferencing for meetings, webinars, screen sharing, and virtual collaboration', icon: '/images/course/tool_zoom.svg' },
      { name: 'Trello', desc: 'Visual kanban boards for task management, project tracking, and team workflow organization', icon: '/images/course/tool_trello.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for meeting summaries, email drafting, task automation, and workflow optimization', icon: '/images/course/tool_chatgpt.svg' },
    ],
  },
  diploma: {
    title: 'Certificate of digital workplace proficiency',
    licenseText: 'The document is issued by Hybreed Academy, which has an educational license',
    description: 'Upon successful completion of all modules and the final assessment, you will receive a certificate of digital workplace proficiency. You can add this document to your resume and demonstrate your readiness for modern work environments.',
  },
  practice: {
    title: 'Practice from the first weeks',
    cards: [
      {
        title: 'Real digital workflows',
        texts: [
          'From the first weeks, you will build real digital workflows: setting up project boards, creating documentation, running virtual meetings, and collaborating on documents — exactly as you would in a modern workplace.',
          'By the end of the course, you will have a portfolio of 10+ workplace deliverables, from project plans to meeting documentation to collaboration workflows.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Remote collaboration practice',
        texts: [
          'Practice collaborating remotely with other students: running virtual meetings, coordinating tasks asynchronously, managing shared documents, and communicating across digital channels.',
          'You will experience real remote work scenarios and develop the skills to thrive in distributed team environments.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Workplace-ready portfolio',
        texts: [
          'Your final project is a complete digital workplace setup for a simulated team — from communication channels to project boards to documentation systems.',
          'You will demonstrate your ability to design and implement efficient digital workflows that employers value in remote and hybrid work environments.',
        ],
        image: '/images/course/practice_portfolio.webp',
      },
    ],
  },
  program: {
    title: 'The training program is up to 6 months',
    subtitle: 'Complete the main course, then choose an optional specialization.',
    researchNote: 'Developed with input from remote-first companies and distributed team leaders',
    bullets: ['Practical training program', 'Working with workplace experts'],
    mainProgram: [
      { title: 'Digital Workplace Fundamentals', bonus: false, description: 'Introduction to the modern digital workplace: remote vs hybrid models, digital communication norms, essential tools, and building a productive digital work environment at home or in the office.' },
      { title: 'Communication & Collaboration', bonus: false, description: 'Master digital communication: Slack and Teams for messaging, email etiquette, video calls in Zoom, and choosing the right communication channel for different situations.' },
      { title: 'Project & Task Management', bonus: false, description: 'Learn to manage work digitally: Asana and Trello for task tracking, project boards, deadlines, assignments, and keeping teams aligned on priorities and progress.' },
      { title: 'Document Collaboration', bonus: false, description: 'Master cloud document tools: Google Workspace and Notion for collaborative editing, version control, shared drives, wikis, and building team knowledge bases.' },
      { title: 'Virtual Meetings & Presentations', bonus: false, description: 'Learn to facilitate effective virtual meetings: agenda setting, screen sharing, whiteboards, breakout rooms, recording, and presenting professionally on video.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to design and implement a complete digital workplace for a simulated team. Present your workflow and collaboration system for assessment.' },
      { title: 'Digital Productivity', bonus: true, description: 'Master digital productivity: time management apps, focus techniques, inbox zero, calendar blocking, and building systems that keep you productive while working remotely.' },
      { title: 'Digital Security', bonus: true, description: 'Learn workplace digital security: password managers, 2FA, phishing awareness, secure file sharing, data privacy, and protecting company information while working remotely.' },
      { title: 'Remote career growth', bonus: true, description: 'Learn to grow your career remotely: building visibility, virtual networking, online personal branding, and positioning yourself for promotions in distributed organizations.' },
      { title: 'AI for workplace productivity', bonus: true, description: 'Practical AI for work: ChatGPT for emails and reports, automated meeting notes, AI-powered task management, and using AI to streamline daily workplace workflows.' },
    ],
    specializations: [
      { title: 'Remote Team Management', isNew: false, description: 'Master managing distributed teams: async communication, remote performance management, virtual team building, and leading teams across time zones.' },
      { title: 'Digital Project Coordination', isNew: false, description: 'Specialize in digital project coordination: multi-project management, resource planning, stakeholder communication, and digital project reporting.' },
      { title: 'Virtual Assistance', isNew: false, description: 'Build skills for virtual assistant roles: managing executive digital workflows, scheduling, travel coordination, and supporting multiple clients remotely.' },
      { title: 'Digital Onboarding', isNew: true, description: 'Master digital onboarding: virtual orientation programs, digital training materials, remote buddy systems, and integrating new hires into distributed teams.' },
      { title: 'Workplace Technology', isNew: false, description: 'Specialize in workplace technology: tool selection, implementation, integration, training, and managing the digital workplace technology stack.' },
      { title: 'Async Communication', isNew: true, description: 'Master asynchronous communication: documentation practices, Loom videos, async updates, reducing meeting load, and building a culture of effective async work.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Workplace Skills: Basics',
        description: 'A foundational course for thriving in digital workplaces',
        oldPrice: '100,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '4,200',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '60,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '3 months',
          'Digital Workplace Basics',
          '8 instruments',
          '1 final project – digital workplace setup, 8 deliverables',
          'Communication and Project Management Classes',
          'Workshops, recorded video lectures, practice with feedback',
          'Certificate of digital workplace proficiency',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Digital Workplace Specialist',
        description: 'Full course with one specialization for career advancement',
        oldPrice: '180,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '5,000',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '108,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '4 months',
          'Complete Digital Workplace Skills + Selectable Specialization',
          'Additional classes on productivity, security, and remote career growth',
          '12 instruments',
          '2 final projects, workplace portfolio, 15 deliverables',
          'Job readiness support for remote positions',
          'Certificate of digital workplace proficiency',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Digital Workplace Specialist: Advanced',
        description: 'Full course with 2 specializations for comprehensive skills',
        oldPrice: '240,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '6,700',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '144,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '6 months',
          'Complete Digital Workplace Skills + 2 Specializations to Choose From',
          'Additional classes on productivity, security, AI tools, and async communication',
          '12+ instruments',
          '3 final projects, full portfolio, 25 deliverables',
          'Remote job placement support',
          'Certificate of digital workplace proficiency',
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
        { q: 'How to arrange an installment plan, what are the terms and conditions for an installment plan?', a: 'You can pay for the course in installments for up to 24 months without overpayments. To arrange an installment plan, select the appropriate option at checkout. You will need to fill out a short form and wait for approval. The installment plan is available without a guarantor and without a bank visit.' },
        { q: 'What is payment by installments?', a: 'Payment by installments means you divide the total cost of the course into equal monthly payments over a period of up to 24 months. There are no additional fees or interest — you pay exactly the same amount as with a one-time payment, just spread out over time.' },
        { q: 'How do I get a refund if I don\'t like the course?', a: 'You can request a full refund within 14 days of the start of training, no questions asked. After this period, a proportional refund is possible for the unused portion of the course. To request a refund, contact our support team.' },
        { q: 'How to pay for tuition from abroad?', a: 'We accept international payments via bank card (Visa, Mastercard) and international wire transfer. You can also use PayPal or other international payment systems. Contact our support team for detailed instructions on international payments.' },
        { q: 'What is a tax deduction for education and how to get it?', a: 'A tax deduction allows you to return part of the money spent on education. You can get back up to 13% of the course cost if you have an official employment contract and pay personal income tax. To receive the deduction, you need to collect the necessary documents (license, payment receipt, contract) and submit them to the tax authority.' },
      ],
      Education: [
        { q: 'Do I need to already work remotely to take this course?', a: 'No, the course is for anyone who wants to develop digital workplace skills — whether you\'re already working remotely, transitioning to remote work, or want to be prepared for modern workplace requirements. No prior remote work experience is needed.' },
        { q: 'How is the training structured?', a: 'The training is conducted entirely online — you\'ll experience the digital workplace firsthand. It combines recorded video lectures, live webinars, collaborative exercises with other students, and practical assignments using real workplace tools.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 8 hours per week. The course is designed to be manageable alongside work, and you can adjust your pace as needed.' },
        { q: 'Can I study and work at the same time?', a: 'Yes! The course is specifically designed for working professionals. Everything is online and asynchronous-friendly, so you can study around your work schedule.' },
      ],
      Profession: [
        { q: 'Will this help me get a remote job?', a: 'Yes! Digital workplace skills are essential for remote positions. We cover the tools and practices that remote employers expect, and our final project gives you a tangible portfolio to show employers you can thrive in a digital workplace.' },
        { q: 'Is this course useful if I already work in an office?', a: 'Absolutely. Even office-based roles increasingly require digital collaboration skills. This course will make you more productive, improve your ability to work with remote colleagues, and position you for roles at modern digital-first companies.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion of all modules and the final assessment, you will receive a certificate of digital workplace proficiency. You can add this document to your resume and LinkedIn profile.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Digital Workplace Excellence',
  },
}

export default function DigitalWorkplaceLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
