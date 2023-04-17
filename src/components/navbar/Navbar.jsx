
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "./Logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./NavLinks";
import { DeviceSize } from "./responsive";
import { MobileNavLinks } from "./mobileNavLinks";


const Section = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  alight-items: center;
  position: sticky;
  width: 85%;
  max-width: 85em;
  top: 0;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const NavbarContainer = styled.div`
  width: 100%;
  height: 7vh;
  min-height: 45px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  background-color: #b991ff;
  top: 0;
  @media only screen and (max-width: 768px) {
    padding:.5em 1.5em;
    top: 0;
  }
`;

const LeftSection = styled.div`
margin-left: 1.5em;
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  margin-right: 1.5em;
`;

export default function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <Section id="navbar" className="navbar">
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
    </Section>
  );
}