import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Skill from './Skill.jsx'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Service from './Service.jsx'
import Navbar from'./components/Navbar'
import State from './hooks/State'
import Form from './hooks/Form'

function App() {
 
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path='/State' element={<State />} />
      <Route path='/Form' element={<Form />} />
      <Route path='/Effect' element={<Effect />} />
      <Route path='/reducer' element={<Reducer />} />
    </Routes>
    <Skill skill={['React','Node','Express','MongoDB']}/>
    <h1>My Skills</h1>
    </>
  )
}

export default App
