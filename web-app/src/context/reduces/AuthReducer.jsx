import { LOGIN, LOGOUT } from "../actions";

export default function authReducer(state, action) {
  console.log('payload', action.payload)
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };

    default:
      return state;
  }
}