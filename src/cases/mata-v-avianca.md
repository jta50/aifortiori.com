---
layout: layout.njk
title: "Mata v Avianca"
permalink: /cases/mata-v-avianca/
data: mata-v-avianca
---

# {{ data.case_identification.case_name_full }}

**Citation:** {{ data.case_identification.full_citation }}  
**Court:** {{ data.case_identification.court_information.court_name }}  
**Date:** {{ data.case_identification.decision_date }}

---

## Factual Summary

{{ data.factual_foundation.factual_summary }}

---

## Key Facts

<ul>
{% for fact in data.factual_foundation.material_facts %}
  <li>{{ fact.fact_statement }}<br /><em>{{ fact.legal_significance }}</em></li>
{% endfor %}
</ul>

---

## Legal Issue

**Primary:** {{ data.legal_issues.primary_issue }}

{% if data.legal_issues.subsidiary_issues %}
**Subsidiary Issues:**
<ul>
{% for issue in data.legal_issues.subsidiary_issues %}
  <li>{{ issue }}</li>
{% endfor %}
</ul>
{% endif %}

---

## Legal Principles

<ul>
{% for principle in data.principle_extraction.ratio_decidendi %}
  <li>
    <strong>{{ principle.legal_principle }}</strong><br />
    <em>{{ principle.supporting_quotation }}</em>
  </li>
{% endfor %}
</ul>

---

[← Back to all cases](/cases/)
