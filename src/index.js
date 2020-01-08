/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-15 17:27:51
 * @LastEditors: yangw5
 * @LastEditTime: 2020-01-08 15:08:06
 * @FilePath: \react-web\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { Provider } from 'react-redux';
//根组件使用provider嵌套 组件层级中的 connect() 方法都能够获得 Redux store
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import Page from './Page';
import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
// 加载mock
import './mock.js';
// redux 注入操作
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
ReactDOM.render(
    <Provider store={store}>
        <Page store={store} />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
