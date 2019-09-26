import * as http from '../axios/index';

// const requestData=data=>({
//     type:'REQUEST_DATA',
//     data
// })

export const receiveData = (data, category) => ({
    type: 'RECEIVE_DATA',
    data,
    category
});

export const fetchData=({funcName, params, stateName}) => dispatch=>{
    return http[funcName](params).then(res => dispatch(receiveData(res, stateName)));
}