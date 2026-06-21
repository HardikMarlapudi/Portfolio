import React, {useState, useEffect} from "react";
import profile from "/photo/Profile-pic.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

function Home() {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.class.remove("dark");
        }
    }, [setDarkMode]);

    return (
        <>
            <div className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white px-6 py-12 transition duration-500">
                <div className="mt-16 bg-gray-100 dark:bg-slate-900 rounded-xl p-8 shadow-lg">

                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-8">
                            Hi There!
                        </h1>

                        <img src={profile} alt="Profile" className="w-64- h-64 rounded-full mx-auto object-hover border-4 border-blue-500 shadow-xl" />

                        <h2 className="text-3xl font-semibold mt-8">I'm Hardik Marlapudi</h2>
                    </div>

                    <div className="mt-16 bg-gray-100 dark:bg-slate-900 rounded-xl p-8 shadow-lg">
                        <h2 className="text-center text-3xl font-bold text-blue-500 mb-6">
                            Let Me Introduce Myself
                        </h2>

                        <p className="text-center text-lg mb-4">
                            I am a student at the University of South Carolina and I have been passionate about software development for several years.
                        </p>

                        <p className="text-center text-lg mb-4">
                            I work primilary with JavaScript, React, Java, HTML, CSS, and modern web technologies.
                        </p>

                        <p className="text-center text-lg mb-4">
                            I enjoy building projects that solve real-world problems while continously improving my technical skills.
                        </p>

                        <div className="mt-16 text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                Find me on
                            </h2>

                            <p className="mb-8 text-gray-600 dark:text-gray-300">
                                Feel Free to connect with me
                            </p>

                            <div className="flex justify-center gap-8 text-3xl">
                                <a 
                                href="https://github.com/HardikMarlapudi"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-green-500 transition"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                href="mailto:hardik.a.marlapudi@gmail.com"
                                className="hover:text-red-400 transition"
                                >
                                    <BiLogoGmail />
                                </a>

                                <a
                                href="https://www.linkedin.com/in/hardik-marlapudi-159102224/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-blue-500 transition"
                                >
                                    <FaLinkedin />
                                </a>

                                <a 
                                href="https://www.instagram.com/hardik_marlapudi/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-pink-300 transition"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
