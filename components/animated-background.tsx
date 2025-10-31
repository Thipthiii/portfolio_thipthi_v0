"use client"

import { useEffect, useRef } from "react"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  duration: number
  type: "cloud" | "web"
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create floating elements
    const elements: FloatingElement[] = []
    for (let i = 0; i < 8; i++) {
      elements.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 20 + Math.random() * 40,
        duration: 3 + Math.random() * 4,
        type: Math.random() > 0.5 ? "cloud" : "web",
      })
    }

    let animationFrameId: number

    const animate = (time: number) => {
      // Clear canvas
      ctx.fillStyle = "rgba(255, 255, 255, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const isDark = document.documentElement.classList.contains("dark")

      elements.forEach((el) => {
        const t = (time / 1000) % el.duration
        const progress = t / el.duration

        // Bounce effect
        const bounceAmount = Math.sin(progress * Math.PI * 2) * 30
        const y = el.y + bounceAmount

        // Semi-transparent color
        if (el.type === "cloud") {
          ctx.fillStyle = isDark ? "rgba(100, 150, 255, 0.1)" : "rgba(59, 130, 246, 0.08)"

          // Draw cloud shape
          ctx.beginPath()
          ctx.arc(el.x, y, el.size * 0.4, 0, Math.PI * 2)
          ctx.arc(el.x + el.size * 0.3, y - el.size * 0.2, el.size * 0.35, 0, Math.PI * 2)
          ctx.arc(el.x + el.size * 0.6, y, el.size * 0.4, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Web/Globe symbol
          ctx.fillStyle = isDark ? "rgba(168, 85, 247, 0.1)" : "rgba(168, 85, 247, 0.08)"
          ctx.font = `${el.size}px Arial`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText("🌐", el.x, y)
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" style={{ background: "transparent" }} />
  )
}
