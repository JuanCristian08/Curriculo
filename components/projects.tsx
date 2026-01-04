export function Projects() {
  return (
    <section className="reveal-section opacity-0 px-6 py-20 max-w-6xl mx-auto">
      <div className="space-y-12">
        <h2 className="text-sm uppercase tracking-[0.3em] text-white/40 font-mono">Projetos Relevantes</h2>

        <div className="border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <div className="p-8 md:p-12 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white">Laura Manicure Artist</h3>
              <span className="text-white/50 text-sm">2025</span>
            </div>

            <p className="text-xl text-white/70 leading-relaxed">
              Landing page profissional para serviços de manicure, com design responsivo e foco em conversão.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-3">
                <h4 className="text-white/50 text-sm uppercase tracking-wider">Recursos</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />
                    <span>Design responsivo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />
                    <span>Integração com WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />
                    <span>Galeria de trabalhos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />
                    <span>Foco em conversão</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-white/50 text-sm uppercase tracking-wider">Tecnologias</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS3", "JavaScript"].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 text-white/60 text-sm rounded-md border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
