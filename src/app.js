// AI Galaxy Application JavaScript

// Application data
const appData = {
  platform: {
    name: "AI Galaxy",
    tagline: "Explore the Universe of Artificial Intelligence",
    description: "Advanced AI platform with real-time model training, intelligent chatbots, and enterprise-grade solutions"
  },
  aiModels: [
    {
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
  chatbotPersonalities: [
    {
      name: "Assistant Alpha",
      personality: "Professional and efficient",
      speciality: "Business and productivity",
      avatar: "🤖"
    },
    {
      name: "Creative Cosmos",
      personality: "Imaginative and artistic",
      speciality: "Creative writing and brainstorming",
      avatar: "🎨"
    },
    {
      name: "Tech Titan",
      personality: "Technical and precise",
      speciality: "Programming and technical support",
      avatar: "💻"
    },
    {
      name: "Data Detective",
      personality: "Analytical and thorough",
      speciality: "Data analysis and research",
      avatar: "🔍"
    }
  ],
  services: [
    {
      title: "AI Chatbot Development",
      description: "Custom conversational AI solutions with advanced NLP capabilities",
      features: ["Multi-language support", "Context awareness", "Integration APIs", "Custom training"],
      icon: "fas fa-comments",
      demoAvailable: true
    },
    {
      title: "Model Training Platform",
      description: "End-to-end machine learning model training with real-time monitoring",
      features: ["AutoML capabilities", "Hyperparameter tuning", "Performance tracking", "Cloud deployment"],
      icon: "fas fa-brain",
      demoAvailable: true
    },
    {
      title: "Predictive Analytics",
      description: "Advanced forecasting and trend analysis powered by AI",
      features: ["Time series forecasting", "Anomaly detection", "Risk assessment", "Business intelligence"],
      icon: "fas fa-chart-line",
      demoAvailable: true
    },
    {
      title: "Computer Vision API",
      description: "Powerful image and video analysis capabilities",
      features: ["Object detection", "Facial recognition", "OCR technology", "Video analytics"],
      icon: "fas fa-eye",
      demoAvailable: true
    },
    {
      title: "Natural Language Processing",
      description: "Comprehensive text analysis and language understanding",
      features: ["Sentiment analysis", "Entity extraction", "Language translation", "Text summarization"],
      icon: "fas fa-file-text",
      demoAvailable: true
    },
    {
      title: "Data Processing Pipeline",
      description: "Automated data cleaning, transformation, and analysis workflows",
      features: ["Real-time processing", "Data validation", "ETL operations", "Quality monitoring"],
      icon: "fas fa-database",
      demoAvailable: true
    }
  ],
  trainingMetrics: [
    {
      modelName: "Galaxy GPT",
      progress: 87,
      epoch: "45/50",
      loss: 0.023,
      accuracy: 98.5,
      timeRemaining: "2h 15m",
      status: "Training"
    },
    {
      modelName: "Cosmic Vision", 
      progress: 34,
      epoch: "17/50",
      loss: 0.156,
      accuracy: 89.2,
      timeRemaining: "6h 45m",
      status: "Training"
    },
    {
      modelName: "Stellar Analytics",
      progress: 100,
      epoch: "50/50", 
      loss: 0.012,
      accuracy: 94.2,
      timeRemaining: "Complete",
      status: "Deployed"
    }
  ],
  analytics: {
    totalRequests: "2.4M",
    activeModels: 12,
    successRate: "99.7%",
    avgResponseTime: "1.2s",
    dailyUsers: "15,420",
    monthlyGrowth: "+23%"
  },
  pricingTiers: [
    {
      name: "Explorer",
      price: "$0",
      period: "month",
      description: "Perfect for testing our AI capabilities",
      features: [
        "1,000 API calls/month",
        "Basic chatbot access",
        "Community support",
        "2 AI models",
        "Standard response time"
      ],
      popular: false,
      cta: "Start Free"
    },
    {
      name: "Professional",
      price: "$99",
      period: "month", 
      description: "Ideal for growing businesses and developers",
      features: [
        "100,000 API calls/month",
        "Advanced AI models", 
        "Priority support",
        "Custom model training",
        "Analytics dashboard",
        "API integrations"
      ],
      popular: true,
      cta: "Start Pro Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited API calls",
        "Dedicated infrastructure",
        "24/7 premium support",
        "Custom AI development",
        "SLA guarantees",
        "Advanced security",
        "On-premise deployment"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ],
  testimonials: [
    {
      name: "Dr. Sarah Mitchell",
      company: "TechForward Inc.",
      role: "Chief AI Officer",
      text: "AI Galaxy transformed our development process. The model training platform is incredibly intuitive and powerful.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b048?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      company: "DataFlow Dynamics",
      role: "Lead Data Scientist", 
      text: "The predictive analytics capabilities have given us unprecedented insights into our business operations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Chen",
      company: "Innovation Labs",
      role: "VP of Engineering",
      text: "Outstanding platform with incredible accuracy and speed. The chatbot integration was seamless.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ]
};

// Global variables
let trainingChart, performanceChart;
let currentChatPersonality = 0;
let chatMessages = [];
let isTyping = false;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Show loading overlay
    showLoadingOverlay();
    
    // Initialize components
    setTimeout(() => {
        createGalaxyAnimation();
        setupNavigation();
        setupEventListeners();
        renderModels();
        renderServices();
        renderTrainingDashboard();
        renderPricing();
        renderTestimonials();
        initializeCharts();
        setupChatInterface();
        
        // Hide loading overlay
        hideLoadingOverlay();
        
        // Start animations
        startPeriodicAnimations();
    }, 1500);
}

// Loading overlay functions
function showLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    overlay.classList.remove('hidden');
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    overlay.classList.add('hidden');
}

// Galaxy animation functions
function createGalaxyAnimation() {
    createStars();
    createParticles();
    setupMouseInteraction();
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: twinkle ${Math.random() * 3 + 2}s infinite ease-in-out;
        `;
        starsContainer.appendChild(star);
    }
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(103, 126, 234, ${Math.random() * 0.8 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

function setupMouseInteraction() {
    const hero = document.querySelector('.hero');
    const particles = document.querySelectorAll('.particle');
    
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        particles.forEach((particle, index) => {
            const speed = (index % 3 + 1) * 0.5;
            const deltaX = (x - 0.5) * speed * 20;
            const deltaY = (y - 0.5) * speed * 20;
            
            particle.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });
    });
}

// Navigation functions
function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Event listeners setup
function setupEventListeners() {
    // Hero buttons
    document.getElementById('get-started').addEventListener('click', () => {
        document.getElementById('models').scrollIntoView({ behavior: 'smooth' });
    });
    
    document.getElementById('watch-demo').addEventListener('click', () => {
        showDemoModal();
    });
    
    // Contact form
    document.getElementById('contact-form').addEventListener('submit', handleContactForm);
    
    // Chat toggle
    document.getElementById('chat-toggle').addEventListener('click', toggleChat);
}

// Models rendering
function renderModels() {
    const modelsGrid = document.getElementById('models-grid');
    
    appData.aiModels.forEach(model => {
        const modelCard = document.createElement('div');
        modelCard.className = 'model-card';
        
        modelCard.innerHTML = `
            <div class="model-header">
                <div>
                    <div class="model-name">${model.name}</div>
                    <div class="model-type">${model.type}</div>
                </div>
                <div class="model-status ${model.status.toLowerCase()}">${model.status}</div>
            </div>
            <div class="model-description">${model.description}</div>
            <div class="model-metrics">
                <div class="metric-item">
                    <span class="metric-label">Accuracy</span>
                    <span class="metric-value">${model.accuracy}</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">Speed</span>
                    <span class="metric-value">${model.speed}</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">Parameters</span>
                    <span class="metric-value">${model.parameters}</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">Training Data</span>
                    <span class="metric-value">${model.trainingData}</span>
                </div>
            </div>
        `;
        
        modelsGrid.appendChild(modelCard);
    });
}

// Services rendering
function renderServices() {
    const servicesGrid = document.getElementById('services-grid');
    
    appData.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        const featuresHTML = service.features.map(feature => `<li>${feature}</li>`).join('');
        
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <div class="service-title">${service.title}</div>
            <div class="service-description">${service.description}</div>
            <ul class="service-features">
                ${featuresHTML}
            </ul>
            ${service.demoAvailable ? '<button class="demo-btn" onclick="showServiceDemo(\'' + service.title + '\')">Try Demo</button>' : ''}
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
}

// Training dashboard rendering
function renderTrainingDashboard() {
    const trainingCards = document.getElementById('training-cards');
    
    appData.trainingMetrics.forEach(metric => {
        const trainingCard = document.createElement('div');
        trainingCard.className = 'training-card';
        
        trainingCard.innerHTML = `
            <div class="training-header">
                <div class="training-model-name">${metric.modelName}</div>
                <div class="model-status ${metric.status.toLowerCase()}">${metric.status}</div>
            </div>
            <div class="training-progress-bar">
                <div class="progress-fill" style="width: ${metric.progress}%"></div>
            </div>
            <div class="training-details">
                <div class="training-detail">
                    <span>Progress:</span>
                    <strong>${metric.progress}%</strong>
                </div>
                <div class="training-detail">
                    <span>Epoch:</span>
                    <strong>${metric.epoch}</strong>
                </div>
                <div class="training-detail">
                    <span>Loss:</span>
                    <strong>${metric.loss}</strong>
                </div>
                <div class="training-detail">
                    <span>Accuracy:</span>
                    <strong>${metric.accuracy}%</strong>
                </div>
                <div class="training-detail">
                    <span>Time Remaining:</span>
                    <strong>${metric.timeRemaining}</strong>
                </div>
            </div>
        `;
        
        trainingCards.appendChild(trainingCard);
    });
}

// Pricing rendering
function renderPricing() {
    const pricingGrid = document.getElementById('pricing-grid');
    
    appData.pricingTiers.forEach(tier => {
        const pricingCard = document.createElement('div');
        pricingCard.className = `pricing-card ${tier.popular ? 'popular' : ''}`;
        
        const featuresHTML = tier.features.map(feature => `<li>${feature}</li>`).join('');
        const priceDisplay = tier.price === "Custom" ? tier.price : `${tier.price}<span>/${tier.period}</span>`;
        
        pricingCard.innerHTML = `
            <div class="pricing-name">${tier.name}</div>
            <div class="pricing-price">${priceDisplay}</div>
            <div class="pricing-description">${tier.description}</div>
            <ul class="pricing-features">
                ${featuresHTML}
            </ul>
            <button class="btn btn--primary btn--full-width" onclick="selectPlan('${tier.name}')">
                ${tier.cta}
            </button>
        `;
        
        pricingGrid.appendChild(pricingCard);
    });
}

// Testimonials rendering
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    
    appData.testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        
        const starsHTML = '★'.repeat(testimonial.rating);
        
        testimonialCard.innerHTML = `
            <div class="testimonial-text">"${testimonial.text}"</div>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="author-avatar">
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role} at ${testimonial.company}</p>
                </div>
            </div>
            <div class="testimonial-stars">${starsHTML}</div>
        `;
        
        testimonialsGrid.appendChild(testimonialCard);
    });
}

// Charts initialization
function initializeCharts() {
    initializeTrainingChart();
    initializePerformanceChart();
}

function initializeTrainingChart() {
    const ctx = document.getElementById('training-chart').getContext('2d');
    
    trainingChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: appData.trainingMetrics.map(m => m.modelName),
            datasets: [{
                data: appData.trainingMetrics.map(m => m.progress),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#ffffff',
                        padding: 20
                    }
                }
            }
        }
    });
}

function initializePerformanceChart() {
    const ctx = document.getElementById('performance-chart').getContext('2d');
    
    performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Model Accuracy',
                data: [85, 89, 92, 94, 96, 98],
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#ffffff' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                },
                y: {
                    ticks: { color: '#ffffff' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            }
        }
    });
}

// Chat interface functions
function setupChatInterface() {
    const chatSend = document.getElementById('chat-send');
    const chatInput = document.getElementById('chat-input');
    const chatClose = document.getElementById('chat-close');
    const chatMinimize = document.getElementById('chat-minimize');
    const personalitySelect = document.getElementById('chat-personality');
    
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    chatClose.addEventListener('click', closeChat);
    chatMinimize.addEventListener('click', minimizeChat);
    
    personalitySelect.addEventListener('change', (e) => {
        currentChatPersonality = parseInt(e.target.value);
        const personality = appData.chatbotPersonalities[currentChatPersonality];
        addBotMessage(`Hi! I'm ${personality.name}. I specialize in ${personality.speciality}. How can I help you?`);
    });
}

