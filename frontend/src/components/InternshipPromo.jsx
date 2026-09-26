import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function InternshipPromo() {
  const [ref, visible] = useScrollReveal({ threshold: 0.2 })

  return (
    <section className="relative overflow-hidden bg-gc-navy py-16 sm:py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[100px]" />
        <div className="absolute top-1/2 -right-20 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-purple-600/30 blur-[80px]" />
      </div>

      <div 
        ref={ref} 
        className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-violet-400 ring-1 ring-inset ring-white/20 mb-6 backdrop-blur-sm">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            GlobalItSync Academy
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Launch Your Tech Career With Real Experience
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-300">
            Join our premium internship programs in DevOps, Web Development, Cyber Security, and Data Science. Get mentored by industry experts and earn highly respected certifications.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/internship"
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm hover:from-violet-400 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:-translate-y-1 text-center"
            >
              Explore Programs
            </Link>
            <Link to="/internship" className="w-full sm:w-auto text-sm font-semibold leading-6 text-white flex items-center justify-center gap-2 group py-2">
              View Certificates <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
