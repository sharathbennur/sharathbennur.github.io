---
layout: post
title: "Miata-bot - Part 5 - Fine-Tuning"
excerpt_separator: <!--more-->
tags:
  - generative-ai
  - AI-ML
  - chatbot
  - fun
  - miata
  - training
last_modified_at: 2024-07-28T15:00:00-05:00
published: False
---

## LM fine-tuning techniques

There are multiple LM fine-tuning frameworks for Llama3 which were considered including

### Regular fine-tuning

### LoRA

LoRA is a parameter efficient fine-tuning technique, which is helpful if you are GPU-memory limited. In LoRA, the weights in the base LM are mostly frozen and a small percentage of learnable parameters are added. For example - a Llama2-7B LM can be fine-tuned with LoRA using less than 16GB of GPU memory (see [tutorial](https://pytorch.org/torchtune/stable/tutorials/e2e_flow.html)).

### DPO

### Q-LORA

## RAG

## Fine-tuning vs RAG