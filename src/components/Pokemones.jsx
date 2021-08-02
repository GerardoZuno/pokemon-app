import React from "react";
import { useDispatch, useSelector } from "react-redux";
//useDispach sirve para acciones
//useSelector sirve para fijar
import {
  obternerPokemonesPage1,
  obternerPokemonesPage2,
} from "../redux/pokeDucks";

function Pokemones() {
  const dispatch = useDispatch();
  const pokemones = useSelector((store) => store.pokemones.array);
  //console.table(pokemones);

  return (
    <div>
      lista de pokemones
      <button className="" onClick={() => dispatch(obternerPokemonesPage1())}>
        Get Pokemones
      </button>
      <button className="" onClick={() => dispatch(obternerPokemonesPage2(20))}>
        Next Pokemons
      </button>
      <ol>
        {pokemones.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default Pokemones;
