import React from 'react';
import './Projects.css';

function Projects() {


    return (
        <>
        <h1 id="projectTitle">My Recent Works</h1>
        <p id="projectIdeas">Here are a few projects I've worked on recently.</p>

        <div className="project-card-view card">
            <a href="https://github.com/HardikMarlapudi/Calculator_React.js" target="_blank" id="calculatorProgram">Calculator Program</a>
            <p>A sample calculator program that takes user input for two numbers and an operartor, then performs the corresponding calcuation and displays the result.
                This program involves conditional (if/else or switch) to handle different opertations and error handling, such as preventing division by zero.
            </p>
        </div>

        <div className="project-card-view card">
        <a href="https://github.com/HardikMarlapudi/Forms" target="_blank" id="formsApplication">Forms Application</a>
            <p>A forms application that takes the user inputs for each field and records the users details
                as the output and displays it in the console and a brand new user can clear the details and
                enter their new information.
            </p>
        </div>

        <div className="project-card-view card">
        <a href="https://github.com/HardikMarlapudi/BMI-Calculator" target="_blank" id="bmiCalculator">BMI Calculator</a>
            <p>A BMI calculator that takes the user input for their height and weight and calculates their BMI.</p>
        </div>

        <div className="project-card-view card">
        <a href="https://github.com/HardikMarlapudi/Portfolio" target="_blank" id="portfolio">Portfolio</a>
            <p>Builded a Portfolio using React.js to introducing myself about becoming a professional dev and as an
                and a person who loves to code and learn new things as an engninnering student.
            </p>
        </div>
        </>
    )
}

export default Projects;
