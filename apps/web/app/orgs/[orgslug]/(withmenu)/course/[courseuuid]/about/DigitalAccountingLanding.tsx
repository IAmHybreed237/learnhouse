'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Digital Accounting & Bookkeeping',
    description: 'Develop practical digital accounting skills using spreadsheets, bookkeeping systems, accounting software, financial records, and financial reporting.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 10 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '10+ accounting platforms' },
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
        description: 'We monitor changes in tax regulations, accounting standards, and digital tools. If anything changes, we update the course to reflect current laws and software updates.',
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
        description: 'You can enhance your basic skills with two additional specializations — from payroll management to audit preparation — and take your first freelance accounting clients.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for invoice processing, expense categorization, and automated reconciliation — making you more effective and in-demand as a digital accountant.',
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
    subtitle: 'Build a career in digital accounting and financial management',
    description: 'After completing the course, you will be able to work as a digital accountant, bookkeeper, or financial operations specialist. You can work in a company, freelance for multiple clients, or start your own accounting service. Digital accounting skills are essential for every business, from startups to large enterprises.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Digital accountant working with cloud accounting software',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Salaries in digital accounting grow with experience, certifications, and client portfolio',
    cardTitle: 'Digital Accountant',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '180,000', description: 'Starting position with basic bookkeeping and cloud accounting platform skills. Works under supervision on data entry, reconciliation, and invoice processing.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '400,000', description: 'Independent management of full accounting cycles, payroll, tax filings, and financial reporting. Handles multiple clients or a medium-sized company accounts.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '700,000', description: 'Leads accounting departments, implements digital transformation, manages audits, and advises on financial strategy. May run an independent accounting firm.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Digital Accounting Specialist',
    keySkills: [
      'Double-entry bookkeeping and chart of accounts',
      'Financial statements: P&L, balance sheet, cash flow',
      'Accounts payable and receivable management',
      'Payroll processing and statutory deductions',
      'Tax compliance and filing (VAT, income tax, payroll tax)',
      'Bank reconciliation and cash management',
      'Budgeting and financial forecasting',
      'Cloud accounting and digital document management',
    ],
    softSkills: [
      'Attention to detail and accuracy',
      'Ethical judgment and integrity',
      'Time management and deadline compliance',
      'Client communication and financial advisory',
    ],
    tools: [
      { name: 'QuickBooks', desc: 'Leading cloud accounting software for small and medium businesses — invoicing, expense tracking, and reporting', icon: '/images/course/tool_quickbooks.svg' },
      { name: 'Xero', desc: 'Cloud-based accounting platform with bank feeds, payroll, inventory, and multi-currency support', icon: '/images/course/tool_xero.svg' },
      { name: 'Sage', desc: 'Comprehensive accounting and ERP solution for business management, payroll, and financial reporting', icon: '/images/course/tool_sage.svg' },
      { name: 'Excel', desc: 'Advanced spreadsheet skills for financial modeling, pivot tables, and accounting automation', icon: '/images/course/tool_excel.svg' },
      { name: 'Wave', desc: 'Free accounting software for small businesses and freelancers — invoicing, receipts, and reporting', icon: '/images/course/tool_wave.svg' },
      { name: 'Zoho Books', desc: 'Online accounting software with inventory management, project accounting, and automation', icon: '/images/course/tool_zohobooks.svg' },
      { name: 'Google Sheets', desc: 'Collaborative spreadsheets for budgeting, expense tracking, and financial templates', icon: '/images/course/tool_googlesheets.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for categorizing expenses, generating reports, and automating routine accounting tasks', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real accounting projects',
        texts: [
          'From the first weeks, you will work with real financial documents, transactions, and accounting scenarios. Each module includes hands-on practice with actual accounting software and real business data.',
          'By the end of the course, you will have a portfolio of 10+ completed accounting cycles, from setting up a company file to producing full financial statements.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real orders and freelancing',
        texts: [
          'Practice on real tasks from partner companies and freelance platforms. You will learn to manage client books, process payroll, and file taxes for actual businesses.',
          'We provide access to a PRO account on freelance platforms and help you build your first client relationships in digital accounting.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete accounting setup for a simulated business — from chart of accounts design to financial statements and tax filings. This becomes the centerpiece of your professional portfolio.',
          'You will also create sample reports, reconciliation templates, and process documentation — exactly what employers expect from a professional digital accountant.',
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
      { title: 'Accounting Fundamentals', bonus: false, description: 'Introduction to double-entry bookkeeping, the accounting equation, chart of accounts, and journal entries. Learn debits, credits, ledgers, and trial balances from the ground up.' },
      { title: 'Digital Bookkeeping', bonus: false, description: 'Master cloud accounting platforms: set up company files, record transactions, manage invoices and bills, reconcile bank accounts, and generate financial reports using QuickBooks and Xero.' },
      { title: 'Financial Statements', bonus: false, description: 'Learn to prepare and analyze the three core financial statements: Profit & Loss, Balance Sheet, and Cash Flow Statement. Understand how they connect and what they reveal about business health.' },
      { title: 'Payroll & Statutory Deductions', bonus: false, description: 'Process payroll: calculate gross pay, deductions, net pay, and employer contributions. Handle tax withholdings, social security, and statutory filings. Automate payroll with digital tools.' },
      { title: 'Tax Compliance', bonus: false, description: 'Master tax filing requirements: VAT registration and returns, corporate income tax, payroll taxes, and tax deadlines. Learn to use digital tax filing portals and ensure compliance.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to set up a complete accounting system for a simulated business. Produce full financial statements, tax filings, and present your work for defense to industry experts.' },
      { title: 'Advanced Excel for Accounting', bonus: true, description: 'Master Excel for accounting: VLOOKUP, pivot tables, conditional formatting, financial templates, and macros for automating repetitive accounting tasks.' },
      { title: 'Digital document management', bonus: true, description: 'Learn to manage digital receipts, invoices, and financial documents. Master OCR tools, digital archiving, and paperless workflows for modern accounting.' },
      { title: 'How to start freelancing', bonus: true, description: 'Step-by-step guide to launching your freelance career in digital accounting: finding clients, setting up your practice, pricing your services, and managing multiple client accounts.' },
      { title: 'AI tools for accountants', bonus: true, description: 'Practical use of AI in accounting: automated invoice processing, expense categorization, anomaly detection, and using ChatGPT for accounting research and documentation.' },
    ],
    specializations: [
      { title: 'Payroll Management', isNew: false, description: 'Specialize in payroll: multi-country payroll, benefits administration, statutory compliance, and payroll software management for medium and large organizations.' },
      { title: 'Tax Advisory', isNew: false, description: 'Master tax advisory: tax planning, optimization strategies, international tax considerations, and representing clients during tax audits.' },
      { title: 'Audit Preparation', isNew: false, description: 'Learn to prepare companies for audits: internal controls, audit trails, documentation standards, and working with external auditors.' },
      { title: 'Financial Analysis', isNew: true, description: 'Combine accounting with analysis: financial ratio analysis, budgeting, forecasting, and providing strategic financial recommendations to management.' },
      { title: 'Inventory Accounting', isNew: false, description: 'Master inventory valuation methods, cost of goods sold, stock adjustments, and integrating inventory systems with accounting software.' },
      { title: 'Nonprofit Accounting', isNew: true, description: 'Specialized accounting for NGOs and nonprofits: fund accounting, grant management, restricted funds, and nonprofit financial reporting.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Digital Accounting: The Basics',
        description: 'A basic course to get acquainted with digital accounting and start working',
        oldPrice: '150,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '6,250',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '90,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '4 months',
          'Digital Accounting Basics',
          '8 instruments',
          '1 final project – complete bookkeeping setup, 8 portfolio cases',
          'Bookkeeping and Financial Statements Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Digital Accountant',
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
          'Digital Accounting Fundamentals + Selectable Specialization',
          'Additional classes on Excel, document management, and freelancing basics',
          '10 instruments',
          '2 final projects, group practice, 15 cases',
          'Help with finding a job',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Digital Accountant: Advanced',
        description: 'Full base and 2 specializations for more flexible work',
        oldPrice: '350,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '9,700',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '210,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '10 months',
          'Digital Accounting Fundamentals + 2 Specializations to Choose From',
          'Additional classes on Excel, document management, AI tools, and nonprofit accounting',
          '10+ instruments',
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
        { q: 'Do I need accounting experience to start?', a: 'No, the course is designed for beginners. We start with the fundamentals of double-entry bookkeeping and gradually move to advanced topics. You just need basic computer skills and familiarity with numbers. No prior accounting experience is required.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars, practical assignments with real accounting software, and tests. You study according to a schedule but can always return to materials you need. Lesson recordings are stored in your personal account for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. You can speed up or slow down the course depending on your schedule. Online classes are held up to 2 times a week in the evening.' },
        { q: 'Can I study and work at the same time?', a: 'Yes, the program is designed for working professionals. Classes are held in the evening, and all materials are available in your personal account. You can also pause your studies for up to 6 months if needed.' },
      ],
      Profession: [
        { q: 'Will I be able to find a job after completing the course?', a: 'Yes, we provide career support including resume preparation, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months of completing the course. Every business needs accounting, so demand is constant.' },
        { q: 'Do I need prior experience to start?', a: 'No, the course is designed for beginners. We start with the fundamentals of accounting and gradually move to advanced topics. You just need basic computer skills and a desire to learn. No prior accounting or finance experience is required.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Digital Accounting & Bookkeeping',
  },
}

export default function DigitalAccountingLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
