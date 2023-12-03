import React from 'react'
import Header from './layout/Header'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import ProjectDetails from './pages/ProjectDetails'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/projectdetails' element={<ProjectDetails/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
