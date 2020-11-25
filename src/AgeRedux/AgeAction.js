export const ADD_AGE = 'ADD_AGE'
export const REMOVE_AGE = 'REMOVE_AGE'
export const RESET_AGE = 'RESET_AGE'

export const addAge = ()=>({
    type: ADD_AGE
})

export const removeAge = () =>({
    type: REMOVE_AGE
})

export const resetAge = () =>({
    type: RESET_AGE
})