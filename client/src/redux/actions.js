import axios from "axios"
import {DELETE, GET} from "./actionsType"



export  const getUsers=()=>async(dispatch)=>{
    try {
        const res=await axios.get("/get")
        dispatch({
            type:GET,
            payload:res.data
        })
    } catch (error) {
       alert ("get Error")
    }
    
};
 export const deleteUser=(_id)=>async(dispatch)=>{
     try {
         const res=await axios.delete(`/delete/${_id}`);
         dispatch( {
             type:DELETE    ,
             payload:res.data
         })
     } catch (error) {
         alert("Delete Error")
         
     }
 }

 export const   addNewUser=(newUser)=>async(dispatch)=>{
     try {
         const res=await axios.post("/post",newUser  )
     } catch (error) {
         alert("add error")
     }
 }





