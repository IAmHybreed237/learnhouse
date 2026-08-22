'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'UI/UX Design',
    description: 'Learn to design intuitive digital experiences through user research, information architecture, wireframing, prototyping, and modern interface design.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 10 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '10+ design and research tools' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 40 webinars with senior designers, up to 8 individual consultations, portfolio reviews and design feedback throughout the course',
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
        description: 'We monitor changes in design tools, UX methodologies, and industry trends. If anything changes, we update the course to reflect the latest UI/UX best practices and tools.',
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
        description: 'You can enhance your basic skills with two additional specializations — from product design to UX research — and take your first freelance design clients.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for design ideation, user research analysis, content generation, and design variations — making you more creative and efficient as a UI/UX designer.',
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
    subtitle: 'Build a career in UI/UX and product design',
    description: 'After completing the course, you will be able to work as a UI/UX designer, product designer, UX researcher, or interaction designer. You can work at a design agency, tech company, startup, or as a freelance designer. UI/UX design is one of the most in-demand design professions as every digital product needs great user experience.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'UI/UX designer creating wireframes and prototypes in Figma',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'UI/UX designer salaries grow with portfolio quality, experience, and product impact',
    cardTitle: 'UI/UX Designer',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '250,000', description: 'Starting position creating wireframes, UI screens, and supporting senior designers on product design tasks. Works on components and screens.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '550,000', description: 'Independent design of features and products, conducting user research, creating prototypes, and contributing to product strategy and design systems.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '1,000,000', description: 'Leads design for products or teams, defines design strategy, manages design systems, and drives product vision through exceptional user experience.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'UI/UX Designer',
    keySkills: [
      'User research: interviews, surveys, and usability testing',
      'Wireframing and information architecture',
      'UI design: layouts, typography, color, and visual hierarchy',
      'Prototyping: interactive prototypes and user flows',
      'Design systems and component libraries',
      'Figma: professional design and prototyping',
      'Responsive design for web and mobile',
      'Design handoff and developer collaboration',
    ],
    softSkills: [
      'Empathy and user-centered thinking',
      'Creative problem solving',
      'Communication and presentation',
      'Iterative design and feedback handling',
    ],
    tools: [
      { name: 'Figma', desc: 'Industry-standard design and prototyping tool for UI/UX design, collaboration, and design systems', icon: '/images/course/tool_figma.svg' },
      { name: 'FigJam', desc: 'Collaborative whiteboard for brainstorming, user journey mapping, and design workshops', icon: '/images/course/tool_figjam.svg' },
      { name: 'Maze', desc: 'User testing platform for validating prototypes, collecting feedback, and measuring usability', icon: '/images/course/tool_maze.svg' },
      { name: 'Notion', desc: 'Documentation workspace for design briefs, research notes, and design system documentation', icon: '/images/course/tool_notion.svg' },
      { name: 'Adobe XD', desc: 'UI/UX design tool for wireframes, prototypes, and interactive design experiences', icon: '/images/course/tool_adobexd.svg' },
      { name: 'Miro', desc: 'Collaborative whiteboard for user flows, journey maps, affinity diagrams, and design thinking', icon: '/images/course/tool_miro.svg' },
      { name: 'Hotjar', desc: 'User behavior analytics: heatmaps, session recordings, and user feedback for UX research', icon: '/images/course/tool_hotjar.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for user research synthesis, content design, design briefs, and ideation', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real design projects',
        texts: [
          'From the first weeks, you will design real digital products: mobile apps, websites, dashboards, and web applications. Every module includes hands-on design work in Figma.',
          'By the end of the course, you will have a portfolio of 12+ design projects, from wireframes to full interactive prototypes with design systems.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real client work',
        texts: [
          'Practice on real design projects from partner companies and freelance platforms. You will learn to work with product briefs, conduct user research, and deliver professional UI/UX designs.',
          'We provide access to a PRO account on freelance platforms and help you build your first client relationships in UI/UX design.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete product design case study — from user research to wireframes to high-fidelity prototype — demonstrating your full UI/UX design process.',
          'You will build a professional case study portfolio showing your design thinking, process, and outcomes — exactly what employers expect from a professional UI/UX designer.',
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
      { title: 'UX Fundamentals', bonus: false, description: 'Introduction to UX design: user-centered design principles, the design thinking process, user needs, and how UX impacts product success. Learn the methodology behind great user experiences.' },
      { title: 'User Research', bonus: false, description: 'Master user research methods: user interviews, surveys, personas, user journey maps, usability testing, and synthesizing research into actionable design insights.' },
      { title: 'Wireframing & IA', bonus: false, description: 'Learn information architecture and wireframing: site maps, user flows, low-fidelity wireframes, content organization, and structuring digital products for optimal user navigation.' },
      { title: 'UI Design in Figma', bonus: false, description: 'Master UI design in Figma: layouts, typography, color theory, visual hierarchy, components, auto layout, and creating beautiful, consistent interface designs for web and mobile.' },
      { title: 'Prototyping & Testing', bonus: false, description: 'Learn interactive prototyping in Figma: creating clickable prototypes, transitions, micro-interactions, and conducting usability tests to validate designs with real users.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to design a complete digital product from research to prototype. Create a full case study and present your design process for defense to senior designers.' },
      { title: 'Design Systems', bonus: true, description: 'Master design systems: component libraries, design tokens, documentation, and building scalable, consistent design systems that teams use across products.' },
      { title: 'Mobile Design', bonus: true, description: 'Learn mobile app design: iOS and Android guidelines, mobile patterns, touch interactions, responsive components, and designing native mobile experiences.' },
      { title: 'How to start freelancing', bonus: true, description: 'Step-by-step guide to launching your freelance UI/UX career: finding clients, pricing design work, managing projects, and delivering professional design services.' },
      { title: 'AI for designers', bonus: true, description: 'Practical AI for UI/UX: ChatGPT for research synthesis, AI for design variations, automated content for wireframes, and using AI to accelerate design workflows.' },
    ],
    specializations: [
      { title: 'Product Design', isNew: false, description: 'Specialize in product design: end-to-end product thinking, feature design, design strategy, and owning the design of complete digital products.' },
      { title: 'UX Research', isNew: false, description: 'Master UX research: advanced research methods, quantitative UX research, research operations, and building research-driven product cultures.' },
      { title: 'Mobile Design', isNew: false, description: 'Specialize in mobile design: native iOS/Android patterns, mobile-first design, app store design, and creating exceptional mobile user experiences.' },
      { title: 'Design Systems', isNew: true, description: 'Master design system design: building and maintaining design systems, governance, adoption strategies, and scaling design across organizations.' },
      { title: 'Web App Design', isNew: false, description: 'Specialize in web application design: dashboards, SaaS interfaces, data visualization, and designing complex web applications with great UX.' },
      { title: 'Interaction Design', isNew: true, description: 'Master interaction design: micro-interactions, motion design, gesture design, and creating delightful, responsive interaction patterns for digital products.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'UI/UX: The Basics',
        description: 'A basic course to get started with UI/UX design',
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
          'UI/UX Basics',
          '6 instruments',
          '1 final project – product design case study, 10 portfolio pieces',
          'UX Research and Figma Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'UI/UX Designer',
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
          'UI/UX Fundamentals + Selectable Specialization',
          'Additional classes on design systems, mobile design, and freelancing basics',
          '10 instruments',
          '2 final projects, design portfolio, 20 pieces',
          'Help with finding design jobs',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'UI/UX Designer: Advanced',
        description: 'Full base and 2 specializations for comprehensive design expertise',
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
          'UI/UX Fundamentals + 2 Specializations to Choose From',
          'Additional classes on design systems, mobile, AI tools, and interaction design',
          '10+ instruments',
          '4 final projects, full case study portfolio, 30 pieces',
          'Internship opportunities with design agencies',
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
        { q: 'Do I need design experience to start?', a: 'No, the course is designed for beginners. We start with UX fundamentals and gradually move to advanced UI design. You just need basic computer skills and an interest in creating great user experiences. No prior design experience is required.' },
        { q: 'Do I need to know how to draw?', a: 'No! UI/UX design is about problem-solving and digital interfaces, not illustration. You\'ll use Figma to create designs using shapes, components, and layout principles. Drawing skills are not required for UI/UX design.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with senior designers, hands-on design assignments in Figma, and portfolio reviews. You study according to a schedule but can always return to materials. Lesson recordings are stored for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. Design requires practice, so expect to spend additional time working on projects and building your portfolio.' },
      ],
      Profession: [
        { q: 'Will I be able to find a job after completing the course?', a: 'Yes, we provide career support including portfolio preparation, case study coaching, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months. UI/UX design is one of the most in-demand design professions.' },
        { q: 'Can I work remotely as a UI/UX designer?', a: 'Absolutely! UI/UX design is highly remote-friendly. Figma is cloud-based, enabling seamless remote collaboration. Many companies hire remote designers, and freelance platforms have abundant UI/UX projects.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'UI/UX Design',
  },
}

export default function UIUXDesignLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
