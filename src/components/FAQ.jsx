import React from 'react'

const faqs = [
  {
    q: 'What is AI Galaxy?',
    a: 'AI Galaxy is an AI platform that lets you compare and run multiple models, train custom models, and deploy AI assistants for your business.'
  },
  {
    q: 'How do I get started?',
    a: 'Sign up, choose a model or training dataset, and launch a project — our Dashboard guides you through each step.'
  },
  {
    q: 'What pricing plans are available?',
    a: 'We offer flexible monthly and yearly plans. Check the Pricing section on this site for current offers.'
  },
  {
    q: 'Is my data secure?',
    a: 'Yes — AI Galaxy follows industry best practices for encryption and data handling. Contact sales for enterprise options.'
  },
  {
    q: 'Can I integrate AI Galaxy with my tools?',
    a: 'Yes — we provide REST APIs and webhooks for common integrations.'
  }
]

export default function FAQ(){
  return (
    <section id="faq" className="faq container">
      <div className="section__header">
        <h2 className="section__title">Frequently Asked Questions</h2>
        <p className="section__subtitle">Answers to common questions about AI Galaxy</p>
      </div>

      <div className="faq__list">
        {faqs.map((f, idx) => (
          <details key={idx} className="faq__item">
            <summary className="faq__q">{f.q}</summary>
            <div className="faq__a">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  )
}
