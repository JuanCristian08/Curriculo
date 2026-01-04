"use client"

export function Header() {
  return (
    <header className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Profile Photo */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
            <img
              src="/images/1761718247826.jpeg"
              alt="Juan Cristian Kunz de Borba"
              className="relative w-40 h-40 rounded-full object-cover border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-transform duration-500 group-hover:scale-105"
              crossOrigin="anonymous"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in-up">
          Juan Cristian
          <br />
          <span className="text-white/80">Kunz de Borba</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/60 animate-fade-in-up animation-delay-200">
          Desenvolvedor Flutter & Web
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-white/50 text-sm md:text-base animate-fade-in-up animation-delay-400">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Blumenau, SC</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>(47) 99247-8107</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>juancristian0801@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  )
}
