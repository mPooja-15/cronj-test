import { combineReducers } from 'redux';
import {
  todoDataReducer,
  editTodoDataReducer,
  createtodoDataReducer,
  deleteSingleDataReducer,
  getTodoeDataReducer
} from './todos';
import { authDataReducer, authRegisterDataReducer } from './auth';

export const rootReducer = combineReducers({
  todoDataList: todoDataReducer,
  authDataList: authDataReducer,
  registerDataList: authRegisterDataReducer,
  editTodoDataReducer: editTodoDataReducer,
  createtodoDataReducer: createtodoDataReducer,
  deleteSingleDataReducer: deleteSingleDataReducer,
  getTodoeDataReducer: getTodoeDataReducer
});
