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

[Teaching at Wharton](/assets/md/wharton-course) has been a lot of fun, and I get to cover a lot of the advances in NLP. However, teaching vs building an application are completely different things, and I've been thinking about an NLP / LLM based project that allows me to explore the utility of the techniques I teach - which brings me to the Miata-bot. At least thats what I'm calling my Miata chatbot that I hope to build over the next few months.

Why a Miata-bot, because I own a 2019 Miata (Miata is always the answer :)

<p>
    <img style="padding: 25px;" src="/assets/img/miata-bot-1.png" width="512" height="384">
</p>

<!--more-->

So what's the plan? Informally, and this plan is likely to change along the way - the plan is to:

- Collect / scrape text data about Miatas and the conversation people have about Miatas. Luckily for me, there are many active Miata communities online - so hopefully they are good sources of textual data for the next steps.
- Once all the data is in one place, the plan is to use the current LLM techniques (fine-tuning, RAG, etc.) to implement a Miata-bot that can hopefully answer common and not so common questions about Miatas as well
- This will also require generating question-answer pairs in order to evaluate the quality of the generated text, maybe some red teaming as well
- This project is also a good way for me to explore how the current ecosystem of packages such as LangChain, HuggingFace, Ray etc can be leveraged to build and deploy specialized LLMs.
- Lastly, I am very curious about quanitizing my miata-bot and evaluating a quantized bot at the end 🤞🏼.

I'm also sharing the code for this project across multiple miata.bot. I'm currently collecting the data from the largest Miata forum - code is at this [github repo](https://github.com/sharathbennur/miata.bot.data).

I will not be publishing some of this work, but if you are a researcher or a miata enthusiast who wants to collaborate / help and have a tech / AI-ML background, feel free to reach out.