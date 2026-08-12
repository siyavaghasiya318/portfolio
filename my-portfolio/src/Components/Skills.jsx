import React from 'react'
import {
  SiHtml5, SiCss, SiJavascript, SiBootstrap, SiTailwindcss,
  SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiGit, SiGithub, SiVercel, SiRender, SiCloudinary,
  SiMuller,
  SiJsonwebtokens,
  SiPython
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { BsOpenai } from "react-icons/bs";
import { motion } from "framer-motion";

const techStack = [
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
  { name: "Express", icon: <SiExpress />, color: "#F1F1F1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "GitHub", icon: <SiGithub />, color: "#F1F1F1" },
  { name: "ChatGPT", icon: <BsOpenai />, color: "#74AA9C" },
  { name: "Vercel", icon: <SiVercel />, color: "#F1F1F1" },
  { name: "Render", icon: <SiRender />, color: "#46E3B7" },
  { name: "Cloudinary", icon: <SiCloudinary />, color: "#3448C5" },
  { name: "Multer", icon: <SiMuller />, color: "#F46519" },
  { name: "JWT", icon: <SiJsonwebtokens />, color: "#f59e0b" },
  { name: "REST API", icon: <TbApi />, color: "#22d3ee" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
];

const tools = [

];

const Skills = () => {
  return (
    <>
      <div className="text-[35px] mb-15 font-bold text-center">Skils & Abilities</div>

      <div className="p-10 relative py-16 overflow-hidden bg-gradient-to-b from-[#0f0815] via-[#160a24] to-[#0f0815]">
        {/* <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div> */}

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-violet-500/10 blur-[150px] rounded-full"></div>

        {/* Bottom Right */}
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-violet-500/10 blur-[150px] rounded-full"></div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center  ">
          {techStack.map((item) => {
            return (
              <>
                <motion.div initial={{ scale: 0.3, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut"
                  }} className="w-26 h-25  gap-2 m-auto px-2 py-5 rounded-lg flex flex-col justify-center items-center ">
                  <i className='text-[40px]' style={{ color: item.color }}>{item.icon}</i>
                  <p className="font-semibold  text-center text-md">{item.name}</p>
                </motion.div>

              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Skills









