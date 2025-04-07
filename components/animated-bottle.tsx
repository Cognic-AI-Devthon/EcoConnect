"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBottle() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = window.innerWidth
    canvas.height = 500

    // Create bottle image
    const bottleImage = new Image()
    bottleImage.src = "/placeholder.svg?height=200&width=80"
    bottleImage.crossOrigin = "anonymous"

    // Create bubbles
    const bubbles: { x: number; y: number; radius: number; speed: number }[] = []
    for (let i = 0; i < 20; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        radius: 1 + Math.random() * 3,
        speed: 0.5 + Math.random() * 1.5,
      })
    }

    // Bottle position and movement
    let bottleX = canvas.width / 2
    let bottleY = canvas.height / 2
    let bottleAngle = 0
    let bottleDirection = 1
    const bottleSpeed = 0.5

    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw dark blue background
      ctx.fillStyle = "#001a33"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw light rays
      ctx.save()
      for (let i = 0; i < 5; i++) {
        const rayX = canvas.width * (0.2 + i * 0.15)
        ctx.beginPath()
        ctx.moveTo(rayX, 0)
        ctx.lineTo(rayX - 100, canvas.height)
        ctx.lineTo(rayX + 100, canvas.height)
        ctx.closePath()
        ctx.fillStyle = "rgba(255, 255, 255, 0.03)"
        ctx.fill()
      }
      ctx.restore()

      // Update and draw bubbles
      bubbles.forEach((bubble) => {
        bubble.y -= bubble.speed

        // Reset bubble if it goes off screen
        if (bubble.y < -bubble.radius * 2) {
          bubble.y = canvas.height + bubble.radius
          bubble.x = Math.random() * canvas.width
        }

        // Draw bubble
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
        ctx.fill()
      })

      // Update bottle position
      bottleAngle += 0.01 * bottleDirection
      if (bottleAngle > 0.2) bottleDirection = -1
      if (bottleAngle < -0.2) bottleDirection = 1

      bottleY += Math.sin(Date.now() / 1000) * 0.5

      // Draw bottle
      if (bottleImage.complete) {
        ctx.save()
        ctx.translate(bottleX, bottleY)
        ctx.rotate(bottleAngle)
        ctx.drawImage(bottleImage, -40, -100, 80, 200)
        ctx.restore()
      }

      requestAnimationFrame(animate)
    }

    // Start animation
    const animationId = requestAnimationFrame(animate)

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = 500
      bottleX = canvas.width / 2
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-[500px]" />
}

