import Layout from "components/Layout";
import { allBlogs } from ".contentlayer/data";
import { InferGetServerSidePropsType } from "next";
import { useState } from "react";
import { Blog } from ".contentlayer/types";
import Image from "next/image";
import Container from "components/Container";

const BlogPage = ({ posts }: { posts: [Blog] | null }) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts =
    posts &&
    posts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  return (
    <Layout>
      <Container>
        {posts &&
          posts.map((post, index) => <div className="" key={index}></div>)}
      </Container>
    </Layout>
  );
};

export default BlogPage;

export function getStaticProps() {
  const posts = allBlogs
    .slice(0, 5)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  return { props: { posts } };
}
