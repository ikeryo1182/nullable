import { Container, Link, Row } from "@nextui-org/react";
import { Layout } from "../components/Layout";
import { ArticleCard } from "../components/ArticleCard";
import { webClient } from "../clients/webClient";
import { Article as ArticleType } from "../models/Article";

type Props = {
  articles: ArticleType[];
};

function Home(props: Props) {
  return (
    <Layout
      meta={{
        title: "Nullable<T>",
        description: "フロントエンドを趣味にするエンジニアの技術ブログ",
        keywords: "技術ブログ,フロントエンド,typescript,javascript,react",
        ogImage: { src: "" },
      }}
    >
      <Container
        display="flex"
        direction="column"
        alignItems="center"
        css={{ padding: "0 10px", maxWidth: 600 }}
      >
        {props.articles.map((a, i) => (
          <Link key={i} href={`/${a.slug}`} css={{ width: "100%" }}>
            <Row justify="center" align="center" css={{ margin: "10px 0px" }}>
              <ArticleCard article={a} />
            </Row>
          </Link>
        ))}
      </Container>
    </Layout>
  );
}

Home.getInitialProps = async (): Promise<Props> => {
  const res = await webClient.getArticles();
  return { articles: res.items };
};

export default Home;
