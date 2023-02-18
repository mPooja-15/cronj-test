import {
  TODO_GET_DATA_SUCCESS,
  TODO_GET_DATA_REQUEST,
  TODO_GET_DATA_FAIL,
  CREATE_TODO_DATA_REQUEST,
  CREATE_TODO_DATA_SUCCESS,
  CREATE_TODO_DATA_FAIL,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAIL,
  UPDATE_TODO_DATA_SUCCESS,
  UPDATE_TODO_DATA_FAIL,
  GET_SINGLE_TODO_DATA_SUCCESS,
  GET_SINGLE_TODO_DATA_FAIL
} from '../reduxTypes/index';

const initialState = {
  error: ''
};

function todoDataReducer(state = initialState, action: any) {
  switch (action.type) {
    case TODO_GET_DATA_REQUEST:
      return '';
    case TODO_GET_DATA_SUCCESS:
      return { ...state, payload: action.payload };
    case TODO_GET_DATA_FAIL:
      return { ...state, payload: [], error: '' };
    default:
      return state;
  }
}
function createtodoDataReducer(state = initialState, action: any) {
  switch (action.type) {
    case CREATE_TODO_DATA_REQUEST:
      return '';
    case CREATE_TODO_DATA_SUCCESS:
      return { ...state, payload: action.payload };
    case CREATE_TODO_DATA_FAIL:
      return { ...state, payload: [], error: '' };
    default:
      return state;
  }
}
function editTodoDataReducer(state = initialState, action: any) {
  switch (action.type) {
    case UPDATE_TODO_DATA_SUCCESS:
      return { ...state, payload: action.payload };
    case UPDATE_TODO_DATA_FAIL:
      return { ...state, payload: [], error: '' };
    default:
      return state;
  }
}
function deleteSingleDataReducer(state = initialState, action: any) {
  switch (action.type) {
    case DELETE_DATA_SUCCESS:
      return { ...state, payload: action.payload };
    case DELETE_DATA_FAIL:
      return { ...state, payload: [], error: '' };
    default:
      return state;
  }
}
function getTodoeDataReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_SINGLE_TODO_DATA_SUCCESS:
      return { ...state, payload: action.payload };
    case GET_SINGLE_TODO_DATA_FAIL:
      return { ...state, payload: [], error: '' };
    default:
      return state;
  }
}
export { todoDataReducer, editTodoDataReducer, createtodoDataReducer, deleteSingleDataReducer, getTodoeDataReducer };
