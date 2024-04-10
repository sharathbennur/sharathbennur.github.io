---
layout: post
title: "Decision Intelligence"
excerpt_separator:  <!--more-->
tags:
  - decision-intelligence
  - AI-ML
  - work-experience
last_modified_at: 2021-03-15T15:00:00-05:00
published: true
---

### Why is decision making hard?

Data driven decision-making is an old idea, however - human decision-making is really noisy.

<p>
    <img style="padding: 25px;" src="/assets/img/decision-intelligence-1.png" height="400" width="400">
</p>

<!--more-->

Let's use a simple example - I want to walk from the Wharton school to the iconic Rocky steps at the [Philadelphia Museum of Art](https://philamuseum.org/), what route should I take? For me personally, it depends: if it's a nice day - then I may want to [walk along the river](https://cloudfront-us-east-1.images.arcpublishing.com/pmn/4FC27YKIFBDTXOJOH2QKP6YGCE.jpg) even though its longer route; on a cold windy day - maybe not; or maybe I want a cup of coffee from my favorite cafe that's kind of on the way. All this to say - I'm a noisy human when it comes to deciding this route.

Now consider that Google spends millions of dollars building the [AI-ML algorithms](https://deepmind.com/blog/article/traffic-prediction-with-advanced-graph-neural-networks) behind Google Maps, and you can see why this noisy decision-making might be problematic. There's no guarantee that user's will use these recommendations from Google or even see them (we all have that one friend or relative who uses a mapping app :)

### Role of biases and heuristics

Let's dig a little deeper - why are people noisy decision-makers? Turns out biases and heuristics (mental shortcuts) contribute a lot of noise. Staying the with example from the previous section:

- My inclination to walk along the river on a sunny day is a personal bias - I don't mind the heat and prefer walking in the sun.
- On the other hand, in this hypothetical scenario - if I walked from Wharton to the Art Museum daily and stopped by my favorite cafe frequently - on some days - I might just take that route automatically without thinking. In other words, I'm using a heuristic. 

### The role of data

Sticking with the routing analogy, imagine you are planning a trip to the grand canyon and are thinking about taking a hike to Colorado river.

<img align="right" height="250" style="padding: 25px;" src="/assets/img/decision-intelligence-2.jpg">

- If all you did was look at the picture of the grand canyon to decide that you want to hike to the colorado river - you're making a data inspired decision; as there isn't really any data to go on.

<img align="right" height="250" style="padding: 25px;" src="/assets/img/decision-intelligence-3.jpg">

- If on the other hand, you look at the map of the hiking trails, you're being data informed. Looking at the hiking map, you have some information about the distances involved, but you're still missing some crucial data. 

![](/assets/img/decision-intelligence-4.png)  |  ![](/assets/img/decision-intelligence-5.jpg)

- This last pair of images on the other hand [is what](https://www.nps.gov/grca/planyourvisit/upload/intro-bc-hike.pdf) a lot of casual day hikers wish they had seen before heading down to the Colorado river. These maps tell you exactly what to expect while hiking - and making your plans based on these maps would an example of data driven decision-making.

### What is decision intelligence

This brings us to decision intelligence - while your data science team may create the best model or algorithm, there's clearly no guarantee that users will trust or use these recommendations. Decision Intelligence provides a useful framework for building AI-ML into technology, processes and products. The basic idea is as follows:

- Analyze and understand how and where users make decisions that the business cares about.
- Next, analyze what data is used while making the decision (i.e. are the decisions data inspired / informed / driven?)
- Lastly, strategize on how your technology, process or product will support this decision?

<img align="right" height="250" style="padding: 25px;" src="/assets/img/decision-intelligence-6.png">

On that last point, decision intelligence is fairly agnostic on what kind of decision support is built into your product - think relying on human judgement vs. analytics dashboards vs. statistics vs. using business rules vs. relying on AI-ML completely etc.