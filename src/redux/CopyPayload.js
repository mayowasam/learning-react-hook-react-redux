import React, {Fragment, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyCakes } from './cake/cakeAction'


function CopyPayLoad() {
    const [num, setNum] = useState(1)
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
       
        <Fragment>
            <input type="text" value={num} onChange={(e)=> setNum(e.target.value)} />
            <h1 >the number of cakes we have is {numOfCakes} </h1>
            <button  onClick={()=>dispatch(buyCakes(num))} >buy {num} of cakes</button>
        </Fragment>
    
    )
}


  



  
  
export default CopyPayLoad




