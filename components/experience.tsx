export function Experience() {
  const experiences = [
    {
      title: "Desenvolvedor Front-end",
      company: "TOT Educação Corporativa",
      period: "Nov/2025 - Jan/2026",
      current: true,
      description: [
        "Desenvolvimento de cursos corporativos interativos",
        "React.js + TypeScript com boas práticas",
        "Animações com GSAP focadas em UX",
        "Uso avançado de React Hooks",
        "Layouts responsivos e acessíveis",
        "Refatoração e evolução de funcionalidades",
        "Colaboração com design e conteúdo",
      ],
      tools: ["React", "TypeScript", "GSAP", "VS Code", "Digital Ocean"],
    },
    {
      title: "Auxiliar Administrativo",
      company: "TosaTech",
      period: "Ago/2024 – Jan/2025",
      current: false,
      description: [
        "Atividades administrativas e suporte técnico",
        "Organização de documentos",
        "Atendimento ao cliente",
      ],
      tools: ["Excel", "OS", "Notas Fiscais", "Suporte Técnico", "Marketing"],
    },
  ]

  return (
    <section className="reveal-section opacity-0 px-6 py-20 max-w-6xl mx-auto">
      <div className="space-y-12">
        <h2 className="text-sm uppercase tracking-[0.3em] text-white/40 font-mono">Experiência Profissional</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative border border-white/10 rounded-lg p-8 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              {exp.current && (
                <div className="absolute top-8 right-8">
                  <span className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full border border-white/20">
                    Atual
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-white/50">
                    <span className="font-medium">{exp.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 text-white/70">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 text-white/60 text-sm rounded-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="pt-12 space-y-8">
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/40 font-mono">Formação Acadêmica</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Técnico em Desenvolvimento</h3>
              <p className="text-white/50">Entra21 • Concluído</p>
              <p className="text-white/40 text-sm mt-2">Formação técnica mobile e web</p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Técnico em Desenvolvimento</h3>
              <p className="text-white/50">+Devs2blu • Concluído</p>
              <p className="text-white/40 text-sm mt-2">Back-end Java + Front-end Angular</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
