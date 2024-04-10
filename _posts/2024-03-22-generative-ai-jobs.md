---
layout: post
title: "Generative AI & jobs"
excerpt_separator:  <!--more-->
tags:
  - generative-ai
  - AI-ML
  - opinion
last_modified_at: 2024-03-22T15:00:00-05:00
published: true
---
<p>
    <img style="padding: 25px;" src="/assets/img/generative-ai-jobs-1.jpg" width="400" height="400">
</p>

When the topic of Generative AI arises, my friends and family often joke about the possibility of losing their jobs to an AI. So this is an opinion post on what factors influence the effects of generative AI on jobs. 

I usually hear two viewpoints regarding the impact of Generative AI on jobs:

* The first viewpoint argues that job losses are inevitable.
* The second viewpoint suggests that Generative AI will assist and enhance workers' productivity, and the job losses are being exxagerated.

**So which one is it?**

<!--more-->

The reality is more nuanced than what the headlines suggest. Generative AI will probably result in some job losses or even prevent some types of jobs from being created in the future, but let's start by examining some examples from various industries. I'm specifically going to look at the following industries as things will likely play out very differently between them:

- Software development - a willingness to new tools and a lazzaiz faire attitude makes software development both a hotbed for innovation and where we'll first see the potential and pitfalls of Generative AI.
- Legal - the potential for disruption is very high as the law is driven by words, at the same time this is a very conservative industry when it comes to adopting new technologies.
- Healthcare - interesting mixture of language dependance - around healthcare records and education - and moderately conservative on adopting new technologies.
- Architecture - I included this as there are many sectors where Generative AI will have incremental impact largely as the current generation of Generative AI does not directly impact the core business or skill-set.

### Software development jobs

