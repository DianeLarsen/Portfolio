import { useContext } from "react";
import Hero from "./pages/Hero";
import "./App.css";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/Contact";
import styled from "styled-components";
import { DarkModeContext } from "./context/darkModeContext";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  width: 85%;
  max-width: 85em;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 207, 0.664);
 
  &::-webkit-scrollbar {
    display: none;
  };
  scroll-padding-top: 60px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  
  }
`;

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <Container>
        <Hero />
        <Profile />
        <Projects />
        <Experience />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
