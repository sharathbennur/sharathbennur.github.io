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
last_modified_at: 2024-05-01T15:00:00-05:00
published: false
---

The first step to building the Miata bot was collecting / scraping the data. The intial plan was to just get the data but like all data efforts, this is easier said than done. In this post, I'm going to lay out some considerations and link to the code for fetching data from one of the forums.

<!--more-->

1. Which communities should I get data from, what does that mean for actually getting data - As it turns out, there's data both on forums and specific sub-reddits each of which have different methods of getting data - scraping and using the Reddit API respectively.

2. How are we getting this data? - I'm using Python + the package - BeautifulSoup4 - to parse each page and get individual pages for the forums and PRAW for Reddit.

3. What were some challenges?
- The primary challenge is getting your data without burdening the site or getting banned. Both Reddit and different online forums require restricting the rate of your programs. So writing code with parameters that control over how often requests are made is critical.
- Another challenge is managing retries - what happens if a request fails. I'm currently using a form of exponential backoff to manage request failures. And we'll talk about recovering from failures next without having to re-collect a lot of data.
- What about caching and fault-tolerance? Caching partial datasets is really important - especially if you're just using `csv` files vs an actual DB with fault-tolerance or backups. This is done by creating and using cache files for partial datasets and keeping a record of what data has been scraped (to avoid repetition). The big downside of using `csv` files for all this is - it can get pretty complicated and painful to track.
- Parallelization - given how slow getting the data is, one option is to run parallel threads or multiple machines.

4. As mentioned above - the data is currently saved as `.csv` files, I did consider using a postgres DB or parquet files and that may well be something I implement in the future depending on needs but right now I'm choosing speed.

I will not be publishing this dataset, but if you are a researcher or a miata enthusiast who wants to collaborate / help and have a tech / AI-ML background, feel free to reach out.