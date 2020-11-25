import axios from 'axios'

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'


 const fetchRequest = () => ({
    type: FETCH_USERS_REQUEST
})

 const fetchSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payLoad: users
})

 const fetchFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payLoad: error
})

export const  fetchUsers = () =>{
    return (dispatch) =>{
        dispatch(fetchRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const users = res.data
            dispatch(fetchSuccess(users))
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(fetchFailure(errorMsg))
        })
    }
}
