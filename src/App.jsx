import Profile from './components/profile.jsx'
import Welcome from './components/welcome.jsx'
import Register from './components/register.jsx'
import Login from './components/Login.jsx'
import Course from './components/course.jsx'
import './App.css'
import { useState } from 'react'
function App() {

  return (
    <>
      <Login/>
      <Register/>
      <Welcome/>
      <Profile/>
      <Course/>
    </>
  )
}

export default App
