

- ---
  layout: layout.njk
  title: AI Fortiori
  ---

  <style>
    .hero {
      background: linear-gradient(to right, #2b2b2b, #1a1a1a);
      color: white;
      padding: 3rem;
      text-align: center;
      border-radius: 12px;
      margin-bottom: 2rem;
      font-family: "Century Schoolbook", serif;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      margin: 0.5rem;
      background-color: #004080;
      color: #fff;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      transition: background 0.3s;
    }
    .button:hover {
      background-color: #0055aa;
    }
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1rem;
      background: #f8f8f8;
    }
    .gif-container {
      text-align: center;
      margin: 2rem 0;
    }
    .two-col {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }
    .two-col > div {
      flex: 1;
      min-width: 300px;
    }
  </style>

  <div class="hero">
    <h1><em>AI Fortiori</em></h1>
    <p class="tagline">Where Precedent Meets Synthetic Prediction</p>
    <p>Exploring the disciplined use of AI in legal reasoning, research, and education.</p>
    <div class="cta-buttons">
      <a class="button" href="/cases/">📚 Case Summaries</a>
      <a class="button" href="/explainers/">🎓 Legal Explainers</a>
      <a class="button" href="/newsletter/">📰 Newsletter</a>
      <a class="button" href="https://substack.com" target="_blank">📬 Subscribe</a>
    </div>
  </div>

  ---

  ## 🧠 What is *AI Fortiori*?

  > _A digital resource exploring how legal reasoning meets large language models, crafted by a lawyer obsessed with clarity, precedent, and pedagogy._

  Whether you’re a barrister, student, researcher, or just legally curious, we aim to illuminate the strange new space where GPT meets jurisprudence.

  ---

  ## ✨ Core Features

  <div class="two-col">
    <div class="card">
      <h3>📖 Illustrated Case Summaries</h3>
      <p>Classic and current decisions distilled into structured, searchable notes — with visual motifs and AI commentary.</p>
    </div>
    <div class="card">
      <h3>🎓 Explainer Series</h3>
      <p>Engaging breakdowns of core legal concepts. From hearsay to hallucination, precedent to prompt injection.</p>
    </div>
  </div>

  <div class="two-col">
    <div class="card">
      <h3>📬 AI + Law Newsletter</h3>
      <p>Delivered via Substack. Sharp, visual, citation-checked. No synthetic cases.</p>
    </div>
    <div class="card">
      <h3>🧰 Tools & Templates</h3>
      <p>Markdown templates, checklists, and AI workflows to accelerate legal writing and research.</p>
    </div>
  </div>

  ---

  ## 🎞️ Sample Animation

  <div class="gif-container">
    <img src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif" alt="Barrister animated" width="400">
  </div>

  ---

  ## 🧪 Recent Case Summaries

  <div class="two-col">
    {% for post in collections.cases | reverse | slice(0,3) %}
      <div class="card">
        <h4><a href="{{ post.url }}">{{ post.data.title }}</a></h4>
        <p>{{ post.templateContent | striptags | truncate(140, true, '...') }}</p>
      </div>
    {% endfor %}
  </div>

  ---

  ## 🔐 Premium Access (Coming Soon)

  Get member-only case digests, deeper AI explainers, and structured research tools.  
  Ideal for legal academics, litigators, and knowledge-driven learners.

  <a class="button" href="/join/">💎 Join the Waitlist</a>

  ---

  ## ⚖️ Want More?

  - [Contact](/contact/)
  - [Submit a Case](/submit/)
  - [Browse All Summaries](/cases/)
  - [Support via Substack](https://substack.com)
