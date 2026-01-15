import React from 'react'
import {useDispatch,useSelector } from 'react-redux'
import {featchPhotos,featchVideos,featchGif} from "../api/mediaApi"
import {setQuery,setLoading,setError,setResults } from '../redux/features/searchSlicel'

const ResultGrid = () => {

const {query,activeTab,results,loading,error} = useSelector((store)=>store.search)
const getData =async ()=>{
    if(activeTab == "photos"){
        const data = await featchPhotos(query)
       console.log(data)
    }
}

  return (
    <div>
      <button onClick={getData}>getData</button>
    </div>
  )
}

export default ResultGrid
