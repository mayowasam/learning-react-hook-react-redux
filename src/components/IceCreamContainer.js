import React, { Component } from 'react'
import {buyIcecream} from '../redux/iceCream/IcecreamAction'
import {connect} from 'react-redux'




export class IceCreamContainer extends Component {
    render() {
        return [
            <h1 key={1}>the number of icecreams we have is {this.props.numOfIceCream} </h1>,
            <button key={2} onClick={this.props.buyIcecream} >how much</button>
        ]
    }
}

const mapStateToProps = (state) =>(
    {
      numOfIceCream:state.iceCream.numOfIceCream
    }
)

  
  const mapDispatchToProps = (dispatch) =>({

      buyIcecream(){dispatch(buyIcecream())}
    
  
  })
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer) 
