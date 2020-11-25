import {BUY_ICECREAM} from './IcecreamAction'

const initialState={
    numOfIceCream: 20
}
export const IceCreamReducer=(state = initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
        return{
            ...state,
            numOfIceCream: state.numOfIceCream -1
        }
        default:
        return state

    }
}
