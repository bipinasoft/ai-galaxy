import React, { useState, useEffect } from 'react'
import { Menu, X, MessageSquare } from 'lucide-react'
import { useAIStore } from '../../store/aiStore'
import Logo from '../../assets/logo.svg'

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
          <img src={Logo} alt="AI Galaxy" className="brand-logo" style={{height: 36}} />
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

export default Header