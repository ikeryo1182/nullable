import { generateJsonFeed } from "../../utils/FeedUtil";
import type { GetServerSideProps } from "next";
import { webClient } from "../../clients/webClient";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const content = await webClient.getArticles();
  const xml = await generateJsonFeed(content.items);
  res.statusCode = 200;
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.setHeader("Content-Type", "text/xml");
  res.end(xml);

  return {
    props: {},
  };
};

function Page(): null {
  return null;
}

export default Page;
