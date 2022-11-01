import { useState } from 'react'
import { HashRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import GetRouters from './router'

function App() {
  const [count, setCount] = useState(0)
  return (
    <HashRouter >
      <GetRouters />
    </HashRouter  >
  )
}

export default App