function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.classList.toggle('hidden');
}

function closeChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.classList.add('hidden');
}

function minimizeChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.classList.toggle('minimized');
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (message && !isTyping) {
        addUserMessage(message);
        input.value = '';
        
        // Simulate AI response
        setTimeout(() => {
            generateAIResponse(message);
        }, 1000 + Math.random() * 2000);
    }
}

function addUserMessage(message) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">👤</div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addBotMessage(message) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    
    const personality = appData.chatbotPersonalities[currentChatPersonality];
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${personality.avatar}</div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateAIResponse(userMessage) {
    isTyping = true;
    const personality = appData.chatbotPersonalities[currentChatPersonality];
    
    // Simple AI response generation based on keywords
    let response = "I understand you're interested in that topic. ";
    
    if (userMessage.toLowerCase().includes('model') || userMessage.toLowerCase().includes('ai')) {
        response = `As ${personality.name}, I can help you understand our AI models. We have ${appData.aiModels.length} powerful models including Galaxy GPT, Cosmic Vision, Stellar Analytics, and Nebula NLP. Each is designed for specific tasks and optimized for performance.`;
    } else if (userMessage.toLowerCase().includes('price') || userMessage.toLowerCase().includes('cost')) {
        response = `Our pricing is very competitive! We offer three tiers: Explorer (Free), Professional ($99/month), and Enterprise (Custom pricing). Each tier includes different features and API call limits. Would you like me to explain the differences?`;
    } else if (userMessage.toLowerCase().includes('training') || userMessage.toLowerCase().includes('learn')) {
        response = `Our model training platform is cutting-edge! We offer real-time monitoring, AutoML capabilities, and cloud deployment. You can track progress, adjust hyperparameters, and see performance metrics in real-time.`;
    } else if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
        response = `Hello! I'm ${personality.name}, your AI assistant specializing in ${personality.speciality}. I'm here to help you explore the universe of artificial intelligence. What would you like to know about our platform?`;
    } else {
        response = `That's a great question! As ${personality.name}, I focus on ${personality.speciality}. Our AI Galaxy platform offers comprehensive solutions including chatbots, model training, predictive analytics, computer vision, and NLP services. How can I assist you further?`;
    }
    
    // Simulate typing delay
    setTimeout(() => {
        addBotMessage(response);
        isTyping = false;
    }, 500 + Math.random() * 1500);
}

