import React, { useEffect, useState } from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

const LinkItem = styled.li`
  margin: auto 1.1em;
  color: white;
  font-weight: bold;
  font-size: 16px;

  display: block;
 
  transition: all 220ms ease-in-out;
  position: relative;

`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;

  &:hover{
    color: rebeccapurple;
  }
  
  &::before {
    content: "";
    display: block;
    height: 5px;
    width: 100%;
    background-color: rebeccapurple;
    position: absolute;
    top: 0;
    width: 0%;
    transition: all ease-in-out 250ms;
  }

  &:hover::before  {
    width: 100%;

  }

  
`;
let activeLink 
export function NavLinks(props) {

  const [toggle, setToggle] = useState(false)
console.log(toggle)
 useEffect(()=>{
  function getLastPart(url) {
    const parts = url.split('#');
    return parts.at(-1);
  }
  let url = window.location.href
activeLink = getLastPart(url) + "1"
console.log(activeLink)

}, [toggle] )






  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#profile" id="profile1" className={(e)=> e.currentTarget.id === activeLink ? "active" : ""} onClick = {() => setToggle(!toggle)}>Profile</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#projects" id="projects1" className={(e)=> e.currentTarget.id === activeLink ? "active" : ""} onClick = {() => setToggle((tog)=> !tog)}>Projects</Link>
        </LinkItem>
        
        <LinkItem>
          <Link href="#experience" id="experience1" className={(e)=> e.currentTarget.id === activeLink ? "active" : ""} onClick = {() => setToggle((tog)=> !tog)}>Experience</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#news" id="news1" className={(e)=> e.currentTarget.id === activeLink ? "active" : ""} onClick = {() => setToggle((tog)=> !tog)}>News</Link>
        </LinkItem>

      </LinksWrapper>
    </NavLinksContainer>
  );
}