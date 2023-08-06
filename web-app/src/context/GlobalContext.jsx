import { createContext, useContext, useReducer, useState } from "react";
import globalReducer from "./reduces/GlobalReducer";
import { ADD_TASK, DARK_THEME, LOGIN, LOGOUT, WHITE_THEME } from "./actions";
import { getTasks } from "../services/MockService"
import { AuthProvider } from "./AuthContext";
import { indigo, lightBlue } from "@mui/material/colors";

export const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
    const whiteTheme = {}
    const darkTheme = {
        palette: {
            mode: 'dark',
            primary: indigo,
            secondary: lightBlue,
        },
    }
    const initialState = {
        tasks: getTasks(),
        theme: darkTheme
    };

    const [state, dispatch] = useReducer(globalReducer, initialState);

    function addTask(task) {
        dispatch({
            type: ADD_TASK,
            payload: { ...task, id: v4(), done: false },
        });
    }

    function changeToDarkTheme() {
        dispatch({
            type: DARK_THEME,
            payload: darkTheme,
        });
    }

    function changeToWhiteTheme() {
        dispatch({
            type: WHITE_THEME,
            payload: whiteTheme,
        });
    }

    return (
        <GlobalContext.Provider value={{
            tasks: state.tasks,
            theme: state.theme,
            addTask,
            changeToDarkTheme,
            changeToWhiteTheme
        }}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </GlobalContext.Provider>
    );
};


