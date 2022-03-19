import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <BottomNavWrapper>
      <StyledLink to="/">
        <Icon>
          <IconImg src={`${process.env.PUBLIC_URL}/images/home_nav.png`} />
          <IconText>홈</IconText>
        </Icon>
      </StyledLink>

      <StyledLink to="/calender">
        <Icon>
          <IconImg src={`${process.env.PUBLIC_URL}/images/calendar_nav.png`} />
          <IconText>캘린더</IconText>
        </Icon>
      </StyledLink>

      <StyledLink to="/letter">
        <Icon>
          <IconImg src={`${process.env.PUBLIC_URL}/images/letter_nav.png`} />
          <IconText>편지함</IconText>
        </Icon>
      </StyledLink>

      <StyledLink to="/wishlist">
        <Icon>
          <IconImg src={`${process.env.PUBLIC_URL}/images/wishlist_nav.png`} />
          <IconText>위시리스트</IconText>
        </Icon>
      </StyledLink>

      <StyledLink to="/mypage">
        <Icon>
          <IconImg src={`${process.env.PUBLIC_URL}/images/mypage_nav.png`} />
          <IconText>설정</IconText>
        </Icon>
      </StyledLink>
    </BottomNavWrapper>
  );
};

export default BottomNav;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 5px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const BottomNavWrapper = styled.div`
  height: 90px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  background: #fefeff;
  box-shadow: 0px -1px 38px -16px rgba(0, 0, 0, 0.25);
  border-radius: 30px 30px 0px 0px;
  justify-content: space-evenly;
  align-items: center;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const IconImg = styled.img`
  width: 50px;
  height: 50px;
`;
const IconText = styled.span`
  color: #9b9b9b;
  font-size: 1.2vh;
  margin-top: 5px;
`;
