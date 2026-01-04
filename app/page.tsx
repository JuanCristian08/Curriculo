"use client"

import { useEffect, useRef } from "react"
import { AnimatedStripes } from "@/components/animated-stripes"
import { Header } from "@/components/header"
import { Objective } from "@/components/objective"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = mainRef.current?.querySelectorAll(".reveal-section")
    sections?.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <AnimatedStripes />
      <main ref={mainRef} className="relative z-10">
        <Header />
        <Objective />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
