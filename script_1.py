# Create React components and source files for the AI Galaxy application
import os

# Create main App component
app_jsx = '''import React from 'react'
import Header from './components/ui/Header'
import Hero from './components/Hero/Hero'
import AIModelsDashboard from './components/AIModels/ModelDashboard'
import ServicesShowcase from './components/Services/ServicesShowcase'
import TrainingDashboard from './components/Training/TrainingDashboard'
import ChatInterface from './components/Chatbot/ChatInterface'
import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/ui/Footer'
import { useAIStore } from './store/aiStore'
import './styles/globals.css'

function App() {
  const { isChatOpen } = useAIStore()

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <AIModelsDashboard />
        <ServicesShowcase />
        <TrainingDashboard />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
      {isChatOpen && <ChatInterface />}
    </div>
  )
}

export default App'''

# Create main.jsx entry point
main_jsx = '''import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)'''

# Create Zustand store for state management
ai_store = '''import { create } from 'zustand'

export const useAIStore = create((set, get) => ({
  // Chat state
  isChatOpen: false,
  currentBot: null,
  messages: [],
  
  // Training state
  trainingModels: [
    {
      id: 1,
      name: "Galaxy GPT",
      progress: 87,
      epoch: "45/50",
      loss: 0.023,
      accuracy: 98.5,
      timeRemaining: "2h 15m",
      status: "Training"
    },
    {
      id: 2,
      name: "Cosmic Vision",
      progress: 34,
      epoch: "17/50",
      loss: 0.156,
      accuracy: 89.2,
      timeRemaining: "6h 45m",
      status: "Training"
    },
    {
      id: 3,
      name: "Stellar Analytics",
      progress: 100,
      epoch: "50/50",
      loss: 0.012,
      accuracy: 94.2,
      timeRemaining: "Complete",
      status: "Deployed"
    }
  ],
  
  // AI Models
  aiModels: [
    {
      id: 1,
      name: "Galaxy GPT",
      type: "Language Model",
      accuracy: "98.5%",
      speed: "2.1s",
      status: "Active",
      description: "Advanced language model optimized for conversational AI and text generation",
      parameters: "175B",
      trainingData: "2.5TB"
    },
    {
      id: 2,
      name: "Cosmic Vision",
      type: "Computer Vision", 
      accuracy: "96.8%",
      speed: "0.8s",
      status: "Training",
      description: "State-of-the-art image analysis and object recognition system",
      parameters: "22B",
      trainingData: "1.8TB"
    },
    {
      id: 3,
      name: "Stellar Analytics",
      type: "Predictive Model",
      accuracy: "94.2%",
      speed: "1.5s",
      status: "Active",
      description: "Advanced predictive analytics for business intelligence and forecasting",
      parameters: "45B",
      trainingData: "3.2TB"
    },
    {
      id: 4,
      name: "Nebula NLP",
      type: "Natural Language",
      accuracy: "97.3%",
      speed: "1.2s",
      status: "Active",
      description: "Sophisticated natural language processing for sentiment and entity analysis",
      parameters: "88B",
      trainingData: "2.1TB"
    }
  ],
  
  // Chatbot personalities
  chatbotPersonalities: [
    {
      id: 1,
      name: "Assistant Alpha",
      personality: "Professional and efficient",
      speciality: "Business and productivity",
      avatar: "🤖"
    },
    {
      id: 2,
      name: "Creative Cosmos",
      personality: "Imaginative and artistic",
      speciality: "Creative writing and brainstorming", 
      avatar: "🎨"
    },
    {
      id: 3,
      name: "Tech Titan",
      personality: "Technical and precise",
      speciality: "Programming and technical support",
      avatar: "💻"
    },
    {
      id: 4,
      name: "Data Detective",
      personality: "Analytical and thorough",
      speciality: "Data analysis and research",
      avatar: "🔍"
    }
  ],

  // Actions
  toggleChat: () => set((state) => ({ isChatOpen: !state.isChatOpen })),
  
  setCurrentBot: (bot) => set({ currentBot: bot }),
  
  addMessage: (message) => set((state) => ({
    messages: [...state.messages, {
      id: Date.now(),
      ...message,
      timestamp: new Date()
    }]
  })),
  
  clearMessages: () => set({ messages: [] }),
  
  updateTraining: (modelId, updates) => set((state) => ({
    trainingModels: state.trainingModels.map(model =>
      model.id === modelId ? { ...model, ...updates } : model
    )
  })),
}))'''

