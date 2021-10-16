import {
    ADD_MEDIUMFORM,
   
} from '../../types'

// eslint-disable-next-line
export default(state,action) => {
    switch (action.type) {
        case ADD_MEDIUMFORM:
            return{
                ...state,
                mediums:[...state.mediums,action.payload]
            }
            
            
    
        default:
            return state;
    }
}
 