'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Engineering Computing & Digital Tools',
    description: 'Develop practical computing skills for engineering work, including technical software, data handling, documentation, computational tools, and digital engineering workflows.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 12 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '12+ engineering software tools' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 40 webinars with engineering professionals, up to 8 individual consultations, project reviews and feedback throughout the course',
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
        description: 'We monitor changes in engineering software, computational methods, and industry standards. If anything changes, we update the course to reflect the latest engineering tools and practices.',
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
        description: 'You can enhance your basic skills with two additional specializations — from CAD design to data analysis — and expand your engineering career with computational expertise.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for engineering calculations, code generation, simulation setup, and data analysis — making you more efficient and capable as a computational engineer.',
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
    subtitle: 'Build a career in computational engineering',
    description: 'After completing the course, you will be able to work as a computational engineer, CAD designer, simulation analyst, or engineering programmer. You can work in manufacturing, construction, aerospace, automotive, or any engineering field. Computational skills make engineers more valuable and versatile.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Engineer using computational tools for design and simulation',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Computational engineering skills significantly increase earning potential',
    cardTitle: 'Computational Engineer',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '250,000', description: 'Starting position using CAD tools, running simulations, and supporting engineering analysis. Works under senior engineers on design and computation tasks.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '550,000', description: 'Independent computational analysis, simulation setup, programming custom tools, and contributing to engineering design decisions with data-driven insights.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '1,000,000', description: 'Leads computational engineering teams, develops custom simulation tools, optimizes designs, and drives engineering innovation using advanced computational methods.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Computational Engineering Specialist',
    keySkills: [
      'CAD design and 3D modeling',
      'Engineering simulation and finite element analysis',
      'Programming for engineering: Python and MATLAB',
      'Numerical methods and computational mathematics',
      'Data analysis and visualization for engineering',
      'Engineering optimization techniques',
      'Technical documentation and reporting',
      'Automating engineering workflows with scripts',
    ],
    softSkills: [
      'Analytical and logical thinking',
      'Problem decomposition',
      'Attention to precision and detail',
      'Continuous learning of new tools',
    ],
    tools: [
      { name: 'MATLAB', desc: 'Numerical computing environment for matrix operations, signal processing, and engineering simulations', icon: '/images/course/tool_matlab.svg' },
      { name: 'Python', desc: 'Programming language for engineering: NumPy, SciPy, Matplotlib, and scientific computing libraries', icon: '/images/course/tool_python.svg' },
      { name: 'AutoCAD', desc: 'Industry-standard CAD software for 2D drafting and 3D design in engineering and architecture', icon: '/images/course/tool_autocad.svg' },
      { name: 'SolidWorks', desc: '3D CAD design software for mechanical engineering, product design, and simulation', icon: '/images/course/tool_solidworks.svg' },
      { name: 'ANSYS', desc: 'Engineering simulation software for finite element analysis, fluid dynamics, and thermal analysis', icon: '/images/course/tool_ansys.svg' },
      { name: 'Excel', desc: 'Advanced spreadsheet for engineering calculations, data analysis, and automated reporting', icon: '/images/course/tool_excel.svg' },
      { name: 'Git', desc: 'Version control system for managing engineering code, scripts, and collaborative development', icon: '/images/course/tool_git.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for engineering calculations, code generation, debugging, and learning new computational methods', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real engineering projects',
        texts: [
          'From the first weeks, you will work on real engineering computation projects: CAD designs, simulations, data analysis, and custom engineering scripts. Each module includes hands-on computational work.',
          'By the end of the course, you will have a portfolio of 12+ engineering computation projects, from CAD models to simulation reports and automated analysis tools.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real-world applications',
        texts: [
          'Practice with real engineering scenarios: structural analysis, thermal simulation, fluid dynamics, and design optimization. Apply computational tools to solve actual engineering problems.',
          'You will learn to approach engineering challenges computationally — using software to analyze, optimize, and validate designs before physical prototyping.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete computational engineering solution — from CAD design to simulation to optimization — demonstrating your ability to solve complex engineering problems with software.',
          'You will build a professional portfolio with CAD models, simulation reports, code repositories, and technical documentation that employers expect from a computational engineer.',
        ],
        image: '/images/course/practice_portfolio.webp',
      },
    ],
  },
  program: {
    title: 'The training program is up to 12 months',
    subtitle: 'First, complete the main course, then choose one of the specializations.',
    researchNote: 'Developed with input from engineering firms and computational engineering professionals',
    bullets: ['Advanced training program', 'Working with engineering mentors'],
    mainProgram: [
      { title: 'Computational Fundamentals', bonus: false, description: 'Introduction to computational engineering: numerical methods, algorithms, and how computers solve engineering problems. Learn the mathematical foundations of computational analysis.' },
      { title: 'Python for Engineering', bonus: false, description: 'Master Python for engineering: NumPy for arrays, SciPy for scientific computing, Matplotlib for visualization, and writing scripts to automate engineering calculations and data processing.' },
      { title: 'CAD Design', bonus: false, description: 'Learn 2D drafting in AutoCAD and 3D modeling in SolidWorks: creating parts, assemblies, drawings, and engineering documentation. Master the CAD workflow from concept to detailed design.' },
      { title: 'Engineering Simulation', bonus: false, description: 'Master finite element analysis (FEA) and computational fluid dynamics (CFD) using ANSYS: setting up simulations, meshing, boundary conditions, and interpreting results for design validation.' },
      { title: 'MATLAB & Data Analysis', bonus: false, description: 'Learn MATLAB for engineering: matrix operations, signal processing, control systems, and data visualization. Analyze engineering data and create automated analysis workflows.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to solve a complex engineering problem computationally: design in CAD, simulate performance, optimize, and present your solution for defense to engineering experts.' },
      { title: 'Engineering Optimization', bonus: true, description: 'Learn design optimization: parametric studies, topology optimization, genetic algorithms, and using computational tools to find optimal engineering designs.' },
      { title: 'Engineering Programming', bonus: true, description: 'Master advanced engineering programming: custom MATLAB scripts, Python automation, API integration with CAD tools, and building engineering software tools.' },
      { title: 'Engineering documentation', bonus: true, description: 'Learn professional engineering documentation: technical reports, calculation reports, design specifications, and standards compliance documentation for engineering projects.' },
      { title: 'AI for engineers', bonus: true, description: 'Practical AI for engineering: ChatGPT for calculations and code, machine learning for predictive maintenance, AI-assisted design optimization, and emerging AI tools in engineering.' },
    ],
    specializations: [
      { title: 'Mechanical CAD', isNew: false, description: 'Specialize in mechanical CAD: advanced SolidWorks, sheet metal design, surface modeling, and creating manufacturing-ready mechanical designs.' },
      { title: 'Structural Analysis', isNew: false, description: 'Master structural FEA: stress analysis, vibration analysis, fatigue, and using ANSYS for structural engineering simulation and validation.' },
      { title: 'CFD & Thermal', isNew: false, description: 'Specialize in fluid dynamics and thermal analysis: CFD simulation, heat transfer, thermal management, and fluid flow analysis for engineering applications.' },
      { title: 'Engineering Data Science', isNew: true, description: 'Combine engineering with data science: sensor data analysis, predictive maintenance, engineering analytics, and building data-driven engineering systems.' },
      { title: 'Control Systems', isNew: false, description: 'Master computational control engineering: system modeling, controller design, simulation, and implementing control algorithms in MATLAB and Python.' },
      { title: 'Manufacturing Computing', isNew: true, description: 'Learn computing for manufacturing: CAM programming, CNC simulation, process optimization, and digital manufacturing workflows.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Engineering Computing: Basics',
        description: 'A foundational course in computational engineering tools',
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
          'Engineering Computing Basics',
          '8 instruments',
          '1 final project – computational engineering solution, 10 portfolio pieces',
          'Python and CAD Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Computational Engineer',
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
          'Engineering Computing Fundamentals + Selectable Specialization',
          'Additional classes on optimization, programming, and documentation',
          '12 instruments',
          '2 final projects, engineering portfolio, 20 cases',
          'Help with finding engineering positions',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Computational Engineer: Advanced',
        description: 'Full base and 2 specializations for comprehensive computational skills',
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
          'Engineering Computing Fundamentals + 2 Specializations to Choose From',
          'Additional classes on optimization, programming, AI tools, and manufacturing computing',
          '12+ instruments',
          '4 final projects, full portfolio, 30 cases',
          'Connections with engineering firms',
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
        { q: 'Do I need an engineering degree to take this course?', a: 'While an engineering background is helpful, the course is accessible to anyone with solid math skills and interest in engineering. We start with computational fundamentals and build up to advanced tools. If you\'re an engineering student or professional, you\'ll find the course directly applicable to your work.' },
        { q: 'Do I need powerful hardware for simulations?', a: 'For learning purposes, a standard computer can handle most course exercises. For advanced simulations, we provide cloud-based access to simulation tools. We also teach optimization techniques for running simulations efficiently on standard hardware.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with engineering professionals, hands-on computational assignments, and project reviews. You study according to a schedule but can always return to materials. Lesson recordings are stored for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. Computational engineering requires practice, so expect to spend additional time working on projects and simulations.' },
      ],
      Profession: [
        { q: 'Will this help me in my current engineering job?', a: 'Absolutely! Computational skills make you more efficient, capable, and valuable as an engineer. You\'ll be able to run simulations, automate calculations, create CAD designs, and provide data-driven insights that traditional engineers cannot.' },
        { q: 'Can I transition to engineering from another field with this course?', a: 'Yes, if you have a strong math background (calculus, linear algebra), this course can help you transition into computational engineering roles. The skills are applicable across multiple engineering disciplines.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Engineering Computing & Digital Tools',
  },
}

export default function EngineeringComputingLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
