import { combineReducers } from "redux";

export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";

const handleData = (state = { isFetching: true, data: {} }, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, isFetching: true };
    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        timeStamp: Date.now()
      };
    default:
      return { ...state };
  }
};
const httpData = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
    case REQUEST_DATA:
      return {
        ...state,
        [action.category]: handleData(state[action.category], action)
      };
    default:
      return { ...state };
  }
};

export default combineReducers({
  httpData
});
