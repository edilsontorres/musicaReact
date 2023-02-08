import axios from "axios";

export const api = axios.create({
    baseURL:'https://localhost:5027',
    headers: {'Access-Control-Allow-Origin' : '*', 'Content-Type' : 'application/json'}
})