// Utility functions
function showDemoModal() {
    alert('Demo video would open here! This showcases AI Galaxy capabilities including model training, chatbot interactions, and analytics dashboards.');
}

function showServiceDemo(serviceName) {
    alert(`${serviceName} demo would launch here! This would show an interactive demonstration of the service capabilities.`);
}

function selectPlan(planName) {
    if (planName === 'Enterprise') {
        alert('Enterprise plan selected! Our sales team would contact you to discuss custom pricing and requirements.');
    } else {
        alert(`${planName} plan selected! You would be redirected to the signup process.`);
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! Our team will get back to you within 24 hours.');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function startPeriodicAnimations() {
    // Update training progress periodically
    setInterval(() => {
        updateTrainingProgress();
    }, 5000);
    
    // Create shooting stars occasionally
    setInterval(() => {
        createShootingStar();
    }, 10000);
    
    // Update charts data
    setInterval(() => {
        updateChartsData();
    }, 15000);
}

function updateTrainingProgress() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    progressBars.forEach((bar, index) => {
        if (appData.trainingMetrics[index] && appData.trainingMetrics[index].status === 'Training') {
            const currentProgress = parseInt(bar.style.width);
            const newProgress = Math.min(currentProgress + Math.random() * 2, 100);
            bar.style.width = newProgress + '%';
        }
    });
}

