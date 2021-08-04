import React from 'react'
import { Link, NavLink, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {cerrarSesionAccion} from '../redux/userDucks'


const NavBar = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const cerrarSesion = () => {
        dispatch(cerrarSesionAccion())
        history.push('/login')
    }
   
    return (
        <div className="navbar navbar-dark bg-dark mb-5">
            <Link to="/" className="navbar-brand">
                App Pokemon
            </Link>
            <div className="d-flex">
                <NavLink className="btn btn-dark mr-2" to="/" exact>
                    Inicio
                </NavLink>
                <NavLink className="btn btn-dark mr-2" to="/login" exact>
                    Login
                </NavLink>
                <button 
                className="btn btn-dark mr-2"
                onClick={() => dispatch(cerrarSesion())}
                >Cerrar Sesion</button>

            </div>
        </div>
    )
}

export default NavBar
