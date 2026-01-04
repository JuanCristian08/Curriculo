"use client"

import { useEffect, useRef } from "react"

export function AnimatedStripes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const stripesRef = useRef<
    Array<{
      x: number
      y: number
      length: number
      angle: number
      velocity: number
      baseY: number
    }>
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStripes()
    }

    const initStripes = () => {
      stripesRef.current = []
      const numStripes = 30
      for (let i = 0; i < numStripes; i++) {
        stripesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: 100 + Math.random() * 200,
          angle: Math.random() * Math.PI * 2,
          velocity: 0.2 + Math.random() * 0.5,
          baseY: Math.random() * canvas.height,
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stripesRef.current.forEach((stripe) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - stripe.x
        const dy = mouseRef.current.y - stripe.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        // Apply mouse influence
        let offsetX = 0
        let offsetY = 0
        if (distance < maxDistance) {
          const influence = (1 - distance / maxDistance) * 30
          offsetX = (dx / distance) * influence
          offsetY = (dy / distance) * influence
        }

        // Update position
        stripe.y += Math.sin(Date.now() * 0.001 + stripe.x * 0.01) * stripe.velocity

        // Wrap around
        if (stripe.y > canvas.height + 100) {
          stripe.y = -100
        } else if (stripe.y < -100) {
          stripe.y = canvas.height + 100
        }

        // Draw stripe with glow
        ctx.save()
        ctx.translate(stripe.x + offsetX, stripe.y + offsetY)
        ctx.rotate(stripe.angle)

        // Glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = "rgba(255, 255, 255, 0.3)"

        // Main stripe
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(-stripe.length / 2, 0)
        ctx.lineTo(stripe.length / 2, 0)
        ctx.stroke()

        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" style={{ pointerEvents: "none" }} />
}
