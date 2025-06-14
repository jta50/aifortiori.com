---
layout: layout.njk
title: "Case Library"
permalink: /cases/
---

# Case Library

Welcome to the AI Fortiori Case Library. Below you'll find a growing collection of legal decisions presented with precision, clarity, and insight.

---

{% for case in collections.cases | reverse %}
  <h2><a href="{{ case.url }}">{{ case.data.title }}</a></h2>
  <p><strong>Permalink:</strong> <a href="{{ case.url }}">{{ case.url }}</a></p>
  <hr />
{% endfor %}

