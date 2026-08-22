'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'React Development',
    description: 'Build modern interactive web applications with React, learning components, hooks, state management, APIs, and practical application development.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 8 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '10+ React ecosystem tools' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 40 webinars with senior React developers, up to 8 individual consultations, code reviews and feedback throughout the course',
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
        description: 'We monitor changes in React, its ecosystem, and industry best practices. If anything changes, we update the course to reflect the latest React features and patterns.',
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
        description: 'You can enhance your basic skills with two additional specializations — from Next.js to React Native — and take your first freelance React development clients.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for component generation, debugging, testing, and learning React patterns — making you more productive and in-demand as a React developer.',
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
    subtitle: 'Build a career in React.js development',
    description: 'After completing the course, you will be able to work as a React developer, frontend developer, SPA developer, or full-stack developer with React. You can work at a tech company, startup, agency, or as a freelance developer. React is the most popular frontend framework with massive global demand.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'React developer building interactive web applications',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'React developers command premium salaries due to high demand and specialized skills',
    cardTitle: 'React Developer',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '350,000', description: 'Starting position building React components, implementing features, and working on frontend development. Works under senior developers on architecture.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '700,000', description: 'Independent development of React applications, state management, performance optimization, and contributing to architecture and design decisions.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '1,300,000', description: 'Leads React development teams, designs application architecture, mentors developers, and drives technical decisions for complex React applications.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'React.js Developer',
    keySkills: [
      'React fundamentals: JSX, components, props, and state',
      'React Hooks: useState, useEffect, useContext, useReducer, custom hooks',
      'State management: Context API, Redux Toolkit, and Zustand',
      'React Router: navigation, routing, and nested routes',
      'API integration: fetch, axios, React Query, and data fetching patterns',
      'Form handling and validation in React',
      'Performance optimization: memo, useMemo, useCallback, and code splitting',
      'Testing React: Jest, React Testing Library, and component testing',
    ],
    softSkills: [
      'Component-based thinking',
      'Problem-solving and debugging',
      'Code quality and reusability',
      'Continuous learning of React ecosystem',
    ],
    tools: [
      { name: 'React', desc: 'The library for building modern user interfaces with components, hooks, and declarative rendering', icon: '/images/course/tool_react.svg' },
      { name: 'VS Code', desc: 'Code editor with React extensions: ESLint, Prettier, and React snippets for efficient development', icon: '/images/course/tool_vscode.svg' },
      { name: 'Vite', desc: 'Modern build tool for React development with fast HMR, optimized builds, and zero-config setup', icon: '/images/course/tool_vite.svg' },
      { name: 'Redux Toolkit', desc: 'State management library for complex React applications with predictable state containers', icon: '/images/course/tool_redux.svg' },
      { name: 'React Router', desc: 'Navigation library for React: routing, nested routes, URL parameters, and navigation guards', icon: '/images/course/tool_reactrouter.svg' },
      { name: 'Tailwind CSS', desc: 'Utility-first CSS framework for styling React components rapidly and consistently', icon: '/images/course/tool_tailwind.svg' },
      { name: 'Jest', desc: 'Testing framework for React: unit tests, component tests, and snapshot testing with React Testing Library', icon: '/images/course/tool_jest.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for component generation, debugging, explaining patterns, and learning React concepts', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real React projects',
        texts: [
          'From the first weeks, you will build real React applications: interactive components, single-page apps, dashboards, and full web applications. Every module includes hands-on React development.',
          'By the end of the course, you will have a portfolio of 12+ React projects, from reusable component libraries to full SPAs with routing and state management.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real client work',
        texts: [
          'Practice on real React development tasks from partner companies and freelance platforms. You will learn to work with client requirements, build features, and deliver professional React applications.',
          'We provide access to a PRO account on freelance platforms and help you build your first client relationships in React development.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete React application — from architecture to components to state management to deployment — demonstrating your ability to build production-ready React apps.',
          'You will create a GitHub portfolio with clean, tested React code — exactly what employers expect from a professional React developer.',
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
      { title: 'React Fundamentals', bonus: false, description: 'Master React basics: JSX syntax, functional components, props, state, event handling, conditional rendering, lists and keys, and building your first React components and applications.' },
      { title: 'React Hooks', bonus: false, description: 'Master React Hooks: useState for state, useEffect for side effects, useContext for context, useReducer for complex state, useRef, useMemo, useCallback, and writing custom hooks.' },
      { title: 'State Management', bonus: false, description: 'Learn state management in React: Context API for global state, Redux Toolkit for complex applications, Zustand for lightweight state, and choosing the right state management approach.' },
      { title: 'Routing & Navigation', bonus: false, description: 'Master React Router: setting up routes, nested routing, URL parameters, query strings, navigation, route guards, and building multi-page SPAs with seamless navigation.' },
      { title: 'API Integration & Forms', bonus: false, description: 'Learn to connect React to APIs: fetch and axios for data fetching, React Query for server state, loading and error states, form handling, validation, and building data-driven applications.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to build a complete React application with routing, state management, API integration, and testing. Present your application for defense to senior React developers.' },
      { title: 'Next.js Fundamentals', bonus: true, description: 'Introduction to Next.js: server-side rendering, static generation, API routes, file-based routing, and building production React applications with the Next.js framework.' },
      { title: 'React Performance', bonus: true, description: 'Master React performance: React.memo, useMemo, useCallback, code splitting, lazy loading, bundle analysis, and optimizing React applications for speed and efficiency.' },
      { title: 'How to start freelancing', bonus: true, description: 'Step-by-step guide to launching your freelance React career: finding clients, pricing projects, managing deadlines, and delivering professional React applications.' },
      { title: 'AI for React developers', bonus: true, description: 'Practical AI for React: ChatGPT for component generation, AI-powered debugging, automated testing, and using AI to learn new React patterns and ecosystem tools faster.' },
    ],
    specializations: [
      { title: 'Next.js Development', isNew: false, description: 'Master Next.js: SSR, SSG, ISR, API routes, middleware, and building production-grade React applications with the leading React framework.' },
      { title: 'React Native', isNew: false, description: 'Learn React Native: build mobile apps with React, iOS and Android development, native modules, and creating cross-platform mobile applications.' },
      { title: 'Full-Stack React', isNew: false, description: 'Become a full-stack React developer: React frontend + Node.js/Next.js API backend, databases, authentication, and building complete applications.' },
      { title: 'React Design Systems', isNew: true, description: 'Master design systems in React: component libraries, Storybook, design tokens, documentation, and building reusable design systems for organizations.' },
      { title: 'React Testing', isNew: false, description: 'Specialize in React testing: unit tests, integration tests, E2E with Cypress, testing hooks, mocking, and building comprehensive test suites for React apps.' },
      { title: 'React State Architecture', isNew: true, description: 'Master advanced state architecture: Redux Saga, Redux Toolkit Query, state machines, XState, and designing scalable state management for large React applications.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'React: The Basics',
        description: 'A basic course to get started with React development',
        oldPrice: '200,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '8,300',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '120,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '4 months',
          'React Basics',
          '8 instruments',
          '1 final project – React SPA, 10 portfolio components',
          'Fundamentals and Hooks Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'React Developer',
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
          '6 months',
          'React Fundamentals + Selectable Specialization',
          'Additional classes on Next.js, performance, and freelancing basics',
          '10 instruments',
          '2 final projects, GitHub portfolio, 20 components',
          'Help with finding React developer jobs',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'React Developer: Advanced',
        description: 'Full base and 2 specializations for comprehensive React expertise',
        oldPrice: '400,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '11,100',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '240,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '8 months',
          'React Fundamentals + 2 Specializations to Choose From',
          'Additional classes on Next.js, performance, AI tools, and design systems',
          '10+ instruments',
          '4 final projects, full portfolio, 30 components',
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
        { q: 'Do I need JavaScript experience to learn React?', a: 'Yes, you should have basic JavaScript knowledge (variables, functions, arrays, objects, ES6 features). If you\'re new to JavaScript, we recommend taking our JavaScript course first. The React course focuses on React concepts, not JavaScript fundamentals.' },
        { q: 'Do I need a powerful computer?', a: 'No, React development runs on any modern computer. You just need a computer that can run VS Code, Node.js, and a web browser. No special hardware is required.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with senior React developers, hands-on coding assignments, and code reviews. You study according to a schedule but can always return to materials. Lesson recordings are stored for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. React development requires practice, so expect to spend additional time building components and applications for your portfolio.' },
      ],
      Profession: [
        { q: 'Will I be able to find a job after completing the course?', a: 'Yes, we provide career support including resume preparation, GitHub portfolio optimization, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months. React is the most in-demand frontend framework globally.' },
        { q: 'Can I work remotely as a React developer?', a: 'Absolutely! React development is one of the most remote-friendly professions. Many companies hire remote React developers, and freelance platforms have abundant React projects. The course covers freelancing and remote work strategies.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'React Development',
  },
}

export default function ReactJSLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
