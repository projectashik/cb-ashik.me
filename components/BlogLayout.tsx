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
      keywords={post.tags}
    >
      <Container>
        <article className="max-w-screen-md text-justify">
          {post.image && (
            <div className="mb-10">
              <Image
                src={post.image}
                height={627}
                width={1280}
                alt="Ashik Chapagain"
                className="rounded"
              />
            </div>
          )}
          <h1 className="text-4xl font-bold mb-5">{post.title}</h1>
          <div className="flex items-center space-x-4 border-b pb-5">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/profile.jpg"
                height={50}
                width={50}
                alt="Ashik Chapagain"
                className="rounded-full"
              />
              <p>
                {"Ashik Chapagain / "}
                {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
              </p>
            </div>
            <p>{post.readingTime.text}</p>
          </div>
          {/* <div className="flex mt-4 space-x-2">
            <p>Tags:</p>
            <span className="bg-gray-300 rounded-xl px-2 font-medium">JS</span>
            <span className="bg-gray-300 rounded-xl px-2 font-medium">
              Portfolio
            </span>
          </div> */}
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
            {children}
          </div>
        </article>
      </Container>
    </Layout>
  );
}
