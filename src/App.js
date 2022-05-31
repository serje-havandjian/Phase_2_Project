import React from 'react';
import CreateProfile from './CreateProfile';
import {Route, Switch} from "react-router-dom"
import HomePage from './HomePage';
import NavBar from './NavBar';
import MyProfile from "./MyProfile"
import About from './About';
import Chatroom from "./Chatroom"


function App() {
  return (
    <div> 
        <Switch>
          <Route exact path = "/">
              <CreateProfile />
          </Route>
          <Route exact path = "/HomePage">
            <HomePage />
          </Route>
          <Route exact path = "/MyProfile">
            <MyProfile />
          </Route>
          <Route exact path = "/About">
            <About />
          </Route>
          <Route exact path = "/Chatroom">
            <Chatroom />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
