import { allSnippets } from ".contentlayer/data";
import { Snippet } from ".contentlayer/types";
import Container from "components/Container";
import Layout from "components/Layout";
import SnippetCard from "components/SnippetCard";
import { useState } from "react";
import Link from "next/link";

const Snippets = ({ snippets }: { snippets: Snippet[] }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <Layout>
        <Container>
          <h1 className="text-4xl mt-10 font-bold tracking-wider">Snippets</h1>
          <form>
            <input
              className="w-full border-2 mb-10 mt-10 border-gray-600 placeholder:text-gray-500 focus:border-primary-500 focus-within:border-primary-500 focus-visible:border-primary-500 active:border-primary-500 ouline-none rounded-lg py-2 px-4"
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </form>

          <div className="flex flex-col gap-4">
            {snippets &&
              snippets.map((snippet, index) => {
                const tags = snippet.tags.split(",");
                return (
                  <Link key={index} href={`/snippets/${snippet.slug}`}>
                    <a>
                      <div className="flex flex-col cursor-pointer bg-gray-100 p-5 hover:scale-105 transition-transform">
                        <h2 className="text-xl font-bold tracking-wide">
                          {snippet.title}
                        </h2>
                        <p className="text-gray-600">{snippet.description}</p>
                        <ul className="flex gap-1 text-sm mt-2">
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
                    </a>
                  </Link>
                );
              })}
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Snippets;

export function getStaticProps() {
  const snippets = allSnippets;
  return { props: { snippets } };
}
