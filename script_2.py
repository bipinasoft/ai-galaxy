# Create additional key components for the AI Galaxy application

# AI Models Dashboard Component
model_dashboard = '''import React from 'react'
import { Brain, Activity, Zap, Database, CheckCircle, Clock } from 'lucide-react'
import { useAIStore } from '../../store/aiStore'

const ModelDashboard = () => {
  const { aiModels } = useAIStore()

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active':
        return <CheckCircle className="status-icon active" size={16} />
      case 'Training':
        return <Clock className="status-icon training" size={16} />
      default:
        return <Activity className="status-icon" size={16} />
    }
  }

  return (
    <section id="models" className="models-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">AI Model Universe</h2>
          <p className="section-subtitle">
            Explore our constellation of advanced AI models, each designed for specific tasks and optimized for performance
          </p>
        </div>

        <div className="models-grid">
          {aiModels.map((model) => (
            <div key={model.id} className="model-card">
              <div className="model-header">
                <div className="model-icon">
                  <Brain size={24} />
                </div>
                <div className="model-status">
                  {getStatusIcon(model.status)}
                  <span className={`status-text ${model.status.toLowerCase()}`}>
                    {model.status}
                  </span>
                </div>
              </div>

              <h3 className="model-name">{model.name}</h3>
              <p className="model-type">{model.type}</p>
              <p className="model-description">{model.description}</p>

              <div className="model-metrics">
                <div className="metric">
                  <Zap size={16} />
                  <span className="metric-label">Speed</span>
                  <span className="metric-value">{model.speed}</span>
                </div>
                <div className="metric">
                  <Activity size={16} />
                  <span className="metric-label">Accuracy</span>
                  <span className="metric-value">{model.accuracy}</span>
                </div>
                <div className="metric">
                  <Database size={16} />
                  <span className="metric-label">Parameters</span>
                  <span className="metric-value">{model.parameters}</span>
                </div>
              </div>

              <div className="model-actions">
                <button className="btn btn--primary btn--small">
                  Test Model
                </button>
                <button className="btn btn--outline btn--small">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModelDashboard'''

# Chat Interface Component
chat_interface = '''import React, { useState, useRef, useEffect } from 'react'
import { Send, X, Bot, User, Minimize2 } from 'lucide-react'
import { useAIStore } from '../../store/aiStore'

const ChatInterface = () => {
  const { 
    isChatOpen, 
    toggleChat, 
    currentBot, 
    setCurrentBot, 
    messages, 
    addMessage, 
    chatbotPersonalities 
  } = useAIStore()
  
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (!currentBot && chatbotPersonalities.length > 0) {
      setCurrentBot(chatbotPersonalities[0])
    }
  }, [currentBot, chatbotPersonalities, setCurrentBot])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    // Add user message
    addMessage({
      type: 'user',
      content: inputMessage,
      sender: 'user'
    })

    const userMsg = inputMessage
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        `I understand you're asking about "${userMsg}". As ${currentBot?.name}, I'm specialized in ${currentBot?.speciality}. Let me help you with that!`,
        `That's an excellent question about "${userMsg}". Based on my analysis and ${currentBot?.personality} approach, here's what I think...`,
        `Interesting perspective on "${userMsg}". My ${currentBot?.speciality} background suggests several approaches to this challenge.`,
        `Thanks for bringing up "${userMsg}". This aligns perfectly with my expertise in ${currentBot?.speciality}. Here's my recommendation...`
      ]
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      
      addMessage({
        type: 'bot',
        content: randomResponse,
        sender: currentBot?.name || 'AI Assistant',
        avatar: currentBot?.avatar || '🤖'
      })
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isChatOpen) return null

  return (
    <div className="chat-interface">
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-bot-info">
            <div className="bot-avatar">{currentBot?.avatar}</div>
            <div className="bot-details">
              <h4 className="bot-name">{currentBot?.name}</h4>
              <p className="bot-specialty">{currentBot?.speciality}</p>
            </div>
          </div>
          <div className="chat-controls">
            <button className="chat-control-btn">
              <Minimize2 size={16} />
            </button>
            <button className="chat-control-btn" onClick={toggleChat}>
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="bot-selector">
          {chatbotPersonalities.map((bot) => (
            <button
              key={bot.id}
              className={`bot-option ${currentBot?.id === bot.id ? 'active' : ''}`}
              onClick={() => setCurrentBot(bot)}
            >
              <span className="bot-emoji">{bot.avatar}</span>
              <span className="bot-option-name">{bot.name}</span>
            </button>
          ))}
        </div>

        <div className="chat-messages">
          {messages.length === 0 && (
            <div className="welcome-message">
              <div className="welcome-avatar">{currentBot?.avatar}</div>
              <div className="welcome-text">
                <h4>Hi! I'm {currentBot?.name}</h4>
                <p>{currentBot?.personality}</p>
                <p>I specialize in {currentBot?.speciality}. How can I help you today?</p>
              </div>
            </div>
          )}
          
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.type}`}>
              <div className="message-avatar">
                {message.type === 'user' ? (
                  <User size={16} />
                ) : (
                  <span>{message.avatar}</span>
                )}
              </div>
              <div className="message-content">
                <div className="message-sender">{message.sender}</div>
                <div className="message-text">{message.content}</div>
                <div className="message-time">
                  {message.timestamp?.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot typing">
              <div className="message-avatar">
                <span>{currentBot?.avatar}</span>
              </div>
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-container">
          <div className="chat-input-wrapper">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Ask ${currentBot?.name} anything...`}
              className="chat-input"
              rows={1}
            />
            <button 
              onClick={handleSendMessage}
              className="send-button"
              disabled={!inputMessage.trim()}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInterface'''

