import React from 'react'
import AgeContainer from './AgeRedux/AgeContainer'
import {Provider} from 'react-redux'
import {store} from './AgeRedux/AgeStore'

function AnotherApp() {
    return (
        <Provider store ={store}>
        <div>
            <AgeContainer/>
        </div>
        </Provider>
    )
}

export default AnotherApp
