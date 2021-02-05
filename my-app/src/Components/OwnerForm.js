import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { getPokemon } from '../actions/index';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import styled from 'styled-components';
import OwnerList from './OwnerList';

import banner from '../images/banner.jpg';

const Banner1 = styled.div`
  max-width: 50%;
  max-height:40%;
`;

const AppDiv = styled.div`
      &{
        display: flex;
        justify-content: center;
        align-items: center; 
        flex-direction: column;
        flex-wrap: wrap;
        background: ${(props) => props.theme.tertiaryColor};
        margin: 0;
      }
      .App{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        background: ${(props) => props.theme.secondaryColor};
        margin: 0;
        padding: 0;
      }
      .App>*{
        margin: 1%;
      }

      h1{
        font-size: 3em;
        color: ${(props) => props.theme.white};
      }
      h3{
        font-size: 1.3em;
        color: ${(props) => props.theme.white};
      }
      button{
      text-align: center;
      padding: 4%4%;
      background: ${(props) => props.theme.white};
      font-size: 1.3em;
      border-radius: 3px;
      border: 2px solid ${(props) => props.theme.secondaryColor};
      margin: 0 1em;
      padding: 0.25em 1em;
      color: ${(props) => props.theme.black}; 
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
    }

`
const ItemsDiv = styled.div`
  
  /* margin: 0;
  padding: 0; */
  display: flex;  
  flex-direction: column; 
  flex-wrap: wrap; 
  align-items: flex-start;
  margin: 0;
  padding: 0;
  background: ${(props) => props.theme.tertiaryColor};
  
`

const OwnerForm = ({getPokemon}) => {

  const history= useHistory();

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
    <AppDiv>
      <div className="App">
      <Banner1 name="banner">
        <img src={banner} alt="circuit board"></img>
      </Banner1>
        <h1>Use My Tech Stuff</h1>
        <h3>Have a new item to rent?</h3>
        <Link to="/addProduct">
        <button type="button">Add</button>
        </Link>
          <button className="logout" onClick={logOut2}>Log Out</button>
          </div>
          </AppDiv>
      <ItemsDiv>
        <OwnerList />
      </ItemsDiv>
     </div>
    
  );
}
const mapStateToProps = state => {
  return{
    error: state.error,
    isFetching: state.isFetching,
    pokemonImages: state.pokemonImages,
    searchPokemon: state.searchPokemon,
  }
}
export default connect(mapStateToProps, {getPokemon})(OwnerForm);
