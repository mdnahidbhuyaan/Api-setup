import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlicel'

const SearchBar = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()


    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(setQuery())
        setText("")
    }
  return (
    <div className='shadow-lg '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} 
      className='flex gap-5 py-6 px-10 '>
        <input
        value={text}
        onChange={(e)=>{
            setText(e.target.value)
        }}
        required
         className='w-full px-4 py-2 text-xl rounded-full outline-none bg-gray-950 text-white shadow-2xl ' type="text" placeholder='Search anything...' />
        <button className='cursor-pointer active:scale-95  px-4 py-2 text-xl rounded-sm outline-none bg-cyan-600 text-white shadow-2xl'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
