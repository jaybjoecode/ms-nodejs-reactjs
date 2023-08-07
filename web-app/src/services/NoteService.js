import axios from './axios'
import { toast } from 'react-hot-toast'
import { SERVER_URL } from '../config'

const API = `${SERVER_URL}/api`

export async function getPublicAllNotes() {
    try {
        return await axios.get(`${API}/public/notes`)
    } catch (error) {
        toast.error(error.message)
        return await Promise.resolve({ data: [] })
    }
}

export async function getAllNotes() {
    try {
        return await axios.get(`${API}/notes`)
    } catch (error) {
        toast.error(error.message)
        return await Promise.resolve({ data: [] })
    }
}

export function getNote(id) {
    return axios.get(`${API}/notes/${id}`)
}

export function createNote(data) {
    return axios.post(`${API}/notes`, data)
}

export function updateNote(id, data) {
    return axios.put(`${API}/notes/${id}`, data)
}

export function deleteNote(id) {
    return axios.delete(`${API}/notes/${id}`)
}

// export function getExample() {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then(data => console.log(data.data))
//         .catch(error => console.log(error));
// }

