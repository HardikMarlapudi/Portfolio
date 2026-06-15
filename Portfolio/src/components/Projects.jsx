import React from 'react';

function Projects() {

    const projects = [
        {
            title: "Calculator Program",
            link: "https://hardikmarlapudi.github.io/Calculator_React.js/",
            image: "https://github.com/user-attachments/assets/7d2127c8-7b49-4d7d-ab50-1a4b57fefcc8",
            description: "A simple calculator program that performs basic arithmetic operations.",
        },

        {
            title: "BMI Calculator",
            link: "https://github.com/HardikMarlapudi/BMI-Calculator",
            image: "https://github.com/user-attachments/assets/0a4c1019-2343-472c-9525-a7fb175d786c",
            description: "A BMI calculator that takes the user input for their height and weight and calculates their BMI.",
        },

        {
            title: "Portfolio",
            link: "https://github.com/HardikMarlapudi/Portfolio",
            image: "https://github.com/user-attachments/assets/9c8c084e-bf9f-4eb4-ad33-b5870f9ddc56",
            description: "Built a Portfolio introducing myself about becoming a professional dev and as a person who loves to code and learn new things to grow as a developer.",
        },

        {
            title: "Quote Generator",
            link: "https://hardikmarlapudi.github.io/QuoteGenerator/",
            image: "https://github.com/user-attachments/assets/3593d5bc-4a6e-45bf-8325-440ea11d5ac0",
            description: "Buil a Quote Generator in React.js using axios to fetch API requests to retreive a new quote just with a click of a button.",
        },

        {
            title: "Pokedex",
            link: "https://github.com/HardikMarlapudi/Pokedex",
            image: "https://github.com/user-attachments/assets/b1f57e3c-1d25-40f4-9061-7894589df690",
            description: "A Pokedex application that displays information about various Pokémon characters. Users can search for specific Pokémon by name or view a list of all available Pokémon.",
        },

        {
            title: "Digital Clock",
            link: "https://hardikmarlapudi.github.io/DigitalClock",
            image: "https://github.com/user-attachments/assets/b9e76fa8-fa0b-4873-8260-79d970ed74ac",
            description: "A Digital Clock application that displays the current time in hours, minutes, and seconds. The clock updates in real-time, providing an accurate representation of the current time.",
        },

        {
            title: "Recipe Finder",
            link: "https://hardikmarlapudi.github.io/RecipeFinder",
            image: "https://github.com/user-attachments/assets/e0daf330-920f-43c6-9d88-df42cd0e6dfe",
            description: "A Recipe Finder is a digital tool designed to help users discover meals based on the ingredients they already have on hand. By entering available pantry or fridge items, users can instantly generate tailored recipe suggestions, minimize food waste, and save money.",
        }
    ]

    return (
        <>
            <section className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white px-6 py-12 transition duration-500">
                <div className="mx-w-7xl mx-auto">

                    <h1 className="text-5xl font-bold text-center mb-4">
                        My Recent Work
                    </h1>

                    <p className="text-center text-black-300 mb-4">
                        Here are a few projects I've worked on recently.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div 
                                key={project.title}
                                className="bg-white-900 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
                            >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-4">
                                    {project.title}
                                </h2>

                                <p className="text-black-300 mb-4">
                                    {project.description}
                                </p>
                            <center>
                            <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-center justify-center bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                            >
                                View Project
                            </a>
                            </center>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
    </>
    )
}

export default Projects;