function createShootingStar() {
    const hero = document.querySelector('.hero');
    const star = document.createElement('div');
    
    star.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 0 6px 2px white;
        top: ${Math.random() * 50}%;
        left: -10px;
        animation: shootingStar 2s linear forwards;
        z-index: 1;
    `;
    
    hero.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, 2000);
}

function updateChartsData() {
    if (trainingChart && performanceChart) {
        // Update training chart
        trainingChart.data.datasets[0].data = appData.trainingMetrics.map(m => {
            return m.status === 'Training' ? Math.min(m.progress + Math.random() * 3, 100) : m.progress;
        });
        trainingChart.update('none');
        
        // Update performance chart
        const lastValue = performanceChart.data.datasets[0].data[performanceChart.data.datasets[0].data.length - 1];
        const newValue = Math.min(lastValue + Math.random() * 0.5, 99.9);
        
        performanceChart.data.datasets[0].data.push(newValue);
        performanceChart.data.labels.push('Week ' + (performanceChart.data.labels.length + 1));
        
        if (performanceChart.data.datasets[0].data.length > 10) {
            performanceChart.data.datasets[0].data.shift();
            performanceChart.data.labels.shift();
        }
        
        performanceChart.update('none');
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Performance optimization
window.addEventListener('load', () => {
    // Preload critical assets
    const criticalImages = document.querySelectorAll('img[data-critical]');
    criticalImages.forEach(img => {
        const newImg = new Image();
        newImg.src = img.dataset.src;
    });
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    // In production, you would send this to an error reporting service
});

// Service worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}