import React from "react";
import * as S from "./Header.style";
import Image from "next/image";
import Link from "next/link";

import CompanyLogo from "static/media/HybridLogo.svg";
import Github from "static/media/GithubLogo.svg";
import Linkedin from "static/media/LinkedinLogo.svg";

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderLogo>
          <Link href="/">
            <a>
              <Image src={CompanyLogo} alt="Hybrid Logo" />
            </a>
          </Link>
        </S.HeaderLogo>
        <S.SearchBar>
          <input type="text" placeholder="Seach HackerNews" />
          <button>Search</button>
        </S.SearchBar>
        <S.UserIcon>
          <a
            href="https://github.com/gupta-piyush19"
            target="blank"
            rel="noopener noreferrer"
          >
            <Image src={Github} alt="Github Logo" height={32} width={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/piyushgupta19/"
            target="blank"
            rel="noopener noreferrer"
          >
            <Image src={Linkedin} alt="Linkedin Logo" height={34} width={34} />
          </a>
        </S.UserIcon>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
