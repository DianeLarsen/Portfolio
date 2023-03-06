import Hero from "./components/Hero"
import Footer from "./components/Footer"

import './App.css';
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import styled from "styled-components"

const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y:auto;
scrollbar-width: none;
color:white;
background: url("./abstract-sky-pastel.jpg");
&::-webkit-scrollbar{
  display: none
}

`

function App() {
  return (
    <Container>
    <div className="App">
      
     <Hero />
  
     <Profile />
     <Projects />
     <Experience />
     <Skills />
     <Contact />
     <Footer />
    </div>
    </Container>
  );
}

export default App;


