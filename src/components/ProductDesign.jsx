import React from 'react'
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
export default function ProductDesign() {
  return (
    <Desc>
      <h3>Product Design Example (layout and writeup)</h3>
      <h3>Reasearch completed</h3>
      <h3>Interface Design Example</h3>
    </Desc>
  )
}
