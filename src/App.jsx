import './App.css'
import Navbar from './Navbar'
import styled from "styled-components";
import { ReactTyped } from "react-typed";
import { useRef } from 'react';
import Project from './Projects';
const Subtitle = styled.h2`
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
`;
const Footer = styled.h1`
  font-size: 25px;
  text-align: center;
`;

function App() {
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const downloadFile = () => {
    window.open('./CV_VICTOR_SALGADO.pdf', '_blank')
  }
  const variables = ['Back-end Developer', 'Front-end Developer', 'Full-Stack Developer', 'RPA Developer']
  return (
    <div className="App">
      <div className="App-header">
        <Navbar onProjectsClick={handleProjectsClick} onAboutmeClick={handleAboutClick} onContactClick={handleContactClick}/>
      </div>
      <div className='App-body'> 
        <Subtitle>Hi, I am Víctor Salgado  
          <Subtitle>
            I am a{" "}
            <ReactTyped strings={variables} typeSpeed={100} loop />
            <Subtitle>
              <button onClick={downloadFile} className="resume-button">My Resume</button>
            </Subtitle>
          </Subtitle> 
        </Subtitle>
      </div>
      <hr></hr>
      <Subtitle>My Projects</Subtitle>
        <div className="project-container" ref={projectsRef}>
          <Project title="Trading bot" description="A trading robot was created with Python, which constantly monitored the cryptocurrency market to generate buy and sell orders in order to make money." image='./trading.png' link='https://github.com/Champinhon/trading_bot'/>
          <Project title="Limón mental" description="A social network built with Django, focused on mental health, with the ability for users to make anonymous posts but not for administrators. The goal of this website was to provide a platform for people to express themselves, along with a chatbot for interacting and receiving mental health advice." image='./limon.png' link='https://github.com/Champinhon/limonmental'/>
          <Project title="Data analysis web application" description="A web application that analyzes data, creates graphs, and provides everything necessary for data analysis, all done with Python, Django, and Langchain." image='./analisis.png' link='https://github.com/Champinhon/NuevaDato'/>
          <Project title="Portfolio" description="This portfolio has been created using ReactJS and Vite." image='./portfolio.png' link='https://github.com/Champinhon/NuevaDato'/>
        </div>
      <div className='About' ref={aboutRef}>
        <Subtitle>About me</Subtitle>
      </div>
      <div className='Contact' ref={contactRef}>
        <Subtitle>Contact</Subtitle>
      </div>
      <div className='App-footer'>
        <Footer>Made with 🖤 by Víctor Salgado</Footer>
      </div>
    </div>
  );
}

export default App