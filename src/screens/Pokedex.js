import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PokemonList } from '../components';
import { usePokemons } from '../hooks';

export default function Pokedex() {
  const { pokemons, nextPage, hasMore } = usePokemons();

  return (
    <SafeAreaView>
      <PokemonList hasMore={hasMore} loadMore={nextPage} pokemons={pokemons} />
    </SafeAreaView>
  );
}
