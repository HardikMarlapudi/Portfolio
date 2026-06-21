import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt, FaReact, FaJava, FaGithub } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVue } from "react-icons/io5";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { SiMacos } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiEclipse } from "react-icons/di";
import { SiPycharm } from "react-icons/si";
import GitHubCalendar from "react-github-calendar";

function About() {

  return (
    <>
    <section className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white px-6 py-12 transition duration-500">
    <div className="mt-16 bg-gray-100 dark:bg-slate-900 rounded-xl p-8 shadow-lg">
      <h1 className="text-5xl text-center font-bold mb-12">
        About Me:
      </h1>

      <div className="mt-16 bg-gray-100 dark:bg-slate-900 rounded-xl p-8 shadow-lg">
      <p className="text-lg leading-8 mb-6 text-center">
        Hello! My name is Hardik Marlapudi, and I am a Computer Information Systems student at the Uniersity of South Carolina with a minor in Business Info Management.
      </p>

      <p className="text-lg leading-8 mb-6 text-center">
        I am passionate about software development, cybersecurity, and building practical technology solutions. Through my coursework and personal projects, I have gaind experience with Java, JavaScript, React.js, HTML, CSS, Python, and mySQL.
      </p>

      <p className="text-lg leading-8 mb-6 text-center">
        My goal is to continue developing my technical skills while pursuing opportunities in sofware development, cybersecurity, quality assurnace, and IT consulting.
      </p>

      <h2 className="text-2xl font-bold text-blue-400 mt-8 mb-4 text-center">
        When I'm not coding, I enjoy: 
      </h2>
      
      <ul className="space-y-3 text-lg text-center">
        <b>Playing Video Games</b><br></br>
        <b>Traveling</b><br></br>
        <b>Playing Tennis</b><br></br>
      </ul>

    <div className="mt-16 rounded-xl p-8 shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-10">
        Professional Skillset
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 cursor-pointer">
        <SkillCard icon={<FaHtml5 />} />
        <SkillCard icon={<FaCss3Alt />} />
        <SkillCard icon={<IoLogoJavascript />} />
        <SkillCard icon={<FaJava />} />
        <SkillCard icon={<FaReact />} />
        <SkillCard icon={<IoLogoVue />} />
        <SkillCard icon={<DiNodejs />} />
        <SkillCard icon={<DiMongodb />} />
        <SkillCard icon={<FaGitAlt />} />
        <SkillCard icon={<FaGithub />} />
      </div>
    </div>

    <div className="mt-20 rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-10">
            Tools I use
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer">
            <SkillCard icon={<SiMacos />} />
            <SkillCard icon={<VscVscode />} />
            <SkillCard icon={<DiEclipse />} />
            <SkillCard icon={<SiPycharm />} />
        </div>
    </div>

    <div className="mt-20">
      <h2 className="text-4xl font-bold text-center mb-10">
          Github Activity
      </h2>
    </div>

    <div className="mt-16 bg-gray-100 dark:bg-slate-900 rounded-xl p-8 shadow-lg">
      <div className="w-full flex justify-center">
        <GitHubCalendar
          username="HardikMarlapudi"
          blockSize={15}
          blockMargin={5}
          color="#a971f5"
          fontSize={15}
        />
      </div>
    </div>
    </div>
  </div>
</section>
</>
  );
}

const SkillCard = ({icon}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white-100 rounded-xl hover:bg-slate-700 transition duration-300">
      <div className="text-4xl mb-4">
        {icon}
      </div>
    </div>

  )
}

export default About;
