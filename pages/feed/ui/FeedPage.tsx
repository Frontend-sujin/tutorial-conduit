import { useEffect, useState } from "react";
import { getPosts } from "../api/getPosts";

interface Posts {
  id: string;
  userId: string;
  title: string;
}

export function FeedPage() {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    const getPostsFromServer = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    getPostsFromServer();
  }, []);

  return (
    <section className="p-1 border-sky-100">
      <h1 className="text-xl font-bold">conduit</h1>
      <p className="text-lg">A place to share your knowledge.</p>
      <br />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </section>
  );
}
