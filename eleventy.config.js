import fs from "fs";
import path from "path";
import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";
import cssnano from "cssnano";

export default function (eleventyConfig) {
  // ---------------------------------------------------------------------------
  // PASSTHROUGH COPIES
  // ---------------------------------------------------------------------------

  // JavaScript (including Stimulus controllers)
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });

  // Images
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });

  // Fonts
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });

  // CNAME for custom domain
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // ---------------------------------------------------------------------------
  // CSS PROCESSING (Tailwind 4 via PostCSS)
  // ---------------------------------------------------------------------------

  const cssProcessor = postcss([
    tailwindcss(),
    ...(process.env.NODE_ENV === "production" ? [cssnano({ preset: "default" })] : []),
  ]);

  eleventyConfig.on("eleventy.before", async () => {
    const inputPath = path.resolve("./src/assets/css/main.css");
    const outputPath = "./dist/assets/css/main.css";
    const outputDir = path.dirname(outputPath);

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const cssContent = fs.readFileSync(inputPath, "utf8");
    const result = await cssProcessor.process(cssContent, {
      from: inputPath,
      to: outputPath,
    });

    fs.writeFileSync(outputPath, result.css);

    if (result.map) {
      fs.writeFileSync(`${outputPath}.map`, result.map.toString());
    }
  });

  // ---------------------------------------------------------------------------
  // WATCH TARGETS
  // ---------------------------------------------------------------------------

  // Rebuild CSS when Tailwind input changes
  eleventyConfig.addWatchTarget("./src/assets/css/");

  // Rebuild when JS changes
  eleventyConfig.addWatchTarget("./src/assets/js/");

  // ---------------------------------------------------------------------------
  // FILTERS
  // ---------------------------------------------------------------------------

  // Format dates for display
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  // ISO date for datetime attributes
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return new Date(dateObj).toISOString();
  });

  // Limit array to first N items (useful for "recent" sections)
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array)) return array;
    return array.slice(0, n);
  });

  // ---------------------------------------------------------------------------
  // SHORTCODES
  // ---------------------------------------------------------------------------

  // Current year (for copyright)
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // ---------------------------------------------------------------------------
  // COLLECTIONS
  // ---------------------------------------------------------------------------

  // Blog posts collection
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/content/posts/**/*.md")
      .filter((item) => !item.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  // ---------------------------------------------------------------------------
  // CONFIGURATION
  // ---------------------------------------------------------------------------

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
