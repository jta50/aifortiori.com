---
layout: layout.njk
title: "Mata v Avianca"
permalink: /cases/mata-v-avianca/
eleventyComputed:
  case: "{{ cases['mata-v-avianca'] }}"
---

# {{ case.case_identification.case_name_full }}

**Citation:** {{ case.case_identification.full_citation }}  
**Court:** {{ case.case_identification.court_information.court_name }}  
**Date:** {{ case.case_identification.decision_date }}

---

## Factual Summary

{{ case.factual_foundation.factual_summary }}

---

## Key Facts

<ul>
{% for fact in case.factual_foundation.material_facts %}
  <li>{{ fact.fact_statement }}<br /><em>{{ fact.legal_significance }}</em></li>
{% endfor %}
</ul>

---

## Legal Issue

**Primary:** {{ case.legal_issues.primary_issue }}

{% if case.legal_issues.subsidiary_issues %}
**Subsidiary Issues:**
<ul>
{% for issue in case.legal_issues.subsidiary_issues %}
  <li>{{ issue }}</li>
{% endfor %}
</ul>
{% endif %}

---

## Legal Principles

<ul>
{% for principle in case.principle_extraction.ratio_decidendi %}
  <li>
    <strong>{{ principle.legal_principle }}</strong><br />
    <em>{{ principle.supporting_quotation }}</em>
  </li>
{% endfor %}
</ul>

---

[← Back to all cases](/cases/)
