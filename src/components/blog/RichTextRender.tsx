"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { Document } from "@contentful/rich-text-types";
import type { ReactNode } from "react";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => (
      <strong className="font-semibold text-white">{text}</strong>
    ),
    [MARKS.CODE]: (text: ReactNode) => (
      <code className="rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-sm text-emerald-400">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: unknown, children: ReactNode) => (
      <p className="mb-5 leading-7 text-neutral-300">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_: unknown, children: ReactNode) => (
      <h1 className="mb-4 mt-8 text-3xl font-bold text-white">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_: unknown, children: ReactNode) => (
      <h2 className="mb-3 mt-7 text-2xl font-semibold text-white">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_: unknown, children: ReactNode) => (
      <h3 className="mb-3 mt-6 text-xl font-semibold text-white">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (_: unknown, children: ReactNode) => (
      <ul className="mb-5 ml-5 list-disc space-y-1 text-neutral-300">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_: unknown, children: ReactNode) => (
      <ol className="mb-5 ml-5 list-decimal space-y-1 text-neutral-300">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_: unknown, children: ReactNode) => (
      <li className="leading-7">{children}</li>
    ),
    [BLOCKS.QUOTE]: (_: unknown, children: ReactNode) => (
      <blockquote className="my-6 border-l-4 border-neutral-600 pl-5 italic text-neutral-400">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-neutral-800" />,
    [INLINES.HYPERLINK]: (node: any, children: ReactNode) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white underline underline-offset-4 transition-opacity hover:opacity-70"
      >
        {children}
      </a>
    ),
  },
};

type Props = {
  content: Document;
};

export default function RichTextRenderer({ content }: Props) {
  return <div>{documentToReactComponents(content, options)}</div>;
}