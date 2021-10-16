import React,{useReducer} from "react";
import AdvancedContext from './advancedContext'
import AdvancedReducer from "./advancedReducer";
import {
    ADD_ADVANCEDFORM,
   
    BASIC_ERROR
    
} from '../../types'


const AdvancedState = props=>{
    const initialState = {
       advanceds:[],
       errors:null 
    }




    const [state,dispatch] = useReducer(AdvancedReducer,initialState)


    // Add Contact
     const addAdvancedForm = async advancedform =>{
        try {
           const res = await fetch('/advanceds',{
               method:'POST',
               body:JSON.stringify(advancedform),
               headers:{
                   'Content-Type':'application/json'
               }
           })
           const data = await res.json()

           dispatch({
               type:ADD_ADVANCEDFORM,
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
        <AdvancedContext.Provider
        value={{
            advanceds:state.advanceds,
            errors:state.errors,
            addAdvancedForm
        }}>
            {props.children}
        </AdvancedContext.Provider>
    )
}

export default AdvancedState


