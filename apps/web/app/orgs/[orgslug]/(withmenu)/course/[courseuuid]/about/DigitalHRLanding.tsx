'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Digital Human Resources',
    description: 'Learn how digital tools support recruitment, employee records, payroll information, HR reporting, communication, and modern people operations.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 10 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '12+ HR management platforms' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 40 webinars with HR leaders, up to 8 individual consultations, case study reviews and feedback throughout the course',
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
        description: 'We monitor changes in labor law, HR tech, remote work practices, and employee expectations. If anything changes, we update the course to reflect the latest HR trends and regulations.',
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
        description: 'You can enhance your basic skills with two additional specializations — from talent acquisition to L&D — and take your first freelance HR consulting clients.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for resume screening, job descriptions, employee surveys, and HR analytics — making you more effective and in-demand as a digital HR professional.',
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
    subtitle: 'Build a career in digital HR and people management',
    description: 'After completing the course, you will be able to work as an HR manager, talent acquisition specialist, people operations lead, or HR consultant. You can work in a company, at an HR agency, or as a freelance HR consultant. Digital HR skills are essential as companies transform their people practices for the modern workplace.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'HR manager leading a team meeting and onboarding session',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Salaries in digital HR grow with experience, team size, and organizational scope',
    cardTitle: 'Digital HR Manager',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '180,000', description: 'Starting position handling recruitment coordination, employee records, onboarding, and basic HR operations using digital platforms.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '400,000', description: 'Independent management of HR functions: full-cycle recruitment, performance reviews, employee relations, and HR analytics. May supervise junior HR staff.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '750,000', description: 'Leads HR departments, designs people strategy, implements HRIS systems, manages organizational development, and serves as a strategic partner to leadership.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Digital HR Management Specialist',
    keySkills: [
      'Full-cycle recruitment and candidate assessment',
      'Performance management and appraisal systems',
      'Employee onboarding and offboarding processes',
      'Compensation and benefits administration',
      'HR analytics and data-driven people decisions',
      'Employee engagement and retention strategies',
      'Labor law compliance and employee relations',
      'Learning and development program design',
    ],
    softSkills: [
      'Empathy and emotional intelligence',
      'Conflict resolution and mediation',
      'Communication and interpersonal skills',
      'Discretion and confidentiality',
    ],
    tools: [
      { name: 'BambooHR', desc: 'Leading HRIS platform for employee data, time-off tracking, onboarding, and performance management', icon: '/images/course/tool_bamboohr.svg' },
      { name: 'Workday', desc: 'Enterprise HR platform for human capital management, payroll, talent, and workforce planning', icon: '/images/course/tool_workday.svg' },
      { name: 'LinkedIn Recruiter', desc: 'Professional recruiting platform for sourcing, tracking, and engaging candidates', icon: '/images/course/tool_linkedin.svg' },
      { name: 'Google Workspace', desc: 'Collaboration suite for HR documentation, surveys, forms, and team communication', icon: '/images/course/tool_googleworkspace.svg' },
      { name: 'Slack', desc: 'Team communication platform for employee engagement, announcements, and HR support channels', icon: '/images/course/tool_slack.svg' },
      { name: 'Notion', desc: 'Workspace for HR wikis, employee handbooks, process documentation, and knowledge management', icon: '/images/course/tool_notion.svg' },
      { name: 'Zoom', desc: 'Video platform for remote interviews, onboarding sessions, and virtual team building', icon: '/images/course/tool_zoom.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for job descriptions, interview questions, policy drafting, and HR analytics', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real HR projects',
        texts: [
          'From the first weeks, you will work with real HR scenarios: writing job descriptions, conducting mock interviews, designing onboarding plans, and building performance review templates using actual HR platforms.',
          'By the end of the course, you will have a portfolio of 10+ HR projects, from recruitment campaigns to employee engagement programs and HR analytics dashboards.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real orders and consulting',
        texts: [
          'Practice on real tasks from partner companies. You will learn to conduct HR audits, design HR processes, and deliver consulting engagements for actual businesses.',
          'We help you build your first client relationships in HR consulting and provide frameworks for delivering professional engagements.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete HR system design for a simulated company — from recruitment strategy to performance management to employee engagement plan.',
          'You will also create HR documentation, process maps, and analytics dashboards — exactly what employers expect from a professional digital HR manager.',
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
      { title: 'HR Fundamentals', bonus: false, description: 'Introduction to modern HR management: HR roles, organizational structures, employee lifecycle, and the strategic role of HR in business. Learn how HR drives organizational success.' },
      { title: 'Digital Recruitment', bonus: false, description: 'Master digital recruitment: job posting, candidate sourcing on LinkedIn, applicant tracking systems, interview techniques, and candidate assessment. Learn to build talent pipelines.' },
      { title: 'Performance Management', bonus: false, description: 'Design and implement performance management systems: goal setting (OKRs, KPIs), performance reviews, 360-degree feedback, and development planning using digital platforms.' },
      { title: 'HRIS & Digital Tools', bonus: false, description: 'Master HR Information Systems: BambooHR, Workday, and ATS platforms. Learn to manage employee data, automate HR processes, and generate HR analytics dashboards.' },
      { title: 'Employee Engagement', bonus: false, description: 'Learn to build engagement strategies: employee surveys, recognition programs, wellness initiatives, and company culture development for remote and hybrid teams.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to design a complete HR system for a simulated company. Present your HR strategy and implementation plan for defense to industry experts.' },
      { title: 'Labor Law & Compliance', bonus: true, description: 'Master employment law basics: contracts, termination, workplace policies, discrimination laws, and health & safety regulations. Learn to ensure legal compliance in HR practices.' },
      { title: 'Compensation & Benefits', bonus: true, description: 'Learn to design compensation structures: salary benchmarking, bonus systems, benefits packages, and payroll management using digital platforms.' },
      { title: 'How to start freelancing', bonus: true, description: 'Step-by-step guide to launching your HR consulting career: finding clients, packaging services, pricing engagements, and managing multiple HR consulting projects.' },
      { title: 'AI for HR professionals', bonus: true, description: 'Practical use of AI in HR: resume screening, job description generation, interview question banks, employee sentiment analysis, and HR chatbots for employee support.' },
    ],
    specializations: [
      { title: 'Talent Acquisition', isNew: false, description: 'Specialize in recruitment: employer branding, sourcing strategies, assessment centers, recruitment marketing, and building high-performing talent acquisition teams.' },
      { title: 'Learning & Development', isNew: false, description: 'Master L&D: training program design, e-learning platforms, leadership development, skills mapping, and measuring training ROI using digital learning tools.' },
      { title: 'People Analytics', isNew: true, description: 'Specialize in HR analytics: workforce planning, turnover analysis, diversity metrics, predictive HR models, and building data-driven people strategies.' },
      { title: 'Organizational Development', isNew: false, description: 'Learn organizational development: change management, culture transformation, team effectiveness, and organizational design for modern digital companies.' },
      { title: 'Employee Experience', isNew: false, description: 'Master employee experience design: journey mapping, onboarding optimization, workplace design, and creating engaging digital employee experiences.' },
      { title: 'Diversity & Inclusion', isNew: true, description: 'Specialize in D&I: inclusive hiring practices, bias training, diversity metrics, accessibility, and building inclusive workplace cultures.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Digital HR: The Basics',
        description: 'A basic course to get acquainted with digital HR management',
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
          'Digital HR Basics',
          '8 instruments',
          '1 final project – HR system design, 8 portfolio cases',
          'Recruitment and Performance Management Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Digital HR Manager',
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
          'Digital HR Fundamentals + Selectable Specialization',
          'Additional classes on labor law, compensation, and freelancing basics',
          '12 instruments',
          '2 final projects, group practice, 15 cases',
          'Help with finding a job',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Digital HR Manager: Advanced',
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
          'Digital HR Fundamentals + 2 Specializations to Choose From',
          'Additional classes on labor law, compensation, AI tools, and D&I',
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
        { q: 'Do I need HR experience to start?', a: 'No, the course is designed for beginners. We start with the fundamentals of HR management and gradually move to advanced topics. You just need basic computer skills and an interest in working with people. No prior HR experience is required.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with HR leaders, case study discussions, practical assignments with HR platforms, and tests. You study according to a schedule but can always return to materials you need. Lesson recordings are stored in your personal account for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. You can speed up or slow down the course depending on your schedule. Online classes are held up to 2 times a week in the evening.' },
        { q: 'Can I study and work at the same time?', a: 'Yes, the program is designed for working professionals. Classes are held in the evening, and all materials are available in your personal account. You can also pause your studies for up to 6 months if needed.' },
      ],
      Profession: [
        { q: 'Will I be able to find a job after completing the course?', a: 'Yes, we provide career support including resume preparation, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months of completing the course. HR skills are in constant demand as every organization needs people management.' },
        { q: 'Do I need prior experience to start?', a: 'No, the course is designed for beginners. We start with the fundamentals of HR and gradually move to advanced topics. You just need basic computer skills and a desire to work with people.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Digital Human Resources',
  },
}

export default function DigitalHRLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
