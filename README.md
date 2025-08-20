# AI Galaxy - Advanced AI Platform

A cutting-edge AI platform built with React, Vite, and modern web technologies featuring:

🌌 **Animated Galaxy Background** - Immersive space-themed UI with particle effects
🤖 **AI Chatbot Integration** - Interactive AI assistants with multiple personalities  
🧠 **Model Training Dashboard** - Real-time AI model training and monitoring
📊 **Analytics & Visualization** - Advanced data visualization and metrics
🚀 **Enterprise Features** - Full-stack AI platform capabilities
🎨 **Modern UI/UX** - Professional design with smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/bipinasoft/ai-galaxy.git
cd ai-galaxy
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open browser to:**
```
http://localhost:3000
```

## 🏗️ Project Structure

```
ai-galaxy/
├── public/
│   └── galaxy-icon.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Button.jsx
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── GalaxyBackground.jsx
│   │   ├── AIModels/
│   │   │   ├── ModelDashboard.jsx
│   │   │   └── ModelCard.jsx
│   │   ├── Chatbot/
│   │   │   ├── ChatInterface.jsx
│   │   │   └── MessageBubble.jsx
│   │   ├── Training/
│   │   │   ├── TrainingDashboard.jsx
│   │   │   └── ProgressChart.jsx
│   │   └── Services/
│   │       └── ServicesShowcase.jsx
│   ├── hooks/
│   │   ├── useChat.js
│   │   ├── useAnimation.js
│   │   └── useTraining.js
│   ├── store/
│   │   └── aiStore.js
│   ├── utils/
│   │   ├── aiSimulator.js
│   │   └── animations.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
├── package.json
└── README.md
```

## 🎨 Features

### Galaxy Animation System
- **Starfield Background**: Animated stars with parallax scrolling
- **Particle System**: Interactive particles responding to mouse movement
- **Nebula Effects**: Gradient animations creating cosmic atmosphere
- **Shooting Stars**: Random shooting star animations

### AI Chatbot System
- **Multiple AI Personalities**: Different chatbot characters for various use cases
- **Real-time Messaging**: Smooth chat interface with typing indicators
- **Message History**: Persistent chat sessions with export capability
- **Rich Responses**: Markdown support and syntax highlighting

### Model Training Dashboard
- **Real-time Metrics**: Live training progress and performance monitoring
- **Interactive Charts**: Training loss, accuracy, and performance visualization
- **Model Management**: Deploy, pause, and configure AI models
- **Resource Monitoring**: GPU usage, memory, and compute analytics

### Enterprise Features
- **API Documentation**: Interactive API explorer and documentation
- **Integration Gallery**: Pre-built integrations with popular platforms
- **Security Dashboard**: Compliance, audit logs, and access controls
- **Billing Analytics**: Usage tracking and cost optimization

## 🛠️ Technology Stack

- **Frontend**: React 18 with Vite
- **Animations**: Framer Motion & React Spring
- **Charts**: Chart.js with React bindings
- **State**: Zustand for global state management
- **Styling**: Modern CSS with custom properties
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Building for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push to main branch** - GitHub Actions will automatically deploy
2. **Enable Pages** - Go to Settings > Pages > Source: GitHub Actions
3. **Visit your site** - Available at `https://bipinasoft.github.io/ai-galaxy/`

### Manual Deployment

```bash
# Build and deploy manually
npm run deploy
```

## ⚙️ Configuration

### Environment Variables
Create a `.env` file for local development:

```env
VITE_API_BASE_URL=https://api.aigalaxy.dev
VITE_OPENAI_API_KEY=your_openai_key_here
VITE_ANALYTICS_ID=your_analytics_id
```

### Vite Configuration
The `vite.config.js` is configured for:
- React with Hot Module Replacement
- GitHub Pages deployment
- Production optimization
- Development server on port 3000

## 🎯 Performance Optimization

- **Code Splitting**: Lazy loading for optimal bundle size
- **Image Optimization**: WebP support with fallbacks
- **Animation Performance**: GPU-accelerated CSS animations
- **Bundle Analysis**: Webpack bundle analyzer integration

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

### Code Structure Guidelines

- **Components**: Modular, reusable React components
- **Hooks**: Custom hooks for shared logic
- **Store**: Centralized state management with Zustand
- **Utils**: Helper functions and utilities
- **Styles**: CSS modules and global styles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

- **Documentation**: [Wiki](https://github.com/bipinasoft/ai-galaxy/wiki)
- **Issues**: [GitHub Issues](https://github.com/bipinasoft/ai-galaxy/issues)
- **Discussions**: [GitHub Discussions](https://github.com/bipinasoft/ai-galaxy/discussions)

---

Built with ❤️ by the AI Galaxy team | Powered by React & Vite
