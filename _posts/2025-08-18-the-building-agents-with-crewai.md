---
layout: post
title: "Building agents with CrewAI"
excerpt_separator: <!--more-->
tags:
  - generative-ai
  - applications
  - agents
  - work
  - crewai
last_modified_at: 2025-08-18T15:00:00-05:00
published: True
---

## What was the goal?
The high level goals for this experiment with CrewAI were pretty straightforward:

1. Get some first hand experience with CrewAI by using it to create agents.
2. Understand how crew-ai with the aim to compare it against other frameworks over the next few weeks/months.
3. Learn enough to use it for both work and for side-projects that might arise in the future.

The actual code / agents / tasks were created to write an authoritative and well researched article / blog post on a subject near and dear to my heart - namely Miatas (see post about a future/past Miata-bot [here]({% post_url 2024-05-01-the-miata-bot-part1 %})). Could I get a set of agents to write an interesting post about a Miata related topic (namedly after-market Exhaust systems), that I was familiar with? This way, I would not only be in a position to assess the accuracy and quality of what was writte but hopefully learn something new as well. 

<!--more-->

### What agents did I use?

I created 3 agents loosely based on the tutorial from CrewAI. I am also including the agent code/description so readers get a real sense of what it takes to build one of these and de-mystify the process a bit.

#### Content planner agent

Its role is to create a plan for the what and how the Content writer agent will work

```
planner = Agent(
    role="Content Planner",
    goal="Plan engaging and factually accurate content on {topic} for Mazda Miatas",
    backstory="You're working on planning a blog article about the topic: {topic} for Mazda Miatas. You collect information that helps the audience learn something and make informed decisions. Your work is the basis for the Content Writer to write an article on this topic.",
)
```
#### Content writer agent

Its role is to write an article - while this is supposed to be draft of the article - it looked pretty close to the final article.

```
# content writing agent
writer = Agent(
    role="Content Writer",
    goal="Write insightful and factually accurate opinion piece about the topic: {topic} for Mazda Miatas",
    backstory="You're working on a writing a new opinion piece about the topic: {topic} for Mazda Miatas. You base your writing on the work of the Content Planner, who provides an outline and relevant context about the topic. You follow the main objectives and direction of the outline, as provide by the Content Planner. You also provide objective and impartial insights and back them up with information provide by the Content Planner. You acknowledge in your opinion piece when your statements are opinions as opposed to objective statements.",
)
```

#### Content editor agent

Its role was to critique and fix what the content writer agent wrote and return a final version that is close to ideal as possible.

```
# content editor agent
editor = Agent(
    role="Content Editor",
    goal="Edit a given blog post to align with the writing style of the organization. ",
    backstory="You are an editor who receives a blog post from the Content Writer. Your goal is to review the blog post to ensure that it follows journalistic best practices, provides balanced viewpoints when providing opinions or assertions, and also avoids major controversial topics or opinions when possible",
)
```

### This also needed tasks..

CrewAI requires not only agents to be setup but also tasks that clearly delineate what is expected of each agent. 

For example, the planning task is shown below:

```
# writing task
write_task = Task(
    description=(
        "1. Use the content plan to craft a compelling blog post on {topic} on Mazda Miatas.\n"
        "2. Incorporate SEO keywords naturally.\n"
		    "3. Sections/Subtitles are properly named in an engaging manner.\n"
        "4. Ensure the post is structured with engaging introduction, insightful body, and a summarizing conclusion.\n"
        "5. Proofread for grammatical errors and alignment with the brand's voice.\n"
    ),
    expected_output="A well-written blog post in markdown format, ready for publication, each section should have 2 or 3 paragraphs.",
    agent=writer,
)
```

## What the agents wrote:

At the end of this 2 day experiment with crewai, here are some of my learnings:
- Building agents is becoming remarkably easy, however workflow, state and memory management do not seem trivial.
- To see / run the code (you will need to copy the Jupyter notebook and provide your own Openrouter / OpenAI API key) I used to create the article, see this [link]({% post_url 2025-08-18-what-the-agents-wrote %}).

### Positives:

1. I was surprised by how accessible the entire stack is, from creating the planner agent to connecting the agents together. All this took a couple of days to put together.
2. I was also surprised by how detailed the content writing plan ended up being - though I am not sure if that was because I was using GPT-5-mini or I would have seen similar results with another LLM. Definitely worth testing further.
3. I learnt something new! Even though I am quite familar with different exhause systems on the market for ND Miatas, I didn't realize that some of them created challenges with heat sheilding. I had to double-check what the agents said - turns out they were right!
4. The task instructions definitely need more detail on tone and whether to include promotional material or not or the article can sound sales-ey.
5. All this cost a grand total of 3.5c, this of course excludes the time I spent putting it all together.

### Negatives:

1. Despite the editor agent, I think the article needs proofing and validation.
2. It sounds boring! There are more and more AI-written articles being published and quite frankly - they are relatively easy to detect as they are often boring to read. I'm sure the agents or the prompts we use will eventually overcome this, but for now - its still an issue.