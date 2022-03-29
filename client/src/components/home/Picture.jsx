import React from "react";
import styled from "styled-components";

const Picture = () => {
  return (
    <PictureWrapper>
      <Background src={`${process.env.PUBLIC_URL}/images/background.png`} />
      <Child src={`${process.env.PUBLIC_URL}/images/10.png`} />
    </PictureWrapper>
  );
};

export default Picture;

const PictureWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
`;
const Background = styled.img`
  width: 100vw;
`;
const Child = styled.img`
  bottom: 8vw;
  position: absolute;
  z-index: 1;
`;
