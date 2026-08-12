import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowUp } from "react-icons/hi";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid md:grid-cols-3 items-center">

          {/* Left */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} >
            <p className="text-sm text-[#e6e6eda1]">
              © {new Date().getFullYear()} Developer Portfolio by{" "}
              <span className="textclr font-semibold">
                Siya Vaghasiya
              </span>
            </p>
          </motion.div>

          {/* Center */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }} className="flex md:justify-center mt-5 items-center gap-6">
            <a
              href="https://github.com/siyavaghasiya318"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#e6e6eda1] hover:text-[#22d3ee] transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#e6e6eda1] hover:text-[#22d3ee] transition duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=svaghasiya318@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#e6e6eda1] hover:text-[#22d3ee] transition duration-300"
            >
              <MdEmail />
            </a>
          </motion.div>

          {/* Right */}
          <motion.div className="flex justify-end">
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="w-11 h-11 rounded-full fixed z-100 bg-black bottom-0 my-5 border border-cyan-400/30 flex items-center justify-center text-[#22d3ee] hover:bg-[#22d3ee] hover:text-white transition duration-300"
            >
              <HiArrowUp />
            </button>
          </motion.div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;