import styled from "styled-components";

export const Card = styled.div`
  width: 350px;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  margin: auto;
`;
export const CardContent = styled.div`
  .post-title {
    p {
      font-size: 18px;
      line-height: 24px;
      height: 48px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .post-author {
    display: flex;
    align-items: center;
    margin-top: 6px;

    p {
      margin-left: 4px;
      background-color: #4699ff;
      padding: 2px 4px;
      border-radius: 4px;
      color: #fff;
    }
  }
  .post-meta {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 6px;
    .post-points {
      p {
        background-color: #ff742b;
        padding: 2px 4px;
        color: #fff;
        border-radius: 4px;
      }
    }
  }
  .separator {
    margin: 4px 0;
    border-bottom: 1px solid #ccc;
  }
  .post-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .post-link {
      margin-top: 4px;
      a {
      }
    }
  }
`;
