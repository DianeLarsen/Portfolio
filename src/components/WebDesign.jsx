import React from "react";
import styled from "styled-components";
const Desc = styled.div`
  width: 200px;
  height: fit-content;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
export default function WebDesign() {
  return (
    <Desc>
      <h3>Book Store</h3>
      <h3>Community Site</h3>
      <h3>Level 6 project</h3>
    </Desc>
  );
}
