import styled from "styled-components";

export const Comments = styled.div``;
export const commentsContainer = styled.div<{ value: boolean }>`
  margin-top: ${({ value }) => (value ? "24px" : "8px")};
  padding-left: 20px;
  border-left: 1px solid #ccc;

  &:hover {
    border-color: rgb(40, 26, 202);
  }

  .comment {
    .comment-text {
      color: rgba(0, 0, 0, 0.8);
    }
    .comment-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;
