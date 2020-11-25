import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCakes } from '../redux/cake/cakeAction'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{numOfCakes}</h1>
            <button onClick={()=>dispatch(buyCakes())}> how many cakes</button>
        </div>
    )
}

export default HooksCakeContainer
