import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../utils/data';

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Latest AI Insights</h2>
          <p className="section__subtitle">
            Stay updated with the latest trends and developments in AI
          </p>
        </div>

        <div className="blog__grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog__card">
              <div className="blog__meta">
                <span className="blog__date">
                  <Calendar size={16} />
                  {post.date}
                </span>
                <span className="blog__category">
                  <Tag size={16} />
                  {post.category}
                </span>
              </div>
              <h3 className="blog__title">{post.title}</h3>
              <p className="blog__excerpt">{post.excerpt}</p>
              <a href="#" className="blog__link">Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
