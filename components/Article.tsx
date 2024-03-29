import { Card, Code, Container, Link, Text } from "@nextui-org/react";
import { Article as ArticleType } from "../models/Article";
import hljs from "highlight.js";
import parse, {
  attributesToProps,
  domToReact,
  Element,
  HTMLReactParserOptions,
  htmlToDOM,
} from "html-react-parser";
import "highlight.js/styles/night-owl.css";
import javascript from "highlight.js/lib/languages/javascript";
import { useMemo } from "react";
import { IoMdCreate, IoIosRefresh } from "react-icons/io";
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

        return (
          <Code {...props} css={{ fontSize: 12 }}>
            {domToReact(htmlToDOM(value), options)}
          </Code>
        );
      }

      if (
        domNode.attribs &&
        domNode.parent instanceof Element &&
        domNode.parent.name !== "pre" &&
        domNode.name === "code"
      ) {
        return (
          <Code
            {...{
              ...props,
              style: { backgroundColor: "#e8e8e8", color: "#121212" },
            }}
          >
            {domToReact(domNode.children, options)}
          </Code>
        );
      }

      if (domNode.attribs && domNode.name === "h2") {
        return (
          <Text
            h2
            css={{
              fontSize: 24,
              padding: "10px 0 5px 0",
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
              fontSize: 20,
              fontWeight: "normal",
              padding: "10px 0 5px 0",
            }}
            {...props}
          >
            {domToReact(domNode.children, options)}
          </Text>
        );
      }

      if (domNode.attribs && domNode.name === "h4") {
        return (
          <Text h4 css={{ fontSize: 16, padding: "10px 0" }} {...props}>
            {domToReact(domNode.children, options)}
          </Text>
        );
      }

      if (domNode.attribs && domNode.name === "h5") {
        return (
          <Text h5 css={{ fontSize: 14 }} {...props}>
            * {domToReact(domNode.children, options)}
          </Text>
        );
      }

      if (domNode.attribs && domNode.name === "p") {
        return (
          <Text
            css={{ fontSize: 14, lineHeight: 1.8, padding: "5px 0" }}
            {...props}
          >
            {domToReact(domNode.children, options)}
          </Text>
        );
      }

      if (domNode.attribs && domNode.name === "a") {
        return (
          <Link css={{ display: "inline" }} {...props}>
            {domToReact(domNode.children, options)}
          </Link>
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
    <Container
      style={{
        padding: 0,
        minWidth: "200px",
        maxWidth: "780px",
        minHeight: "200px",
      }}
    >
      <Text
        h4
        css={{
          display: "flex",
          alignItems: "center",
          margin: "0 0 10px 0",
        }}
      >
        {props.article.title}
      </Text>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "0 0 14px 0",
        }}
      >
        <Text
          css={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            margin: "0 10px",
          }}
        >
          <IoMdCreate style={{ margin: "0 5px" }} />{" "}
          {formatDateString(props.article.systemPublishedAt)}
        </Text>
        {""}
        <Text
          css={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            margin: "0 10px",
          }}
        >
          <IoIosRefresh style={{ margin: "0 5px" }} />{" "}
          {formatDateString(props.article._sys.updatedAt)}
        </Text>
      </div>
      {html}
    </Container>
  );
}
