import React, { Component } from 'react'
import { buyCakes } from '../redux/cake/cakeAction'
import {connect} from 'react-redux'




export class CakeContainer extends Component {
    render() {
        return [
            <h1 key={1}>the number of cakes we have is {this.props.numOfCakes} </h1>,
            <button key={2} onClick={this.props.buyCake} >how much</button>
        ]
    }
}

const mapStateToProps = (state) =>(
    {
      numOfCakes: state.cake.numOfCakes
    }
)

  
  const mapDispatchToProps = (dispatch) =>({

      buyCake(){dispatch(buyCakes())}
    
  
  })
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer) 
