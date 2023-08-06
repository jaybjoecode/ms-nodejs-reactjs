import { ADD_TASK, DARK_THEME, WHITE_THEME } from "../actions";

export default function globalReducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DARK_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case WHITE_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
}