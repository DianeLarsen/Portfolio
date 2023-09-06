const Section = styled.div`
  display: flex;
  justify-content: center;
  alight-items: center;
  position: fixed;
  width: 75%;
  max-width: 75em;
  top: 0;

  @media only screen and (max-width: 768px) {
    width: 100%;

    top: 0;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  height: 60px;
  background-color: #985dfc;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const LeftSection = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
// const Headshot = styled.img`
//   display: flex;
//   align-items: center;
//   height: 80%;
//   border-radius: 25px;
//   margin-right: 20px;
// `;
// const Name = styled.span`
//   display: flex;
//   align-items: center;
//   gap: 50px;
// `;

const MiddleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  flex: 2;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li`
  cursor: pointer;
`;
const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.div`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = (props) => {
  return (
    <Section id="navbar">
      <Container>
        <LeftSection>
          <Logo />
          {/* <Name>Diane Larsen</Name> */}
        </LeftSection>
        <MiddleSection>
          <List>
            <ListItem>
              <a href="#profile">Profile</a>
            </ListItem>
            <ListItem>
              <a href="#projects">Projects</a>
            </ListItem>
            <ListItem>
              <a href="#experience">Experience</a>
            </ListItem>
            <ListItem>
              <a href="#contact">Contact</a>
            </ListItem>
          </List>
        </MiddleSection>
        <RightSection>
          <Icons>
            <Icon>
              <SearchIcon />
            </Icon>
            <Button>Hire Now</Button>
          </Icons>
        </RightSection>
      </Container>
    </Section>
  );
};
export default Navbar;
