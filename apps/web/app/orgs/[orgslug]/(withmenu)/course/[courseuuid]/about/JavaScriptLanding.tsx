'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'JavaScript Development',
    description: 'Build strong JavaScript skills from fundamentals to advanced concepts and use the language to create interactive and dynamic web applications.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 10 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '10+ JS tools and frameworks' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 40 webinars with senior developers, up to 8 individual consultations, code reviews and feedback throughout the course',
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
        description: 'We monitor changes in JavaScript standards, frameworks, and industry best practices. If anything changes, we update the course to reflect the latest JS ecosystem developments.',
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
        description: 'You can enhance your basic skills with two additional specializations — from frontend frameworks to Node.js — and take your first freelance development clients.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for code generation, debugging, testing, and learning new concepts — making you more productive and in-demand as a JavaScript developer.',
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
    subtitle: 'Build a career in JavaScript and web development',
    description: 'After completing the course, you will be able to work as a JavaScript developer, frontend developer, full-stack developer, or web application developer. You can work at a tech company, agency, startup, or as a freelance developer. JavaScript is the most in-demand programming language in the world.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'JavaScript developer building web applications',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'JavaScript developer salaries grow rapidly with experience and framework expertise',
    cardTitle: 'JavaScript Developer',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '300,000', description: 'Starting position building web interfaces, fixing bugs, and working on frontend features. Works under senior developers on code and architecture.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '650,000', description: 'Independent development of web applications, API integration, performance optimization, and contributing to architecture decisions.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '1,200,000', description: 'Leads development teams, designs system architecture, mentors junior developers, and drives technical decisions for complex web applications.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'JavaScript Developer',
    keySkills: [
      'JavaScript fundamentals: variables, functions, objects, arrays',
      'ES6+ features: arrow functions, destructuring, modules, classes',
      'DOM manipulation and browser APIs',
      'Async programming: promises, async/await, fetch API',
      'REST API consumption and integration',
      'Modern build tools: Webpack, Vite, npm/yarn',
      'Testing: unit tests with Jest, integration testing',
      'Git version control and collaborative development',
    ],
    softSkills: [
      'Logical and analytical thinking',
      'Problem-solving and debugging',
      'Continuous learning mindset',
      'Code quality and best practices',
    ],
    tools: [
      { name: 'VS Code', desc: 'Industry-standard code editor with extensions for JavaScript development, debugging, and IntelliSense', icon: '/images/course/tool_vscode.svg' },
      { name: 'Node.js', desc: 'JavaScript runtime for server-side development, package management with npm, and build tooling', icon: '/images/course/tool_nodejs.svg' },
      { name: 'Git', desc: 'Version control system for tracking code changes, branching, merging, and collaborative development', icon: '/images/course/tool_git.svg' },
      { name: 'Webpack', desc: 'Module bundler for building optimized JavaScript applications with code splitting and assets', icon: '/images/course/tool_webpack.svg' },
      { name: 'Jest', desc: 'JavaScript testing framework for unit tests, mocking, and ensuring code reliability', icon: '/images/course/tool_jest.svg' },
      { name: 'Chrome DevTools', desc: 'Browser developer tools for debugging, profiling, and inspecting web applications', icon: '/images/course/tool_chrome.svg' },
      { name: 'npm', desc: 'Package manager for installing libraries, managing dependencies, and running build scripts', icon: '/images/course/tool_npm.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for code generation, debugging, explaining concepts, and learning new patterns', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real coding projects',
        texts: [
          'From the first weeks, you will write real JavaScript code: building interactive web pages, creating small applications, and solving programming challenges. Every module includes hands-on coding exercises.',
          'By the end of the course, you will have a portfolio of 12+ JavaScript projects, from interactive web pages to full web applications with API integration.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real orders and freelancing',
        texts: [
          'Practice on real development tasks from partner companies and freelance platforms. You will learn to work with client requirements, estimate projects, and deliver JavaScript applications.',
          'We provide access to a PRO account on freelance platforms and help you build your first client relationships in web development.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete web application built with modern JavaScript — from architecture to features to testing — demonstrating your ability to build production-ready code.',
          'You will create a GitHub portfolio with clean, documented code repositories — exactly what employers expect from a professional JavaScript developer.',
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
      { title: 'JavaScript Fundamentals', bonus: false, description: 'Master the basics: variables, data types, operators, conditionals, loops, functions, objects, and arrays. Build a solid foundation in programming logic and JavaScript syntax.' },
      { title: 'ES6+ Modern JavaScript', bonus: false, description: 'Learn modern JavaScript features: let/const, arrow functions, template literals, destructuring, spread/rest operators, modules (import/export), classes, and Map/Set data structures.' },
      { title: 'DOM & Browser APIs', bonus: false, description: 'Master DOM manipulation: selecting elements, creating and modifying content, event handling, forms, and browser APIs (localStorage, geolocation, canvas). Build interactive web pages.' },
      { title: 'Async JavaScript', bonus: false, description: 'Learn asynchronous programming: callbacks, promises, async/await, the Fetch API, handling errors, and making API calls. Master the event loop and concurrency in JavaScript.' },
      { title: 'Build Tools & Testing', bonus: false, description: 'Master the JavaScript ecosystem: npm for package management, Webpack/Vite for bundling, Git for version control, and Jest for unit testing. Learn professional development workflows.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to build a complete web application with modern JavaScript. Implement features, API integration, and testing. Present your application for defense to senior developers.' },
      { title: 'TypeScript Basics', bonus: true, description: 'Introduction to TypeScript: type annotations, interfaces, generics, and how TypeScript improves JavaScript development with static typing and better tooling.' },
      { title: 'Node.js Fundamentals', bonus: true, description: 'Learn server-side JavaScript: Node.js runtime, Express framework, REST API creation, file system operations, and connecting to databases with JavaScript.' },
      { title: 'How to start freelancing', bonus: true, description: 'Step-by-step guide to launching your freelance JavaScript career: finding clients, pricing projects, managing deadlines, and delivering professional web applications.' },
      { title: 'AI for developers', bonus: true, description: 'Practical AI for coding: ChatGPT for code generation and debugging, GitHub Copilot, AI-powered testing, and using AI to learn new frameworks and patterns faster.' },
    ],
    specializations: [
      { title: 'React Development', isNew: false, description: 'Master React: components, hooks, state management, routing, and building modern single-page applications with the most popular frontend framework.' },
      { title: 'Node.js Backend', isNew: false, description: 'Specialize in backend JavaScript: Express, REST APIs, authentication, databases (MongoDB, PostgreSQL), and building server-side applications with Node.js.' },
      { title: 'Vue.js Development', isNew: false, description: 'Learn Vue.js: components, composition API, Vuex/Pinia, routing, and building interactive web applications with the progressive JavaScript framework.' },
      { title: 'Full-Stack JavaScript', isNew: true, description: 'Master the full stack: React frontend + Node.js backend, building complete web applications from database to UI with JavaScript throughout.' },
      { title: 'JavaScript Testing', isNew: false, description: 'Specialize in testing: unit tests, integration tests, E2E testing with Cypress, test-driven development, and building reliable testing strategies for JS applications.' },
      { title: 'Web Performance', isNew: true, description: 'Master web performance optimization: code splitting, lazy loading, caching, bundle optimization, Core Web Vitals, and making JavaScript applications fast and efficient.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'JavaScript: The Basics',
        description: 'A basic course to get started with JavaScript programming',
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
          'JavaScript Basics',
          '8 instruments',
          '1 final project – interactive web app, 10 portfolio pieces',
          'Fundamentals and DOM Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'JavaScript Developer',
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
          '7 months',
          'JavaScript Fundamentals + Selectable Specialization',
          'Additional classes on TypeScript, Node.js, and freelancing basics',
          '10 instruments',
          '2 final projects, GitHub portfolio, 20 coding exercises',
          'Help with finding developer jobs',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'JavaScript Developer: Advanced',
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
          '10 months',
          'JavaScript Fundamentals + 2 Specializations to Choose From',
          'Additional classes on TypeScript, Node.js, AI tools, and web performance',
          '10+ instruments',
          '4 final projects, full GitHub portfolio, 30 exercises',
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
        { q: 'Do I need programming experience to start?', a: 'No, the course is designed for beginners. We start with JavaScript fundamentals and build up to advanced topics. You just need basic computer skills and a willingness to learn. No prior programming experience is required.' },
        { q: 'Do I need a powerful computer?', a: 'No, JavaScript development runs on any modern computer. You just need a computer that can run VS Code and a web browser. No special hardware is required for the course.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with senior developers, hands-on coding assignments, and code reviews. You study according to a schedule but can always return to materials. Lesson recordings are stored for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. Programming requires practice, so expect to spend additional time coding and building projects for your portfolio.' },
      ],
      Profession: [
        { q: 'Will I be able to find a job after completing the course?', a: 'Yes, we provide career support including resume preparation, GitHub portfolio optimization, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months. JavaScript is the most in-demand programming language globally.' },
        { q: 'Can I work remotely as a JavaScript developer?', a: 'Absolutely! JavaScript development is one of the most remote-friendly professions. Many companies hire remote JS developers, and freelance platforms have abundant JavaScript projects. The course covers freelancing and remote work strategies.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'JavaScript Development',
  },
}

export default function JavaScriptLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
