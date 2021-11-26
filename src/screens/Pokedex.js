import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { getPokemonsApi, getPokemonDetailsApi } from '../api/pokemon';
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
