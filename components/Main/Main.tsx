import React from "react";
import PostCard from "components/PostCard";
import * as S from "./Main.style";

const Main = (props: { posts: IPostResult; random: Boolean }) => {
  const { posts, random } = props;

  return (
    <div>
      <S.sectionHeading>
        Search Results for: <span> {posts?.query}</span>
        {random && (
          <sup title="Showing results for any random dictionary word">*</sup>
        )}
      </S.sectionHeading>
      <S.PostsContainer>
        {posts?.hits?.map((post) => (
          <PostCard key={Number(post?.objectID)} post={post} />
        ))}
      </S.PostsContainer>
    </div>
  );
};

export default Main;
