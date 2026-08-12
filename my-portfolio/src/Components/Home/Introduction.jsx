import React from 'react'
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{
      once: true,
      amount: 0.2
    }} className=" pt-35 items-center lg:flex gap-30  shadow ">


      <div className="flex lg:w-[70%] flex-col gap-3 order-2 lg:order-1 lg:text-left text-center">
        <p className="md:text-[50px] text-[40px] font-bold">Hii, I'm SIYA </p>
        <p className="md:text-2xl text-xl font-bold bg-gradient-to-br to-[#2729c9] -500 from-[#22d3ee] -600 bg-clip-text text-transparent">MERN Stack Developer</p>

        <p className="text-md text-gray-300 w-100 lg:m-0 lg:w-full m-auto">
          Creating seamless digital experiences with
          clean code, thoughtful design, and attention to detail.
        </p>

        <a href='#project' className='w-fit lg:my-5 lg:m-0 m-auto shadow-xl hover:shadow-indigo-600/20 px-10 my-5 py-2 bg- rounded-md outline-0 hover:scale-105 transition-all duration-300  uppercase text-sm font-bold tracking-wider bg-gradient-to-br to-[#0b7080]  from-[#2729c9] cursor-pointer'>
          View Projects
        </a>

      </div>

      <div className="mt-10 lg:mt-0 relative flex flex-col justify-between items-center lg:order-2 order-1">
        <div className="absolute inset-10 bg-blue-500/20 blur-[90px]"></div>
        <div className="h-85 w-100 md:w-full md:h-full lg:h-85 lg:w-110 relative border-1 rounded-3xl border-[#22d3ee]/20 ">
          <img src="https://images.openai.com/static-rsc-4/1wghQHABRJMsYe-i_klRXAkPbqHySy2IJnwKc7L_hIbVENv6mui6zqokolHVIXj5rKGX010rwms_OoVy8Injpd-tpik1j9rVNrHVahKekV6wKwtyJZb_xk3kTylw-mvw--ClaDAC04kPvczNiEC3MSSpgp1mhaeWrdTitQ1PHBzSNGEUkIZNTYAcEX1TOmm2?purpose=fullsize" className='w-full rounded-3xl h-full object-cover' alt="" />
          <p className="absolute bg-black/25 w-full h-full top-0 "></p>
        </div>
      </div>



    </motion.div>
  )
}

export default Introduction
