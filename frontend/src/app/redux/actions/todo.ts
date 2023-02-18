import { Dispatch } from 'redux';
import axios from 'axios';
import {
  TODO_GET_DATA_FAIL,
  TODO_GET_DATA_SUCCESS,
  CREATE_TODO_DATA_SUCCESS,
  CREATE_TODO_DATA_FAIL,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAIL,
  UPDATE_TODO_DATA_SUCCESS,
  UPDATE_TODO_DATA_FAIL,
  GET_SINGLE_TODO_DATA_SUCCESS,
  GET_SINGLE_TODO_DATA_FAIL
} from 'app/redux/reduxTypes';

const base_url = `http://localhost:8000`;

export function fetchTodoApiData() {
  return (dispatch: Dispatch) => {
    const authJson = localStorage.getItem('@auth');
    const authdata = authJson !== null ? JSON.parse(authJson) : '{}';
    axios
      .get(`${base_url}/todos`, {
        headers: {
          Authorization: `Bearer ${authdata?.token}`
        }
      })
      .then((json) => {
        dispatch({
          type: TODO_GET_DATA_SUCCESS,
          payload: {
            todoData: json?.data
          }
        });
      })
      .catch((err) => {
        dispatch({
          type: TODO_GET_DATA_FAIL,
          payload: {
            dealError: err
          }
        });
      });
  };
}
export function createTodo(title: any, status: any) {
  return (dispatch: Dispatch) => {
    const authJson = localStorage.getItem('@auth');
    const authdata = authJson !== null ? JSON.parse(authJson) : '{}';
    const body: any = {
      title: title,
      status: status,
      dueDate: Date.now()
    };
    axios
      .post(`${base_url}/todos`, body, {
        headers: {
          Authorization: `Bearer ${authdata?.token}`
        }
      })
      .then((json) => {
        dispatch({
          type: CREATE_TODO_DATA_SUCCESS,
          payload: {
            todoData: json?.data
          }
        });
      })
      .catch((err) => {
        dispatch({
          type: CREATE_TODO_DATA_FAIL,
          payload: {
            dealError: err
          }
        });
      });
  };
}
export function editTodoApiSingleData(editId: any, editTitle: any, editStatus: any) {
  return (dispatch: Dispatch) => {
    const body: any = {
      title: editTitle,
      status: editStatus
    };
    axios
      .put(`${base_url}/todos/${editId}`, body)
      .then((json) => {
        dispatch({
          type: UPDATE_TODO_DATA_SUCCESS,
          payload: {
            todoData: json?.data
          }
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_TODO_DATA_FAIL,
          payload: {
            todoError: err
          }
        });
      });
  };
}
export function deleteTodoApiData(todo_id: any) {
  return (dispatch: Dispatch) => {
    const authJson = localStorage.getItem('@auth');
    const authdata = authJson !== null ? JSON.parse(authJson) : '{}';
    axios
      .delete(`${base_url}/todos/${todo_id}`, {
        headers: {
          Authorization: `Bearer ${authdata?.token}`
        }
      })
      .then((json) => {
        dispatch({
          type: DELETE_DATA_SUCCESS,
          payload: {
            todoData: json?.data
          }
        });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_DATA_FAIL,
          payload: {
            todoError: err
          }
        });
      });
  };
}
export function getTodoSinlgeApiData(todo_id: any) {
  return (dispatch: Dispatch) => {
    const authJson = localStorage.getItem('@auth');
    const authdata = authJson !== null ? JSON.parse(authJson) : '{}';
    axios
      .get(`${base_url}/todos/${todo_id}`, {
        headers: {
          Authorization: `Bearer ${authdata?.token}`
        }
      })
      .then((json) => {
        dispatch({
          type: GET_SINGLE_TODO_DATA_SUCCESS,
          payload: {
            todoData: json?.data
          }
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SINGLE_TODO_DATA_FAIL,
          payload: {
            todoError: err
          }
        });
      });
  };
}
