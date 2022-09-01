import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import image from "@astrojs/image"
import { remarkReadingTime } from "./remark-reading-time.mjs"

import react from "@astrojs/react"
import rehypeSlug from "rehype-slug"
import rehypeToc from "rehype-toc"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkEmbedder from "@remark-embedder/core"
import oembedTransformer from "@remark-embedder/transformer-oembed"

const YTTransformer = {
  name: "YouTube",
  // shouldTransform can also be async
  shouldTransform(url) {
    const { host, pathname } = new URL(url)

    return (
      ["youtube.com", "www.youtube.com"].includes(host) &&
      pathname.includes("/watch?v=")
    )
  },
  // getHTML can also be async
  getHTML(url) {
    const iframeUrl = url.replace("/watch?v=", "/embed/")

    return `<iframe src="${iframeUrl}" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>`
  },
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      remarkPlugins: [
        remarkReadingTime,
        [
          remarkEmbedder.default,
          {
            transformers: [YTTransformer],
          },
        ],
      ],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "prepend" }],
      ],
    }),
    tailwind(),
    image(),
    react(),
  ],
})
