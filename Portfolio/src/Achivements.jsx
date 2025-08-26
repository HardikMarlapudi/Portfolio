import React from 'react';
import './Achivements.css';

function Achivements() {

    function presidentsAward() {
        window.location.href = "https://sc.edu/about/offices_and_divisions/registrar/transcripts_and_records/honor_lists/";
        return;
    }

    function scholarship() {
        window.location.href = "https://sc.edu/about/offices_and_divisions/financial_aid/scholarships/scholarships_for_sc_residents/life_scholarship/renewal_requirements/";
        return;
    }

    function deansAward() {
        window.location.href = "https://sc.edu/about/offices_and_divisions/registrar/transcripts_and_records/honor_lists/";
        return;
    }

    return (

        <>
        <div className="title">
            <h1 id="title">Achivements</h1>
        </div>

            <div className="awards">
            <p id="awards" onClick={presidentsAward}>University of South Carolina - President's List (Superlative Award)</p>
            <p id="awards" onClick={scholarship}>University of South Carolina - SC Life Scholarship (Superlative Award)</p>
            <p id="awards" onClick={deansAward}>University of South Carolina - Dean's List (Superlative Award)</p>
        </div>
        </>
    )
}

export default Achivements;
