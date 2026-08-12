import React, { useContext } from 'react'
import { FaGithub, FaLinkedin, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { contactdetail } from '../assets/List';
import { userContax } from '../Context/UserContext';
import { ImSpinner8 } from "react-icons/im";

const Contact = () => {
    const { HandleChange, submitContactForm, load, sendContact } = useContext(userContax)


    return (

        <>
            <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration:0.5}} className="lg:flex mt-20 border rounded-xl backdrop-blur-sm bg-white/[0.02] border-white/10 ">

                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5 }} className="lg:w-1/2 lg:py-20 py-10 px-15">
                    <p className="text-2xl md:text-3xl font-bold textclr mb-15 lg:hidden block">Let's Connect</p>


                    <form onSubmit={submitContactForm} disabled={load} action="" className="flex flex-col gap-10">
                        <input name='name' value={sendContact.name} onChange={HandleChange} type="text" placeholder='Your Name' autoComplete="name" className='border-b border-white/20 py-1 outline-0 w-full' />
                        <input name='email' value={sendContact.email} onChange={HandleChange} type="email" placeholder='Your Email' autoComplete="email" className='border-b border-white/20 py-1 outline-0 w-full ' />
                        <textarea name='message' value={sendContact.message} onChange={HandleChange} rows={3} placeholder='Share your thought' className='border-b border-white/20 outline-0 w-full' id=""></textarea>
                        <button type='submit' className=' text-sm w-full py-3 outline-0 hover:scale-105 transition-all duration-300 uppercase tracking-wider disabled:cursor-not-allowed bg-gradient-to-br to-[#0b7080]  from-[#2729c9]  rounded-md textclr2 font-bold mt-5 bg-[#22d3eecb] flex items-center justify-center gap-2'>
                            <FaPaperPlane className='text-sm' />
                            <p className="">Submit</p>
                            {load ?
                                (<div className="animate-spin text- transition-all text-lg duration-600 ms-4"><ImSpinner8 /></div>) :
                                ("")}
                        </button>

                        {/* <div className='flex flex-col items-end '>
                            <button type='submit' onClick={ProductSubmit} disabled={load} className='flex items-center gap-5 px-10 py-5 mt-8 bg-[#6a9f4d]/20 font-semibold text-[20px] rounded-lg w-fit'>
                                {load ?
                                    (<><div className='w-5 h-5 border-4 border-green-700 border-t-transparent rounded-full animate-spin'></div>Loading...</>)
                                    :
                                    (<><MdOutlineLaunch className='text-[25px]' />Launch Product</>)}
                            </button>
                        </div> */}
                    </form>


                </motion.div>

                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.9 }} className="pb-10 lg:py-20 px-15 gap-2 flex flex-col">

                    <p className="text-3xl font-bold textclr hidden lg:block">Let's Connect</p>
                    <p className="text-gray-400 mt-5">
                        I'm currently looking for internships and exciting MERN Stack opportunities.
                    </p>

                    <div className="flex flex-col gap-5 my-4">
                        {contactdetail.map((item) => {
                            return (
                                <>
                                    <div className="flex gap-4">
                                        <div className=" h-fit rounded-full  bg-[#22d3ee]/15  border-[#094e5992] p-2.5 border"><i className=" textclr    ">{item.icone}</i></div>

                                        <div className="">
                                            <p className="uppercase text-[12px] text-[#e6e6ed84] ">{item.name}</p>
                                            <a href={item.label} target="_blank"
                                                rel="noopener noreferrer" className="">{item.description}</a>
                                        </div>
                                    </div>
                                </>
                            )
                        })}


                    </div>

                    <div className="flex gap-6 text-md text-white">
                        <a href='https://www.linkedin.com/in/siya-vaghasiya-747225396' className=" border-[#e6e6eda1] rounded-full p-2 hover:scale-105 transition-all duration-300 cursor-pointer shadow shadow-cyan-600"><FaLinkedin /></a>
                        <a href='https://github.com/siyavaghasiya318' className=" border-[#e6e6eda1] rounded-full p-2 hover:scale-105 transition-all duration-300 cursor-pointer shadow shadow-cyan-600"><FaGithub /></a>
                        <a href='' className=""></a>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Contact