When GitHub announced CoPilot - a generative AI coding assistant, there was a lot of excitement about [increases in the productivity of developers](https://github.blog/2022-09-07-research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/) who used it. The image below shows that developers who used CoPilot reported higher levels of productivity and happiness than those who didn't.

<img src="https://github.blog/wp-content/uploads/2022/09/copilot1.png?resize=1024%2C1024?w=1024" width="500" height="500">

That said, it's important to note some caveats with this white paper. For example, the sample size was relatively small, and there may be a conflict of interest at play.  Regardless, this technology presents some intriguing possibilities for enhancing productivity. In my personal experience using ChatGPT, I've had mixed results. It's fantastic for simple tasks - the code and explanations are clear and generally on point.

However, when it comes to more complex code or less popular programming languages or packages, ChatGPT's usefulness diminishes. It's possible that this will improve over time, but the viability, and cost of scaling and extending its capabilities remain uncertain.

This raises the question of creativity and problem-solving, which are innate skills that human developers possess but generative models do not. It's impossible to get results from a Large Language Model (LLM) on something it's never seen before. New research suggests that combining reinforcement learning with LLMs could lead to new forms of Generative AI that can tackle novel problems. However, this area is still under active research, and the cost and scalability of such systems remain unknown.

Finally, it's worth considering other metrics of software development. A [study from GitClear](https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality) suggests that while developer satisfaction and productivity may increase in the short term, much of the code produced may require revision or be reverted.

> Code churn -- the percentage of lines that are reverted or updated less than two weeks after being authored -- is projected to double in 2024 compared to its 2021, pre-AI baseline. We further find that the percentage of "added code" and "copy/pasted code" is increasing in proportion to “updated,” “deleted,” and “moved” code. In this regard, code generated during 2023 more resembles an itinerant contributor, prone to violate the DRY-ness of the repos visited.

Since software development was the first sector to use generative AI extensively to improve productivity, we'll likely see the earliest impacts - both positive and negative - in this field.

### In Legal

The legal industry is known to be very conservative when it comes to adopting new technology. However, big law firms are starting to explore Generative AI - not necessarily to embrace innovation, but to protect themselves from competitors - as can be seen from the job postings for AI roles [recently](https://news.bloomberglaw.com/business-and-practice/big-laws-ai-jobs-lay-foundation-for-techs-wider-use-at-firms).

> Firms are focusing on practical applications, from using AI to help lawyers do research and draft briefs to streamlining marketing and business development functions.

It's easy to understand why Generative AI is an attractive technology for law, especially when you consider that the current advances in the field with LLMs align very well with law being about the precise meaning of words in different contexts.

> “We realized this was incredibly disruptive tech early,” said Wakeling, whose firm in February announced that it is integrating “Harvey,” an AI platform that’s been enhanced for legal work. “Law is words, and we have a new way of mastering words.”

Like with coding, generative AI can potentially replace a lot of entry-level workers with LLMs parsing and generating a lot of mundane text and aiding lawyers with mundane tasks that might have otherwise been done by less trained workers.

### In Healthcare

Healthcare is an interesting case, while there is some textual data that can be derived from clinical notes, reports etc. - there are other modalities of data - numerical, images, video, waveforms, etc. The real excitement in healthcare from Generative AI comes from 2 areas - better communication and improved medical decision-making.

<p>
    <img style="padding: 25px;" src="/assets/img/generative-ai-jobs-2.png" width="400" height="400">
</p>

Medical decision-making generative AI comes in many different forms, but they all contain some basic elements - an interface (chatbot, voice-to-text, UI) that gathers symptoms and other medical data either from healthcare records or by interacting with the patient; a LLM that can then parse the gathered data and produce textual recommendations in terms of next steps - albeit more tests, a diagnosis, treatment options, follow-up care, automatically generating text reports based on lab tests etc. The latter is often positioned as personalized medicine or a patient router or precision care, but the underlying technology is similar.

What these newer technologies enable by default is new ways of communication between different actors in the healthcare system. For example, when a patient calls into a doctor's office or to an insurers phone line, an AI enabled chatbot or voice assistant are likely the first line of interaction. When you combine this with medical decision-making algorithms, you can see both the potential and perils when it comes to jobs. These systems are also scalable and always available, meaning you can potentially get care or interact with your insurer instantly and at any time of day or night.

From the examples so far, the common theme seems to be the centrality of language albeit a natural or artifical language (e.g. programming languages) with reference to a job or role. For example, frontline or call center staff who have to interact with patients, pharmacies, etc. - their roles will probably be augmented by generative AI to begin with, with those roles eventually being taken over fully by generative AI based bots. 

### Architecture jobs

Per [this provocative article](https://www.bloomberg.com/news/features/2024-03-12/this-ai-architect-will-design-your-climate-friendly-dream-home) in Bloomberg Businessweek - architecture jobs - at least the ones that involve boring tasks like drafting, preparing proposals, permit applications, etc may well be fully outsourced to generative-AI.

<p>
    <img style="padding: 25px;" src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iq4EVJMsc79E/v1/-1x-1.png" width="400" height="400">
</p>

It is likely that a lot of architects, especially senior architects will appreciate having generative-AI applications take away some of the mundane tasks of their jobs. This again puts internships or junior roles at risk, rather that imperil all architect roles.

### Final thoughts

When I began writing this blog post, I didn't have a clear perspective on how to think about this. However as I analyzed the impact of generative AI on different industries and roles, I gained some clarity. It’s important to note that the significant advances in generative AI use language models or multi-modal models that use text or language. So what did we learn? 

The impact of generative AI on different industries and job roles wil vary depending on several factors. The **industry or domain** you work in is a significant factor, as is the specificity of the language used in that industry. Someone in construction is likely to see fewer changes than someone in software development. Second - the nature of your job role matters. Even a writer in a relatively unconventional industry like mining might witness changes in their job role due to the advancements in generative AI.

Second - is the **data** related to your role unique (text or multi-modal) and whether it’s published externally? The current wave of foundation models that underlie generative AI are trained on large datasets that have been collected from different public sources. So, if your data isn't already in the training data, someone has to first collect all the relevant data, and then train or fine-tune a generative model with your data. 

Lastly, **cost** is a crucial factor with a lot of nuances. It can be very expensive to train one of these models, with GPT-4 reportedly [costing $100 million to train](https://www.wired.com/story/openai-ceo-sam-altman-the-age-of-giant-ai-models-is-already-over/). Additionally, the human capital required to train such models is beyond the scope of most organizations and requires experts in generative AI and a skilled engineering team. While fine-tuning these models is possible, it is still an expensive process. 

Organizations will need to consider whether generative AI is a key differentiator or necessary aspect in their industry or for specific roles. Will upskilling current workers with generative AI-based tools provide better ROI or is it better to replace them with generative AI altogether? The answer will vary depending on the industry, role, seniority, complexity, and other factors.




