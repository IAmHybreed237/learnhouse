'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Professional Graphic Design',
    description: 'Learn typography, layout, composition, branding, visual identity, and digital design techniques to create professional visual communication.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical projects' },
      { title: 'Duration', value: 'Up to 10 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '10+ design tools' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Live communication',
        description: 'Up to 40 webinars with design professionals, up to 8 individual consultations, portfolio reviews and design feedback throughout the course',
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
        description: 'We monitor changes in design trends, software updates, and industry standards. If anything changes, we update the course to reflect the latest design tools and visual trends.',
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
        description: 'You can enhance your basic skills with two additional specializations — from brand design to UI design — and take your first freelance design clients.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for ideation, image generation, background removal, and design variations — making you more creative and productive as a designer.',
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
    subtitle: 'Build a career in graphic design and visual communication',
    description: 'After completing the course, you will be able to work as a graphic designer, brand designer, social media designer, or visual content creator. You can work at a design agency, in-house at a company, or as a freelance designer. Graphic design skills are in demand across every industry that needs visual communication.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Graphic designer working on brand identity and visual content',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Graphic design income grows with portfolio quality, client base, and specialization',
    cardTitle: 'Graphic Designer',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '180,000', description: 'Starting position creating social media graphics, marketing materials, and basic brand assets. Works under senior designers on layout and production tasks.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '400,000', description: 'Independent design work: brand identities, marketing campaigns, digital content, and managing multiple design projects for clients or a company.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '750,000', description: 'Leads design teams, develops brand strategies, manages major design projects, and may run an independent design studio with premium clients.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Graphic Designer',
    keySkills: [
      'Typography: font selection, pairing, and hierarchy',
      'Color theory and brand color systems',
      'Layout and composition principles',
      'Logo design and brand identity development',
      'Digital design: social media, web, and mobile graphics',
      'Print design: business cards, flyers, and brochures',
      'Design systems and brand guidelines',
      'Client communication and design presentations',
    ],
    softSkills: [
      'Creativity and visual thinking',
      'Attention to detail and aesthetics',
      'Client communication and feedback handling',
      'Time management and project delivery',
    ],
    tools: [
      { name: 'Adobe Illustrator', desc: 'Industry-standard vector design software for logos, icons, illustrations, and brand assets', icon: '/images/course/tool_illustrator.svg' },
      { name: 'Adobe Photoshop', desc: 'Photo editing and raster design software for image manipulation and digital art', icon: '/images/course/tool_photoshop.svg' },
      { name: 'Adobe InDesign', desc: 'Layout and publishing software for print materials, magazines, and multi-page documents', icon: '/images/course/tool_indesign.svg' },
      { name: 'Figma', desc: 'Collaborative design platform for digital design, prototyping, and design systems', icon: '/images/course/tool_figma.svg' },
      { name: 'Canva', desc: 'Accessible design platform for quick social media graphics, templates, and marketing visuals', icon: '/images/course/tool_canva.svg' },
      { name: 'Adobe XD', desc: 'UX/UI design tool for creating wireframes, prototypes, and digital interface designs', icon: '/images/course/tool_adobexd.svg' },
      { name: 'Procreate', desc: 'Digital illustration app for iPad, ideal for hand-drawn elements and artistic design work', icon: '/images/course/tool_procreate.svg' },
      { name: 'ChatGPT', desc: 'AI assistant for design briefs, creative ideation, color naming, and client communication', icon: '/images/course/tool_chatgpt.svg' },
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
          'From the first weeks, you will create real design work: logos, social media posts, marketing materials, and brand identities. Every module includes hands-on design projects with professional tools.',
          'By the end of the course, you will have a portfolio of 12+ design pieces, from logo collections to full brand identity systems and marketing campaigns.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real client work',
        texts: [
          'Practice on real design projects from partner companies and freelance platforms. You will learn to work with client briefs, present design concepts, and deliver professional work on time.',
          'We provide access to a PRO account on freelance platforms and help you build your first client relationships in graphic design.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete brand identity for a real or simulated business — from logo to color system to marketing materials to brand guidelines.',
          'You will build a professional design portfolio showcasing your range, creativity, and technical skill — exactly what employers and clients expect from a professional designer.',
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
      { title: 'Design Fundamentals', bonus: false, description: 'Introduction to graphic design principles: balance, hierarchy, contrast, alignment, and proximity. Learn the visual language that underpins all great design work.' },
      { title: 'Typography & Color', bonus: false, description: 'Master typography: font anatomy, classification, pairing, and hierarchy. Learn color theory: color wheels, harmonies, psychology, and building brand color systems.' },
      { title: 'Vector Design (Illustrator)', bonus: false, description: 'Learn Adobe Illustrator: pen tool, shapes, paths, gradients, and creating scalable vector graphics. Master logo design, icons, and brand mark creation.' },
      { title: 'Image Editing (Photoshop)', bonus: false, description: 'Master Adobe Photoshop: photo retouching, compositing, layer styles, masks, and creating digital artwork. Learn to manipulate and enhance images for design projects.' },
      { title: 'Brand Identity Design', bonus: false, description: 'Learn to create complete brand identities: logo design, color systems, typography, brand guidelines, and applying brand identity across digital and print touchpoints.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to create a complete brand identity for a real or simulated business. Design all brand touchpoints and present your work for defense to design experts.' },
      { title: 'Print Design', bonus: true, description: 'Master print design in InDesign: business cards, flyers, brochures, and multi-page layouts. Learn print specifications, bleed, CMYK, and preparing files for print production.' },
      { title: 'Digital & Social Media Design', bonus: true, description: 'Learn digital design: social media graphics, web banners, email templates, and digital ad creatives. Master designing for different platforms and screen sizes.' },
      { title: 'How to start freelancing', bonus: true, description: 'Step-by-step guide to launching your freelance design career: finding clients, building a portfolio, pricing design work, and managing client projects.' },
      { title: 'AI for designers', bonus: true, description: 'Practical AI for design: Midjourney for inspiration, AI background removal, automated design variations, and using ChatGPT for creative briefs and ideation.' },
    ],
    specializations: [
      { title: 'Brand Design', isNew: false, description: 'Specialize in brand identity: logo systems, brand guidelines, brand strategy, and creating cohesive visual identities for companies and products.' },
      { title: 'UI/UX Design', isNew: false, description: 'Master digital interface design: wireframing, prototyping in Figma, user flows, and designing beautiful and functional digital products.' },
      { title: 'Social Media Design', isNew: false, description: 'Specialize in social media content: platform-specific designs, content templates, animated graphics, and building visual consistency across channels.' },
      { title: 'Illustration', isNew: true, description: 'Master digital illustration: Procreate and Illustrator techniques, character design, editorial illustration, and creating custom artwork for brands.' },
      { title: 'Packaging Design', isNew: false, description: 'Learn packaging design: product packaging, label design, 3D mockups, and creating packaging that stands out on shelves and online.' },
      { title: 'Motion Graphics', isNew: true, description: 'Specialize in motion design: animated logos, social media animations, title sequences, and bringing static designs to life with After Effects.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Graphic Design: The Basics',
        description: 'A basic course to get started with graphic design',
        oldPrice: '160,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '6,700',
        monthlyLabel: 'FCFA/month',
        duration: '24 months',
        durationLabel: 'without overpayments',
        onePayment: '96,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '4 months',
          'Graphic Design Basics',
          '6 instruments',
          '1 final project – brand identity, 10 portfolio pieces',
          'Typography, Color, and Illustrator Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Graphic Designer',
        description: 'All the base and focus on specialization in one direction',
        oldPrice: '280,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '7,800',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '168,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '7 months',
          'Graphic Design Fundamentals + Selectable Specialization',
          'Additional classes on print design, digital design, and freelancing basics',
          '10 instruments',
          '2 final projects, design portfolio, 20 pieces',
          'Help with finding clients',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Graphic Designer: Advanced',
        description: 'Full base and 2 specializations for more flexible work',
        oldPrice: '360,000 FCFA',
        discountBadge: '- 40% until August 14',
        monthlyPrice: '10,000',
        monthlyLabel: 'FCFA/month',
        duration: '36 months',
        durationLabel: 'without overpayments',
        onePayment: '216,000 FCFA',
        onePaymentLabel: 'one payment',
        features: [
          '10 months',
          'Graphic Design Fundamentals + 2 Specializations to Choose From',
          'Additional classes on print, digital, AI tools, and motion graphics',
          '10+ instruments',
          '4 final projects, full portfolio, 30 pieces',
          'Freelance client acquisition support',
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
        { q: 'Do I need to know how to draw to be a graphic designer?', a: 'No! Graphic design is about visual communication, not illustration. While drawing skills can help, they\'re not required. You\'ll learn to use design software to create professional visuals. Many successful designers can\'t draw traditionally but excel at digital design.' },
        { q: 'Do I need a powerful computer for design work?', a: 'A standard computer can handle most design work. Adobe Creative Cloud runs on most modern computers. For heavier work like 3D or motion graphics, a more powerful machine helps, but it\'s not required for the course. We also teach Canva and Figma which run in the browser.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars with design professionals, hands-on design assignments, and portfolio reviews. You study according to a schedule but can always return to materials. Lesson recordings are stored for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. Design requires practice, so expect to spend additional time working on projects and building your portfolio.' },
      ],
      Profession: [
        { q: 'Will I be able to find work after completing the course?', a: 'Yes, we provide career support and client acquisition guidance. 84% of our graduates achieve their career goals within 3 months. Graphic design skills are in demand at agencies, companies, and as freelance work across all industries.' },
        { q: 'Can I work as a freelance designer?', a: 'Absolutely! Graphic design is one of the most popular freelance professions. The course covers finding clients, pricing your work, and managing freelance projects. We also provide access to freelance platforms.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Professional Graphic Design',
  },
}

export default function GraphicDesignLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
