import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPokemon, onInputChange, searchPokemon } from '../actions/index';
import {axiosWithAuth} from '../helpers/axiosWithAuth'
import styled from 'styled-components';
import OwnerList from './OwnerList';

const AppDiv = styled.div`
  
      &{
        display: flex;
        justify-content: center;
        /* align-items: center; */
        flex-direction: column;
        background: pink;
        
      }
      .App{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        background: blue;

      }
      .App>*{
        margin: 1%;
      }
      form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        background: green;
      }
      h1{
        font-size: 3em;
      }
`
const ItemsDiv = styled.div`
.items{
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  /* align-items: center; */
  flex-wrap: wrap;
  background: yellow;


}

`


const RenterForm = ({getPokemon, onInputChange, searchPokemon, userInput}) => {

  const history = useHistory();

  const handleSubmit = e => {
      e.preventDefault();
      searchPokemon(userInput);
    }

    const logOut2 = (e) => { 
      axiosWithAuth()
      .get("/logout")
      .then((res) => {
        console.log(res.data)
        })
      history.push('/logout')
      }

  // function handleClick() {
  //   history.push("/addProduct")
  // }

  useEffect(() => {
    getPokemon()
    }, [getPokemon])
  
  return (
    
      <AppDiv>
      <div className="App">
        <h1>Welcome Back Renter</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <h3>Search All Available Items</h3>
            <input 
              type="text"
              onChange={onInputChange} 
              value={userInput} 
              />
          </label>
          <button>Find</button>
        </form>
        {/* <LogOutDiv> */}
          <button className="logout" onClick={logOut2}>Log Out</button>
        {/* </LogOutDiv> */}
      </div>  
      <div className="items">
        <OwnerList /> 
      </div>
      </AppDiv>
      
    
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
export default connect(mapStateToProps, {getPokemon, onInputChange, searchPokemon})(RenterForm);
