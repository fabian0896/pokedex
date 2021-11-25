import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getPokemonsApi, getPokemonDetailsApi } from '../api/pokemon';
import { PokemonList } from '../components';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    const loadPokemons = async () => {
      const res = await getPokemonsApi();
      const promises = res.results.map(p => getPokemonDetailsApi(p.url));
      const pokemonsRes = await Promise.all(promises);
      const pokemonsFormat = pokemonsRes.map(p => ({
        id: p.id,
        name: p.name,
        type: p.types[0].type.name,
        order: p.order,
        image: p.sprites.other['official-artwork'].front_default,
      }));
      setPokemons(pokemonsFormat);
      console.log(pokemonsFormat);
    };
    loadPokemons();
  }, []);

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
}
