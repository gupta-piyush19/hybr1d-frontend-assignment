import styled from "styled-components";

export const PostDetail = styled.div`
  border: 1px solid #ccc;
  border-radius: 6px;
`;
export const PostDetailContainer = styled.div``;
export const PostInfo = styled.div`
  padding: 12px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  margin-bottom: 40px;
  .title {
    p {
      font-size: 32px;
      font-weight: 600;
    }
  }
  .author {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    margin-top: 6px;
    p {
      background-color: #4699ff;
      padding: 2px 6px;
      border-radius: 4px;
      color: #fff;
    }
  }
  .post-meta {
    display: flex;
    align-items: center;
    margin-top: 6px;
    gap: 8px;
    .post-points {
      background-color: #ff742b;
      padding: 2px 6px;
      color: #fff;
      border-radius: 4px;
    }
    .post-date {
      display: flex;
      gap: 8px;
    }
  }
`;
export const PostComments = styled.div``;
