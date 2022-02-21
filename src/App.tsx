import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
type Props = {}
import Home from './pages/home/index'
import About from './pages/about/index'
const App = ({}: Props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
