---
layout: post
title: "Adding agents to the CollegeROI webapp - Part 1"
excerpt_separator: <!--more-->
tags:
  - coding
  - webapp
  - agents
  - gemini
  - collegeroi
last_modified_at: 2026-02-14T15:00:00-05:00
published: False
---

Building just a webapp for computing the ROI for colleges was never the end goal. Instead there were 2 end goals:

1. Experiment with the evolving landscape of AI software development
2. Incorporate agents into the webapp to see how webapps in the future might looks like and where agentic workflows might be incorporated.

As a first step in this direction, I have been working on setting up a research agent to help users find the relevant information about colleges. A by product of this work has been a set of agentic tools workflows used by [Anti-gravity](https://antigravity.ai/) that I think are generically useful to review.

<!--more-->

## Workflow illustrated

In general, the workflow was as follows:

### 1. The agent first created an implementation plan

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

```bash
- [x] Create implementation plan <!-- id: 0 -->
- [x] Modify `SYSTEM_PROMPT` to request sources <!-- id: 1 -->
- [x] Update [server.py](file:///home/sharath/code/collegeroi-agents/server.py) and response model <!-- id: 2 -->
    - [x] Update [CollegeResponse](file:///home/sharath/code/collegeroi-agents/server.py#13-17) model <!-- id: 3 -->
    - [x] Parse sources from agent response <!-- id: 4 -->
- [x] Verify API returns sources <!-- id: 5 -->
```

### 3. Lastly the agent provided a walkthrough of the changes

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

