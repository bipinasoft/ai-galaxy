import { create } from 'zustand'

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
}))