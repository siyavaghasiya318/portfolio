import React from 'react'
import Introduction from '../Components/Home/Introduction'
import AboutDetail from '../Components/About/AboutDetail'
import Education from '../Components/Education'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Footer from '../Components/Home/Footer'

const HomePage = () => {
  return (
    <>
      <div className='paddingbox flex flex-col gap-40 '>
        <section id="home"><Introduction/></section>
        <section id='about'><AboutDetail/></section>
        <section id='education'><Education/></section>
        <section id='skills'><Skills/></section>
        <section id='project'><Projects/></section>
        <section id='contact'><Contact/></section>
        
      </div>
      <Footer/>
    </>
  )
}

export default HomePage
