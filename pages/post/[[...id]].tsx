import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import PostDetail from "components/PostDetail";
import Loader from "components/Loader";

const Post = () => {
  const dataUrl = "http://hn.algolia.com/api/v1/items/";
  const [data, setData] = useState<IPostDetail>();
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

  if (loading) return <Loader />;
  if (!data)
    return (
      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "32px",
        }}
      >
        Please enter some correct post id
      </p>
    );

  return <PostDetail post={data} />;
};

export default Post;
