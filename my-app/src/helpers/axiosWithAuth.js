import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon',
        headers: {
            Authorization: token
        }
    });
}