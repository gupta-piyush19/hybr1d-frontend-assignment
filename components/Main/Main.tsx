import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getRandomWord } from "static/dictionary/wordslist";

const Main = () => {
  const [posts, setPosts] = useState<IPost[]>();

  const router = useRouter();
  const apiUrl = "http://hn.algolia.com/api/v1/search?query=";

  let { search } = router.query;

  const fetchPosts = async () => {
    const res = await fetch(`${apiUrl}${search}`);
    const data: IPostResult = await res.json();
    setPosts(data.hits);
  };

  useEffect(() => {
    if (!search) search = search || getRandomWord();
    fetchPosts();
  }, [search]);

  return (
    <div>
      <h1>{search}</h1>
      {posts?.map((post) => (
        <div key={post.ObjectID}>{post.title}</div>
      ))}
      test
    </div>
  );
};

export default Main;
