/**
 * This script creates a robots.txt file in the dist folder
 */
import fs from "fs";

const SITE_URL = process.env.SITE_URL || "https://www.goodmotion.fr";
// Path to the robots.txt file
const filePath = "./dist/robots.txt";

// String to write to the file
const content = `
User-agent: *
Allow: /

# AI search bots (indexation autorisée)
User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: CCBot
Allow: /

# AI training scrapers (désactivés)
User-agent: GPTBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: FacebookBot
Disallow: /

Sitemap: ${SITE_URL}/sitemap-index.xml
`;

// Write the content to the file
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`File ${filePath} has been created with content: ${content}`);
});
