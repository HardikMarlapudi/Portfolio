import React from "react";
import { FaAward } from "react-icons/fa";

function Achievements() {
  
  const achievements = [
    {
      title: "President's List",
      institution: "University of South Carolina",
      year: "2023-2024",
      description:
        "Recognized for outstanding academic performance and maintaining a high GPA throughout the academic year.",
    },
    {
      title: "Dean's List",
      institution: "University of South Carolina",
      year: "2024-2025",
      description:
        "Awarded for academic excellence and consistent achievement in coursework.",
    },
    {
      title: "SC LIFE Scholarship",
      institution: "University of South Carolina",
      year: "2023",
      description:
        "Merit-based scholarship awarded for academic achievement and continued academic success.",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white px-6 py-12 transition duration-500">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-6">
          Achievements
        </h1>

        <p className="text-center text-black-300 mb-16 max-w-3xl mx-auto">
          Here are some milestones that reflect my academic growth,
          dedication, and commitment to excellence.
        </p>

        <div className="relative border-l-4 border-blue-500 ml-6">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-12 top-2 bg-blue-500 p-3 rounded-full">
                <FaAward className="text-white text-xl" />
              </div>

              <div className="dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition">
                <h2 className="text-2xl font-bold text-blue-400 mb-2">
                  {item.title}
                </h2>

                <p className="text-black-400 mb-4">
                  {item.institution} • {item.year}
                </p>

                <p className="leading-7 text-black-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;
