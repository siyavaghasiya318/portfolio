import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "motion/react"
import { HiOutlineMenu, HiX } from 'react-icons/hi';

export const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#project", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <>
      <div className="textclr2 flex justify-between fixed top-0 left-0 w-full z-100 
             bg-[#0f0815]/95 backdrop-blur-lg paddingbox py-5 shadow shadow-[#21122f]" >
        <motion.a initial={{ x: -40 }} whileInView={{ x: 0 }} transition={{ duration: 0.4 }} href="#home" className="font-bold text-xl textclr">Portfolio.</motion.a>

        <motion.ul className="gap-10 uppercase text-sm font-bold lg:flex hidden lg:block ">

          {navLinks.map((link) => {
            return (
              <li><a href={link.href}>{link.label}</a></li>)
          })}

        </motion.ul>

        <button className="lg:hidden text-2xl textclr" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>

        <div
          className={`lg:hidden fixed top-[68px] right-0 w-[100%] top-0 z-90 bg-[#0f0815]/95 backdrop-blur-lg border-b border-white/10 shadow shadow-[#21122f] overflow-hidden transition-all duration-300 ease-in-out
        ${menuOpen ? 'max-h-96 opacity-100 py-5' : 'max-h-0 opacity-0 py-0'}`}
        >
          <ul className="flex flex-col gap-6  uppercase text-sm font-bold paddingbox textclr2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}



