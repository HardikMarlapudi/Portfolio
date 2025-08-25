import React from 'react';
import './Resume.css';

function Resume() {

    function myResume() {
        window.location.href = "https://www.canva.com/design/DAGmK3r63YY/iZzBui00c-UG7spahfgA7w/edit";
        return;
    }

    return (
        <>
        <h2 id="title">Resume</h2>
        <p id="resume" onClick={myResume}>Resume</p>
        </>
    )
}

export default Resume;
