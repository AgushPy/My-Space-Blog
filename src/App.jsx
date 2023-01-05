import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import "nes.css/css/nes.min.css"
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { Contact } from './pages/Contact'
import { Posts } from './pages/Posts'

function App() {
  return (  
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-me' element={<AboutMe/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-post' element={<Posts/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
