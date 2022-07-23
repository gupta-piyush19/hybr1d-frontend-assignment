import React from "react";
import { format, parseISO } from "date-fns";
import * as S from "./Comments.style";

const Comments = (props: { comments?: IPostDetail[] }) => {
  const { comments } = props;

  return (
    <S.Comments>
      {comments?.map((comment: IPostDetail) => (
        <S.commentsContainer
          value={comment?.parent_id === comment?.story_id}
          key={comment.id}
        >
          <div className="comment">
            <p
              key={comment.id}
              className="comment-text"
              dangerouslySetInnerHTML={{ __html: comment.text || "" }}
            />
            <p className="comment-meta">
              <p className="comment-author">- {comment?.author}</p>
              <p>|</p>
              <p className="comment-date">
                <span>
                  {format(parseISO(comment?.created_at!), "MMM dd, yyyy")}
                </span>
              </p>
            </p>
          </div>
          {comment.children?.length! > 0 ? (
            <Comments comments={comment.children} />
          ) : null}
        </S.commentsContainer>
      ))}
    </S.Comments>
  );
};

export default Comments;
