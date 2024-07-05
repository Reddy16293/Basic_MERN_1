import React from 'react'
import Navbar from './components/Navbar'
import { Routes ,Route } from 'react-router'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <div className='bg-blue-950 w-full  min-h-screen'>
      <Navbar/>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>


    </div>
  )
}

export default App