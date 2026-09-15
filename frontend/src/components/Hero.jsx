import { Link } from 'react-router-dom'
import HeroFloatingCards from './HeroFloatingCards.jsx'

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-white flex items-center">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 w-full h-full lg:w-[70%] lg:left-[30%]">
        {/* Mobile Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center lg:hidden opacity-40" 
          style={{ backgroundImage: 'url(/heroBgForMobileView.png)' }}
        ></div>
        
        {/* Desktop Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center hidden lg:block" 
          style={{ backgroundImage: 'url(/image.png)' }}
        ></div>
        
        {/* Navy Overlay (Adjusted for mobile readability) */}
        <div className="absolute inset-0 bg-white/70 lg:bg-[#0e1b26]/50 mix-blend-multiply lg:mix-blend-normal lg:hidden"></div>
        <div className="absolute inset-0 hidden lg:block bg-[#0e1b26]/50 mix-blend-multiply"></div>
        
        {/* Purple Glow Accent (bottom right) */}
        <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-[#5925ad] blur-[120px] opacity-70 pointer-events-none"></div>
      </div>

      {/* SVG Curve Mask (White) - Creates the sweeping diagonal split on desktop */}
      <svg 
        className="absolute top-0 left-0 h-full w-[65%] hidden lg:block z-0" 
        preserveAspectRatio="none" 
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <path d="M0,0 L85,0 Q70,50 100,100 L0,100 Z" fill="#ffffff" />
      </svg>

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pt-10 lg:pb-32 flex flex-col lg:flex-row items-center">
        
        {/* Left Side: Copy */}
        <div className="w-full lg:w-[45%] xl:w-[45%] text-center lg:text-left pt-12 lg:pt-0">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5925ad]">
            <span className="h-[1px] w-8 bg-[#5925ad]"></span>
            Innovation / Technology / Impact
          </div>
          
          <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-[#0e1b26] sm:text-5xl lg:text-5xl xl:text-[3.5rem]">
            Turning Ideas Into <br className="hidden lg:block" />
            <span className="text-[#5925ad]">Powerful Solutions</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#0e1b26]/80 sm:text-lg lg:mx-0">
            We craft scalable, secure, and high-performance software that helps businesses
            innovate, grow, and lead in the digital age.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link to="/services" className="inline-flex items-center justify-center rounded-full bg-[#5925ad] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0e1b26] hover:shadow-lg hover:shadow-[#5925ad]/20">
              Explore Solutions 
              <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#0e1b26] transition hover:text-[#5925ad]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#0e1b26]/10 text-[#5925ad] bg-white transition hover:border-[#5925ad]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              Start your project
            </Link>
          </div>
          
          <div className="mt-12">
            <Link to="/project-work" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0e1b26]/50 hover:text-[#5925ad] transition uppercase tracking-wider">
              View Our Work
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Side: Floating Pill Cards */}
        <div className="w-full lg:w-[45%] mt-16 lg:mt-0 relative hidden lg:flex items-center justify-end h-[500px]">
          <HeroFloatingCards />
        </div>
      </div>
    </section>
  )
}
