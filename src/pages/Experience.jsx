import React from "react";
import styled from "styled-components";
import Skills from "../components/Skills";

const Section = styled.div`
  min-height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
 
  color: black;
  font-size: 14px;
  font-weight: 300;

  scroll-padding-top: 60px;
  margin-top: 70px;
  align-items: center;
 
`;
export default function Experience() {
  return (
    <Section id="experience">
      <h2>Experience</h2>
      <h3>none</h3>
      <Skills />
    </Section>
  );
}
