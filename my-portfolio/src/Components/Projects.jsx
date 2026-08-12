import React from 'react'
import { GoDotFill } from "react-icons/go";
import { RiExternalLinkLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { project } from '../assets/List';

const Projects = () => {
  return (

    <>
      <div className=" overflow-hidden">

        <div className="text-[35px] mb-5 font-bold text-center">Featured Projects</div>


        <div className="flex flex-col gap-10 " >
          {project.map((item, index) => {
            return (
              <>

                <div className={`p-5 rounded-xl lg:flex gap-5 lg:mt-10 ${index % 2 !== 0 ? "flex-row-reverse" : ""
                  }`}>
                  <motion.div
                    initial={{
                      x: index % 2 === 0 ? -50 : 50,
                      opacity: 0
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05,
                      ease: "easeOut"
                    }}
                    className={`md:h-75 h-55 border-red-400  group sm:h-65 md:h-w-[95%] m-auto lg:w-1/2 rounded-xl overflow-hidden relative  hover:translate-y-[-5px] transition-all duration-300 hover:shadow-2xl ${item.bg} `}>
                    <img src={item.img} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300' alt={item.name} />
                    <p className="w-full h-full bg-black/30   absolute top-0 left-0"></p>
                  </motion.div>


                  <motion.div
                    initial={{
                      x: index % 2 === 0 ? 50 : -50,
                      opacity: 0
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05,
                      ease: "easeOut"
                    }}
                    className={`lg:w-1/2 p-5 flex flex-col gap-1  `}>


                    <p className="font-bold uppercase text-[12px] textclr ">{item.name} </p>
                    <span className="textclr"> {item.subtitle}</span>
                    <p className="sm:text-sm text-xs my-1.5 text-[#e6e6eda1] capitalize">{item.description}</p>

                    <div className="flex flex-wrap items-center  gap-x-4 gap-y-2 mt-3">
                      {item.tech.map((tech, index) => (
                        <div className="flex items-center gap-1  font-bold px-3  py-0.5 md:py-1 rounded-full border bg-[#22d3ee]/15  border-[#094e59b0] ">
                          <p className="md:text-xs text-[10px] text-gray-300">{tech}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-10 items-center text-[#d3d3e8dc] mt-5">


                      <a href={item.github} className='md:text-sm text-xs font-bold px-7 py-1 border rounded-md'>{item.detail[0]}</a>


                      <button className='text-[12px] md:text-[14px] font-semibold py-1 border-[#22d3ee]  border-b-2 flex gap-1'>
                        <a href={item.projectlink} target="_blank" rel="noopener noreferrer">{item.detail[1]}</a>
                        <i className='text-md mt-1'><RiExternalLinkLine /></i>
                      </button>

                      {item.detail.length == 3 ?
                        (<button className='md:text-sm text-[10px] text-[#e6e6eda1] flex gap-1 items-center'>
                          {item.detail[2]}
                          <i><MdKeyboardDoubleArrowRight className=' text-lg' /></i>
                        </button>) : ("")
                      }
                    </div>


                  </motion.div>
                </div>
              </>
            )
          })}
        </div>

      </div>
    </>
  )
}

export default Projects
