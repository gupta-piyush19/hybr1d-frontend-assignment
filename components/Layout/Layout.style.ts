import styled from "styled-components";

export const LayoutContainer = styled.div<{ theme: string }>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  flex-grow: 1;
  > * {
    max-width: 1200px;
    margin: 60px auto 0 auto;
  }
`;
