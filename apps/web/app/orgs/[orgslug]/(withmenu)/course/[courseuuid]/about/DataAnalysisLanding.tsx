'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Business & Economic Data Analytics',
    description: 'Learn to transform business and economic data into useful insights using Excel, SQL, Python, statistics, visualization, and practical analytical techniques.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 14 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '15+ analytics tools' },
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
        description: 'We monitor changes in analytics tools, BI platforms, and data regulations. If anything changes, we update the course to reflect job openings and trends.',
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
        description: 'You can enhance your basic skills with two additional specializations and take your first orders on freelance platforms — we will give you access to a PRO account.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use neural networks professionally — we share working guides and prompts to make you more effective and in-demand as a data analyst.',
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
    subtitle: 'Build a career in data analytics and business intelligence',
    description: 'After completing the course, you will be able to work as a data analyst, BI specialist, or economic researcher. You can work in a company, freelance on data projects, or consult businesses on data-driven decision making. The skills are in high demand across finance, retail, logistics, and government sectors.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Data analyst working with dashboards and charts',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Salaries in the data analysis field grow with experience and specialization',
    cardTitle: 'Data Analyst',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '200,000', description: 'Starting position with basic SQL, Excel, and visualization skills. Works under supervision on reporting and data cleaning tasks.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '450,000', description: 'Independent analysis of business metrics, building dashboards, forecasting, and presenting insights to stakeholders. Works on full analytics cycles.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '800,000', description: 'Leads analytics strategy, designs data pipelines, mentors junior analysts, and drives data-informed decision making at the executive level.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Data Analyst for Economics & Business',
    keySkills: [
      'Statistical analysis and hypothesis testing',
      'Data cleaning, transformation, and preparation',
      'Building interactive dashboards and reports',
      'SQL queries and relational database management',
      'Time series forecasting and trend analysis',
      'Economic modeling and econometrics basics',
      'Data visualization for business storytelling',
      'A/B testing and experiment design',
    ],
    softSkills: [
      'Critical thinking and analytical reasoning',
      'Business communication and presentation',
      'Problem decomposition and structured thinking',
      'Stakeholder management and requirements gathering',
    ],
    tools: [
      { name: 'Python', desc: 'Primary programming language for data analysis with pandas, numpy, and scipy libraries', icon: '/images/course/tool_python.svg' },
      { name: 'SQL', desc: 'Query language for extracting and manipulating data from relational databases', icon: '/images/course/tool_sql.svg' },
      { name: 'Excel', desc: 'Advanced spreadsheet skills: pivot tables, Power Query, VLOOKUP, and financial modeling', icon: '/images/course/tool_excel.svg' },
      { name: 'Tableau', desc: 'Leading BI platform for creating interactive dashboards and visual analytics', icon: '/images/course/tool_tableau.svg' },
      { name: 'Power BI', desc: 'Microsoft business intelligence tool for dashboards, reports, and data modeling', icon: '/images/course/tool_powerbi.svg' },
      { name: 'Google Sheets', desc: 'Collaborative spreadsheet tool with Apps Script for automation and analysis', icon: '/images/course/tool_googlesheets.svg' },
      { name: 'R', desc: 'Statistical programming language for econometrics, forecasting, and research analysis', icon: '/images/course/tool_r.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for data exploration, code generation, and automating analysis workflows', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real data projects',
        texts: [
          'From the first weeks, you will work with real economic and business datasets — sales data, financial reports, market research, and public economic indicators. Each module includes hands-on analysis projects.',
          'By the end of the course, you will have a portfolio of 12+ analysis projects, from simple data cleaning to full business intelligence dashboards and forecasting models.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real orders and freelancing',
        texts: [
          'Practice on real tasks from partner companies and freelance platforms. You will learn to work with client requirements, scope analytics projects, and deliver insights on time.',
          'We provide access to a PRO account on freelance platforms and help you build your first client relationships in data analysis.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete business analytics solution — from data collection to interactive dashboard with actionable recommendations. This becomes the centerpiece of your professional portfolio.',
          'You will also create detailed analysis reports, code repositories, and visualization galleries — exactly what employers expect from a professional data analyst.',
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
      { title: 'Statistics Fundamentals', bonus: false, description: 'Introduction to descriptive and inferential statistics. Learn mean, median, variance, standard deviation, probability distributions, correlation, and hypothesis testing for business applications.' },
      { title: 'Data Processing with Python', bonus: false, description: 'Master pandas and numpy for data cleaning, transformation, merging, and aggregation. Handle missing values, outliers, and data quality issues. Automate repetitive data preparation tasks.' },
      { title: 'SQL and Databases', bonus: false, description: 'Learn to write complex SQL queries: JOINs, subqueries, window functions, and aggregations. Work with PostgreSQL and design efficient database schemas for business data.' },
      { title: 'Data Visualization', bonus: false, description: 'Master data visualization principles and tools. Create compelling charts, graphs, and interactive dashboards using Tableau, Power BI, and Python libraries (matplotlib, seaborn, plotly).' },
      { title: 'Econometrics & Forecasting', bonus: false, description: 'Learn regression analysis, time series forecasting, and economic modeling. Apply ARIMA, exponential smoothing, and linear regression to predict business trends and economic indicators.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to analyze a real business dataset end-to-end. Build an interactive dashboard with recommendations and present your findings for defense to industry experts.' },
      { title: 'Advanced Excel', bonus: true, description: 'Master advanced Excel features: Power Query for data transformation, Power Pivot for data modeling, VBA macros for automation, and financial modeling techniques.' },
      { title: 'A/B Testing & Experimentation', bonus: true, description: 'Learn to design and analyze A/B tests, calculate sample sizes, interpret statistical significance, and make data-driven recommendations for product and business decisions.' },
      { title: 'How to start freelancing', bonus: true, description: 'Step-by-step guide to launching your freelance career in data analysis: finding clients, creating a profile, pricing your services, and managing analytics projects independently.' },
      { title: 'Neural networks for analysts', bonus: true, description: 'Practical use of AI tools in analytics: ChatGPT for data exploration, automated insight generation, and machine learning basics for predictive analytics.' },
    ],
    specializations: [
      { title: 'Business Intelligence', isNew: false, description: 'Master BI platforms: build enterprise dashboards, ETL pipelines, and automated reporting systems using Tableau, Power BI, and data warehouses.' },
      { title: 'Financial Analytics', isNew: false, description: 'Specialize in financial data analysis: risk modeling, portfolio analytics, financial forecasting, and regulatory reporting for banking and investment sectors.' },
      { title: 'Marketing Analytics', isNew: false, description: 'Analyze marketing performance: customer segmentation, campaign ROI, attribution modeling, and customer lifetime value calculation.' },
      { title: 'Economic Research', isNew: true, description: 'Conduct economic research: macroeconomic analysis, policy impact studies, and market research using econometric models and public data sources.' },
      { title: 'Operations Analytics', isNew: false, description: 'Optimize business operations: supply chain analytics, inventory optimization, process efficiency, and resource allocation using data-driven methods.' },
      { title: 'Data Engineering', isNew: true, description: 'Build data infrastructure: ETL pipelines, data warehouses, data quality frameworks, and cloud data platforms (AWS, Google Cloud) for analytics.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Data Analysis: The Basics',
        description: 'A basic course to get acquainted with the profession and start working',
        oldPrice: '180,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '7,500',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '108,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '5 months',
          'Data Analysis Basics',
          '13 instruments',
          '1 final project – business dashboard, 12 portfolio cases',
          'Statistics and Visualization Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Data Analyst',
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
          '9 months',
          'Data Analysis Fundamentals + Selectable Specialization',
          'Additional classes on A/B testing, advanced Excel, and freelancing basics',
          '15 instruments',
          '2 final projects, group analysis, 20 cases',
          'Help with finding a job',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Data Analyst: Advanced',
        description: 'Full base and 2 specializations for more flexible work',
        oldPrice: '400,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '11,100',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '240,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '14 months',
          'Data Analysis Fundamentals + 2 Specializations to Choose From',
          'Additional classes on A/B testing, Excel, AI tools, and data engineering',
          '15+ instruments',
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
        { q: 'Do I need to know programming to start?', a: 'No, the course starts with the basics. We introduce Python and SQL from scratch, so no prior programming experience is required. Basic computer skills and familiarity with Excel are helpful but not mandatory.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars, practical assignments with real datasets, and tests. You study according to a schedule but can always return to materials you need. Lesson recordings are stored in your personal account for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. You can speed up or slow down the course depending on your schedule. Online classes are held up to 2 times a week in the evening.' },
        { q: 'Can I study and work at the same time?', a: 'Yes, the program is designed for working professionals. Classes are held in the evening, and all materials are available in your personal account. You can also pause your studies for up to 6 months if needed.' },
      ],
      Profession: [
        { q: 'Will I be able to find a job after completing the course?', a: 'Yes, we provide career support including resume preparation, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months of completing the course. Data analysis skills are among the most in-demand in the job market.' },
        { q: 'Do I need prior experience to start?', a: 'No, the course is designed for beginners. We start with the fundamentals of statistics and gradually move to advanced topics. You just need basic computer skills and a desire to learn. No prior analytics or programming experience is required.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Business & Economic Data Analytics',
  },
}

export default function DataAnalysisLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
