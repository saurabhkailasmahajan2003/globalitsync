import { LOGO_URL } from './brand.js'

const SITE_URL = 'https://globalitsync.com'

const DEFAULT_OG_IMAGE = LOGO_URL

export const DEFAULT_SEO = {
  title: 'GlobalItSync - Custom Software, Web & Mobile App Development',
  description:
    'GlobalItSync builds custom software, web applications, and mobile apps. Full-stack development, AI/ML solutions, and cloud services for startups and enterprises.',
}

export const PAGE_SEO = {
  home: {
    path: '/',
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
  },
  services: {
    path: '/services',
    title: 'Software Development Services | GlobalItSync',
    description:
      'Explore GlobalItSync software development services: web apps, mobile apps, AI/ML, cloud infrastructure, and dedicated engineering teams tailored to your business.',
  },
  portfolio: {
    path: '/project-work',
    title: 'Our Portfolio | GlobalItSync',
    description:
      'View GlobalItSync portfolio of web, mobile, and AI projects delivered for clients across e-commerce, healthcare, fintech, and more.',
  },
  industries: {
    path: '/industries',
    title: 'Industries We Serve | GlobalItSync',
    description:
      'GlobalItSync serves e-commerce, healthcare, fintech, education, logistics, and more with custom software tailored to each industry.',
  },
  contact: {
    path: '/contact',
    title: 'Contact GlobalItSync | Software Development Company',
    description:
      'Contact GlobalItSync to discuss your software project. We build custom web apps, mobile apps, and AI solutions for businesses worldwide.',
  },
  customSoftwareDevelopment: {
    path: '/custom-software-development',
    title: 'Custom Software Development Services | GlobalItSync',
    description:
      'GlobalItSync offers custom software development services for startups and enterprises. Tailored applications, SaaS platforms, automation, and legacy modernization.',
  },
  webDevelopmentServices: {
    path: '/web-development-services',
    title: 'Web Development Company | GlobalItSync',
    description:
      'Hire GlobalItSync, a trusted web development company. We build fast, SEO-friendly websites, e-commerce stores, and web applications on React and Node.js.',
  },
  mobileAppDevelopment: {
    path: '/mobile-app-development',
    title: 'Mobile App Development Company | GlobalItSync',
    description:
      'GlobalItSync is a mobile app development company building iOS, Android, and cross-platform apps with React Native, Flutter, and native technologies.',
  },
  reactDevelopmentCompany: {
    path: '/react-development-company',
    title: 'React Development Company | GlobalItSync',
    description:
      'GlobalItSync is a React development company specializing in React, Next.js, and TypeScript. Scalable SPAs, SSR apps, and component libraries.',
  },
  awsCloudServices: {
    path: '/aws-cloud-services',
    title: 'AWS Cloud Services | GlobalItSync',
    description:
      'GlobalItSync provides AWS cloud services including architecture, migration, DevOps, serverless, and managed infrastructure on Amazon Web Services.',
  },
  aiMlProjects: {
    path: '/ai-ml-projects',
    title: 'AI / ML Projects | GlobalItSync',
    description:
      'GlobalItSync builds custom machine learning models, data pipelines, predictive analytics, and MLOps solutions tailored to your business data.',
  },
  aiAgents: {
    path: '/ai-agents',
    title: 'AI Agents Development | GlobalItSync',
    description:
      'GlobalItSync develops intelligent AI agents for customer support, workflow automation, knowledge assistants, and decision-support copilots.',
  },
  itConsulting: {
    path: '/it-consulting',
    title: 'AI Automation for Businesses | GlobalItSync',
    description:
      'GlobalItSync delivers AI automation for businesses—workflow automation, intelligent integrations, and AI-powered tools that cut manual work and scale operations.',
  },
}

export { SITE_URL, DEFAULT_OG_IMAGE }
