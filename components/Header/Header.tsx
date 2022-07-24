import React from "react";
import * as S from "./Header.style";
import Image from "next/image";
import Link from "next/link";

import CompanyLogo from "static/media/HybridLogo.svg";
import Github from "static/media/GithubLogo.svg";
import Linkedin from "static/media/LinkedinLogo.svg";
import Router from "next/router";

const Header = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const val = inputRef.current?.value;
    let query: { search?: string } = {};

    if (val?.trim()) query["search"] = val;

    Router.push({ pathname: "/", query: query });
    (inputRef.current as HTMLInputElement).value = "";
  };

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
        <S.SearchForm>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Seach HackerNews"
              ref={inputRef}
              required
            />
            <button type="submit">Search</button>
          </form>
        </S.SearchForm>
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
