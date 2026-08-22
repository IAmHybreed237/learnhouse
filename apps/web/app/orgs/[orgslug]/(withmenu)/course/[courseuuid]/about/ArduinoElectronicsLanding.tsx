'use client'

import React from 'react'
import CourseLandingTemplate, { CourseLandingData } from './CourseLandingTemplate'

const data: CourseLandingData = {
  hero: {
    title: 'Arduino & Practical Electronics',
    description: 'Learn electronics and Arduino programming by working with circuits, sensors, microcontrollers, and practical projects that connect software with the physical world.',
    badges: ['Profession', 'With diploma', 'Practice'],
    stats: [
      { title: 'Format', value: 'Online with practical labs' },
      { title: 'Duration', value: 'Up to 12 months' },
      { title: 'Level', value: 'From beginner to advanced' },
      { title: 'Tools', value: '12+ hardware & software tools' },
    ],
  },
  approach: {
    title: 'Our approach to your growth',
    cards: [
      {
        title: 'Hands-on labs',
        description: 'Up to 40 practical lab sessions with real hardware kits, individual circuit design reviews, and feedback throughout the course',
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
        description: 'We monitor changes in embedded systems, IoT protocols, and hardware platforms. If anything changes, we update the course to reflect industry trends and new components.',
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
        description: 'You can enhance your basic skills with two additional specializations — from IoT systems to robotics — and take your first freelance hardware projects.',
        bgImage: '/images/course/approach_profile.webp',
        icon: (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title: 'AI as a base',
        description: 'We help you use AI tools for circuit simulation, code generation for Arduino, and debugging — making you more effective and in-demand as an embedded developer.',
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
    subtitle: 'Build a career in embedded systems and IoT',
    description: 'After completing the course, you will be able to work as an embedded systems developer, IoT engineer, or hardware prototyping specialist. You can work in a company, freelance on hardware projects, or launch your own smart device products. The skills are in high demand across industries — from agriculture to home automation.',
    image: '/images/course/career_outcomes_marketing.webp',
    imageAlt: 'Electronics engineer working on circuits',
  },
  salary: {
    title: 'How much you can earn',
    subtitle: 'Salaries in the embedded systems and electronics field grow with experience and specialization',
    cardTitle: 'Embedded Systems Developer',
    points: [
      { label: 'Junior', sublabel: '0-1 year experience', position: 0, salary: '150,000', description: 'Starting position with basic circuit design and Arduino programming skills. Works under supervision on simple projects.' },
      { label: 'Middle', sublabel: '2-3 years experience', position: 50, salary: '350,000', description: 'Independent development of embedded systems, IoT device prototyping, and sensor network deployment. Works on full project cycles.' },
      { label: 'Senior', sublabel: '4+ years experience', position: 100, salary: '650,000', description: 'Leads hardware-software architecture decisions, mentors junior developers, and manages complex IoT product development from concept to production.' },
    ],
    source: 'Based on market research across job platforms and salary surveys in Central Africa and remote positions',
  },
  skills: {
    title: 'What you will learn',
    subtitle: 'Skills and tools you will master during the course',
    professionName: 'Arduino & Electronics Developer',
    keySkills: [
      'Designing and reading electronic circuit schematics',
      'Programming Arduino microcontrollers (C/C++)',
      'Working with sensors, actuators, and displays',
      'Building IoT systems with WiFi and Bluetooth modules',
      'PCB design basics and prototyping techniques',
      'Serial communication protocols (I2C, SPI, UART)',
      'Power management and battery optimization',
      'Data logging and real-time monitoring systems',
    ],
    softSkills: [
      'Problem-solving and logical thinking',
      'Project planning and documentation',
      'Technical communication and teamwork',
      'Research and self-learning new components',
    ],
    tools: [
      { name: 'Arduino IDE', desc: 'Official development environment for writing and uploading code to Arduino boards', icon: '/images/course/tool_arduino.svg' },
      { name: 'Tinkercad', desc: 'Online circuit simulator for prototyping and testing designs before building', icon: '/images/course/tool_tinkercad.svg' },
      { name: 'Fritzing', desc: 'Tool for documenting and sharing circuit designs with professional breadboard layouts', icon: '/images/course/tool_fritzing.svg' },
      { name: 'PlatformIO', desc: 'Professional development platform for embedded systems with advanced debugging', icon: '/images/course/tool_platformio.svg' },
      { name: 'KiCad', desc: 'Open-source EDA suite for PCB design and schematic capture', icon: '/images/course/tool_kicad.svg' },
      { name: 'VS Code', desc: 'Code editor with PlatformIO integration for professional Arduino development', icon: '/images/course/tool_vscode.svg' },
      { name: 'ESP32', desc: 'Powerful microcontroller with built-in WiFi and Bluetooth for IoT projects', icon: '/images/course/tool_esp32.svg' },
      { name: 'Raspberry Pi', desc: 'Single-board computer for advanced projects requiring more processing power', icon: '/images/course/tool_raspberrypi.svg' },
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
        title: 'Real hardware projects',
        texts: [
          'From the first weeks, you will work with real Arduino boards, sensors, and electronic components. Each module includes hands-on lab sessions where you build working circuits and write code.',
          'By the end of the course, you will have a portfolio of 10+ working projects, from simple LED controllers to IoT weather stations and home automation systems.',
        ],
        image: '/images/course/practice_projects.webp',
      },
      {
        title: 'Real orders and freelancing',
        texts: [
          'Practice on real tasks from partner companies and freelance platforms. You will learn to work with client requirements, estimate project costs, and deliver hardware solutions on time.',
          'We provide access to a PRO account on freelance platforms and help you build your first client relationships in hardware development.',
        ],
        image: '/images/course/practice_orders.webp',
      },
      {
        title: 'Portfolio for employers',
        texts: [
          'Your final project is a complete embedded system that you design, build, and document from scratch. This becomes the centerpiece of your professional portfolio.',
          'You will also create detailed project documentation, circuit diagrams, and code repositories — exactly what employers expect from a professional electronics developer.',
        ],
        image: '/images/course/practice_portfolio.webp',
      },
    ],
  },
  program: {
    title: 'The training program is up to 12 months',
    subtitle: 'First, complete the main course, then choose one of the specializations.',
    researchNote: 'To ensure the program meets the needs of the labor market, we conduct three stages of research',
    bullets: ['Advanced training program', 'Working with a mentor'],
    mainProgram: [
      { title: 'Electronics Fundamentals', bonus: false, description: 'Introduction to electricity, voltage, current, resistance, and Ohm\'s law. Learn to read resistor color codes, use a multimeter, and understand basic electronic components (resistors, capacitors, diodes, transistors).' },
      { title: 'Circuit Design Basics', bonus: false, description: 'Design and analyze basic circuits using schematic diagrams. Learn about series and parallel circuits, voltage dividers, LED circuits, and transistor switching. Practice with breadboard prototyping.' },
      { title: 'Arduino Programming', bonus: false, description: 'Master the Arduino platform: setup, digital/analog I/O, serial communication, PWM, interrupts, and timing. Write structured C/C++ code for embedded systems with proper architecture.' },
      { title: 'Sensors and Actuators', bonus: false, description: 'Work with temperature, humidity, motion, ultrasonic, and light sensors. Control motors, servos, relays, and displays. Learn to interface and calibrate sensors for accurate readings.' },
      { title: 'Communication Protocols', bonus: false, description: 'Master I2C, SPI, and UART protocols. Connect multiple devices to a single Arduino, communicate between microcontrollers, and interface with external modules and ICs.' },
      { title: 'Final Project', bonus: false, description: 'Apply all acquired knowledge to design and build a complete embedded system — from concept to working prototype. Present your project for defense and receive feedback from industry experts.' },
      { title: 'Working with datasheets', bonus: true, description: 'Learn to read and interpret component datasheets — the essential skill for any electronics engineer. Understand pinouts, electrical characteristics, and timing diagrams.' },
      { title: 'Soldering and PCB basics', bonus: true, description: 'Practical soldering techniques: through-hole and surface mount. Introduction to PCB design using KiCad, from schematic to layout to manufacturing.' },
      { title: 'How to start freelancing', bonus: true, description: 'Step-by-step guide to launching your freelance career in hardware development: finding clients, creating a profile, pricing your services, and managing projects independently.' },
      { title: 'Neural networks for embedded systems', bonus: true, description: 'Practical use of AI tools in electronics: using ChatGPT for code generation, circuit simulation with AI assistance, and TinyML for running ML models on microcontrollers.' },
    ],
    specializations: [
      { title: 'IoT Systems', isNew: false, description: 'Build connected devices using ESP32, WiFi, and Bluetooth. Learn MQTT, cloud integration, and remote monitoring systems for smart home and industrial applications.' },
      { title: 'Robotics', isNew: false, description: 'Design and build autonomous robots: motor control, obstacle avoidance, line following, and sensor fusion using Arduino and Raspberry Pi.' },
      { title: 'Home Automation', isNew: false, description: 'Create smart home systems: lighting control, security systems, energy monitoring, and voice-controlled automation using relays, sensors, and wireless modules.' },
      { title: 'Wearable Electronics', isNew: true, description: 'Design compact, power-efficient wearable devices: fitness trackers, health monitors, and smart accessories using small-form-factor microcontrollers and sensors.' },
      { title: 'Agricultural IoT', isNew: false, description: 'Build smart farming solutions: soil moisture monitoring, automated irrigation, weather stations, and crop monitoring systems using sensors and LoRa communication.' },
      { title: 'PCB Design', isNew: true, description: 'Master professional PCB design: multi-layer boards, signal integrity, power distribution, and manufacturing preparation using KiCad and industry best practices.' },
    ],
  },
  pricing: {
    title: 'Choose a tariff that suits your goals',
    tariffs: [
      {
        title: 'Electronics: The Basics',
        description: 'A basic course to get acquainted with electronics and Arduino',
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
          'Electronics & Arduino Basics',
          '8 instruments',
          '1 final project – smart sensor system, 8 portfolio cases',
          'Circuit Design and Sensor Classes',
          'Workshops, webinars, recorded video lectures, practice with feedback',
          'Certificate of advanced training',
        ],
        recommended: false,
        gradient: false,
      },
      {
        title: 'Embedded Developer',
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
          '9 months',
          'Electronics Fundamentals + Selectable Specialization',
          'Additional classes on soldering, PCB design, and freelancing basics',
          '12 instruments',
          '2 final projects, group system, 15 cases',
          'Help with finding a job',
          'Diploma of professional retraining',
        ],
        recommended: true,
        gradient: true,
      },
      {
        title: 'Embedded Developer: Advanced',
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
          '12 months',
          'Electronics Fundamentals + 2 Specializations to Choose From',
          'Additional classes on soldering, PCB design, AI tools, and wearable electronics',
          '12+ instruments',
          '4 final projects, group system, 25 cases',
          'Internship opportunities with partner companies',
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
        { q: 'Do I need to buy hardware separately?', a: 'The course includes a recommended hardware kit list. You can purchase components individually or order a pre-assembled kit from our partners. A basic starter kit (Arduino board, breadboard, sensors, LEDs, resistors) costs approximately 25,000-40,000 FCFA. We also provide simulation tools for practice without physical hardware.' },
        { q: 'How is the training structured?', a: 'The training combines recorded video lectures, live webinars, practical lab assignments, and tests. You study according to a schedule but can always return to materials you need. Lesson recordings are stored in your personal account for three years.' },
        { q: 'How much time per week do I need to study?', a: 'On average, studying takes up to 10 hours per week. You can speed up or slow down the course depending on your schedule. Online classes are held up to 2 times a week in the evening. Lab sessions require additional hands-on time with hardware.' },
        { q: 'Can I study and work at the same time?', a: 'Yes, the program is designed for working professionals. Classes are held in the evening, and all materials are available in your personal account. You can also pause your studies for up to 6 months if needed.' },
      ],
      Profession: [
        { q: 'Will I be able to find a job after completing the course?', a: 'Yes, we provide career support including resume preparation, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months of completing the course. Embedded systems and IoT skills are in high demand across industries.' },
        { q: 'Do I need prior experience to start?', a: 'No, the course is designed for beginners. We start with the fundamentals of electricity and electronics, then gradually move to advanced topics. You just need basic computer skills and a desire to learn. No prior programming or electronics experience is required.' },
        { q: 'What documents will I receive upon completion?', a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.' },
      ],
    },
  },
  footer: {
    breadcrumb: 'Arduino & Practical Electronics',
  },
}

export default function ArduinoElectronicsLanding({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  return <CourseLandingTemplate courseuuid={courseuuid} orgslug={orgslug} data={data} />
}
