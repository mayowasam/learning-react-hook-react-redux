import {createStore} from 'redux'
import {ageReducer} from './AgeReducer'

export const store = createStore(ageReducer) 