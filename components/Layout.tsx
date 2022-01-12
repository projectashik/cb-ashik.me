import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "./Navbar";
const Layout = (props: any) => {
  const { children, ...customMeta } = props;
  const meta = {
    title: "Ashik Chapagain – Developer, writer, creator.",
    description: `Full-stack developer.`,
    image: "https://cb-ashik.me/static/images/banner.png",
    type: "website",
    ...customMeta,
  };
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://cb-ashik-me.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://cb-ashik-me.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Ashik Chapagain" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ChapagainAshik" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
