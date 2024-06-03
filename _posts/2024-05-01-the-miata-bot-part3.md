---
layout: post
title: "Miata-bot - Part 3 - Data Prep"
excerpt_separator: <!--more-->
tags:
  - generative-ai
  - AI-ML
  - chatbot
  - fun
  - miata
  - training
last_modified_at: 2024-06-06T15:00:00-05:00
published: False
---

Now that the data has been collected, what are some considerations for the next steps. As it turns out, how the data is prepared really depends both on which task you're training your language model (LM) for and what framework you're using.

### Data Processing

So let's start with what the task is and what this means for the data:
- The miata-bot is best thought of as a Question-Answering (QA) LM - where users ask it questions about any generation of Miata and the bot provides 'useful' answers (more about this later).  
  - So the data used to fine-tune the LM has to be structured as Question-Answer pairs.
  - The original/first post is the question and every response post is assumed to be part of the answer
- Recent improvements in LM performance have largely been attributed to [better training data](). So, if the focus is to use only high quality - how do we determine high quality threads, posts and replies? Some possibilities include:
  - Using only threads with a minimum number of replies (at least 5 replies in this dataset)
  - Responses must contain at least 1 sentence with at least 7 words.
  - What about using measures of language complexity like the [GunningFox index]() to measure language complexity and only keeping responses that are grade level 8 or higher?
- What about meta-data if available - should it be included as part of the context for each prompt
- Posts often contains quotes - they are included in the thread
- Posts often contain links - how to handle them?
- Posts often contain images - how to handle them?
- What about pre-processing the data - as done in regular NLP tasks?

### Data splitting

- As it turns out, there are 4 generations of the Miata that are referred to as the NA, NB, NC and ND. 
  - Further, when you look at the forums / sub-reddits - they too are divided by generation - which makes sense as each generation is different and has different specifications.
  - So succintly, the plan is to split the data into 3 sets of data (NA+NB - they are very similar, NC & ND) and train 1 LM per generation. An example of a generation specific question would be - How do you install an exhaust system upgrade for a ND miata?
  - We also have non-generation specific data - all that data will be used to train a general LM that is not language specific. An example of a generation non-specific question would be - What are some fun routes to drive my Miata in PA around Philadelphia?
- 

