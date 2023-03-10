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

export default function Profile() {
  return (
    <Section className="profile-container" id="profile">
      <Container>
    <h1 className="name">
    Diane <span className="lastName">Larsen</span>
  </h1>

  <p>I am a full-stack develment student</p>

  <h2>Profile</h2>
  <p>Loves puzzles, reading and being a mother and wife.</p>
  </Container>
  </Section>
  )
}
