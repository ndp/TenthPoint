module.exports = function(eleventyConfig) {
  // Pass through vanilla CSS and any images
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};