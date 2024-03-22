---
layout: post
title: "Creating this website (Part 2)"
excerpt_separator:  <!--more-->
tags:
  - development
  - hydeout
  - jekyll
last_modified_at: 2024-03-21T15:00:00-05:00
published: true
---

I wanted to customize the look and layout of my site, this post details the steps needed to get something similar. The next steps are entirely optional and dependant on how you want to structure / this site.

<p>
    <img style="padding: 25px;" src="/assets/img/building-this-site-2.png">
</p>

<!--more-->

#### Customization

1. You could change the homepage to show static content, and move all the blog posts to a new page that shows all blogs posts chronologically. This new page is accessed through a `Blog` link on the sidebar. The following changes are needed to enable this:
    * Move the default `index.html` page to a new subfolder in the root directory called `blog', and changed its contents to:
      ```
      ---
      layout: posts
      title: Posts
      ---
      ```
    * Create a new file in the root directory called `index.md` with the following header, you can add additional content to this file as needed in Markdown.

      ```md
      ---
      layout: index
      title: Home
      sidebar_link: true
      sidebar_sort_order: 1
      ---
      ```
    * Update the layout for any index page by editing `_layouts/index.html`, as below. This removes the code that renders blog posts on index pages, we're going to use a new layout called `posts` in the next step to render blog posts.

        ```html
        {% raw %}
        ---
        layout: default
        ---
        <div class="content">
            {{ content }}
        </div>
        {% include back-link.html %}
        {% endraw %}
        ```
      
    * Create a new file in the _layouts folder called `posts.html` with the [following code inside](https://raw.githubusercontent.com/sharathbennur/sharathbennur.github.io/master/_layouts/posts.html). This ensures that there's a new layout available to display blog posts which is independant of the index layout
    
    * Update the `_config.yml` file to reflect this new structure, especially the fields: `url`, `baseurl`, `paginate_path`, `sidebar_home_link` and `sidebar_blog_link`

      ```yml
      # Dependencies
      markdown:         kramdown
      highlighter:      rouge

      # Setup
      title:            Sharath Bennur
      email:            sharath.bennur@gmail.com
        
      tagline:          'Personal Website'
      url:              https://sharathbennur.github.io
      baseurl:          ''
      author:
        name:           'Sharath Bennur'
        url:            https://www.sharathbennur.com

      paginate:         5
      paginate_path:    "/blog/page:num/"

      plugins:
        - jekyll-feed
        - jekyll-gist
        - jekyll-paginate

      # Sidebar link settings
      sidebar_home_link:  false
      sidebar_blog_link:  '/blog' 
      ```
    * And fix the links in the sidebar, so you end up with the following code in `_includes/sidebar-nav-links.html` file:

      ```html
      {% raw %}
      <nav id="sidebar-nav-links">

        {% include page-links.html %}

        {% comment %}
          The code below dynamically generates a sidebar nav of pages with
          `sidebar_link: true` in the front-matter. See readme for usage.
        {% endcomment %}

        {% if site.sidebar_blog_link %}
          <a class="page-link {% if page.url == site.sidebar_blog_link %} active{% endif %}"
        href="{{ site.sidebar_blog_link | relative_url }}">Blog</a>
        {% endif %}

        {% include category-links.html %}

        {% include custom-nav-links.html %}
      </nav>
      {% endraw %}
      ```
2. If all the steps here and in [Part 1](({% post_url 2024-03-19-creating-this-site-part1 %})) were followed, the folder structure should look like [this](/assets/md/creating-website-folder-structure).
  
3. Additional customization for the site are below:

    * Add link to your LinkedIn profile - add the LinkedIn svg file to the `_includes/svg` folder from [here] and include the following code in the `_includes/sidebar-icon-links.html` file:

      ```html
        <a id="linkedin-link"
          class="icon" title="LinkedIn Profile" aria-label="LinkedIn"
          href="https://www.linkedin.com/in/{your_linkedin_username}/">
          {% raw %}{% include svg/linkedin.svg %}{% endraw %}
        </a>
      ```

    * Remove comments from blog-posts by commenting out this line from `_layouts/posts.html` as shown:
        
        ```
        {% raw %}<!-- {% include comments.html %} -->{% endraw %}
        ```

    * Use a different default font and font size for the site by editing the following lines in `_sass/hydeout/_variables.scss` as shown:
      
      ```
      $root-font-family: Helvetica, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif !default;

      $large-font-size: 1.1rem !default;
      ```
    * To change the colors on the homepage and sidebar, update the `assets/css/main.scss` as shown:
      
      ```
      $sidebar-fg-color: #fff;
      $sidebar-bg-color: #094275;
      $sidebar-sticky: false;

      $sidebar-title-color: $sidebar-fg-color !default;
      $sidebar-link-color: $sidebar-fg-color !default;
      $sidebar-text-color: rgba($sidebar-fg-color, 0.75) !default;
      $sidebar-icon-color: rgba($sidebar-fg-color, 0.85) !default;
      ```
    