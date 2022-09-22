import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './style/style.scss'
import Home from './pages/home/Home'
import About from './pages/about/About'
import SignIn from './pages/sign-in/SignIn'
import Registration from './pages/registration/Registration'
import OurCourse from './pages/our-course/OurCourse'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/our-courses" element={<OurCourse />} />
    </Routes>
  )
}

export default App
