import React from 'react'
import {featchPhotos,featchVideos,featchGif} from "../api/mediaApi"
import {setQuery,setLoading,setError,setResults } from "../redux/feature/searchSlice"
import {useDispatch,useSelector} from "react-redux"


const ResultGrid = () => {
  const {query,activeTab,results,loading,error} =   useSelector((store)=>store.search)

  const getData =async ()=>{
    if(activeTab == "photos"){
        const data = await featchPhotos(query)
        console.log(data)
    }
  }


  return (
    <div className='px-10 py-6'>
      <button onClick={getData}>GetData</button>
    </div>
  )
}

export default ResultGrid
