'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Modern Web Development',
    description: 'Learn to build responsive modern websites using HTML, CSS, JavaScript, and professional development practices from development to deployment.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 10 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '12+ web development tools' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 40 webinars with senior web developers, up to 8 individual consultations, code reviews and feedback throughout the course',
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
        description: 'We monitor changes in web standards, frameworks, and development tools. If anything changes, we update the course to reflect the latest web development best practices.',
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
        description: 'You can enhance your basic skills with two additional specializations — from frontend frameworks to backend development — and take your first freelance web development clients.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for code generation, debugging, design-to-code, and learning new concepts — making you more productive and in-demand as a web developer.',
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
    subtitle: 'Build a career in modern web development',
    description: 'After completing the course, you will be able to work as a web developer, frontend developer, full-stack developer, or freelance web designer. You can work at a tech company, agency, startup, or build websites for clients independently. Web development skills are among the most in-demand in the tech industry.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Web developer building modern responsive websites',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Web developer salaries grow rapidly with experience and framework expertise',
    cardTitle: 'Web Developer',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '280,000', description: 'Starting position building web pages, implementing designs, and working on frontend features. Works under senior developers on coding and debugging.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '600,000', description: 'Independent development of websites and web applications, API integration, performance optimization, and contributing to architecture decisions.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '1,100,000', description: 'Leads development teams, designs web architecture, mentors juniors, and drives technical decisions for complex web applications and platforms.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Modern Web Developer',
    keySkills: [
      'HTML5: semantic markup, forms, accessibility, and SEO basics',
      'CSS3: flexbox, grid, animations, responsive design, and Tailwind CSS',
      'JavaScript: DOM manipulation, events, and interactivity',
      'Responsive design: mobile-first, breakpoints, and cross-device testing',
      'Version control with Git and GitHub',
      'Web performance: optimization, lazy loading, and Core Web Vitals',
      'Deployment: hosting, domains, CI/CD, and going live',
      'Web accessibility and cross-browser compatibility',
    ],
    softSkills: [
      'Problem-solving and debugging',
      'Attention to detail and pixel precision',
      'Continuous learning of new technologies',
      'Client communication and project delivery',
    ],
    tools: [
      { name: 'VS Code', desc: 'Industry-standard code editor with extensions for web development, Emmet, and IntelliSense', icon: '/images/course/tool_vscode.svg' },
      { name: 'Git', desc: 'Version control system for tracking changes, branching, and collaborative web development', icon: '/images/course/tool_git.svg' },
      { name: 'Tailwind CSS', desc: 'Utility-first CSS framework for rapidly building custom, responsive designs without writing CSS', icon: '/images/course/tool_tailwind.svg' },
      { name: 'Vite', desc: 'Modern build tool and dev server for fast development and optimized production builds', icon: '/images/course/tool_vite.svg' },
      { name: 'Figma', desc: 'Design tool for inspecting designs, extracting assets, and translating visual designs into code', icon: '/images/course/tool_figma.svg' },
      { name: 'Chrome DevTools', desc: 'Browser developer tools for debugging, inspecting elements, profiling, and testing responsiveness', icon: '/images/course/tool_chrome.svg' },
      { name: 'Netlify', desc: 'Deployment platform for hosting websites, continuous deployment, and form handling', icon: '/images/course/tool_netlify.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for code generation, debugging, explaining concepts, and accelerating development', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real website projects',
        texts: [
          'From the first weeks, you will build real websites: landing pages, portfolios, business sites, and web applications. Every module includes hands-on coding with real projects.',
          'By the end of the course, you will have a portfolio of 12+ live websites, from responsive landing pages to full web applications deployed online.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real client work',
        texts: [
          'Practice on real web development projects from partner companies and freelance platforms. You will learn to work with client requirements, translate designs into code, and deliver professional websites.',
          'We provide access to a PRO account on freelance platforms and help you build your first client relationships in web development.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete, deployed website — from design to code to deployment — demonstrating your ability to build production-ready websites.',
          'You will create a GitHub portfolio and live website links — exactly what employers expect from a professional web developer.',
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
      { title: 'HTML & CSS Fundamentals', bonus: false, description: 'Master HTML5 semantic markup and CSS3 styling: elements, attributes, forms, links, images, selectors, box model, flexbox, grid, and creating responsive web page layouts from scratch.' },
      { title: 'Responsive Design', bonus: false, description: 'Learn responsive web design: mobile-first approach, media queries, breakpoints, fluid typography, responsive images, and testing across devices. Master Tailwind CSS for rapid responsive development.' },
      { title: 'JavaScript for Web', bonus: false, description: 'Learn JavaScript for web development: DOM manipulation, event handling, forms, animations, fetch API, and adding interactivity to websites. Build dynamic user experiences.' },
      { title: 'Modern Build Tools', bonus: false, description: 'Master the modern web development workflow: npm for packages, Vite for building and bundling, Git for version control, and deploying websites to Netlify or Vercel.' },
      { title: 'Web Performance & SEO', bonus: false, description: 'Learn web performance optimization: image optimization, code splitting, lazy loading, Core Web Vitals, and SEO fundamentals including meta tags, structured data, and semantic HTML.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to build a complete, responsive, deployed website. Implement modern design, interactivity, and performance best practices. Present your website for defense to senior developers.' },
      { title: 'CSS Animations & Transitions', bonus: true, description: 'Master CSS animations: transitions, keyframes, transforms, scroll animations, micro-interactions, and creating smooth, engaging user experiences with pure CSS.' },
      { title: 'Introduction to React', bonus: true, description: 'Get started with React: components, JSX, props, state, hooks, and building interactive single-page applications with the most popular frontend framework.' },
      { title: 'How to start freelancing', bonus: true, description: 'Step-by-step guide to launching your freelance web development career: finding clients, pricing projects, managing deadlines, and delivering professional websites.' },
      { title: 'AI for web developers', bonus: true, description: 'Practical AI for web dev: ChatGPT for code generation, AI design-to-code tools, automated testing, and using AI to learn new frameworks and solve problems faster.' },
    ],
    specializations: [
      { title: 'Frontend Development', isNew: false, description: 'Specialize in frontend: advanced React, state management, component libraries, testing, and building complex interactive web applications.' },
      { title: 'Backend Development', isNew: false, description: 'Master backend web development: Node.js, Express, databases, REST APIs, authentication, and building server-side applications.' },
      { title: 'Full-Stack Development', isNew: false, description: 'Become a full-stack developer: frontend + backend, building complete web applications from database to UI with modern frameworks.' },
      { title: 'Web Design & UX', isNew: true, description: 'Combine development with design: Figma, UI/UX principles, design systems, prototyping, and building beautiful websites that convert visitors.' },
      { title: 'E-commerce Development', isNew: false, description: 'Specialize in e-commerce: Shopify, WooCommerce, custom e-commerce sites, payment integration, and building online stores.' },
      { title: 'Web Performance', isNew: true, description: 'Master web performance engineering: advanced optimization, Core Web Vitals, Lighthouse auditing, CDN configuration, and making websites blazing fast.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Web Dev: The Basics',
        description: 'A basic course to get started with modern web development',
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
          'Web Development Basics',
          '8 instruments',
          '1 final project – responsive website, 10 portfolio pieces',
          'HTML, CSS, and JavaScript Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Web Developer',
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
          'Web Development Fundamentals + Selectable Specialization',
          'Additional classes on animations, React intro, and freelancing basics',
          '12 instruments',
          '2 final projects, live deployed websites, 20 exercises',
          'Help with finding developer jobs',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Web Developer: Advanced',
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
          'Web Development Fundamentals + 2 Specializations to Choose From',
          'Additional classes on animations, React, AI tools, and web performance',
          '12+ instruments',
          '4 final projects, full portfolio, 30 exercises',
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
        { q: 'Do I need programming experience to start?', a: 'No, the course is designed for complete beginners. We start with HTML and CSS basics and gradually build up to JavaScript and modern frameworks. You just need basic computer skills and a willingness to learn.' },
        { q: 'Do I need a powerful computer?', a: 'No, web development runs on any modern computer. You just need a computer that can run VS Code and a web browser. No special hardware is required.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with senior developers, hands-on coding assignments, and code reviews. You study according to a schedule but can always return to materials. Lesson recordings are stored for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. Web development requires practice, so expect to spend additional time building websites and projects for your portfolio.' },
      ],
      Profession: [
        { q: 'Will I be able to find a job after completing the course?', a: 'Yes, we provide career support including resume preparation, portfolio optimization, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months. Web development is one of the most in-demand tech skills globally.' },
        { q: 'Can I work remotely as a web developer?', a: 'Absolutely! Web development is one of the most remote-friendly professions. Many companies hire remote developers, and freelance platforms have abundant web development projects. The course covers freelancing and remote work strategies.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Modern Web Development',
  },
}

export default function ModernWebDevLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
