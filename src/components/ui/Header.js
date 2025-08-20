import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <div className="nav__brand">
          <h2>AI Galaxy</h2>
        </div>

        <ul className={`nav__menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav__link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#features" className="nav__link" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
          <li><a href="#services" className="nav__link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
          <li><a href="#pricing" className="nav__link" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Pricing</a></li>
          <li><a href="#blog" className="nav__link" onClick={(e) => { e.preventDefault(); scrollToSection('blog'); }}>Blog</a></li>
          <li><a href="#contact" className="nav__link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>

        <div className="nav__actions">
          <button className="btn btn--primary">Get Started</button>
          <button 
            className={`nav__toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
