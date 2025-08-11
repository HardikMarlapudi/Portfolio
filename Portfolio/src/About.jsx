import './About.css';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt, FaReact, FaJava, FaGithub } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVue } from "react-icons/io5";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { SiMacos } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import GitHubCalendar from 'react-github-calendar';

function About() {
  return (
    <div className="about-container">
      <h2>Know Who I'M</h2>
      <p>Hi Everyone, I am Hardik Marlapudi from Blythewood, South Carolina.</p>
      <p id="firstParagraph">I am a student from the University of South Carolina at Columbia.</p>
      <p id="secondParagraph">I am majoring in Computer Information Systems and concentrating in Cybersecurity.</p>
      <p id="thirdParagraph">Apart from coding, some activities that I love to do!</p>
      <ol id="activities">
        <li>Playing Video Games</li>
        <li>Travelling</li>
        <li>Playing Tennis</li>
      </ol>

      <h2 id="skillet">Professional Skillset</h2>
      <div className="skill-icons">
        <FaHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <FaJava />
        <FaReact />
        <IoLogoVue />
        <DiNodejs />
        <DiMongodb />
        <FaGitAlt />
        <FaGithub />
      </div>

      <h2 id="tools">Tools I use</h2>
      <div className="tool-icons">
        <SiMacos />
        <VscVscode />
      </div>

      <h2 id="days-I-code">Days I Code</h2>
      <div className="github-calendar">
        <GitHubCalendar
          username="HardikMarlapudi"
          blockSize={15}
          blockMargin={5}
          color="#a971f5"
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default About;
