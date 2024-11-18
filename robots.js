/**
 * This script creates a robots.txt file in the dist folder
 */
import fs from "fs";

const SITE_URL = process.env.SITE_URL;
// Path to the robots.txt file
const filePath = "./dist/robots.txt";

// String to write to the file
const content = `
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: ${SITE_URL}/sitemap-index.xml`;

// Write the content to the file
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`File ${filePath} has been created with content: ${content}`);
});
