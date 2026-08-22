'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Digital Finance & Financial Technology',
    description: 'Learn how modern finance professionals use digital tools, spreadsheets, data, financial technology, and analytical techniques to manage and understand financial information.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 12 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '12+ finance & fintech tools' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 40 webinars with finance experts, up to 8 individual consultations, case study reviews and feedback throughout the course',
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
        description: 'We monitor changes in fintech, digital banking, payment systems, and financial regulations. If anything changes, we update the course to reflect the latest industry developments.',
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
        description: 'You can enhance your basic skills with two additional specializations — from investment analysis to fintech product management — and take your first freelance financial consulting clients.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for financial modeling, risk assessment, market analysis, and report generation — making you more effective and in-demand as a digital finance professional.',
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
    subtitle: 'Build a career in digital finance and fintech',
    description: 'After completing the course, you will be able to work as a financial analyst, fintech product specialist, corporate finance manager, or financial consultant. You can work in banks, fintech companies, corporations, or as an independent financial advisor. Digital finance skills are critical as the financial industry undergoes rapid digital transformation.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Finance professional analyzing digital financial dashboards',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Salaries in digital finance grow with experience, certifications, and industry specialization',
    cardTitle: 'Digital Finance Specialist',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '220,000', description: 'Starting position with basic financial analysis and digital tool skills. Works under supervision on financial reporting, data entry, and preliminary analysis.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '500,000', description: 'Independent financial analysis, investment evaluation, budget management, and fintech product support. Works on full financial analysis cycles and strategic recommendations.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '950,000', description: 'Leads finance departments, manages investment portfolios, drives fintech initiatives, and advises executives on financial strategy and digital transformation.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Digital Finance Specialist',
    keySkills: [
      'Financial statement analysis and interpretation',
      'Corporate finance and capital budgeting',
      'Investment analysis and portfolio management',
      'Digital payment systems and fintech platforms',
      'Financial modeling and valuation techniques',
      'Risk management and compliance',
      'Cash flow management and working capital optimization',
      'Financial forecasting and scenario analysis',
    ],
    softSkills: [
      'Analytical and critical thinking',
      'Financial communication and presentation',
      'Ethical judgment and integrity',
      'Strategic decision making',
    ],
    tools: [
      { name: 'Excel', desc: 'Advanced financial modeling: DCF, LBO, scenario analysis, Monte Carlo simulations, and financial dashboards', icon: '/images/course/tool_excel.svg' },
      { name: 'Python', desc: 'Financial programming: data analysis, quantitative modeling, and automating financial workflows with pandas', icon: '/images/course/tool_python.svg' },
      { name: 'Bloomberg Terminal', desc: 'Professional financial data platform for market data, news, analytics, and investment research', icon: '/images/course/tool_bloomberg.svg' },
      { name: 'QuickBooks', desc: 'Cloud accounting platform for managing corporate finances, expenses, and financial reporting', icon: '/images/course/tool_quickbooks.svg' },
      { name: 'Stripe', desc: 'Digital payment platform for processing online payments, subscriptions, and marketplace transactions', icon: '/images/course/tool_stripe.svg' },
      { name: 'Power BI', desc: 'Business intelligence tool for financial dashboards, KPIs, and interactive financial reporting', icon: '/images/course/tool_powerbi.svg' },
      { name: 'Tableau', desc: 'Data visualization platform for financial analytics, trend analysis, and stakeholder reporting', icon: '/images/course/tool_tableau.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for financial research, model templates, market analysis, and automating financial reports', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real financial projects',
        texts: [
          'From the first weeks, you will work with real financial data, market scenarios, and business cases. Each module includes hands-on financial modeling, analysis, and decision-making exercises.',
          'By the end of the course, you will have a portfolio of 12+ financial analysis projects, from company valuations to investment proposals and fintech product evaluations.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real orders and consulting',
        texts: [
          'Practice on real tasks from partner companies and freelance platforms. You will learn to conduct financial audits, build models, and deliver financial consulting for actual businesses.',
          'We help you build your first client relationships in financial consulting and provide frameworks for delivering professional engagements.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete financial analysis and investment recommendation for a real company — from financial statements to valuation to risk assessment.',
          'You will also create financial models, dashboards, and investment memos — exactly what employers expect from a professional digital finance specialist.',
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
      { title: 'Finance Fundamentals', bonus: false, description: 'Introduction to financial concepts: time value of money, interest rates, risk and return, and financial markets. Learn the core principles that underpin all financial decision making.' },
      { title: 'Financial Statement Analysis', bonus: false, description: 'Master the three financial statements: P&L, Balance Sheet, and Cash Flow. Learn ratio analysis, trend analysis, and how to assess company financial health from their reports.' },
      { title: 'Corporate Finance', bonus: false, description: 'Learn capital budgeting, NPV/IRR analysis, cost of capital, capital structure, and dividend policy. Master the tools for making corporate investment and financing decisions.' },
      { title: 'Financial Modeling', bonus: false, description: 'Build professional financial models in Excel: DCF valuation, LBO models, scenario analysis, and sensitivity tables. Learn best practices for model structure, formatting, and error checking.' },
      { title: 'Digital Finance & Fintech', bonus: false, description: 'Explore digital payment systems, blockchain, digital banking, robo-advisors, and fintech business models. Understand how technology is transforming financial services and creating new opportunities.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to conduct a complete financial analysis and valuation of a real company. Build a financial model, assess risks, and present investment recommendations for defense to industry experts.' },
      { title: 'Risk Management', bonus: true, description: 'Master financial risk management: market risk, credit risk, operational risk, and regulatory compliance. Learn hedging strategies and risk mitigation techniques.' },
      { title: 'Investment Analysis', bonus: true, description: 'Learn portfolio theory, asset allocation, equity research, and fixed income analysis. Master the tools for evaluating and managing investment portfolios.' },
      { title: 'How to start freelancing', bonus: true, description: 'Step-by-step guide to launching your career in financial consulting: finding clients, packaging services, pricing engagements, and delivering professional financial analysis projects.' },
      { title: 'AI for finance professionals', bonus: true, description: 'Practical use of AI in finance: automated data extraction, market research, model templates, risk scoring, and using ChatGPT for financial analysis and report generation.' },
    ],
    specializations: [
      { title: 'Investment Analysis', isNew: false, description: 'Specialize in investment analysis: equity research, portfolio management, asset valuation, and investment strategy development for funds and individual investors.' },
      { title: 'Fintech Product Management', isNew: false, description: 'Master fintech product management: digital payment products, banking apps, investment platforms, and leading product development in financial technology companies.' },
      { title: 'Corporate Treasury', isNew: false, description: 'Learn treasury management: cash management, liquidity planning, foreign exchange, debt management, and banking relationships for corporations.' },
      { title: 'Financial Risk', isNew: true, description: 'Specialize in financial risk management: quantitative risk models, regulatory compliance (Basel, IFRS), stress testing, and enterprise risk management frameworks.' },
      { title: 'Wealth Management', isNew: false, description: 'Master wealth management: personal financial planning, retirement planning, estate planning, and managing client investment portfolios.' },
      { title: 'DeFi & Blockchain', isNew: true, description: 'Explore decentralized finance: smart contracts, DeFi protocols, tokenomics, crypto assets, and the future of blockchain-based financial services.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Digital Finance: The Basics',
        description: 'A basic course to get acquainted with digital finance fundamentals',
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
          'Digital Finance Basics',
          '10 instruments',
          '1 final project – company financial analysis, 10 portfolio cases',
          'Financial Statements and Modeling Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Digital Finance Specialist',
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
          'Digital Finance Fundamentals + Selectable Specialization',
          'Additional classes on risk management, investment analysis, and freelancing basics',
          '12 instruments',
          '2 final projects, group analysis, 20 cases',
          'Help with finding a job',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Digital Finance Specialist: Advanced',
        description: 'Full base and 2 specializations for more flexible work',
        oldPrice: '420,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '11,700',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '252,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '12 months',
          'Digital Finance Fundamentals + 2 Specializations to Choose From',
          'Additional classes on risk management, investments, AI tools, and DeFi',
          '12+ instruments',
          '4 final projects, group analysis, 30 cases',
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
        { q: 'Do I need a finance background to start?', a: 'No, the course is designed for beginners. We start with the fundamentals of finance and gradually move to advanced topics. Basic math skills and familiarity with Excel are helpful but not required. No prior finance experience is necessary.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with finance experts, case study discussions, practical financial modeling assignments, and tests. You study according to a schedule but can always return to materials you need. Lesson recordings are stored in your personal account for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. You can speed up or slow down the course depending on your schedule. Online classes are held up to 2 times a week in the evening.' },
        { q: 'Can I study and work at the same time?', a: 'Yes, the program is designed for working professionals. Classes are held in the evening, and all materials are available in your personal account. You can also pause your studies for up to 6 months if needed.' },
      ],
      Profession: [
        { q: 'Will I be able to find a job after completing the course?', a: 'Yes, we provide career support including resume preparation, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months of completing the course. Digital finance skills are in high demand across banking, fintech, and corporate sectors.' },
        { q: 'Do I need prior experience to start?', a: 'No, the course is designed for beginners. We start with the fundamentals of finance and gradually move to advanced topics. You just need basic computer skills and a desire to learn. No prior finance or accounting experience is required.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Digital Finance & Financial Technology',
  },
}

export default function DigitalFinanceLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
