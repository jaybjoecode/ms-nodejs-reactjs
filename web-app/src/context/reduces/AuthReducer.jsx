import { LOGIN, LOGOUT } from "../actions";

export default function authReducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}