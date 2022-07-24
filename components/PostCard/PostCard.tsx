import React from "react";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import Link from "static/media/Link.svg";
import * as S from "./PostCard.style";
import { useRouter } from "next/router";

const PostCard = (props: { post: IPost }) => {
  const { post } = props;

  const router = useRouter();
  const cardClickHandler = () => {
    router.push(`/post/${post.objectID}`);
  };

  return (
    <S.Card onClick={cardClickHandler}>
      <S.CardContent>
        {(post?.title || "").length > 0 ? (
          <div className="post-title">
            <p title={post?.title}>{post?.title}</p>
          </div>
        ) : null}
        <div className="post-author">
          <span>By: </span>
          <p>{post?.author}</p>
        </div>
        <div className="post-meta">
          <div className="post-points">
            <p>{post?.points} Points</p>
          </div>
          <p>|</p>
          <div className="post-date">
            <p>{format(parseISO(post?.created_at!), "MMM dd, yyyy")}</p>
          </div>
        </div>
        <div className="separator"></div>
        <div className="post-data">
          <div className="post-comments">
            <p>{post?.num_comments} Comments</p>
          </div>
          <div className="post-link">
            <a
              href={post?.url}
              onClick={(event) => event.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Link} alt="Link" />
            </a>
          </div>
        </div>
      </S.CardContent>
    </S.Card>
  );
};

export default PostCard;
