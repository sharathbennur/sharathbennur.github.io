---
layout: post
title: "Miata-bot - Part 2 - getting the data"
excerpt_separator: <!--more-->
tags:
  - generative-ai
  - AI-ML
  - chatbot
  - fun
  - miata
  - data
last_modified_at: 2024-05-22T15:00:00-05:00
published: True
---

The internet has a lot of data about the different generations of the Mazda Miata, sources include - Mazda, enthusiast forums, social media (FB, reddit, etc), technical documentation, news sites, vendor sites etc. For the purposes of this bot, we're going to consider mostly text data (and associated images and links).

The first step to building any bot is collecting the data, but like all data efforts, this is easier said than done. In this post, I'm going to lay out some considerations for gathering the data.

<!--more-->

1. Which sources should I get data from, what does that mean for actually getting data? As it turns out, the most structured data is on forums and specific sub-reddits each of which have different methods of getting data - scraping and using the Reddit API respectively.

2. How are we getting this data? 
  - For forums - I'm using Python + BeautifulSoup4 to parse each subforum, threads and posts for the forums
  - A python package called PRAW for Reddit.

3. What were some challenges?
- The primary challenge is getting your data without burdening the site or getting banned. Both Reddit and different online forums require restricting the rate of your programs. So writing code with parameters that control over how often requests are made is critical.
- Another challenge is managing retries - what happens if a request fails. I'm currently using a form of exponential backoff to manage request failures. And we'll talk about recovering from failures next without having to re-collect a lot of data.
- What about caching and fault-tolerance? Caching partial datasets is really important - especially if you're just using `csv` files vs an actual DB with fault-tolerance or backups. This is done by creating and using cache files for partial datasets and keeping a record of what data has been scraped (to avoid repetition). 
- I initially started with `csv` files but switched over to using `parquet` files, both for the better compression and as importing/exporting different datatypes was less buggy.
- Parallelization - given how slow getting the data is, one option is to run parallel threads or multiple machines. I'm currently just running on 1 machine but I will likely to start a cloud VM and run another instance

4. The data is currently saved as `.parquet` files, I did consider using a postgres DB or a no-SQL DB, and that may well be something I implement in the future depending on needs but right now I'm choosing ease of implementation.

5. Associated images and links from posts are relevant meta-data - how should they be collected and used? The current plan is to collect this meta-data and maybe use them to enhance the LLM response in an information retrieval sense.

Lastly, I will not be publishing this dataset, but if you are a researcher or a miata enthusiast who wants to collaborate / help and have a tech / AI-ML background, feel free to reach out.

**Current Status**: Done scraping part of my dataset from one of the forums 
**Next Steps**: 
- Convert the data into a form that can be used for fine-tuning and RAG
- Write code for fine-tuning code and testing.
- Get data from the the rest of the forum, reddit after that..