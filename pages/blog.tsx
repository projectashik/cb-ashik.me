import Layout from "components/Layout";
import { allBlogs } from ".contentlayer/data";
import { InferGetServerSidePropsType } from "next";
import { useState } from "react";
import { Blog } from ".contentlayer/types";
import Image from "next/image";
import Container from "components/Container";
import Link from "next/link";
import { BsFillClockFill } from "react-icons/bs";

const Blog = ({ posts }: { posts: Blog[] | null }) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts =
    posts &&
    posts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  posts = filteredBlogPosts ?? posts;
  return (
    <Layout>
      <Container>
        <h1 className="text-5xl text-center  mt-24 font-bold tracking-wider">
          The Tech Hulk Blog
        </h1>
        <form>
          <input
            className="w-full border-2 mb-28 mt-10 border-gray-600 placeholder:text-gray-500 focus:border-primary-500 focus-within:border-primary-500 focus-visible:border-primary-500 active:border-primary-500 ouline-none rounded-lg py-2 px-4"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>

        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
          {posts &&
            posts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <a
                  className="inline-block max-w-sm rounded-md bg-white border border-transparent hover:border-primary-500 hover:shadow-lg transition duration-500 ease-in-out transform"
                  key={index}
                >
                  <div className="p-2 flex flex-col">
                    <p className="font-bold tracking-wide text-lg ">
                      {post.title}
                    </p>
                    <p className="text-sm text-gray-700">{post.summary}</p>
                    <p className="flex gap-1 text-gray-800 text-sm mt-2 items-center">
                      <BsFillClockFill />
                      {new Date(post.publishedAt).toDateString()}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
        </div>
      </Container>
    </Layout>
  );
};

export default Blog;

export function getStaticProps() {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return { props: { posts } };
}
