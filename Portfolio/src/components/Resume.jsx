import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaReact,
} from "react-icons/fa";

import { IoLogoVue } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";

import resume from "/pdf/Resume.pdf";

function Resume() {
  const [showPreview, setShowPreview] = useState(false);

  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
    },
    {
      icon: <FaJsSquare />,
      name: "JavaScript",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <IoLogoVue />,
      name: "Vue.js",
    },
    {
      icon: <MdOutlineSecurity />,
      name: "Cybersecurity",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white px-6 py-12 transition duration-500">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-6">
          Resume
        </h1>

        <p className="text-center text-black-300 max-w-3xl mx-auto mb-10">
          If you're interested in my qualifications for IT roles,
          feel free to preview or download my resume below.
        </p>

        <div className="flex justify-center gap-4 mb-12">

          <button
            onClick={() => setShowPreview(!showPreview)}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition cursor-pointer"
          >
            {showPreview ? "Hide Preview" : "Show Preview"}
          </button>

          <a
            href={resume}
            download
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition cursor-pointer"
          >
            Download Resume
          </a>

        </div>

        {showPreview && (
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg mb-16">
            <iframe
              src={resume}
              title="Resume Preview"
              className="w-full h-[900px]"
            />
          </div>
        )}

        <div className="mt-12 dark:bg-slate-900 rounded-xl p-8 mb-12 shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-10">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-8 bg-white-500 rounded-xl hover:bg-slate-500 hover:text-blue-400 transition"
              >
                <div className="text-5xl mb-4">
                  {skill.icon}
                </div>

                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 dark:bg-slate-900 rounded-xl p-8 mb-12 shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-8">
            Certifications
          </h2>

          <ul className="space-y-4 text-lg text-center">
            <li>Google Cybersecurity Professional Certificate</li>
            <li>Frontend Mentor React Challenges</li>
          </ul>
        </div>

        <div className="mt-12 dark:bg-slate-900 rounded-xl p-8 mb-12 shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-8">
            Why Me?
          </h2>

          <p className="text-lg leading-8 text-center max-w-4xl mx-auto">
            I'm a passionate developer with a strong foundation in
            React, JavaScript, Java, and cybersecurity. I enjoy
            building responsive applications, solving technical
            challenges, and continuously learning new technologies
            that help me grow as a software developer.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Resume;
