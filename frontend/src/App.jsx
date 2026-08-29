import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from  './Homepage.jsx'

function App() {
  

  return (
    <div className='main-warp'>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
    </div>
  )
}

export default App
