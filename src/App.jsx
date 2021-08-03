import React from 'react'
import Pokemones from './components/Pokemones'
import Login from './components/Login';
import NavBar from './components/NavBar';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {

  return (
      <Router>
      <div className="container mt-3">
        <NavBar />
       <Switch>
         <Route exact path='/' component={Pokemones}/>
         <Route exact path='/login' component={Login}/>

       </Switch> 
      </div>
      </Router>
  );
}

export default App;
