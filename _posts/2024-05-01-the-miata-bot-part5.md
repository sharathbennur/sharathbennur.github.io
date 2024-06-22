---
layout: post
title: "Miata-bot - Part 5 - Recent "
excerpt_separator: <!--more-->
tags:
  - generative-ai
  - AI-ML
  - chatbot
  - fun
  - miata
  - training
last_modified_at: 2024-07-06T15:00:00-05:00
published: False
---

## LM choice

I'm planning to fine-tune Meta's Llama3 7B language model for this project. Some reasons for selecting this model:
- Llama3 has been [open-sourced]() - meaning it can be downloaded, fine-tuned and used for commercial and non-commercial purposes freely.
- 7B parameters seems to be the [sweet spot]() in terms of performance vs size at least for this generation of LMs.
- Amongst open-source models with 7B parameters - the choice seems to be mostly between Llama3 7B and Mistral 7B, and Llama3 seems to outperform Mistral 7B out of the box.



## LM - fine-tuning in the cloud

[Modal](https://modal.com/pricing)