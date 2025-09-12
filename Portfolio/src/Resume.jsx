import React, {useState} from 'react';
import {FaHtml5 , FaCss3Alt, FaJsSquare, FaJava, FaReact} from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import './Resume.css';

function Resume() {

    const [showPreview, setShowPreview] = useState(false);

    return (
        <>
        <h2 id="title" className="title fade-in">Resume</h2>
        <a href="https://www.overleaf.com/read/wpmtzsvqjttf#f418ee" id="resume" class="resume fade-in" target="_blank">Resume</a>
        <p id="aboutResume" class="aboutResume fade-in">If you're interested in my qualifications for IT roles, feel free to download or preview my resume below.</p>

        <div className="resume-actions fade-in">
            <a href="/Resume%20(2).pdf" download className="btn download-btn">Download Resume</a>
            <button className="btn preview-btn" onClick={() => setShowPreview(!showPreview)}>
                {showPreview ? "Hide Preview" : "Preview Resume"}
            </button>
        </div>

        {showPreview && (
        <div className="resume-preview">
            <iframe src="https://www.overleaf.com/read/wpmtzsvqjttf#f418ee" frameBorder="0" title="Resume Preview"></iframe>
        </div>
        )}

        <div className="skills fade-in">
            <h3>Skills</h3>
            <ul>
                <li><FaHtml5 /><FaCss3Alt/> HTML/CSS</li>
                <li><FaJsSquare/> JavaScript</li>
                <li><FaJava/> Java</li>
                <li><FaReact/> React.js</li>
                <li><IoLogoVue/> Vue.js</li>
                <li><MdOutlineSecurity /> CyberSecurity Fundamentals</li>
            </ul>
        </div>

        <div className="certifications fade-in">
            <h2>Certifications</h2>
            <ul>
                <li>Google Cybersecurity Certificate (2025)</li>
                <li>Frontend Mentor Challenges (React)</li>
            </ul>
        </div>
        <div className="why-me fade-in">
            <h3>Why Me?</h3>
            <p>
                I'm a passionate developer with a strong foundation in React, JavaScript, and cybersecurity.
                I love building responsive, interactive UIs and solving real-world problems through clean, sclable code.
            </p>
        </div>
        </>
    )
}

export default Resume;
