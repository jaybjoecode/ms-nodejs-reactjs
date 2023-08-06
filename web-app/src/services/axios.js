import axios from "axios";
import { SERVER_URL } from "../config";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const instance = axios.create({
    baseURL: SERVER_URL,
    withCredentials: false,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: 'application/json',
        ContentType: 'application/json',
    }
});

const AxiosInterceptor = ({ children }) => {

    const navigate = useNavigate();

    useEffect(() => {

        const resInterceptor = response => {
            return response;
        }

        const errInterceptor = error => {

            if (error.response.status === 401) {
                navigate('/login');
            }

            return Promise.reject(error);
        }


        const interceptor = instance.interceptors.response.use(resInterceptor, errInterceptor);

        return () => instance.interceptors.response.eject(interceptor);

    }, [navigate])

    return children;
}


export default instance;
// export { AxiosInterceptor }

// React hooks in Axios interceptors
// https://dev.to/arianhamdi/react-hooks-in-axios-interceptors-3e1h

// Axios Interceptors with React (Refresh token logic)
// Interceptors are methods which are triggered before or after the main method
// https://lightrains.com/blogs/axios-intercepetors-react/

// Last option
// How to use axios interceptors in React JS
// https://pak-anonymous.vercel.app/axios-interceptor-in-react