'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Website Scripting with Python',
    description: 'Learn Python for web automation, data extraction, APIs, scripting, and practical backend tasks that can improve and automate web workflows.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 8 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '10+ Python web tools' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 40 webinars with Python developers, up to 8 individual consultations, code reviews and feedback throughout the course',
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
        description: 'We monitor changes in Python libraries, web scraping tools, and automation frameworks. If anything changes, we update the course to reflect the latest Python web scripting tools and best practices.',
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
        description: 'You can enhance your basic skills with two additional specializations — from web scraping to API development — and take your first freelance Python scripting clients.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for code generation, debugging, script optimization, and learning new Python libraries — making you more productive and in-demand as a Python developer.',
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
    subtitle: 'Build a career in Python web development and automation',
    description: 'After completing the course, you will be able to work as a Python developer, automation engineer, web scraper, or backend developer. You can work at a tech company, agency, startup, or as a freelance Python developer. Python is the most versatile programming language with applications in web, data, automation, and AI.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Python developer writing web automation and scraping scripts',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Python developers command strong salaries due to versatility and demand',
    cardTitle: 'Python Web Developer',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '300,000', description: 'Starting position writing Python scripts, building web scrapers, and supporting automation tasks. Works under senior developers on backend and scripting projects.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '650,000', description: 'Independent Python development: web applications, API services, automation systems, and data processing pipelines for organizations.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '1,200,000', description: 'Leads Python development teams, designs backend architecture, builds scalable automation systems, and drives technical decisions for complex Python projects.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Python Web Scripting Developer',
    keySkills: [
      'Python fundamentals: syntax, data structures, and OOP',
      'Web scraping with BeautifulSoup and Scrapy',
      'HTTP requests and working with APIs',
      'Flask and FastAPI for web application development',
      'Browser automation with Selenium and Playwright',
      'Data processing with Pandas and JSON',
      'Task scheduling and automation with Celery',
      'Database integration: SQLite, PostgreSQL, and SQLAlchemy',
    ],
    softSkills: [
      'Logical and analytical thinking',
      'Problem-solving and debugging',
      'Automation mindset',
      'Continuous learning of new libraries',
    ],
    tools: [
      { name: 'Python', desc: 'Versatile programming language for web scripting, automation, data processing, and backend development', icon: '/images/course/tool_python.svg' },
      { name: 'VS Code', desc: 'Code editor with Python extensions: IntelliSense, debugging, linting, and Jupyter notebooks', icon: '/images/course/tool_vscode.svg' },
      { name: 'BeautifulSoup', desc: 'Python library for parsing HTML and XML documents, extracting data from web pages', icon: '/images/course/tool_beautifulsoup.svg' },
      { name: 'Selenium', desc: 'Browser automation tool for web testing, scraping dynamic content, and automating web interactions', icon: '/images/course/tool_selenium.svg' },
      { name: 'Flask', desc: 'Lightweight Python web framework for building web applications, APIs, and web services', icon: '/images/course/tool_flask.svg' },
      { name: 'Requests', desc: 'Python HTTP library for making API calls, downloading files, and interacting with web services', icon: '/images/course/tool_requests.svg' },
      { name: 'Pandas', desc: 'Data analysis library for processing scraped data, CSV/JSON manipulation, and data transformation', icon: '/images/course/tool_pandas.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for Python code generation, debugging, explaining libraries, and learning new patterns', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real Python projects',
        texts: [
          'From the first weeks, you will write real Python scripts: web scrapers, automation tools, API integrations, and web utilities. Every module includes hands-on Python coding with real-world scenarios.',
          'By the end of the course, you will have a portfolio of 12+ Python projects, from data scrapers to web applications and automation pipelines.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real automation tasks',
        texts: [
          'Practice on real automation and scraping tasks from partner companies and freelance platforms. You will learn to build scrapers, automate workflows, and create web tools that solve real problems.',
          'We provide access to a PRO account on freelance platforms and help you build your first client relationships in Python development.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete Python web application or automation system — from architecture to implementation to deployment — demonstrating your ability to build production-ready Python tools.',
          'You will create a GitHub portfolio with clean, documented Python code — exactly what employers expect from a professional Python developer.',
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
      { title: 'Python Fundamentals', bonus: false, description: 'Master Python basics: variables, data types, control flow, functions, lists, dictionaries, tuples, sets, file I/O, error handling, and object-oriented programming with classes and inheritance.' },
      { title: 'Web Scraping', bonus: false, description: 'Learn web scraping with Python: HTTP requests, HTML parsing with BeautifulSoup, extracting data from websites, handling pagination, and storing scraped data in CSV, JSON, and databases.' },
      { title: 'Browser Automation', bonus: false, description: 'Master browser automation with Selenium and Playwright: automating web interactions, filling forms, clicking buttons, handling dynamic content, scraping JavaScript-rendered pages, and web testing.' },
      { title: 'APIs & Web Services', bonus: false, description: 'Learn to work with APIs: consuming REST APIs with Requests, authentication, rate limiting, webhooks, and building your own API endpoints with Flask and FastAPI.' },
      { title: 'Data Processing & Storage', bonus: false, description: 'Master data processing: Pandas for data manipulation, JSON and CSV handling, database integration with SQLite and PostgreSQL using SQLAlchemy, and building data pipelines.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to build a complete Python web application or automation system. Implement scraping, API integration, and data processing. Present your project for defense to senior Python developers.' },
      { title: 'Advanced Scraping (Scrapy)', bonus: true, description: 'Master Scrapy framework: building spiders, pipelines, middleware, handling large-scale scraping, rotating proxies, and building production web scraping systems.' },
      { title: 'Flask Web Apps', bonus: true, description: 'Learn to build web applications with Flask: routing, templates, forms, database integration, authentication, and deploying Flask applications to production.' },
      { title: 'How to start freelancing', bonus: true, description: 'Step-by-step guide to launching your freelance Python career: finding clients, pricing projects, managing deadlines, and delivering professional Python solutions.' },
      { title: 'AI for Python developers', bonus: true, description: 'Practical AI for Python: ChatGPT for code generation, AI for debugging, automated testing, and using AI to learn new Python libraries and frameworks faster.' },
    ],
    specializations: [
      { title: 'Web Scraping & Data', isNew: false, description: 'Specialize in web scraping: large-scale data extraction, Scrapy spiders, anti-bot bypassing, data cleaning, and building data pipelines for business intelligence.' },
      { title: 'API Development', isNew: false, description: 'Master API development with Python: FastAPI, Flask, authentication, documentation with Swagger, and building production REST APIs and microservices.' },
      { title: 'Web Automation', isNew: false, description: 'Specialize in web automation: Selenium, Playwright, task scheduling with Celery, workflow automation, and building systems that automate repetitive web tasks.' },
      { title: 'Backend Development', isNew: true, description: 'Master Python backend: Django framework, databases, authentication, deployment, and building complete backend systems for web and mobile applications.' },
      { title: 'Data Engineering', isNew: false, description: 'Learn data engineering with Python: ETL pipelines, data processing with Pandas and Airflow, database management, and building data infrastructure.' },
      { title: 'DevOps Scripting', isNew: true, description: 'Specialize in DevOps with Python: infrastructure automation, deployment scripts, monitoring, Docker, and using Python for DevOps and cloud automation.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Python Scripts: The Basics',
        description: 'A basic course to get started with Python web scripting',
        oldPrice: '180,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '7,500',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '108,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '4 months',
          'Python Web Scripting Basics',
          '8 instruments',
          '1 final project – Python web tool, 10 portfolio scripts',
          'Python Fundamentals and Scraping Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Python Web Developer',
        description: 'All the base and focus on specialization in one direction',
        oldPrice: '300,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '8,300',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '180,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '6 months',
          'Python Web Scripting + Selectable Specialization',
          'Additional classes on Scrapy, Flask, and freelancing basics',
          '10 instruments',
          '2 final projects, GitHub portfolio, 20 scripts',
          'Help with finding Python developer jobs',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Python Web Developer: Advanced',
        description: 'Full base and 2 specializations for comprehensive Python expertise',
        oldPrice: '380,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '10,600',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '228,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '8 months',
          'Python Web Scripting + 2 Specializations to Choose From',
          'Additional classes on Scrapy, Flask, AI tools, and DevOps scripting',
          '10+ instruments',
          '4 final projects, full portfolio, 30 scripts',
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
        { q: 'Do I need programming experience to start?', a: 'No, the course is designed for beginners. We start with Python fundamentals and build up to web scraping and automation. You just need basic computer skills and a willingness to learn. No prior programming experience is required.' },
        { q: 'Do I need a powerful computer?', a: 'No, Python development runs on any modern computer. You just need a computer that can run VS Code and Python. No special hardware is required for the course.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with Python developers, hands-on coding assignments, and code reviews. You study according to a schedule but can always return to materials. Lesson recordings are stored for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. Python development requires practice, so expect to spend additional time writing scripts and building projects for your portfolio.' },
      ],
      Profession: [
        { q: 'Will I be able to find a job after completing the course?', a: 'Yes, we provide career support including resume preparation, GitHub portfolio optimization, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months. Python is one of the most in-demand programming languages globally.' },
        { q: 'Can I work remotely as a Python developer?', a: 'Absolutely! Python development is highly remote-friendly. Many companies hire remote Python developers, and freelance platforms have abundant Python projects for scraping, automation, and web development.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Website Scripting with Python',
  },
}

export default function PythonScriptsLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
