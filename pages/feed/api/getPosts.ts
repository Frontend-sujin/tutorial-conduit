import { API } from "shared/api";

export const getPosts = async () => {
  const { GET } = API();

  const data = await GET({
    data: "posts",
  });

  return data;
};
