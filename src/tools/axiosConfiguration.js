import axios from 'axios';

export const axiosDefault = axios.create({baseURL: 'https://findfalcone.herokuapp.com/'})

export const config = {
    headers: {
        Accept: 'application/json'
    }
}
