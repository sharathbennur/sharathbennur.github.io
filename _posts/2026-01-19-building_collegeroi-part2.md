---
layout: post
title: "Building the CollegeROI webapp with a coding assistant - Part 2"
excerpt_separator: <!--more-->
tags:
  - coding
  - webapp
  - code-assistant
  - agents
  - work
  - gemini
last_modified_at: 2026-01-19T15:00:00-05:00
published: True
---

I hadn't planned a part 2 to the original post on creating [CollegeROI.app](https://www.collegeroi.app), but I was unhappy with the initial test coverage and quality. Both Gemini 3 Pro and GitHub Copilot struggled to write tests that consistently passed for the application's core logic.

So round 2 of using coding-assistants to write tests was focused on addressing these issues. In the process, I alse ended up using Google's new agentic IDE - [Antigravity](https://antigravity.google/), which has an interesting feature that summarizes the actions taken by the coding assistant, as shown below:

<p>
    <img style="padding: 25px;" src="/assets/img/collegeroi-1.png" width="640" height="480">
</p>

<!--more-->

I've included some screenshots of how the coding-assistant shared its progress while writing tests. The experience also highlighted some interesting features that agentic applications like Antigravity seem to be incorporating:

1. Giving users control over how they interact with the coding assistant. With Antigravity, you can pick specific modes and policies or combinations of them:
    - Agentic modes:
        - Planning: Agent can plan before executing tasks.
        - Fast: Agent will execute tasks directly. 
    - Review policy:
        - Always Proceed: Agent never asks for review
        - Request Review: Agent always asks for review

2. Once an agent was given a task - it wrote the code, ran the code, and if the code failed as shown in the screenshot below, it iteratively rewrote the code, while asking for permission to continue running, refining and testing the code, until the code passed all tests.

    <p>
        <img style="padding: 25px;" src="/assets/img/collegeroi-2.png" width="640" height="480">
    </p>

3. The part that surprised me the most in this phase of my experiment was the ability of the coding assistant to integrate the test suite into the Github Actions CI/CD pipeline. As shown in the screenshot below, the coding assistant was able to successfully integrate the test suite into the CI/CD pipeline. Now, if any of the tests fail, the CI CD pipeline on Github actions fails and the updated code is not built and deployed to firebase hosting. 

    <p>
        <img style="padding: 25px;" src="/assets/img/collegeroi-3.png" width="640" height="480">
    </p>
    
    This is something that in the past would have taken a fair bit of time (depending on your experience level and complexity of the pipeline) as you have to get the syntax exactly right and each pipeline takes time to run. All it took here was this single prompt: `Integrate the tests so that if the tests fail, the CI CD pipeline on Github actions fails as well and the updated code is not built and deployed on firebase hosting`. 
    
    All in all, this is a huge time-saver.

4. One final suprise was the walkthrough that Antigravity + Gemini 3 Pro generated for me. I was pleasantly surprised by the level of detail in the walkthrough, where I was able to see the exact steps that were taken by the coding assistant to integrate the test suite into the CI/CD pipeline. I've included the full walkthrough below. 

    >**The walkthrough generated on CI/CD Test Integration**
    >
    >**Overview**
    I have successfully integrated the automated test suite into your GitHub Actions CI/CD pipeline. This ensures that every deployment to Firebase Hosting is preceded by a full test run. If any test fails, the build and deployment process will be halted, preventing broken code from reaching production.
    >
    >**Changes**
    1. Updated GitHub Action Workflows I modified both:
    - firebase-hosting-merge.yml
    (for merges to main) and 
    - firebase-hosting-pull-request.yml
    (for PRs) to include the following steps before the build process:
    - npm ci: Installs dependencies cleanly.
    - npm test -- run: Runs the Vitest suite once (not in watch mode).
    >
    2. Fixed Local Tests: During verification, I identified and fixed a failure in `src/tests/Home.test.tsx` where the test expectation for the hero image source did not match the actual file path. All tests (Home and Calculator) are now passing locally.
    >
    >**Verification**
    >
    I verified the changes by:
    - Correcting the failing local test.
    - Running npm test -- run locally to confirm all 12 tests pass.
    - Visually verifying the YAML syntax in the workflow files.
    - The pipeline is now configured to automatically guard your deployments!

---

#### Links
* You can see [the original spreadhsheet here](https://docs.google.com/spreadsheets/d/1lC7rpbWDPf1Vnq_FqvW5jgpvRCJXSpyjA9qFk9WWwsc/edit?usp=sharing)
* CollegeROI [Github Repo](https://github.com/sharathbennur/collegeroi/)