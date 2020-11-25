import React from 'react'
import {connect} from 'react-redux'
import { buyCakes } from '../cake/cakeAction'
import { buyIcecream } from '../iceCream/IcecreamAction'

function MapDispatchProps(props) {
    return (
        <div>
           <button onClick={props.dispatchingFunction}> i want to dispatch</button>
        </div>
    )

}

const mapStateToProps =(state, ownProps) =>{
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
    return{
        item :itemState
    }
}
const mapDispatchToProps =(dispatch,ownProps)=>{
    const dispatchButton = ownProps.cake ? ()=> dispatch(buyCakes()) : ()=> dispatch(buyIcecream())
    return{
        dispatchingFunction : dispatchButton
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MapDispatchProps) 
