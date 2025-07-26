# Spencer Delcore's Personal Website & Blog

A personal portfolio and blog built with [Eleventy](https://www.11ty.dev/), featuring a modern everest forest theme.

## ✨ Features

- **Fast Static Site Generation** with Eleventy
- **Responsive Design** that works on all devices
- **Blog with Tags** and chronological organization
- **SEO Optimized** with meta descriptions
- **Professional Portfolio** sections for projects and experience
- **Obsidian Integration** for seamless content publishing
- **GitHub Actions** for automatic deployment
- **Custom Theme** with modern glass-morphism effects

## 📋 Prerequisites

- Node.js 18+ (or use the Nix shell)
- npm or yarn
- Git

## 🚀 Quick Start

### Using Nix (Recommended)
```bash
# Enter the development shell
nix develop

# Or with direnv
direnv allow

# Start the development server
npm start
```

### Manual Setup
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📁 Project Structure

```
.
├── _layouts/          # Page layouts (base.njk, post.njk)
├── _includes/         # Reusable components
├── _data/             # Global data files
├── posts/             # Blog posts (Markdown)
├── assets/            # Static assets
│   ├── images/        # Images and favicon
│   ├── styles/        # CSS files
│   └── scripts/       # JavaScript files
├── fonts/             # Web fonts (Lato)
├── files/             # Downloadable files (resume, etc.)
├── _site/             # Generated site (gitignored)
├── .eleventy.js       # Eleventy configuration
├── package.json       # Node dependencies
├── flake.nix          # Nix development environment
├── index.njk          # Homepage
└── blog.njk           # Blog listing page
```

## ✍️ Writing Blog Posts

Create new blog posts in the `posts/` directory as Markdown files:

```markdown
---
title: "Your Post Title"
date: 2025-01-25
description: "A brief description for SEO and post previews"
tags: ["web-development", "eleventy", "tutorial"]
share: true           # For Obsidian publishing workflow
layout: "post.njk"    # Uses the post layout
permalink: "/blog/{{ title | slug }}/"  # Optional custom URL
---

Your content here with **Markdown** support and {{ "Liquid templating" }}...
```

## 🔧 Commands

- `npm start` - Start development server with live reload
- `npm run build` - Build static site to `_site/`
- `npm run serve` - Serve the site without watching
- `npm run watch` - Watch for changes without serving

## 🔧 Development Workflow

### Local Development
- Changes to content and templates are automatically reflected via hot reload
- CSS changes are watched and trigger rebuilds
- Blog posts support Liquid templating in Markdown

### Creating New Pages
1. Create a new `.njk` file in the root directory
2. Add front matter with layout and title
3. The page will be automatically included in the build

### Customizing the Theme
- All styles are defined inline in `_layouts/base.njk`
- Color scheme uses everest forest theme (deep greens and icy blues)
- Modify CSS variables for easy theme customization

## 🌐 Deployment

This site is deployed automatically to GitHub Pages using GitHub Actions. Any push to the `master` branch will trigger a new deployment.

### GitHub Pages Setup
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages (created by GitHub Actions)

## 🎨 Theme

The site features a custom everest forest theme with:
- Deep forest greens (#0f4c5c) and icy blues (#5a9ca8)
- Modern glass-morphism effects
- Responsive design optimized for all devices
- Custom mountain/forest SVG favicon
- Smooth animations and transitions

## 📝 Obsidian Integration

This site is designed to work with the Obsidian GitHub Publisher plugin:

1. Add `share: true` to frontmatter of posts you want to publish
2. Configure the plugin to push to the `posts/` directory
3. The site will automatically build and deploy

### Plugin Configuration
- Repository: `sdelcore/sdelcore.github.io`
- Branch: `master`
- Upload path: `posts`
- Auto clean-up: Enable for removing deleted posts

## 🚨 Troubleshooting

### Common Issues
- **Build fails**: Delete `_site/` folder and rebuild
- **Styles not updating**: Clear browser cache or use incognito mode
- **404 on GitHub Pages**: Ensure your repository settings point to the correct branch
- **Missing dependencies**: Run `npm install` again

### Debug Mode
Run Eleventy with debug output:
```bash
DEBUG=Eleventy* npm start
```

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use. If you find any issues or have suggestions, please open an issue on GitHub.

## 📄 License

MIT License - feel free to use this as a template for your own site!