# Create Header component
header_component = '''import React, { useState, useEffect } from 'react'
import { Menu, X, MessageSquare } from 'lucide-react'
import { useAIStore } from '../../store/aiStore'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toggleChat } = useAIStore()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="nav-brand">
          <div className="brand-icon">⭐</div>
          <span className="brand-text">AI Galaxy</span>
        </div>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href="#models" onClick={(e) => { e.preventDefault(); scrollToSection('models'); }}>AI Models</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
          <a href="#training" onClick={(e) => { e.preventDefault(); scrollToSection('training'); }}>Training</a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Pricing</a>
        </div>
        
        <div className="nav-actions">
          <button className="btn btn--primary chat-btn" onClick={toggleChat}>
            <MessageSquare size={18} />
            <span>Chat</span>
          </button>
          
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header'''

# Create Hero component with galaxy background
hero_component = '''import React, { useEffect, useRef } from 'react'
import { Rocket, Sparkles, Zap } from 'lucide-react'
import GalaxyBackground from './GalaxyBackground'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <GalaxyBackground />
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="gradient-text">AI Galaxy</span>
          </h1>
          <p className="hero-subtitle">
            Explore the Universe of Artificial Intelligence
          </p>
          <p className="hero-description">
            Advanced AI platform with real-time model training, intelligent chatbots, 
            and enterprise-grade solutions that push the boundaries of what's possible.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn--primary btn--large">
              <Rocket size={20} />
              <span>Start Your Journey</span>
            </button>
            <button className="btn btn--secondary btn--large">
              <Sparkles size={20} />
              <span>Explore Models</span>
            </button>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">2.4M+</div>
            <div className="stat-label">AI Requests</div>
          </div>
          <div className="stat">
            <div className="stat-number">99.7%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat">
            <div className="stat-number">15K+</div>
            <div className="stat-label">Active Users</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero'''

# Create Galaxy Background component
galaxy_background = '''import React, { useEffect, useRef } from 'react'

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

export default GalaxyBackground'''

# Save React components
os.makedirs('src', exist_ok=True)
os.makedirs('src/components', exist_ok=True)
os.makedirs('src/components/ui', exist_ok=True)
os.makedirs('src/components/Hero', exist_ok=True)
os.makedirs('src/components/AIModels', exist_ok=True)
os.makedirs('src/components/Services', exist_ok=True)
os.makedirs('src/components/Training', exist_ok=True)
os.makedirs('src/components/Chatbot', exist_ok=True)
os.makedirs('src/components/Pricing', exist_ok=True)
os.makedirs('src/components/Testimonials', exist_ok=True)
os.makedirs('src/store', exist_ok=True)
os.makedirs('src/styles', exist_ok=True)

# helper: remove legacy .js duplicate if present
def remove_js_duplicate(path_without_ext):
  js_path = f"{path_without_ext}.js"
  try:
    if os.path.exists(js_path):
      os.remove(js_path)
      print(f"Removed legacy file: {js_path}")
  except Exception as e:
    print(f"Failed to remove {js_path}: {e}")

# write files, cleaning up old .js duplicates first
remove_js_duplicate('src/App')
with open('src/App.jsx', 'w', encoding='utf-8') as f:
  f.write(app_jsx)

remove_js_duplicate('src/main')
with open('src/main.jsx', 'w', encoding='utf-8') as f:
  f.write(main_jsx)

remove_js_duplicate('src/store/aiStore')
with open('src/store/aiStore.js', 'w', encoding='utf-8') as f:
  f.write(ai_store)

remove_js_duplicate('src/components/ui/Header')
with open('src/components/ui/Header.jsx', 'w', encoding='utf-8') as f:
  f.write(header_component)

remove_js_duplicate('src/components/Hero/Hero')
with open('src/components/Hero/Hero.jsx', 'w', encoding='utf-8') as f:
  f.write(hero_component)

remove_js_duplicate('src/components/Hero/GalaxyBackground')
with open('src/components/Hero/GalaxyBackground.jsx', 'w', encoding='utf-8') as f:
  f.write(galaxy_background)

print("✅ Core React components created!")
print("Files created:")
print("  - src/App.jsx")
print("  - src/main.jsx") 
print("  - src/store/aiStore.js")
print("  - src/components/ui/Header.jsx")
print("  - src/components/Hero/Hero.jsx")
print("  - src/components/Hero/GalaxyBackground.jsx")