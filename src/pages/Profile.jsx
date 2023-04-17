import React from 'react'
import styled from "styled-components";

const Section = styled.div`
  min-height: 93vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  scroll-padding-top: 60px;
  align-items: center;
  color: #da4ea2;
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const ImageContainer = styled.div`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
 
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media only screen and (max-width: 768px) {
 
    
    align-items: center;
    justify-content: center;
  }
`;

export default function Profile() {
  return (
    <Section className="profile-container" id="profile">
      
      <Container>
        <ImageContainer>
          <img src="https://res.cloudinary.com/dqjh46sk5/image/upload/v1678392713/P13_mj5cf3.jpg" alt="headshot" style={{width:"100%"}}/> 
        </ImageContainer>
        <InfoContainer>
          <h1 className="name">
          Diane <span className="lastName">Larsen</span>
          </h1>
          <p>I am a full-stack develment student</p>

          <h2>Profile</h2>
          <p>Loves puzzles, reading and being a mother and wife.</p>
        </InfoContainer>
  </Container>
  </Section>
  )
}
