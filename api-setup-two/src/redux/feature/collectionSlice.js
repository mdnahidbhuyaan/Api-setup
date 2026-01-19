import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items:JSON.parse(localStorage.getItem("collection")) || []
}

const collectionSlice = createSlice({
    name:"collection",
    initialState,
    reducers:{
        addCollection:(state,action)=>{
           
        },
        removeCollection:(state,action)=>{

        },
        clearCollection:(state,action)=>{
            
        }
    }
   
})