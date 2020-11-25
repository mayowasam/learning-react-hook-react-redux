import React, { Component } from 'react'
import './App.css';
// import CakeContainer from './components/CakeContainer'
import {Provider} from 'react-redux'
import {store} from './redux/iceCream/IceCreamStore'
// import AsyncUserComponent from './components/AsyncUserComponent';
// import HooksCakeContainer from './components/HooksCakeContainer';
// import  IceCreamContainer from './components/IceCreamContainer';
// import PayloadExample from './redux/PayloadExample';
// import CopyPayload from './redux/CopyPayload';
// import MapStateProps from './redux/mapping/MapStateProps';
// import MapDispatchProps from './redux/mapping/MapDispatchProps';



export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {/* <CakeContainer />
          <HooksCakeContainer />
          <IceCreamContainer />
          <br />
          <br />
          <PayloadExample />
          <br /><br /><br />
          <CopyPayload />

          <MapStateProps />
          <MapStateProps cake/>
          <MapDispatchProps/>
          <MapDispatchProps cake/> */}
          {/* <AsyncUserComponent/> */}

          

        </div>
      </Provider>
      
    )
  }
}



export default App

