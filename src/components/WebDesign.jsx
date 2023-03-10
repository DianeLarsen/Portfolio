import React from "react";
import styled from "styled-components";
const Desc = styled.div`

  width: fit-content;
  height: fit-content;
  padding: 20px;
  color: rebeccapurple;
  background: rgba(102, 51, 153, 0.13);
  border-radius: 50px;
margin-right:10px;
border: 2px solid rebeccapurple;

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
