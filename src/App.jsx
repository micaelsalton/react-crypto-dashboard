import React from "react"
import { useState } from 'react'
import {Routes, Route} from "react-router-dom"

function App() {
  const [item, setItem] = useState([])
  const [input, setInput] = useState("")

  function saveItem(){
    setItem(prevItem => [input, ...prevItem])
    setInput("")
  }

  const itemMap = item.map(item => (
    <div>
    <p>{item}</p>
    </div>
  ))

  function Teste(){
    return (
      <div>
      <input value={input} onChange={(e)=> setInput(e.target.value)} placeholder="digite aqui" />
      <button onClick={saveItem}>adicionar</button>
      {itemMap}
      </div>
    )
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Teste />} />
      </Routes>
    </div>
  )
}

export default App
