import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { LOGIN, LOGOUT } from "./actions";
import authReducer from "./reduces/AuthReducer";

export const AuthContext = createContext()

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [initialState, setInitialState] = useState({
        isAuthenticated: (localStorage.getItem('token') ? true : false),
        user: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('user')) : {}
    });

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setInitialState({
                isAuthenticated: true,
                user: state.user
            });
        }


    }, [])

    const [state, dispatch] = useReducer(authReducer, initialState);


    function login(token, user) {
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        dispatch({
            type: LOGIN,
            payload: { isAuthenticated: true, user: user },
        });
    }

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        dispatch({
            type: LOGOUT,
            payload: { isAuthenticated: false },
        });
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