# Training Dashboard Component
training_dashboard = '''import React, { useEffect, useRef } from 'react'
import { Activity, TrendingUp, Clock, Server, Cpu, BarChart3 } from 'lucide-react'
import { useAIStore } from '../../store/aiStore'

const TrainingDashboard = () => {
  const { trainingModels } = useAIStore()
  const chartRef = useRef(null)

  useEffect(() => {
    // Initialize Chart.js if available
    if (typeof Chart !== 'undefined' && chartRef.current) {
      const ctx = chartRef.current.getContext('2d')
      
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({length: 50}, (_, i) => `Epoch ${i + 1}`),
          datasets: [{
            label: 'Training Loss',
            data: Array.from({length: 50}, (_, i) => Math.max(0.01, 0.5 * Math.exp(-i / 15) + Math.random() * 0.1)),
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4
          }, {
            label: 'Validation Loss',
            data: Array.from({length: 50}, (_, i) => Math.max(0.02, 0.6 * Math.exp(-i / 18) + Math.random() * 0.12)),
            borderColor: 'rgb(147, 51, 234)',
            backgroundColor: 'rgba(147, 51, 234, 0.1)',
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: '#e2e8f0'
              }
            }
          },
          scales: {
            x: {
              ticks: { color: '#94a3b8' },
              grid: { color: 'rgba(148, 163, 184, 0.1)' }
            },
            y: {
              ticks: { color: '#94a3b8' },
              grid: { color: 'rgba(148, 163, 184, 0.1)' }
            }
          }
        }
      })
    }
  }, [])

  const getProgressColor = (progress) => {
    if (progress === 100) return 'var(--success-color)'
    if (progress > 70) return 'var(--warning-color)'
    return 'var(--primary-color)'
  }

  return (
    <section id="training" className="training-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Model Training Observatory</h2>
          <p className="section-subtitle">
            Monitor real-time training progress, performance metrics, and resource utilization across all AI models
          </p>
        </div>

        <div className="training-overview">
          <div className="training-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <Activity size={24} />
              </div>
              <div className="stat-info">
                <h3>Active Training</h3>
                <div className="stat-value">3</div>
                <div className="stat-change positive">+2 this week</div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Server size={24} />
              </div>
              <div className="stat-info">
                <h3>GPU Utilization</h3>
                <div className="stat-value">87%</div>
                <div className="stat-change neutral">Optimal range</div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <TrendingUp size={24} />
              </div>
              <div className="stat-info">
                <h3>Avg. Accuracy</h3>
                <div className="stat-value">95.2%</div>
                <div className="stat-change positive">+2.1% improvement</div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Clock size={24} />
              </div>
              <div className="stat-info">
                <h3>Est. Completion</h3>
                <div className="stat-value">4.5h</div>
                <div className="stat-change neutral">2 models remaining</div>
              </div>
            </div>
          </div>
        </div>

        <div className="training-content">
          <div className="training-models">
            <h3>Active Training Sessions</h3>
            <div className="models-list">
              {trainingModels.map((model) => (
                <div key={model.id} className="training-model-card">
                  <div className="model-info">
                    <h4 className="model-name">{model.name}</h4>
                    <div className="model-progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ 
                          width: `${model.progress}%`,
                          backgroundColor: getProgressColor(model.progress)
                        }}
                      />
                    </div>
                    <div className="progress-text">{model.progress}% Complete</div>
                  </div>
                  
                  <div className="model-metrics">
                    <div className="metric">
                      <span className="metric-label">Epoch</span>
                      <span className="metric-value">{model.epoch}</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Loss</span>
                      <span className="metric-value">{model.loss}</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Accuracy</span>
                      <span className="metric-value">{model.accuracy}%</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">ETA</span>
                      <span className="metric-value">{model.timeRemaining}</span>
                    </div>
                  </div>
                  
                  <div className="model-status">
                    <span className={`status-badge ${model.status.toLowerCase()}`}>
                      {model.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="training-chart">
            <h3>Training Loss Over Time</h3>
            <div className="chart-container">
              <canvas ref={chartRef}></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrainingDashboard'''

