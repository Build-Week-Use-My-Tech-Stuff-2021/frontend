import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import { getPokemon, onInputChange, searchPokemon } from './actions/index';

import LoginForm from './Components/LoginForm';
import ProfileForm from './Components/ProfileForm';
import OwnerForm from './Components/OwnerForm';
import RenterForm from './Components/RenterForm';
// import axios from 'axios';

import './App.css';

function App({getPokemon, onInputChange, userInput, searchPokemon}) {



  const handleSubmit = e => {
      e.preventDefault();
      searchPokemon(userInput);
    }

  useEffect(() => {
    getPokemon()
    }, [getPokemon])
  
  return (
      <Router>
        <div className="App">
          <h1>Working</h1>
          <form onSubmit={handleSubmit}>
            <label>Search:
              <input onChange={onInputChange} value={userInput} />
            </label>
            <button>Find</button>
          </form>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/createNewUser" component={ProfileForm} />
          <PrivateRoute exact path="/owner" component={OwnerForm} />
          <PrivateRoute exact path="/renter" component={RenterForm} />
        </Switch>
        </div>
      </Router>
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
export default connect(mapStateToProps, {getPokemon, onInputChange, searchPokemon})(App);


  // const [pokemonList, setPokemonList] = useState([]);

  // const getPokemonList = () => {
  //   axios
  //     .get('https://pokeapi.co/api/v2/pokemon/1')
  //     .then(res => {
  //       console.log(res)
  //       setPokemonList(res.data.abilities.ability)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  // useEffect(() => {
  //   getPokemonList();
  // }, []);
 // const handleSubmit = e => {
  //   e.preventDefault();
  //   getPokemon(userInput);
  // }
