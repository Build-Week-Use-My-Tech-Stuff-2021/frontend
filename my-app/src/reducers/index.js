import {FETCH_IMAGE_FAIL, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_START, FETCH_IMAGE_SEARCH, ON_INPUT_CHANGE } from '../actions/index';

export const initialState = {
    pokemonImages: [],
    findPokemon: '',
    error: '', 
    isFetching: true,
    userInput: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case(FETCH_IMAGE_START):
            return({
                ...state,
                isFetching: true, 
                error: '',
                findPokemon: '',
        })
        case(FETCH_IMAGE_SUCCESS):
            return({
                ...state, 
                error: '',
                pokemonImages: action.payload,
              
        })
        case(FETCH_IMAGE_SEARCH):
        return({
            ...state, 
            findPokemon: action.payload,
            error: '',
            pokemonImages: [...state.pokemonImages, action.payload],
            userInput: '',
    })
        case(FETCH_IMAGE_FAIL):
            return({
                ...state, 
                error: action.payload
            })
        case(ON_INPUT_CHANGE):
            return({
                ...state, 
                userInput: action.payload,
            })
        default: 
            return state;
    }
}