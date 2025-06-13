---
layout: post
title: "Decision Intelligence for Clinical Trials"
excerpt_separator:  <!--more-->
tags:
  - decision-intelligence
  - AI-ML
  - clinical-trials
  - work-experience
last_modified_at: 2021-04-27T15:00:00-05:00
published: true
---

## Case Study: Country Selection for Clinical Trials

One key step in planning a clinical trial is deciding which countries to include or exclude. This decision is critical, as it directly impacts the trial’s speed, feasibility, and ultimate success.

To understand this better, consider the **decision context**—that is, who the decision-makers are, what data informs the decision, and what heuristics or biases might be at play.

In this case, the primary decision-maker is the **Therapeutic Strategy Lead**, who oversees the overall trial strategy. However, other key players influence this decision:

* **Regional teams**, who provide on-the-ground insights and recommendations on country suitability.
* **Analytics teams**, who supply and interpret supporting data to add nuance to the decision.

### Data Inputs for Country Selection

Several data points are typically considered when evaluating whether a country is viable for a trial:

* Estimated number of patients with the target indication
* Historical recruitment performance in similar trials
* Number of clinical trial sites supported by IQVIA in the country
* Additional operational and regulatory metrics

A country is usually deemed viable when it performs well across multiple data points compared to other candidates.

### Role of Heuristics, Biases, and Data Gaps

Biases and workarounds often influence this process. For example, in countries with little or no historical data—especially for specific sites or therapeutic areas—teams rely on **heuristic estimates** to fill the gaps. While this is a practical response to missing data, it also highlights the need for **stronger decision support systems**.

One solution is to **augment or acquire more robust source data**, or to apply **AI/ML techniques** to predict missing values. For instance:

* Estimating patient populations for rare diseases can benefit from ML models trained on complex and often incomplete EHR data.
* Predicting recruitment rates often involves selecting appropriate historical trials for comparison—another area where AI/ML can help reduce uncertainty and improve accuracy.

In both examples, **data complexity and decision uncertainty** are key indicators that AI/ML could enhance the decision-making process.

## Case Study: Matching Patients to Clinical Trials

Early technology solutions to targeted improved clinical trial recruitment by matching patients to appropriate trials.

In early versions, the system primarily matched patients to a preferred clinical trial and, optionally, suggested a secondary trial. At that point, patients needed to decide whether to accept or reject the additional trial offer—often by default rejecting options outside their initial area of interest.

This introduces a key **decision context**: patients tend to default to rejecting trials that don’t align with their original condition. However, alternative choices might include accepting a secondary trial or remaining open to future options.

### Understanding the Decision Context

To improve the system, we examined the **factors influencing patient decisions**, such as:

* Presence of co-morbidities that align with other therapeutic areas
* Current healthcare burden
* Anticipated burden of participating in a specific trial (e.g., travel, time commitment, procedures)

These factors are trial-specific and patient-specific—and not always captured in early screening.

### Implications for Data and Algorithm Design

Insights into patient behavior prompted us to rethink both the **data collection process** and the **design of the matching algorithm**. For example:

* Capturing co-morbidities can enable broader and more accurate trial matching
* Estimating healthcare burden more precisely helps filter out trials that are impractical for a given patient

Given the complexity of co-morbidity patterns and the variability in patient burden, this challenge is well-suited to **AI/ML techniques**. While work is ongoing, incorporating these decision insights into our platform is proving essential to improving recruitment and building effective decision support tools.


