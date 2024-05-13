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
const AboutMe = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  margin-left: 10%;
  margin-right: 10%;
`;
const Link1 = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;
  display: block;
  text-align: center;
  margin-top: 20px;
  &:hover {
    text-decoration: underline;
  }

`;
function App() {
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const technologiesRef = useRef(null)
  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const handleTechnologiesClick = () => {
    technologiesRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const downloadFile = () => {
    window.open('./CV_VICTOR_SALGADO.pdf', '_blank')
  }
  const variables = ['Back-end Developer', 'Front-end Developer', 'Full-Stack Developer', 'RPA Developer']
  return (
    <div className="App">
      <div className="App-header">
        <Navbar onProjectsClick={handleProjectsClick} onAboutmeClick={handleAboutClick} onContactClick={handleContactClick} onTecnologiasClick={handleAboutClick}/>
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
          <Project title="Portfolio" description="This portfolio has been created using ReactJS and Vite." image='./portfolio.png' link='https://github.com/Champinhon/portfolio'/>
        </div>
      <div className='About' ref={aboutRef}>
        <Subtitle>About me</Subtitle>
        <AboutMe>
          I am a developer constantly growing, I love artificial intelligence and learning about everything, I enjoy challenges, I studied for 3 years at Diego Portales University, and I have taken various courses ranging from web development to artificial intelligence and data analysis. Some of my projects are private, but I am always willing to show them to you if you are interested.
        </AboutMe>
      </div>
      <hr></hr>
      <Subtitle ref={technologiesRef}>My Skills</Subtitle>
      <div className="skills-container">
        <div className="skill">
          <h3>Python</h3>
        </div>
        <div className="skill">
          <h3>JavaScript</h3>
        </div>
        <div className="skill">
          <h3>ReactJS</h3>
        </div>
        <div className="skill">
          <h3>Django</h3>
        </div>
        <div className="skill">
          <h3>HTML</h3>
        </div>
        <div className="skill">
          <h3>CSS</h3>
        </div>
        <div className="skill">
          <h3>SQL</h3>
        </div>
        <div className="skill">
          <h3>MongoDB</h3>
        </div>
        <div className="skill">
          <h3>Git</h3>
        </div>
      </div>
      <hr></hr>

        <div className='Contact' ref={contactRef}>
        <Subtitle>Contact</Subtitle>
        <div className="card-container">
          <div className="card">
            <h3>Email:</h3>
            <Link1 href="mailto:victor.programador2002@gmail.com">
              victor.programador2002@gmail.com
            </Link1>
          </div>
          <div className="card">
            <h3>Phone:</h3>
            <Link1>
              +569 5700 5236
            </Link1>
          </div>
          <div className="card">
            <h3>LinkedIn:</h3>
            <Link1 href="https://www.linkedin.com/in/v%C3%ADctor-salgado-4ba2932b3/">
              Víctor Salgado
            </Link1>
          </div>
          <div className="card">
            <h3>GitHub:</h3>
            <Link1 href="https://www.github.com/Champinhon">
              My GitHub
            </Link1>
          </div>
        </div>
      </div>
      <div className='App-footer'>
        <Footer>Made with 🖤 by Víctor Salgado</Footer>
      </div>
    </div>
  );
}

export default App