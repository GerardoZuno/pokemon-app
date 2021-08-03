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
    <div>
      <h2>lista de pokemones</h2>

      {pokemones.length === 0 && (
        <button className="" onClick={() => dispatch(obternerPokemonesPage1())}>
          Get Pokemones
        </button>
      )}

      {next && (
        <button className="" onClick={() => dispatch(obternerPokemonesNext())}>
          Next Pokemons
        </button>
      )}
      {previous && (
        <button className="" onClick={() => dispatch(obternerPokemonesPrev())}>
          Previous Pokemons
        </button>
      )}

      <ul>
        {pokemones.map((item, index) => (
          <li key={index}>
            {item.name} - {item.url}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokemones;
