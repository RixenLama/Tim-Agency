import './main.css'
import { Route, Routes } from 'react-router-dom';

import NavBar from './Components/navBar.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar/>}/>
    </Routes>
  )
}

export default App
