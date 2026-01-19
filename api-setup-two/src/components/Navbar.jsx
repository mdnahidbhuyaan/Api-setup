import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <div className='flex justify-between items-center py-1 bg-(--c2) shadow-2xl text-white'>
            <h2 className='py-5 px-9   font-semibold text-2xl'>Nahid bhuyaa / Media Search</h2>
            <div className='flex gap-3 items-center mr-9 '>
             <Link className='text-xl active:scale-95 rounded bg-(--c3) text-white px-4 py-1' to="/">Search</Link>
             <Link className='text-xl active:scale-95 rounded bg-(--c3) text-white px-4 py-1' to="/pagecollection">Collection</Link>
             <Link className='text-xl active:scale-95 rounded bg-(--c3) text-white px-4 py-1' to="/about">About</Link>
            </div>
        </div>
  )
}

export default Navbar
