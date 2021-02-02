import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getPokemon, onInputChange, searchPokemon } from '../actions/index';

// import styled from 'styled-components';
import OwnerList from './OwnerList';



function OwnerForm({getPokemon, onInputChange, userInput, searchPokemon}) {

  const handleSubmit = e => {
      e.preventDefault();
      searchPokemon(userInput);
    }

  useEffect(() => {
    getPokemon()
    }, [getPokemon])
  
  return (
    <React.Fragment>
        <div className="App">
          <h1>Working</h1>
          <form onSubmit={handleSubmit}>
            <label>Search:
              <input onChange={onInputChange} value={userInput} />
            </label>
            <button>Find</button>
          </form>
        </div>  
         <OwnerList /> 
         </React.Fragment>
  );
}
const mapStateToProps = state => {
  return{
    error: state.error,
    isFetching: state.isFetching,
    pokemonImages: state.pokemonImages,
    searchPokemon: state.searchPokemon,
    userInput: state.userInput,
  }
}
export default connect(mapStateToProps, {getPokemon, onInputChange, searchPokemon})(OwnerForm);
