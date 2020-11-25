import React,{useEffect} from 'react'
import {fetchUsers} from '../redux/async/AsyncAction'
import {connect} from 'react-redux'

function AsyncUserComponent({userData,userDispatchBtn}) {
    useEffect(() => {
      userDispatchBtn()
        
    }, [])
    return (
        <div>
            <ul>
                {userData.map((user)=>{
                    return(
                        <li>{user}</li>
                    )
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) =>({
    userData : state.users
})

const mapDispatchToProps = (dispatch) =>({
    userDispatchBtn : () => dispatch(fetchUsers())
})

export default connect(mapStateToProps,mapDispatchToProps)(AsyncUserComponent) 
