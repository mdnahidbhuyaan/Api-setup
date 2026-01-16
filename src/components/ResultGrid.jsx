import React from 'react'
import {featchPhotos,featchVideos,featchGif} from "../api/mediaApi"
import {setQuery,setLoading,setError,setResults } from "../redux/features/searchSlicel"
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from 'react'


const ResultGrid = () => {
  const {query,activeTab,results,loading,error} =   useSelector((store)=>store.search)



  useEffect(()=>{
      const getData =async ()=>{
    let data
    if(activeTab == "photos"){
        data = await featchPhotos(query)
        
    }
       if(activeTab == "videos"){
        data = await featchVideos(query)
        
    }
       if(activeTab == "gif"){
        data = await featchGif(query)
        
    }
    console.log(data)
  }
getData()
  },[query,activeTab])


  return (
    <div className=''>
      
    </div>
  )
}

export default ResultGrid
