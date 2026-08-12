import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { motion } from "framer-motion";
const Education = () => {
    return (
        <div className='flex flex-col gap-10 md:mx-10 sm:mx-10 lg:mx-30'>
            <div className="text-[35px] text-center font-bold tracking-wider ">Education</div>


            <motion.div  className="flex md:gap-10 sm:gap-8 gap-6 lg:gap-12 ">
                <div className="flex border relative   w-fit h-80 text-[#22d3ee]/50">
                    <p className="w-3 h-3 absolute ms-[-6px] border shadow-[#22d3ee] shadow border-[#22d3ee] bg-black rounded-full "></p>
                    <p className="w-3 h-3 absolute ms-[-6px] border mt-51 shadow-[#22d3ee] shadow border-[#22d3ee] bg-black rounded-full "></p>
                </div>
                <div>
                    <p className="mb-5 textclr font-bold">2022 - 2026</p>
                    <motion.div initial={{scale:0}} whileInView={{scale:1}}  transition={{duration:0.2}} className="border   rounded-xl border-[#062d3361]  p-5 bg-[url('https://abusaid.netlify.app/blur-23.svg')] bg-center">
                        
                        <div className="flex items-center gap-6  w-full h-full">
                            <i className='border w-16 text-[#22d3ee] bg-[#22d3ee]/15 text-2xl border-[#094e5961] text-gray- h-15 flex flex-col justify-center items-center rounded-sm'><FaGraduationCap /></i>
                            <div className="flex flex-col gap-1">
                                <p className=""> Bachelor of Technology (B.Tech) in Information technology(IT)</p>
                                <p className="text-sm textclr">Indus University, Ahmedabad</p>
                                <p className='text-sm text-[#e6e6eda1] '>Pursuing a Bachelor of Technology with a focus on software development and modern technologies.</p>
                            </div>
                        </div>
                    </motion.div>
                    

                    <p className="mt-10  textclr font-bold ">Certification</p>
                    <div className="">
                        
                        <div className="lg:flex gap-10 my-5 ">

                            <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.4}} className="border lg:w-1/2 p-4 rounded-xl border-[#062d3361]  bg-[url('https://abusaid.netlify.app/blur-23.svg')] bg-center object-cover">
                                <div className="flex gap-5  w-full h-full">
                                    <i className='border  h-fit px-3 py-3 bg-[#22d3ee]/15 text-[#22d3ee] text-md   border-[#094e5961] text-gray-300 h-15 flex flex-col justify-center items-center rounded-md'><RiVerifiedBadgeFill className='text-[#22d3ee]' /></i>
                                    <div className="flex flex-col gap-1">
                                        <p className="">Frontend Development  </p>
                                        <p className="text-sm textclr">Talent Computer Institute of Technology (TCIT)</p>
                                        <p className='text-sm mt-1 text-[#e6e6eda1]'>Successfully completed professional training in Frontend Development, gaining practical experience in creating responsive user interfaces and developing modern web applications.</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.4}} className="border mt-10 lg:mt-0 lg:w-1/2 rounded-xl p-4 border-[#062d3361]   bg-[url('https://abusaid.netlify.app/blur-23.svg')] bg-center object-cover">
                                <div className="flex  gap-5 h-full w-full">
                                    <i className='border  text-md  h-fit px-3 py-3 bg-[#22d3ee]/15  border-[#094e5961] text-gray-300 h-15 flex flex-col justify-center items-center rounded-md'><RiVerifiedBadgeFill className='text-[#22d3ee]' /></i>
                                    <div className="flex flex-col gap-1">
                                        <p className=""> MERN Stack </p>
                                        <p className="text-sm textclr">Talent Computer Institute of Technology (TCIT)</p>
                                        <p className='text-sm mt-1 text-[#e6e6eda1]'>Completed professional training in MERN Stack Development with hands-on experience in building full-stack web applications, developing REST APIs, managing databases, and implementing user authentication.</p>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Education
