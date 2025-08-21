import React from 'react';
import './Projects.css';

function Projects() {

   const projectCard = document.querySelector(".project-card-view card");

   function URL(url) {
    window.open(url, '_blank');
   }

   if(document.querySelector("project-card-view card")) {
    projectCard.addEventListener('click', () => {
        URL('https://github.com/HardikMarlapudi/Calculator_React.js');
        return;
    });
   }

    return (
        <>
        <h1 id="projectTitle">My Recent Works</h1>
        <p id="projectIdeas">Here are a few projects I've worked on recently.</p>

        <div className="project-card-view card">
            <p>Calculator program</p>
            <p>A sample calculator program that takes user input for two numbers and an operartor, then performs the corresponding calcuation and displays the result.
                This program involves conditional (if/else or switch) to handle different opertations and error handling, such as preventing division by zero.
            </p>
        </div>

        <div className="project-card-view card">
            <p>Forms Application</p>
            <p>A forms application that takes the user inputs for each field and records the users details
                as the output and displays it in the console and a brand new user can clear the details and
                enter their new information.
            </p>
        </div>

        <div className="project-card-view card">
            <p>Portfolio</p>
            <p>Builded a Portfolio using React.js to introducing myself about becoming a professional dev and as an 
                and a person who loves to code and learn new things as an engninnering student.

            </p>
        </div>
        </>
    )
}

export default Projects;
