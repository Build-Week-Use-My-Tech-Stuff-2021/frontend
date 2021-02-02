import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPokemon, onInputChange, searchPokemon } from '../actions/index';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
// import styled from 'styled-components';
import OwnerList from './OwnerList';

// const LogOutDiv = styled.div`
//  text-align: center;
//  padding: 4%4%;
//     button{
//       background: ${(props) => props.theme.black};
//       font-size: 1.3em;
//       border-radius: 3px;
//       border: 2px solid ${(props) => props.theme.black};
//       margin: 0 1em;
//       padding: 0.25em 1em;
//       color: ${(props) => props.theme.tertiaryColor}; 
//     &:hover {
//       transform: scale(1.1);
//       transition: all 0.5s ease-in-out;
//     }
//     transition: all 0.5s ease-in-out;
//     }
// `;

const OwnerForm = ({getPokemon, onInputChange, searchPokemon, userInput}) => {

  const history= useHistory();

  const handleSubmit = e => {
      e.preventDefault();
      searchPokemon(userInput);
    }

  function handleClick() {
    history.push("/addProduct")
  }

  const logOut2 = (e) => { 
    axiosWithAuth()
    .get("/logout")
    .then((res) => {
      console.log(res.data)
      })
    history.push('/logout')
    }

  useEffect(() => {
    getPokemon()
    }, [getPokemon])


  
  return (
    <div>
      <div className="App">
        <h1>Welcome Back Owner</h1>
        <form onSubmit={handleSubmit}>
          <label>Search All Available Items
            <input 
              type="text"
              onChange={onInputChange} 
              value={userInput} 
              />
          </label>
          <button>Find</button>
        </form>
        <h3>Have a new item to rent?</h3>
        <button type="button" onClick={handleClick}>Add</button>
        {/* <LogOutDiv> */}
          <button className="logout" onClick={logOut2}>Log Out</button>
        {/* </LogOutDiv> */}
      </div>  
      <div>
      <OwnerList />
      </div>
      </div>
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
