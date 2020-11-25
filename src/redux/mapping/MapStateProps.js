import React from 'react'
import {connect} from 'react-redux'

function MapStateProps(props) {
    return (
        <div>
            <h2> items- {props.item} </h2>
        </div>
    )

}

const mapStateToProps =(state, ownProps) =>{
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
    return{
        item :itemState
    }
}

export default connect(mapStateToProps)(MapStateProps) 
