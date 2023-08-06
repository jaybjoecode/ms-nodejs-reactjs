import axios from './axios'
import { SERVER_URL } from '../config'

const AUTH = `${SERVER_URL}/auth`

export function validate() {
    return axios.get(`${AUTH}/validate`)
}

export function signUp(data) {
    return axios.post(`${AUTH}/register`, data)
}

export function signIn(data) {
    return axios.post(`${AUTH}/login`, data)
}
