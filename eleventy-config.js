const fs = require('fs');
const yaml = require('js-yaml');

module.exports = function(eleventyConfig) {
  // Load case data from YAML files
  eleventyConfig.addGlobalData('cases', () => {
    const cases = {};
    const casesDirectory = './src/cases';
    
    // Read all files in the cases directory
    const caseFiles = fs.readdirSync(casesDirectory);
    
    // Process each YAML file
    caseFiles.forEach(file => {
      if (file.endsWith('.yaml')) {
        const caseName = file.replace('.yaml', '');
        const filePath = `${casesDirectory}/${file}`;
        
        try {
          const fileContents = fs.readFileSync(filePath, 'utf8');
          cases[caseName] = yaml.load(fileContents);
        } catch (error) {
          console.error(`Error loading case file ${file}:`, error);
        }
      }
    });
    
    return cases;
  });

  // Copy assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");

  // Watch folders
  eleventyConfig.addWatchTarget("src/images");

  // Add case collection
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