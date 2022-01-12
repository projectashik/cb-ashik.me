import { useMDXComponent } from "next-contentlayer/hooks";
import type { Blog } from ".contentlayer/types";
import BlogLayout from "components/BlogLayout";
import { allBlogs } from ".contentlayer/data";
import { GetStaticPropsContext } from "next";
import components from "components/MDXComponents";
export default function Post({ post }: { post: Blog }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post}>
      <Component
        components={
          {
            ...components,
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = allBlogs.find((post) => post.slug === params?.slug);
  return { props: { post } };
}
