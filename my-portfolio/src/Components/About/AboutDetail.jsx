import React from 'react'
import { motion } from "framer-motion";
const AboutDetail = () => {
    return (
        <>
            <div className="text-[35px] font-bold tracking-wider text-center mb-15">About Me</div>
            <div className="lg:flex items-center gap-10 mb-10">
                <motion.div initial={{scale:0.5}} whileInView={{scale:1}} transition={{duration:0.5 }}  className="lg:w-1/2 relative flex items-center justify-center">
                    {/* <div className="uppercase text-lg w-[20%] border  font-bold ">About me</div> */}
                    <div  className="absolute inset-10 bg-blue-500/20 blur-[90px]"></div>
                   <div className="w-80 h-80 relative "> 
                    <img src="/siyaProfile.jpg" className='w-full h-full object-cover object-top rounded-full' alt="" /></div>
                </motion.div>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8 }} className="lg:w-1/2 text-gray-200 text-md capitalize">
                <p className="uppercase text-lg font-bold textclr">Who i am</p><br />
                    I’m Siya Vaghasiya, a passionate MERN Stack Developer with a strong interest in building modern web applications. I enjoy exploring new technologies, learning continuously, and solving real-world problems through code.
                    <br />
                    I have a self-learning attitude and love improving my skills by working on practical projects. My core skills include JavaScript, React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. I enjoy working across different areas of web development and creating applications that provide smooth and meaningful user experiences.
                    <br /><br />
                    I am always excited to learn, experiment with new technologies, and take on opportunities where I can contribute my skills and grow as a developer.
                </motion.div>
            </div>
        </>
    )
}

export default AboutDetail
