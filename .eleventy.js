module.exports = function(eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");

  // Watch folders
  eleventyConfig.addWatchTarget("src/images");

  // ✅ Add case collection
  eleventyConfig.addCollection("cases", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/cases/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};