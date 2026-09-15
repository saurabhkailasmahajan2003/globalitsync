import { Link } from 'react-router-dom'

const PILL_CARDS = [
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    subtitle: 'Scalable • Secure • Reliable',
    offset: 'mr-24',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    id: 'security',
    title: 'Cyber Security',
    subtitle: 'Protect • Detect • Respond',
    offset: 'mr-6',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 'software',
    title: 'Custom Software',
    subtitle: 'Build • Innovate • Grow',
    offset: '-mr-4',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    subtitle: 'Automate • Optimize • Evolve',
    offset: 'mr-12',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
]

export default function HeroFloatingCards() {
  return (
    <div className="relative w-full flex flex-col items-end gap-6 z-10">
      {PILL_CARDS.map((card) => (
        <Link
          key={card.id}
          to="/services"
          className={`flex items-center gap-4 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(89,37,173,0.15)] ${card.offset}`}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#5925ad]/10 text-[#5925ad]">
            {card.icon}
          </div>
          <div>
            <p className="text-sm font-bold text-[#0e1b26]">{card.title}</p>
            <p className="text-[0.65rem] uppercase tracking-wider text-[#0e1b26]/50 mt-0.5 font-semibold">
              {card.subtitle}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
