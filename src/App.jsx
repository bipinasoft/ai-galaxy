import React from 'react'
import Header from './components/ui/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import AIModelsDashboard from './components/AIModels/ModelDashboard.jsx'
import ServicesShowcase from './components/Services/ServicesShowcase.jsx'
import TrainingDashboard from './components/Training/TrainingDashboard.jsx'
import ChatInterface from './components/Chatbot/ChatInterface.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Footer from './components/ui/Footer.jsx'
import FAQ from './components/FAQ.jsx'
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
  <FAQ />
      </main>
      <Footer />
      {isChatOpen && <ChatInterface />}
    </div>
  )
}

export default App