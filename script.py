# Create comprehensive Vite React application files with proper structure
import os
import json

# Create Vite React project structure
project_files = {
    # Package.json with Vite configuration
    'package.json': {
        "name": "ai-galaxy-fullstack",
        "private": True,
        "version": "0.0.0",
        "type": "module",
        "scripts": {
            "dev": "vite",
            "build": "vite build",
            "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
            "preview": "vite preview",
            "deploy": "npm run build && gh-pages -d dist"
        },
        "dependencies": {
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "lucide-react": "^0.263.1",
            "framer-motion": "^10.16.4",
            "chart.js": "^4.4.0",
            "react-chartjs-2": "^5.2.0",
            "react-markdown": "^8.0.7",
            "prism-react-renderer": "^2.1.0",
            "zustand": "^4.4.1",
            "@react-spring/web": "^9.7.3"
        },
        "devDependencies": {
            "@types/react": "^18.2.15",
            "@types/react-dom": "^18.2.7",
            "@vitejs/plugin-react": "^4.0.3",
            "eslint": "^8.45.0",
            "eslint-plugin-react": "^7.32.2",
            "eslint-plugin-react-hooks": "^4.6.0",
            "eslint-plugin-react-refresh": "^0.4.3",
            "vite": "^4.4.5",
            "gh-pages": "^6.0.0"
        },
        "homepage": "https://bipinasoft.github.io/ai-galaxy"
    },
    
    # Vite configuration
    'vite.config.js': '''import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ai-galaxy/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true
  }
})''',

    # Main index.html
    'index.html': '''<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/galaxy-icon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI Galaxy - Explore the Universe of Artificial Intelligence</title>
    <meta name="description" content="Advanced AI platform with real-time model training, intelligent chatbots, and enterprise-grade solutions">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>''',

    # README with deployment instructions
    'README.md': '''# AI Galaxy - Advanced AI Platform

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
''',

    # GitHub workflow for auto-deployment
    '.github/workflows/deploy.yml': '''name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Setup Pages
      uses: actions/configure-pages@v4
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: './dist'
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4''',
      
    # .gitignore
    '.gitignore': '''# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local''',

    # ESLint configuration
    '.eslintrc.cjs': '''module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}'''
}

# Save all configuration files
for filename, content in project_files.items():
  # Create directory if it doesn't exist
  os.makedirs(os.path.dirname(filename) if os.path.dirname(filename) else '.', exist_ok=True)

  if filename.endswith('.json'):
    with open(filename, 'w', encoding='utf-8') as f:
      json.dump(content, f, indent=2)
  else:
    # Ensure non-JSON content is a string before writing
    with open(filename, 'w', encoding='utf-8') as f:
      f.write(str(content))

print("✅ Vite React configuration files created!")
print("\nFiles created:")
for filename in project_files.keys():
  print(f"  - {filename}")

print(f"\n📁 Total configuration files: {len(project_files)}")
print("\n🚀 Ready for Vite React development!")