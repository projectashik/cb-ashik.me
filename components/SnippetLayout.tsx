import Container from "./Container";
import type { PropsWithChildren } from "react";
import type { Blog, Snippet } from ".contentlayer/types";
import Layout from "./Layout";
import { format, parseISO } from "date-fns";
import Link from "next/link";
const editUrl = (slug: string) =>
  `https://github.com/projectashik/cb-ashik.me/edit/main/data/snippets/${slug}.mdx`;

export default function SnippetLayout({
  children,
  snippet,
}: PropsWithChildren<{ snippet: Snippet }>) {
  const tags = snippet.tags.split(",");
  return (
    <Layout
      title={`${snippet.title} - The Tech Hulk Blog`}
      description={snippet.description}
      image={`https://cb-ashik.me${snippet.image}`}
      type="article"
      keywords={snippet.tags}
    >
      <Container>
        <article className="max-w-screen-md text-justify">
          <h1 className="text-4xl font-bold mb-5">{snippet.title}</h1>
          <div className="flex items-center space-x-4 border-b pb-5">
            <p>{snippet.readingTime.text}</p>
            <ul className="flex gap-1 text-sm">
              {tags &&
                tags.map((tag, index) => {
                  return (
                    <li key={index}>
                      <Link href={`snippets/tags/${tag}`}>
                        <a className="bg-purple-400 text-white p-0.5 rounded-sm">
                          #{tag}
                        </a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
            {children}
          </div>
        </article>
      </Container>
    </Layout>
  );
}
