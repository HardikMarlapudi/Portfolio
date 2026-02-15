import React from 'react';
import '/src/css/Projects.css';

function Projects() {

    return (
        <>
        <h1 id="projectTitle" className="projectTitle fade-in">My Recent Works</h1>
        <p id="projectIdeas" className="projectIdeas fade-in">Here are a few projects I've worked on recently.</p>

        <div className="project-card-view card fade-in">
            <a href="https://github.com/HardikMarlapudi/Calculator_React.js" target="_blank" id="calculatorProgram">Calculator Program</a>
            <p>A sample calculator program that takes user input for two numbers and an operartor, then performs the corresponding calcuation and displays the result.
                This program involves conditional (if/else or switch) to handle different opertations and error handling, such as preventing division by zero.
            </p>
            <img width="300" height="250" alt="image" src="https://github.com/user-attachments/assets/7d2127c8-7b49-4d7d-ab50-1a4b57fefcc8" />
        </div>

        <div className="project-card-view card fade-in">
        <a href="https://github.com/HardikMarlapudi/BMI-Calculator" target="_blank" id="bmiCalculator">BMI Calculator</a>
            <p>A BMI calculator that takes the user input for their height and weight and calculates their BMI.</p>
            <img width="300" height="250" alt="image" src="https://github.com/user-attachments/assets/0a4c1019-2343-472c-9525-a7fb175d786c" />
        </div>

        <div className="project-card-view card fade-in">
        <a href="https://github.com/HardikMarlapudi/Portfolio" target="_blank" id="portfolio">Portfolio</a>
            <p>Builded a Portfolio introducing myself about becoming a professional dev and as a person who loves to code and learn new things to grow as a developer.
            </p>
            <img width="300" height="250" alt="image" src="https://github.com/user-attachments/assets/9c8c084e-bf9f-4eb4-ad33-b5870f9ddc56" />
        </div>

        <div className="project-card-view card fade-in">
            <a href="https://github.com/HardikMarlapudi/QuoteGenerator" target="_blank" id="portfolio">Quote Generator</a>
            <p>Builded a Quote Generator in React.js using axios to fetch API requests to retreive a new quote just with a click of a button.
            </p>
            <img width="300" height="250" alt="image" src="https://github.com/user-attachments/assets/3593d5bc-4a6e-45bf-8325-440ea11d5ac0" />
        </div>
        </>
    )
}

export default Projects;
