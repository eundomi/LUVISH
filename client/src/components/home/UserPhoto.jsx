import React from "react";
import styled from "styled-components";

const UserPhoto = () => {
  return (
    <UserPhotoWrapper>
      <User>
        <UserImg src={`${process.env.PUBLIC_URL}/images/defaultImage.png`} />
        <UserText>은도미</UserText>
      </User>
      <LoveDaysWrapper>
        <Text>사랑한지</Text>
        <Text day>400일</Text>
      </LoveDaysWrapper>
      <User>
        <UserImg src={`${process.env.PUBLIC_URL}/images/defaultImage.png`} />
        <UserText>민농이</UserText>
      </User>
    </UserPhotoWrapper>
  );
};

export default UserPhoto;

const UserPhotoWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  position: relative;
  margin: 10px 0 10px 0;
`;
const User = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;
const UserImg = styled.img`
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
`;
const UserText = styled.span`
  color: #9b9b9b;
  font-size: 1.5vh;
`;
const LoveDaysWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
  align-items: center;
`;
const Text = styled.span``;
