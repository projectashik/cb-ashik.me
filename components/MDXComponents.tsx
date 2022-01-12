import Link from "next/link";
import Image, { ImageProps } from "next/image";

import ImageWithTheme from "components/ImageWithTheme";
import React from "react";

const CustomLink = (props: React.LinkHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: ImageProps) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const MDXComponents = {
  Image: RoundedImage,
  ImageWithTheme,
  a: CustomLink,
};

export default MDXComponents;
