import { useState, useEffect } from 'react';
import { getPokemonByIdApi } from '../api/pokemon';

const usePokemon = (id) => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    getPokemonByIdApi(id)
      .then(data => setPokemon(data));
  }, [id]);
  return { pokemon };
};

export default usePokemon;
