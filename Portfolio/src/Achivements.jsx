import React from 'react';
import './Achivements.css';

function Achivements() {

    const achievements = [
        {
            title: "University of South Carolina - President's List (Superlative Award)",
            institution: "University of South Carolina, Columbia",
            year: "2023-2024",
            description: "Received the President's List (Superlative Award) for my academic excellence and dedication to my studies. This recognition reflects my commitment to academic success and my ability to excel in my field of study.",
        },
        {
            title: "University of South Carolina - Dean's List (Superlative Award)",
            institution: "University of South Carolina, Columbia",
            year: "2024-2025",
            description: "Received the Dean's List (Superlative Award) for my academic excellence and dedication to my studies. This recognition reflects my commitment to academic success and my ability to excel in my field of study."
        },
        {
            title: "University of South Carolina - SC Life Scholarship (Superlative Award)",
            institution: "University of South Carolina, Columbia",
            year: "2023",
            description: "Received the SC Life Scholarship (Superlative Award) for my academic excellence and dedication to my studies. This recognition reflects my commitment to academic success and my ability to excel in my field of study.",
        },
        {
            title: "FrontEnd Mentor Challenge Winner",
            institution: "University of South Carolina",
            year: "2024-2025",
            description: "Received the FrontEnd Mentor Challenge Winner for my academic excellence and dedication to my studies. This recognition reflects my commitment to academic success and my ability to excel in my field of study.",
        },
    ];

    return (
        <section className="achievements-section">
          <h2 className="title fade-in">Achievements</h2>
          <p className="intro fade-in">Here are some milestones that reflect my growth, curiosity, and commitment to excellence.</p>
    
          <div className="timeline">
            {achievements.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <span className="institution">{item.institution} • {item.year}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }
    
    export default Achivements;
