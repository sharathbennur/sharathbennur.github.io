---
layout: post
title: "Moving between text prompts using images"
excerpt_separator:  <!--more-->
tags:
  - generative-ai
  - AI-ML
  - diffusion-models
  - fun
last_modified_at: 2024-04-21T15:00:00-05:00
published: true
---

Even though StableDiffusion has been available for a couple of years, I still find diffusion models to be fascinating. I won't go into too much detail on how they work, as others have already covered it extensively and in greater depth; at the end of this text, you can find some reading materials and the code used to produce the images.

A quick summary - when a prompted with some text, a diffusion model starts with an image containing white noise, and then works its way backwards by removing the noise, ultimately resulting in an image that best represents the text prompt. The same process can be used to create images that depict the transition from one text prompt to another, as shown in the images below.

#### Prompt 1

This gif was created using the 2 prompts below, and then using stable diffusion magic (interpolation), images are generated from the transition between the first prompt and the second, those images are then stitched together into a `.gif` file.

- A watercolor painting of a Golden Retriever at the beach
- A still life DSLR photo of a bowl of fruit

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://jumpshare.com/embed/X8r0iQDmGiJeDBbQbURg" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

<!--more-->

-------

#### Prompt 2

How about a creepier variation of the same prompt?

- A watercolor painting of a Chesapeake Bay Retriever at the beach
- An alien in medieval armour, M. C. Escher, Hyperrealist

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://jumpshare.com/embed/Go6EDtQ7GN00orj5EY09" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

-------

#### Prompt 3

What about using 4 prompts (crazy)? Same idea as before but using the 4 prompts below:

- A watercolor painting of a Golden Retriever at the beach
- A still life DSLR photo of a bowl of fruit
- The eiffel tower in the style of starry night
- An architectural sketch of a skyscraper

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://jumpshare.com/embed/TDjB5J5UKSNM1ROnUSAA" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

#### Code

These images were creating using Stable Diffusion 2.1, see code used in [this Jupyter Notebook](https://colab.research.google.com/drive/1zXOsD9FA0WyGZSAkygRRyYnrivuWuuSc?usp=sharing).

#### Additional reading

- A very detailed blog post about diffusion processes, the architecture of diffusion models and examples [(link)](https://blog.marvik.ai/2023/11/28/an-introduction-to-diffusion-models-and-stable-diffusion/)
- The illustrated Stable Diffusion - by Jay Alammar [(link)](https://jalammar.github.io/illustrated-stable-diffusion/)