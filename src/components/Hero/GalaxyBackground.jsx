import React, { useEffect, useRef } from 'react'

const GalaxyBackground = () => {
  const canvasRef = useRef(null)
  const starsRef = useRef([])
  const particlesRef = useRef([])
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    // Initialize stars
    const initStars = () => {
      starsRef.current = []
      for (let i = 0; i < 200; i++) {
        starsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2,
          opacity: Math.random(),
          twinkleSpeed: Math.random() * 0.02 + 0.01
        })
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          hue: Math.random() * 60 + 200 // Blue to purple range
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(6, 10, 23, 0.1)'
      ctx.fillRect(0, 0, width, height)

      // Draw stars
      starsRef.current.forEach(star => {
        star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.01
        star.opacity = Math.max(0.1, Math.min(1, star.opacity))
        
        ctx.save()
        ctx.globalAlpha = star.opacity
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      // Draw particles
      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around screen
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = `hsl(${particle.hue}, 70%, 60%)`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      initStars()
      initParticles()
    }

    // Initialize and start animation
    initStars()
    initParticles()
    animate()

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="galaxy-background">
      <canvas ref={canvasRef} className="galaxy-canvas" />
      <div className="nebula-gradient" />
      <div className="cosmic-dust" />
    </div>
  )
}

export default GalaxyBackground