import React, { useEffect, useRef } from 'react'
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

export default TrainingDashboard