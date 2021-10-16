import {
    ADD_BASICFORM,
   
} from '../../types'

// eslint-disable-next-line
export default(state,action) => {
    switch (action.type) {
        case ADD_BASICFORM:
            return{
                ...state,
                basics:[...state.basics,action.payload]
            }
            
            
    
        default:
            return state;
    }
}
