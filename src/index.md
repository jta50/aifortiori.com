---
layout: layout.njk
title: AI Fortiori
---

<style>
  /* Override body styles for homepage only */
  body {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="%23001122"/></svg>') !important;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: 0 !important;
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Reset margins for homepage */
  body > * {
    margin: 0;
  }

  .homepage-container {
    position: relative;
    min-height: calc(100vh - 100px); /* Account for footer */
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
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 64, 128, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 100, 200, 0.2) 0%, transparent 50%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 20, 40, 0.8) 100%);
  }

  .logo-container {
    position: relative;
    z-index: 2;
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease-out;
  }

  .logo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(145deg, #d4af37, #b8941f);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.4),
      inset 0 2px 4px rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
    overflow: hidden;
  }

  .logo:hover {
    transform: scale(1.05) rotate(2deg);
  }

  .logo-image {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  .main-title {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
    letter-spacing: 3px;
    position: relative;
    z-index: 2;
    animation: fadeInUp 1s ease-out 0.3s both;
    color: #ffffff;
  }

  .tagline {
    font-size: 1.4rem;
    margin-bottom: 3rem;
    opacity: 0.9;
    font-style: italic;
    max-width: 600px;
    position: relative;
    z-index: 2;
    animation: fadeInUp 1s ease-out 0.6s both;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
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
    padding: 15px 30px;
    background: linear-gradient(145deg, #004080, #0055aa);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    box-shadow: 0 8px 25px rgba(0, 64, 128, 0.4);
  }

  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 64, 128, 0.5);
    background: linear-gradient(145deg, #0055aa, #006bc7);
    color: white;
  }

  .cta-button.primary {
    background: linear-gradient(145deg, #d4af37, #b8941f);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
  }

  .cta-button.primary:hover {
    background: linear-gradient(145deg, #e6c34a, #d4af37);
    box-shadow: 0 12px 35px rgba(212, 175, 55, 0.5);
  }

  .content-section {
    position: relative;
    background: rgba(18, 18, 18, 0.95);
    padding: 4rem 2rem;
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(212, 175, 55, 0.3);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #f0f0f0;
    position: relative;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #004080, #d4af37);
  }

  .intro-quote {
    text-align: center;
    font-size: 1.3rem;
    font-style: italic;
    color: #d4af37;
    margin-bottom: 3rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 15px;
    border: 1px solid rgba(212, 175, 55, 0.2);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .feature-card:hover {
    transform: translateY(-5px);
    border-color: rgba(212, 175, 55, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }

  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: block;
  }

  .feature-title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #d4af37;
    font-weight: 600;
  }

  .feature-description {
    color: #cccccc;
    line-height: 1.6;
  }

  .recent-section {
    background: rgba(0, 64, 128, 0.1);
    padding: 3rem 2rem;
    border-top: 1px solid rgba(212, 175, 55, 0.2);
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
    border-radius: 8px;
    transition: all 0.3s ease;
    border-left: 4px solid #004080;
  }

  .case-item:hover {
    border-left-color: #d4af37;
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.08);
  }

  .case-link {
    display: block;
    padding: 1.2rem;
    text-decoration: none;
    color: #9cf;
    font-weight: 500;
  }

  .case-link:hover {
    color: #d4af37;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255, 255, 255, 0.7);
    animation: bounce 2s infinite;
    z-index: 2;
  }

  /* Override footer for homepage */
  footer {
    background: rgba(0, 0, 0, 0.9) !important;
    border-top: 1px solid rgba(212, 175, 55, 0.3) !important;
    backdrop-filter: blur(10px);
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
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    .main-title {
      font-size: 2.5rem;
      letter-spacing: 1px;
    }
    
    .tagline {
      font-size: 1.1rem;
    }
    
    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .logo {
      width: 150px;
      height: 150px;
    }
    
    .logo-image {
      width: 120px;
      height: 120px;
    }

    .features-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="homepage-container">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="logo-container">
      <div class="logo">
        <img src="/images/logo.png" alt="AI Fortiori Logo" class="logo-image">
      </div>
      <h1 class="main-title">AI FORTIORI</h1>
      <p class="tagline">Disciplined Use of Unnatural Language in Legal Thinking</p>
    </div>
    
    <div class="cta-buttons">
      <a href="/cases/" class="cta-button primary">
        📚 Explore Cases
      </a>
      <a href="/newsletter/" class="cta-button">
        📰 Newsletter
      </a>
      <a href="https://substack.com" target="_blank" class="cta-button">
        📬 Subscribe
      </a>
    </div>
    
    <div class="scroll-indicator">
      <span style="font-size: 1.5rem;">↓</span>
    </div>
  </section>

  <!-- Content Section -->
  <section class="content-section">
    <div class="container">
      <h2 class="section-title">What We Offer</h2>
      
      <blockquote class="intro-quote">
        "A digital resource exploring how legal reasoning meets large language models, crafted by a lawyer obsessed with clarity, precedent, and pedagogy."
      </blockquote>
      
      <div class="features-grid">
        <div class="feature-card">
          <span class="feature-icon">📖</span>
          <h3 class="feature-title">Illustrated Case Summaries</h3>
          <p class="feature-description">Distilled classic and current decisions into structured, searchable notes — complete with GIFs, diagrams, and legal motifs that make complex precedents accessible.</p>
        </div>
        
        <div class="feature-card">
          <span class="feature-icon">🎓</span>
          <h3 class="feature-title">Explainer Series</h3>
          <p class="feature-description">Engaging articles for lawyers, law students, and legally curious minds. From hearsay to hallucinations — bridging traditional legal concepts with AI innovation.</p>
        </div>
        
        <div class="feature-card">
          <span class="feature-icon">📬</span>
          <h3 class="feature-title">AI + Law Newsletter</h3>
          <p class="feature-description">Delivered via Substack. Erudite, visual, and precisely on point. Real case law analysis with no synthetic citations — only authentic legal scholarship.</p>
        </div>
        
        <div class="feature-card">
          <span class="feature-icon">🧰</span>
          <h3 class="feature-title">Tools & Templates</h3>
          <p class="feature-description">Practical resources including Markdown templates, legal checklists, and AI toolkits designed to streamline your legal thinking and writing processes.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Recent Cases Section -->
  <section class="recent-section">
    <div class="container">
      <h2 class="section-title">Recent Case Summaries</h2>
      
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