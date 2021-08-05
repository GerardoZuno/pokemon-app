import React from 'react'
import Pokemones from './components/Pokemones'
import Login from './components/Login';
import NavBar from './components/NavBar';
import Perfil from './components/Perfil';

import {auth } from './firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect  
} from "react-router-dom";


function App() {

const [firebaseUser, setFirebaseUser] = React.useState(false)

React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged(user => {
        console.log(user)
        if(user){
            setFirebaseUser(user)
        }else{
            setFirebaseUser(null)
        }
    })
    }
    fetchUser()
   
}, [])

const RutaPrivada = ({component, path, ...rest}) => {
  if(localStorage.getItem('usuario')){
    const usuarioStorage = JSON.parse(localStorage.getItem('usuario'))
    if(usuarioStorage.uid === firebaseUser.uid){
     return <Route exact path='/' component={component} {...rest}/>
    }else{
      return <Redirect to='/login' {...rest}/>
    }
  }else{
     return <Redirect to='/login' {...rest}/> 

  }
}


  return firebaseUser !== false ?(
      <Router>
      <div className="container mt-3">
        <NavBar />
       <Switch>
         <RutaPrivada exact path='/' component={Pokemones}/>
         <RutaPrivada exact path='/perfil' component={Perfil}/>
         <Route exact path='/login' component={Login}/>

       </Switch> 
      </div>
      </Router>
  ): (<div>Cargando..</div>)
}

export default App;
