import React, {Component} from 'react'
import {render} from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux';
import App from './components/app'
import reducer from './reducers/reducer'

import middleware from './middlewares/middleware'

const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
const store=createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('App'));
