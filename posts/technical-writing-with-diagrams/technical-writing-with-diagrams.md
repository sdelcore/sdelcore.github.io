---
layout: post.njk
title: Technical Writing with Mermaid Diagrams and Images
date: 2025-01-25
description: Learn how to create beautiful technical documentation with Mermaid diagrams and properly formatted images in your blog posts.
tags: ["tutorial", "mermaid", "documentation", "markdown"]
share: false
---

This post demonstrates how to include images and create interactive diagrams using Mermaid.js in your Eleventy blog posts. Whether you're documenting a system architecture, explaining a workflow, or illustrating machine learning concepts, these tools will help make your content more engaging and understandable.

## Including Images

### Local Images from Attachments Folder

You can include images stored directly in your post's `attachments` folder. This keeps your post content and images together:

![Example diagram from local attachments](./attachments/example-diagram.svg)

### Site-wide Images

You can also reference images from the main assets directory:

![Mountain landscape representing our everest forest theme](/assets/images/favicon.svg)

### External Images

You can also include images from external sources:

![Eleventy Logo](https://www.11ty.dev/img/logo-github.svg)

### Images with Captions

For more professional documentation, use HTML figure elements:

<figure>
  <img src="/assets/images/favicon.svg" alt="Site favicon showing mountain peaks">
  <figcaption>Our custom favicon featuring stylized mountain peaks and forest elements</figcaption>
</figure>

## Mermaid Diagrams

Mermaid allows you to create diagrams using simple text descriptions. Here are some examples:

### Flowcharts

Perfect for documenting processes and decision trees:

<pre class="mermaid">
flowchart TD
    A[User writes in Obsidian] --> B{Ready to publish?}
    B -->|Yes| C[Add 'share: true' to frontmatter]
    B -->|No| D[Continue editing]
    C --> E[GitHub Publisher Plugin]
    E --> F[Push to posts/ directory]
    F --> G[GitHub Actions triggered]
    G --> H[Eleventy builds site]
    H --> I[Deploy to GitHub Pages]
    I --> J[Blog post is live!]
</pre>

### Sequence Diagrams

Great for showing interactions between different components:

<pre class="mermaid">
sequenceDiagram
    participant User
    participant Obsidian
    participant GitHub
    participant Actions
    participant Pages
    
    User->>Obsidian: Write blog post
    User->>Obsidian: Set share: true
    Obsidian->>GitHub: Push via Publisher plugin
    GitHub->>Actions: Trigger workflow
    Actions->>Actions: Run Eleventy build
    Actions->>Pages: Deploy _site/
    Pages-->>User: Blog is live!
</pre>

### Class Diagrams

Useful for documenting code architecture:

<pre class="mermaid">
classDiagram
    class BlogPost {
        +String title
        +Date date
        +String content
        +Array tags
        +Boolean share
        +render()
        +getExcerpt()
    }
    
    class EleventyConfig {
        +Array collections
        +Object filters
        +addCollection()
        +addFilter()
        +addPassthroughCopy()
    }
    
    class GitHubPublisher {
        +String repository
        +String branch
        +publish()
        +sync()
    }
    
    BlogPost <|-- EleventyConfig
    GitHubPublisher --> BlogPost
</pre>

### State Diagrams

Perfect for showing different states in your application:

<pre class="mermaid">
stateDiagram-v2
    [*] --> Draft
    Draft --> UnderReview: Submit for review
    UnderReview --> Published: Approve
    UnderReview --> Draft: Request changes
    Published --> Archived: Archive post
    Archived --> [*]
    
    Draft: Draft Post
    UnderReview: Under Review
    Published: Published
    Archived: Archived
</pre>

### Gantt Charts

For project timelines and schedules:

<pre class="mermaid">
gantt
    title Blog Development Timeline
    dateFormat  YYYY-MM-DD
    section Setup
    Install Eleventy           :done,    des1, 2025-01-20, 1d
    Configure build            :done,    des2, after des1, 1d
    Create layouts             :done,    des3, after des2, 2d
    section Content
    Write first post           :active,  des4, 2025-01-24, 2d
    Add Mermaid support        :         des5, after des4, 1d
    Create documentation       :         des6, after des5, 2d
    section Deployment
    Setup GitHub Actions       :         des7, 2025-01-26, 1d
    Deploy to GitHub Pages     :         des8, after des7, 1d
</pre>

### Pie Charts

For showing distributions and percentages:

<pre class="mermaid">
pie title Languages Used in This Project
    "JavaScript" : 45
    "Nunjucks" : 25
    "Markdown" : 20
    "CSS" : 10
</pre>

### Git Graphs

Show git branching strategies:

<pre class="mermaid">
gitGraph
    commit id: "Initial commit"
    commit id: "Add Eleventy"
    branch feature/blog
    checkout feature/blog
    commit id: "Create blog layout"
    commit id: "Add first post"
    checkout main
    merge feature/blog
    commit id: "Deploy to production"
    branch feature/mermaid
    checkout feature/mermaid
    commit id: "Add Mermaid support"
    checkout main
    merge feature/mermaid
</pre>

## Combining Images and Diagrams

You can create comprehensive technical documentation by combining both images and diagrams. For example, here's how the blog publishing workflow works:

<pre class="mermaid">
flowchart LR
    subgraph "Local Development"
        A[Write in Obsidian] --> B[Preview locally]
    end
    
    subgraph "Publishing"
        C[GitHub Publisher] --> D[GitHub Repository]
        D --> E[GitHub Actions]
    end
    
    subgraph "Production"
        F[Eleventy Build] --> G[GitHub Pages]
    end
    
    B --> C
    E --> F
</pre>

## Best Practices

1. **Image Optimization**: Always optimize your images before uploading. Use tools like ImageOptim or TinyPNG.

2. **Alt Text**: Always include descriptive alt text for accessibility:
   ```markdown
   ![Description of the image](/path/to/image.jpg)
   ```

3. **Mermaid Themes**: The diagrams automatically use our everest forest color scheme to match the site theme.

4. **Responsive Images**: All images are automatically made responsive with CSS.

5. **File Organization**: Keep images organized in `assets/images/` with descriptive names.

## Advanced Mermaid Features

### Entity Relationship Diagrams

<pre class="mermaid">
erDiagram
    BLOG-POST ||--o{ COMMENT : has
    BLOG-POST ||--o{ TAG : has
    AUTHOR ||--o{ BLOG-POST : writes
    BLOG-POST {
        string title
        date published_date
        string content
        boolean is_published
    }
    COMMENT {
        string author_name
        string content
        datetime created_at
    }
    TAG {
        string name
        string slug
    }
    AUTHOR {
        string name
        string email
        string bio
    }
</pre>

### Mind Maps (Experimental)

<pre class="mermaid">
mindmap
  root((Blog Topics))
    Machine Learning
      Neural Networks
      Deep Learning
      MLOps
    Web Development
      Frontend
        React
        Vue
        Eleventy
      Backend
        Node.js
        Python
        Go
    DevOps
      CI/CD
      Docker
      Kubernetes
</pre>

## Conclusion

With Mermaid diagrams and proper image handling, you can create rich, interactive technical documentation that engages your readers and clearly communicates complex concepts. The combination of Eleventy's static site generation and Mermaid's dynamic diagrams provides a powerful platform for technical blogging.

Try experimenting with different diagram types to find what works best for your content. Remember, the goal is to make your technical content more accessible and understandable to your audience.