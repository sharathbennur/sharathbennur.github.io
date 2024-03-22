---
layout: post
title: "Creating this website (Part 1)"
excerpt_separator:  <!--more-->
tags:
  - development
  - hydeout
  - jekyll
last_modified_at: 2024-03-19T15:00:00-05:00
published: true
---

This website was built using [Jekyll](http://jekyllrb.com) (a static site generator) and [Hydeout](https://github.com/fongandrew/hydeout) (theme + additional functionality). I initially tried to use Jekyll and Hyde (the top google search results point to this solution), but turns out - the latest version of Jekyll doesn't work properly with Hyde!

<p>
    <img style="padding: 25px;" src="/assets/img/introducing-hyde-1.png">
</p>

<!--more-->

This part 1 of the tutorial has all the steps for creating the basic website and getting it up and running. [Part 2]({% post_url 2024-03-21-creating-this-site-part2 %}) addresses customization required to make it look nice and personalize some functionality.

#### Pre-requisites

Some hard and soft pre-requisites for building this type of site:
* Have a github account and have some basic understanding of how github repositories work. 
  * Note that user and organization Github pages live in a special GitHub repository dedicated to only the GitHub Pages files. This repository must be named after the account name. For example, @sharathbennur’s user page repository has the name sharathbennur.github.io. 
  * Content from the master branch of your repository will be used to build and publish the GitHub Pages site, so make sure your Jekyll site is stored there.

* Comfort with some basic programming tasks and the command line, or are willing to learn (either using Google or ChatGPT etc.).

* Know how to write in markdown files or are willing to learn ([guide-1](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), [guide-2](https://www.markdownguide.org/cheat-sheet/)).

* Some knowledge of `html` and `css` are really helpful but not required if you don't plan to customize the look and feel of the site. 

#### Steps to get the site up and running

1. The first step is to install Jekyll
    * Guide for Ubuntu (<a href="https://jekyllrb.com/docs/installation/ubuntu/" target="_blank">link</a>) or other linux (<a href="https://jekyllrb.com/docs/installation/other-linux/" target="_blank">link</a>).
    * macOS guide (<a href="https://jekyllrb.com/docs/installation/macos/" target="_blank">link</a>) is a bit more involved as you have to install [Homebrew](https://brew.sh/) and install `Ruby`
    * Windows guide (<a href="https://jekyllrb.com/docs/installation/windows/" target="_blank">link</a>) - also has more steps.

2. The second step is to get the [Hydeout repo](https://github.com/fongandrew/hydeout), you can do this in one of two ways
  * Download the zip file using the `<> Code` button on the repo homepage, unzip to your preferred location
  * Fork the repository to your own github account - the advantage of this would have been to enable easy syncing of updates to your repo. Then checkout this new repo on your account to your preferred location.

3. If you decided to download the repository as a zip file, you have a couple of extra steps to get your repository synced with github
  * Make sure that your `index.md` file is in the root folder of your repo before the intializing the git repository.
  * Navigate to the root folder of your repository (which contains the `index.md` file using command line and run `git init` - this initialzes your folder as a git repository
  * You still have to tell your local git repo where the corresponding remote git repository is located. This can be done using the following commands:

    ```sh
    git remote add origin https://github.com/{your_github_username}/{your_repo}.git
    
    # For example:
    git remote add origin https://github.com/sharathbennur/sharathbennur.github.io.git
    ```
4. Update your `_config.yml` file as needed. Some fields to update are:
  * title
  * tagline
  * description
  * url
  * baseurl - this determines the root of your website (`{your_github_username}.github.io/` or `{your_github_username}.github.io/hydeout`)
  * author

5. Navigate to where you setup your git repository from the command line and run `bundle exec jekyll serve`. If you have Ruby and Jekyll setup correctly, navigating to `http://127.0.0.1:4000/hydeout/` should show you a basic website identical to the Hydeout homepage.

    <img alt="Mobile home page" src="/assets/img/introducing-hyde-1.png?raw=true" width="800px" />

6. In my installation, I needed to install some additional gems before the previous step worked:

    ```
    gem install jekyll jekyll-gist jekyll-sitemap jekyll-seo-tag
    gem add webrick
    ```

7. I ended up customizing many elements of my Jekyll+Hydeout project, details are in [Part 2]({% post_url 2024-03-21-creating-this-site-part2 %}). If you want to use the project as is, here are some suggested next steps:

    * Update the content in the following files:
      * about.md - typically for content either about the author/s or the site  
      * LICENSE.md - IMPORTANT to specify what type of copyright you want to assign to your content
      * Optional - README.md - its the page displayed at the root of your github project
    * Remove most (if not all) of the posts that come in the `_posts` directory. Note: this does leave you with an empty homepage, so be prepared to add some content ASAP.
    * Create a new folder called `_drafts` (for draft posts).
    * Add some new pages in the `category` folder and remove / update any files there that are not required. Pages in this folder allow you to add a page and link to the sidebar. Note that you can determine the order of links in the sidebar using the `sidebar_sort_order` instruction in the page header.

      ```md
      ---
      layout: category
      title: Fancy Title
      category: My Category
      sidebar_sort_order: 2
      ---
      ```

8. Before publish your website on `{your_github_username}.github.io`, do make sure that you have added your own content, categories, blog posts and other pages to the project - commited them and pushed them to the `master` branch of your `{your_github_username}.github.io` repository. 

    Once you have your content ready to publish, its time to publish on [Github Pages](https://pages.github.com/). These instructions are loosely based on [this guide](https://jekyllrb.com/docs/continuous-integration/github-actions/)
    
      1. Go to the Settings tab on your repository.
          * Click Pages under Code and automation.
          * Change Source under Build and deployment from `Deploy from a branch` to `GitHub Actions`.
          * Upon doing this - Github suggested creating a Jekyll Action workflow and I just followed the suggested steps, so the next step #2 only applies if that doesn't work for you. 
      2. Go to the Actions tab on your repository.
          * Start a New workflow and search for Jekyll.
          * Click Configure under the Jekyll workflow (not GitHub Pages Jekyll workflow).
      3. Review the change and click Commit changes.
      4. Now any local changes pushed to the `master` branch will trigger the 'action' and the static site will start building and deploy. You can see build statuses in the 'Action' tab for your project:

          ![image](/assets/img/building-this-site-1.png)

      5. Check `https://{your_github_username}.github.io` to see if your site was published 😎

___

#### Final thoughts & considerations

Finally, some things to keep in mind:

  * Though Jekyll suggest updating the `Gemfile` in your root directory, be aware that Hydeout also uses the `*.gemspec` file in your root directory.

  * You can replace the favicon that comes with the Hydeout theme with your own favicons. I used [this generator online](https://favicon.io/).

  * Jekyll is a static site generator - meaning it uses the markdown, configuration, html & asset files provided to create a static html website at runtime. If you want to delete and recreate the static files at any time - run `jekyll clean` followed by `bundle exec jekyll serve` again.
