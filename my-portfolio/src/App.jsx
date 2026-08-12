import React, { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import { NavBar } from './NavBar'
import AboutDetail from './Components/About/AboutDetail'
import Introduction from './Components/Home/Introduction'
import ProjectDetail from './Components/ProjectDetail'
import { userContax } from './Context/UserContext'

const App = () => {

  return (
    <>
    <NavBar/>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/project' element={<ProjectDetail/>}/>
      </Routes>
      <Toaster/> 
    </>
  )
}

export default App
