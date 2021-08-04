import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ingresoUsuarioAccion } from '../redux/userDucks'
import { useHistory } from 'react-router-dom'


const Login = () => {

    const history = useHistory()
    const loading = useSelector(store => store.usuario.loading)
    const active = useSelector(store => store.usuario.active)
    console.log(active)

    const dispatch = useDispatch()
    console.log(history)

    React.useEffect(() => {
        console.log(active)
        if(active){
            history.push('/')
        }

    }, [active, history])



    return (
        <div className='mt-5 text-center'>
            <h3>Ingreso con Google</h3>
            <hr />
            <button 
            className='btn btn-dark'
            onClick={() =>dispatch(ingresoUsuarioAccion())}
            disabled={loading}
            >Acceder</button>
        </div>
    )
}

export default Login
