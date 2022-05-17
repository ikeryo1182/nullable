// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { apiClient, cdnApiClient } from "../../../clients/apiClient";
import { Article } from "../../../models/Article";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug, _id } = req.query;

  let result: Article;

  if (!_id) {
    const contents = await cdnApiClient.getContents<Article>({
      appUid: "blog",
      modelUid: "article",
      query: {
        slug,
      },
    });
    result = contents.items[0];
  } else {
    result = await apiClient.getContent<Article>({
      appUid: "blog",
      modelUid: "article",
      contentId: _id as string,
    });
  }

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "failed to load data" });
  }
}
