import React from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const name = "PRAVAS"
  const hendleInputTest = async () => {

    const posttest = await axios.post("/api/testapi", { name })

    console.log(posttest)
  }
  return (
    <button onClick={hendleInputTest}>
      Click Me
    </button>
  )
}

export default App