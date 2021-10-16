import React,{useReducer} from "react";
import BasicContext from "./basicContext";
import BasicReducer from "./basicReducer";
import {
    ADD_BASICFORM,
   
    BASIC_ERROR
    
} from '../../types'


const BasicState = props=>{
    const initialState = {
       basics:[],
       errors:null 
    }




    const [state,dispatch] = useReducer(BasicReducer,initialState)


    // Add Contact
     const addBasicForm = async basicform =>{
        try {
           const res = await fetch('/basics',{
               method:'POST',
               body:JSON.stringify(basicform),
               headers:{
                   'Content-Type':'application/json'
               }
           })
           const data = await res.json()

           dispatch({
               type:ADD_BASICFORM,
               payload:data
           })
        } catch (err) {
            dispatch({
                type:BASIC_ERROR,
                payload:err.response.data
            })
        }
    }

    return(
        <BasicContext.Provider
        value={{
            basics:state.basics,
            errors:state.errors,
            addBasicForm
        }}>
            {props.children}
        </BasicContext.Provider>
    )
}

export default BasicState


