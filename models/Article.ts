import { Content } from "newt-client-js";
import { Meta } from "./Meta";

export type Article = {
  systemPublishedAt: string;
  title: string;
  slug: string;
  meta: Meta;
  body: string;
  coverImage: {
    _id: string;
    src: string;
  };
} & Content;
