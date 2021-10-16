import React,{useReducer} from "react";
import MediumContext from "./mediumContext";
import MediumReducer from "./mediumReducer";
import {
    ADD_MEDIUMFORM,
   
    BASIC_ERROR,
    
} from '../../types'


const MediumState = props=>{
    const initialState = {
       mediums:[],
       errors:null 
    }




    const [state,dispatch] = useReducer(MediumReducer,initialState)


    // Add Contact
     const addMediumForm = async mediumform =>{
        try {
           const res = await fetch('/mediums',{
               method:'POST',
               body:JSON.stringify(mediumform),
               headers:{
                   'Content-Type':'application/json'
               }
           })
           const data = await res.json()

           dispatch({
               type:ADD_MEDIUMFORM,
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
        <MediumContext.Provider
        value={{
            mediumforms:state.mediumforms,
            errors:state.errors,
            addMediumForm
        }}>
            {props.children}
        </MediumContext.Provider>
    )
}

export default MediumState


