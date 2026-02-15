import React, {useState} from 'react';
import {FaHtml5 , FaCss3Alt, FaJsSquare, FaJava, FaReact} from "react-icons/fa";
import resume from "/pdf/Resume.pdf";
import { IoLogoVue } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import '/src/css/Resume.css';

function Resume() {

    const [showPreview, setShowPreview] = useState(false);

    return (
        <>
        <h2 id="title" className="title fade-in">Resume</h2>
        <p id="aboutResume" className="aboutResume fade-in">If you're interested in my qualifications for IT roles, feel free to download or preview my resume below.</p>

        <div className="resume-actions fade-in">
            <button className="btn-download-btn" onClick={() => setShowPreview(!showPreview)}>
                {showPreview ? "Hide Preview" : "Show Preview"}
            </button>
        </div>

        {showPreview && (
        <div className="resume-preview">
            <iframe src={resume} title="Resume Preview"></iframe>
        </div>
        )}

        <div className="skills fade-in">
            <h3 id="skills">Skills</h3>
            <ul>
                <div className="icons">
                <li><FaHtml5 /><FaCss3Alt/> HTML/CSS</li>
                <li><FaJsSquare/> JavaScript</li>
                <li><FaJava/> Java</li>
                <li><FaReact/> React.js</li>
                <li><IoLogoVue/> Vue.js</li>
                <li><MdOutlineSecurity/> CyberSecurity Fundamentals</li>
                </div>
            </ul>
        </div>

        <div className="certifications fade-in">
            <h2 id="certifications">Certifications</h2>
            <ul id="certificationList">
                <p>Google Cybersecurity Certificate (2025)</p>
                <p>Frontend Mentor Challenges (React)</p>
            </ul>
        </div>
        <div className="why-me fade-in">
            <center><h3 id="whyMe">Why Me?</h3></center>
            <center>
            <p id="info">
                I'm a passionate developer with a strong foundation in React, JavaScript, and cybersecurity.
                I love building responsive, interactive UIs and solving real-world problems through clean, sclable code.
            </p>
            </center>
        </div>
        </>
    )
}

export default Resume;
