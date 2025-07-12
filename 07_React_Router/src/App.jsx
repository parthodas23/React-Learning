import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Header from './pages/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Project />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
