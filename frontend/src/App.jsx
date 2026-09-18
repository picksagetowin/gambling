import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage.jsx'
import InGame from './InGame.jsx'

function App() {
  return (
    <div className='main-warp'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/ingame' element={<InGame />} />
      </Routes>
    </div>
  )
}

export default App