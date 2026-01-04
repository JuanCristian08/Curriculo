"use client"

export function Skills() {
  const hardSkills = [
    "Dart",
    "Flutter",
    "Git",
    "HTML",
    "CSS",
    "Firebase",
    "JavaScript",
    "Angular",
    "Node.js",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "MySQL",
    "NoSQL",
    "SQLite",
    "Bootstrap",
    "TypeScript",
    "React",
  ]

  const softSkills = [
    "Proatividade",
    "Organização",
    "Trabalho em equipe",
    "Comunicação",
    "Resolução de problemas",
    "Adaptabilidade",
    "Criatividade",
    "Liderança",
    "Empatia",
    "Pensamento crítico",
    "Gestão do tempo",
    "Foco em resultados",
    "Aprendizado contínuo",
    "Colaboração",
    "Inovação",
    "Empreendedorismo",
  ]

  return (
    <section className="reveal-section opacity-0 px-6 py-20 max-w-6xl mx-auto">
      <div className="space-y-16">
        {/* Hard Skills */}
        <div className="space-y-8">
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/40 font-mono">Hard Skills</h2>

          <div className="flex flex-wrap gap-3">
            {hardSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative px-5 py-3 bg-white/5 text-white/80 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-default"
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg blur-md transition-all duration-300" />
                <span className="relative font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-8">
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/40 font-mono">Soft Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white/5 text-white/80 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center cursor-default"
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg blur-lg transition-all duration-300" />
                <span className="relative text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
