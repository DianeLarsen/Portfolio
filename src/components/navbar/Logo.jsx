import React from "react";
import styled from "styled-components";


const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justfiy-content: center;
`;

const LogoImg = styled.div`
display: flex;
  width: 29px;
  height: 29px;
  margin-right: 10px;
  align-items: center;
  justfiy-content: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 3px solid white;
    
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: whitesmoke;
  font-weight: bold;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src="http://res.cloudinary.com/dqjh46sk5/image/upload/v1678209537/sdvx0jeekzflqjvibi4m.jpg" alt="Headshot" />
      </LogoImg>
      <LogoText>Diane Larsen</LogoText>
    </LogoWrapper>
  );
}