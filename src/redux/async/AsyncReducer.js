import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './AsyncAction'

const initialState = {
    loading : true,
    users : [],
    error : ""
}

export const Asyncreducer = (state =initialState, action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST : 
         return {
             ...state,
             loading :true,
            
         }
        case FETCH_USERS_SUCCESS :
            return{
                ...state,
             loading :false,
             users : action.payLoad,
             error : ""
            }
        case FETCH_USERS_FAILURE :
            return {
                ...state,
                loading : false,
                users : [],
                error: action.payLoad
            }
        default:
            return state
    }
}