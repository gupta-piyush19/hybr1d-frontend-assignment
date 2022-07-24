import styled from "styled-components";

export const sectionHeading = styled.p`
  font-size: 24px;
  font-weight: 500;
  span {
    font-size: 32px;
    font-weight: 600;
  }
  sup {
    font-size: 32px;
    color: red;
    cursor: pointer;
  }
`;
export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 1fr;
  gap: 32px;
  margin-top: 32px;
`;
