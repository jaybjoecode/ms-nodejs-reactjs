import axios from 'axios'
import * as dotenv from 'dotenv';
dotenv.config();

const AUTH_SERVER = process.env.AUTH_SERVER;

export async function getUsersFromAuth(ids) {
    const response = await axios.post(`${AUTH_SERVER}/api/users`, {ids: ids})

    return response.data;
};