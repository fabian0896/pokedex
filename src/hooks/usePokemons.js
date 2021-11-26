import { useCallback, useEffect, useState } from 'react';
import { getPokemonsApi, getPokemonDetailsApi } from '../api/pokemon';

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  const loadPokemons = async (nextUrl) => {
    const res = await getPokemonsApi(nextUrl);
    const promises = res.results.map(p => getPokemonDetailsApi(p.url));
    const pokemonsRes = await Promise.all(promises);
    const pokemonsFormat = pokemonsRes.map(p => ({
      id: p.id,
      name: p.name,
      type: p.types[0].type.name,
      order: p.order,
      image: p.sprites.other['official-artwork'].front_default,
    }));
    setPokemons([...pokemons,...pokemonsFormat]);
    setNext(res.next);
    setHasMore(Boolean(res.next));
    console.log(pokemonsFormat);
  };


  useEffect(() => {
    loadPokemons();
  }, []);

  const nextPage = useCallback(async () => {
    await loadPokemons(next);
  }, [next]);

  return {
    pokemons,
    nextPage,
    hasMore
  };
}

export default usePokemons;