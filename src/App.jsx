import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

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

  return (
    <div className="App">
      <input value={input} onChange={(e)=> setInput(e.target.value)} placeholder="digite aqui" />
      <button onClick={saveItem}>adicionar</button>
      {itemMap}
    </div>
  )
}

export default App
