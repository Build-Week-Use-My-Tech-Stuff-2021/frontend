// import axios from 'axios';
// import axios from 'axios';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

export const FETCH_IMAGE_START = "FETCH_IMAGE_START";
export const FETCH_IMAGE_SUCCESS = "FETCH_IMAGE_SUCCESS";
export const FETCH_IMAGE_FAIL = "FETCH_IMAGE_FAIL";
export const FETCH_IMAGE_SEARCH = "FETCH_IMAGE_SEARCH";
export const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";

export const getPokemon = () => dispatch => {
    dispatch({type: FETCH_IMAGE_START})
    axiosWithAuth()
        .get(`/api/techstuff/items`)
        .then((res)=> {
            console.log(res.data)
            // dispatch({type: FETCH_IMAGE_SUCCESS, payload: res.data.results})
        })
        .catch((err) => {
            dispatch({type: FETCH_IMAGE_FAIL, payload: err})
        })

}

export const searchPokemon = (value) => dispatch => {
    dispatch({type: FETCH_IMAGE_START})
    axiosWithAuth   
        .get(`/api/techstuff/${value}`)
        .then((res)=> {
            console.log(res)
            // dispatch({type: FETCH_IMAGE_SEARCH, payload: res.data})
        })
        .catch((err) => {
            dispatch({type: FETCH_IMAGE_FAIL, payload: err})
        })
}

export const onInputChange = e => {
    return{ type: ON_INPUT_CHANGE, payload: e.target.value}
}