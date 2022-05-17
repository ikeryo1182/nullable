// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { cdnApiClient } from "../../../clients/apiClient";
import { Article } from "../../../models/Article";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await cdnApiClient.getContents<Article>({
    appUid: "blog",
    modelUid: "article",
    query: {
      order: ["-systemPublishedAt"],
    },
  });

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "failed to load data" });
  }
}
