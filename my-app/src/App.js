import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import { ThemeProvider } from 'styled-components';
import theme from './theme/index';

import LoginForm from './Components/LoginForm';
import ProfileForm from './Components/ProfileForm';
import OwnerForm from './Components/OwnerForm';
import RenterForm from './Components/RenterForm';


import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/createNewUser" component={ProfileForm} />
          <PrivateRoute exact path="/owner" component={OwnerForm} />
          <PrivateRoute exact path="/renter" component={RenterForm} />
        </Switch>
        </div>
      </Router>
      </ThemeProvider>
  );
}

export default App;


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
