import {
  AUTH_GET_DATA_SUCCESS,
  AUTH_GET_DATA_FAIL,
  REGISTER_GET_DATA_SUCCESS,
  REGISTER_GET_DATA_FAIL
} from '../reduxTypes/index';

const initialState = {
  registerData: [],
  error: ''
};

function authDataReducer(state = initialState, action: any) {
  switch (action.type) {
    case AUTH_GET_DATA_SUCCESS:
      return { ...state, authData: action.payload?.loginData };
    case AUTH_GET_DATA_FAIL:
      return { ...state, authData: [], error: action?.payload?.response?.data?.error };
    default:
      return state;
  }
}
function authRegisterDataReducer(state = initialState, action: any) {
  switch (action.type) {
    case REGISTER_GET_DATA_SUCCESS:
      return { ...state, registerData: action.payload?.registerData };
    case REGISTER_GET_DATA_FAIL:
      return { ...state, registerData: [], error: action?.payload?.response?.data?.error };
    default:
      return state;
  }
}
export { authDataReducer, authRegisterDataReducer };
