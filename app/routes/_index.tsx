import type { MetaFunction } from "@remix-run/node";
import { FeedPage } from "pages/feed";
import { getPosts } from "pages/feed"; // 이거 왜 해야 하지?

export const meta: MetaFunction = () => {
  return [{ title: "Conduit" }];
};

export default FeedPage;
