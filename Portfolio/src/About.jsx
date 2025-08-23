import './About.css';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt, FaReact, FaJava, FaGithub } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVue } from "react-icons/io5";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { SiMacos } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiEclipse } from "react-icons/di";
import GitHubCalendar from 'react-github-calendar';

function About() {

  return (
    <div className="about-container">
      <h2>Know Who I'M</h2>
      <p>Hello there, I am Hardik Marlapudi and I'm from Blythewood, South Carolina.</p>
      <p id="firstParagraph">I am a student from the University of South Carolina at Columbia.</p>
      <p id="secondParagraph">I am majoring in Computer Information Systems and concentrating in Cybersecurity.</p>
      <p id="thirdParagraph">Apart from coding, some activities that I love to do!</p>

      
      <ol id="activities">
        <b>Playing Video Games</b><br></br>
        <b>Travelling</b><br></br>
        <b>Playing Tennis</b><br></br>
      </ol>

      <h2 id="skillet">Professional Skillset</h2>
      <div className="skill-icons">
        <a href="https://www.html.com" target="_blank"><FaHtml5 /></a>
        <a href="https://www.css.com" target="_blank"><FaCss3Alt /></a>
        <a href="https://www.javascript.com" target="_blank"><IoLogoJavascript /></a>
        <a href="https://docs.oracle.com/en/java/javase/17/docs/api/index.html" target="_blank"><FaJava /></a>
        <a href="https://react.dev/" target="_blank"><FaReact /></a>
        <a href="https://vuejs.org/" target="_blank"><IoLogoVue /></a>
        <a href="https://nodejs.org/en" target="_blank"><DiNodejs /></a>
        <a href="https://www.mongodb.com/" target="_blank"><DiMongodb /></a>
        <a href="https://git-scm.com/" target="_blank"><FaGitAlt /></a>
        <a href="https://www.github.com/" target="_blank"><FaGithub /></a>
      </div>

      <h2 id="tools">Tools I use</h2>
      <div className="tool-icons">
        <a href="https://www.apple.com/macos/macos-sequoia/" target="_blank"><SiMacos /></a>
        <a href="https://code.visualstudio.com/" target="_blank"><VscVscode /></a>
        <a href="https://www.eclipse.org/" target="_blank"><DiEclipse /></a>
      </div>

      <h2 id="days-I-code">Days I Code</h2>
      <div className="github-calendar">
        <GitHubCalendar
          username="HardikMarlapudi"
          blockSize={15}
          blockMargin={5}
          color="#a971f5"
          fontSize={15}
        />
      </div>
    </div>
  );
}

export default About;
