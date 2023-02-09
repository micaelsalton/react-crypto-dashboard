import React from "react"
import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Hero from "./pages/Hero"


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  )
}

export default App
