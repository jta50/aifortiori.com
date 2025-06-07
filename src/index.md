---
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
    margin: 1rem;
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
  <p class="tagline">Disciplined Use of Unnatural Language in Legal Thinking</p>
  <a class="button" href="/cases/">📚 Case Summaries</a>
  <a class="button" href="/newsletter/">📰 Newsletter</a>
  <a class="button" href="https://substack.com" target="_blank">📬 Subscribe</a>
</div>

## 🧠 What is AI Fortiori?

<blockquote>
  A digital resource exploring how legal reasoning meets large language models, crafted by a lawyer obsessed with clarity, precedent, and pedagogy.
</blockquote>

## ✨ Features

<div class="two-col">
  <div class="card">
    <h3>📖 Illustrated Case Summaries</h3>
    <p>We distill classic and current decisions into structured, searchable notes — with GIFs, diagrams, and legal motifs.</p>
  </div>
  <div class="card">
    <h3>🎓 Explainer Series</h3>
    <p>Engaging explainer articles for lawyers, law students, and legally curious minds. From hearsay to hallucinations.</p>
  </div>
</div>

<div class="two-col">
  <div class="card">
    <h3>📬 AI + Law Newsletter</h3>
    <p>Delivered via Substack. Erudite, visual, and on point. Real case law. No synthetic citations.</p>
  </div>
  <div class="card">
    <h3>🧰 Tools & Templates</h3>
    <p>Markdown templates, legal checklists, and AI toolkits to streamline your thinking and writing.</p>
  </div>
</div>

## 🎞️ Sample Animated GIF

<div class="gif-container">
  <img src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif" alt="Barrister animated" width="400">
</div>

## 🧪 Recent Case Summaries

<ul>
  {% for post in collections.cases | reverse | slice(0,3) %}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
  {% endfor %}
</ul>

## ⚖️ Want More?

Follow the journey. We are just getting started.

- [Contact](/contact/)
- [Submit a Case](/submit/)
- [Browse Archive](/cases/)
- [Support on Substack](https://substack.com)
