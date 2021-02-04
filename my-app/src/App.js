import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import { ThemeProvider } from "styled-components";
import theme from "./theme/index";

import LoginForm from "./Components/LoginForm";
import NewUserProfileForm from "./Components/NewUserProfileForm";
import OwnerForm from "./Components/OwnerForm";
import RenterForm from "./Components/RenterForm";
import AddTechProduct from "./Components/AddTechProduct";
import LogOut from "./Components/LogOut";
import RequestReceived from "./Components/RequestReceived";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/createNewUser" component={NewUserProfileForm} />
            <Route exact path="/owner" component={OwnerForm} />
            <Route exact path="/renter" component={RenterForm} />
            <PrivateRoute exact path="/addProduct" component={AddTechProduct} />
            <PrivateRoute exact path="/logout" component={LogOut} />
            <Route exact path="/requestItem" component={RequestReceived} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
