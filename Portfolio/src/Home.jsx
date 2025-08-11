import React from 'react';
import './Home.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from 'react-icons/fa';


function Home() {

    return(
        <>
        <div className="intro">
            <h1 id="title">Hi there! </h1>
            <p id="name">I'm Hardik Marlapudi</p>
            <img src="https://readme-typing-svg.herokuapp.com/?font=Fira+Code&duration=3000&pause=1000&color=1D9BF0&center=true&vCenter=true&width=435&lines=Software+Engineer" alt="Typing SVG" />
        </div>

        <div className="aboutMe">
            <h2 id="aboutMyself">LET ME INTRODUCE MYSELF</h2>
            <p id="aboutMe">I am a Student at the University of South Carolina and I fell love with programming for quite a while now.</p>
            <p id="aboutMe">I am fluent in classics like JavaScript, React.js, and Java.</p>

            <p id="aboutMe">My Field of Interest's are building new Web Technologies and Products and also in areas related to Blockchain.</p>

            <p id="aboutme">Whenever possible, I also like applying my passion for developing products with Node.js and Modern Javascript Libraries like React.js and Vue.js</p>
        </div>

        <div className="border">
            <h1 id="firstBorder">FIND ME ON</h1>
            <p>Feel free to connect me</p>
            <p id="buttons"> <FaGithub /> <BiLogoGmail /> <FaLinkedin /> <FaInstagram /> </p>
        </div>
        </>
    );
}

export default Home;
