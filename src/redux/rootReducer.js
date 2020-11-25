import {combineReducers} from 'redux'
import { cakeReducer } from './cake/cakeReducer'
import {IceCreamReducer} from './iceCream/iceCreamReducer'
import {Asyncreducer} from './async/AsyncReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer,
    async : Asyncreducer
})
export default rootReducer