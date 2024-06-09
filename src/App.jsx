import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPage/LoginPage'
import HomePages from './Pages/HomePages/HomePages'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<HomePages/>}/>
      </Routes>
    </div>
  )
}

export default App