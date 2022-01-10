import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [filterCards, setFilterCards] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(r => r.json())
      .then(pokemons => setPokemons(pokemons))
  }, []);

  function addPokemon(newPokemon) {
    setPokemons([ ...pokemons, newPokemon]);
  }

  const filteredCards = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(filterCards.toLowerCase())
  });
  

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search filterCards={filterCards} onFilter={setFilterCards} />
      <br />
      <PokemonCollection pokemons={filteredCards} />
    </Container>
  );
}

export default PokemonPage;
