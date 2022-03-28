import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import BottomNav from "./BottomNav";
const Header = ({ home }) => {
  let navigate = useNavigate();
  return (
    <HeaderWrapper>
      <HeaderWrappers>
        {home ? null : (
          <Back
            src={`${process.env.PUBLIC_URL}/images/back.png`}
            onClick={() => navigate(-1)}
          />
        )}

        <Logo>
          <StyledLink to="/">
            <LogoText>LUVISH</LogoText>
          </StyledLink>
        </Logo>
      </HeaderWrappers>
    </HeaderWrapper>
  );
};

export default Header;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 5px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const HeaderWrapper = styled.div`
  margin: 0;
  height: 50px;
  width: 100%;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid rgba(126, 134, 158, 0.1);
`;
const HeaderWrappers = styled.div`
  margin: 0;
  height: 50px;
  width: 100%;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;
const Back = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
`;
const Logo = styled.div`
  margin: 0;
  width: 100%;
  text-align: center;
`;
const LogoText = styled.span`
  margin: 0;
  font-family: ghanachoco;
  font-size: 24px;
  align-items: center;
  text-align: center;
`;
