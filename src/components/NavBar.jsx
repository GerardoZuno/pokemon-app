import React from 'react'
import { Link, NavLink, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { cerrarSesionAccion} from '../redux/userDucks'


const NavBar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const activo =useSelector(store => store.usuario.activo)
    //console.log(activo)

    const cerrarSesion =  () => {
        try{
            dispatch( cerrarSesionAccion())
            history.push('/login')
        } catch(err){
            console.log(err)
        }       
    }
   
    return (
        <div className="navbar navbar-dark bg-dark mb-5">
            <Link to="/" className="navbar-brand">
                App Pokemon
            </Link>
            <div className="d-flex">

                {
                    activo ?
                        (<>
                          <NavLink className="btn btn-dark mr-2" to="/" exact>Inicio</NavLink>
                          <button className="btn btn-dark mr-2" onClick={() => (cerrarSesion())}
                          >Cerrar Sesion</button>
                       </>) :  <NavLink className="btn btn-dark mr-2" to="/login" exact> Login </NavLink>

                }
               
                

            </div>
        </div>
    )
}

export default NavBar
