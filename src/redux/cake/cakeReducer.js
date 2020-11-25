import {BUY_CAKES} from './cakeAction'
const initialState ={
    numOfCakes: 10
}

 
export const cakeReducer= (state = initialState,action) =>{

    switch(action.type){
        case BUY_CAKES:
            return{
                ...state, 
                numOfCakes: state.numOfCakes - action.payLoad
        } 
        default:
    return state
    }
    
}