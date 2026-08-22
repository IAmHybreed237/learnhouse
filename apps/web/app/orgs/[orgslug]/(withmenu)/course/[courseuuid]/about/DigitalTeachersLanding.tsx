'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Digital Tools for Educators',
    description: 'Learn how to use modern digital tools to create lessons, presentations, learning materials, assessments, online activities, and engaging educational experiences.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 8 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '12+ educational technology tools' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 30 webinars with education technology experts, up to 6 individual consultations, lesson plan reviews and feedback throughout the course',
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
        description: 'We monitor changes in educational technology, learning platforms, and digital pedagogy. If anything changes, we update the course to reflect the latest edtech tools and teaching methods.',
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
        description: 'You can enhance your basic skills with two additional specializations — from e-learning design to educational AI — and expand your teaching career into digital education.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for lesson planning, content creation, personalized learning paths, and automated grading — making you a more effective and innovative educator.',
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
    subtitle: 'Build a career in digital education and edtech',
    description: 'After completing the course, you will be able to work as a digital teacher, instructional designer, e-learning developer, or educational technology specialist. You can teach online, create courses for institutions, or work with edtech companies. Digital teaching skills are in high demand as education moves online.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Teacher using digital tools for online education',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Digital teaching skills open new income opportunities beyond traditional classroom teaching',
    cardTitle: 'Digital Education Specialist',
    points: [
      { label: 'Entry', sublabel: '0-1 year experience', position: 0, salary: '200,000', description: 'Starting position teaching online courses, creating digital lesson content, and supporting virtual classrooms. Combines teaching skills with digital tools.' },
      { label: 'Experienced', sublabel: '2-3 years experience', position: 50, salary: '450,000', description: 'Independent design of online courses, management of LMS platforms, and instructional design for institutions or edtech companies.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '800,000', description: 'Leads digital education initiatives, designs curriculum for online programs, manages edtech implementations, or creates and sells own online courses.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Digital Education Specialist',
    keySkills: [
      'Digital lesson planning and interactive content creation',
      'Learning Management System (LMS) administration',
      'Online assessment and digital grading tools',
      'Virtual classroom management and video conferencing',
      'Multimedia content: educational videos, presentations, and infographics',
      'Student engagement strategies for online learning',
      'Course design and curriculum development for digital delivery',
      'Educational data analytics and student progress tracking',
    ],
    softSkills: [
      'Digital pedagogy and instructional design',
      'Patience and adaptability with technology',
      'Online communication and student motivation',
      'Continuous learning and tech adoption',
    ],
    tools: [
      { name: 'Google Classroom', desc: 'Free LMS for managing classes, assignments, grading, and student communication', icon: '/images/course/tool_googleclassroom.svg' },
      { name: 'Moodle', desc: 'Open-source learning platform for course management, assessments, and student tracking', icon: '/images/course/tool_moodle.svg' },
      { name: 'Zoom', desc: 'Video conferencing for live online classes, breakout rooms, and recorded lectures', icon: '/images/course/tool_zoom.svg' },
      { name: 'Kahoot', desc: 'Interactive quiz and game-based learning platform for student engagement and assessment', icon: '/images/course/tool_kahoot.svg' },
      { name: 'Canva', desc: 'Design tool for creating educational visuals, presentations, worksheets, and infographics', icon: '/images/course/tool_canva.svg' },
      { name: 'Nearpod', desc: 'Interactive lesson platform with slides, quizzes, polls, and virtual field trips', icon: '/images/course/tool_nearpod.svg' },
      { name: 'Google Forms', desc: 'Survey and quiz tool for assessments, feedback collection, and student surveys', icon: '/images/course/tool_googleforms.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for lesson planning, quiz generation, content creation, and personalized learning materials', icon: '/images/course/tool_chatgpt.svg' },
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
        title: 'Real digital lessons',
        texts: [
          'From the first weeks, you will create real digital learning materials: interactive lessons, video tutorials, online quizzes, and multimedia presentations. Every module includes hands-on content creation.',
          'By the end of the course, you will have a portfolio of 10+ digital learning resources, from full lesson plans to online courses and assessment tools.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real classroom application',
        texts: [
          'Practice by applying digital tools in your own classroom or with volunteer students. You will learn to conduct online classes, manage virtual classrooms, and assess students digitally.',
          'If you\'re not currently teaching, we connect you with practice opportunities through partner schools and online tutoring platforms.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete online course — from curriculum design to digital content creation to assessment strategy — ready to deploy with real students.',
          'You will build a professional teaching portfolio showcasing your digital education capabilities to schools, institutions, and edtech companies.',
        ],
        image: '/images/course/practice_portfolio.webp',
      },
    ],
  },
  program: {
    title: 'The training program is up to 8 months',
    subtitle: 'First, complete the main course, then choose one of the specializations.',
    researchNote: 'Developed in consultation with educators and edtech professionals to address real classroom needs',
    bullets: ['Practical training program', 'Working with experienced educators'],
    mainProgram: [
      { title: 'Digital Pedagogy Fundamentals', bonus: false, description: 'Introduction to digital teaching: learning theories for online environments, digital pedagogy principles, and how technology transforms the teacher\'s role. Understand what makes effective digital instruction.' },
      { title: 'LMS & Course Management', bonus: false, description: 'Master Learning Management Systems: Google Classroom, Moodle, and Canvas. Learn to set up courses, manage enrollments, create assignments, track progress, and organize digital learning materials.' },
      { title: 'Interactive Content Creation', bonus: false, description: 'Learn to create engaging digital content: interactive presentations in Nearpod, educational videos, infographics in Canva, and digital worksheets that keep students engaged and learning actively.' },
      { title: 'Virtual Classroom Management', bonus: false, description: 'Master live online teaching: Zoom classroom management, breakout rooms, screen sharing, whiteboards, student engagement techniques, and managing behavior in virtual environments.' },
      { title: 'Digital Assessment', bonus: false, description: 'Learn online assessment: Google Forms quizzes, Kahoot games, automated grading, rubric-based assessment, plagiarism detection, and providing effective digital feedback to students.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to design and build a complete online course. Create digital content, assessments, and a course management plan. Present your course for defense to education experts.' },
      { title: 'Educational Video Production', bonus: true, description: 'Learn to create educational videos: recording lectures, screen recording, editing, adding captions, and producing professional video content for flipped classrooms and online learning.' },
      { title: 'Gamification in Education', bonus: true, description: 'Master gamification: game-based learning with Kahoot and Quizizz, badge systems, progress tracking, leaderboards, and making learning fun and engaging for digital-native students.' },
      { title: 'Selling online courses', bonus: true, description: 'Learn to monetize your teaching: creating and selling online courses on platforms like Udemy and Teachable, marketing your courses, and building a personal teaching brand.' },
      { title: 'AI for educators', bonus: true, description: 'Practical AI for teaching: ChatGPT for lesson plans and quizzes, AI for personalized learning paths, automated grading assistance, and creating adaptive learning experiences.' },
    ],
    specializations: [
      { title: 'E-Learning Design', isNew: false, description: 'Specialize in instructional design: course architecture, learning objectives, multimedia design, and creating professional e-learning modules for institutions and companies.' },
      { title: 'STEM Digital Teaching', isNew: false, description: 'Master digital tools for STEM education: virtual labs, coding platforms, math visualization tools, and teaching science and technology subjects online.' },
      { title: 'Language Teaching Online', isNew: false, description: 'Specialize in online language teaching: digital language tools, conversation platforms, pronunciation apps, and teaching languages effectively in virtual classrooms.' },
      { title: 'Special Needs & Accessibility', isNew: true, description: 'Learn accessible digital education: assistive technologies, accessible content design, inclusive online classrooms, and adapting digital tools for diverse learning needs.' },
      { title: 'Blended Learning', isNew: false, description: 'Master blended learning design: combining in-person and digital instruction, flipped classroom models, hybrid schedules, and optimizing the mix of physical and online learning.' },
      { title: 'Educational AI', isNew: true, description: 'Specialize in AI for education: adaptive learning platforms, AI tutoring systems, learning analytics, and implementing AI tools to personalize and improve educational outcomes.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Digital Teaching: The Basics',
        description: 'A basic course to get started with digital teaching tools',
        oldPrice: '140,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '5,800',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '84,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '3 months',
          'Digital Teaching Basics',
          '8 instruments',
          '1 final project – online course module, 8 digital resources',
          'LMS and Interactive Content Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Digital Education Specialist',
        description: 'All the base and focus on specialization in one direction',
        oldPrice: '240,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '6,700',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '144,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '6 months',
          'Digital Teaching Fundamentals + Selectable Specialization',
          'Additional classes on video production, gamification, and course selling',
          '12 instruments',
          '2 final projects, teaching portfolio, 15 digital resources',
          'Help with finding digital teaching opportunities',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Digital Education Specialist: Advanced',
        description: 'Full base and 2 specializations for comprehensive digital teaching skills',
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
          'Digital Teaching Fundamentals + 2 Specializations to Choose From',
          'Additional classes on video, gamification, AI tools, and accessibility',
          '12+ instruments',
          '4 final projects, full teaching portfolio, 25 digital resources',
          'Connections with schools and edtech companies',
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
        { q: 'Do I need to be a teacher to take this course?', a: 'No, while the course is designed for educators, anyone interested in digital education can take it. If you\'re a teacher, you\'ll learn to enhance your classroom with digital tools. If you\'re new to teaching, you\'ll learn digital pedagogy fundamentals alongside the technology.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with edtech experts, hands-on content creation assignments, and teaching practice. You study according to a schedule but can always return to materials. Lesson recordings are stored for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 8 hours per week. Since you\'re creating digital teaching materials, expect to spend additional time producing content for your portfolio.' },
        { q: 'Can I study and teach at the same time?', a: 'Yes, the program is designed for working teachers. Classes are held in the evening, and all materials are available in your personal account. You can also pause your studies for up to 6 months if needed.' },
      ],
      Profession: [
        { q: 'Will this help me if I\'m already a teacher?', a: 'Absolutely! This course will transform your teaching with digital tools, making your lessons more engaging, your assessment more efficient, and opening new income opportunities through online teaching and course creation.' },
        { q: 'Can I create and sell my own online courses after this?', a: 'Yes! The course covers course creation, platform selection (Udemy, Teachable), and marketing your courses. Many of our graduates supplement their teaching income by selling online courses.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Digital Tools for Educators',
  },
}

export default function DigitalTeachersLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
