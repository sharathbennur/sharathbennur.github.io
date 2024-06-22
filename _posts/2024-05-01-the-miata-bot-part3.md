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
published: True
---

Now that some data has been collected ([see details here](#data-stats)), what are some considerations for the next steps. As it turns out, how the data is prepared really depends both on which task you're training your language model (LM) for and what framework you're using.

### Data Processing

So let's start with what the task is and what this means for the data:
- The current design for the miata-bot is to use a Question-Answering (QA) Language Model (LM) - where users ask it questions about any generation of Miata and the bot provides 'useful' answers (more about this later).
  - So the data used to fine-tune the LM has to be structured as Question-Answer pairs.
  - The original/first post is the question and every response post is assumed to be part of the answer
- Should all posts be in included? The short answer is probably not as recent improvements in LM performance have largely been attributed to [better training data](). So, if the focus is to use only high quality - how do we determine high quality threads, posts and replies? Some possibilities include:
  - Using only threads with a minimum number of replies (at least 5 replies in this dataset)
  - Responses must contain at least 1 sentence with at least 7 words.
  - What about using measures of language complexity like the [GunningFox index]() to measure language complexity and only keeping responses that are grade level 8 or higher?
- What about meta-data if available - should it be included as part of the context for each prompt
  - Posts often contains quotes - they are included in the thread, should they be included in the context or as part of the response?
  - Posts often contain links - should the bot get the text / pdfs from the links, then:
    - Provide the links as a part of its response?
    - Or use the text from the link (html/pdf) as context to improve its response?
  - Posts often contain images - do we to handle them or ignore them for now? We're ignoring images for now till the bot is figured out.
- What about pre-processing the data - as done in regular NLP tasks? Typically, other than some basic hygiene, text input to LM is mostly not pre-processed as the models themselves have a tokenizer that takes care of any pre-processing thats needed.

### Data splitting

As it turns out, there are 4 generations of the Miata that are referred to as the NA, NB, NC and ND. 
- Further, when you look at the forums / sub-reddits - they too are divided by generation - which makes sense as each generation is different and has different specifications.
- So succintly, the plan is to split the data into 3 sets of data (NA+NB - they are very similar, NC & ND) and train 1 LM per generation. An example of a generation specific question would be - How do you install an exhaust system upgrade for a ND miata?
- We also have non-generation specific data - all that data will be used to train a general LM that is not language specific. An example of a generation non-specific question would be - What are some fun routes to drive my Miata in PA around Philadelphia?

### Reddit data

I was very hopeful that data (text, images, links) from different subreddits were going to useful for LM training. As it turns out, there are some problems with using data from Reddit as detailed below. This once again illustrates how getting high quality clean data is a major challenge with training LMs

- Signal to noise: The biggest challenge with using data from subreddits is quality - the signal to noise is pretty low and building a signal detector for just reddit data is a 'tomorrow' problem for now.
- Reddit API limitations: The official Reddit API limits results to 1000 submissions - meaning instead of getting all Reddit submissions to a particular subreddit - you can only retrieve the newest/top/most controversial 1000 submissions depending on which sorting method you use. This severely limits what can be done. 
- Data poisoning: Recently, there have been reports of Reddit users on Reddit adding nonsensical content to poison LM training datasets. 

Upon considering the concerns above - it makes sense to take a different approach to getting data from Reddit. One idea I'm considering is using the Reddit search API to get top submissions and posts as a data source.

### Data Stats

| Number of      |          |
| ---------------|--------- |
| Conversations  | 74,360   |
| Posts          | 463,9712 |
| External Links | 757,3639 |
| Conversations  | 881,0540 |
