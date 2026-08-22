'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Microsoft Office Professional',
    description: 'Develop practical professional skills in Word, Excel, PowerPoint, and Outlook for documents, data, presentations, communication, and everyday workplace tasks.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical exercises' },
      { title: 'Duration', value: 'Up to 6 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '8+ Microsoft Office apps' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 30 webinars with Office experts, up to 6 individual consultations, exercise reviews and feedback throughout the course',
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
        description: 'We monitor Microsoft 365 updates, new features, and best practices. If anything changes, we update the course to reflect the latest Office 365 capabilities.',
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
        description: 'You can enhance your basic skills with two additional specializations — from Excel analytics to PowerPoint design — and position yourself for advanced office roles.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for document drafting, data analysis, presentation creation, and email management — making you more productive with Microsoft Office.',
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
    subtitle: 'Microsoft Office skills are essential for every professional role',
    description: 'After completing the course, you will be proficient in Microsoft Office at a professional level — qualifying you for administrative roles, data analyst positions, executive assistant roles, and any job that requires Office proficiency. Microsoft Office is the most widely used productivity suite in the world.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Professional working with Microsoft Office applications',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Advanced Office skills increase your value across all office roles',
    cardTitle: 'Office Professional',
    points: [
      { label: 'Entry', sublabel: '0-1 year experience', position: 0, salary: '150,000', description: 'Entry-level office roles: data entry, document creation, basic spreadsheets, and email management using Microsoft Office.' },
      { label: 'Experienced', sublabel: '2-3 years experience', position: 50, salary: '350,000', description: 'Advanced Office usage: complex Excel models, professional presentations, document templates, and automated workflows.' },
      { label: 'Advanced', sublabel: '4+ years experience', position: 100, salary: '600,000', description: 'Expert-level Office skills: Excel VBA automation, data dashboards, process documentation, and training others in Office best practices.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Microsoft Office Specialist',
    keySkills: [
      'Word: advanced formatting, styles, templates, mail merge, and long documents',
      'Excel: formulas, functions, pivot tables, charts, and data validation',
      'PowerPoint: slide design, animations, transitions, and professional presentations',
      'Outlook: email management, calendar, tasks, rules, and meeting scheduling',
      'OneNote: digital note-taking and organization',
      'Teams: collaboration, channels, meetings, and file sharing',
      'SharePoint: document libraries, collaboration sites, and permissions',
      'Office automation: macros, templates, and workflow optimization',
    ],
    softSkills: [
      'Professional document creation',
      'Data organization and analysis',
      'Presentation and communication',
      'Time management and productivity',
    ],
    tools: [
      { name: 'Microsoft Word', desc: 'Advanced word processing: styles, templates, mail merge, track changes, and professional document formatting', icon: '/images/course/tool_word.svg' },
      { name: 'Microsoft Excel', desc: 'Spreadsheet mastery: formulas, functions, pivot tables, charts, conditional formatting, and data analysis', icon: '/images/course/tool_excel.svg' },
      { name: 'Microsoft PowerPoint', desc: 'Presentation software: slide design, animations, transitions, master slides, and professional presentations', icon: '/images/course/tool_powerpoint.svg' },
      { name: 'Microsoft Outlook', desc: 'Email and calendar management: rules, categories, meeting scheduling, tasks, and email organization', icon: '/images/course/tool_outlook.svg' },
      { name: 'Microsoft Teams', desc: 'Collaboration platform: chat, channels, video meetings, file sharing, and team workspace', icon: '/images/course/tool_teams.svg' },
      { name: 'Microsoft OneNote', desc: 'Digital notebook for note-taking, organization, research, and collaborative note-sharing', icon: '/images/course/tool_onenote.svg' },
      { name: 'Microsoft SharePoint', desc: 'Document management and collaboration: libraries, permissions, version control, and team sites', icon: '/images/course/tool_sharepoint.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for document drafting, Excel formulas, presentation content, and email composition', icon: '/images/course/tool_chatgpt.svg' },
    ],
  },
  diploma: {
    title: 'Certificate of Microsoft Office proficiency',
    licenseText: 'The document is issued by Hybreed Academy, which has an educational license',
    description: 'Upon successful completion of all modules and the final assessment, you will receive a certificate of Microsoft Office proficiency. You can add this document to your resume and demonstrate your Office skills to employers.',
  },
  practice: {
    title: 'Practice from the first weeks',
    cards: [
      {
        title: 'Real Office projects',
        texts: [
          'From the first weeks, you will create real Office documents: professional reports in Word, data dashboards in Excel, business presentations in PowerPoint, and organized email workflows in Outlook.',
          'By the end of the course, you will have a portfolio of 10+ Office deliverables, from formatted reports to complex spreadsheets and professional slide decks.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real workplace scenarios',
        texts: [
          'Practice with real workplace scenarios: creating meeting agendas, tracking budgets in Excel, preparing executive presentations, and managing team communications through Outlook and Teams.',
          'You will learn to use Office the way professionals do — efficiently, consistently, and with attention to formatting and data accuracy.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final assessment demonstrates your ability to use all Office applications at a professional level — creating documents, analyzing data, and presenting information effectively.',
          'You will leave the course with sample documents, templates, and the confidence to handle any Office task in a professional environment.',
        ],
        image: '/images/course/practice_portfolio.webp',
      },
    ],
  },
  program: {
    title: 'The training program is up to 6 months',
    subtitle: 'Complete the main course, then choose an optional specialization.',
    researchNote: 'Developed based on real workplace requirements and Microsoft certification standards',
    bullets: ['Practical training program', 'Working with Office experts'],
    mainProgram: [
      { title: 'Word Professional', bonus: false, description: 'Master advanced Word: styles and themes, templates, mail merge, table of contents, cross-references, track changes, comments, and creating professional long documents and reports.' },
      { title: 'Excel Professional', bonus: false, description: 'Master Excel: formulas (VLOOKUP, INDEX/MATCH, IF, SUMIFS), pivot tables, charts, conditional formatting, data validation, named ranges, and creating professional spreadsheets and dashboards.' },
      { title: 'PowerPoint Professional', bonus: false, description: 'Learn to create professional presentations: slide masters, layouts, design themes, animations, transitions, charts, SmartArt, and delivering impactful presentations.' },
      { title: 'Outlook & Email Management', bonus: false, description: 'Master Outlook: email organization with folders and rules, calendar management, meeting scheduling, task tracking, categories, signatures, and managing high-volume email efficiently.' },
      { title: 'Teams & SharePoint', bonus: false, description: 'Learn Microsoft collaboration tools: Teams for chat and meetings, SharePoint for document libraries and team sites, and OneDrive for cloud file management and sharing.' },
      { title: 'Final Assessment', bonus: false, description: 'Complete a practical assessment demonstrating professional-level proficiency across all Microsoft Office applications: create a report, build a spreadsheet, design a presentation, and manage communications.' },
      { title: 'Excel VBA & Macros', bonus: true, description: 'Learn Excel automation: recording macros, VBA basics, automating repetitive tasks, custom functions, and building automated Excel workflows that save hours of work.' },
      { title: 'Office Templates & Automation', bonus: true, description: 'Master Office automation: creating reusable templates, document automation, linked Office documents, and building efficient document workflows across applications.' },
      { title: 'Office for business', bonus: true, description: 'Learn business-specific Office skills: financial modeling in Excel, business reports in Word, investor presentations in PowerPoint, and professional email communication in Outlook.' },
      { title: 'AI with Office', bonus: true, description: 'Use AI with Office: ChatGPT for document content and Excel formulas, Microsoft Copilot introduction, AI for presentation ideas, and automating Office tasks with AI assistance.' },
    ],
    specializations: [
      { title: 'Excel Analytics', isNew: false, description: 'Specialize in Excel for data analysis: advanced formulas, pivot tables, Power Query, Power Pivot, dashboards, and data visualization for business intelligence.' },
      { title: 'Presentation Design', isNew: false, description: 'Master PowerPoint design: visual storytelling, infographic slides, brand-consistent templates, animation design, and creating impactful business presentations.' },
      { title: 'Office Administration', isNew: false, description: 'Specialize in Office for administrative roles: document management, meeting coordination, executive support, and managing office workflows with Microsoft 365.' },
      { title: 'Excel Financial Modeling', isNew: true, description: 'Master Excel for finance: financial models, scenario analysis, budget templates, cash flow projections, and building professional financial spreadsheets.' },
      { title: 'Document Design', isNew: false, description: 'Specialize in professional document design: Word templates, branded documents, reports, proposals, and creating polished business documents with consistent formatting.' },
      { title: 'Microsoft 365 Admin', isNew: true, description: 'Learn Microsoft 365 administration: user management, SharePoint setup, Teams policies, security settings, and managing Office 365 for organizations.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Office Mastery: Basics',
        description: 'A foundational course covering core Office applications',
        oldPrice: '100,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '4,200',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '60,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '3 months',
          'Office Basics: Word, Excel, PowerPoint',
          '5 instruments',
          '1 final assessment – practical Office skills demo',
          'Word and Excel Classes',
          'Workshops, recorded video lectures, practice with feedback',
          'Certificate of Office proficiency',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Office Professional',
        description: 'Full course with all applications and one specialization',
        oldPrice: '180,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '5,000',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '108,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '4 months',
          'Complete Office Suite + Selectable Specialization',
          'Additional classes on VBA, templates, and Office for business',
          '8 instruments',
          '2 final assessments, 15 practical exercises',
          'Job readiness support',
          'Certificate of Office proficiency',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Office Professional: Advanced',
        description: 'Full course with 2 specializations for comprehensive Office expertise',
        oldPrice: '240,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '6,700',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '144,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '6 months',
          'Complete Office Suite + 2 Specializations to Choose From',
          'Additional classes on VBA, templates, AI tools, and M365 admin',
          '8+ instruments',
          '3 final assessments, 25 practical exercises',
          'Career advancement support',
          'Certificate of Office proficiency',
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
        { q: 'How to arrange an installment plan, what are the terms and conditions for an installment plan?', a: 'You can pay for the course in installments for up to 24 months without overpayments. To arrange an installment plan, select the appropriate option at checkout. You will need to fill out a short form and wait for approval. The installment plan is available without a guarantor and without a bank visit.' },
        { q: 'What is payment by installments?', a: 'Payment by installments means you divide the total cost of the course into equal monthly payments over a period of up to 24 months. There are no additional fees or interest — you pay exactly the same amount as with a one-time payment, just spread out over time.' },
        { q: 'How do I get a refund if I don\'t like the course?', a: 'You can request a full refund within 14 days of the start of training, no questions asked. After this period, a proportional refund is possible for the unused portion of the course. To request a refund, contact our support team.' },
        { q: 'How to pay for tuition from abroad?', a: 'We accept international payments via bank card (Visa, Mastercard) and international wire transfer. You can also use PayPal or other international payment systems. Contact our support team for detailed instructions on international payments.' },
        { q: 'What is a tax deduction for education and how to get it?', a: 'A tax deduction allows you to return part of the money spent on education. You can get back up to 13% of the course cost if you have an official employment contract and pay personal income tax. To receive the deduction, you need to collect the necessary documents (license, payment receipt, contract) and submit them to the tax authority.' },
      ],
      Education: [
        { q: 'I already know basic Office. Is this course for me?', a: 'Yes! The course covers basic to advanced levels. If you already know basics, you\'ll quickly move to advanced features like Excel pivot tables, Word mail merge, PowerPoint master slides, and Outlook rules — skills that most users never learn.' },
        { q: 'Do I need Microsoft Office installed?', a: 'Yes, you need Microsoft Office (or Microsoft 365 subscription) installed on your computer. If you don\'t have it, we can guide you to affordable options. Some modules also use free alternatives like Google Workspace for comparison.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with Office experts, hands-on exercises with real documents, and practical assessments. You study at your own pace with full support. All materials are available in your personal account.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 8 hours per week. Office skills require practice, so expect to spend time creating documents, spreadsheets, and presentations for your portfolio.' },
      ],
      Profession: [
        { q: 'Will this help me get a job?', a: 'Absolutely! Microsoft Office proficiency is listed as a requirement in over 80% of job postings for office roles. This course gives you professional-level skills and a certificate to prove it, making you competitive for administrative, analytical, and support roles.' },
        { q: 'Is this course useful if I already have a job?', a: 'Yes! Most professionals use only 20% of Office features. This course will make you dramatically more productive — automating tasks in Excel, creating professional documents faster in Word, and delivering impactful presentations in PowerPoint.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion of all modules and the final assessment, you will receive a certificate of Microsoft Office proficiency. You can add this document to your resume and LinkedIn profile.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Microsoft Office Professional',
  },
}

export default function MicrosoftOfficeLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
