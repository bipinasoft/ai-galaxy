import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>AI Galaxy</h3>
            <p>Unlocking the future of intelligence with advanced AI solutions.</p>
            <div className="footer__social">
              <a href="#" aria-label="GitHub"><Github size={24} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
              <a href="#" aria-label="Email"><Mail size={24} /></a>
            </div>
          </div>

          <div className="footer__section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#">API Documentation</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2025 AI Galaxy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
