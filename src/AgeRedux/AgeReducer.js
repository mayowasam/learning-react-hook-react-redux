export * from './AgeAction'

const initialState = {
    age: 20, 
    history:[]
}

export const ageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1,
                history : [...state.history,{age:state.age}]
            }
        case 'REMOVE_AGE':
            return {
                ...state,
                age: state.age - 1,
                history : [...state.history,{age:state.age}]
            }
        case 'RESET_AGE':
            return {
                ...state,
                age: initialState.age,
                history : initialState.history
            }
        default:
            return state
    }
}