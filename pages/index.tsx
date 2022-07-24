import type { GetServerSideProps, NextPage } from "next";
import Main from "components/Main";
import { getRandomWord } from "static/dictionary/wordslist";

const Home = (props: { posts: IPostResult; random: Boolean }) => {
  const { posts, random } = props;
  return <Main posts={posts} random={random} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { search } = context.query;
  const tempSearch = search?.length ? (search as string) : getRandomWord();
  const res = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${tempSearch}`
  );
  const data: IPostResult = await res.json();

  return {
    props: { posts: data, random: !Boolean(search) },
  };
};

export default Home;
