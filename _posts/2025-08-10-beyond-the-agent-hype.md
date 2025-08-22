---
layout: post
title: "Beyond the agent hype"
excerpt_separator: <!--more-->
tags:
  - generative-ai
  - applications
  - agents
  - work
last_modified_at: 2025-08-10T15:00:00-05:00
published: false
---

## Case for agents

I am very conflicted about this post - while I get the hype and see the amazing potential GenAI based agents, based on my experience - they need to be used deliberately on a case-by-case basis. So instead of revisiting what agents are how cool they are etc., I'm going to focus on some practical applications and usage patterns. 

Agents themselves are a pretty old concept in AI, and refer to an autonomous entity that acts to acheive a goal - moving from rule based agents in the 1950s & 60s to knowledge based agents in the 70s & 80s to the current ones based on deep learning and LLMs. 

## What are agents and when to use them

In a nutshell, agents are great for the following:

- Independent decision-making about the following (reflection pattern, tool-use pattern):
  - Which tool to use?
  - Input quality (data quality)
  - Output quality (quick evaluations)
  - etc.
- For complex workflows (reflection pattern, planning pattern, multi-agent pattern) where:
  - Agents need to be assigned to tasks (and cannot be assigned beforehand)
  - Knowledge or data retrieval
  - To get input from humans-in-the-loop
- To deal with different modalities like audio, video, pictures, etc.(tool use pattern)

### Agent design patterns

4 basic agent design patterns are shown below and they roughly correlate with the use-cases above.

<img align="center" height="250" style="padding: 25px;" src="https://substackcdn.com/image/fetch/$s_!4tX9!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F24f54853-a119-4188-93ed-7a932ad0dc06_5726x2151.jpeg">

### When not to use agents

A fundamental challenge with LLMs and GenAI is their non-deterministic nature. So if you have workflows or projects with a requirement for high precision and high value - being deliverable about how and where agents are applied is very important.

### Horizontal vs vertical agents

Another topic of discussion lately have been horizontal (capability) vs vertical (domain) agents.

## Incorporating agents into workflows

