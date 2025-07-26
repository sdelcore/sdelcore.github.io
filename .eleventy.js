module.exports = function(eleventyConfig) {
  // Pass through copy for static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  
  // Pass through posts images
  eleventyConfig.addPassthroughCopy("posts/**/*.{jpg,jpeg,png,gif,svg,webp}");
  
  // Watch for changes
  eleventyConfig.addWatchTarget("src/**/*");
  eleventyConfig.addWatchTarget("posts/**/*");
  
  // Add date formatting filter
  eleventyConfig.addFilter("dateDisplay", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
  
  // Add excerpt filter
  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, 200) + "...";
  });
  
  // Add limit filter
  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });

  // Collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md").reverse();
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "src/includes",
      layouts: "src/layouts",
      data: "src/data"
    },
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};