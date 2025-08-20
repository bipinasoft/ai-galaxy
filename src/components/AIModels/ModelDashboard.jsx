import React from 'react'
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

export default ModelDashboard