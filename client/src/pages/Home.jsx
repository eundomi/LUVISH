import React from "react";
import styled from "styled-components";
import BottomNav from "../components/common/BottomNav";
import Header from "../components/common/Header";
import UserPhoto from "../components/home/UserPhoto";
import Picture from "../components/home/Picture";
import Container from "../components/home/Container";

const Home = () => {
  return (
    <HomeWrapper>
      <Header home />
      <ContentsWrapper>
        <UserPhoto />
        <Picture />
        <Container />
      </ContentsWrapper>
      <BottomNav />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0px auto !important;
  @media (min-width: 1080px) {
    max-width: 650px !important;
  }
`;
const ContentsWrapper = styled.div`
  margin: 0 2vh 0 2vh;
`;