# Services Showcase Component
services_showcase = '''import React from 'react'
import { 
  MessageSquare, 
  Brain, 
  TrendingUp, 
  Eye, 
  FileText, 
  Database,
  ExternalLink,
  Play
} from 'lucide-react'

const ServicesShowcase = () => {
  const services = [
    {
      title: "AI Chatbot Development",
      description: "Custom conversational AI solutions with advanced NLP capabilities",
      features: ["Multi-language support", "Context awareness", "Integration APIs", "Custom training"],
      icon: MessageSquare,
      demoAvailable: true,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Model Training Platform", 
      description: "End-to-end machine learning model training with real-time monitoring",
      features: ["AutoML capabilities", "Hyperparameter tuning", "Performance tracking", "Cloud deployment"],
      icon: Brain,
      demoAvailable: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced forecasting and trend analysis powered by AI",
      features: ["Time series forecasting", "Anomaly detection", "Risk assessment", "Business intelligence"],
      icon: TrendingUp,
      demoAvailable: true,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Computer Vision API",
      description: "Powerful image and video analysis capabilities",
      features: ["Object detection", "Facial recognition", "OCR technology", "Video analytics"],
      icon: Eye,
      demoAvailable: true,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Natural Language Processing",
      description: "Comprehensive text analysis and language understanding",
      features: ["Sentiment analysis", "Entity extraction", "Language translation", "Text summarization"],
      icon: FileText,
      demoAvailable: true,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Data Processing Pipeline",
      description: "Automated data cleaning, transformation, and analysis workflows",
      features: ["Real-time processing", "Data validation", "ETL operations", "Quality monitoring"],
      icon: Database,
      demoAvailable: true,
      gradient: "from-teal-500 to-blue-500"
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">AI Services Constellation</h2>
          <p className="section-subtitle">
            Comprehensive AI solutions designed to transform your business operations and unlock new possibilities
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon
            
            return (
              <div key={index} className="service-card">
                <div className={`service-icon bg-gradient-to-r ${service.gradient}`}>
                  <IconComponent size={28} />
                </div>
                
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="service-feature">
                        <span className="feature-bullet">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-actions">
                  {service.demoAvailable && (
                    <button className="btn btn--primary btn--small">
                      <Play size={16} />
                      <span>Try Demo</span>
                    </button>
                  )}
                  <button className="btn btn--outline btn--small">
                    <ExternalLink size={16} />
                    <span>Learn More</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesShowcase'''

# Save the components
with open('src/components/AIModels/ModelDashboard.jsx', 'w') as f:
    f.write(model_dashboard)
    
with open('src/components/Chatbot/ChatInterface.jsx', 'w') as f:
    f.write(chat_interface)
    
with open('src/components/Training/TrainingDashboard.jsx', 'w') as f:
    f.write(training_dashboard)
    
with open('src/components/Services/ServicesShowcase.jsx', 'w') as f:
    f.write(services_showcase)

print("✅ Additional key components created!")
print("Files created:")
print("  - src/components/AIModels/ModelDashboard.jsx")
print("  - src/components/Chatbot/ChatInterface.jsx")
print("  - src/components/Training/TrainingDashboard.jsx")
print("  - src/components/Services/ServicesShowcase.jsx")