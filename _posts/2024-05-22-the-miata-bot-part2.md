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

The internet offers a wealth of information on the different generations of the Mazda Miata. Sources include Mazda's official website, enthusiast forums, social media platforms (such as Facebook and Reddit), technical documentation, news sites, vendor sites, and more. For this bot, we will primarily focus on text data, along with relevant images and links.

The first step in creating any bot is data collection, but as with any data-driven task, this can be quite challenging. In this post, I will outline some key considerations for gathering the necessary data.

<!--more-->

1. Which sources should I get data from, and what does that mean for the data collection process? It turns out that the most structured data can be found on forums and specific subreddits. Each of these sources requires different methods for data extraction: scraping for forums and using the Reddit API for subreddits.

2. How are we collecting this data?
- Forums: I am using Python with the BeautifulSoup4 library to parse each subforum, thread, and post.
- Reddit: I am utilizing a Python package called PRAW (Python Reddit API Wrapper) to access and gather data from Reddit.

3. What were some challenges?
- Avoiding Site Burden and Bans: The primary challenge is collecting data without overloading the site or getting banned. Both Reddit and various online forums require rate limiting for your programs. Writing code with parameters to control the frequency of requests is crucial.
- Managing Retries: Handling request failures is another significant challenge. I am using exponential backoff to manage request failures. We will discuss how to recover from failures without re-collecting large amounts of data.
- Caching and Fault-Tolerance: Caching partial datasets is essential, especially if you're using CSV files instead of a database with fault-tolerance or backups. This involves creating and using cache files for partial datasets and keeping a record of what data has been scraped to avoid repetition.
- Selecting a File Format: I initially started with CSV files but switched to Parquet files for better compression and more reliable import/export of different data types.
- Parallelization: Given the slow pace of data collection, running parallel threads or multiple machines can help. Currently, I'm using a single machine, but I plan to start a cloud VM to run another instance.

4. Databases: Currently, the data is saved as .parquet files. While I considered using a PostgreSQL or NoSQL database, I opted for the ease of implementation with Parquet files for now. Depending on future needs, I may transition to a more complex database setup.

5. Meta-data: Associated images and links from posts are relevant meta-data. The plan is to collect this meta-data and potentially use it to enhance the LLM response for information retrieval purposes.

### Collaboration Invitation

Although I do not plan to publish this dataset, I welcome collaboration from researchers or Miata enthusiasts with a tech or AI/ML background. If you're interested in contributing, feel free to reach out.

**Current Status**: Completed scraping part of the dataset from one forum for the ND generation of Miatas. This dataset should provide enough information to begin prototyping and testing the next steps.
**Next Steps**: 
1. Convert the data into a format suitable for fine-tuning and retrieval-augmented generation (RAG).
2. Write and test the fine-tuning code.
3. Continue data collection from the rest of the forum and Reddit.