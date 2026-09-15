import { Link, useLocation } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { SERVICE_PAGE_LINKS } from '../config/servicePages.js'
import { BTN_PRIMARY } from '../config/ui.js'

import aiAutomationImg from '../assets/AI Automation.png'
import webDevImg from '../assets/web development.png'
import appDevImg from '../assets/appdevelopment.png'
import aimlImg from '../assets/aiml.png'
import aiAgentsImg from '../assets/AIagents.png'
import cloudServicesImg from '../assets/cloudservices.png'

const SERVICES = [
  {
    id: 'ai-automation',
    bg: 'ai-automation',
    category: 'AI & Automation',
    title: 'AI Automation for Businesses',
    link: '/it-consulting',
    image: aiAutomationImg,
    description:
      'Intelligent workflow automation, process optimization, and AI-powered integrations that reduce manual work and help businesses scale.',
    highlights: ['Workflow automation', 'AI integrations', 'Process optimization'],
    badge: 'Popular',
    featured: true,
  },
  {
    id: 'web',
    bg: 'web',
    category: 'Web Engineering',
    title: 'Website Development',
    link: '/web-development-services',
    image: webDevImg,
    description:
      'Responsive, fast, and SEO-optimized websites built with modern frameworks like React, Next.js, and Node.js.',
    highlights: ['React & Next.js', 'SEO-ready', 'High Performance'],
    badge: 'High Speed',
  },
  {
    id: 'app',
    bg: 'app',
    category: 'Mobile Apps',
    title: 'App Development',
    link: '/mobile-app-development',
    image: appDevImg,
    description:
      'Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and Swift/Kotlin.',
    highlights: ['iOS & Android', 'React Native', 'Flutter'],
    badge: 'iOS & Android',
  },
  {
    id: 'ai-ml',
    bg: 'ai-ml',
    category: 'Data & Intelligence',
    title: 'AI / ML Projects',
    link: '/ai-ml-projects',
    image: aimlImg,
    description:
      'Custom machine learning models, data pipelines, and predictive analytics tailored to your business data.',
    highlights: ['Custom models', 'Data pipelines', 'Predictive analytics'],
    badge: 'Custom AI',
  },
  {
    id: 'ai-agents',
    bg: 'ai-agents',
    category: 'Autonomous AI',
    title: 'AI Agents',
    link: '/ai-agents',
    image: aiAgentsImg,
    description:
      'Intelligent autonomous agents for customer support, workflow automation, and decision-making at scale.',
    highlights: ['Support agents', 'Workflow bots', 'Autonomous copilots'],
    badge: 'Trending',
  },
  {
    id: 'cloud',
    bg: 'cloud',
    category: 'DevOps & Cloud',
    title: 'Cloud Services',
    link: '/aws-cloud-services',
    image: cloudServicesImg,
    description:
      'Cloud architecture, DevOps, and managed infrastructure on AWS, Azure, and GCP with 99.9% uptime.',
    highlights: ['AWS & Azure', 'DevOps & CI/CD', '99.9% Uptime SLA'],
    badge: 'Enterprise',
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn your goals, systems, and constraints to define a clear scope and roadmap.',
  },
  {
    step: '02',
    title: 'Design & Build',
    description: 'Agile delivery with regular demos, transparent progress, and production-grade engineering.',
  },
  {
    step: '03',
    title: 'Launch & Scale',
    description: 'Deployment, monitoring, and ongoing support so your solution keeps performing.',
  },
]

const CARD_REVEAL_DELAYS = [
  'reveal-delay-1',
  'reveal-delay-2',
  'reveal-delay-3',
  'reveal-delay-1',
  'reveal-delay-2',
  'reveal-delay-3',
]

function ServiceIcon({ variant }) {
  const className = 'h-5 w-5'

  switch (variant) {
    case 'ai-agents':
    case 'ai-automation':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3v3M12 18v3M3 12h3M18 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      )
    case 'web':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 7h16M4 12h10M4 17h7"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      )
    case 'app':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="7" y="2.5" width="10" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.75" />
          <path d="M11 18.5h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      )
    case 'ai-ml':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.75" />
          <path d="M8 12h8M16.5 7.5l-5 3M11.5 13.5l5 3" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      )
    case 'cloud':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 18h11a4 4 0 000-8 5.5 5.5 0 00-10.6-1.8A3.5 3.5 0 007 18z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return null
  }
}

