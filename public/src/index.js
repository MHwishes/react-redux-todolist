import React, {Component} from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux';
import App from './components/app'
import reducer from './reducers/reducer'

const store = createStore(reducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('App'));
