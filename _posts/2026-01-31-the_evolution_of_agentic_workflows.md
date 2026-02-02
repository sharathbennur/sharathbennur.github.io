---
layout: post
title: "The evolution of agentic workflows - lessons from coding-assistants"
excerpt_separator: <!--more-->
tags:
  - coding-assistants
  - workflows
  - agents
  - human-in-the-loop
  - work
last_modified_at: 2026-01-31T22:30:00-05:00
published: True
---

The use of coding assistants has shifted from one-way execution to dynamic back-and-forth. This evolution suggests a universal model for agent integration across industries. Look at the AntiGravity IDE screenshot below, notice the different phases of the workflow in the agent interface:

<p>
    <img style="padding: 25px;" src="/assets/img/evolution-of-agentic-1.png" width="640" height="480">
</p>

<!--more-->

Taking a more detailed look at each step, lets see the text and the code the agent returns at every step:

### 1. The agent first creates an implementation plan

Note how the implementation plan includes a description of the agents understanding of the task, specific steps to achieve the goal and a plan to verify successful implementation (more on this at the end).

```markdown
# Include Sources in API Response

## Goal Description
Update the API to return a list of source URLs used by the agent to find tuition information. This involves modifying the agent's system prompt to request a structured source list and updating the server to parse and return these sources in the JSON response.

## Proposed Changes

### Source Code
#### [MODIFY] [src/agent.py](file:///home/sharath/code/collegeroi-agents/src/agent.py)
- Update `SYSTEM_PROMPT` to instruct the agent to list used URLs under a "SOURCES:" heading at the end of the response.

#### [MODIFY] [server.py](file:///home/sharath/code/collegeroi-agents/server.py)
- Update `CollegeResponse` Pydantic model to include `sources: list[str]`.
- Implement logic to parse the "SOURCES:" section from the agent's text response.
- Populate the `sources` field in the response.

## Verification Plan

### Automated Tests
- Restart the server.
- curl the endpoint again for a college (e.g., "Stanford University").
- Verify the JSON response contains a `"sources"` field with valid URLs.
```

### 2. The agent then executed the plan

Next the agent provides an update at every step of the plan execution and based on the permissions set by the user, may even ask for incremental permission at every step.

```bash
- [x] Create implementation plan <!-- id: 0 -->
- [x] Modify `SYSTEM_PROMPT` to request sources <!-- id: 1 -->
- [x] Update [server.py](file:///home/sharath/code/collegeroi-agents/server.py) and response model <!-- id: 2 -->
    - [x] Update [CollegeResponse](file:///home/sharath/code/collegeroi-agents/server.py#13-17) model <!-- id: 3 -->
    - [x] Parse sources from agent response <!-- id: 4 -->
- [x] Verify API returns sources <!-- id: 5 -->
```

### 3. Lastly the agent provided a walkthrough of the changes

Last, the agent provides a clear walkthrough with a summary, a description of the changes, and finally how it verified that it had completed the task successfully.

```markdown
# FastAPI Server Verification

I have successfully implemented and verified the FastAPI server for the College ROI Agent, including the feature to return source URLs.

## Changes Made

### backend
- Created `.server.py` which hosts the FastAPI application.
- Added `/college/{college_name}` endpoint to retrieve tuition information.
- Updated `requirements.txt` with `fastapi` and `uvicorn`.
- **[NEW]** Updated `SYSTEM_PROMPT` in `src/agent.py` to request a list of sources.
- **[NEW]** Updated `server.py` to parse sources from the agent's response and include them in the JSON output.

## Verification Results

### Server Startup
The server starts successfully on port 8000.

### Endpoint Test with Sources
I tested the endpoint with a request for "Stanford University" to verify it returns tuition info and sources.

    **Request:**
    ```bash
    curl "http://localhost:8000/college/Stanford%20University"
    ```

    **Response:**
    ```json
    {
        "college_name": "Stanford University",
        "tuition_info": "Stanford University's estimated cost per year for the 2025-2026 academic year is $96,513. This includes:\n\n*   **Tuition and Fees:** $67,731\n*   **Room and Board:** $22,167\n\nThe total estimated cost per year is $89,898. This figure does not include additional expenses such as books, supplies, personal expenses, or health insurance. Stanford University is a private institution, so tuition is the same for in-state and out-of-state students.",
        "sources": [
            "https://studentservices.stanford.edu/tuition-rates",
            "https://admissionsight.com/stanford-university-cost/"
        ]
    }
    ``` 

The agent successfully processed the request, returned the estimated tuition cost, and provided a list of valid source URLs.
```

Main takeaways for agentic workflows for other domains:

- Create and/or Share an implementation plan for what the agent is about to do with detailed steps.
- Keep the user informed on the progress of the plan.
- Many agentic flows use what are called "Ralph-Wiggum loops" (including AntiGravity + Gemini 3 Pro) which assumes errors will occur during the workflow, and the agent asks for permission as needed during execution.
- When complete - provide a full walkthrough of what was done and how it was verified.

If you are not familiar with the Ralph Wiggum loop, check out [this clip](https://www.youtube.com/watch?v=I7azCAgoUHc) and I will write a post on this topic soon.