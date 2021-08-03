import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {detallesPokemon} from '../redux/pokeDucks'


function Detalles() {
    const dispatch = useDispatch()
    const pokemon = useSelector(pokemon => pokemon.pokemones.unPokemon)
    console.log(pokemon)

    React.useEffect(()=> {
        const fetchData = () => {
            dispatch(detallesPokemon())
        }
        fetchData()

    }, [dispatch])

    return pokemon ?(
        <div className='card mt-4 text-center'>
            <div className="card-body">
                <img src={pokemon.foto} alt="pokemon" className="img-fluid"/>
                <div className="card-title text-uppercase">{pokemon.nombre}</div>
                <p className="card-text">Alto: {pokemon.alto} | Ancho: {pokemon.ancho}</p>

            </div>
        </div>
    ): null
}

export default Detalles