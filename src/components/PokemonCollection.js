import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  const pokemonCards = pokemons.map(pokemon => (
    <PokemonCard
      key={pokemon.id}
      pokemons={pokemon}
    />
  ));

  return (
    <Card.Group itemsPerRow={6}>{pokemonCards}</Card.Group>
  );
}

export default PokemonCollection;
