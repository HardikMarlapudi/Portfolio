import React from 'react';


function Projects() {


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
        </>
    )
}

export default Projects;
