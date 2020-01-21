/*
 * @File:
 * @Description: 定义指令
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-09 17:30:20
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 09:00:45
 * @FilePath: \react-web\src\reducer\action.js
 */

import * as http from '../axios/index';

// const requestData=data=>({
//     type:'REQUEST_DATA',
//     data
// })

export const receiveData = (data, category) => ({
    type: 'RECEIVE_DATA',
    data,
    category,
});

export const fetchData = ({ funcName, params, stateName }) => dispatch => {
    return http[funcName](params).then(res => dispatch(receiveData(res, stateName)));
};
