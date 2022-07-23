import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import PostDetail from "components/PostDetail";

const Post = () => {
  const dataUrl = "http://hn.algolia.com/api/v1/items/";
  const [data, setData] = useState<IPostDetail>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { id } = router.query;

  const fetchPost = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${dataUrl}${id}`);
      const dataJson = await res.json();
      setData(dataJson);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!id) return;
    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>Please enter some correct ID</p>;

  return <PostDetail post={data} />;
};

export default Post;
