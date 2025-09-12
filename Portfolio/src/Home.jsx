import React from 'react';
import './Home.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from 'react-icons/fa';

function Home() {

    return (
        <>
        <div className="intro fade-in">
            <h1 id="title">Hi there!</h1>
            <center><img src="Portfolio/photo/Profile-pic.png" id="profilePhoto" alt="Profile Pic"></img></center>
            <p id="name">I'm Hardik Marlapudi</p>
        </div>

        <div className="aboutMe fade-in">
            <h2 id="aboutMyself">LET ME INTRODUCE MYSELF</h2>
            <p id="aboutMe">I am a student at the University of South Carolina and I fell love with programming for quite a while now.</p>
            <p id="aboutMe">I am fluent in classics like JavaScript, React.js, and Java.</p>

            <p id="aboutMe">My Field of Interest's are building new Web Technologies and Products and also in areas related to Blockchain.</p>

            <p id="aboutme">Whenever possible, I also like applying my passion for developing products with Node.js and Modern JavaScript Libraries like React.js and Vue.js</p>
        </div>

        <div className="border fade-in">
            <h1 id="firstBorder">FIND ME ON</h1>
            <p>Feel free to connect me</p>
            <p id="buttons">
                <a href="https://www.instagram.com/hardik_marlapudi" target="_blank"><FaGithub /></a>
                <a href="https://www.hardik.a.marlapudi@gmail.com" target="_blank"><BiLogoGmail /></a>
                <a href="https://www.linkedin.com/in/hardik-marlapudi-b47a14307/" target="_blank"><FaLinkedin /></a>
                <a href="https://www.instagram.com/hardik_marlapudi" target="_blank"><FaInstagram /></a>
            </p>
        </div>
        </>
    );
}

export default Home;
