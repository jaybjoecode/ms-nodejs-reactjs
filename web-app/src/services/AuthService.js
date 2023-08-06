import axios from './axios'
import { SERVER_URL } from '../config'

const SERVER_URL = 'http://localhost:5000'
const AUTH = `${SERVER_URL}/auth`

export function validate() {
    return axios.get(`${AUTH}/validate`)
}

export function register(data) {
    return axios.post(`${AUTH}/notes`, data)
}

export function login(data) {
    return axios.post(`${AUTH}/notes`, data)
}
