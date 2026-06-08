import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt, FaReact, FaJava, FaGithub } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVue } from "react-icons/io5";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { SiMacos } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiEclipse } from "react-icons/di";
import { SiPycharm } from "react-icons/si";
import GitHubCalendar from 'react-github-calendar';
import '/src/css/About.css';

function About() {

  return (
    <div className="about-container">
      <h2>About Me: </h2>


      <p>Hello! My name is Hardik Marlapudi, and I am a Computer Information Systems student at the Uniersity of South Carolina with a minor in Business Info Management.</p>

      <p id="firstParagraph">I am passionate about software development, cybersecurity, and building practical technology solutions. Through my coursework and personal projects, I have gaind experience with Jaa, Javascript, React, HTML, CSS, SQL, and web development.</p>

      <p id="secondParagraph">My goal is to continue developing my technical skills while pursuing opportunities in sofware development, cybersecurity, quality assurnace, and IT consulting.</p>

      <p id="thirdParagraph">When I'm not coding, I enjoy: </p>
      
      <ol id="activities-fade-in">
        <b>Playing Video Games</b><br></br>
        <b>Traveling</b><br></br>
        <b>Playing Tennis</b><br></br>
      </ol>

      <h2 id="skillet fade-in">Professional Skillset</h2>
      <div className="skill-icons fade-in">
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

      <h2 id="tools fade-in">Tools I use</h2>
      <div className="tool-icons">
        <a href="https://www.apple.com/macos/macos-sequoia/" target="_blank"><SiMacos /></a>
        <a href="https://code.visualstudio.com/" target="_blank"><VscVscode /></a>
        <a href="https://www.eclipse.org/" target="_blank"><DiEclipse /></a>
        <a href="https://www.jetbrains.com/pycharm/" target="_blank"><SiPycharm /></a>
      </div>

      <h2 id="days-I-code fade-in">Days I Code</h2>
      <div className="github-calendar fade-in">
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
