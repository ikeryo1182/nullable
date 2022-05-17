import { createClient } from "newt-client-js";

export const cdnApiClient = createClient({
  spaceUid: "nullable",
  token: process.env.NEWT_CDN_API_TOKEN ?? "",
  apiType: "cdn",
});

export const apiClient = createClient({
  spaceUid: "nullable",
  token: process.env.NEWT_API_TOKEN ?? "",
  apiType: "api",
});
