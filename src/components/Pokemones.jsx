import React from "react";
import { useDispatch, useSelector } from "react-redux";
//useDispach sirve para acciones
//useSelector sirve para fijar
import {
  obternerPokemonesPage1,
  obternerPokemonesNext,
  obternerPokemonesPrev,
} from "../redux/pokeDucks";

function Pokemones() {
  const dispatch = useDispatch();
  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);

  //console.table(pokemones);

  return (
    <div className='row'>

       <div className="col-md-6"> 
      <h2>Lista de Pokemones</h2>

      <div className="d-flex justify-content-between">
      {pokemones.length === 0 && (
        <button className="btn btn-dark" onClick={() => dispatch(obternerPokemonesPage1())}>
          Get Pokemones
        </button>
      )}

      {next && (
        <button className="btn btn-dark" onClick={() => dispatch(obternerPokemonesNext())}>
          Next Pokemons
        </button>
      )}
      {previous && (
        <button className="btn btn-dark" onClick={() => dispatch(obternerPokemonesPrev())}>
          Previous Pokemons
        </button>
      )}
      </div>

     

      <ul className='list-group mt-3'>
        {pokemones.map((item, index) => (
          <li key={index} className='list-group-item text-uppercase'>
            {item.name} 
            <button className='btn btn-info btn-sm float-right'>Info</button>
          </li>
        ))}
      </ul>
      </div>
       <div className="col-md-6">
           Detalles
       </div>

    </div>
  );
}

export default Pokemones;
