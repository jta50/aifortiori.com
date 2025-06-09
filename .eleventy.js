module.exports = function(eleventyConfig) {
  // Copy images folder to output
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Copy any CSS files if you have them
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Watch for changes in images during development
  eleventyConfig.addWatchTarget("src/images");
  
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};