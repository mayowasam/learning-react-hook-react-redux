import React, {Fragment, useState } from 'react'
import { buyCakes } from '../redux/cake/cakeAction'
import {connect} from 'react-redux'


function PayloadExample(props) {
    const [num, setNum] = useState(1)
    return (
      
        <Fragment>
            <input type="text" value={num} onChange={(e)=> setNum(e.target.value)} />
            <h1 >the number of cakes we have is {props.numOfCakes} </h1>
            <button  onClick={()=>props.buyCake(num)} >buy {num} of cakes</button>
        </Fragment>
    )
}


  

const mapStateToProps = (state) =>(
    {
      numOfCakes: state.cake.numOfCakes
    }
)

  
  const mapDispatchToProps = (dispatch) =>({

      buyCake(num){dispatch(buyCakes(num))}
    
  
  })
export default connect(mapStateToProps,mapDispatchToProps)(PayloadExample) 




