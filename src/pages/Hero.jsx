import React from "react";
import styled from "styled-components";


import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Section = styled.div`
min-height: 93vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;

  
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: calc(74px + 0.390625vw);
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.div`
  height: 5px;
  font-size: large;
  font-weight: 800;
  display: flex;
  color: darkgrey;
  align-items: center
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: darkgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

// const Button = styled.button`
//   background-color: #da4ea2;
//   color: white;
//   font-weight: 500;
//   width: 100px;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;
export default function Hero() {
  return (
    <Section id="hero">

      <Container>
        <Left>
        <Title>Design. Build. Achieve.</Title>
        <WhatWeDo>
          <Line>
          <ArrowForwardIosIcon />
            </Line> 
          <Subtitle>What we Do</Subtitle>
        </WhatWeDo>
        <Desc>
          We take what we are given and make it run smoother and more efficient.
        </Desc>
        {/* <Button>Learn More</Button> */}
        </Left>
      </Container>
    </Section>
  );
}
