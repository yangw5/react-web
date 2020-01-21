import { combineReducers } from 'redux';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

//定义handleData函数根据action的类型改变state
const handleData = (state = { isFetching: true, data: {} }, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return { ...state, isFetching: true };
        case RECEIVE_DATA:
            return {
                ...state,
                isFetching: false,
                data: action.data,
                timeStamp: Date.now(),
            };
        default:
            return { ...state };
    }
};
//获取store
const httpData = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
        case REQUEST_DATA:
            return {
                ...state,
                [action.category]: handleData(state[action.category], action),
            };
        default:
            return { ...state };
    }
};

export default combineReducers({
    //随着应用变得越来越复杂，可以考虑将 reducer 函数 拆分成多个单独的函数，拆分后的每个函数负责独立管理 state 的一部分。
    //合并reducer
    httpData,
});
