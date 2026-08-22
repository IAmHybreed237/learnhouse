'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Digital Business Operations',
    description: 'Learn how digital tools support business operations, information management, reporting, communication, productivity, and everyday business decision-making.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 14 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '15+ business management tools' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 40 webinars with industry leaders, up to 8 individual consultations, case study reviews and feedback throughout the course',
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
        description: 'We monitor changes in business strategy, management frameworks, and digital tools. If anything changes, we update the course to reflect market trends and new methodologies.',
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
        description: 'You can enhance your basic skills with two additional specializations — from project management to entrepreneurship — and take your first consulting clients.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for market research, strategic analysis, report generation, and decision support — making you more effective and in-demand as a business leader.',
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
    subtitle: 'Build a career in business management and leadership',
    description: 'After completing the course, you will be able to work as a business manager, operations director, department head, or business consultant. You can work in a company, start your own business, or freelance as a business advisor. Digital business management skills are essential across all industries and sectors.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Business administrator leading a team meeting',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Salaries in business administration grow with experience, responsibility scope, and company size',
    cardTitle: 'Business Administration Manager',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '250,000', description: 'Starting position managing a small team or department function. Works under senior management on operational tasks, reporting, and process documentation.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '550,000', description: 'Independent management of business operations, team leadership, budget responsibility, and strategic planning for a department or business unit.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '1,200,000', description: 'Leads multiple departments or entire company operations, drives strategic initiatives, manages P&L, and reports directly to executives or board members.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Digital Business Administration Manager',
    keySkills: [
      'Strategic planning and business model design',
      'Financial management and budgeting',
      'Team leadership and performance management',
      'Process optimization and operational efficiency',
      'Digital transformation and change management',
      'Market analysis and competitive strategy',
      'Project and program management',
      'Business analytics and KPI management',
    ],
    softSkills: [
      'Leadership and decision making',
      'Strategic thinking and vision',
      'Negotiation and stakeholder management',
      'Emotional intelligence and team building',
    ],
    tools: [
      { name: 'Notion', desc: 'All-in-one workspace for business documentation, knowledge management, and team collaboration', icon: '/images/course/tool_notion.svg' },
      { name: 'Asana', desc: 'Project and work management platform for tracking initiatives, deadlines, and team assignments', icon: '/images/course/tool_asana.svg' },
      { name: 'Power BI', desc: 'Business intelligence platform for dashboards, KPIs, and data-driven management decisions', icon: '/images/course/tool_powerbi.svg' },
      { name: 'Excel', desc: 'Advanced spreadsheet skills for financial modeling, budgeting, and business analysis', icon: '/images/course/tool_excel.svg' },
      { name: 'Slack', desc: 'Team communication platform for cross-functional coordination and company-wide announcements', icon: '/images/course/tool_slack.svg' },
      { name: 'Salesforce', desc: 'CRM platform for managing customer relationships, sales pipelines, and business operations', icon: '/images/course/tool_salesforce.svg' },
      { name: 'Miro', desc: 'Collaborative whiteboard for strategy sessions, brainstorming, and visual business planning', icon: '/images/course/tool_miro.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for market research, strategic analysis, report drafting, and decision support', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real business cases',
        texts: [
          'From the first weeks, you will work with real business scenarios: analyzing companies, developing strategies, managing simulated budgets, and presenting recommendations to peers and mentors.',
          'By the end of the course, you will have a portfolio of 12+ business cases, from market entry strategies to operational improvement plans and digital transformation roadmaps.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real orders and consulting',
        texts: [
          'Practice on real tasks from partner companies. You will learn to conduct business audits, propose improvements, and deliver consulting engagements for actual businesses.',
          'We help you build your first client relationships in business consulting and provide frameworks for delivering professional engagements.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete business plan and management strategy for a real or simulated company — from market analysis to financial projections to implementation roadmap.',
          'You will also create strategic documents, process maps, and presentation decks — exactly what employers expect from a professional business manager.',
        ],
        image: '/images/course/practice_portfolio.webp',
      },
    ],
  },
  program: {
    title: 'The training program is up to 14 months',
    subtitle: 'First, complete the main course, then choose one of the specializations.',
    researchNote: 'To ensure the program meets the needs of the labor market, we conduct three stages of research',
    bullets: ['Advanced training program', 'Working with a mentor'],
    mainProgram: [
      { title: 'Business Fundamentals', bonus: false, description: 'Introduction to business models, organizational structures, and management principles. Learn how businesses create value, generate revenue, and operate across different industries and market contexts.' },
      { title: 'Strategic Management', bonus: false, description: 'Master strategic planning frameworks: SWOT, PESTEL, Porter\'s Five Forces, and Balanced Scorecard. Learn to formulate, implement, and evaluate business strategies for competitive advantage.' },
      { title: 'Financial Management', bonus: false, description: 'Learn business finance: budgeting, cash flow management, financial analysis, and investment evaluation. Master P&L, balance sheets, KPIs, and financial dashboards for decision making.' },
      { title: 'Team Leadership', bonus: false, description: 'Develop leadership skills: team building, motivation, delegation, performance management, and conflict resolution. Learn to lead remote and hybrid teams effectively using digital tools.' },
      { title: 'Digital Transformation', bonus: false, description: 'Master digital transformation strategies: process automation, technology adoption, change management, and building a digital-first culture. Learn to evaluate and implement digital tools across business functions.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to develop a complete business strategy and management plan for a real or simulated company. Present your strategy for defense and receive feedback from industry experts.' },
      { title: 'Business Law Basics', bonus: true, description: 'Understand legal fundamentals: business entities, contracts, employment law, intellectual property, and regulatory compliance. Learn to navigate legal considerations in business decisions.' },
      { title: 'Negotiation & Sales', bonus: true, description: 'Master negotiation techniques, sales management, and business development. Learn to close deals, manage client relationships, and build strategic partnerships.' },
      { title: 'How to start consulting', bonus: true, description: 'Step-by-step guide to launching your business consulting career: finding clients, packaging services, pricing engagements, and delivering professional consulting projects.' },
      { title: 'AI for business leaders', bonus: true, description: 'Practical use of AI in business management: market research automation, strategic analysis, competitive intelligence, and using ChatGPT for business planning and decision support.' },
    ],
    specializations: [
      { title: 'Project Management', isNew: false, description: 'Master project management: PMBOK and Agile methodologies, project planning, risk management, and leading cross-functional project teams using digital PM tools.' },
      { title: 'Operations Management', isNew: false, description: 'Specialize in operations: supply chain management, process optimization, quality management, and operational excellence using Lean and Six Sigma principles.' },
      { title: 'Entrepreneurship', isNew: false, description: 'Learn to start and grow a business: business plan development, fundraising, startup management, scaling strategies, and investor relations.' },
      { title: 'Digital Strategy', isNew: true, description: 'Lead digital transformation initiatives: technology evaluation, digital roadmap development, innovation management, and building digital capabilities in traditional organizations.' },
      { title: 'HR Management', isNew: false, description: 'Master human resources management: talent acquisition, performance systems, organizational development, and building company culture in digital-first workplaces.' },
      { title: 'Business Consulting', isNew: true, description: 'Build a career in business consulting: client engagement, problem structuring, analysis frameworks, and delivering actionable recommendations to organizations.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Business Admin: The Basics',
        description: 'A basic course to get acquainted with business management fundamentals',
        oldPrice: '200,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '8,300',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '120,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '5 months',
          'Business Administration Basics',
          '10 instruments',
          '1 final project – business strategy, 10 portfolio cases',
          'Strategic Management and Finance Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Business Administrator',
        description: 'All the base and focus on specialization in one direction',
        oldPrice: '350,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '9,700',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '210,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '9 months',
          'Business Administration Fundamentals + Selectable Specialization',
          'Additional classes on business law, negotiation, and consulting basics',
          '15 instruments',
          '2 final projects, group strategy, 20 cases',
          'Help with finding a job',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Business Administrator: Advanced',
        description: 'Full base and 2 specializations for more flexible work',
        oldPrice: '450,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '12,500',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '270,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '14 months',
          'Business Administration Fundamentals + 2 Specializations to Choose From',
          'Additional classes on business law, negotiation, AI tools, and digital strategy',
          '15+ instruments',
          '4 final projects, group strategy, 30 cases',
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
        { q: 'Do I need management experience to start?', a: 'No, the course is designed for beginners and those transitioning to management roles. We start with business fundamentals and gradually move to advanced strategic topics. Some work experience in any field is helpful but not required.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with industry leaders, case study discussions, practical assignments, and tests. You study according to a schedule but can always return to materials you need. Lesson recordings are stored in your personal account for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. You can speed up or slow down the course depending on your schedule. Online classes are held up to 2 times a week in the evening.' },
        { q: 'Can I study and work at the same time?', a: 'Yes, the program is designed for working professionals. Classes are held in the evening, and all materials are available in your personal account. You can also pause your studies for up to 6 months if needed.' },
      ],
      Profession: [
        { q: 'Will I be able to find a job after completing the course?', a: 'Yes, we provide career support including resume preparation, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months of completing the course. Business management skills are in constant demand across all industries.' },
        { q: 'Do I need prior experience to start?', a: 'No, the course is designed for beginners. We start with the fundamentals of business and gradually move to advanced management topics. Some professional experience in any field is beneficial but not required.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Digital Business Operations',
  },
}

export default function DigitalBusinessAdminLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
