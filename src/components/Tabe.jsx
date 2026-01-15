import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlicel'
import { useSelector } from 'react-redux'

const Tabe = () => {
const tabs = ["photos","videos","gif"]
const dispatch = useDispatch()
const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex gap-5 py-7 px-10'>
      {tabs.map(function(elem,idx){
        return (
        <button
        onClick={()=>{
            dispatch(setActiveTab(elem))
        }} 
        className={`${(activeTab == elem?"bg-blue-500":"bg-gray-900")} transition font-semibold uppercase rounded-sm px-5 py-2 text-white cursor-pointer active:scale-95`} key={idx}>{elem}</button>
    )
      })}
    </div>
  )
}

export default Tabe
