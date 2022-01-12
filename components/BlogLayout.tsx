import Image from "next/image";

import Container from "./Container";
import type { PropsWithChildren } from "react";
import type { Blog } from ".contentlayer/types";
import Layout from "./Layout";
import { format, parseISO } from "date-fns";
const editUrl = (slug: string) =>
  `https://github.com/projectashik/cb-ashik.me/edit/main/data/blog/${slug}.mdx`;

export default function BlogLayout({
  children,
  post,
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <Layout
      title={`${post.title} - The Tech Hulk Blog`}
      description={post.summary}
      image={`https://cb-ashik.me${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <Container>
        <article>
          <h1>{post.title}</h1>
          <div>
            <div>
              <Image
                src="/images/profile.jpg"
                height={24}
                width={24}
                alt="Ashik Chapagain"
              />
              <p>
                {"Ashik Chapagain / "}
                {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
              </p>
            </div>
            <p>{post.readingTime.text}</p>
          </div>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
            {children}
          </div>
        </article>
      </Container>
    </Layout>
  );
}
