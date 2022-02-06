import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Pokemon.css";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemon([data]));
    console.log(pokemon);
  }, []);

  return (
    <div className="pokemon-details">
      {pokemon.map((poke) => (
        <div key={poke.id}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              poke.id
            }.png`}
            alt={poke.name}
          />
          <p>
            {poke.name}
            <span>{`#${poke.id}`}</span>
          </p>
          <div className="types">
            {poke.types.map((type, index) => (
              <p key={index} className="type">
                {type.type.name}
              </p>
            ))}
          </div>
          <div className="moves">
            <p>list of moves</p>
            <div className="moves-flex">
              {poke.moves.map((move, index) => (
                <p key={index} className="move">
                  {move.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pokemon;
