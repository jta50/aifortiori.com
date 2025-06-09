---
layout: layout.njk
title: AI Fortiori
---

<style>
  /* Homepage-specific styles that override layout defaults */
  body {
    background: url('/images/library-background2.jpeg') !important;
background-size: cover !important;
background-position: center !important;
    padding: 0 !important;
    margin: 0 !important;
    min-height: 100vh !important;
    overflow-x: hidden !important;
  }

  .homepage-container {
    position: relative;
    min-height: calc(100vh - 100px);
  }

  .hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 2rem;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%);
  }

  .logo-container {
    position: relative;
    z-index: 2;
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease-out;
  }

  .logo {
    margin: 0 auto 2rem;
    max-width: 280px;
    transition: transform 0.3s ease;
  }

  .logo:hover {
    transform: scale(1.02);
  }

  .logo-image {
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5));
  }

  .main-title {
    font-size: 4.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    letter-spacing: 8px;
    position: relative;
    z-index: 2;
    animation: fadeInUp 1s ease-out 0.3s both;
    color: #ffffff;
    font-family: "Century Schoolbook", Georgia, serif;
  }

  .tagline {
    font-size: 1.3rem;
    margin-bottom: 3rem;
    opacity: 0.9;
    font-style: italic;
    max-width: 600px;
    position: relative;
    z-index: 2;
    animation: fadeInUp 1s ease-out 0.6s both;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    color: #e0e0e0;
    font-weight: 300;
  }

  .cta-buttons {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    z-index: 2;
    animation: fadeInUp 1s ease-out 0.9s both;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 16px 32px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .cta-button:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-1px);
    color: white;
  }

  .cta-button.primary {
    background: rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .cta-button.primary:hover {
    background: rgba(0, 0, 0, 0.5);
    border-color: rgba(255, 255, 255, 0.5);
  }

  .content-section {
    position: relative;
    background: rgba(0, 0, 0, 0.9);
    padding: 5rem 2rem;
    backdrop-filter: blur(15px);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #ffffff;
    position: relative;
    font-weight: 300;
    letter-spacing: 2px;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
  }

  .intro-quote {
    text-align: center;
    font-size: 1.2rem;
    font-style: italic;
    color: #cccccc;
    margin-bottom: 4rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
    font-weight: 300;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 2.5rem;
    border-radius: 2px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .feature-card:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .feature-title {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
    color: #ffffff;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .feature-description {
    color: #cccccc;
    line-height: 1.6;
    font-weight: 300;
  }

  .recent-section {
    background: rgba(0, 0, 0, 0.8);
    padding: 4rem 2rem;
    backdrop-filter: blur(10px);
  }

  .case-list {
    list-style: none;
    max-width: 800px;
    margin: 0 auto;
    padding: 0;
  }

  .case-item {
    background: rgba(255, 255, 255, 0.05);
    margin-bottom: 1rem;
    border-radius: 2px;
    transition: all 0.3s ease;
    border-left: 2px solid rgba(255, 255, 255, 0.2);
  }

  .case-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-left-color: rgba(255, 255, 255, 0.4);
    transform: translateX(4px);
  }

  .case-link {
    display: block;
    padding: 1.2rem;
    text-decoration: none;
    color: #e0e0e0;
    font-weight: 400;
  }

  .case-link:hover {
    color: #ffffff;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255, 255, 255, 0.6);
    animation: bounce 2s infinite;
    z-index: 2;
    font-size: 1.2rem;
  }

  /* Override footer for homepage */
  footer {
    background: rgba(0, 0, 0, 0.95) !important;
    border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
    backdrop-filter: blur(15px) !important;
    padding: 2rem 1rem !important;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-6px);
    }
    60% {
      transform: translateX(-50%) translateY(-3px);
    }
  }

  @media (max-width: 768px) {
    .main-title {
      font-size: 2.8rem;
      letter-spacing: 4px;
    }
    
    .tagline {
      font-size: 1.1rem;
    }
    
    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .logo {
      max-width: 220px;
    }
    
    .features-grid {
      grid-template-columns: 1fr;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .content-section, .recent-section {
      padding: 3rem 1rem;
    }
  }
</style>

<div class="homepage-container">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="logo-container">
      <div class="logo">
        <img src="/images/logo.png" alt="AI Fortiori" class="logo-image">
      </div>
      <h1 class="main-title">AI FORTIORI</h1>
      <p class="tagline">Disciplined Use of Unnatural Language in Legal Thinking</p>
    </div>

    <div class="cta-buttons">
      <a href="/cases/" class="cta-button primary">Case Summaries</a>
      <a href="/newsletter/" class="cta-button">Newsletter</a>
      <a href="https://substack.com" target="_blank" class="cta-button">Subscribe</a>
    </div>
    
    <div class="scroll-indicator">↓</div>
  </section>

  <!-- Content Section -->
  <section class="content-section">
    <div class="container">
      <h2 class="section-title">Our Approach</h2>

      <blockquote class="intro-quote">
        A digital resource exploring how legal reasoning meets large language models, crafted by a lawyer obsessed with clarity, precedent, and pedagogy.
      </blockquote>
      
      <div class="features-grid">
        <div class="feature-card">
          <h3 class="feature-title">Case Analysis</h3>
          <p class="feature-description">Structured summaries of classic and current decisions with clear legal reasoning, searchable notes, and practical applications for modern practice.</p>
        </div>
        
        <div class="feature-card">
          <h3 class="feature-title">Legal Education</h3>
          <p class="feature-description">In-depth articles for lawyers, law students, and legal professionals exploring the intersection of traditional jurisprudence and artificial intelligence.</p>
        </div>
        
        <div class="feature-card">
          <h3 class="feature-title">Professional Insights</h3>
          <p class="feature-description">Regular analysis delivered through our newsletter, focusing on real case law, emerging legal technology, and practical applications.</p>
        </div>
        
        <div class="feature-card">
          <h3 class="feature-title">Practice Tools</h3>
          <p class="feature-description">Professional templates, legal frameworks, and analytical tools designed to enhance legal reasoning and streamline practice workflows.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Recent Cases Section -->
  <section class="recent-section">
    <div class="container">
      <h2 class="section-title">Recent Case Analysis</h2>

      <ul class="case-list">
        {% for post in collections.cases | reverse | slice: 0, 5 %}
        <li class="case-item">
          <a href="{{ post.url }}" class="case-link">{{ post.data.title }}</a>
        </li>
        {% endfor %}
      </ul>
    </div>
  </section>
</div>