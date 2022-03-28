import React from "react";
import styled from "styled-components";
import BottomNav from "../components/common/BottomNav";
import Header from "../components/common/Header";
const Home = () => {
  return (
    <HomeWrapper>
      <Header home />
      <div>Home</div>
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
