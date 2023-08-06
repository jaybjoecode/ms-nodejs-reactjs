import { LOGIN, LOGOUT } from "../actions";

export default function authReducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        tasks: [...state.isAuthenticated, action.payload],
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: [...state.isAuthenticated, action.payload],
      };

    default:
      return state;
  }
}