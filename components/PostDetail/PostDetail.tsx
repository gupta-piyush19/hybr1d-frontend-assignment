import Comments from "components/Comments";
import { format, parseISO } from "date-fns";
import React from "react";
import * as S from "./PostDetail.style";

const PostDetail = (props: { post: IPostDetail }) => {
  const { post } = props;

  return (
    <S.PostDetail>
      <S.PostDetailContainer>
        <S.PostInfo>
          <div className="title">
            <p>{post?.title}</p>
          </div>
          <div className="author">
            <span>By: </span>
            <p>{post?.author}</p>
          </div>
          <div className="post-meta">
            <div className="post-points">
              <span>{post?.points} Points </span>
            </div>
            <p>|</p>
            <div className="post-date">
              <span>Posted on: </span>
              <p>{format(parseISO(post?.created_at!), "MMM dd, yyyy")}</p>
            </div>
          </div>
        </S.PostInfo>
        <S.PostComments>
          <p className="heading">Comments({post?.children?.length})</p>
          <div className="comments-container">
            <Comments comments={post?.children} />
          </div>
        </S.PostComments>
      </S.PostDetailContainer>
    </S.PostDetail>
  );
};

export default PostDetail;
