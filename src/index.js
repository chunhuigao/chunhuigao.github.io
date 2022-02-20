import './style.css'
import './style.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home.tsx'
function App() {
  return (
    <div>
      React <Home />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
