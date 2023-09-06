import React from "react";
import styled from "styled-components";


const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justfiy-content: center;
`;
const LogoLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 0;
  &:hover{
    border: 1px solid rebeccapurple;
    border-radius: 10px;
    padding: 5px;
  }
`;

const LogoImg = styled.div`
  display: flex;
  width: 35px;

  margin-right: 10px;
  margin-left: 10px;
  align-items: center;
  justfiy-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;
const LogoTextLink = styled.a`
  text-decoration: none;
  cursor: pointer;

`;
const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: white;
  font-weight: bold;
  padding: 2px

  &:hover{
    color: rebeccapurple;
  }
`;


export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoLink href="#hero">
      <LogoImg>
        <img src="https://res.cloudinary.com/dqjh46sk5/image/upload/v1681312696/PandaLove/PanaLovePurple_yky4mu.svg" alt="Logo" />
      </LogoImg>
      </LogoLink>
      <LogoTextLink href="#hero">
      <LogoText>PandaLove Development</LogoText>
      </LogoTextLink>
    </LogoWrapper>
  );
}