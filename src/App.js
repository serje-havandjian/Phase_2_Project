import React, {useState} from 'react';
import CreateProfile from './CreateProfile';
import {Route, Switch} from "react-router-dom"
import HomePage from './HomePage';
import MyProfile from "./MyProfile"
import About from './About';
import Chatroom from "./Chatroom"


function App() {

  const [currentUser, setCurrentUser] = useState({})



  return (
    <> 
        <Switch>
          <Route exact path = "/">
              <CreateProfile setCurrentUser={setCurrentUser}/>
          </Route>
          <Route exact path = "/HomePage">
            <HomePage />
          </Route>
          <Route exact path = "/MyProfile">
            <MyProfile currentUser={currentUser} />
          </Route>
          <Route exact path = "/About">
            <About />
          </Route>
          <Route exact path = "/Chatroom">
            <Chatroom />
          </Route>
        </Switch>
    </>
  );
}

export default App;
