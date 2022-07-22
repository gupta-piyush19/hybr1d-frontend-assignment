import styled from "styled-components";

export const Header = styled.nav`
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fff;
`;
export const HeaderContainer = styled.div`
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 30px;
  gap: 60px;
`;
export const HeaderLogo = styled.div``;

export const SearchBar = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  border: 1px solid rgb(40, 26, 202);
  border-radius: 8px;
  height: 34px;
  overflow: hidden;
  margin-top: -8px;
  input {
    flex-grow: 1;
    border: none;
    outline: none;
    height: 100%;
    padding-left: 14px;
    font-size: 18px;
    line-height: 18px;
    color: rgb(40, 26, 202, 0.8);
  }
  button {
    border: none;
    outline: none;
    box-shadow: none;
    background-color: rgb(40, 26, 202);
    height: 100%;
    color: rgb(243, 247, 255);
    width: 10%;
    cursor: pointer;
    font-size: 18px;
  }
`;

export const UserIcon = styled.div`
  display: flex;
  gap: 16px;
`;
