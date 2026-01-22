import React from 'react'
import { useSelector } from 'react-redux'
import CollectionCart from '../components/CollectionCart'

const PageCollection = () => {
  const collection = useSelector(state=>state.collection.items)
  return (
    <div className='px-10  py-6 flex w-full flex-wrap gap-6 items-center'>
      {collection.map((item,idx)=>{
      return <div key={idx}>
         <CollectionCart item={item}/>
      </div>
      })}
    </div>
  )
}

export default PageCollection
