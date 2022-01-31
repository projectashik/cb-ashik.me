import { Snippet } from ".contentlayer/types";
import SnippetLayout from "components/SnippetLayout";
import { useMDXComponent } from "next-contentlayer/hooks";
import components from "components/MDXComponents";
import { allSnippets } from ".contentlayer/data";
import { GetStaticPropsContext } from "next";

export default function SnippetPage({ snippet }: { snippet: Snippet }) {
  const Component = useMDXComponent(snippet.body.code);

  return (
    <SnippetLayout snippet={snippet}>
      <Component components={{ ...components } as any} />
    </SnippetLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allSnippets.map((s) => ({
      params: { slug: s.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const snippet = allSnippets.find((snippet) => snippet.slug === params?.slug);
  return { props: { snippet } };
}
