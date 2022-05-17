import { Card, Text } from "@nextui-org/react";
import { Article as ArticleType } from "../models/Article";
import hljs from "highlight.js";
import parse, {
  attributesToProps,
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
  htmlToDOM,
} from "html-react-parser";
import "highlight.js/styles/night-owl.css";
import javascript from "highlight.js/lib/languages/javascript";
import { useMemo } from "react";
import { GrUpdate } from "react-icons/gr";
import { IoMdCreate } from "react-icons/io";
import { formatDateString } from "../utils/DateUtil";
hljs.registerLanguage("javascript", javascript);

type Props = {
  article: ArticleType;
};
const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (
      domNode instanceof Element &&
      domNode.type === "tag" &&
      domNode.attribs
    ) {
      const props = attributesToProps(domNode.attribs);

      if (
        domNode.attribs &&
        domNode.parent instanceof Element &&
        domNode.parent.name === "pre" &&
        domNode.name === "code"
      ) {
        /**
         * TODO: any撲滅
         */
        const node = domNode.children[0] as any;
        const data = node.data as string;
        const value = hljs.highlightAuto(data).value;

        return <code {...props}>{domToReact(htmlToDOM(value), options)}</code>;
      }

      if (
        domNode.attribs &&
        domNode.parent instanceof Element &&
        domNode.parent.name !== "pre" &&
        domNode.name === "code"
      ) {
        return (
          <code
            {...{
              ...props,
              style: { backgroundColor: "#e8e8e8", color: "#121212" },
            }}
          >
            {domToReact(domNode.children, options)}
          </code>
        );
      }

      if (domNode.attribs && domNode.name === "h2") {
        return (
          <Text
            h2
            css={{
              fontSize: 28,
              borderBottom: "1px gray solid",
              padding: "10px 0",
            }}
            {...props}
          >
            {domToReact(domNode.children, options)}
          </Text>
        );
      }

      if (domNode.attribs && domNode.name === "h3") {
        return (
          <Text
            h3
            css={{
              fontSize: 24,
              borderBottom: "1px gray dashed",
              padding: "10px 0",
            }}
            {...props}
          >
            {domToReact(domNode.children, options)}
          </Text>
        );
      }

      if (domNode.attribs && domNode.name === "h4") {
        return (
          <Text h4 css={{ fontSize: 20, padding: "10px 0" }} {...props}>
            {domToReact(domNode.children, options)}
          </Text>
        );
      }

      if (domNode.attribs && domNode.name === "h5") {
        return (
          <Text h5 css={{ fontSize: 16 }} {...props}>
            * {domToReact(domNode.children, options)}
          </Text>
        );
      }

      if (domNode.attribs && domNode.name === "li") {
        return <p>－ {domToReact(domNode.children, options)}</p>;
      }
    }
  },
};

export function Article(props: Props) {
  const html = useMemo(
    () => parse(props.article.body, options),
    [props.article.body]
  );

  return (
    <Card
      style={{
        padding: 10,
        minWidth: "200px",
        maxWidth: "1000px",
        minHeight: "200px",
      }}
    >
      <Text h1>{props.article.title}</Text>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Text
          css={{
            display: "flex",
            alignItems: "center",
            margin: "0 10px",
            fontWeight: "bold",
          }}
        >
          <IoMdCreate style={{ margin: "0 5px" }} />{" "}
          {formatDateString(props.article.systemPublishedAt)}
        </Text>
        {""}
        <Text
          css={{
            display: "flex",
            alignItems: "center",
            margin: "0 10px",
            fontWeight: "bold",
          }}
        >
          <GrUpdate style={{ margin: "0 5px" }} />{" "}
          {formatDateString(props.article._sys.updatedAt)}
        </Text>
      </div>
      {html}
    </Card>
  );
}
