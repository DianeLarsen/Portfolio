import React, { useState } from "react";
import styled from "styled-components";
import Development from "../components/Development";
import ProductDesign from "../components/ProductDesign";
import WebDesign from "../components/WebDesign";

const data = [
  "Web Design",
  "Development",
  "Product Design",
];

const Section = styled.div`
  min-height: 90vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  color: black;
  font-size: 14px;
  font-weight: 300;
  scroll-padding-top: 60px;

  top: 70px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
height: 100%;
margin-top: 70px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  scroll-padding-top: 60px;
  
  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
 
`;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #da4ea2;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
    color: #da4ea2;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Projects = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section id="projects">
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Projects;