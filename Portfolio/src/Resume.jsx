import React from 'react';
import './Resume.css';

function Resume() {
    const yes = "https://www.canva.com/design/DAGmK3r63YY/iZzBui00c-UG7spahfgA7w/edit";
    const no = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

    function resume() {
        if (resume) {
            alert (`You will be taken to my resume, would you like to continue?`);
        }
        
        if (yes) {
            window.open = "https://www.canva.com/design/DAGmK3r63YY/iZzBui00c-UG7spahfgA7w/edit";
            return;
        }
        else if (no) {
            alert (`You will not be taken to my resume, would you like to continue?`);
            return;
        }
    }

    return (
        <>
        <h2 id="title">Resume</h2>
        <p id="resume" onClick={resume}>Resume</p>
        </>
    )
}

export default Resume;
