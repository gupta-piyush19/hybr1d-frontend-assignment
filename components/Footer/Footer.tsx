import React from "react";
import * as S from "./Footer.style";

const Footer = () => {
  return (
    <S.Footer>
      <p>
        Made by Piyush Gupta with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </p>
      <p>
        © {new Date().getFullYear()}, Built with Next.js and Styled Components
      </p>
    </S.Footer>
  );
};

export default Footer;
