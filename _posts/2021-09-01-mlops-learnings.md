---
layout: post
title: "MLOps Learnings"
excerpt_separator:  <!--more-->
tags:
  - mlops
  - AI-ML
  - work-experience
last_modified_at: 2021-09-01T15:00:00-05:00
published: false
---

In a [previous post on MLOps]({% post_url 2021-03-15-mlops %}), I discussed the what and the why of MLOps along with my work experience in the space. This post discusses learnings from that work - where our team at Iqvia tried to build an MLOps platform in-house. At the time, there wasn't a commercial ML platforms that fit all our needs.

<p>
    <img style="padding: 25px;" src="/assets/img/mlops-1.png">
</p>

<!--more-->

### Build vs Buy

Build vs. buy is a common debate when considering new technologies. Our team decided to build - which in hindsight was a mistake. At that time, we didn't fully realize the pitfalls of trying to stitch together what were relatively new  technologies then (such as Airflow, Kubernetes, Ansible, etc.) into our tech stack. 

While some of these had been around for a few years, our team and the vendor we were working with at the time - had little experience using many of these technologies. This led to a steep learning curve and bugs with every iteration or new set of features. By the time the team would get comfortable with a component on the stack - we were sometimes adding a new component - so rinse lather repeat!

Another personal learning was around complexity. Modern cloud based products have complex architectures and connect with a number of external systems, this complexity is under-appreciated. Additionally, when you add an opaque supply chain in the form of external packages, scripts and docker files that your product depends on, it can get quite difficult to manage.

Ultimately, I think we would have been better of waiting for a commercial product to be released like some of the other teams at Iqvia, rather than our ambitious plan to build. Though - to be fair - stable platforms of the kind we were imagining only became a reality as late as 2023, a full 2 years after our efforts started.

### Capabilities

#### Data management

* In an ideal world, data management is something another platform or your enterprise data warehouse manages, and this mainly depends on what already exists in your organization.
* Your MLOps plan should include the monitoring of data use within the ML platform, assuming that data collection, processing and storage are functions of a data warehouse or lake.
* However, a system to collect, store and parse metadata around data usage is critical.

#### Model training

* Don't be afraid of small data - many 

#### Monitoring and management

### Talent acquisition

### Commoditization