---
layout: post
title: "Miata-bot - Part 1"
excerpt_separator: <!--more-->
tags:
  - generative-ai
  - AI-ML
  - chatbot
  - fun
  - miata
last_modified_at: 2024-05-05T15:00:00-05:00
published: true
---

[Teaching at Wharton](/assets/md/wharton-course) has been incredibly rewarding, especially covering the latest advances in NLP. However, teaching and building an application are vastly different experiences. This contrast inspired me to embark on an NLP/LLM-based project that lets me explore the practical applications of the techniques I teach. Enter the Miata-bot—my Miata chatbot project, which I aim to develop over the next few months.

Why a Miata-bot?

I own a 2019 Miata, and as the saying goes, "Miata is always the answer" :)

<p>
    <img style="padding: 25px;" src="/assets/img/miata-bot-1.png" width="512" height="384">
</p>

<!--more-->

While the plan is likely to evolve, here is the current outline:

- Data Collection: Scrape and gather text data about Miatas from online conversations and forums. Fortunately, there are many active Miata communities that can provide valuable data.

- Building an LLM Application: Use the collected data to fine-tune a language model, implementing techniques like fine-tuning and retrieval-augmented generation (RAG) to create a Miata-bot that can answer both common and uncommon questions about Miatas.

- Evaluation: Generate question-answer pairs to evaluate the quality of the bot's responses. This may involve some red teaming to test the robustness of the bot.

- Tool Exploration: This project also serves as a way to explore the current ecosystem of packages such as LangChain, Hugging Face, Ray, etc., to build and deploy specialized LLMs.

- Quantization: I am curious about quantizing the Miata-bot and evaluating its performance as a quantized model.

I am sharing the code for this project, which is available on [GitHub](https://github.com/sharathbennur/miata.bot.data). Currently, I am collecting data from the largest Miata forum.

While I don't plan to publish all aspects of this work, I welcome collaboration. If you are a researcher or Miata enthusiast with a tech or AI/ML background and would like to contribute, please feel free to reach out.
