import { Article } from "../models/Article";
import { Contents } from "newt-client-js";

const BASE_URL = "http://localhost:3000";

export const webClient = {
  getArticles: async () => {
    const response = await fetch(BASE_URL + "/api/article", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(String(err));
    }
    /**
     * TODO: TypeGuard
     */
    return (await response.json()) as Promise<Contents<Article>>;
  },
  getArticle: async (slug: string, _id?: string) => {
    const response = await fetch(
      BASE_URL + "/api/article/" + slug + (_id ? "?_id=" + _id : ""),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      const err = await response.json();
      throw new Error(String(err));
    }
    /**
     * TODO: TypeGuard
     */
    return (await response.json()) as Promise<Article>;
  },
};
