module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  
  eleventyConfig.addFilter("relative_url", function(url) {
    return url;
  });
  
  eleventyConfig.addLiquidFilter("default", function(value, defaultValue) {
    return value ? value : defaultValue;
  });

  return {
    dir: {
      input: ".",
      layouts: "_layouts",
      output: "_site"
    }
  };
};
