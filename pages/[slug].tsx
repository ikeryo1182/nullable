import { Container, Row } from "@nextui-org/react";
import { NextPageContext } from "next";
import { webClient } from "../clients/webClient";
import { Layout } from "../components/Layout";
import { Article as ArticleComponent } from "../components/Article";
import { Article } from "../models/Article";
import { useEffect, useState } from "react";

type Props = {
  article: Article | null;
};

export default function ArticlePage(props: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || !props.article) return null;

  return (
    <Layout meta={props.article.meta}>
      <Container>
        <Row justify="center" css={{ margin: "20px 0px" }}>
          <ArticleComponent article={props.article} />
        </Row>
      </Container>
    </Layout>
  );
}

ArticlePage.getInitialProps = async (
  context: NextPageContext
): Promise<Props> => {
  const { slug, _id } = context.query;

  let res = null;

  /**
   * TODO: TypeGuard を作成する
   */
  if (
    slug &&
    typeof slug === "string" &&
    (typeof _id === "undefined" || typeof _id === "string")
  ) {
    res = await webClient.getArticle(slug, _id);
  }

  return { article: res };
};