function ServiceCard({ service, index }) {
  const [cardRef, visible] = useScrollReveal({
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px',
  })

  const card = (
    <>
      {/* Visual Image Header */}
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#070b19]">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gc-navy/40 via-transparent to-transparent" />
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold tracking-tight text-gc-navy transition-colors duration-200 group-hover:text-gc-blue sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-gc-navy/65">
          {service.description}
        </p>

        {/* Card Footer Link */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-sm font-semibold text-gc-blue transition-colors group-hover:text-gc-blue/90">
            Explore service
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gc-blue/10 text-gc-blue transition-all duration-300 group-hover:translate-x-1 group-hover:bg-gc-blue group-hover:text-white">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </span>
        </div>
      </div>
    </>
  )

  const className = `service-card service-card-reveal delay-${index % 6} ${visible ? 'is-visible' : ''} group flex flex-col h-full rounded-2xl border border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(1,44,100,0.06)] hover:border-gc-blue/40 hover:shadow-[0_20px_40px_rgba(0,127,252,0.15)] overflow-hidden`

  return service.link ? (
    <Link ref={cardRef} key={service.id} to={service.link} className={className}>
      {card}
    </Link>
  ) : (
    <div ref={cardRef} key={service.id} className={className}>
      {card}
    </div>
  )
}

function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] pb-6 pt-8 sm:pb-8 sm:pt-10 lg:pb-10 lg:pt-12">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,rgba(0,127,252,0.12),transparent_45%),radial-gradient(circle_at_top_right,rgba(1,44,100,0.07),transparent_40%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gc-blue/20 bg-white px-3 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gc-blue shadow-[0_0_8px_rgba(0,127,252,0.5)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gc-navy">
              GlobalItSync Services
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-gc-navy sm:text-4xl lg:text-5xl">
            Technology services built for{' '}
            <span className="bg-gradient-to-r from-gc-blue to-gc-navy bg-clip-text text-transparent">
              modern businesses
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gc-navy/65 sm:text-lg">
            From AI automation and custom software to cloud infrastructure — we deliver end-to-end
            solutions with senior engineers who ship production-ready products.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Core offerings', value: '6+' },
            { label: 'Delivery model', value: 'Agile' },
            { label: 'Support', value: 'End-to-end' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/90 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm"
            >
              <p className="text-2xl font-black text-gc-navy">{stat.value}</p>
              <p className="mt-1 text-sm text-gc-navy/55">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedServiceCard({ service }) {
  const [cardRef, visible] = useScrollReveal({ threshold: 0.1, rootMargin: '0px 0px -30px 0px' })

  return (
    <Link
      ref={cardRef}
      to={service.link}
      className={`service-card-reveal ${visible ? 'is-visible' : ''} group relative block overflow-hidden rounded-3xl bg-gc-navy shadow-xl shadow-gc-navy/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gc-blue/20`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,127,252,0.25),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gc-blue/20 blur-3xl" aria-hidden="true" />

      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:p-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-gc-blue" />
            Featured service
          </span>

          <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{service.title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            {service.description}
          </p>

          <span className={`${BTN_PRIMARY} mt-6 inline-flex`}>
            Explore service
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </span>
        </div>

        <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl border border-white/15 shadow-xl">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </Link>
  )
}

function ModernServiceCard({ service, index }) {
  const [cardRef, visible] = useScrollReveal({
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px',
  })

  return (
    <Link
      ref={cardRef}
      to={service.link}
      className={`service-card service-card-reveal delay-${index % 6} ${visible ? 'is-visible' : ''} group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(1,44,100,0.06)] hover:border-gc-blue/40 hover:shadow-[0_20px_40px_rgba(0,127,252,0.15)]`}
    >
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#070b19]">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gc-navy/40 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-gc-navy transition-colors duration-200 group-hover:text-gc-blue">
            {service.title}
          </h3>
          <span className="text-xs font-bold tracking-widest text-gc-navy/30">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-gc-navy/65">{service.description}</p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-sm font-semibold text-gc-blue">Explore service</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gc-blue/10 text-gc-blue transition-all duration-300 group-hover:translate-x-1 group-hover:bg-gc-blue group-hover:text-white">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}

function ProcessSection({ visible }) {
  return (
    <section className="border-t border-slate-200/70 bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className={`reveal ${visible ? 'is-visible' : ''} max-w-2xl`}>
          <p className="text-sm font-semibold uppercase tracking-wider text-gc-blue">How we work</p>
          <h2 className="mt-2 text-2xl font-bold text-gc-navy sm:text-3xl">
            A clear path from idea to launch
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gc-navy/60">
            Every engagement follows a structured process — so you always know what&apos;s happening
            and what comes next.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className={`reveal reveal-delay-${index + 1} ${visible ? 'is-visible' : ''} rounded-2xl border border-slate-200/80 bg-[#f7f9fc] p-6`}
            >
              <span className="text-3xl font-black text-gc-blue/25">{item.step}</span>
              <h3 className="mt-3 text-lg font-bold text-gc-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gc-navy/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesCTA() {
  return (
    <section className="bg-gc-navy py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Not sure which service fits your project?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Tell us about your goals and we&apos;ll recommend the right approach — no obligation,
          just honest guidance from our engineering team.
        </p>
        <Link to="/contact" className={`${BTN_PRIMARY} mt-8`}>
          Get a free consultation
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

function ExploreLinks() {
  return (
    <section className="border-t border-slate-200/70 bg-[#f7f9fc] py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gc-navy">Explore GlobalItSync</h2>
        <p className="mt-2 text-sm text-gc-navy/60">
          Jump to our core pages and specialized service offerings.
        </p>
        <nav className="mt-6 flex flex-wrap gap-2.5" aria-label="Related pages">
          {SERVICE_PAGE_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                link.path === '/services'
                  ? 'border-gc-blue bg-gc-blue text-white shadow-sm'
                  : 'border-slate-200/90 bg-white text-gc-navy/75 hover:border-gc-blue/30 hover:text-gc-blue'
              }`}
              aria-current={link.path === '/services' ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}

function ServicesPageLayout() {
  const [processRef, processVisible] = useScrollReveal()

  const featured = SERVICES.find((s) => s.featured) ?? SERVICES[0]
  const rest = SERVICES.filter((s) => s.id !== featured.id)

  return (
    <>
      <ServicesHero />

      <section className="relative bg-[#f7f9fc] pb-14 pt-2 lg:pb-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-8">
            <FeaturedServiceCard service={featured} />
          </div>

          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gc-blue">All services</p>
              <h2 className="mt-1 text-2xl font-bold text-gc-navy sm:text-3xl">What we deliver</h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm text-gc-navy/55 sm:block">
              Click any service to view capabilities, process, and FAQs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((service, index) => (
              <ModernServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <div ref={processRef}>
        <ProcessSection visible={processVisible} />
      </div>

      <ServicesCTA />
      <ExploreLinks />
    </>
  )
}

function HomeServicesSection() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1, rootMargin: '0px' })

  return (
    <section id="services" className="services-section pt-12 pb-14 lg:pt-16 lg:pb-20">
      <div className="services-section-bg" aria-hidden="true">
        <div className="services-section-glow services-section-glow--right" />
        <div className="services-section-glow services-section-glow--left" />
        <div className="services-section-accent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'is-visible' : ''} max-w-2xl`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-gc-blue/20 bg-white/90 px-3 py-1 shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gc-blue shadow-[0_0_8px_rgba(0,127,252,0.6)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gc-navy">
              What We Do
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-gc-navy sm:text-4xl lg:text-5xl">
            Our{' '}
            <span className="bg-gradient-to-r from-gc-blue to-gc-navy bg-clip-text text-transparent">
              services
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gc-navy/65 sm:text-lg">
            End-to-end software development, AI automation, and cloud engineering designed to help
            your business innovate, scale, and lead.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className={BTN_PRIMARY}>
            View all services
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  const { pathname } = useLocation()
  const isPage = pathname === '/services'

  return isPage ? <ServicesPageLayout /> : <HomeServicesSection />
}
