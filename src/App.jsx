import React from 'react'
import Header from './components/ui/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import AIModelsDashboard from './components/AIModels/ModelDashboard'
import ServicesShowcase from './components/Services/ServicesShowcase'
import TrainingDashboard from './components/Training/TrainingDashboard'
import ChatInterface from './components/Chatbot/ChatInterface'
import Pricing from './components/Pricing/Pricing.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Footer from './components/ui/Footer.jsx'
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

export default App