import React, { useState, useRef, useEffect } from 'react'
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

export default ChatInterface