import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { LOGIN, LOGOUT } from "./actions";
import authReducer from "./reduces/AuthReducer";

export const AuthContext = createContext()

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setToken(localStorage.setItem('token'))
        }
    }, [])

    const initialState = {
        isAuthenticated: token,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    function login(token) {
        localStorage.setItem('token', token)
        dispatch({
            type: LOGIN,
            payload: { isAuthenticated: true },
        });
    }

    function logout() {
        localStorage.removeItem('token')
        dispatch({
            type: LOGOUT,
            payload: { isAuthenticated: false },
        });
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated: state.isAuthenticated,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

