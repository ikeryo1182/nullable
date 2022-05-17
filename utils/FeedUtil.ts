import { Feed } from "feed";
import { Article } from "../models/Article";

function buildFeedBase(articles: Article[]) {
  const baseUrl = "https://blog.ikeryo1182.com";
  const feed = new Feed({
    title: "Nullale<T>",
    description: "JavaScript を趣味で触る技術ブログ",
    id: baseUrl,
    link: baseUrl,
    image: `${baseUrl}/favicon.png`,
    language: "ja",
    feedLinks: {
      rss2: `${baseUrl}/rss/rss.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
    copyright: `© 2018-${new Date().getFullYear()} Nullable&lt;T&gt;`,
    author: {
      name: "ikeryo1182",
      email: "ikeryo1182@gmail.com",
      link: "https://blog.ikeryo1182.com",
    },
  });

  articles.forEach((article) => {
    const pathName = baseUrl + "/" + article.slug;

    feed.addItem({
      title: article.title,
      description: article.meta.description,
      date: new Date(article.systemPublishedAt),
      id: pathName,
      link: pathName,
    });
  });

  return feed;
}

export const generateRssFeed = async (articles: Article[]): Promise<string> => {
  return buildFeedBase(articles).rss2();
};

export const generateAtomFeed = async (
  articles: Article[]
): Promise<string> => {
  return buildFeedBase(articles).json1();
};

export const generateJsonFeed = async (
  articles: Article[]
): Promise<string> => {
  return buildFeedBase(articles).json1();
};
