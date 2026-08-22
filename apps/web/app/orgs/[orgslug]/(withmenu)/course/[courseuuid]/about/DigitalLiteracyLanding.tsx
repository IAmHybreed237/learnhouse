'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Digital Literacy Redefined',
    description: 'Build the essential computer, internet, digital communication, file management, and online safety skills needed to confidently navigate today\'s digital world.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical exercises' },
      { title: 'Duration', value: 'Up to 6 months' },
      { title: 'Level', value: 'From complete beginner' },
      { title: 'Tools', value: '10+ essential digital tools' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 30 webinars with instructors, up to 6 individual consultations, exercise review and feedback throughout the course',
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
        description: 'We monitor changes in digital tools, online platforms, and cybersecurity threats. If anything changes, we update the course to reflect the latest digital landscape.',
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
        description: 'You can enhance your basic skills with two additional specializations — from office productivity to digital communication — and start using your skills professionally.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI assistants for everyday tasks — writing emails, searching information, creating documents, and learning new digital skills faster.',
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
    subtitle: 'Build confidence with digital tools for any career',
    description: 'After completing the course, you will be able to use computers and the internet confidently for work, education, and personal tasks. You will be ready for office jobs, further education, or any role that requires digital skills. Digital literacy is the foundation for every modern profession.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Person using a computer confidently with digital tools',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Digital literacy opens doors to entry-level positions across all industries',
    cardTitle: 'Digital Office Worker',
    points: [
      { label: 'Entry', sublabel: 'First job', position: 0, salary: '120,000', description: 'Entry-level positions requiring basic computer skills: data entry, customer support, reception, or administrative assistant roles.' },
      { label: 'Experienced', sublabel: '1-2 years experience', position: 50, salary: '250,000', description: 'Confident use of digital tools for office work, communication, and basic productivity tasks. Ready for more specialized roles.' },
      { label: 'Advanced', sublabel: '3+ years experience', position: 100, salary: '400,000', description: 'Advanced digital skills enabling specialized roles in administration, customer service, or as a stepping stone to further technical education.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Digitally Literate Professional',
    keySkills: [
      'Computer fundamentals and operating system navigation',
      'Internet browsing, search, and online safety',
      'Email communication and digital etiquette',
      'Word processing and document creation',
      'Spreadsheets and basic data management',
      'Creating presentations and slide decks',
      'Online forms, cloud storage, and file sharing',
      'Social media basics and digital identity',
    ],
    softSkills: [
      'Digital confidence and self-reliance',
      'Online communication etiquette',
      'Critical thinking for online information',
      'Adaptability to new technology',
    ],
    tools: [
      { name: 'Windows', desc: 'Computer operating system: file management, settings, applications, and basic troubleshooting', icon: '/images/course/tool_windows.svg' },
      { name: 'Google Chrome', desc: 'Web browser for internet navigation, bookmarks, extensions, and online security', icon: '/images/course/tool_chrome.svg' },
      { name: 'Gmail', desc: 'Email platform for composing, sending, organizing, and managing email communications', icon: '/images/course/tool_gmail.svg' },
      { name: 'Microsoft Word', desc: 'Word processing application for creating documents, letters, and reports', icon: '/images/course/tool_word.svg' },
      { name: 'Microsoft Excel', desc: 'Spreadsheet application for data entry, basic formulas, and simple charts', icon: '/images/course/tool_excel.svg' },
      { name: 'Google Drive', desc: 'Cloud storage for saving files, sharing documents, and collaborating online', icon: '/images/course/tool_googledrive.svg' },
      { name: 'WhatsApp', desc: 'Messaging platform for personal and professional digital communication', icon: '/images/course/tool_whatsapp.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for writing help, answering questions, and learning new digital skills', icon: '/images/course/tool_chatgpt.svg' },
    ],
  },
  diploma: {
    title: 'Certificate of digital literacy',
    licenseText: 'The document is issued by Hybreed Academy, which has an educational license',
    description: 'Upon successful completion of all modules and the final assessment, you will receive a certificate of digital literacy. You can add this document to your resume and demonstrate your digital competence to employers.',
  },
  practice: {
    title: 'Practice from the first weeks',
    cards: [
      {
        title: 'Hands-on digital exercises',
        texts: [
          'From the very first lesson, you will practice with real digital tools: creating documents, sending emails, browsing the internet, and managing files. Every concept is reinforced with practical exercises.',
          'By the end of the course, you will have completed 10+ practical projects, from writing a professional email to creating a budget spreadsheet and a presentation deck.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real-world scenarios',
        texts: [
          'Practice with real-world digital scenarios: applying for jobs online, creating a professional email, filling out digital forms, and using online government services.',
          'You will learn to navigate the digital world with confidence — from online shopping safely to accessing educational resources and connecting with communities.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Confidence for any career',
        texts: [
          'Your final assessment demonstrates your ability to use digital tools independently for common workplace and personal tasks.',
          'You will leave the course with a portfolio of digital documents, a professional email setup, and the confidence to tackle any digital task.',
        ],
        image: '/images/course/practice_portfolio.webp',
      },
    ],
  },
  program: {
    title: 'The training program is up to 6 months',
    subtitle: 'Complete the main course at your own pace, then choose an optional specialization.',
    researchNote: 'To ensure the program meets the needs of beginners, we conduct regular reviews with instructors and students',
    bullets: ['Beginner-friendly program', 'Working with patient instructors'],
    mainProgram: [
      { title: 'Computer Basics', bonus: false, description: 'Learn computer hardware, operating systems, file management, and basic troubleshooting. Understand how to use a keyboard, mouse, and navigate the desktop with confidence.' },
      { title: 'Internet & Email', bonus: false, description: 'Master web browsing, search engines, bookmarks, and online safety. Learn to create an email account, compose professional emails, attach files, and manage your inbox.' },
      { title: 'Word Processing', bonus: false, description: 'Learn to create and format documents in Microsoft Word and Google Docs: text formatting, tables, images, page layout, and printing. Write letters, reports, and resumes.' },
      { title: 'Spreadsheets', bonus: false, description: 'Master spreadsheet basics in Excel and Google Sheets: data entry, simple formulas (SUM, AVERAGE, COUNT), formatting, and creating basic charts for personal and work use.' },
      { title: 'Presentations', bonus: false, description: 'Learn to create professional presentations in PowerPoint and Google Slides: slide design, text, images, transitions, and presenting to an audience.' },
      { title: 'Final Assessment', bonus: false, description: 'Complete a practical assessment demonstrating your ability to use all digital tools: create a document, spreadsheet, presentation, and send a professional email.' },
      { title: 'Online Safety', bonus: true, description: 'Learn to protect yourself online: strong passwords, recognizing phishing, avoiding scams, safe browsing habits, and protecting personal information on the internet.' },
      { title: 'Cloud & File Sharing', bonus: true, description: 'Master cloud storage: Google Drive, OneDrive, and Dropbox. Learn to save, organize, share files, and collaborate on documents online.' },
      { title: 'Digital Communication', bonus: true, description: 'Learn professional digital communication: email etiquette, video calls, messaging apps, and online meeting tools like Zoom and Google Meet.' },
      { title: 'AI for beginners', bonus: true, description: 'Discover how AI can help you: using ChatGPT for writing, learning, and everyday questions. Understand what AI is and how to use it safely and effectively.' },
    ],
    specializations: [
      { title: 'Office Productivity', isNew: false, description: 'Deepen your office skills: advanced Word, Excel, and PowerPoint techniques for professional document creation and data management.' },
      { title: 'Digital Communication', isNew: false, description: 'Master digital communication tools: professional email, video conferencing, team chat, and online collaboration platforms.' },
      { title: 'Online Job Search', isNew: false, description: 'Learn to find jobs online: creating digital resumes, using job platforms, LinkedIn basics, and applying for jobs through online portals.' },
      { title: 'Social Media Basics', isNew: true, description: 'Understand social media platforms: creating profiles, privacy settings, posting content, and using social media safely and professionally.' },
      { title: 'Digital Finance Basics', isNew: false, description: 'Learn to use digital financial tools: mobile banking, online payments, digital wallets, and managing money online safely.' },
      { title: 'Online Learning Skills', isNew: true, description: 'Master online learning: using LMS platforms, attending webinars, finding free online courses, and continuing your digital education independently.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Digital Literacy: Basics',
        description: 'A foundational course to build essential digital skills',
        oldPrice: '80,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '3,300',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '48,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '3 months',
          'Digital Literacy Basics',
          '6 instruments',
          '1 final assessment – practical digital skills demo',
          'Computer, Internet, and Email Classes',
          'Workshops, recorded video lectures, practice with feedback',
          'Certificate of digital literacy',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Digital Literacy Complete',
        description: 'Full course with all modules and one specialization',
        oldPrice: '120,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '5,000',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '72,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '4 months',
          'Complete Digital Literacy + Selectable Specialization',
          'Additional classes on online safety, cloud storage, and digital communication',
          '10 instruments',
          '2 final assessments, 10 practical exercises',
          'Help with finding entry-level jobs',
          'Certificate of digital literacy',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Digital Literacy: Advanced',
        description: 'Full course with 2 specializations for comprehensive digital skills',
        oldPrice: '160,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '6,700',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '96,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '6 months',
          'Complete Digital Literacy + 2 Specializations to Choose From',
          'Additional classes on AI tools, social media, and online learning skills',
          '10+ instruments',
          '3 final assessments, 15 practical exercises',
          'Job readiness support',
          'Certificate of digital literacy',
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
        { q: 'I have never used a computer. Can I take this course?', a: 'Absolutely! This course is designed for complete beginners. We start from the very basics — how to turn on a computer, use a mouse, and navigate the screen. No prior computer experience is needed at all. Our instructors are patient and experienced with first-time learners.' },
        { q: 'How is the training structured?', a: 'The training combines simple recorded video lectures, live webinars with instructors, step-by-step practical exercises, and short quizzes. You study at your own pace with full support. All materials are available in your personal account and can be reviewed as many times as you need.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 6 hours per week. Since this is a beginner course, we recommend practicing regularly but not overwhelming yourself. You can go at your own pace and take breaks when needed.' },
        { q: 'Do I need to own a computer?', a: 'You will need access to a computer (desktop or laptop) to practice. If you don\'t have one at home, you can use computers at libraries, internet cafes, or community centers. A smartphone is helpful but not sufficient for this course.' },
      ],
      Profession: [
        { q: 'Will this course help me find a job?', a: 'Yes! Digital literacy is a requirement for almost every job today. After completing the course, you will be qualified for entry-level office positions, customer service roles, and administrative assistant jobs. We also provide guidance on creating a digital resume and applying for jobs online.' },
        { q: 'Can I continue to more advanced courses after this?', a: 'Yes, this course is the perfect foundation for all our other courses. After completing Digital Literacy, you can confidently move to any specialized course — from Microsoft Office Mastery to Web Development or Digital Marketing.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion of all modules and the final assessment, you will receive a certificate of digital literacy. You can add this document to your resume and demonstrate your digital competence to employers.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Digital Literacy Redefined',
  },
}

export default function DigitalLiteracyLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
