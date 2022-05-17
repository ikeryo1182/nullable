import { generateAtomFeed } from "../../utils/FeedUtil";
import type { GetServerSideProps } from "next";
import { webClient } from "../../clients/webClient";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const content = await webClient.getArticles();
  const xml = await generateAtomFeed(content.items);
  res.statusCode = 200;
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
