import React from 'react'
import { featchPhoto } from './api/mediaApi'

const App = () => {


  return (
    <div className=' p-10'>
      <button className='bg-cyan-400 rounded-sm px-5 py-2 text-white' onClick={()=>{
        featchPhoto("cat")
      }}>Get Photo</button>
    </div>
  )
}

export default App
