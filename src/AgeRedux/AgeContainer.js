import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addAge, removeAge, resetAge } from './AgeAction'

function AgeContainer() {
    const age = useSelector(state => state.age)
    const history = useSelector(state => state.history)
    const dispatch = useDispatch()
 console.log (history)
    return (
        <div>
            {age}
            <button onClick={()=>dispatch(addAge())}>add</button>
            <button onClick={()=>dispatch(removeAge())}>subtract</button>
            <button onClick={()=>dispatch(resetAge())}>reset</button>
            <ul>
            {history.map(his=>{
                return(
                <li key={Math.random()} onClick={()=>{}}>{his.age}</li>
                )
            })}
            </ul>
        </div>
    )
}



export default AgeContainer
