import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(()=>{
    fetch("http://localhost:4000/api/message")
    .then((res)=>res.json())
    .then((data)=>setMessage(data.message))
    .catch((err)=>{console.error("rror feching data : ", err)})
  },[])

  return (
    <>
      <h1>Welcome</h1>
      <p className="read-the-docs">
        Data: {message}
      </p>
    </>
  )
}

export default App
