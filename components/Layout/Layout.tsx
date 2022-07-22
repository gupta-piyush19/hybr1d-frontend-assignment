import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

import * as S from "./Layout.style";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <S.LayoutContainer>
      <Header />
      <S.Content>{children}</S.Content>
      <Footer />
    </S.LayoutContainer>
  );
};

export default Layout;
