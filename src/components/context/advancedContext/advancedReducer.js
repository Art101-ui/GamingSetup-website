import {
    ADD_ADVANCEDFORM,
    
} from '../../types'

// eslint-disable-next-line
export default(state,action) => {
    switch (action.type) {
        case ADD_ADVANCEDFORM:
            return{
                ...state,
                advanceds:[...state.advanceds,action.payload]
            }
            
            
    
        default:
            return state;
    }
}
