import { writeFileSync } from "fs";
import RSS from "rss";
import { allBlogs } from ".contentlayer/data";
import { allSnippets } from ".contentlayer/data";

async function generate() {
  const feed = new RSS({
    title: "Ashik Chapagain",
    site_url: "https://cb-ashik.me",
    feed_url: "https://cb-ashik.me/feed.xml",
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://cb-ashik.me/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary,
      keywords: post.tags,
    });
  });

  allSnippets.map((snippet) => {
    feed.item({
      title: snippet.title,
      url: `https://cb-ashik.me/snippets/${snippet.slug}`,
      description: snippet.description,
      keywords: snippet.tags,
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
