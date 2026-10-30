import { Fragment, ReactNode } from "react";
import { Code } from "./Code";

type Tags = Record<string, (content: string) => ReactNode>;

const PATTERN = /<(\w+)>(.+?)<\/\1>|\{(.+?)\}/g;

export const RichText = ({ text, tags = {} }: { text: string; tags?: Tags }) => {
  const parts: ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(PATTERN)) {
    const [whole, tag, tagContent, code] = match;
    parts.push(text.slice(last, match.index));

    if (code !== undefined) {
      parts.push(<Code key={match.index}>{code}</Code>);
    } else {
      parts.push(<Fragment key={match.index}>{tags[tag]?.(tagContent) ?? tagContent}</Fragment>);
    }

    last = match.index + whole.length;
  }

  parts.push(text.slice(last));
  return <>{parts}</>;
};