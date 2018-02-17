import axios from 'axios';

export const axiosInstance = axios.create({baseURL: 'https://findfalcone.herokuapp.com/'})

const config = {
    headers: {
        Accept: 'application/json'
    }
}


export function consumeApi(axios) {
    return {
        requestTokenToServer: () => axiosInstance.post('token', null, config),
        requestPlanetsOrVehiclesServer: (endPoint) => axiosInstance.get(endPoint)
    }
}
