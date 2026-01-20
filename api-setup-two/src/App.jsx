import React from 'react'

import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageCollection from './pages/PageCollection'
import About from './pages/About'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <div className=' min-h-screen w-full bg-white shadow-lg'>
       <Navbar/>
       <h1></h1>
       <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/pagecollection' element={<PageCollection/>}/>
        <Route  path='/about' element={<About/>}/>
       </Routes>



    </div>
  )
}

export default App
