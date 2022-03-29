import React from "react";
import styled from "styled-components";

const Container = () => {
  return (
    <ContainerWrapper>
      <ScoreCell>
        <SubTitle>얻은 점수</SubTitle>
        <Score>20</Score>
      </ScoreCell>
      <ScoreCell>
        <SubTitle>다음 부화까지 남은 점수</SubTitle>
        <Score>5</Score>
      </ScoreCell>
    </ContainerWrapper>
  );
};

export default Container;
const ContainerWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
`;
const ScoreCell = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  box-shadow: 0px -1px 38px -16px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;
  padding: 10px;
  + div {
    margin-left: 10px;
  }
`;
const SubTitle = styled.span`
  text-align: center;
  font-size: 13px;
  color: #595959;
`;
const Score = styled.span`
  padding-top: 10px;
  width: 100%;
  font-size: 35px;
  font-weight: 300;
  text-align: center;
  color: #ef818b;
`;
