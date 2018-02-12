import axios from 'axios';

export const baseURL = axios.create({baseURL: 'https://findfalcone.herokuapp.com/'})

export const config = {
    headers: {
        Accept: 'application/json'
    }
}
