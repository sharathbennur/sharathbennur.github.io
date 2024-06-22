---
layout: post
title: "Miata-bot - Part 4 - Choosing a LM & Fine Tuning"
excerpt_separator: <!--more-->
tags:
  - generative-ai
  - AI-ML
  - chatbot
  - fun
  - miata
  - training
last_modified_at: 2024-06-22T15:00:00-05:00
published: False
---

A common design pattern in this space right now is to build a wrapper around a commercial providers language models using their APIs and a framework like [LangChain](). Commercial language model (LM) providers include OpenAI (GPT-Ns), Google (Gemini/Gemma), Cohere, Anthropic (Claude), etc. Fundamentally, there's nothing wrong with this approach as long as the following are true:

- The value of the task being performed justifies the cost of using a closed-source model **at scale**.
- The quality of results that you get from the model without fine-tuning is adequate.
- Your domain allows your data to be sent to and potentially used by these LM providers to further improve their models.
- 

### LM choice

I'm planning to fine-tune Meta's Llama3 7B language model for this project. Some reasons for selecting this model:
- Llama3 has been [open-sourced]() - meaning it can be downloaded, fine-tuned and used for commercial and non-commercial purposes freely.
- 7B parameters seems to be the [sweet spot]() in terms of performance vs size at least for this generation of LMs.
- Amongst open-source models with 7B parameters - the choice seems to be mostly between Llama3 7B and Mistral 7B, and Llama3 seems to outperform Mistral 7B out of the box.
- There's a lot of information out there about the effect quantization on Llama3 performance - quantization enables a reduction in size of a LM without decreasing performance. 

## LM fine-tuning techniques

There are multiple LM fine-tuning frameworks for Llama3 which were considered including

### Regular fine-tuning

### LORA

### DPO

### Q-LORA

## LM - fine-tuning in the cloud

[Modal](https://modal.com/pricing)