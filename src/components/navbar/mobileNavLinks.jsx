import React, { useState } from "react";
import styled from "styled-components";
// import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menutoggle";

const NavLinksContainer = styled.div`
  
  display: flex;
  align-items: center;
  align-self: flex-end;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: fit-content;
  list-style: none;
  background-color: #b991ff;
  width: fit-content;
  flex-direction: column;
  position: fixed;
  top: 55px;
  right: 0;
  padding: 10px;
  border-radius: 5px;
  
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  
`;

const Link = styled.a`
  text-decoration: none;
  color: rebeccapurple;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: .5em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div style={{display: "flex", justifyContent: "flex-end"}}>
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
           <LinkItem>
          <Link href="#profile">Profile</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#projects">Projects</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#experience">Experience</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#contact">Contact</Link>
        </LinkItem>
          <Marginer />

        </LinksWrapper>
      )}
    </NavLinksContainer>
    </div>
  );
}