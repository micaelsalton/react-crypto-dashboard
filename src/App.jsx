import React from "react"
import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Crypto from "./components/Crypto"

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Crypto />} />
      </Routes>
    </div>
  )
}

export default App
